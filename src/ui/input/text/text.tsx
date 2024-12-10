import React, { memo } from "react";
import { FieldError } from "react-hook-form";
import Input from "../input";
import {TextInputProps} from "@ui/input/text/text.props";
// import Input from "@ui/input";

const TextInput = ( props: TextInputProps ) => <Input type="text" {...props}/>;

export default memo(TextInput);
