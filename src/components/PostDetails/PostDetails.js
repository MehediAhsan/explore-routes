import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post;
    const navigate = useNavigate();

    const handleNevigate = () =>{
        navigate(`/user/${userId}`);
    }
    return (
        <div>
            <h1>Post Details: {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleNevigate}>Go Author</button>
        </div>
    );
};

export default PostDetails;