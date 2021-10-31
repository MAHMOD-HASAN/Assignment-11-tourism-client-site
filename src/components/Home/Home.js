import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';
import TouristReview from '../TouristReview/TouristReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Destination></Destination>
            <TouristReview></TouristReview>
        </div>
    );
};

export default Home;