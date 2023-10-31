import { Button } from "@mui/material";
import { ComponentTemplate } from "../schema";

export const button: ComponentTemplate = {
  name: "Button",
  description: "A button with text",
  id: "button",
  component: Button,
  props: [
    {
      name: "Variant",
      id: "variant",
      type: "choice",
      required: false,
      default: "text",
      choices: [
        {
          name: "Text",
          description: "A transparent button with text",
          value: "text",
        },
        {
          name: "Outlined",
          description: "A transparent button with text and an outline",
          value: "outlined",
        },
        {
          name: "Contained",
          description: "A solid button with text",
          value: "contained",
        },
      ],
    },
    {
      name: "Color",
      id: "color",
      type: "choice",
      required: false,
      default: "primary",
      choices: [
        {
          name: "Primary",
          description: "The primary colour from the theme",
          value: "primary",
        },
        {
          name: "Secondary",
          description: "The secondary colour from the theme",
          value: "secondary",
        },
        {
          name: "Info",
          description: "The info colour from the theme",
          value: "info",
        },
        {
          name: "Success",
          description: "The success colour from the theme",
          value: "success",
        },
        {
          name: "Warning",
          description: "The warning colour from the theme",
          value: "warning",
        },
        {
          name: "Error",
          description: "The error colour from the theme",
          value: "error",
        },
      ],
    },
    {
      name: "Text",
      id: "text",
      type: "string",
      required: true,
      isChildNode: true,
    },
  ],
  transformProps: (template: ComponentTemplate, props: any) => {
    const receivedProps = props || {};
    const childNodes = template.props.filter((prop) => prop.isChildNode);
    const requiredFields = template.props.filter((prop) => prop.required);
    return {
      props: {
        variant: receivedProps.variant,
        color: receivedProps.color,
      },
      children: childNodes.map((node) => receivedProps[node.id]),
      isValid: requiredFields.every((field) => !!receivedProps[field.id]),
    };
  },
};
