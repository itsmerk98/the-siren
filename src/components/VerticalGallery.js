import TravelDate from './TravelDate';
import Right_arrow from './images/arrow-2.svg';
import Ligt_arrow from './images/arrow-3.svg';
import './css/verticalgallery.scss';

const VerticalGallery = () => {
    return (
        <>
            <div className="gallery-profile-img">
                <div className='txt-con'>
                    <div className="left-arrow">
                        <img src={Ligt_arrow} alt="error" />
                    </div>
                    <div className="heading-title">
                        <p>Title of vertical gallery</p>
                    </div>
                    <div className="right-arrow">
                        <img src={Right_arrow} alt="error" />
                    </div>
                </div>
                <div className='gallery-date'>
                    <TravelDate />
                </div>
            </div>
        </>
    )
}
export default VerticalGallery;