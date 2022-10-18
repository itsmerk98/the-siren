import "./css/latest.scss";
import TravelDate from "./TravelDate";
import Article from '../media/Article';

const Latest = () => {
  return (
    <div className="latest">
      <div className="latest-heading">
        <p>The Latest</p>
        <hr />
      </div>
      <div className="latest-travel">
        {
          Article.map(elem => {
            const { id, image, title, description, date } = elem;
            return (
              <div className="card" key={id}>
                <div className="card-img-face" style={{ backgroundImage: `url(${image})` }}>

                </div>
                <div className="card-contant">
                  <div className="card-title">
                    <p>{title}</p>
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {description}
                    </p>
                  </div>
                  <div style={{ margin: "35px 0" }}>
                    <TravelDate date={date}/>
                  </div>
                </div>
              </div>
            )
          })
        }

        {/* <div className="card card-mg">
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
            <div style={{ margin: "35px 0" }}>
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
            <div style={{ margin: "35px 0" }}>
              <TravelDate />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Latest;
