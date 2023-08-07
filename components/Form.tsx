

import { Project } from '@models/project'
import Link from 'next/link'
import React, { useState } from 'react'



type FormProps = {
    type: string
    project: Project
    setProject: React.Dispatch<React.SetStateAction<Project>>
    submitting: boolean
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FunctionComponent<FormProps> = ({
    type,
    project,
    setProject,
    submitting,
    handleSubmit,
}: FormProps) => {

    // const [image, setImage] = useState( );

    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>
                    {type}
                </span>
            </h1>
            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Description of the project
                    </span>

                    <textarea
                        value={project.description}
                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                        required
                        className='form_textarea'
                        placeholder='write your prompt here...'
                    />
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Title of the project {' '}
                    </span>

                    <input
                        value={project.title}
                        onChange={(e) => setProject({ ...project, title: e.target.value })}
                        required
                        name='title'
                        className='form_input'
                        placeholder='inter your title here...'
                    />
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Link of repository {' '}
                    </span>

                    <input
                        value={project.link_repo}
                        onChange={(e) => setProject({ ...project, link_repo: e.target.value })}
                        required
                        name='link_repo'
                        className='form_input'
                        placeholder='inter your link here...'
                    />
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Title of demo {' '}
                    </span>

                    <input
                        value={project.link_demo}
                        onChange={(e) => setProject({ ...project, link_demo: e.target.value })}
                        required
                        name='link_demo'
                        className='form_input'
                        placeholder='inter your demo link here...'
                    />
                </label>
                <div>
                    <label className='font-satoshi font-semibold text-base text-gray-700'>
                        Upload image
                    </label>

                    <div className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg'>
                        <svg
                            className='w-6 h-6 text-gray-400 group-hover:text-gray-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                            />
                        </svg>
                        <p className='text-sm text-gray-400 group-hover:text-gray-600'>
                            Drag and drop an image
                        </p>

                        <p className='text-sm text-gray-400 group-hover:text-gray-600'>
                            or
                        </p>
                        <label htmlFor="fileInput" className="px-3 cursor-pointer py-1.5 text-sm bg-primary-orange rounded-full text-white">
                            Browse
                        </label>
                        <input
                            onChange={(e) => {
                                // const selectedFile = e.target.files[0];
                                // const reader = new FileReader();
                                // reader.onload = (event) => {
                                //     setImage(event.target.result);
                                // }
                                // reader.readAsDataURL(selectedFile);
                            }}
                            type='file'
                            id='fileInput'
                            className=' hidden px-3 cursor-pointer py-1.5 text-sm bg-primary-orange rounded-full text-white'
                        />
                    </div>
                </div>
                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm ' >
                        Cancel
                    </Link>

                    <button
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                        type='submit'
                        disabled={submitting}
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form