import React, {useState, memo, useEffect, useCallback} from "react";
import {PhoneInputProps} from "./phone.props";
import getRawPhoneFromParsedPhone from "@helpers/getRawPhoneFromParsedPhone";
import parseRawPhone from "@helpers/parseRawPhone";
import Input from "@ui/input";

const PhoneInput = ({ value, placeholder, error, onChange }: PhoneInputProps) => {
    const [viewPhone, setViewPhone] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        setViewPhone(parseRawPhone(value || ""));
        setPhone(value || "");
    }, [value]);

    const changePhoneHandler = useCallback(
        (newViewPhone: string) => {
            const rawPhone = getRawPhoneFromParsedPhone(newViewPhone, viewPhone);
            const newFormattedPhone = parseRawPhone(rawPhone);

            setViewPhone(newFormattedPhone);
            setPhone(rawPhone);

            onChange?.(rawPhone);
        },
        [viewPhone, onChange]
    );

    return (
        <>
            <Input
                value={viewPhone}
                placeholder={placeholder || "+7 (___) ___-__-__"}
                error={error}
                onChange={changePhoneHandler}
            />
            <input type="hidden" tabIndex={-1} readOnly value={phone} />
        </>
    );
};

export default memo(PhoneInput);
