import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import { MetaTags } from 'react-meta-tags';
    
export default function UpdateProfile() {
    const user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token
    // console.log(token);

    const [name, setName] = useState(user.name)
    // const [gender, setGender] = useState('')
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address)
    const [identification, setIdentification] = useState(user.identification)
    const [phone, setPhone] = useState(user.phone)
    const navigate = useNavigate();

    async function update() {
        console.log(address);
        
        let raw = {
            "name": name,
            "email": email,
            "address": address,
            "identification": identification,
            "phone": phone
        }
        let auth = "Bearer " + token;
        let result = await fetch("https://bookhotel-backend.herokuapp.com/api/v1/user/" + user.id + "/update", {
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
        localStorage.setItem("user-info", JSON.stringify(result.data))
        alert('Cập nhật thành công')
        hidden()
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
                    <input type="text" name="" placeholder="Họ và tên" defaultValue={user.name} onChange={(e) => {
                        
                            setName(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Số điện thoại</label>
                    <input type="text" name="" placeholder="Số điện thoại" defaultValue={user.phone} onChange={(e) => {
                        
                            setPhone(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Địa chỉ</label>
                    <input type="text" name="" placeholder="Địa chỉ" defaultValue={user.address} onChange={(e) => {
                        
                            setAddress(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Email</label>
                    <input type="email" name="" placeholder="Email" defaultValue={user.email} onChange={(e) => {
                        
                            setEmail(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>CMND/CCCD</label>
                    <input type="text" name="" placeholder="CMND/CCCD" defaultValue={user.identification} onChange={(e) => {
                        
                            setIdentification(e.target.value)
                    }}/>
                </div>
                <p style={{fontSize: '13px'}}>*Mỗi lần đăng nhập chỉ được cập nhật thông tin một lần</p>
                
                <button onClick={update} className='btn-signup js-btn-save' type='button'>Lưu</button>
            </form>
            
        </div>
    )
}
    
function hidden() {
    document.querySelector('.js-btn-save').classList.add('hidden-loading')
}