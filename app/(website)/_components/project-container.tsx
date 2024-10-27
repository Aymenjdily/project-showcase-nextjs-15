import ProjectCard from "@/components/shared/project-card";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { ProjectsQuery } from "@/sanity/lib/queries";
import { ProjectCardType } from "@/types";

const ProjectContainer = async ({ query }: { query: string }) => {
  const { data: posts } = await sanityFetch({ query: ProjectsQuery });

  return (
    <section className="mx-auto flex max-w-7xl flex-col px-5 py-12">
      <p className="text-xl font-[600]">
        {query ? `Search resutls for "${query}"` : "All Projects"}
      </p>
      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post: ProjectCardType) => (
            <ProjectCard post={post} key={post._id} />
          ))
        ) : (
          <p className="">No results</p>
        )}
      </div>
      <SanityLive />
    </section>
  );
};

export default ProjectContainer;
