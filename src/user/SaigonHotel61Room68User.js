import React from "react";
import { MetaTags } from "react-meta-tags";
import { Link, useParams } from "react-router-dom";
import { Location, useLocation } from "react-router-dom";
import '../NovotelRoom.css'

// function getURL() {
//     let [,url1,url2,room_id] = useLocation().pathname.split('/')
//     // let [,id] = room_id.split('=')
//     let url = '/' + url1
//     console.log(useLocation().pathname);
// }

// getURL()

let arrival_date = ''
let departure_date = ''
let number_of_people = ''

export default class SaigonHotel61Room68User extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            response: {},
            roomImages: [],
            lastImage: ''
        }
    }
    
    getInfo = () => {
        const user = JSON.parse(localStorage.getItem('user-info'))
        return user
    }
    
    componentDidMount() {
        this.loadCategory()
    }

    static bookRoom = () => { 
        const user = JSON.parse(localStorage.getItem('user-info'))
        const room_id = JSON.parse(localStorage.getItem('room-id'))
        let auth = "Bearer " + user.token;
        number_of_people = parseInt(number_of_people);
        let raw = {
            "name": user.name,
            "phone": user.phone,
            "email": user.email,
            "identification": user.identification,
            "arrival_date": arrival_date,
            "departure_date": departure_date,
            "number_of_people": number_of_people,
            "user_id": user.id,
            "room_id": room_id
        }
        console.log(raw);
        fetch(`https://bookhotel-backend.herokuapp.com/api/v1/user/${user.id}/order/${room_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": auth
            },
            body: JSON.stringify(raw)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            alert('Đặt phòng thành công!')
        })
        .catch(err => console.log(err))
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
            this.setState({response: hotels[2].rooms[1], roomImages: hotels[2].rooms[1].roomImages, lastImage: hotels[2].rooms[1].roomImages[4].image})
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
                    <Link to="/user/saigon/saigonhotel61" style={{color: 'white'}} className='loginform-back'>&larr;</Link>
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
    user = JSON.parse(localStorage.getItem('user-info'))
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
                        <input id="name" type="text" className="modal-input" placeholder="Họ và tên" value={this.user.name} />

                        <label htmlFor="phone" className="modal-label">
                            Số điện thoại
                        </label>
                        <input id="phone" type="text" className="modal-input" placeholder="Số điện thoại" value={this.user.phone}/>

                        <label htmlFor="email" className="modal-label">
                            Email
                        </label>
                        <input id="email" type="email" className="modal-input" placeholder="Email" value={this.user.email}/>

                        <label htmlFor="id-number" className="modal-label">
                            CMND/CCCD
                        </label>
                        <input id="id-number" type="text" className="modal-input" placeholder="CMND/CCCD" value={this.user.identification}/>

                        <label htmlFor="number" className="modal-label">
                            Số người
                        </label>
                        <input id="number" type="number" className="modal-input" defaultValue='0' onChange={(e) => {
                            number_of_people = e.target.value;
                            console.log(number_of_people);
                        }}/>

                        <label htmlFor="date-arrive" className="modal-label">
                            Ngày đến
                        </label>
                        <input id="date-arrive" type="date" className="modal-input js-date-arrive" onChange={(e) => {
                            // this.setState({arrival_date: e.target.value})
                            let date_arrive = e.target.value
                            let [year, month, date] = date_arrive.split('-');
                            date_arrive = date + '/' + month + '/' + year;
                            // this.setState({arrival_date: date_arrive})
                            arrival_date = date_arrive
                            console.log(date_arrive);  
                        }}/>

                        <label htmlFor="date-leave" className="modal-label">
                            Ngày đi
                        </label>
                        <input id="date-leave" type="date" className="modal-input js-date-leave" onChange={(e) => {
                            // this.setState({arrival_date: e.target.value})
                            let date_leave = e.target.value
                            let [year, month, date] = date_leave.split('-');
                            date_leave = date + '/' + month + '/' + year;
                            departure_date = date_leave
                            // this.setState({departure_date: date_leave})
                            console.log(date_leave);  
                        }} />

                        <button onClick={SaigonHotel61Room68User.bookRoom} id="book-room">Đặt phòng</button>
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


