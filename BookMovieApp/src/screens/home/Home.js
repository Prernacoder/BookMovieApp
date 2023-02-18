import React, { Component } from "react";
// import Header from "../../common/header/Header";
import "./Home.css";
 
class Home extends Component{
    render(){
        return(
            <div>
                {/* <Header/> */}
                 {/* to Add Upcoming Movies heading to Home page */}
                <h1 className="title">
                    UpComming Movies
                </h1>
            </div>
            
        );
    }
}
export default Home;