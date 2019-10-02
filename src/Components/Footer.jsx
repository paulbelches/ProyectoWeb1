import React, { Component } from "react";

const FooterLogo = require("../Images/FooterLogo.png");
const facebook = require("../Images/facebook.png");
const twitter = require("../Images/twitter.png");
const youtube = require("../Images/youtube.png");
const twich = require("../Images/twich.png");
const instagram = require("../Images/instagram.png");

class Text2k extends Component {
    constructor(props) {
      super(props)
      this.state = {
        color: 'rgb(86,86,86)'
      }
    }
    mouseEnter() {
        this.setState({color:'red'})

    }        
    mouseLeave() {
        this.setState({color:'rgb(86,86,86)'})
    }
    render (){
        const link = {
            height: '40px',
            marginBottom: '10px',
            color: this.state.color,
            textDecoration: 'none'
        }
        const text ={
            fontSize: '14px',
            fontFamily: 'Roboto Condensed,sans-serif',
        }
        return (
            <a  onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} 
            style={link} href={this.props.href} targe="_blank"><h5 style={text}>{this.props.text}</h5></a>
        )
    }
}
  class TwoKL extends Component {
    constructor(props) {
      super(props)
      this.state = {
        color: ['rgb(86,86,86)','rgb(86,86,86)','rgb(86,86,86)','rgb(86,86,86)']
      }
    }
    render() {
      const Footer = {
        height: '25px' ,
        width: '65%',
        backgroundColor: 'color',
        zIndex: '2',
        display: 'flex',
        alignItems: 'flex-end'
      }
      const span = {
          marginTop: '-10px',
          marginLeft: '10px',
          marginRight: '10px',
          marginBottom: '10px',
          color: 'rgb(86,86,86)'
      }
      return (
        <div style={Footer}>
            <img src={FooterLogo}></img>
            <Text2k text={"NEWSLETTER"} href={"https://accounts.2k.com/en-US/newsletters/signup/"}></Text2k>
            <span style={span}>|</span>
            <Text2k text={"PRIVACY POLICY"} href={"https://www.take2games.com/privacy/"}></Text2k>
            <span style={span}>|</span>
            <Text2k text={"TERMS OF SERVICE"} href={"https://www.take2games.com/legal/"}></Text2k>
            <span style={span}>|</span>
            <Text2k text={"COOKIE POLICY"} href={"https://www.take2games.com/cookiepolicy/"}></Text2k>
        </div>
      )
    }
  } 
  class TwoKR extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const Footer = {
        backgroundColor: 'color',
        zIndex: '2',
        display: 'flex',
        flexDirection: 'column'
      }
      const Social = {
        width:'500',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '45px',
        marginBottom: '10px'
      }
      const span = {
          marginTop: '20px',
          marginLeft: '10px',
          marginRight: '10px',
          marginBottom: '10px',
          color: 'rgb(86,86,86)'
      }
      const text ={
            fontWeight: '700',
            letterSpacing: '.7px',
            fontSize: '13px',
            fontFamily: 'Roboto Condensed,sans-serif',
            color: 'rgb(86,86,86)'
     }
     const copyRight ={
            letterSpacing: '.7px',
            fontSize: '9px',
            fontFamily: 'Roboto Condensed,sans-serif',
            color: 'rgb(86,86,86)',
            marginTop:'0px',
            marginBottom:'20px',
            height: '2px'
     }
      const img ={
            margin: '2px',
            marginTop: '20px'
     }
      return (
        <div style={Footer}>
            <div style={Social}>
                <h5 style={text}>CONNECT</h5>
                <span style={span}>|</span>
                <a href={"https://www.facebook.com/2K/"} targe="_blank"><img style={img} src={facebook} height="20" width="20" ></img></a>
                <a href={"https://twitter.com/2K"} targe="_blank"><img style={img} src={twitter} height="20" width="20"></img></a>
                <a href={"https://www.youtube.com/user/2KGames/"} targe="_blank"><img style={img} src={youtube} height="20" width="20"></img></a>
                <a href={"https://www.twitch.tv/2k"} targe="_blank"><img style={img} src={twich} height="20" width="20"></img></a>
                <a href={"https://www.instagram.com/2k/"} targe="_blank"><img style={img} src={instagram} height="20" width="20"></img></a>
            </div>
            <h5 style={copyRight}>Copyright © 2018 Take-Two Interactive Software, Inc Trademarks belong to their respective owners. All rights reserved.</h5>
        </div>
      )
    }
  } 
  class Footer extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const Footer = {
        width: '100%',
        height: '100px' ,
        backgroundColor: 'black',
        zIndex: '2',
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse'
      }
      const Footer2k = {
        width: '100%',
        height: '75px' ,
        backgroundColor: 'black',
        zIndex: '2',
        display: 'flex',
        alignItems: 'flex-end',
        marginbottom: '20px',
        padding: '15px'
      }
      const Class = {
        marginTop: '18px',
        marginRight: '18px',
        width: '218.666px',
        height: '82px' ,
        backgroundImage:'url(https://downloads.2kgames.com/2k/staging/datastore/645-esrb_M_BioShock_Infinite.png)' ,
        backgroundSize: 'cover',
        justifySelf: 'center',
        alignSelf: 'flex-start',
        zIndex: '2'
      }
      return (
        <div>
          <div style={Footer}>
            <div style={Class}> </div>
          </div>
          <div style={Footer2k}>
            <TwoKL></TwoKL>
            <TwoKR></TwoKR>
          </div>
        </div>
      )
    }
  }
  export default Footer;