import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import { MetaTags } from 'react-meta-tags';

export default function Profile() {

    const user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user.id);
    const navigate = useNavigate();
    let name = user.name;

    return (
        
        <div className='register-container'>
            <MetaTags>
                <title>Thông tin tài khoản</title>
            </MetaTags>
            <form className='register-form'>
                <Link to="/user" className='register-back'>&larr;</Link>
                <h2>Thông tin tài khoản</h2>
                <div>
                    <label className='register-label'>Tên đăng nhập</label>
                    <input type="text" name="" placeholder="Tên đăng nhập" value={user.username} />
                </div>
                <div>
                    <label className='register-label'>Họ và tên</label>
                    <input className='fullname' type="text" name="name" placeholder="Họ và tên" value={user.name}/>
                    {/* <button onClick={() => {
                        document.querySelector('.fullname').value = ""
                    }}></button> */}
                </div>
                <div>
                    <label className='register-label'>Số điện thoại</label>
                    <input type="text" name="" placeholder="Số điện thoại" value={user.phone}/>
                </div>
                <div>
                    <label className='register-label'>Địa chỉ</label>
                    <input type="text" name="" placeholder="Địa chỉ" value={user.address}/>
                </div>
                <div>
                    <label className='register-label'>Email</label>
                    <input type="email" name="" placeholder="Email" value={user.email} />
                </div>
                <div>
                    <label className='register-label'>CMND/CCCD</label>
                    <input type="text" name="" placeholder="CMND/CCCD" value={user.identification} />
                </div>
                
                <button onClick={() => navigate('/update')} className='btn-signup' type='button'>Cập nhật</button>
                
            </form>
            
        </div>
        
    )
}