import StartupCard from "@/components/shared/startup-card";

const ProjectContainer = ({ query }: { query: string }) => {
  const posts = [
    {
      _createdAt: new Date(),
      views: 30,
      author: { _id: 1, name: "Aymen Jdily" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1729273789373-f17041e81224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col px-5 py-12">
      <p className="text-xl font-[600]">
        {query ? `Search resutls for "${query}"` : "All Projects"}
      </p>
      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => <StartupCard post={post} key={post._id} />)
        ) : (
          <p className="no-results"></p>
        )}
      </div>
    </section>
  );
};

export default ProjectContainer;
