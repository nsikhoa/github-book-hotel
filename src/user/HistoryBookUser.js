import {Link, useNavigate} from 'react-router-dom'
import { MetaTags } from 'react-meta-tags';
import React, { Fragment, useState } from "react";

export default class HistoryBookUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.loadNoPayRoom();
    }

    loadNoPayRoom() {
        const user = JSON.parse(localStorage.getItem('user-info'))
        let auth = "Bearer " + user.token;
        var requestOptions = {
            method: 'GET',
            headers: {
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json',
                "Authorization": auth
            }
        }
        fetch(`https://bookhotel-backend.herokuapp.com/api/v1/user/${user.id}/order/false`, requestOptions)
        .then(function(response) {
            return response.json()
        })
        .then((rooms) => {
            this.setState({response: rooms.data})
            console.log(this.state.response);
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
        return(
            <div className='container'>
                <MetaTags>
                    <title>Lịch sử đặt phòng</title>
                </MetaTags>
                <header>
                <Link to="/user" style={{color: 'white'}} className='loginform-back'>&larr;</Link>
                    {/* <img className='logo' src='./img/logo.png' /> */}
                    <nav className='nav-link'>
                        <ul className='user-main-nav'>
                            {/* <li className='nav'><Link className='button btnLogin' to="/Login">Đăng nhập</Link></li> */}
                            {/* <li className='nav'><Link className='button btnSignup' to="/Register">Đăng ký</Link></li> */}
                            <li>
                                <a href='#'>{this.getInfo().username}</a>
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
                        // document.querySelector('.loading').classList.add('hidden-loading')
                }}>
                    {/* <p className='row loading'>Loading...</p> */}
                    {/* <button className='btn-nopay' onClick={() => {
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
                    }}>Đã trả phòng</button> */}
                    {/* <PayedRoom data={this.state.response}/> <hr className='history-payed hidden-loading' /> */}
                    {/* <PayedRoom /> <hr className='history-payed hidden-loading' />
                    <PayedRoom /> <hr className='history-payed hidden-loading' /> */}

                    {/* Chưa trả phòng */}
                    <NoPayRoom data={this.state.response}/>
                    {/* <NoPayRoom /> <hr className='history-nopay' /> */}
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

// class PayedRoom extends React.Component {

//     render() {
//         return(
//             <div className='row history-payed hidden-loading'>
//                 {/* Đã trả phòng */}
//                 <div className='col span-1-of-4'>
//                     <img src='../../img/muongthanh.jpg' alt='Room hotel'/>
//                 </div>
//                 <div className='col span-1-of-4'>
//                     <p>{this.props.hotel_name}</p>
//                     <p>{this.props.room_name}</p>
//                     {/* <p>Tầng 2</p> */}
//                 </div>
//                 <div className='col span-1-of-4'>
//                     <p>Ngày đến: {this.props.arrival_date.slice(-19)}</p>
//                     <p>Ngày đi: {this.props.departure_date.slice(-19)}</p>
//                     <p>Số người: {this.props.number_of_people}</p>
//                 </div>
//                 <div className='col span-1-of-4'>
//                     <p>Đã thanh toán</p>
//                 </div>
//             </div>
//         )
//     }
// }

class RoomBook extends React.Component {

    id = this.props.data.id
    deleteRoomOrder = () => {
        const user = JSON.parse(localStorage.getItem('user-info'))
        let auth = "Bearer " + user.token;
        var requestOptions = {
            method: 'DELETE',
            headers: {
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json',
                "Authorization": auth
            }
        }
        fetch(`https://bookhotel-backend.herokuapp.com/api/v1/user/${user.id}/order/${this.id}/delete`, requestOptions)
        .then(function(response) {
            return response.json()
        })
        .then((result) => {
            if(result.status === 'ok') {
                alert('Xóa đơn thành công!')
                window.location.reload()
            }
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    render() {
        let [year, month, date] = this.props.data.arrival_date.slice(0, 10).split('-')
        let arrived = date + '/' + month + '/' + year

        let [_year, _month, _date] = this.props.data.departure_date.slice(0, 10).split('-')
        let leaved = _date + '/' + _month + '/' + _year

        return (
            <div className='row history-nopay'>
                <div className='col span-1-of-4'>
                    <img style={{height: '271px'}} src={this.props.data.hotel_image} alt='Room hotel'/>
                </div>
                <div className='col span-1-of-4'>
                    <p>{this.props.data.hotel_name}</p>
                    <p>{this.props.data.room_name}</p>
                    <p>{this.props.data.floor}</p>
                </div>
                <div className='col span-1-of-4'>
                    <p>Ngày đến: {arrived}</p>
                    <p>Ngày đi: {leaved}</p>
                    <p>Số người: {this.props.data.number_of_people}</p>
                </div>
                <div className='col span-1-of-4'>
                    <p>{this.props.data.payment ? "Đã thanh toán" : 'Chưa thanh toán'}</p>
                    <button className='btn-payed' onClick={this.deleteRoomOrder}>Xóa đơn</button>
                </div>
                <hr className='history-nopay' />
            </div>
            
        )
    }
}

class NoPayRoom extends React.Component {
    render() {
        return(
            <Fragment>
                {this.props.data ? this.props.data.map(item => {
                    console.log(item);
                    return <RoomBook key={item.id} data={item}/>
                }) : <div>Bạn chưa đặt phòng nào</div>}
            </Fragment>
        )
    }
}