import "./css/latest.scss";
import TravelDate from "./TravelDate";

const Latest = () => {
  // let latestTravel = {
  //     img: "../images/theodor-lundqvist-WHhbYArwFt8-unsplash.jpg",
  //     title: "Joshua Tree Overnight Adventure",
  //     subTitle: "Gujavart is vastly underrated and it's a mystery to us why the region isn't more well-known as a toutist destination. it has a plethora of tempkes and palaces"
  // };

  return (
    <div className="latest">
      <div className="latest-heading">
        <p>The Latest</p>
        <hr />
      </div>
      <div className="latest-travel">
        <div className="card">
          <div className="card-img-face"></div>
          <div className="card-contant">
            <div className="card-title">
              <p>Joshua Tree OverNight Adventure </p>
            </div>
            <div className="card-subtitle">
              <p>
                Gujavart is vastly underrated and it's a mystery to us why the
                region isn't more well-known as a toutist destination. it has a
                plethora of tempkes and palaces
              </p>
            </div>
            <div style={{margin: "35px 0"}}>
              <TravelDate />
            </div>
          </div>
        </div>
        <div className="card card-mg">
          <div className="card-img-face"></div>
          <div className="card-contant">
            <div className="card-title">
            <p>Joshua Tree OverNight Adventure </p>
            </div>
            <div className="card-subtitle">
              <p>
                Gujavart is vastly underrated and it's a mystery to us why the
                region isn't more well-known as a toutist destination. it has a
                plethora of tempkes and palaces
              </p>
            </div>
            <div style={{margin: "35px 0"}}>
              <TravelDate />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img-face"></div>
          <div className="card-contant">
            <div className="card-title">
            <p>Joshua Tree OverNight Adventure </p>
            </div>
            <div className="card-subtitle">
              <p>
                Gujavart is vastly underrated and it's a mystery to us why the
                region isn't more well-known as a toutist destination. it has a
                plethora of tempkes and palaces
              </p>
            </div>
            <div style={{margin: "35px 0"}}>
              <TravelDate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
