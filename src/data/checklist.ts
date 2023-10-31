import { Checklist } from "../components";
import { ComponentTemplate } from "../schema";

export const checklist: ComponentTemplate = {
  name: "Checklist",
  description: "A list of items to check off",
  id: "checklist",
  component: Checklist,
  props: [
    {
      name: "Items",
      id: "items",
      type: "stringArray",
      required: true,
    },
  ],
  transformProps: (template: ComponentTemplate, props: any) => {
    const receivedProps = props || {};
    const childNodes = template.props.filter((prop) => prop.isChildNode);
    const requiredFields = template.props.filter((prop) => prop.required);
    const items: string[] = (receivedProps.items || []).map(
      (i: any) => i?.value as string
    );
    return {
      props: {
        items,
      },
      children: childNodes.map((node) => receivedProps[node.id]),
      isValid:
        requiredFields.every((field) => !!receivedProps[field.id]) &&
        items.some((item) => !!item),
    };
  },
};
