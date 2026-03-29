import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage: NextPage = () => {
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
      className="flex flex-col items-center justify-center min-h-screen bg-secondary-50 px-4"
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-secondary-900 mb-2">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-secondary-700 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-all font-semibold shadow-lg hover:shadow-xl"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
