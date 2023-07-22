import React, {useEffect} from 'react'
import InboxFooter from './InboxFooter.jsx'

const Inbox = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='inbox-page'>
        <div>
            Inbox
        </div>

        <InboxFooter/>
    </div>
  )
}

export default Inbox