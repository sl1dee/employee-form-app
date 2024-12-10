import React, { memo } from "react";
import cl from "./select.module.scss";
import {Controller} from "react-hook-form";
import {SelectProps} from "./select.props";

const Select = ({ name, control, className, error }: SelectProps) => (
    <div className={`${cl.select} ${className || ""}`}>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <select {...field} className={cl.selectInput}>
                    <option value="">Пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            )}
        />
        {error && <span className={cl.error}>{error}</span>}
    </div>
);

export default memo(Select);
