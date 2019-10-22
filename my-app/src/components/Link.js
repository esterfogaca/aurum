import React from 'react';

const Link = ({ name, icon, url, className }) => {
    return (
        <li class={className ? `menu__link ${className}` : 'menu__link'}>
            {icon && <img src={icon} alt="" />}
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </li>
    )
};

export default Link;