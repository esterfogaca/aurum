import React from 'react';
import './Navbar.css';
import Link from './Link';

const Navbar = ({ links }) => {
    return (
        <nav>
            <ul class="menu">
                {links.map( ({name, url, icon}) => {
                    return <Link name={name} url={url} icon={icon}/>
                })}
            </ul>
            <Link className="menu__link--free" name="Materiais gratuitos 😄" url="#free"/>
        </nav>
    )
};

export default Navbar;
