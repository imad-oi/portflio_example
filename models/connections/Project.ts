import { model, models, Schema } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  link_repo: {
    type: String,
    required: [true, "link_repo is required"],
  },
  link_demo: {
    type: String,
    required: [true, "link_demo is required"],
  },
  image: {
    type: String,
    required: false,
    // required: [false, "image is not requre required"],
  },
});

projectSchema.statics.findByTitleAndLinkRepo = function (title, link_repo) {
  return this.findOne({ title, link_repo });
};

const Project = models.Project || model("Project", projectSchema);

export default Project;
