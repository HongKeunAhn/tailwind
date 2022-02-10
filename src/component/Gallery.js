import React from 'react';

const responseData = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1644333192224-e8b5355bd97a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80',
        title: 'Gallery Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1644333192224-e8b5355bd97a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80',
        title: 'Gallery Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1644333192224-e8b5355bd97a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80',
        title: 'Gallery Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1644333192224-e8b5355bd97a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80',
        title: 'Gallery Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
]


const Gallery = () => {
    return (
        <section className='container mx-auto border-2 border-solid border-blue-400 py-10'>
            <div className='grid grid-cols-4 gap-4'>
                {responseData.map((data) => {
                    return (
                        <div className='flex flex-col' key={data.id}>
                            <img className='block' src={data.url} alt='image' />
                            <p className='text-h3 font-semi-bold mt-2'>{data.title}</p>
                            <p className='text-b2 mt-1'>{data.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};


export default Gallery;