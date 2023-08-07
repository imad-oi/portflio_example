import { Project } from '@models/project'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({ project }: ProjectCardProps) => {
  return (
    <div className='prompt_card shadow-md  rounded-lg max-w-sm'>
      <Image
        src='/../public/images/project_image.png' // project.image
        alt='hero'
        width={250}
        height={300}
        className='rounded-t-lg w-full'
      />
      <div className='p-4 pb-10 space-y-4 '>
        <h4 className='text-slate-900 text-2xl font-bold'>
          Bookshelf a full React Application Workshop
          {project.title}
        </h4>
        <p className='text-slate-700 font-satoshi'>
          {/* project.description.slice(0,50) */}
          Building a full React application from scratch. using (React JS, React Query, Bootstrap).
        </p>
        <div className='flex space-x-5'>
          <button className='text-slate-700 font-light flex items-center justify-between border border-slate-500 rounded-md p-2 text-center hover:bg-slate-700 hover:text-white'>
            <a href={project.link_repo}>
              Github
              <i className="fa fa-github ps-3" aria-hidden="true"></i>
            </a>
          </button>
          <button className='text-slate-700 font-light flex items-center justify-between border border-slate-500 rounded-md p-2 text-center hover:bg-slate-700 hover:text-white'>
            <a href={project.link_demo}>
              Demo
              <i className="fa fa-eye ps-3" aria-hidden="true"></i>
            </a>
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard