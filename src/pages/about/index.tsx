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

          {/* Connect Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-8">
              Connect With Me
            </h1>
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
          <div className="text-center">
            <Link
              href="mailto:tim.d.walter@web.de"
              className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
