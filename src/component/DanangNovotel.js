import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from 'react-meta-tags'
import { Location } from "react-router-dom";

class DanangNovotel extends React.Component {
    // let [,url,loc] = useLocation().pathname.split('/')
    // url = '/' + url
    
    render() {
        return (
            <div>
                <MetaTags>
                    <title>Khách sạn Novotel</title>
                </MetaTags>
                <header className="DanangNovotel-header">
                    <Link to="/" style={{color: 'white'}} className='loginform-back'>&larr;</Link>
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
                <Section_Room count='1' cssStyle='rgb(185, 255, 144)' floor='1' />
                <Section_Room count='2' cssStyle='yellow' floor='2' />
                <Section_Room count='1' cssStyle='rgb(185, 255, 144)' floor='3' />
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


function Image(props) {
    return (
        <img className="room-img" src={props.source} alt="" ></img>
    )
}

function Section_Room(props) {
    let url = '/danang/novotel/room' + props.floor 
    return (
            <section className="room-container">
                <div className="row" style={{maxHeight: '320px', position: 'relative', top: '-80px'}}>
                    <div className="col span-2-of-3">
                        <div className="room-title">
                            <p>Deluxe Twin</p>
                            <p><ion-icon  style={{color: 'red'}} name="location-sharp"></ion-icon>Tầng {props.floor}</p>
                            <Image source="../img/novotel.jpg" />  
                            <div className="room-infor">
                                <div className="room-feature">
                                    <span className="icon-small">
                                        <ion-icon name="car-outline"></ion-icon>
                                        <ion-icon name="wifi-outline"></ion-icon>
                                    </span>
                                </div>
                                <div className="room-feature">
                                    <span className="icon-small">
                                        <ion-icon name="checkbox-outline"></ion-icon>
                                    </span>
                                    Đảm bảo hoàn tiền
                                </div>
                                <div className="room-feature">
                                    <span className="icon-small">
                                        <ion-icon name="checkbox-outline"></ion-icon>
                                    </span>
                                    Đảm bảo giá tốt nhất
                                </div>
                                <div className="room-feature boxx" style={{background: props.cssStyle}} >
                                    {props.count % 2 !== 0 ? 'Đang sử dụng' : 'Phòng trống'}
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col span-1-of-3 room-price">
                        <h3>Khách sạn Notovel</h3>
                        <h5>Đà Nẵng</h5>
                        <p>
                            Giá tiền: 500.000vnd
                        </p>
                        <Link to={url} className="btn-show" >Xem phòng</Link>
                    </div>
                </div>
            </section>
    )
}

export default DanangNovotel