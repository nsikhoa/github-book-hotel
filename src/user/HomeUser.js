import React from 'react'
import {Link} from 'react-router-dom'
// import { useState } from 'react'
import { MetaTags } from 'react-meta-tags' 


export default class HomeUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.loadCategory()
    }

    loadCategory = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json'
            }
        }
        fetch('https://bookhotel-backend.herokuapp.com/api/nologin/locations', requestOptions)
        .then(function(response) {
            return response.json()
        })
        .then((locations) => {
            this.setState({response: locations})
            console.log(locations);
        })
        .catch(function(err) {
            console.log(err)
        })
    }
    
    getInfo = () => {
        const user = JSON.parse(localStorage.getItem('user-info'))
        return user
    }


    render() {
        return (
            <div className='container'>
                <MetaTags>
                    <title>Chào mừng {this.getInfo().name}</title>
                </MetaTags>
                <header>
                    {/* <img className='logo' src='./img/logo.png' /> */}
                    <nav className='nav-link'>
                        <ul className='user-main-nav'>
                            {/* <li className='nav'><Link className='button btnLogin' to="/Login">Đăng nhập</Link></li> */}
                            {/* <li className='nav'><Link className='button btnSignup' to="/Register">Đăng ký</Link></li> */}
                            <li>
                                <a href='#'>{this.getInfo().username}</a>
                                <ul className='sub-nav'>
                                    <li><a href='/profile'>Thông tin cá nhân</a></li>
                                    <li><a href='/history'>Lịch sử đặt phòng</a></li>
                                    <li><a href='/'>Đăng xuất</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="hero-text-box row">
                        <h1 className='h1-subhome'>
                            Find hotel for traveling in Vietnam
                        </h1>
                        <form className='search-form'>
                            <input className='txbPlace' type="text" placeholder="Nhập tên địa điểm cần đặt khách sạn" />
                            <button className='button btnSearch'>Tìm kiếm</button>
                        </form>
                    </div>
                </header>
                <section onLoad={() => {
                        document.querySelector('.loading').classList.add('hidden-loading')
                }}>
                    <p className='row loading'>Loading...</p>
                    <Places data={this.state.response} />
                    {/* <div className='row'>
                        <Images img="./img/Hanoi.jpg" name="Hà Nội" src="/hanoi"/>
                        <Images img="./img/Danang.jpg" name="Đà Nẵng" src="/danang"/>
                        <Images img="./img/Saigon.jpg" name="Sài Gòn" src="/saigon"/>
                    </div>
                    <div className='row'>
                        <Images img="./img/Hue.jpg" name="Huế" src="hue"/>
                        <Images img="./img/Sapa.jpg" name="Sapa" src="sapa"/>
                        <Images img="./img/NhaTrang.jpg" name="Nha Trang" src="nhatrang" />
                    </div> */}
                </section>
                <footer>
                    <div className='row'>
                        <ul className="social-links">
                            <li><a href="#"><ion-icon name="logo-facebook" class="fb"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-twitter" class="twt"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-google" class="gg"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-instagram" class="ins"></ion-icon></a></li>
                        </ul>
                    </div>
                    <div className='row'>
                        <p>
                            Copyright &copy; 2021 by Khoa Nguyen. All rights reserved
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
    
}

class Images extends React.Component {
    render() {
        return (
            <div className='col span-1-of-3 box'>
                <Link to={this.props.src}><img alt='' src={this.props.img} className='image-place' /></Link>
                <p style={{margin: "0"}}>{this.props.name}</p>
            </div>
        )
    }
}

class Places extends React.Component{

    render() {
        return (
            <div className='row'>
                {this.props.data.map(item => {
                    let url = ''
                    switch(item.id) {
                        case 1: 
                            url = '/user/hanoi'
                            break
                        case 2:
                            url = '/user/saigon'
                            break
                        case 25:
                            url = '/user/dalat'
                            break
                        case 26:
                            url = '/user/hue'
                            break
                        case 47:
                            url = '/user/vungtau'
                            break
                        default: 
                            url = '/user/danang'
                    }
                    return <Images key={item.id} img={item.image} name={item.location} src={url}/>
                })}
                
            </div>
            
        )
    }
}

