import React from 'react'
import { NotificationsNone,Language,Settings } from '@mui/icons-material';
import "./topbar.css"
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">VinayAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarIconContainer">
                    <img src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg" alt=""  className='topAvatar'/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Topbar
