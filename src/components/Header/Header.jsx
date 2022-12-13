import s from './Header.module.css';
import {BiSearch, BiBell} from "react-icons/bi";
import {BsPlayFill, BsFillPauseFill} from "react-icons/bs";
import React, {useEffect} from 'react';

import {useState} from 'react';
import {getAuthThunkCreator} from "../../redux/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const dispatch = useDispatch();
    let userData = useSelector(state => state.auth);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        dispatch(getAuthThunkCreator());
    }, [dispatch])

    return (
        <div className={`${s.header} header`}>
            <div className={s.logo}>
                <img src="https://via.placeholder.com/40" alt=""/>
            </div>

            <div>
                {userData.isLogged
                    ? <h3> {userData.login} </h3>
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>

            <div className={s.searchBar}>
                <BiSearch/>
                <input/>
            </div>

            <div className="bell">
                <button style={{margin: 10}}>
                    <BiBell/>
                </button>
            </div>
            <div className={s.audioPlayer}>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying
                        ? <BsPlayFill/>
                        : <BsFillPauseFill/>}
                </button>
                <p>Over the garden wall -- The main theme</p>
            </div>
        </div>
    )
}

export default Header;