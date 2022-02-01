import React, {useState} from 'react';
import "./Card.css";

const Card = (props) => {

    const apiData = props.data;
    let randomNum = Math.trunc(Math.random() * apiData.length);
    let randomData = apiData[randomNum].sarcasm

    const [reply, setComment] = useState(props.reply);

    console.log(reply);

    const clickHandler = () => {
        randomNum = Math.trunc(Math.random() * apiData.length);
        randomData = apiData[randomNum].sarcasm || apiData[randomNum].quote;
        setComment(randomData);
    }

    return (
        <div className="card">
        <div className="heading">
            <div className="heading--main">{props.heading}</div>
            <div className="heading--sub">
                {props.subheading}
            </div>
        </div>
        <div className="comment">{reply}</div>
        <button onClick={props.onRefresh?.() || clickHandler} className="btn">Refresh</button>
        </div>
    );
};

export default Card;
