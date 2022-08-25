import TravelDate from "./TravelDate.js";
import "./css/adventureguide.scss";
import { Component } from "react";

class AdventureGuide extends Component {
  render() {
    // const AdventureGuide=(props)=> {
    return (
      <>
        <div className="component-main-box">
          <div className="img-box">

          </div>
          <div className="content-box">
            <div className="title-box" style={{fontSize: this.props.value + "px"}}>
              <p className="title-1">{this.props.blogheading}</p>
              {/* <p className="title-2">an adventure guide</p> */}
            </div>
            <div className="subtitle" style={{fontSize: this.props.subValue + "px"}}>
              <p>{this.props.comment}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <TravelDate />
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default AdventureGuide;
