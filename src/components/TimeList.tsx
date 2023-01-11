import React from 'react';
import { ITime } from '../models/ITypes';
import SingleTime from './SingleTime';

interface IProps {
    arrTime: Array<ITime>;
    // setTimes: React.Dispatch<React.SetStateAction<ITime[]>>;
}

const TimeList: React.FC<IProps> = ({ arrTime }) => {
    return (
        <React.Fragment>
            {
                arrTime?.map((time, index) => (
                    <SingleTime
                        // index={index}
                        // times={times}
                        time={time}
                        key={time.id}
                    // setTimes={setTimes}
                    />
                ))
            }

        </React.Fragment>
    );
};

export default TimeList;
