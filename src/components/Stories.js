import Headding from "./Headding.js";
import './css/stories.scss';
import Story from "./Story.js";
import Button from "./Button.js";

const Stories = () => {
    return (
        <>
            <div className="stories-heading">
                <Headding title="Latest Stories" />
            </div>
            <hr className="hr" />
            <div className="stories-sec">
                <Story />
                <Story className="border" />
                <Story />
            </div>
            <hr />
            <div className="view-more-sec">
                <Button />
            </div>
        </>
    )
}
export default Stories;