import React from 'react';
import './Person.css';

const Person = (props) => {
        return (
            <div className="Person">
                <div onClick={props.clickCross}> close</div>
                <p onClick={props.clickRef}>I am {props.perObj.name}, and {props.perObj.age} years old.</p>
                <p>{props.children}</p>
               <input type={"text"} onChange={props.changeNameHandler} value={props.perObj.name}/>
            </div>
        )
    }

export default Person;