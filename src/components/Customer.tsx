import React from "react";


interface IProps {
    name: string;
    age: number;
    title: string;
}

let Customer: React.FC<IProps> = (props) => {
    const { name, age, title } = props;
    return (
        <React.Fragment>
            <h2>Customer Component (Functional)</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Name : {name}
                </li>
                <li className="list-group-item">
                    Age : {age}
                </li>
                <li className="list-group-item">
                    Title : {title}
                </li>
            </ul>
        </React.Fragment>
    )
};

export default Customer;