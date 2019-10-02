import React, { Component } from "react";
const magnifyingGlass1 = require("../Images/magnifyingGlass1.png");
const magnifyingGlass2 = require("../Images/magnifyingGlass2.png");

class Logo2k extends Component {
    constructor(props) {
      super(props)
      this.state = {
        size: '24px',
        ml: '8px'
      }
    }
    mouseEnter() {
      this.setState({size: '44px',ml: '4px'})
    }        
    mouseLeave() {
      this.setState({size: '24px', ml: '8px'})
    }
    render() {
      const Logo = {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translateX(-50%)',
        top: '24px',
        left: '49.5%',
        backgroundImage: 'url(https://2k.com/images/sprite-ui.png)',
        backgroundPosition: '0 0',
        backgroundSize: '302.5px 276.5px',
        width: '67px',
        height: '45px',
      }

      return (
        <div style={Logo}>
          <a href="https://2k.com/en-US/" targe="_blank"></a>
        </div>
      )
    }
  } 
  class Menu extends Component {
    constructor(props) {
      super(props)
      this.state = {
        size: '24px',
        ml: '8px'
      }
    }
    render() {
      const Margin = {
        backgroundColor: 'trasparent',
        width: '67px',
        height: '45px',
        margin: '25px'
      }
      const line ={
        backgroundColor: '#fff',
        height: '2px',
        width: '42px',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: '35px'    
      }
      const line2 ={
        backgroundColor: '#fff',
        height: '2px',
        width: '30px',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: '35px',
        marginTop: '45px'     
      }
      const line3 ={
        backgroundColor: '#fff',
        height: '3px',
        width: '10px',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: '35px',
        marginTop: '55px'   
      }

      return (
        <div style={Margin}>
           <i style={line}></i>
           <i style={line2}></i>
           <i style={line3}></i>
        </div>
      )
    }
  } 
  class Text2kSearchBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        color: 'white'
      }
    }
    mouseEnter() {
        this.setState({color:'red'})

    }        
    mouseLeave() {
        this.setState({color:'white'})
    }
    render (){
        const link = {
            height: '40px',
            marginBottom: '10px',
            color: this.state.color,
            textDecoration: 'none'
        }
        const text ={
            fontSize: '13px',
            fontFamily: 'Roboto Condensed,sans-serif',
            letterSpacing: '1.1px'
        }
        return (
            <a  onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} 
            style={link} href={this.props.href} targe="_blank"><h5 style={text}>{this.props.text}</h5></a>
        )
    }
}
  class SearchBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        src: `${magnifyingGlass1}`
      }
    }
    mouseEnter() {
      this.setState({src: `${magnifyingGlass2}`})
    }        
    mouseLeave() {
      this.setState({src: `${magnifyingGlass1}`})
    }
    render() {
      const Logo = {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translateX(-50%)',
        top: '26px',
        left: '92%',
        backgroundPosition: '0 0',
        backgroundSize: '302.5px 276.5px',
        width: '140px',
        height: '45px',
        display: 'flex',
        flexDirection:'column',
      }
      const Texts = {
        marginTop: '-16px',
        display: 'flex',
        justifyContent:'space-between',

      }
      const Input = {
        width: '140px',
        backgroundColor: 'transparent',
        height: '19px',
        borderTop: 'thin solid #fff',
        borderRight: 'none',
        borderBottom: 'thin solid #fff',
        borderLeft: 'thin solid #fff',
        color: '#fff',
      }
      const sBar = {
        display: 'flex',
      }
      const img = {
        marginLeft: '-24px',
        width: '24px',
        height: '22px'
      }
      return (
        <div style={Logo}>
          <div style={sBar}>
            <input type="text" placeholder="SEARCH" style={Input}></input>
            <img  onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={img} src={this.state.src}></img>
          </div>
          <div style={Texts}>
            <Text2kSearchBar text={"LOG-IN"} href={"https://accounts.2k.com/en-US/"}></Text2kSearchBar>
            <Text2kSearchBar  text={"  |  "} href={""}></Text2kSearchBar>
            <Text2kSearchBar text={"SINGUP"} href={"https://accounts.2k.com/en-US/signup/?redirect_uri=https%3A%2F%2F2k.com%2Fen-US%2Fgame%2Fbioshock-infinite%2F&client_id=ed61ef7d2caa44a0dd172c59e35cf825"}></Text2kSearchBar>
          </div>
        </div>
      )
    }
  } 
  class TopBar extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const Footer = {
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent:'space-between',
        position:'absolute',
        background: 'linear-gradient(180deg,rgba(0,0,0,.4),transparent)'
      }

      return (
        <div style={Footer}>   
          <Logo2k></Logo2k>
          <Menu></Menu>  
          <SearchBar></SearchBar>
        </div>
      )
    }
  }

  export default TopBar;