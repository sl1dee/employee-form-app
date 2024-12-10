import React, { memo } from "react";
import {EmailInputProps} from "./email.props";
import Input from "@ui/input";

const EmailInput = ( props: EmailInputProps ) => <Input type="email" {...props}/>;

export default memo(EmailInput);

