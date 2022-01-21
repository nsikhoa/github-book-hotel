import React from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import { Location, useLocation } from "react-router-dom";
import '../NovotelRoom.css'

export default function NovotelRoom() {
    let [,url1,url2,room_id] = useLocation().pathname.split('/')
    // let [,id] = room_id.split('=')
    let url = '/' + url1
    console.log(useLocation().pathname);
    return (
        <div onLoad={autoSlide}>
            <MetaTags>
                <title>Khách sạn Novotel</title>
            </MetaTags>
            <header className="DanangNovotel-header">
                <Link to={url} style={{color: 'white'}} className='loginform-back'>&larr;</Link>
                {/* <img className='logo' src='./img/logo.png' /> */}
                <nav className='nav-link'>
                    <ul className='main-nav'>
                        <li className='nav'><Link className='button btnLogin' to="/Login">Đăng nhập</Link></li>
                        {/* <li className='nav'><Link className='button btnSignup' to="/Register">Đăng ký</Link></li> */}
                    </ul>
                </nav>
                <div className="hero-text-box row">
                    {/* <H1 /> */}
                </div>
            </header>
            <section className="room-container-slide">
                <div className="row">
                    Deluxe Twin (Phòng đơn) <br />
                    <ion-icon  style={{color: 'red'}} name="location-sharp"></ion-icon>Tầng 1
                    <a href="#" className="btn-show btn-book" >Đặt phòng ngay</a>
                </div>
                <div className="row slider">
                    <div className="slides">
                        <input type='radio' name="r" id="r1" />
                        <input type='radio' name="r" id="r2" />
                        <input type='radio' name="r" id="r3" />
                        <input type='radio' name="r" id="r4" />
                        <input type='radio' name="r" id="r5" />

                        <div className="slide first">
                            <img src="../../img/novotel/room1.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="../../img/novotel/room2.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="../../img/novotel/room3.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="../../img/novotel/room4.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="../../img/novotel/room5.png" alt="" />
                        </div>
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                            <div className="auto-btn5"></div>
                        </div>
                    </div>
                    <div className="navigation-manual">
                        <label htmlFor="r1" className="manual-btn"></label>
                        <label htmlFor="r2" className="manual-btn"></label>
                        <label htmlFor="r3" className="manual-btn"></label>
                        <label htmlFor="r4" className="manual-btn"></label>
                        <label htmlFor="r5" className="manual-btn"></label>
                    </div>
                </div>
                
                <div className="row">Thông tin phòng </div>
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

function autoSlide() {
    var counter = 2
    setInterval(function() {
    document.getElementById('r' + counter).checked = true;
    counter++;
    if (counter > 5) counter = 1
    }, 5000)
}


