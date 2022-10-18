import './css/traveldate.scss';
const TravelDate = (props) => {
    return (
        <>
            <div className="travel-sec">
                <span className="travel">Travel </span>
                <span className="traveldate">{props.date}</span>
            </div>
        
        </>
    )    
}
export default TravelDate;