import React from 'react';
import './Home.css';
import bookpg from '../../assets/book.jpeg';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='Container'>
            <video autoPlay='autoplay' loop='loop' muted className='Video'>
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='Content'>
                <div className='SubContent'>
                    <h1>Book Catolog</h1>
                    <p>Manage your Books with Ease</p>
                    <button type='button' className='btn btn-outline-dark'>
                        <a href='/register'>Get started</a>
                    </button>
                    <img src={bookpg} alt='profile' />
                </div>
            </div>
        </div>
    );
};

export default Home;