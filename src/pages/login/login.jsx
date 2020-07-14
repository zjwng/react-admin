import React, { Component } from 'react'
import './login.less'
import logo from '../../images/logo192.png'
import WrappedNormalLoginForm from './LoginForm/LoginForm'

export default class Login extends Component{

    render() {
        return (
            <div className='login'>
                <div className='login-header pos-rel'>
                    <img src={logo} alt="" />
                    <h3 className='white'>React 后台管理系统</h3>
                    <div className='pos-abs w-100 h-100  modal'></div>
                </div>
                <div className='login-content contentFlex'>
                    <div className='loginForm'>
                        <WrappedNormalLoginForm />
                   </div>
                </div>
            </div>
           
        )
    }
}