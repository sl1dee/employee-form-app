import React, { memo } from "react";
import cl from "./input.module.scss";
import cn from 'classnames'
import {InputProps} from "./input.props";

const Input = ({ value, placeholder, error, type = 'text', onChange }: InputProps) => (
    <div className={cl.container}>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={cn(cl.input, { [cl.errorInput]: error })}
        />
        {error && <small className={cl.error}>{error}</small>}
    </div>
);

export default memo(Input);
