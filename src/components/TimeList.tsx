import React from 'react';
import { ITime } from '../models/ITypes';
import SingleTime from './SingleTime';

interface IProps {
    arrTime: Array<ITime>;
    handleStart: (id: string) => void;
    // setTimes: React.Dispatch<React.SetStateAction<ITime[]>>;
}

const TimeList: React.FC<IProps> = ({ arrTime, handleStart }) => {
    return (
        <React.Fragment>
            {
                arrTime?.map((time, index) => (
                    <SingleTime
                        waktu={time}
                        key={index}
                        handleStart={handleStart}
                    // setTimes={setTimes}
                    />
                ))
            }

        </React.Fragment>
    );
};

export default TimeList;
