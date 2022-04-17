import React from 'react';
import googleLogo from '../../../images/social/google.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{error1.message}</p>
        </div>
    }


    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
            </div>
            <div>

                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 mx-auto  my-2 d-block'>
                    <img width="20px" src={googleLogo} alt="" />
                    <span className='mx-3'> Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 mx-auto  my-2 d-block'>
                    <img width="20px" src={googleLogo} alt="" />
                    <span className='mx-3'> Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 mx-auto  my-2 d-block'>
                    <img width="20px" src={googleLogo} alt="" />
                    <span className='mx-3'> Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;