import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './component/Home';
import LoginForm from './component/LoginForm';
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

export default function CustomerRouter() {
    return(
        <Router>
            <div>
                <Switch>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Login' element={<LoginForm />} />
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
                </Switch>
            </div>
        </Router>
        
    )
}