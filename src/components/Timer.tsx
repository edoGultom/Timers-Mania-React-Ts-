import React, { useEffect, useState } from "react";
import { ITime } from "../models/ITypes";
import { getData, storeData } from "../utils/storage";
import InputTimer from "./InputTimer";
import TimeList from "./TimeList";

let Timer: React.FC = () => {
    let [counter, setCounter] = useState<number>(1);
    let [time, setTime] = useState<string>("");
    let [arrTime, setArrTime] = useState<ITime[]>([]);

    //cek data ada tidak di local storage
    useEffect(() => {
        getData({ storageKey: 'times' }).then(res => {
            if (res) {
                setArrTime(res)
            }
        })
    }, []);


    useEffect(() => {
        const i = setInterval(() => {
            for (let i = 0; i < arrTime.length; i++) {
                if (arrTime[i].status === "running") {
                    arrTime[i].time -= 1;
                }
                if (arrTime[i].time === 0 && arrTime[i].status === "running") {
                    arrTime[i].status = "stop";
                    alert(`Timer ${i + 1} is done!`);
                }
                let minutes = Math.floor(Number(arrTime[i].time) / 60);
                let second = Number(arrTime[i].time) % 60;
                let finalSecond = (second < 10) ? "0" + second : second;
                let finalMinute = (minutes < 10) ? "0" + minutes : minutes;

                let finalTime = finalMinute + ":" + finalSecond;
                arrTime[i].waktu = finalTime;

                let newTodos = [...arrTime];
                newTodos[i] = arrTime[i];
                setArrTime(newTodos);
                storeData({ storageKey: 'times', value: newTodos });
            }
        }, 1000);
        return () => clearTimeout(i);

    }, [arrTime.length]);

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
                time: time,
                status: 'stop',
                original: Number(time),
                waktu: finalTime,
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

    let handleStart = (id: string) => {
        // update status time
        var data = [...arrTime];
        var index = arrTime.findIndex(obj => obj.id === id);
        data[index].status = 'running';
        storeData({ storageKey: 'times', value: [...arrTime] });
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
                <TimeList arrTime={arrTime} handleStart={handleStart} />
            </div>

        </>
    )
};
export default Timer;