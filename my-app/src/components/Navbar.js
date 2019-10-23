import React from 'react';
import './Navbar.css';
import Link from './Link';

const Navbar = ({ links }) => {
    return (
        <nav>
            <ul className="menu">
                {links.map( ({name, url, icon}) => {
                    return <Link key={name} name={name} url={url} icon={icon} />
                })}
            </ul>
            <Link className="menu__link--free" name="Materiais gratuitos 😄" url="#free"/>
        </nav>
    )
};

export default Navbar;
