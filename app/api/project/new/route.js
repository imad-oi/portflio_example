import { connectToDatabase } from "@utils/database";
import Project from "../../../../models/connections/Project";

export const POST = async (req) => {
  const { title, description, link_repo, link_demo } = await req.json();

  const file = req.file;
  const project = req.project;

  try {
    await connectToDatabase();
    const newProject = new Project({
      title,
      description,
      link_repo,
      link_demo,
    });

    const existProject = await Project.findByTitleAndLinkRepo(title, link_repo);

    if (existProject) {
      return new Response("Project already exists", { status: 409 });
    }

    await newProject.save();

    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
