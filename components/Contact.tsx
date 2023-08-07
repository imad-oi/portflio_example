import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (

    <div className='flex items-center justify-between py-36'>
      <div className='hidden lg:flex w-1/2'>
        <Image
          width={500}
          height={500}
          src="/../public/images/about_image.png"
          className=""
          alt="image_about" />
      </div>
      <div className='space-y-8 w-1/2'>
        <h2 className='text-3xl text-violet-600 font-bold'>
          Don't be a Stranger!
        </h2>
        <p className='descbg-slate-400'>
          Shoot me an email if you think we're a great fit and would
          like to work with me and let's have a great time while we're
          at it.
        </p>
        <p className='flex flex-row space-x-4'>
          <Image width={20} height={20} src='/../public/icons/mail.png' alt='mail_icon' />
          <span className='font-bold'>
            oissafe.imad@gmail.com
          </span>
        </p>
        <button className="violet_btn">
          <a href="mailto:imadoissaf@gmail.com">
            Get in Touch
          </a>
        </button>
      </div>
    </div>
  )
}

export default Contact