import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black mt-10">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10" />
      
      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Enjoy organic & fresh bakery
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Our bakery and handcrafted pastries are of the highest quality. Come and enjoy our organic bakery items.
            </p>
           <Link href='/contactus'> <Button 
              size="lg" 
              className="bg-[#C8A97E] hover:bg-[#B69A6F] text-black px-8 py-6 text-lg rounded-full"
            >
              Order Now
            </Button></Link>
          </div>
          <div className="relative">
            <Image
              src="/1.png"
              alt="Fresh bread slices"
              width={600}
              height={400}
              className="rounded-lg"
              priority
            />
            {/* Decorative elements */}
            <div className="absolute -left-12 -top-12 w-24 h-24 border-2 border-[#C8A97E] rounded-full opacity-20" />
            <div className="absolute -right-8 bottom-12 w-16 h-16 border border-[#C8A97E] opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

