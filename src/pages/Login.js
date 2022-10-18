import '../components/css/login.scss'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="con-img">
                    
                </div>
                <div className="title">
                    <h1>Login </h1>
                    
                </div>
                <div className="input-boxs">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    
                </div>
                <div className="btn-sec">
                    
                    <button className='btn'>Login</button>
                    <a href='/login' >forget your password? </a>
                    <a href='/signup'>do you want to create a account?</a>
                </div>
            </div>
        </>
    )
}

export default Login;