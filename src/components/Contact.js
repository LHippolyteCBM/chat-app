import React from 'react'
import './Contact.css'


function Contact() {
    const contact = (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/37.jpg" alt="Profile picture"></img>
            <div className="name">
                Juan Dos Tres
            <div className="status">                    
                <div className="status-online"></div>
                    online
                </div>
            </div>
        </div>
    )

    return contact
}

export { Contact }