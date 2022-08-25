
import './css/button.scss'
import RightArrow from './images/arrow-1.svg'

const Button = () => {
    return (
        <>
            <div className="button-sec">
                <button>
                    View more 
                    <img src={ RightArrow } alt="Error" />
                </button>
            </div>
        </>
    )
}
export default Button;