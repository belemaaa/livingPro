import React, { useState, useEffect } from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='notifications-page'>
        <div className='notifications-page-div'>
            <div className='lg:hidden signup-go-back-btn'>
                <Link to='/profile'>
                    <IoIosArrowBack size={25}/>
                </Link>
            </div>

            <p className='notifications-header'>Notifications</p>

            <div className='today'>
                <div className='notifications-border border'></div>
                <p className='nots-filter'>Today</p>

                <div className='notifications'>
                    <div className='notification border'>
                        <img src='' className='border'/>
                        <div className='not-nAp'>
                            <p className='not-n'>Collins Wale</p>
                            <p className='not-p'>commented on your new post</p>
                        </div>     
                    </div>
                </div>
            </div>

            <div className='yesterday'>
                <div className='notifications-border border'></div>
                <p className='nots-filter'>Yesterday</p>

                <div className='notifications'>
                    <div className='prev-notification border'>
                        <img src='' className='border'/>
                        <div className='not-nAp'>
                            <p className='not-n'>Collins Wale</p>
                            <p className='not-p'>commented on your new post</p>
                        </div>     
                    </div>
                </div>
            </div>

            <div className='earlier'>
                <div className='notifications-border border'></div>
                <p className='nots-filter'>Earlier</p>

                <div className='notifications'>
                    <div className='prev-notification border'>
                        <img src='' className='border'/>
                        <div className='not-nAp'>
                            <p className='not-n'>Collins Wale</p>
                            <p className='not-p'>commented on your new post</p>
                        </div>           
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Notifications