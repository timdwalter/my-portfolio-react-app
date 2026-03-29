import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage: NextPage = () => {
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
        {/* HERO SECTION WITH PROFILE */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                {/* Profile Image */}
                <div
                  className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px]
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

                {/* Intro Text */}
                <div>
                  <h1 className="text-5xl font-bold text-secondary-900 mb-6">
                    Hi, I&apos;m Tim
                  </h1>
                  <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                    I&apos;m a <span className="font-semibold text-primary-600">software developer, cloud architect, and tech leader</span> with 5+ years of experience building scalable systems and mentoring development teams.
                  </p>
                  <p className="text-lg text-secondary-700 leading-relaxed">
                    My mission is to help organizations deliver software that matters, while building cultures where great people thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MY STORY SECTION */}
        <section className="py-20 bg-secondary-50">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                My Story
              </h2>
              <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
                <p>
                  I started my career deep in the code, building systems and solving complex technical problems. But over time, I discovered something equally fascinating: the intersection of technology and people.
                </p>
                <p>
                  Today, I blend technical expertise with leadership skills to solve complex problems and guide teams toward excellence. I believe the best software comes from great collaboration, clear communication, and shared purpose.
                </p>
                <p>
                  When I&apos;m not building or mentoring, I&apos;m writing about technical leadership and human psychology—exploring how we can build better teams and ship better products. I&apos;m passionate about helping developers grow their leadership skills and creating engineering cultures where people love to work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I DO SECTION */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                What I Do
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-secondary-50 rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Software Development
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    Build scalable, maintainable systems with modern tech stacks. Expertise in Java, cloud platforms, and architecting solutions that grow with your business.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Cloud Architecture
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    Design and implement cloud solutions that are secure, cost-effective, and future-proof. Help teams migrate, scale, and optimize their infrastructure.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Tech Leadership
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    Coach and mentor development teams. Establish technical standards, foster innovation, and create cultures where engineers love to work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I OFFER SECTION */}
        <section className="py-20 bg-secondary-50">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                What I Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl text-primary-500 flex-shrink-0">✓</span>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">Expert Consultation</h3>
                      <p className="text-secondary-700 leading-relaxed">Strategic guidance on software architecture, tech decisions, and team structure</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl text-primary-500 flex-shrink-0">✓</span>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">Development Services</h3>
                      <p className="text-secondary-700 leading-relaxed">Full-cycle development of web applications, microservices, and cloud solutions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl text-primary-500 flex-shrink-0">✓</span>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">Team Leadership</h3>
                      <p className="text-secondary-700 leading-relaxed">Tech leadership roles, team mentoring, and organizational development</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl text-primary-500 flex-shrink-0">✓</span>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">Technical Writing</h3>
                      <p className="text-secondary-700 leading-relaxed">Insights on team dynamics, technical leadership, and software development practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary-900 mb-12">
                Let&apos;s Connect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="https://www.linkedin.com/in/tim-d-walter/"
                  className="bg-secondary-50 rounded-lg border border-primary-200 p-6 hover:border-primary-500 hover:bg-primary-50 hover:shadow-lg transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Professional profile and recommendations
                  </p>
                </a>

                <a
                  href="https://www.xing.com/profile/Tim_Walter96/cv"
                  className="bg-secondary-50 rounded-lg border border-primary-200 p-6 hover:border-primary-500 hover:bg-primary-50 hover:shadow-lg transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-2">
                    XING
                  </h3>
                  <p className="text-sm text-secondary-600">
                    CV and career information
                  </p>
                </a>

                <a
                  href="https://github.com/Tim-D-walter"
                  className="bg-secondary-50 rounded-lg border border-primary-200 p-6 hover:border-primary-500 hover:bg-primary-50 hover:shadow-lg transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-2">
                    GitHub
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Check out my code and projects
                  </p>
                </a>

                <a
                  href="mailto:tim.d.walter@web.de"
                  className="bg-secondary-50 rounded-lg border border-primary-200 p-6 hover:border-primary-500 hover:bg-primary-50 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-2">
                    Email
                  </h3>
                  <p className="text-sm text-secondary-600 break-all">
                    tim.d.walter@web.de
                  </p>
                </a>
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
                Whether you need a new feature built, infrastructure designed, or a team led—let&apos;s talk about how I can help.
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

export default AboutPage;
