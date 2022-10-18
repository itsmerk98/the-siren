import "./css/articles.scss";
import './css/responsive.scss'
// import AdventureGuide from "./AdventureGuide.js";
import Advertisement from "./Advertisement.js";
// import arrow from './images/arrow.svg'
import TopPost from "./TopPost";
import VerticalGallery from "./VerticalGallery";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import "./css/adventureguide.scss";
// import Media from "./media";

import Post from "../media/Posts";


const Articles = (props) => {
  return (
    <>
      <div className="articles">
        <div className="latest-heading">
          <p>{props.title}</p>
          <hr />
        </div>
        <div className="articles-sec">
          <div className="articles-sec-leftside">
            <div>
              {
                Post.map(elem => {
                  const { id, image, title, description, date } = elem;
                  return (
                    <a href="/blog" className="component-main-box" key={id}>
                      <div style={{ backgroundImage: "url(" + { image } + ")" }} className="img-box" >

                      </div>
                      <div className="content-box">
                        <div className="title-box" >
                          <p className="title-1">{title}</p>
                        </div>
                        <div className="subtitle" >
                          <p>{description}</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                          <TravelDate date={date} />
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>

            <Link to={'/'} className="load-more" >
              <div className="downarrow" >
                <img src="./images/arrow.svg" alt="error" />
              </div>
              <span className="link-text">Load more</span>
            </Link>
            <VerticalGallery display={props.display} />
          </div>
          <div className="articles-sec-rightside">
            <Advertisement display={props.display} />
            <TopPost />
          </div>
        </div>
      </div>
    </>
  );
};


export default Articles;
