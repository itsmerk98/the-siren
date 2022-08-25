import TravelDate from "./TravelDate";
import './css/story.scss'
const Story = () => {
    return (
        <>
            <div className="story-title">
                <p className="title-1">Catch waves with an adventure guide</p>
            </div>
            <div className="story-text">
                <p>Gujavart is vastly underrated and it's a mystery to us why the region isn't more well-known as a toutist destination. it has a plethora of tempkes and palaces. Gujavart is vastly underrated and it's a mystery to us why the region isn't more well-known as a toutist destination. it has a plethora of tempkes and palaces</p>
            </div>
            <div className="story-time">
                <TravelDate />
            </div>
        </>
    )
}
export default Story;