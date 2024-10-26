import Intro from "./_components/intro";
import ProjectContainer from "./_components/project-container";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <div>
      <Intro query={query!} />
      <ProjectContainer query={query!} />
    </div>
  );
}
