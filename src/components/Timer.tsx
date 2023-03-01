import React, { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import { ITime } from "../models/ITypes";
import { showMessage } from "../utils/showMessage";
import { getData, storeData } from "../utils/storage";
import InputTimer from "./InputTimer";
import TimeList from "./TimeList";

let Timer: React.FC = () => {
    let [counter, setCounter] = useState<number>(0);
    let [start, isStart] = useState<boolean>(false);
    let [time, setTime] = useState<string>("");
    let [arrTime, setArrTime] = useState<ITime[]>([]);
    const intervalRef = React.useRef<null | NodeJS.Timeout>(null);
    const audio = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav')
    //cek data ada tidak di local storage
    useEffect(() => {
        getData({ storageKey: 'times' }).then(res => {
            if (res) {
                setArrTime(res)
            }
        })
        getData({ storageKey: 'counter' }).then(res => {
            if (res) {
                setCounter(res)
            }
        })
    }, []);

    useEffect(() => {
        if (start) {
            intervalRef.current = setInterval(() => {
                console.log('runs every 1 seconds');
                for (let i = 0; i < arrTime.length; i++) {

                    if (arrTime[i].time > 0) {
                        if (arrTime[i].status === "running") {
                            arrTime[i].time -= 1;
                        }
                        if (arrTime[i].time === 0 && arrTime[i].status === "running") {
                            isStart(!start)
                            arrTime[i].status = "stop";
                            showMessage({ message: `Timer ${i + 1} is done!`, status: 'success' });
                        }
                        let finalTime = convertTime(arrTime[i].time)
                        arrTime[i].waktu = finalTime;

                        let newTodos = [...arrTime];
                        newTodos[i] = arrTime[i];
                        setArrTime(newTodos);
                        storeData({ storageKey: 'times', value: arrTime });
                    }
                }
            }, 1000);

        } else if (!start) {
            return () => {
                audio.pause();
                console.log('clearInterval');
                return clearInterval(intervalRef.current as NodeJS.Timeout);
            };
        }
        return () => {
            isStart(!start)
            audio.play();
            console.log('clearInterval');
            return clearInterval(intervalRef.current as NodeJS.Timeout);
        };
    }, [start, arrTime]);

    const convertTime = (waktu: number) => {
        let minutes = Math.floor(Number(waktu) / 60);
        let second = Number(waktu) % 60;
        let finalSecond = (second < 10) ? "0" + second : second;
        let finalMinute = (minutes < 10) ? "0" + minutes : minutes;

        let finalTime = finalMinute + ":" + finalSecond;
        return finalTime;
    }

    let handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (time) {
            counter += 1;
            setCounter(counter);
            const data = {
                id: `time-${counter}`,
                time: time,
                status: 'stop',
                original: Number(time),
                waktu: convertTime(Number(time)),
            }
            setArrTime(
                [
                    ...arrTime,
                    data
                ]
            )
            storeData({ storageKey: 'times', value: [...arrTime, data] });
            storeData({ storageKey: 'counter', value: counter });
            setTime("")
        }
    }
    let handleStart = (id: string) => {
        // update status time
        var data = [...arrTime];
        var index = arrTime.findIndex(obj => obj.id === id);
        if (data[index].time > 0) {
            isStart(!start)
            data[index].status = 'running';
            setArrTime(data);
            storeData({ storageKey: 'times', value: [...arrTime] });
        } else {
            showMessage({ message: `Sorry, time is over, please reset before! and start again`, status: 'danger' });
        }
    }

    let handleReset = (id: string) => {
        var data = [...arrTime];
        var index = arrTime.findIndex(obj => obj.id === id);
        data[index].time = data[index].original;

        data[index].waktu = convertTime(data[index].time)
        storeData({ storageKey: 'times', value: [...arrTime] });
    }
    let handlePause = (id: string) => {
        var data = [...arrTime];
        var index = arrTime.findIndex(obj => obj.id === id);
        data[index].status = 'stop';
        setArrTime(data);
        storeData({ storageKey: 'times', value: [...arrTime] });
    }
    return (
        <>
            <Toaster />
            <div className="containers">
                <div className="header">
                    <div className="p-0">
                        <p className="h3 fw-bold text-success text-center">Timers Mania</p>
                        <p className=" text-center">This Web-App allows you to create as many timers as you want. Built by edo_gultom.</p>
                    </div>
                    <div className="p-0 d-flex flex-row justify-content-between align-items-center">
                        <div className="p-2">
                            <p className="h1 display-5 fw-bold">Timers</p>
                        </div>
                        <div className="p-2">
                            <InputTimer time={time} setTime={setTime} handleAdd={handleAdd} />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap p-5 justify-content-center align-items-center">
                    <TimeList arrTime={arrTime} handleStart={handleStart} handleReset={handleReset} handlePause={handlePause} />
                </div>
            </div>

        </>
    )
};
export default Timer;