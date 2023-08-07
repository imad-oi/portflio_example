'use client'

import Form from '@components/Form'
import React, { useState } from 'react';
import { Project } from '@models/project';
import Swal from 'sweetalert2';

const page = () => {

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [project, setProject] = useState<Project>({
        _id: 0,
        title: '',
        description: '',
        image: 'https://github.com/imad-oi/promptopia/blob/main/app/create-prompt/page.tsx',
        link_demo: '',
        link_repo: '',
    });

    const postProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch('/api/project/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
            const data = await res.json()
            console.log(data)
            Swal.fire({
                title: 'Project added successfully!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (err) {
            Swal.fire('Error!',
                'Something went wrong, Check the console',
                'error')
            console.log(err)
        }

    }


    return (
        <Form
            type='Add Project'
            handleSubmit={(e: React.FormEvent<HTMLFormElement>) => { postProject(e) }}
            setProject={setProject}
            submitting={false}
            project={project}
        />
    )
}

export default page