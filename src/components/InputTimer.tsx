import React, { useRef } from 'react';

interface IProps {
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>; //tekan command + arahkan ke setTime di parent
    handleAdd: (e: React.FormEvent) => void;
}
const InputTimer: React.FC<IProps> = ({ time, setTime, handleAdd }) => {
    // let inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(e) => handleAdd(e)}
            className="d-flex flex-row justify-content-center align-items-center">
            <input
                // ref={inputRef}
                required={true}
                type="text"
                name="time"
                value={time}
                onChange={
                    (e) => setTime(e.target.value)
                }
                className="form-control"
                placeholder="How many seconds ?"
            />
            <input type="submit" className="btn m-2" value="Add" />
        </form>
    );
};

export default InputTimer;
