import React, { Component } from "react";
import TopBar from "../Components/TopBar.jsx";
import Front from "../Components/Front.jsx";
import CardContainer from "../Components/CardContainer.jsx";
import Footer from "../Components/Footer.jsx";

class App extends Component {
        constructor(props) {
          super(props)
        }
        render() {
         
          return (
            <div>
              <TopBar></TopBar>
              <Front></Front>
              <CardContainer></CardContainer>
              <Footer></Footer>
            </div>
          )
        }
      }
      export default App;