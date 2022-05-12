import React from 'react';
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section>
            <div className="text-center py-12">
                <div style={{
                background: `url(${appointment})`
            }} className='min-h-screen flex flex-col justify-center items-center'>
                    <div>
                        <h3 className='text-2xl font-bold text-primary'>Contact Us</h3>
                        <h2 className='text-white text-5xl'>Stay connected with us</h2>
                    </div>
                    <div className='w-1/3 mx-auto mt-12'>
                        <form className='flex flex-col'>
                            <input placeholder='Your Address' className='border border-2 mb-5 rounded py-2 pl-2'  type="email" name="" id="" />
                            <input placeholder='Your Subject' className='border border-2 mb-5 rounded py-2 pl-2'  type="text" name="" id="" />
                            <textarea placeholder='Your Message' className='border border-2 mb-5 rounded py-2 pl-2'  name="" id="" cols="30" rows="8"></textarea>
                            <PrimaryButton>Submit</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;