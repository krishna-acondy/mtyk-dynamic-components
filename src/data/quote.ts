import { Quote } from "../components";
import { ComponentTemplate } from "../schema";

export const quote: ComponentTemplate = {
  name: "Quote",
  description: "A piece of quoted text with an optional author",
  id: "quote",
  component: Quote,
  props: [
    {
      name: "Text",
      id: "text",
      type: "string",
      required: true,
    },
    {
      name: "Author",
      id: "author",
      type: "string",
      required: true,
    },
  ],
  transformProps: (template: ComponentTemplate, props: any) => {
    const receivedProps = props || {};
    const childNodes = template.props.filter((prop) => prop.isChildNode);
    const requiredFields = template.props.filter((prop) => prop.required);
    return {
      props: {
        text: receivedProps.text,
        author: receivedProps.author,
      },
      children: childNodes.map((node) => receivedProps[node.id]),
      isValid: requiredFields.every((field) => !!receivedProps[field.id]),
    };
  },
};
