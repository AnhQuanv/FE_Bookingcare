import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import handleLoginAPI from '../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
// import axios from '../axios';


const Login = () => {

    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [isShowPass, setIsShowPass] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { isAuthenticated, userInfo } = useSelector(state => state.user || {});
    // console.log("check login", isAuthenticated, userInfo);


    const handleLogin = async () => {
        setErrMessage("");
        dispatch(loginStart());
        try {
            let res = await handleLoginAPI(userName, pass);
            if (res?.data?.EC === 0) {
                localStorage.setItem("access_token", res.data.access_token);
                console.log("Login successful", res.data);  // Đăng nhập thành công
                dispatch(loginSuccess(res.data));
                navigate("/system/user-manage");
            }
        } catch (error) {
            setErrMessage(error);
            dispatch(loginFailure());
        }
    };


    return (
        <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row'>
                    <div className='col-12 text-center title'>Login </div>
                    <div className='col-12 form-group login-input'>
                        <label className='mb-2'>Username</label>
                        <input type='text' className='form-control' placeholder='Enter your username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className='col-12 form-group login-input'>
                        <label className='mb-2'>Password: </label>
                        <div className='input-pass'>
                            <input type={isShowPass ? 'text' : 'password'} className='form-control' placeholder='Enter your password' value={pass} onChange={(e) => setPass(e.target.value)} />
                            <span onClick={() => setIsShowPass(!isShowPass)}>
                                <FontAwesomeIcon className='icon-eye' icon={isShowPass ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <div className='col-12' style={{ color: 'red', fontSize: 10, height: 20 }}>
                        <span>{!errMessage ? errMessage : errMessage}</span>
                    </div>
                    <div className='col-12'>
                        <button className='btn-login' onClick={() => handleLogin()}>Login</button>
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