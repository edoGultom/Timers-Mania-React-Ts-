import React, { useEffect, useState } from "react";
import { ITime } from "../models/ITypes";
import { getData, storeData } from "../utils/storage";
import InputTimer from "./InputTimer";
import TimeList from "./TimeList";

let Timer: React.FC = () => {
    let [counter, setCounter] = useState<number>(1);
    let [time, setTime] = useState<string>("");
    // let [times, setTimes] = useState<ITime[]>([]);
    let [arrTime, setArrTime] = useState<ITime[]>([]);

    //cek data ada tidak di local storage
    useEffect(() => {
        getData({ storageKey: 'times' }).then(res => {
            if (res) {
                setArrTime(res)
            }
        })
    }, []);

    let handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (time) {
            let minutes = Math.floor(Number(time) / 60);
            let second = Number(time) % 60;
            let finalSecond = (second < 10) ? "0" + second : second;
            let finalMinute = (minutes < 10) ? "0" + minutes : minutes;

            let finalTime = finalMinute + ":" + finalSecond;

            setCounter(counter + 1);

            const data = {
                id: 'timer-' + counter,
                time: finalTime,
                status: 'stop',
                original: Number(time)
            }
            setArrTime(
                [
                    ...arrTime,
                    data
                ]
            )
            storeData({ storageKey: 'times', value: [...arrTime, data] });

            setTime("")
        }
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="p-2">
                        <p className="h1 display-5 fw-bold">Timers</p>
                    </div>

                    {/* Input Timer */}
                    <div className="p-2">
                        <InputTimer time={time} setTime={setTime} handleAdd={handleAdd} />
                    </div>
                </div>

                {/* Content Timer */}
                <TimeList arrTime={arrTime} />
            </div>

        </>
    )
};
export default Timer;