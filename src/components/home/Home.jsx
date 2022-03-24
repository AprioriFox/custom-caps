import React from 'react';
import { useSelector } from 'react-redux';
import { Catalog } from '../catalog';
import HomePage from '../home-page';

const Home = () => {
    const caps =  useSelector(({ caps }) => caps.items)
    return (
        <div>
            {/* <Catalog caps={caps} /> */}
            <HomePage />
        </div>
    );
}

export default Home;
