import { Controller, FieldValues } from "react-hook-form";
import { FormSelectProps } from "./FormSelectProps";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material";

function FormSelect<F extends FieldValues>(props: FormSelectProps<F>) {
  const {
    control,
    defaultValue,
    labelKey = "label",
    label,
    helperText,
    FormHelperTextProps = {},
    name,
    options = [],
    onChange,
    renderError,
    required = false,
    rules = {},
    valueKey = "value",
    ...SelectProps
  } = props;

  if (required && !rules.required) {
    rules.required = "This field is required";
  }

  const helperTextId = name + "-helper-text";
  const labelId = name + "-label";

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({
        field: { onBlur, onChange: onFieldChange, value },
        fieldState: { error },
      }) => {
        if (typeof value === "object" && !!value) {
          value = (value as any)[valueKey];
        }

        return (
          <FormControl error={!!error} required={required}>
            <FormLabel id={labelId}>{label}</FormLabel>
            <Select
              variant="standard"
              {...SelectProps}
              name={name}
              value={value ?? ""}
              onBlur={onBlur}
              renderValue={(x) => options.find((o) => o.value === x)?.label}
              onChange={(e) => {
                onFieldChange(e.target.value);
                onChange?.(e.target.value);
              }}
            >
              {options.map((item: any) => (
                <MenuItem
                  key={`${name}_${item[valueKey]}`}
                  value={item[valueKey]}
                >
                  <Stack>
                    <Typography>{item[labelKey]}</Typography>
                    {item.description ? (
                      <Typography variant="caption">
                        {item.description}
                      </Typography>
                    ) : null}
                  </Stack>
                </MenuItem>
              ))}
            </Select>
            {helperText && (
              <FormHelperText id={helperTextId} {...FormHelperTextProps}>
                {error
                  ? typeof renderError === "function"
                    ? renderError(error)
                    : error.message
                  : helperText}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
      rules={rules}
    />
  );
}

export default FormSelect;
