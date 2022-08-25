// import Latest from './Latest.js';
import "./css/main.scss";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="home-gallery">
          <div className="gallery-img-1">
            <p className="title">Title of vertical gallery</p>
            <p className="travel-date">Travel / August 21 2022</p>
          </div>
          <div className="gallery-img-2">
            <div className="img-box-1">
              <div className="doomed">
                <p>The Sound cloud You loved is doomed</p>
              </div>
              <p className="travel-date">Travel / August 21 2022</p>
            </div>
            <div className="img-box-2">
              <div className="doomed">
                <p>The Sound cloud</p>
                <p>You loved is doomed</p>
              </div>
              <p className="travel-date">Travel / August 21 2022</p>
            </div>
          </div>
        </div>
    </div>
    
    </>
  );
};

export default Main;
