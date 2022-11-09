import React, { useEffect, useState } from 'react';
import Banner from '../../Pages/Shared/Banner/Banner';
import Services from '../Services/Services';
import './Home.css';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;