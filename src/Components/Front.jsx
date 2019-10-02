import React, { Component } from "react";
const front = require("../Images/front.png");

class Text2kBig extends Component {
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
            marginBottom: '52px',
            color: this.state.color,
            textDecoration: 'none'
        }
        const text ={
            marginTop:'20px',
            fontSize: '18px',
            fontFamily: 'Roboto Condensed,sans-serif',
            fontWeight: '700',
            marginLeft: '20px',
        }
        return (
            <a  onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} 
            style={link} href={this.props.href} targe="_blank"><h5 style={text}>{this.props.text}</h5></a>
        )
    }
}
  class Button1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
        transform: 'translateX(-102%)'
      }
    }
    mouseEnter() {
      this.setState({transform: 'translateX(-0.5%)'})
    }        
    mouseLeave() {
      this.setState({transform: 'translateX(-102%)'})
    }
    render() {
      const Margin = {
        border: '1px solid white',
        overflow: 'hidden',
        width: '207px',
        display : 'block',
        position: 'relative',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        zIndex: '1'
      }
      const Txt = {
        color:'white',
        fontFamily: 'Roboto Condensed,sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        marginLeft: '20px',
        zIndex: '2'
      }
      const background = {
          border: '1px solid red',
          backgroundColor: 'red',
          position: 'absolute',
          width: '207px',
          height: '44px',
          zIndex: '2',
          transform: this.state.transform,
          transition: 'transform .25s ease-in'
      }
      return (
        <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Margin}>
            <div style={background}></div>
            <span style={Txt}>{this.props.text}</span>
        </div>
      )
    }
  } 
  class Button2 extends Component {
    constructor(props) {
      super(props)
      this.state = {
        transform: 'translateX(-102%)',
        color: 'white'

      }
    }
    mouseEnter() {
      this.setState({transform: 'translateX(-0.5%)',color: 'red'})
    }        
    mouseLeave() {
      this.setState({transform: 'translateX(-102%)', color: 'white'})
    }
    render() {
      const Margin = {
        backgroundColor: 'red',
        overflow: 'hidden',
        width: '187px',
        display : 'block',
        position: 'relative',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        zIndex: '1'
      }
      const Txt = {
        color:this.state.color,
        fontFamily: 'Roboto Condensed,sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        marginLeft: '20px',
        zIndex: '2'
      }
      const background = {
          border: '1px solid white',
          backgroundColor: 'white',
          position: 'absolute',
          width: '187px',
          height: '42px',
          zIndex: '2',
          transform: this.state.transform,
          display: 'flex',
          alignItems: 'center',
          transition: 'transform .25s ease-in'
      }

      return (
        <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Margin}>
            <div style={background}>
            </div>
            <span style={Txt}>{this.props.text}</span>
        </div>
      )
    }
  } 
    
  class ButtonMenu extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const Footer = {
        width: '190px',
        display: 'flex',
        flexDirection:'column',
        alignSelf: 'flex-end',
        marginLeft: '44%',
        margintop: '-15%',
        position: 'absolute',
      }

      return (
        <div style={Footer}>
            <Button1 text={"WATCH TRAILER"}  href={"https://www.youtube.com/watch?v=uB9yYfKq4ZA"}></Button1> 
            <Button1 text={"MORE INFO"}  href={"http://bioshockgame.com/"}></Button1>
            <Button2 text={"BUY NOW"}  href={"https://store.2k.com/store/Tk22k/en_IE/home/currency.EUR/ccRef./?"}></Button2> 
            <Text2kBig text={"OFFICIAL SITE"} href={"http://bioshockgame.com/"}></Text2kBig>      
        </div>
      )
    }
  }
  class Logo extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const Front= {
        marginTop: '200px',
        width:'510px',
        height: '275px',
        backgroundImage:'url(https://cdn.2kgames.com/web/common/logo/bioshock-infinite_logo_L_1.png)' ,
        backgroundSize: 'cover',
        alignSelf: 'center',
        justifySelf: 'center'
      }
      return (
        <div style={Front}>
        </div>   
      )
    }
  } 
  class Front extends Component {
    constructor(props) {
      super(props)
      this.state={
        image: `url(${front})`,
      }
    }
    render() {
      const Front= {
        width:'100%',
        height: '650px',
        backgroundImage: this.state.image,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        display: 'Flex',
        justifyContent: 'Center'
      }
      return (
        <div style={Front}>
          <ButtonMenu></ButtonMenu>
          <Logo></Logo>
        </div>   
      )
    }
  } 

  export default Front;