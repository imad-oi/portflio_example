import { Project } from '@models/project'
import React from 'react'

const LabelInput = (
    title: string,
    project: Project,
    setProject: React.Dispatch<React.SetStateAction<Project>>) => {
    return (
        <div>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    {title}
                </span>

                <input
                    value={project.title}
                    onChange={(e) => setProject({ ...project, title: e.target.value })}
                    required
                    name='tag'
                    className='form_input'
                    placeholder='#tag'
                />
            </label>
        </div>
    )
}

export default LabelInput