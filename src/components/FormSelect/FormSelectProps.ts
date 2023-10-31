import {
  Control,
  ControllerProps,
  FieldError,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'
import { SelectProps } from '@mui/joy/Select'
import { FormHelperTextProps } from '@mui/joy/FormHelperText'

export interface FormSelectProps<TFieldValue extends FieldValues>
  extends Omit<SelectProps<any, 'button'>, 'name' | 'onChange'> {
  control?: Control<FieldValues>
  defaultValue?: PathValue<TFieldValue, any>
  emitOptionOnChange?: boolean
  labelKey?: string
  label?: string
  helperText?: string
  FormHelperTextProps?: FormHelperTextProps
  name: Path<TFieldValue>
  onChange?: (value: any) => void
  options?: { label: string | number; value: string | number }[] | any[]
  renderError?: (error: FieldError) => string
  required?: boolean
  rules?: ControllerProps['rules']
  valueKey?: string
}
