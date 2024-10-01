import React from 'react';

const Chapter3Page: React.FC = () => {
    return (
        <div className="w-full h-full">
            <div className='flex flex-col justify-center items-center h-full w-full mt-5 mb-5'>
                <div className='slidebar flex flex-auto justify-center items-center h-96 w-1/2 mr-14'>
                    Slide bar 1

                </div>
                <div className='content flex justify-center items-stretch h-full w-1/2 mt-5 mr-15 ml-5 '>

                </div>
            </div>
        </div>
    );
};

export default Chapter3Page;
