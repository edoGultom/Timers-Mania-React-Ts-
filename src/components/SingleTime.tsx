import React from 'react';
import { ITime } from '../models/ITypes';

type Props = {
    waktu: ITime;
    handleStart: (id: string) => void;
    handleReset: (id: string) => void;
    handlePause: (id: string) => void;
}

const SingleTime = ({ waktu, handleStart, handleReset, handlePause }: Props) => {
    return (
        <div className="card mb-2">
            <div className="card-header">
                <p className="h3 text-success"># {waktu.id}</p>
            </div>
            <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="p-2 w-10">
                        <h1 className="fw-bold">{waktu.waktu}</h1>
                    </div>
                    <div className="p-2 ">
                        <button className='btn btn-info m-2' onClick={() => handleStart(waktu.id)} disabled={waktu.status === 'running' && true}>
                            Start
                        </button>
                        <button className='btn btn-warning m-2' onClick={() => handlePause(waktu.id)} disabled={waktu.status === 'stop' && true}>
                            Pause
                        </button>
                        <button className='btn btn-danger m-2' onClick={() => handleReset(waktu.id)}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleTime;
