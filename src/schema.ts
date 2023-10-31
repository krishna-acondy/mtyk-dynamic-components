import {
  array,
  object,
  string,
  number,
  boolean,
  infer as Infer,
  enum as ZodEnum,
  function as ZodFunction,
  any,
} from "zod";

const propTemplate = object({
  name: string(),
  id: string(),
  isChildNode: boolean().optional(),
  type: ZodEnum(["string", "number", "boolean", "choice", "stringArray"]),
  required: boolean(),
  default: string().or(number()).or(boolean()).optional(),
  description: string().optional(),
  choices: array(
    object({
      name: string(),
      description: string(),
      value: string().or(number()),
    })
  ).optional(),
});

const componentTemplate = object({
  name: string(),
  description: string().optional(),
  id: string(),
  props: array(propTemplate),
  component: ZodFunction().args(any()),
  transformProps: ZodFunction()
    .args(any())
    .returns(
      object({
        props: any(),
        children: array(any()),
        isValid: boolean(),
      })
    ),
});

const componentDefinition = object({
  id: string(),
  name: string(),
  createdAt: string().datetime(),
  templateId: string(),
  config: object({
    props: array(any()),
    children: array(any()).optional(),
  }),
});

export type ComponentTemplate = Infer<typeof componentTemplate>;

export type PropTemplate = Infer<typeof propTemplate>;

export type ComponentDefinition = Infer<typeof componentDefinition>;
