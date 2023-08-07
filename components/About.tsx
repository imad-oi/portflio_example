import Image from "next/image"


const About = () => {
  return (
    <section id='about' >
      <div
        className=''>

        <h2 className='head_text blue_gradient pb-4'>
          About me
        </h2>

        <div className=" flex flex-col lg:flex-row items-center pt-10  lg:space-y-6 sp justify-between">
          <Image
            width={600}
            height={600}
            src="/../public/images/about_image.png"
            className="lg:pb-24"
            alt="image_about" />

          <div className='space-y-10 w-1/2 lg:pb-24 '>
            <h3 className='font-bold text-3xl md:text-5xl text-center sm:text-left  '>I’m a software engineer mainly focused on <span className="blue_gradient">React</span>  & <span className="orange_gradient">Spring</span> ecosystem.</h3>
            <p className='text-3xl text-center sm:text-left '>I have multiple years of experience in both UI/UX and Frontend Development.
              Over the past 3 years, I've strengthened fundamentals in web engineering that I'm
              eager to deploy on challenging projects to expand my current skill set and tech stack.
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About