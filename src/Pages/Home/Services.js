import React from 'react';
import fluoried from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from './Service';


const Services = () => {
    const services = [
        {
            _id: 1,
            name:'Fluoride Treatment',
            description: '',
            img: fluoried
        },
        {
            _id: 2,
            name:'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name:'Whitening',
            description: '',
            img: fluoried
        },
    ]
    return (
        <div className='my-24 mx-auto'>
            <div className='text-center'>
                <h3 className='text-primary font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;