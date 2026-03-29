import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "101 Leveraging Reciprocity in Software Development",
    description:
      "Explore how the principle of reciprocity can be effectively applied in software development teams to build stronger relationships, improve collaboration, and create a culture of mutual support.",
    url: "https://medium.com/@timwalter23/101-leveraging-reciprocity-in-software-development-3d69dd2c156e",
    date: "Medium",
    category: "Team Dynamics",
    image: "/blog-placeholder-reciprocity.svg",
  },
  {
    title:
      "Persuasion in Software Development Teams: Mastering (Social) Conformity",
    description:
      "Learn how social conformity influences team dynamics and decision-making in software development. Discover strategies to influence and persuade while maintaining team integrity and psychological safety.",
    url: "https://medium.com/@timwalter23/persuasion-in-software-development-teams-mastering-social-conformity-5335cd7de421",
    date: "Medium",
    category: "Leadership",
    image: "/blog-placeholder-conformity.svg",
  },
];

const BlogPage: NextPage = () => {
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
      style={{ overflow: "hidden", maxWidth: "100%" }}
    >
      <main className="w-full">
        {/* HERO SECTION */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
                Blog & Articles
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                Insights on software development, team dynamics, and technology leadership.
                Exploring best practices and lessons learned from years in the industry.
              </p>
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-20 bg-secondary-50">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                  Latest Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.a
                      key={index}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-lg border border-primary-200 overflow-hidden transition-all hover:border-primary-500 hover:shadow-lg flex flex-col"
                      whileHover={{ y: -4 }}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={315}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 flex-shrink-0">
                          {post.title}
                        </h3>

                        <p className="text-secondary-600 mb-6 text-sm leading-relaxed flex-grow">
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
              </div>

              {/* View All Button */}
              <div className="mt-12">
                <a
                  href="https://medium.com/@timwalter23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto text-center px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-all font-semibold"
                >
                  Follow on Medium
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COMING SOON SECTION */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-12 text-center">
                <h2 className="text-3xl font-bold text-primary-700 mb-4">
                  More Content Coming Soon
                </h2>
                <p className="text-lg text-secondary-600 mb-8">
                  I&apos;m working on additional articles covering cloud architecture,
                  software development best practices, team leadership, and more.
                </p>
                <p className="text-secondary-600">
                  Stay tuned for insights on building better systems and leading stronger teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-primary-50 border-t-2 border-primary-200">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-secondary-700 mb-12">
                Want to get notified when I publish new articles?
              </p>
              <a
                href="https://medium.com/@timwalter23"
                className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Medium
              </a>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default BlogPage;
