import { useFormContext, useFieldArray } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

type FormInputListProps = {
  name: string;
  label: string;
  required: boolean;
};

function FormInputList({ name, label, required }: FormInputListProps) {
  const { control, register, getFieldState } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const state = getFieldState(name);

  return (
    <FormControl error={!!state.error} required={required}>
      <FormLabel>{label}</FormLabel>
      <Stack gap={2} my={2}>
        {fields.length ? (
          fields.map((field, index) => (
            <Stack
              gap={2}
              key={field.id}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                key={field.id}
                {...register(`${name}.${index}.value`)}
              />
              <Tooltip title="Remove item" aria-label="add">
                <IconButton onClick={() => remove(index)}>
                  <Remove />
                </IconButton>
              </Tooltip>
            </Stack>
          ))
        ) : (
          <Typography textAlign="center">
            No items added yet. Add one using the button below.
          </Typography>
        )}
        <Box display="flex" justifyContent="center">
          <Tooltip title="Add item" aria-label="add">
            <IconButton onClick={() => append({ value: "" })}>
              <Add />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </FormControl>
  );
}

export default FormInputList;
