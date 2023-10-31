import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormProps } from "./FormProps";
import React from "react";

function Form<F extends FieldValues>(props: FormProps<F>) {
  const { children, FormProps, onSubmit, onChange, ...useFormProps } = props;

  const methods = useForm<F>(useFormProps);

  React.useEffect(() => {
    const subscription = methods.watch((e) => onChange && onChange(e));
    return () => subscription.unsubscribe();
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <form
        {...FormProps}
        noValidate
        onSubmit={methods.handleSubmit(onSubmit ? onSubmit : () => null)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
