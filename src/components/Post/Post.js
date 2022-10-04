import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleNevigate = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleNevigate}>Show Details</button>
        </div>
    );
};

export default Post;