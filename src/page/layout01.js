import React from 'react';
import Header from '../component/Header';
import Gallery from '../component/Gallery';
import ProductOverviews from '../component/ProductOverviews';

const Layout = () => {
    return (
        <>
            <Header />
            <Gallery />
            <ProductOverviews />
        </>
    )
}

export default Layout;