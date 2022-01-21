import {Link, useNavigate} from 'react-router-dom'
import { MetaTags } from 'react-meta-tags';
import React, { useState } from "react";
import { History } from 'history';

function LoginFormTest() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function login() {
        console.warn(username, password);
        let item = {username, password};
        let result = await fetch("https://bookhotel-backend.herokuapp.com/api/auth/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        if (result.success === false) {
            alert('Sai tên đăng nhập hoặc mật khẩu!')
            document.querySelector('input[name="username"]').value = ""
            document.querySelector('input[name="password"]').value = ""
        } else {
            navigate('/user')
        }
    }

    return (
        <div className='loginform-container'>
            <MetaTags>
                <title>Đăng nhập</title>
            </MetaTags>
            <form className='loginform-form'>
                {/* <img className='image-back' style={{width: '15px', height: '15px'}} src='./img/Back.png' /> */}
                <Link to="/" className='loginform-back'>&larr;</Link>
                <h2>Đăng nhập</h2>
                <input type="text" name="username" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={login} className='btnSignin' type='button'>Đăng nhập</button>
                <div className='no-account'>
                    <span>Bạn chưa có tài khoản?</span> 
                    <Link className='btn-sign' to="/Register" >Đăng ký</Link>
                </div>
                
            </form>
            
        </div>
    )
}

export default LoginFormTest