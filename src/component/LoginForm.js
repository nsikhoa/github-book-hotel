import {Link} from 'react-router-dom'
import { MetaTags } from 'react-meta-tags';
import React from "react";
import { History } from 'history';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "username": "",
            "password": ""
        }
    }

    setParams = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    login = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization", "Bearer \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJza3NpbmgiLCJpYXQiOjE2NDI0NzE2NjYsImV4cCI6MTY0MjU1ODA2Nn0.W--ARpVVqhfcY_TLokXwuYbwhoS6Ndgh3oC3NE6t-L6mTFs_LQusnKCE9pEmciTCDpYVwT2je6NrxbGasnc-Tw\"");

        var raw = JSON.stringify({
            "username": this.state.username,
            "password": this.state.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://backendbookhotel.herokuapp.com/api/auth/signin", requestOptions)
        .then(response => {
            if (response.ok)
                return response.json()
            throw Error(response.status)
        })
        .then(result => {
            console.log(result)
            localStorage.setItem("token", result.token)
            console.log(this.state);
            if (result.success === false) {
                alert('Wrong answer or password')
                document.querySelector('input[name="username"]').value = ""
                document.querySelector('input[name="password"]').value = ""
            } else {
                alert('Success')
                this.navigate('/user')
            }
        })
        .catch(error => {
            alert("Username or password are wrong")
            console.log('error', error)
        });
    }

    render() {
        
        return (
        
            <div className='loginform-container'>
                <MetaTags>
                    <title>Đăng nhập</title>
                </MetaTags>
                <form className='loginform-form'>
                    {/* <img className='image-back' style={{width: '15px', height: '15px'}} src='./img/Back.png' /> */}
                    <Link to="/" className='loginform-back'>&larr;</Link>
                    <h2>Đăng nhập</h2>
                    <input type="text" name="username" placeholder="Tên đăng nhập" onChange={this.setParams}/>
                    <input type="password" name="password" placeholder="Mật khẩu" onChange={this.setParams} />
                    <button className='btnSignin' type='button' onClick={this.login} >Đăng nhập</button>
                    <div className='no-account'>
                        <span>Bạn chưa có tài khoản?</span> 
                        <Link className='btn-sign' to="/Register" >Đăng ký</Link>
                    </div>
                    
                </form>
                
            </div>
            
        )
    }
    
}
