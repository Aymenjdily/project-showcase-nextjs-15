import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./author-type";
import { projectType } from "./project-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, authorType],
};
