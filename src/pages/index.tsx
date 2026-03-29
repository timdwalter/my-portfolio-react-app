import { NextPage } from "next";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DeskAnimationSvg from "./DeskAnimationSvg";

const HomePage: NextPage = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 1 }}
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
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
                Building Scalable Software & IoT Solutions
              </h1>
              <p className="text-xl text-secondary-700 mb-12 leading-relaxed">
                I help companies architect and build robust software systems, cloud infrastructure, and IoT solutions. 
                With expertise in Java, cloud platforms, and team leadership.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/play-around-projects"
                  className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                >
                  View Projects
                </Link>
                <a
                  href="mailto:tim.d.walter@web.de"
                  className="px-8 py-3 bg-secondary-200 text-secondary-900 rounded-lg hover:bg-secondary-300 transition-all font-semibold shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-20 bg-secondary-50">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Projects Grid - 4 columns */}
                <div className="lg:col-span-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg border border-primary-200 p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-3 flex-shrink-0">
                        ThreeJS Visualization
                      </h3>
                      <p className="text-secondary-700 text-sm flex-grow">
                        Interactive 3D graphics and real-time data visualization.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg border border-primary-200 p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                        <span className="text-2xl">🌊</span>
                      </div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-3 flex-shrink-0">
                        SH-Beach
                      </h3>
                      <p className="text-secondary-700 text-sm flex-grow">
                        Full-stack application with scalable cloud architecture.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg border border-primary-200 p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-3 flex-shrink-0">
                        Digital Aristoteles
                      </h3>
                      <p className="text-secondary-700 text-sm flex-grow">
                        AI-powered system for intelligent insights and analysis.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg border border-primary-200 p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-3 flex-shrink-0">
                        IoT Solutions
                      </h3>
                      <p className="text-secondary-700 text-sm flex-grow">
                        Connected devices and real-time data processing systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* View All Box - Right side */}
                <div className="lg:col-span-1">
                  <Link
                    href="/play-around-projects"
                    className="bg-white rounded-lg border border-primary-500 p-6 hover:shadow-lg transition-all h-full flex flex-col items-center justify-center text-center group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      →
                    </div>
                    <h3 className="text-lg font-bold text-primary-600 mb-2">
                      View All
                    </h3>
                    <p className="text-sm text-secondary-600">
                      Explore more projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT (SHORT) */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-secondary-900 mb-8">
                  Who I Am
                </h2>
                <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                  I&apos;m a software developer and cloud architect with a focus on building scalable systems, IoT solutions, 
                  and leading high-performing teams. My expertise spans Java backend development, cloud infrastructure, 
                  and modern software architecture.
                </p>
                <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                  I believe great software comes from clear thinking, solid architecture, and strong teams. 
                  That&apos;s what I bring to every project.
                </p>
              </div>
              <div>
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-20 bg-secondary-50">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                  Core Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="bg-white rounded-lg border border-primary-200 p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 h-16 flex items-start">
                      IoT & Embedded
                    </h3>
                    <ul className="space-y-3 text-secondary-700">
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>IoT Architecture & Design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Real-time Data Processing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Connected Systems</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg border border-primary-200 p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 h-16 flex items-start">
                      Backend & Cloud
                    </h3>
                    <ul className="space-y-3 text-secondary-700">
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Java & Microservices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Cloud Architecture</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>DevOps & Infrastructure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg border border-primary-200 p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 h-16 flex items-start">
                      Leadership & Strategy
                    </h3>
                    <ul className="space-y-3 text-secondary-700">
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Technical Leadership</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Architecture Decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-500 font-bold">›</span>
                        <span>Team Mentoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-secondary-900 mb-8">
                  Latest Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <a
                    href="https://medium.com/@timwalter23/101-leveraging-reciprocity-in-software-development-3d69dd2c156e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-50 rounded-lg border border-primary-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <span className="text-sm font-semibold text-primary-600">TEAM DYNAMICS</span>
                    <h3 className="text-lg font-bold text-secondary-900 mt-2 mb-3">
                      Leveraging Reciprocity in Software Development
                    </h3>
                    <p className="text-secondary-700 text-sm">Read on Medium →</p>
                  </a>

                  <a
                    href="https://medium.com/@timwalter23/persuasion-in-software-development-teams-mastering-social-conformity-5335cd7de421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-50 rounded-lg border border-primary-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <span className="text-sm font-semibold text-primary-600">LEADERSHIP</span>
                    <h3 className="text-lg font-bold text-secondary-900 mt-2 mb-3">
                      Persuasion in Software Development Teams
                    </h3>
                    <p className="text-secondary-700 text-sm">Read on Medium →</p>
                  </a>
                </div>
              </div>
              <div>
                <Link
                  href="/blog"
                  className="inline-block w-full md:w-auto text-center px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-all font-semibold"
                >
                  View all articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-primary-50 border-t-2 border-primary-200">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-secondary-700 mb-12">
                Let&apos;s discuss how I can help bring your vision to life.
              </p>
              <a
                href="mailto:tim.d.walter@web.de"
                className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
