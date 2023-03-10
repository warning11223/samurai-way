import React from 'react';
import user from '../../../../img/user.png'

import s from './Post.module.css'

type PostProps = {
    text: string | undefined
}

const Post: React.FC<PostProps> = ({text}) => {
    return (
        <div className={s.postContainer}>
            <img className={s.userImage} src={user} alt="user logo"/>
            <span>{text}</span>
        </div>
    );
};

export default Post;
