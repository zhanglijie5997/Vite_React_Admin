import { RouteProps } from 'react-router';

import lazy from '@loadable/component';

const Index = lazy(() => import(/* webpackChunkName: "Index" */ './index/index'));

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './login/login'));

const User = lazy(() => import(/* webpackChunkName: "Login" */ './user/user'));


/**
 * 路由名称
 * @description
 *  * Index     ->      首页  
 *  * Login     ->      登录
 */
export enum RouteName {
    Index = '/',       // 首页
    Login = '/login',       // 登录
    User = '/user'
}

interface MyRouteProps extends RouteProps {
    title: string;
}

const page: MyRouteProps[] = [
    { path:  ['/', RouteName.Index], component: Index, exact: true, title: '首页' },
    { path:  [RouteName.Login], component: Login, exact: true, title: '登录'  },
    { path:  [RouteName.User], component: User, exact: true, title: '用户中心'  },

];


export default page;