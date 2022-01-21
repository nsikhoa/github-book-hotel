import {Link, useNavigate} from 'react-router-dom'
import { MetaTags } from 'react-meta-tags';
import React, { useState } from "react";

export default class HistoryBookUser extends React.Component {
    render() {
        return(
            <div className='container'>
                <MetaTags>
                    <title>Lịch sử đặt phòng</title>
                </MetaTags>
                <header>
                    {/* <img className='logo' src='./img/logo.png' /> */}
                    <nav className='nav-link'>
                        <ul className='user-main-nav'>
                            {/* <li className='nav'><Link className='button btnLogin' to="/Login">Đăng nhập</Link></li> */}
                            {/* <li className='nav'><Link className='button btnSignup' to="/Register">Đăng ký</Link></li> */}
                            <li>
                                <a href='#'>User</a>
                                <ul className='sub-nav'>
                                    <li><a href='/profile'>Thông tin cá nhân</a></li>
                                    <li><a href='#'>Lịch sử đặt phòng</a></li>
                                    <li><a href='/'>Đăng xuất</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="hero-text-box row">
                        <h1 className='h1-subhome'>
                            Lịch sử đặt phòng
                        </h1>
                    </div>
                </header>

                <section className='row' onLoad={() => {
                        document.querySelector('.loading').classList.add('hidden-loading')
                }}>
                    {/* <p className='row loading'>Loading...</p> */}
                    <button className='btn-nopay' onClick={() => {
                        document.querySelectorAll('.history-payed').forEach((item) => {
                            item.classList.add('hidden-loading')
                        })
                        document.querySelectorAll('.history-nopay').forEach((item) => {
                            item.classList.remove('hidden-loading')
                        })
                    }}>Chưa trả phòng</button>
                    <button className='btn-payed' onClick={() => {
                        document.querySelectorAll('.history-payed').forEach((item) => {
                            item.classList.remove('hidden-loading')
                        })
                        document.querySelectorAll('.history-nopay').forEach((item) => {
                            item.classList.add('hidden-loading')
                        })
                    }}>Đã trả phòng</button>
                    <PayedRoom /> <hr className='history-payed hidden-loading' />
                    <PayedRoom /> <hr className='history-payed hidden-loading' />
                    <PayedRoom /> <hr className='history-payed hidden-loading' />

                    {/* Chưa trả phòng */}
                    <NoPayRoom /> <hr className='history-nopay' />
                    <NoPayRoom /> <hr className='history-nopay' />
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

class PayedRoom extends React.Component {
    render() {
        return(
            <div className='row history-payed hidden-loading'>
                {/* Đã trả phòng */}
                <div className='col span-1-of-4'>
                    <img src='../../img/muongthanh.jpg' alt='Room hotel'/>
                </div>
                <div className='col span-1-of-4'>
                    <p>Khách sạn ABC</p>
                    <p>Phòng XYZ</p>
                    <p>Tầng 2</p>
                </div>
                <div className='col span-1-of-4'>
                    <p>Ngày đến</p>
                    <p>Ngày đi</p>
                    <p>Số người</p>
                </div>
                <div className='col span-1-of-4'>
                    <p>Đã thanh toán</p>
                </div>
            </div>
        )
    }
}

class NoPayRoom extends React.Component {
    render() {
        return(
            <div className='row history-nopay'>
                <div className='col span-1-of-4'>
                    <img src='../../img/novotel.jpg' alt='Room hotel'/>
                </div>
                <div className='col span-1-of-4'>
                    <p>Khách sạn 123</p>
                    <p>Phòng 321</p>
                    <p>Tầng 1</p>
                </div>
                <div className='col span-1-of-4'>
                    <p>Ngày đến</p>
                    <p>Ngày đi</p>
                    <p>Số người</p>
                </div>
                <div className='col span-1-of-4'>
                    <p>Chưa thanh toán</p>
                </div>
            </div>
        )
    }
}