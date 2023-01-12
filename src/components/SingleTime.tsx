import React from 'react';
import { ITime } from '../models/ITypes';

type Props = {
    time: ITime;
    // times: Array<ITime>;
}

const SingleTime = ({ time }: Props) => {

    return (
        <div className="card mb-2">
            <div className="card-header">
                <p className="h3 text-success"># {time.id}</p>
            </div>
            <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="p-2 w-10">
                        <h1 className="fw-bold">{time.time}</h1>
                    </div>
                    <div className="p-2 ">
                        <button className='btn btn-info m-2'>
                            Start
                        </button>
                        <button className='btn btn-info m-2'>
                            Pause
                        </button>
                        <button className='btn btn-info m-2'>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleTime;
