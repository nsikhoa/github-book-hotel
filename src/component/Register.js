import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import { MetaTags } from 'react-meta-tags';

export default function Register() {
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    // const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [identification, setIdentification] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();

    async function register() {
        console.warn(username, password);
        let raw = {
            "username": username,
            "name": name,
            "gender": true,
            "email": email,
            "role": [],
            "password": password,
            "address": address,
            "identification": identification,
            "phone": phone
        }
        let result = await fetch("https://bookhotel-backend.herokuapp.com/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(raw)
        })
        result = await result.json();
        localStorage.setItem("user-regis", JSON.stringify(result))
        alert('Đăng ký thành công')
        navigate('/Login')
    }

    return (
        
        <div className='register-container'>
            <MetaTags>
                <title>Đăng ký tài khoản</title>
            </MetaTags>
            <form className='register-form'>
                <Link to="/" className='register-back'>&larr;</Link>
                <h2>Đăng ký tài khoản</h2>
                <div>
                    <label className='register-label'>Tên đăng nhập</label>
                    <input type="text" name="" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label className='register-label'>Họ và tên</label>
                    <input type="text" name="" placeholder="Họ và tên" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Số điện thoại</label>
                    <input type="text" name="" placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Địa chỉ</label>
                    <input type="text" name="" placeholder="Địa chỉ" onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Email</label>
                    <input type="email" name="" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>CMND/CCCD</label>
                    <input type="text" name="" placeholder="CMND/CCCD" onChange={(e) => setIdentification(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Mật khẩu</label>
                    <input type="password" name="" placeholder="Mật khẩu" onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </div>
                <div>
                    <label className='register-label'>Nhập lại mật khẩu</label>
                    <input type="password" name="" placeholder="Nhập lại mật khẩu" onChange={(event) => {
                        setPassword2(event.target.value)
                    }} />
                </div>
                {password !== password2 && <p className='inform-pass'>Mật khẩu không khớp</p>}
                <button onClick={register} className='btn-signup' type='button'>Đăng ký</button>
                <div className='no-account'>
                    <span>Bạn đã có tài khoản?</span> 
                    <Link className='btn-sign' to="/Login" >Đăng nhập</Link>
                </div>
            </form>
            
        </div>
        
    )
}