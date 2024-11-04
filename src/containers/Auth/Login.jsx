import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (
        <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row'>
                    <div className='col-12 text-center title'>Login </div>
                    <div className='col-12 form-group login-input'>
                        <label className='mb-2'>Username</label>
                        <input type='text' className='form-control' placeholder='Enter your username' />
                    </div>
                    <div className='col-12 form-group login-input'>
                        <label className='mb-2'>Password: </label>
                        <input type='password' className='form-control' placeholder='Enter your password' />
                    </div>
                    <div className='col-12'>
                        <button className='btn-login'>Login</button>
                    </div>
                    <div className='col-12'>
                        <span className='forgot-password'>Forgot your password?</span>
                    </div>
                    <div className='col-12 text-center'>
                        <span className=''>Or Login with: </span>
                    </div>
                    <div className='col-12 social-login'>
                        <FontAwesomeIcon className='facebook' icon={faFacebook} size="1x" />
                        <FontAwesomeIcon className='google' icon={faGooglePlusG} size='1x' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login