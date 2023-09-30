import React from 'react';
import '../Components/module.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import { getUserIdFromLocalStorage,getTokenFromLocalStorage } from '../store/authUtils';

const CreateJobPost = () => {
    const token = getTokenFromLocalStorage();

    return (
        <div className="create-job-post">
            <div className="overlay">
                <h1>Create Your Own Job Post</h1>
                <p>Write a compelling job description and attract top talent.</p>
                {!token ? <Link to='/login'> <button>Create Job Post</button> </Link>:
                <Link to='/dashboard'> <button>Create Job Post</button> </Link>}
               
            </div>
        </div>
    );
};

export default CreateJobPost;
