import {
  Control,
  ControllerProps,
  FieldError,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { FormLabelProps } from "@mui/material/FormLabel";
import { InputProps } from "@mui/material/Input";
import { FormHelperTextProps } from "@mui/material/FormHelperText";

export interface FormInputProps<F extends FieldValues = FieldValues>
  extends Omit<InputProps, "name"> {
  control?: Control<F>;
  defaultValue?: PathValue<F, any>;
  FormHelperTextProps?: FormHelperTextProps;
  FormLabelProps?: FormLabelProps;
  helperText?: string;
  label?: string;
  name: Path<F>;
  renderError?: (error: FieldError) => string;
  rules?: ControllerProps["rules"] & {
    match?: { message: string; target: any };
  };
}
