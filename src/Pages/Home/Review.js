import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <p>We are using cookies for no reason.</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>{review.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;