import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <div className='flex flex-col md:flex-row justify-between items-baseline mb-6'>
          <p>
            Designed & Developed by <a href="#">Imad Oissafe</a>
          </p>
          <div className="desc text-left ms-3 flex space-x-6">
            <Link href="#">
              <Image width={15} height={15} src='/../public/icons/discord.png' alt='social' />
            </Link>
            <Link href="#">
              <Image width={15} height={15} src='/../public/icons/github.png' alt='face' />
            </Link>
            <Link href="#">
              <Image width={15} height={15} src='/../public/icons/slack.png' alt='face' />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer