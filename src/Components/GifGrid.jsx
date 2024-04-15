import PropTypes from 'prop-types';
// import { getGifs } from '../Helpers/getGifs';
// import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs({ category });

    console.log(isLoading)

    return (
        <>
            {isLoading ? (
                <h3 className='text-4xl text-gray-200 font-semibold text-center'>Loading...</h3>
            ) : null}
            <h3 className='text-4xl text-gray-200 font-semibold text-center'>{category}</h3>
            <div className='flex justify-center gap-4 flex-wrap'>
                    {
                        images.map((image) => (
                            <GifItem key={image.id} {...image} />
                        ))
                    }
                </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
