import React from "react";

const Input = props => {
    return (
        <div className="input-field">
            <input id={props.name} name={props.name} type={props.type || "text"} ref={props.inputRef} className={props.className} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    );
};

export default Input;  
