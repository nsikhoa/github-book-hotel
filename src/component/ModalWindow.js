import React from "react";


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
                        <input id="name" type="text" className="modal-input" placeholder="Họ và tên" />

                        <label htmlFor="phone" className="modal-label">
                            Số điện thoại
                        </label>
                        <input id="phone" type="text" className="modal-input" placeholder="Số điện thoại" />

                        <label htmlFor="address" className="modal-label">
                            Địa chỉ
                        </label>
                        <input id="address" type="text" className="modal-input" placeholder="Địa chỉ" />

                        <label htmlFor="email" className="modal-label">
                            Email
                        </label>
                        <input id="email" type="email" className="modal-input" placeholder="Email" />

                        <label htmlFor="id-number" className="modal-label">
                            CMND/CCCD
                        </label>
                        <input id="id-number" type="text" className="modal-input" placeholder="CMND/CCCD" />

                        <button id="book-room">Đặt phòng</button>
                    </div>
                </div>
            </div>
        )
    }
}

// function showModal() {
//     const modal = document.querySelector('.js-modal')
//     modal.classList.add('open')
// }

function closeModal() {
    const modalClose = document.querySelector('.js-modal')
    modalClose.classList.remove('open')
}

export default ModalBook