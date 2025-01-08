import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-12 px-4 relative overflow-hidden ">
      {/* Decorative Leaves */}
      <div className="absolute top-0 right-0">
        <Leaf className="text-gray-800 w-8 h-8 transform rotate-45" />
        <Leaf className="text-gray-800 w-6 h-6 absolute top-4 right-4" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="Lily Bakery"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-sm">©2023 website name, All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:bg-slate-500 transition-colors bg-yellow-700 rounded-2xl">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:bg-slate-500 transition-colors  bg-yellow-700 rounded-2xl">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:bg-slate-500 transition-colors  bg-yellow-700  rounded-2xl">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/blogcards" className="hover:text-white transition-colors">
                  Our menu
                </Link>
              </li>
              <li>
                <Link href="#cards" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Our menu
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get in touch</h3>
            <div className="space-y-2">
              <p>Sunday to Thursday</p>
              <p>Open from : 10:30 am to 11:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

