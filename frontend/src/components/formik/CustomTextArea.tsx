import { useFormikContext } from "formik";
import React from "react";

interface CustomTextAreaProps {
  name: string;
  label: string;
  className?: string;
}

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  name,
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
      <textarea
        type="text"
        id={name}
        {...formik.getFieldProps(name)}
        className={
          "rounded-lg min-h-[60px] w-full p-2 mt-1 bg-transparent text-base " +
          (formik.errors[name] && formik.touched[name]
            ? "border-2 border-red-600"
            : "border border-black")
        }
      />
      {formik.errors[name] && formik.touched[name] ? (
        <div className="form-error">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};
