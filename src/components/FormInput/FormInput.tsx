import { Controller, FieldValues, useWatch } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

function FormInput<F extends FieldValues>(props: FormInputProps<F>) {
  const {
    control,
    defaultValue,
    FormHelperTextProps = {},
    FormLabelProps = {},
    helperText,
    label,
    name,
    onChange,
    renderError,
    required,
    type,
    rules = {},
    ...InputProps
  } = props;

  const labelId = name + "-label";
  const helperTextId = name + "-helper-text";

  const target = useWatch({
    control,
    name: rules.match ? rules.match.target : undefined,
  });

  if (rules.match && rules.match.target) {
    rules.validate = {
      ...rules.validate,
      match: (value: unknown) => target === value || rules.match!.message,
    };
  }

  if (required && !rules.required) {
    rules.required = "This field is required";
  }

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({
        field: { onBlur, onChange: onFieldChange, value },
        fieldState: { error },
      }) => (
        <FormControl error={!!error} required={required}>
          <FormLabel id={labelId} {...FormLabelProps}>
            {label}
          </FormLabel>
          <Input
            {...InputProps}
            aria-labelledby={labelId}
            aria-describedby={helperTextId}
            name={name}
            type={type}
            value={value ?? ""}
            onBlur={onBlur}
            onChange={(event) => {
              onFieldChange(event);

              if (onChange) {
                onChange(event);
              }
            }}
          />
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {error
              ? typeof renderError === "function"
                ? renderError(error)
                : error.message
              : helperText}
          </FormHelperText>
        </FormControl>
      )}
      rules={rules}
    />
  );
}

export default FormInput;
