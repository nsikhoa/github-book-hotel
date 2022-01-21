import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import { MetaTags } from 'react-meta-tags';
    
export default function UpdateProfile() {
    const user = JSON.parse(localStorage.getItem('user-info'))
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [name, setName] = useState('')
    // const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [identification, setIdentification] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();

    async function update() {
        if(name === "") setName(user.name)
        if(email === "") setEmail(user.email)
        if(address === "") setAddress(user.address)
        if(identification === "") setIdentification(user.identification)
        if(phone === "") setPhone(user.phone)
        let raw = {
            "name": name,
            "email": email,
            "address": address,
            "identification": identification,
            "phone": phone
        }
        let auth = "Bearer " + user.token;
        let result = await fetch("https://bookhotel-backend.herokuapp.com/api/v1/user/" + user.id + "/update", {
            method: 'PUT',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(raw)
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result.data))
        alert('Cập nhật thành công')
        navigate('/profile')
    }

    return(
        <div className='register-container'>
            <MetaTags>
                <title>Cập nhật tài khoản</title>
            </MetaTags>
            <form className='register-form'>
                <Link to="/profile" className='register-back'>&larr;</Link>
                <h2>Cập nhật tài khoản</h2>
                <div>
                    <label className='register-label'>Tên đăng nhập</label>
                    <input type="text" name="" placeholder="Tên đăng nhập" value={user.username}/>
                </div>
                <div>
                    <label className='register-label'>Họ và tên</label>
                    <input type="text" name="" placeholder="Họ và tên" defaultValue={user.name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Số điện thoại</label>
                    <input type="text" name="" placeholder="Số điện thoại" defaultValue={user.phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Địa chỉ</label>
                    <input type="text" name="" placeholder="Địa chỉ" defaultValue={user.address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>Email</label>
                    <input type="email" name="" placeholder="Email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label className='register-label'>CMND/CCCD</label>
                    <input type="text" name="" placeholder="CMND/CCCD" defaultValue={user.identification} onChange={(e) => setIdentification(e.target.value)}/>
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
                <button onClick={update} className='btn-signup' type='button'>Cập nhật</button>
            </form>
            
        </div>
    )
}
    