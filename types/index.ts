import { Author, Project } from "@/sanity/types";

export type ProjectCardType = Omit<Project, "author"> & { author?: Author };
