
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
    render() {
    let cont = {
        fontFamily: 'Montserrat',
        fontSize: '12px',
        color: 'rgb(51, 51, 51)'
    }

    let leftAlign = {
        width: '45%',
        float: 'left'
    }

    let rightAlign = {
        width: '45%',
        float: 'right',
        paddingTop: '50px'
    } 

    let fSize60 = {
        fontSize: '60px'
    }

    let leftMargin = {
        width: '45%',
        float: 'left',
        marginTop: '50px'
    }

    let titleFont = {
        fontSize: '24px',
        fontFamily: 'Caveat', 
        color: 'rgb(68, 68, 68)',
    }

    let inputStyle = {
        border: 'solid 1px rgb(238, 238, 238)',
        width: '100%', 
        height: '45px', 
        marginTop: '10px', 
        marginBottom: '20px'
    }

    let redDot = {
        color: 'red'
    }

    let buttonSend = {
        backgroundColor: 'rgb(199, 167, 101)',
        width: '100%',
        height: '50px',
        border: 'none',
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '12px',
        marginTop: '30px',
        marginBottom: '100px'
    }

    let mapStyle = {
        width:'100%',
        height:'400px',
        marginBottom: '20px'
    }

    let rightSet = {
        width: '45%', 
        float: 'right'
    }

    let textAreaStyle = {
        marginTop: '10px',
        resize: 'none', 
        border: 'solid 1px rgb(238, 238, 238)'
    }
    
    return (
      <div>
        <div class="col-lg-12 sect">
        <span style={fSize60}>Contact Us</span>
    </div>
    <div class="container" style={cont}>
        <div style={leftAlign}>
            <p style={titleFont}>Send Us a Message</p>
            <p>We want to provide you the very best online shopping experience for further information. We would love
                to help answer any question you have</p>
            <div style={leftMargin}>
                <label for="name">Name<span style={redDot}>*</span></label><br />
                <input style={inputStyle}
                    type="text" /><br />
                <label for="mobilePhone">Mobile Phone<span style={redDot}>*</span></label><br />
                <input style={inputStyle}
                    type="number" /><br />
            </div>
            <div style={rightAlign}>
                <label for="subject">Subject<span style={redDot}>*</span></label><br />
                <input style={inputStyle}
                    type="text" /><br />
                <label for="email">Email Address<span style={redDot}>*</span></label><br />
                <input style={inputStyle}
                    type="email" /><br />
            </div>
            <label for="message">Message<span style={redDot}>*</span></label><br />
            <textarea cols="70" rows="7" style={textAreaStyle}></textarea><br />
            <button style={buttonSend}>Send message</button>
        </div>
        <div style={rightSet}>
            <div style={mapStyle} id="googleMap"></div>
            <p style={titleFont}>STORE LOCATION</p>
            <span> ITC TRADE CENTER</span><br/>
            <span>Mangga Dua Jakarta</span><br/>
            <span>Telephone: 0812-8355-4033</span><br/>
            <span>Email : info@mavelin-local.com</span><br/>
            <span>LINE ID : @mavelinstore (with '@')</span><br/>
            <span>Open Hours: 9AM - 9PM (daily)</span><br/>
        </div>
    </div>
      </div>
      
    );
  }
}

export default withRouter(Contact);

