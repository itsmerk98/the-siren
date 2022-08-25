import './css/toppost.scss';
import TravelDate from './TravelDate';

const TopPost = () => {
    return (
        <>
            <div className="post">
                <div className="post-head">
                    <p className="post-title">Top Post</p>
                    <hr />
                </div>
                <div className='post-img'>

                </div>
                <div className='post-subtitle'>
                    <div className='pt-txt'>
                        <p>Catch waves with</p>
                        <p>an adventure guide</p>
                    </div>
                    <div className='number'>
                        <p>1</p>
                    </div>
                </div>
                <div style={{ marginBottom: '20px' }} >
                    <TravelDate />
                </div>
                <div className='secondery-post'>
                    <div className='sp-img'>

                    </div>
                    <div className='sp-text'>
                        <div className='spt'>
                            <p>Catch waves with</p>
                            <p>an adventure guide</p>
                        </div>
                        <div className='date'>
                            <TravelDate />
                        </div>
                    </div>
                    <div className='number'>
                        <p>2</p>
                    </div>
                </div>
                <div className='secondery-post'>
                    <div className='sp-img'>

                    </div>
                    <div className='sp-text'>
                        <div className='spt'>
                            <p>Catch waves with</p>
                            <p>an adventure guide</p>
                        </div>
                        <div className='date'>
                            <TravelDate />
                        </div>
                    </div>
                    <div className='number'>
                        <p>3</p>
                    </div>
                </div>
                <div className='secondery-post'>
                    <div className='sp-img'>

                    </div>
                    <div className='sp-text'>
                        <div className='spt'>
                            <p>Catch waves with</p>
                            <p>an adventure guide</p>
                        </div>
                        <div className='date'>
                            <TravelDate />
                        </div>
                    </div>
                    <div className='number'>
                        <p>4</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopPost;