import React from 'react';

const getType = type => {
    return type[type.lenght -1] === 'a' ?  `Saiba mais sobre a ${type}` : `Saiba mais sobre o ${type}`;
}

const Link = ({ name, type, icon, url, className }) => {
    return (
        <li className={className ? `menu__link ${className}` : 'menu__link'}>
            {icon && <img src={icon} alt="" />}
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name ? name : getType(type)}
            </a>
        </li>
    )
};

export default Link;