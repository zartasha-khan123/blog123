import Link from "next/link"

interface BlogPost {
  date: string
  title: string
  description: string
  href: string
}

const posts: BlogPost[] = [
  {
    date: "3 April 2023",
    title: "Cook oatmeal chocolate chip",
    description: "This is the first example post with different elements",
    href: "#",
  },
  {
    date: "3 April 2023",
    title: "Make these chocolate breads",
    description: "This is the first example post with different elements",
    href: "#",
  },
  {
    date: "30 March 2023",
    title: "Baking tips for yummy buns",
    description: "This is the first example post with different elements",
    href: "#",
  },
]

export default function BlogGrid() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="space-y-4">
              <time className="text-gray-400 text-sm">{post.date}</time>
              <h2 className="text-white text-2xl font-bold leading-tight hover:text-gray-200 transition-colors">
                <Link href={post.href}>{post.title}</Link>
              </h2>
              <p className="text-gray-400">{post.description}</p>
              <Link
                href={post.href}
                className="inline-block text-[#B8860B] hover:text-[#DAA520] transition-colors font-medium"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

