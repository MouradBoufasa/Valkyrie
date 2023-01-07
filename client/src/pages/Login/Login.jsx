// * DEPENDENCIES * //
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { PulseLoader } from 'react-spinners';

// * REDUX SLICE * //
import { login, resetAuth } from '../../features/authSlice';

// * COMPONENTS * //
import Input from '../../components/Input/Input';
import Button from '../../components/Button';

// * STYLES * //
import '../Auth.scss';
import '../../sass/index.scss'


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef();

    const { user, loading, success, error } = useSelector(state => state.auth);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const spinner = <PulseLoader color="#fff" cssOverride={null} margin={2} size={5} />

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        dispatch(login(userData));
    };

    useEffect(() => {
        inputRef.current.focus();
        if (user) { navigate('/channels/@me') };
    }, [user, success, error]);

    return (
        <motion.div className="Auth login"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <form className='Auth__form' onSubmit={handleSubmit}>
                <div className='Auth__form-header'>
                    <h4>Well, ahoy there!</h4>
                    <h6 className='subtitle'>Login to chat with your friends.</h6>
                </div>
                <div className='Auth__form-inputs'>
                    <Input
                        style={error ? { outline: '2px solid red' } : null}
                        type={'text'}
                        label={error ? `Email - ${error}` : 'Email'}
                        required={true}
                        onChange={e => setEmail(e.target.value)}
                        email={email}
                        inputRef={inputRef}
                    >
                    </Input>
                    <Input
                        style={error ? { outline: '2px solid red' } : null}
                        type={'password'}
                        label={error ? `Password - ${error}` : 'Password'}
                        required={true}
                        onChange={e => setPassword(e.target.value)}
                        password={password}
                    >
                    </Input>
                    <small><a>Forgot your password?</a></small>
                </div>
                <div className="Auth__form-actions">
                    <Button variant={'primary'}>{loading ? spinner : 'Login'}</Button>
                    <small>Don't have an account? <Link to={'/signup'}>Sign Up!</Link></small>
                </div>
            </form>
        </motion.div>
    );
};

export default Login;