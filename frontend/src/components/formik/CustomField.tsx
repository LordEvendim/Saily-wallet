import { Field, useFormikContext } from "formik";
import React from "react";

interface CustomFieldProps {
  name: string;
  type: string;
  label: string;
  className?: string;
}

const CustomField: React.FC<CustomFieldProps> = ({
  name,
  type,
  label,
  className,
}) => {
  const formik: any = useFormikContext();

  return (
    <div className={className}>
      <label
        className="text-base text-gray-900 font-semibold block ml-2 mt-1"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        name={name}
        type={type}
        label={label}
        className={
          "rounded-lg h-10 w-full p-2 mt-1 bg-transparent text-base " +
          (formik.errors[name] && formik.touched[name]
            ? "border-2 border-red-600"
            : "border border-black")
        }
      />
      <div className="text-red-600 text-base mt-1 ml-1">
        {formik.errors[name] && formik.touched[name] ? (
          <div className="form-error">{formik.errors[name]}</div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomField;
