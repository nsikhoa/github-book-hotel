import React from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import { Location, useLocation } from "react-router-dom";
import '../NovotelRoom.css'

// function getURL() {
//     let [,url1,url2,room_id] = useLocation().pathname.split('/')
//     // let [,id] = room_id.split('=')
//     let url = '/' + url1
//     console.log(useLocation().pathname);
// }

// getURL()

export default class SaigonHotel39Room41 extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            response: {},
            roomImages: [],
            lastImage: ''
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
            this.setState({response: hotels[1].rooms[1], roomImages: hotels[1].rooms[1].roomImages, lastImage: hotels[1].rooms[1].roomImages[4].image})
            console.log(this.state.lastImage);
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    render() {
        return (
            <div onLoad={autoSlide}>
                <MetaTags>
                    <title>{this.state.response.hotel_name}</title>
                </MetaTags>
                <header className="DanangNovotel-header">
                    <Link to="/saigon/saigonhotel39" style={{color: 'white'}} className='loginform-back'>&larr;</Link>
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
                <RoomNameTop data={this.state.response} img={this.state.roomImages} lastImg={this.state.lastImage} />
                <ModalBook />
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

class RoomNameTop extends React.Component {
    render() {
        return (
            <section className="room-container-slide">
                <div className="row">
                    {this.props.data.room_name} <br />
                    {/* {console.log(this.props.data.roomImages[0])} */}
                    <ion-icon  style={{color: 'red'}} name="location-sharp"></ion-icon>{this.props.data.floor}
                    <button className="btn-show btn-book js-btn-book" onClick={showModal}>Đặt phòng ngay</button>
                </div> 
                <div className="row slider">
                    <div className="slides">
                        <input type='radio' name="r" id="r1" />
                        <input type='radio' name="r" id="r2" />
                        <input type='radio' name="r" id="r3" />
                        <input type='radio' name="r" id="r4" />
                        <input type='radio' name="r" id="r5" />

                        
                        <div className="slide first">
                            <img src={this.props.lastImg} alt="" />
                        </div>
                        {this.props.img.map((item, index) => {
                            return <div className="slide" key={index}>
                                
                            <img src={item.image} alt="" />
                            </div>
                        })}
                        
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
                    
                <div className="row">
                    <p>
                        <ion-icon name="information-circle-outline"></ion-icon>
                        <span style={{margin: '10px', position: 'relative', top: '-3px'}}>{this.props.data.content}</span>
                    </p>
                    <p>
                        <ion-icon name="cash-outline"></ion-icon>
                        <span style={{margin: '10px', position: 'relative', top: '-3px'}}>{this.props.data.price}vnd</span>
                    </p>
                    <p>
                        <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
                        <span style={{margin: '10px', position: 'relative', top: '-3px'}}>
                            {!this.props.data.status ? 'Empty Room' : 'Room is booked'}  
                        </span>
                    </p>
                </div>
            </section>
        )
    }
}

class ModalBook extends React.Component {
    render() {
        return(
            <div className="modal js-modal" onClick={closeModal}>
                <div className="modal-container" onClick={(event) => {
                    event.stopPropagation();
                }}>
                    <div className="modal-close js-modal-close" onClick={closeModal}>
                        <i className="ti-close"><ion-icon name="close-outline"></ion-icon></i>
                    </div>
                    <header className="modal-header">
                        <i className="ti-hotel"><ion-icon name="bed-outline"></ion-icon></i>
                        Book Room
                    </header>

                    <div className="modal-body">
                        <label htmlFor="name" className="modal-label">
                            Họ và tên
                        </label>
                        <input id="name" type="text" className="modal-input" placeholder="Họ và tên" required />

                        <label htmlFor="phone" className="modal-label">
                            Số điện thoại
                        </label>
                        <input id="phone" type="text" className="modal-input" placeholder="Số điện thoại" required />

                        <label htmlFor="email" className="modal-label">
                            Email
                        </label>
                        <input id="email" type="email" className="modal-input" placeholder="Email" required />

                        <label htmlFor="id-number" className="modal-label">
                            CMND/CCCD
                        </label>
                        <input id="id-number" type="text" className="modal-input" placeholder="CMND/CCCD" required />

                        <label htmlFor="date-arrive" className="modal-label">
                            Ngày đến
                        </label>
                        <input id="date-arrive" type="date" className="modal-input" required />

                        <label htmlFor="date-leave" className="modal-label">
                            Ngày đi
                        </label>
                        <input id="date-leave" type="date" className="modal-input" required />

                        <button id="book-room">Đặt phòng</button>
                    </div>
                </div>
            </div>
        )
    }
}

function showModal() {
    const modal = document.querySelector('.js-modal')
    modal.classList.add('open')
}

function closeModal() {
    const modalClose = document.querySelector('.js-modal')
    modalClose.classList.remove('open')
}

function autoSlide() {
    // var counter = 2
    // setInterval(function() {
    // document.getElementById('r' + counter).checked = true;
    // counter++;
    // if (counter > 5) counter = 1
    // }, 5000)
}


