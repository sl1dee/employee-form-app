import React from "react";
import cl from "./employee-info-form-container.module.scss";
import EmployeeInfoForm from "@components/employee-info-form-container/employee-info-form";
const EmployeeInfoFormContainer = () => {
  return (
    <div className={cl.wrapper}>
        <EmployeeInfoForm />
    </div>
  );
};

export default EmployeeInfoFormContainer;
