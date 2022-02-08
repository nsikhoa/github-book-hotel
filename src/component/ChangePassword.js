import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import { MetaTags } from 'react-meta-tags';
    
export default function ChangePassword() {
    const user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token
    // console.log(token);

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    async function update() {
        
        let raw = {
            "oldPassword": oldPassword,
            "newPassword": newPassword,
            "confirmPassword": confirmPassword
        }
        let auth = "Bearer " + token;
        let result = await fetch(`https://bookhotel-backend.herokuapp.com/api/v1/user/${user.id}/changepass`, {
            method: 'PUT',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(raw)
        })
        console.log(result);
        result = await result.json();
        alert('Đổi mật khẩu thành công! Vui lòng đăng nhập lại')
        navigate('/')
    }

    return(
        <div className='register-container'>
            <MetaTags>
                <title>Đổi mật khẩu</title>
            </MetaTags>
            <form className='register-form'>
                <Link to="/profile" className='register-back'>&larr;</Link>
                <h2>Đổi mật khẩu</h2>
                <div>
                    <label className='register-label'>Mật khẩu</label>
                    <input type="password" name="" placeholder="Mật khẩu" onChange={(e) => {
                        
                        setOldPassword(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Mật khẩu mới</label>
                    <input type="password" name="" placeholder="Mật khẩu mới" onChange={(e) => {
                        
                        setNewPassword(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Xác nhận mật khẩu</label>
                    <input type="password" name="" placeholder="Xác nhận mật khẩu" onChange={(e) => {
                        
                        setConfirmPassword(e.target.value)
                    }}/>
                </div>
                {newPassword !== confirmPassword && <p className='inform-pass'>Mật khẩu không khớp</p>}
                
                <button onClick={update} className='btn-signup js-btn-save' type='button'>Lưu</button>
            </form>
            
        </div>
    )
}
