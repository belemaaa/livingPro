import React, {useEffect, useState} from 'react'
import InboxFooter from './InboxFooter.jsx'
import Profile from './Profile.jsx';
import {BiSearch} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Inbox = () => {
  const navigate = useNavigate()

  const [opened, setOpened] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openMessage = () => {
      navigate('/chat')
    }

  return (
    <div className='overflow-hidden'>
        <div className='hidden dk-profile border-r'>
          <Profile/>
        </div>

        <div className='inbox-page overflow-hidden'>
            <input 
              type='text'
              className='inbox-search-bar border'
              placeholder='search'
            />

            <div className='CaMr'>
              <Link to='#' className='inbox-mr'>
                Message requests
                <div className='mr-count'>
                  <p>1</p>
                </div>
              </Link>
            </div>

            <div className='messages'>
              <div className='inbox-message' onClick={openMessage}>
                <img src='' className='border'/>

                <div className='message-nAm'>
                  <p className='message-name'>Collins wale</p>
                  <p className='message-text'>Oh, alright</p>
                </div>

                <div>
                  {opened ? 
                      <div className='TaN'>
                        <p className='notOpened-time'>8.05am</p>
                        <p className='messageCount'>1</p>
                      </div>  
                  :
                      <div className='TaN'>
                        <p className='opened-time'>8.05am</p>
                      </div>
                  }
                </div>       
              </div>
              <div className='message-border border'></div> 
            </div>
        </div>

        <InboxFooter/>
    </div>
  )
}

export default Inbox