import { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

export interface FormProps<F extends FieldValues> extends UseFormProps<F> {
  children: React.ReactNode;
  FormProps?: React.HTMLProps<HTMLFormElement>;
  onSubmit?: SubmitHandler<F>;
  onChange?: (value: any) => any;
}
