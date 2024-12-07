import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section>
    <footer className="bg-[#00140F] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          {/* <h2 className="text-lg font-bold">SecureData</h2> */}
          <div className="relative h-12 w-[100px] md:w-[100px] rounded-full">
            <Image src={"/logo.jpeg"} fill alt="logo" />
          </div>
          <p className="text-sm">
            Glow Paint is designed to handle a wide range of personal and
            professional information securely.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Solutions{" "}
                <span className="bg-gray-800 text-xs py-1 px-2 rounded-full ml-1">
                  New
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Releases
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Newsletter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help centre
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div className="mr-10">
          <h3 className="text-md font-semibold mb-2">Stay up to date</h3>
          <form className="flex  flex-col space-y-2 space-x-2 md:space-y-0 md:flex-row ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-black rounded-md focus:outline-none"
            />
            <button className="w-full sm:w-auto">Get Started</button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-sm text-gray-400 text-center">
        <p>© 2024 Glow Paint. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:underline">
            Terms
          </Link>
          <Link href="#" className="hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:underline">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  </section>
  )
}

export default Footer
