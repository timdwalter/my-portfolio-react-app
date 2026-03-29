import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
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
          {/* Profile Section */}
          <div
            className="relative flex place-items-center mb-12 before:absolute before:h-[300px] before:w-[480px]
            before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
            before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px]
            after:translate-x-1/3 after:bg-gradient-conic after:from-primary-200 after:via-primary-200 after:blur-2xl
            after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary-700/10
            after:dark:from-primary-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
              src="/TDW-Profil.jpg"
              alt="Tim Daniel Walter - Software Developer & Cloud Architect"
              width={300}
              height={300}
              priority
            />
          </div>

          {/* Who I Am Section */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-secondary-900 mb-8">
              Hi, I&apos;m Tim
            </h1>
            <div className="prose prose-lg max-w-4xl text-secondary-700 space-y-6">
              <p className="text-xl leading-relaxed">
                I&apos;m a <span className="font-semibold text-primary-600">software developer, cloud architect, and tech leader</span> with
                5+ years of experience building scalable systems and mentoring development teams. My mission is to help
                organizations deliver software that matters, while building cultures where great people thrive.
              </p>
              
              <p className="text-lg leading-relaxed">
                I started my career deep in the code, but over time discovered I was equally passionate about people and processes.
                Today, I blend technical expertise with leadership skills to solve complex problems and guide teams toward
                excellence. I believe the best software comes from great collaboration, clear communication, and shared purpose.
              </p>

              <p className="text-lg leading-relaxed">
                When I&apos;m not building or mentoring, I&apos;m writing about the intersection of technical leadership and human
                psychology—exploring how we can build better teams and ship better products.
              </p>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-8">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary-600 mb-4">💻</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Software Development
                </h3>
                <p className="text-secondary-700">
                  Build scalable, maintainable systems with modern tech stacks. Expertise in Java, cloud platforms, and
                  architecting solutions that grow with your business.
                </p>
              </div>

              <div className="rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary-600 mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Cloud Architecture
                </h3>
                <p className="text-secondary-700">
                  Design and implement cloud solutions that are secure, cost-effective, and future-proof. Help teams
                  migrate, scale, and optimize their infrastructure.
                </p>
              </div>

              <div className="rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary-600 mb-4">👥</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Tech Leadership
                </h3>
                <p className="text-secondary-700">
                  Coach and mentor development teams. Establish technical standards, foster innovation, and create
                  cultures where engineers love to work.
                </p>
              </div>
            </div>
          </div>

          {/* What I Offer Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-8">
              What I Offer
            </h2>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-secondary-900">Expert Consultation</h3>
                  <p className="text-secondary-700">Strategic guidance on software architecture, tech decisions, and team structure</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-secondary-900">Development Services</h3>
                  <p className="text-secondary-700">Full-cycle development of web applications, microservices, and cloud solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-secondary-900">Team Leadership</h3>
                  <p className="text-secondary-700">Tech leadership roles, team mentoring, and organizational development</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-secondary-900">Technical Writing</h3>
                  <p className="text-secondary-700">Insights on team dynamics, technical leadership, and software development practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-8">
              Let&apos;s Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.linkedin.com/in/tim-d-walter/"
                className="group rounded-lg border border-primary-200 px-6 py-4 transition-all hover:border-primary-500 hover:bg-primary-50 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold text-primary-600 mb-2">
                  LinkedIn
                </h3>
                <p className="text-sm text-secondary-600">
                  Professional profile and recommendations
                </p>
              </a>

              <a
                href="https://www.xing.com/profile/Tim_Walter96/cv"
                className="group rounded-lg border border-primary-200 px-6 py-4 transition-all hover:border-primary-500 hover:bg-primary-50 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold text-primary-600 mb-2">
                  XING
                </h3>
                <p className="text-sm text-secondary-600">
                  CV and career information
                </p>
              </a>

              <a
                href="https://github.com/Tim-D-walter"
                className="group rounded-lg border border-primary-200 px-6 py-4 transition-all hover:border-primary-500 hover:bg-primary-50 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold text-primary-600 mb-2">
                  GitHub
                </h3>
                <p className="text-sm text-secondary-600">
                  Check out my code and projects
                </p>
              </a>

              <a
                href="mailto:tim.d.walter@web.de"
                className="group rounded-lg border border-primary-200 px-6 py-4 transition-all hover:border-primary-500 hover:bg-primary-50 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary-600 mb-2">
                  Email
                </h3>
                <p className="text-sm text-secondary-600 break-all">
                  tim.d.walter@web.de
                </p>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-600 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you need a new feature built, infrastructure designed, or a team led—let&apos;s talk about how I can help.
            </p>
            <Link
              href="mailto:tim.d.walter@web.de"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 active:bg-primary-100 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
