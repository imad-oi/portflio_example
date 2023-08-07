import Link from 'next/link'
import Image from 'next/image'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section id='hero'>
      <div className='flex flex-row items-center py-10 mb-36 '>
        <section className="w-full">
          <p className='text-left desc'>Hi 👋, My name is</p>
          <h1 className="head_text text-left">
            OISSAFE IMAD <br className='flex md:hidden' />
            <br className="max-md:hidden" />
            <span className="orange_gradient text-left">
              I'm a Full-Stack Web Developer,<br />
              ML & AI student
            </span>
          </h1>
          <div className="desc text-left ms-3 flex space-x-6">
            <Link href="#">
              <Image width={30} height={30} src='/../public/icons/discord.png' alt='social' />
            </Link>
            <Link href="#">
              <Image width={30} height={30} src='/../public/icons/github.png' alt='face' />
            </Link>
            <Link href="#">
              <Image width={30} height={30} src='/../public/icons/slack.png' alt='face' />
            </Link>
          </div>

        </section>
        <div className='lg:flex hidden'>
          <Image src='/../public/images/hero.png' alt='hero' width={700} height={700} />
        </div>
      </div>
      <div>
        <Feed />
      </div>
    </section>
  )
}

export default Home