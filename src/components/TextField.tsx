import { ErrorMessage, Field } from "formik";

export const TextField = ({
  name,
  placeholder,
  divClass,
  textClass,
  value,
  maxlength,
  disabled,
  error,
  ...rest
}: {
  name: string;
  value: string;
  error?: any;
  placeholder?: string;
  divClass?: string;
  textClass?: string;
  maxlength?: string;
  disabled?: boolean;
}) => (
  <div className={`${divClass}`}>
    <Field
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      maxLength={maxlength}
      disabled={disabled}
      {...rest}
      className={`w-full h-12 rounded-[5px] px-5 py-1 text-[14px] ${
        disabled ? " bg-[#EBFFF7]" : "bg-white"
      } placeholder:text-[#CCCCCC] placeholder:text-sm ${
        error ? "border-red-500" : value ? "border-primary" : "border-gray-200"
      } border-[1px] focus:outline-none ${textClass}`}
    />

    <ErrorMessage
      name={name}
      className="text-[12px] text-red-500 mt-[2px]"
      component="p"
    />
  </div>
);
