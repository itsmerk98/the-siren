import TravelDate from "./TravelDate.js";
import "./css/adventureguide.scss";
// import { Component } from "react";


// class AdventureGuide extends Component {
//   render() {
    const AdventureGuide=(props)=> {
    return (
      <>
        <div className="component-main-box">
          <div className="img-box" >


          </div>
          <div className="content-box">
            <div className="title-box" style={{fontSize: this.props.value + "px"}}>
              <p className="title-1">{this.props.blogheading}</p>
            </div>
            <div className="subtitle" style={{fontSize: this.props.subValue + "px"}}>
              <p>{this.props.comment}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <TravelDate date={this.props.date}/>
            </div>
          </div>
        </div>
      </>
    );
  };


export default AdventureGuide;
