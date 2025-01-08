// // import Link from "next/link"
// // import { Button } from "@/components/ui/button"
// // import Image from "next/image"

// // export function SiteHeader() {
// //   return (
// //     <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
// //       <Link href="/" className="flex items-center space-x-2">
// //         <Image src="/logo.png" alt="Lilly Bakery" width={150} height={150} />
// //       </Link>
// //       <nav className="hidden md:flex items-center space-x-8">
// //         <Link href="/" className="text-white hover:text-gray-300 transition-colors">
// //           Home
// //         </Link>
// //         <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
// //           About
// //         </Link>
// //         <Link href="/blogcards" className="text-white hover:text-gray-300 transition-colors">
// //           Menu
// //         </Link>
// //         <Link href="#cards" className="text-white hover:text-gray-300 transition-colors">
// //           Blog
// //         </Link>
// //         <Link href='/contactus'><Button variant="outline" className="text-black border-white hover:bg-yellow-700 hover:text-black">
// //           Contact Us
// //         </Button></Link>
// //       </nav>
// //     </header>



// //   )
// // }


// 'use client'
// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export function SiteHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   // Toggle the menu on mobile devices
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black">
//       <Link href="/" className="flex items-center space-x-2">
//         <Image src="/logo.png" alt="Lilly Bakery" width={150} height={150} />
//       </Link>

//       {/* Mobile hamburger menu icon */}
//       <button
//         className="md:hidden text-white focus:outline-none"
//         onClick={toggleMenu}
//       >
//         <svg
//           className="w-6 h-6"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Navigation Links */}
//       <nav
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } md:flex items-center space-x-8 md:space-x-6`}
//       >
//         <Link href="/" className="text-white hover:text-gray-300 transition-colors">
//           Home
//         </Link>
//         <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
//           About
//         </Link>
//         <Link href="/blogcards" className="text-white hover:text-gray-300 transition-colors">
//           Menu
//         </Link>
//         <Link href="#cards" className="text-white hover:text-gray-300 transition-colors">
//           Blog
//         </Link>
//         <Link href="/contactus">
//           <Button variant="outline" className="text-black border-white hover:bg-yellow-700 hover:text-black">
//             Contact Us
//           </Button>
//         </Link>
//       </nav>
//     </header>
//   )
// }
'use client'
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the menu on mobile devices
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Lilly Bakery" width={150} height={150} />
      </Link>

      {/* Mobile hamburger menu icon */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex items-center space-x-8 md:space-x-6 md:flex-row flex-col absolute md:relative top-full left-0 bg-black md:bg-transparent w-full md:w-auto`}
      >
        <Link href="/" className="text-white hover:text-gray-300 transition-colors py-2 px-4">
          Home
        </Link>
        <Link href="#about" className="text-white hover:text-gray-300 transition-colors py-2 px-4">
          About
        </Link>
        <Link href="/blogcards" className="text-white hover:text-gray-300 transition-colors py-2 px-4">
          Menu
        </Link>
        <Link href="#cards" className="text-white hover:text-gray-300 transition-colors py-2 px-4">
          Blog
        </Link>
        <Link href="/contactus">
          <Button variant="outline" className="text-black border-white hover:bg-yellow-700 hover:text-black py-2 px-4">
            Contact Us
          </Button>
        </Link>
      </nav>
    </header>
  )
}

