import authEnum from "@/auth/authEnum";
import store from "@/store";
import checkAuth from "@/auth/checkAuth";
import router from "@/router";

const auth = router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  //自动登录
  if (!loginUser || !loginUser.role) {
    //跳转到登录
    await store.dispatch("user/getLoginUser");
  }

  const access = (to?.meta?.access as string) ?? authEnum.NOT_LOGIN;

  //必须登录的
  if (access !== authEnum.NOT_LOGIN) {
    if (!loginUser || loginUser.role || loginUser.role === authEnum.NOT_LOGIN) {
      //跳转到登录界面，登录后再重定向回to的路由
      next(`/user/Login?redirect=${to.fullPath}`);
      return;
    }

    //需要管理员权限查看的
    if (!checkAuth(loginUser, access)) {
      next("/noAuth");
      return;
    }
  }
  //不是必须登录的直接跳转
  next();
});

export default auth;
