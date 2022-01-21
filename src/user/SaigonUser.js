import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { MetaTags } from 'react-meta-tags'
import { Component } from 'react/cjs/react.production.min'

export default class Saigon extends React.Component {

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
        fetch('https://bookhotel-backend.herokuapp.com/api/nologin/locations/2/hotels', requestOptions)
        .then(function(response) {
            return response.json()
        })
        .then((hotels) => {
            this.setState({response: hotels})
            console.log(hotels);
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
                    <title>Khách sạn ở Sài Gòn</title>
                </MetaTags>
                <header>
                    <Link to="/user" style={{color: 'white'}} className='loginform-back'>&larr;</Link>
                    {/* <img className='logo' src='./img/logo.png' /> */}
                    <nav className='nav-link'>
                        <ul className='user-main-nav'>
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
                        <H1 />
                    </div>
                </header>
                <section onLoad={() => {
                        document.querySelector('.loading').classList.add('hidden-loading')
                }}>
                    <p className='row loading'>Loading...</p>
                    <Hotels data={this.state.response} />

                    {/* <div className='row'>
                        <Images img="./img/novotel.jpg" name="Novotel Hotel" src='/novotel' />
                        <Images img="./img/saladanangbeach.jpg" name="Sala Danang Beach Hotel" src="/sala"/>
                        <Images img="./img/alacarte.jpg" name="A La Carte Hotel" src="/alacarte" />
                    </div>
                    <div className='row'>
                        <Images img="./img/herriott.jpg" name="The Herriott Hotel & Suite" src="/herriott" />
                        <Images img="./img/gardenhotel.jpg" name="The garden Hotel & Apartment" src="/garden" />
                        <Images img="./img/muongthanh.jpg" name="Muong Thanh Luxury" src="/muongthanh" />
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



function Images(props) {
    let [,,location] = useLocation().pathname.split('/')
    let src = location + props.src
    // console.log(location);
    return (
        <div className='col span-1-of-3 box'>
            <Link to={src} ><img alt='' src={props.img} className='image-place' /></Link>
            <p style={{margin: "0", fontWeight: 'bold'}}>{props.name}</p>
            <div className="room-feature">
                <span className="icon-small">
                    <ion-icon name="location-outline"></ion-icon>
                </span>
                {props.address}
            </div>
            <div className="room-feature">
                <span className="icon-small">
                    <ion-icon name="call-outline"></ion-icon>
                </span>
                {props.phone}
            </div>
        </div>
    )
}

class Hotels extends React.Component {
    render() {
        let url = 'dananghotel' + this.props.data.id
        console.log(url);
        return (
            <div className='row'>
               {this.props.data.map(item => {
                    let url = 'hotel' + item.id
                    
                    return <Images key={item.id} img={item.image} name={item.hotel_name} src={url} phone={item.phone} address={item.address}/>
                })}
            </div>
        )
    }
}

function H1() {
    let [,,location] = useLocation().pathname.split('/')
    console.log(location);
    let loc = ''
    switch(location) {
        case 'danang': 
            loc = 'Đà Nẵng'
            break
        case 'saigon': 
            loc = 'Sài Gòn'
            break
        case 'hue': 
            loc = 'Huế'
            break
        case 'vungtau': 
            loc = 'Vũng Tàu'
            break
        case 'dalat': 
            loc = 'Đà Lạt'
            break
        default: 
            loc = 'Hà Nội'
            break
    }
    return (
        <h1 className='h1-subhome'>
            Khách sạn phổ biến ở {loc}
        </h1>
    )
}

