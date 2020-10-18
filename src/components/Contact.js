import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        }
    }

    onlineSwitch() {
        let result = !this.state.online;
        this.setState({ online: result })
    }


    render() {
        const contact = (
            <div className="Contact">
                <div className="avatar">
                    <img
                        src={this.props.avatar}
                        alt=""
                    ></img>
                </div>
                <div className="info">
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="status" onClick={this.onlineSwitch.bind(this)}>
                        <div className={this.state.online ? "status-online" : "status-offline"}></div>
                        {this.state.online ? "Online" : "Offline"}
                    </div>
                </div>
            </div>
        )

        return contact
    }
}
export { Contact }

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};