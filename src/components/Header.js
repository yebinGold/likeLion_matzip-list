import React from 'react';
import { MainHeader } from '../styledComponents';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({theme, toggleTheme}) => {
    return (
        <MainHeader className='dalseo'>
            <span>HUFS 맛집 List</span>
            <FontAwesomeIcon className='themeIcon' onClick={toggleTheme} icon={theme.id === 'dark' ? faSun : faMoon}/>
        </MainHeader>
    );
};

export default Header;