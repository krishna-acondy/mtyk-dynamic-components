import { Stack } from "@mui/material";
import ConfigForm from "./ConfigForm";
import Preview from "./Preview";
import CreateContext from "./CreateContext";

export default function Create() {
  return (
    <CreateContext>
      <Stack direction="row" width="100%" height="100%">
        <ConfigForm />
        <Preview />
      </Stack>
    </CreateContext>
  );
}
