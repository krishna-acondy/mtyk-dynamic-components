import { DataTable } from "../components";
import { ComponentTemplate } from "../schema";

export const dataTable: ComponentTemplate = {
  name: "Data Table",
  description: "A table displaying data as rows with the configured columns",
  id: "dataTable",
  component: DataTable,
  props: [
    {
      name: "Data Source",
      id: "dataSource",
      type: "string",
      required: true,
    },
    {
      name: "Columns",
      id: "columns",
      type: "stringArray",
      required: true,
    },
  ],
  transformProps: (template: ComponentTemplate, props: any) => {
    const receivedProps = props || {};
    const childNodes = template.props.filter((prop) => prop.isChildNode);
    const requiredFields = template.props.filter((prop) => prop.required);
    const columns: string[] = (receivedProps.columns || []).map(
      (column: any) => column.value
    );
    return {
      props: {
        dataSource: receivedProps.dataSource,
        columns,
      },
      children: childNodes.map((node) => receivedProps[node.id]),
      isValid:
        requiredFields.every((field) => !!receivedProps[field.id]) &&
        columns.length > 0 &&
        columns.every((column) => !!column),
    };
  },
};
