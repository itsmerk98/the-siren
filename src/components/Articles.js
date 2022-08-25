import "./css/articles.scss";
import AdventureGuide from "./AdventureGuide.js";
import Advertisement from "./Advertisement.js";
import arrow from './images/arrow.svg'
import TopPost from "./TopPost";
import VerticalGallery from "./VerticalGallery";
import { Link } from "react-router-dom";
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
            <AdventureGuide 
              value="32" 
              subValue="16" 
              blogheading={props.blogheading} 
              comment={props.comment}
            />
            <AdventureGuide 
              blogheading={props.blogheading}
              comment={props.comment}
            />
            <AdventureGuide 
              blogheading={props.blogheading}
              comment={props.comment}
            />
            <AdventureGuide
             blogheading={props.blogheading}
             comment={props.comment}
            />
            <Link to={''} className="load-more" >
              <div className="downarrow" src={arrow}>
                <img src={arrow} alt="error" />
              </div>
              <span className="link-text">Load more</span>
            </Link>
            <VerticalGallery />
          </div>
          <div className="articles-sec-rightside">
            <Advertisement />
            <TopPost />
          </div>
        </div>
      </div>
    </>
  );
};
export default Articles;
