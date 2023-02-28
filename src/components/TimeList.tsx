import React from 'react';
import { ITime } from '../models/ITypes';
import SingleTime from './SingleTime';

interface IProps {
    arrTime: Array<ITime>;
    handleStart: (id: string) => void;
    handleReset: (id: string) => void;
    handlePause: (id: string) => void;
    // setTimes: React.Dispatch<React.SetStateAction<ITime[]>>;
}

const TimeList: React.FC<IProps> = ({ arrTime, handleStart, handleReset, handlePause }) => {
    return (
        //basis-28 = 112px
        <div className="d-flex flex-wrap md:flex-column justify-content-start md:justify-content-center align-items-center gap-5">
            {
                arrTime?.map((time, index) => (
                    <SingleTime
                        waktu={time}
                        key={index}
                        handleStart={handleStart}
                        handleReset={handleReset}
                        handlePause={handlePause}
                    // setTimes={setTimes}
                    />
                ))
            }
        </div>

    );
};

export default TimeList;
