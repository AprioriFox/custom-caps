import React from 'react';
import { useSelector } from 'react-redux';
import { Catalog } from '../catalog';

const Home = () => {
    const caps =  useSelector(({ caps }) => caps.items)
    return (
        <div>
            <Catalog caps={caps} />
        </div>
    );
}

export default Home;
