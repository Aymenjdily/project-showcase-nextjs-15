import { defineQuery } from "next-sanity";

export const ProjectsQuery =
  defineQuery(`*[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
  _id, title, slug, _createdAt, author ->  { _id,  name, image, email}, views, description, category, mainImage
}`);
