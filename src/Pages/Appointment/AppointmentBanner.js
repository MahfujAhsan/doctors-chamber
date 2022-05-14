import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import background from "../../assets/images/bg.png"

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center"
        }
        }>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='bg-white rounded-lg shadow-2xl mr-24'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;