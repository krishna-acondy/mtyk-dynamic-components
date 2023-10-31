import {
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { PropTemplate } from "../../schema";
import { Form, FormInput, FormInputList, FormSelect } from "../../components";
import { useCreateContext } from "./CreateContext";

const drawerWidth = 320;

const formFields = {
  string: (template: PropTemplate) => (
    <FormInput
      key={template.id}
      name={template.id}
      type="text"
      required={template.required}
      defaultValue={template.default}
      placeholder={template.description}
      label={template.name}
    />
  ),
  number: (template: PropTemplate) => (
    <FormInput
      key={template.id}
      name={template.id}
      type="number"
      required={template.required}
      defaultValue={template.default}
      placeholder={template.description}
      label={template.name}
    />
  ),
  boolean: (template: PropTemplate) => (
    <FormControl key={template.id}>
      <InputLabel htmlFor={template.id}>{template.name}</InputLabel>
      <Switch name={template.id} defaultChecked={!!template.default} />
    </FormControl>
  ),
  choice: (template: PropTemplate) => (
    <FormSelect
      key={template.id}
      name={template.id}
      label={template.name}
      options={(template.choices ?? []).map((choice) => ({
        label: choice.name,
        description: choice.description,
        value: choice.value,
      }))}
    />
  ),
  stringArray: (template: PropTemplate) => (
    <FormInputList
      label={template.name}
      name={template.id}
      required={template.required}
      key={template.id}
    />
  ),
};

export default function ConfigForm() {
  const { currentTemplate, setConfig } = useCreateContext();
  return currentTemplate ? (
    <Drawer
      sx={{
        width: drawerWidth,
        position: "relative",
        top: 0,
        left: 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          position: "relative",
          top: 0,
          left: 0,
        },
      }}
      variant="persistent"
      open
    >
      <Stack>
        <Stack px={2} py={1.5}>
          <Typography variant="h6">{currentTemplate.name}</Typography>
          <Typography variant="caption">
            {currentTemplate.description}
          </Typography>
        </Stack>
        <Divider />
        <Form
          onChange={(config) => {
            setConfig(config);
          }}
        >
          <Stack gap={4} p={2}>
            {currentTemplate.props.map((prop) => formFields[prop.type](prop))}
          </Stack>
        </Form>
      </Stack>
    </Drawer>
  ) : null;
}
