import "./css/advertisement.scss";

const Advertisement = (props) => {
    return (
        <>
            <div className="advertisement" style={{display: `${props.display}`}}>
                <h2> Advertisement </h2>
            </div>
        </>
    );
};

export default Advertisement;