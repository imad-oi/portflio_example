"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Nav = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false)
  return (
    <nav
      className="nav">
      <Link href='/' className="flex gap-2 flex-center" >
        <Image src="/images/portflio_profile.png" alt="logo" width={50} height={50} className="object-contain" />
      </Link>
      <div className="sm:flex hidden items-center">
        <div className="flex gap-3 md:gap-5">
          <Link className="font-inter text-white font-bold " href='/about'>About</Link>
          <Link className="font-inter text-white font-bold " href='/projects'>Projects</Link>
          <Link className="font-inter text-white font-bold " href='/contact'>Contact</Link>
          <button className="blue_btn">
            Resume
          </button>
        </div>
      </div>

      <div className="sm:hidden flex ">
        {
          menuClicked ?
            (
              <>
                <Image onClick={() => setMenuClicked((prev) => !prev)} src='/../public/icons/close.png' width={30} height={30} alt="close" className="me-3" />
                <div className="absolute w-full mt-20 right-3 ml-5 bg-purple-500 rounded-lg p-5 transition-all">
                  <div className="flex flex-col gap-3 md:gap-5">
                    <Link className="font-inter text-white font-bold  text-center" href='#about'>About</Link>
                    <Link className="font-inter text-white font-bold  text-center" href='#projects'>Projects</Link>
                    <Link className="font-inter text-white font-bold  text-center" href='#contact'>Contact</Link>
                    <button className="font-satoshi text-white font-bold  text-center">
                      Resume ✔
                    </button>

                  </div>
                </div>
              </>
            )
            :
            <Image onClick={() => setMenuClicked((prev) => !prev)} src='/../public/icons/menu.png' width={30} height={30} alt="menu" className="me-3" />
        }

      </div>
    </nav>
  )
}

export default Nav