import React from 'react';

const Link = ({ name, icon, url, classname }) => {
    return (
        <li class={classname ? `menu__link ${classname}` : 'menu__link'}>
            {icon && <img src={icon} alt="" />}
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </li>
    )
};

export default Link;