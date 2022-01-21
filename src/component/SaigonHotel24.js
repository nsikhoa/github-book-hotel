import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from 'react-meta-tags'
import { Location } from "react-router-dom";

class SaigonHotel24 extends React.Component {
    // let [,url,loc] = useLocation().pathname.split('/')
    // url = '/' + url
    
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            name: ""
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
            this.setState({response: hotels[0].rooms,  name: hotels[0].hotel_name})
            console.log(this.state.response);
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <MetaTags>
                    <title>{this.state.name}</title>
                </MetaTags>
                <header className="DanangNovotel-header">
                    <Link to="/saigon" style={{color: 'white'}} className='loginform-back'>&larr;</Link>
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
                <SectionRoom data={this.state.response} />

                {/* <Section_Room count='2' cssStyle='yellow' floor='2' />
                <Section_Room count='1' cssStyle='rgb(185, 255, 144)' floor='3' /> */}
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

function SectionRoom(props) {
    let url1 = useLocation().pathname
    return (
            <div>
                {props.data.map((item) => {
                    let url = url1 + '/room' + item.id
                    return (
                        <section className="room-container" key={item.id} >
                            <div className="row" style={{maxHeight: '320px', position: 'relative', top: '-80px'}}>
                                <div className="col span-2-of-3">
                                    <div className="room-title">
                                        <p>{item.room_name}</p>
                                        <p><ion-icon  style={{color: 'red'}} name="location-sharp"></ion-icon>{item.floor}</p>
                                        <Image source={item.roomImages[0].image} /> {/* chưa load từ api */}
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
                                            <div className="room-feature boxx" style={{background: 'rgb(185, 255, 144)'}} >
                                                {item.status ? 'Đang sử dụng' : 'Phòng trống'}
                                                {/* {item.status ? document.querySelector('.boxx').style.background = 'rgb(185, 255, 144)' : document.querySelector('.boxx').style.background = 'yellow'} */}
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col span-1-of-3 room-price">
                                    <h3>{item.hotel_name}</h3>
                                    <h5>{item.location_name}</h5>
                                    <p>
                                        Giá tiền: {item.price}vnd
                                    </p>
                                    <Link to={url} className="btn-show" >Xem phòng</Link>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
            
    )
}

export default SaigonHotel24