import React, { Component } from 'react'

export default class LoginForm extends React.Component {

    render() {
        return (
            <div className='flex-col padding-20 bg-w text-center'>
                <h3 className=''>用户登录</h3>
                <input  className='margin-x' type="text" placeholder='admin' />
                <input className='margin-x' type="password" placeholder='密码' />
                <button className='w-100 text-center'>登录</button>
            </div>
        )
    }
}