import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { RouteComponentProps, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { createToken,  } from '@store/commit';
import { RouteName } from '@page/page';
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface ValueType {
    password: string,
    remember: boolean,
    username: string
}

const Login = () => {

    const _history = useHistory();

    const dispatch = useDispatch();

    const onFinish = async (values: ValueType) => {
        dispatch(createToken('token登录'));
            
        _history.replace(RouteName.Index);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex_center w_100 h_100">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input style={{ marginLeft: '10px' }}/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password style={{ marginLeft: '10px' }}/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
