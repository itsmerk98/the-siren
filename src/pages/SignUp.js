import '../components/css/signup.scss';
import '../components/css/responsive.scss';

const SignUp = () => {
    return (
        <>
            <div className="signup-container">
                <div className="con-img">

                </div>
                <div className="title">
                    <h1>SignUp </h1>
                </div>
                <div className="input-boxs">

                    <div className='input-row'>
                        <input type="text" placeholder="Enter firstname" />
                        <input type="text" placeholder="Enter lastname" />
                    </div>

                    <div className='input-row'>
                        <input type="number" min={1000000000} placeholder="Contact no." />
                        <input type="email" placeholder="E-mail" />
                    </div>

                    <div className='input-row'>
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Conform password" />
                    </div>

                </div>
                <div className="btn-sec">
                    <div className='link'>
                        <p>You have a account ?</p>
                        <a href='/login' > Login</a>
                    </div>
                    <button className='btn'> Login </button>
                </div>
            </div>
        </>
    )
}



export default SignUp;