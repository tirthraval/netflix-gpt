import React from 'react'


const VideoTitle = ({ title, overview }) => {

    return (
        <div className='pt-[20%] text-white px-5 absolute  aspect-video bg-gradient-to-r from-black'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='py-6 w-1/4 text-md'>{overview}</p>
            <div className='my-4'>
                <button className='bg-white text-black text-lg rounded-lg w-24 py-3 hover:bg-opacity-80' >Play</button>
                <button className='bg-white text-black text-lg rounded-lg w-24 py-3 hover:bg-opacity-80 mx-4'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle