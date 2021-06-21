import { RouteProps } from 'react-router';

import { lazy } from "react";
// import lazy from '@loadable/component'

const Index = lazy(() => import(/* webpackChunkName: "Index" */ './index/index'));

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './login/login'));

/**
 * 路由名称
 * @description
 *  * Index     ->      首页  
 *  * Login     ->      登录
 */
export enum RouteName {
    Index = '/index',       // 首页
    Login = '/login',       // 登录
}

interface MyRouteProps extends RouteProps {
    title: string;
}

const page: MyRouteProps[] = [
    { path:  ['/', RouteName.Index], component: Index, exact: true, title: '首页' },
    { path:  ['/', RouteName.Login], component: Login, exact: true, title: '登录'  },
];


export default page;