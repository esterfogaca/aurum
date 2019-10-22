import React from 'react';
import Link from './Link';
import './PostCard.css';

import plus from '../assets/plus.svg';

const PostCard = ({
    image = 'https://via.placeholder.com/320x465', 
    title = 'Lorem Ipsum', 
    excerpt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut cursus leo. In hac habitasse platea dictumst. Aliquam erat volutpat. Morbi porttitor, mauris et feugiat posuere, ante ligula auctor quam, ac commodo mauris risus vitae ante.`, 
    url = '#', 
    linkName = 'Saiba mais sobre o Lorem Ipsum'
}) => {
    return (
        <article className="post-card">
            <img className="post-card__cover" src={image} alt="" />
            <div className="post-card__copy">
                <h2 className="post-card__title">{title}</h2>
                <p className="post-card__excerpt">{excerpt}</p>
                <Link className="post-card__link" url={url} name={linkName} icon={plus} />
            </div>
        </article>
    )
};

export default PostCard;