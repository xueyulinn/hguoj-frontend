import authEnum from "@/auth/authEnum";

/**
 *
 */
const checkAuth = (loginUser: any, routeAuth = authEnum.NOT_LOGIN) => {
  // 不需要登录就能路由
  const loginUserAccess = loginUser?.userRole ?? authEnum.NOT_LOGIN;

  if (routeAuth === authEnum.NOT_LOGIN) {
    return true;
  }

  // 用户登录才能路由
  if (routeAuth === authEnum.USER) {
    if (loginUserAccess !== authEnum.NOT_LOGIN) {
      return true;
    }
  }

  // 需要管理员权限
  if (routeAuth === authEnum.ADMIN) {
    if (loginUserAccess === authEnum.ADMIN) {
      return true;
    }
  }
};

export default checkAuth;
