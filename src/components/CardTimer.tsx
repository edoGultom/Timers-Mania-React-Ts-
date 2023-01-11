import React from 'react';

interface Post {
    time: number;
    id: number;
}

type CardTimeProps = {
    dataTime: Post[]
};

const CardTimer: React.FC<CardTimeProps> = (props: CardTimeProps) => {
    return (
        <div className="card ">
            <div className="card-header">
                <p className="h3 text-success">Time 1</p>
            </div>
            <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="p-2 w-10">
                        <h1 className="fw-bold">00:00</h1>
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
        </div>
    );
};

export default CardTimer;
