import './css/headding.scss';

const Headding = (props) => {
    return (
        <>
            <div className="post-head">
                <p className="post-title">{props.title}</p>
                <hr />
            </div>
        </>
    );
}

export default Headding;