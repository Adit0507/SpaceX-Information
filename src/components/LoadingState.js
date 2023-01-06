import React from 'react'

const LoadingState = () => {
    return (
        <>
            <div className='spinner'>
                <article></article>
                <p className='text-gray-400 opacity-75 mt-5'>
                    Loading, plz wait...
                </p>
            </div>
        </>
    )
}

export default LoadingState