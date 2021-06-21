import React, { useEffect } from 'react'
// import { message } from "antd";
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Router from './router/router';
// import Dialog from './components/dialog/dialog';
import { useSelector } from 'react-redux';
import page, { RouteName } from '@page/page';
import Login from '@page/login/login';
import { StateType } from '@store/types';
function App(props: RouteComponentProps) {
    const token = useSelector((state: StateType) => state.TOKEN);
    useEffect(() => {
        // 用户信息不存在跳转登录
        if(!token) {
            props.history.push(RouteName.Login)
        }else {
            // props.history.push(RouteName.Index)
        }
    }, []);
    return (
        <div >
            {/* <Dialog /> */}
            
            {/* <Router {...props}></Router> */}
            <Switch>
                <Route component={Login} path={RouteName.Login} exact/>
                <Route component={Router} path={RouteName.Index} />
            </Switch>
        </div>
    )
}

export default withRouter(App);
