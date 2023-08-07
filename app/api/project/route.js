import Project from "@models/connections/Project";
import { connectToDatabase } from "@utils/database";

//api/project
export const GET = async (req) => {
  try {
    await connectToDatabase();

    console.log("GET /api/project called");

    const Projects = await Project.find({});
    return new Response(JSON.stringify(Projects), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to get Projects", { status: 500 });
  }
};