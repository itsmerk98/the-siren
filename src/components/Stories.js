import Headding from "./Headding.js";
import './css/stories.scss';
import Story from "./Story.js";
import Button from "./Button.js";

const Stories = ()=>{
    return (
        <>
            <div className="stories-heading">
                <Headding title="Latest Stories" />
            </div>
            <hr className="hr"/>
            <div className="stories-sec">
                <div className="story">
                    <Story />
                </div>
                <div className="story border">
                    <Story />
                </div>
                <div className="story">
                    <Story />
                </div>
            </div>
            <hr />
            <div className="view-more-sec">
                <Button />
            </div>
        </>
    )
}
export default Stories;