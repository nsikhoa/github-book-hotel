import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import LoginFormTest from './component/LoginFormTest';
import Register from './component/Register';
import Danang from './component/Danang';
import Hanoi from './component/Hanoi';
import DanangNovotel from './component/DanangNovotel';
import HanoiHotel7 from './component/HanoiHotel7';
import HanoiHotel7Room10 from './component/HanoiHotel7Room10';
import HanoiHotel8 from './component/HanoiHotel8';
import HanoiHotel7Room11 from './component/HanoiHotel7Room11';
import HanoiHotel8Room24 from './component/HanoiHotel8Room24';
import HanoiHotel8Room25 from './component/HanoiHotel8Room25';
import HanoiHotel9 from './component/HanoiHotel9';
import HanoiHotel9Room36 from './component/HanoiHotel9Room36';
import HanoiHotel9Room37 from './component/HanoiHotel9Room37';

import Saigon from './component/Saigon';
import SaigonHotel24 from './component/SaigonHotel24';
import SaigonHotel24Room27 from './component/SaigonHotel24Room27';
import SaigonHotel24Room33 from './component/SaigonHotel24Room33';
import SaigonHotel39 from './component/SaigonHotel39';
import SaigonHotel39Room40 from './component/SaigonHotel39Room40';
import SaigonHotel39Room41 from './component/SaigonHotel39Room41';

import HomeUser from './user/HomeUser';
import Profile from './user/Profile';
import UpdateProfile from './user/UpdateProfile';
import HanoiUser from './user/HanoiUser'
import HanoiHotel7User from './user/HanoiHotel7User';
import HanoiHotel7Room10User from './user/HanoiHotel7Room10User';
import HanoiHotel7Room11User from './user/HanoiHotel7Room11User';
import HanoiHotel8User from './user/HanoiHotel8User';
import HanoiHotel8Room24User from './user/HanoiHotel8Room24User';
import HanoiHotel8Room25User from './user/HanoiHotel8Room25User';
import HanoiHotel9User from './user/HanoiHotel9User';
import HanoiHotel9Room36User from './user/HanoiHotel9Room36User';
import HanoiHotel9Room37User from './user/HanoiHotel9Room37User';
import HistoryBookUser from './user/HistoryBookUser';

import SaigonUser from './user/SaigonUser';
import SaigonHotel24User from './user/SaigonHotel24User';
import SaigonHotel24Room27User from './user/SaigonHotel24Room27User';
import SaigonHotel24Room33User from './user/SaigonHotel24Room33User';
import SaigonHotel39User from './user/SaigonHotel39User';
import SaigonHotel39Room40User from './user/SaigonHotel39Room40User';
import SaigonHotel39Room41User from './user/SaigonHotel39Room41User';
import SaigonHotel61User from './user/SaigonHotel61User';
import SaigonHotel61Room62User from './user/SaigonHotel61Room62User';
import SaigonHotel61Room68User from './user/SaigonHotel61Room68User';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<LoginFormTest />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/danang' element={<Danang />} />
        <Route path='/danang/dananghotel4' element={<DanangNovotel />} />
        <Route path='/hanoi' element={<Hanoi />} />
        <Route path='/hanoi/hanoihotel7' element={<HanoiHotel7 />} />
        <Route path='/hanoi/hanoihotel7/room10' element={<HanoiHotel7Room10 />} />
        <Route path='/hanoi/hanoihotel7/room11' element={<HanoiHotel7Room11 />} />
        <Route path='/hanoi/hanoihotel8' element={<HanoiHotel8 />} />
        <Route path='/hanoi/hanoihotel8/room24' element={<HanoiHotel8Room24 />} />
        <Route path='/hanoi/hanoihotel8/room25' element={<HanoiHotel8Room25 />} />
        <Route path='/hanoi/hanoihotel9' element={<HanoiHotel9 />} />
        <Route path='/hanoi/hanoihotel9/room36' element={<HanoiHotel9Room36 />} />
        <Route path='/hanoi/hanoihotel9/room37' element={<HanoiHotel9Room37 />} />

        <Route path='/saigon' element={<Saigon />} />
        <Route path='/saigon/saigonhotel24' element={<SaigonHotel24 />} />
        <Route path='/saigon/saigonhotel24/room27' element={<SaigonHotel24Room27 />} />
        <Route path='/saigon/saigonhotel24/room33' element={<SaigonHotel24Room33 />} />
        <Route path='/saigon/saigonhotel39' element={<SaigonHotel39 />} />
        <Route path='/saigon/saigonhotel39/room40' element={<SaigonHotel39Room40 />} />
        <Route path='/saigon/saigonhotel39/room41' element={<SaigonHotel39Room41 />} />
        
        <Route path='/user' element={<HomeUser />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/update' element={<UpdateProfile />} />
        <Route path='/history' element={<HistoryBookUser />} />
        <Route path='/user/hanoi' element={<HanoiUser />} />
        <Route path='/user/hanoi/userhotel7' element={<HanoiHotel7User />} />
        <Route path='/user/hanoi/userhotel7/room10' element={<HanoiHotel7Room10User />} />
        <Route path='/user/hanoi/userhotel7/room11' element={<HanoiHotel7Room11User />} />
        <Route path='/user/hanoi/userhotel8' element={<HanoiHotel8User />} />        
        <Route path='/user/hanoi/userhotel8/room24' element={<HanoiHotel8Room24User />} />
        <Route path='/user/hanoi/userhotel8/room25' element={<HanoiHotel8Room25User />} />
        <Route path='/user/hanoi/userhotel9' element={<HanoiHotel9User />} />
        <Route path='/user/hanoi/userhotel9/room36' element={<HanoiHotel9Room36User />} />
        <Route path='/user/hanoi/userhotel9/room37' element={<HanoiHotel9Room37User />} />

        <Route path='/user/saigon' element={<SaigonUser />} />
        <Route path='/user/saigon/saigonhotel24' element={<SaigonHotel24User />} />
        <Route path='/user/saigon/saigonhotel24/room/27' element={<SaigonHotel24Room27User />} />
        <Route path='/user/saigon/saigonhotel24/room/33' element={<SaigonHotel24Room33User />} />
        <Route path='/user/saigon/saigonhotel39' element={<SaigonHotel39User />} />
        <Route path='/user/saigon/saigonhotel39/room/40' element={<SaigonHotel39Room40User />} />
        <Route path='/user/saigon/saigonhotel39/room/41' element={<SaigonHotel39Room41User />} />
        <Route path='/user/saigon/saigonhotel61' element={<SaigonHotel61User />} />
        <Route path='/user/saigon/saigonhotel61/room/62' element={<SaigonHotel61Room62User />} />
        <Route path='/user/saigon/saigonhotel61/room/68' element={<SaigonHotel61Room68User />} />


      </Routes>
    </div>
  );
}

export default App;
