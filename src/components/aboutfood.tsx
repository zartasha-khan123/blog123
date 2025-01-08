import { Heart, Leaf, FlaskRoundIcon as Flask, Sprout } from 'lucide-react'
import Image from 'next/image'

export default function AboutFood() {
  return (
    <section className="bg-black min-h-screen text-white py-16 px-4 relative"  id='about'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">About our food</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our bakery and handcrafted pastries are of the highest quality. Come and enjoy our organic bakery items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-16">
            <Feature
              icon={<Heart className="w-8 h-8" />}
              title="Super yummy"
              description="Our bakery and handcrafted pastries are of the highest quality. Come and enjoy."
            />
            <Feature
              icon={<Flask className="w-8 h-8" />}
              title="No preservatives"
              description="Our bakery and handcrafted pastries are of the highest quality. Come and enjoy."
            />
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <Image
                src="/3.png"
                alt="Artisan bread held in hands"
                className="w-full h-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-16">
            <Feature
              icon={<Leaf className="w-8 h-8" />}
              title="Fresh product"
              description="Our bakery and handcrafted pastries are of the highest quality. Come and enjoy."
            />
            <Feature
              icon={<Sprout className="w-8 h-8" />}
              title="100% Organic"
              description="Our bakery and handcrafted pastries are of the highest quality. Come and enjoy."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-amber-400 text-amber-400 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 max-w-xs mx-auto">{description}</p>
    </div>
  )
}

