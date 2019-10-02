    import React, { Component } from "react";
    
      class Card extends Component {
        constructor(props) {
          super(props)
          this.state = {
            zindexBack: -1 ,
            zindexImg: 1 ,
            scale: 'scale(1)'
          }
        }
        mouseEnter() {
          this.setState({zindexBack: 1,zindexImg: -1, scale: 'scale(1.1)'})
        }        
        mouseLeave() {
          this.setState({zindexBack: -1,zindexImg: 1, scale: 'scale(1)'})
        }
        render() {
          const Img = {
            width: 'inherit',
            height: 'inherit',
            position: 'absolute',
            backgroundImage:`${this.props.url}`,
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            transform: this.state.scale,
            transition: 'all .3s',
            zIndex: this.state.zindexImg
          }
          const Txt = {
            color:'white',
            fontFamily: 'Roboto Condensed,sans-serif',
            marginLeft: '20px',
            fontSize: '23px',
            fontWeight: 'bold',
          }
          const Container = {
            width: `${this.props.width}px`,
            height: `${this.props.height}px` ,
            boxSizing: 'border-box',
            postion: 'relative'        
          }
          const Filter = {
            width: 'inherit',
            height: 'inherit',
            position: 'absolute',
            backgroundColor: '#ff0000',
            opacity:'0.80',
            display: 'flex',
            alignItems: 'flex-end',
            transition: 'all .3s',

            zIndex: this.state.zindexBack

          }
          return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Container}>
              <div style={Img}>
              </div>
              <div style={Filter}>
                <h3 style={Txt}>{this.props.text}</h3>
              </div>
            </div>   
          )
        }
      }
      class CarruselButtonL extends Component {
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
          const Margin = {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: '27px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'end'
          }
          const text ={
                fontSize: this.state.size,
                margin:'0px',
                color: 'white',
                fontFamily: 'Roboto Condensed,sans-serif',
                marginLeft: this.state.ml
              
            }
    
          return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.props.click} style={Margin}>
              <p style={text}>&#x3c;</p>    
            </div>
          )
        }
      } 
      class CarruselButtonR extends Component {
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
          const Margin = {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: '27px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'end'
          }
          const text ={
                fontSize: this.state.size,
                margin:'0px',
                color: 'white',
                fontFamily: 'Roboto Condensed,sans-serif',
                marginLeft: this.state.ml
              
            }
    
          return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.props.click} style={Margin}>
              <p style={text}>&#x3e;</p>    
            </div>
          )
        }
      } 
        
      class CarruselButtons extends Component {
        constructor(props) {
          super(props)
        }
        render() {
          const Footer = {
            width: '52px',
            height: '50px',
            alignSelf: 'flex-end',
            marginLeft: '887px',
            display: 'flex',
            zIndex:'2',
            position: 'absolute'
          }

          return (
            <div style={Footer}>   
              <CarruselButtonL click={this.props.prev}></ CarruselButtonL> 
              <CarruselButtonR click={this.props.next}></ CarruselButtonR>    
            </div>
          )
        }
      }
      class Carrusel extends Component {
        constructor(props) {
          super(props)
          this.state = {
            zindexBack: -1 ,
            zindexImg: 1 ,
            scale: 'scale(1)',
            cont: 0,
            img : [
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_02.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_04.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_06.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_08.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_09.jpg)'
              ]
          }
        }
        nextImg(){
          this.state.cont = this.state.cont + 1
          if (this.state.cont == 5 ){
            this.state.cont = 0
          }
        }
        prevImg(){
          this.state.cont = this.state.cont - 1
          if (this.state.cont == -1 ){
            this.state.cont = 4
          }
        }
        mouseEnter() {
          this.setState({zindexBack: 1,zindexImg: -1, scale: 'scale(1.1)'})
        }        
        mouseLeave() {
          this.setState({zindexBack: -1,zindexImg: 1, scale: 'scale(1)'})
        }
        render() {
          const Img = {
            width: 'inherit',
            height: 'inherit',
            position: 'absolute',
            backgroundImage:this.state.img[this.state.cont],
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            transform: this.state.scale,
            transition: 'all .3s',
            zIndex: this.state.zindexImg
          }
          const Txt = {
            color:'white',
            fontFamily: 'Roboto Condensed,sans-serif',
            marginLeft: '20px',
            fontSize: '23px',
            fontWeight: 'bold',
          }
          const Container = {
            width: `${this.props.width}px`,
            height: `${this.props.height}px` ,
            boxSizing: 'border-box',
            postion: 'absolute'  ,
            gridColumn: '1/ 3',
            gridRow: '1' ,
            display:'flex'    
          }
          const Filter = {
            width: 'inherit',
            height: 'inherit',
            position: 'absolute',
            backgroundColor: '#ff0000',
            opacity:'0.80',
            display: 'flex',
            alignItems: 'flex-end',
            transition: 'all .3s',

            zIndex: this.state.zindexBack

          }
          return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Container}>
              <CarruselButtons prev={this.prevImg.bind(this)} next={this.nextImg.bind(this)} ></CarruselButtons> 
              <div style={Img}>
              </div>
              <div style={Filter}>
                <h3 style={Txt}>{this.props.text}</h3>
              </div>
              
            </div>  
          )
        }
      }

    
      class CardContainer extends Component {
        constructor(props) {
          super(props)
        }
        render() {
          const Container = {
            width: '100%',
            height: '780px' ,
            display: 'grid', 
            gridTemplateColumns: '470px 470px 590px',
            gridTemplateRows: '340px 440px'     
          }
          return (
            <div style={Container}>
              <Carrusel width={940} height={340} text={'SCREENSHOT GALLERY'}></Carrusel>
              <Card width={590} height={340} url={'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_01.jpg)'} text={'BIOSHOCK INFINITE SCREENSHOT'}></Card>
              <Card width={470} height={440} url={'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_010.jpg)'} text={'BIOSHOCK INFINITE SCREENSHOT'}></Card>
              <Card width={470} height={440} url={'url(https://cdn.2kgames.com/2k.com/img/bioshock_thecollection_thumbnail_launch.jpg)'} text={'BIOSHOCK: THE COLLECTION LAUNCH TRAILER'}></Card>
              <Card width={590} height={440} url={'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_03.jpg)'} text={'BIOSHOCK INFINITE SCREENSHOT'}></Card>
            </div>
          )
        }
      }
      export default CardContainer;