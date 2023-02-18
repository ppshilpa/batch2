import {LeftSideBar} from './Component/LeftSideBar';
import {PostBar} from './Component/PostBar'
import {RightSideBar} from './Component/RightSideBar'

export const MainContainer =()=>{
    return(
        <div className='container-fluid'>
            <div className="row">
        <div className='col-sm-3'><LeftSideBar/></div>
        <div className='col'><PostBar /></div>
        <div className='col-md-3'><RightSideBar /></div>
        </div>
        </div>
    )
}