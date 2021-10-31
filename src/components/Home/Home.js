import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import TouristReview from '../TouristReview/TouristReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <TouristReview></TouristReview>
        </div>
    );
};

export default Home;