import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TbLogout, TbSettings } from 'react-icons/tb';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './UserID.scss';

import { logout } from '../../features/authSlice';

import Button from '../Button';
import { ProfileIcon } from '../ProfileIcon';

const UserID = () => {
    const dispatch = useDispatch();
    const [tippy, setTippy] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const handleClick = () => {
        setTippy(true);
        setTimeout(() => {
            setTippy(false);
        }, 1000);
        const fullUsername = user?.details.username + user?.details.tag;
        navigator.clipboard.writeText(fullUsername);
    };

    const logOut = () => {
        dispatch(logout());
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="UserID">
            <div className="UserID__left" onClick={handleClick}>
                <ProfileIcon className="avatar" avatar={user?.details.avatar} />
                <Tippy content="Copied!" visible={tippy} theme="valkyrie">
                    <div className="details">
                        <p>{user?.details.username}</p>
                        <h6>{user?.details.tag}</h6>
                    </div>
                </Tippy>
            </div>

            <div className="UserID__right">
                <Tippy content="Settings" theme="valkyrie">
                    <Button
                        variant={'transparent'}
                        height={'30px'}
                        width={'30px'}
                    >
                        <TbSettings />
                    </Button>
                </Tippy>
                <Tippy content="Log out" theme="valkyrie">
                    <Button
                        onClick={logOut}
                        variant={'transparent'}
                        height={'30px'}
                        width={'30px'}
                    >
                        <TbLogout />
                    </Button>
                </Tippy>
            </div>
        </div>
    );
};

export default UserID;
