import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "101 Leveraging Reciprocity in Software Development",
    description:
      "Explore how the principle of reciprocity can be effectively applied in software development teams to build stronger relationships, improve collaboration, and create a culture of mutual support.",
    url: "https://medium.com/@timwalter23/101-leveraging-reciprocity-in-software-development-3d69dd2c156e",
    date: "Medium",
    category: "Team Dynamics",
  },
  {
    title:
      "Persuasion in Software Development Teams: Mastering (Social) Conformity",
    description:
      "Learn how social conformity influences team dynamics and decision-making in software development. Discover strategies to influence and persuade while maintaining team integrity and psychological safety.",
    url: "https://medium.com/@timwalter23/persuasion-in-software-development-teams-mastering-social-conformity-5335cd7de421",
    date: "Medium",
    category: "Leadership",
  },
];

export default function Blog() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}
    >
      <main className={`wrapper-container ${inter.className}`}>
        <div className="about-container">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Blog & Articles
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl">
              Insights on software development, team dynamics, and technology
              leadership. Exploring best practices and lessons learned from
              years in the industry.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-primary-200 overflow-hidden transition-all hover:border-primary-500 hover:shadow-lg"
                whileHover={{ y: -4 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={
                      index === 0
                        ? "/blog-placeholder-reciprocity.svg"
                        : "/blog-placeholder-conformity.svg"
                    }
                    alt={post.title}
                    width={600}
                    height={315}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-secondary-500">{post.date}</span>
                  </div>

                  <h2 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-secondary-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center text-primary-500 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read on Medium
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* More Coming Section */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-primary-700 mb-3">
              More Coming Soon
            </h2>
            <p className="text-secondary-600 mb-4 max-w-2xl mx-auto">
              I&apos;m working on additional content covering topics like cloud
              architecture, best practices in software development, and team
              leadership. Stay tuned for more insights!
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-secondary-600 mb-4">
              Want to stay updated with new articles?
            </p>
            <a
              href="https://medium.com/@timwalter23"
              className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-all font-semibold shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Medium
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
