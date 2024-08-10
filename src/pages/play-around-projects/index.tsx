import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <main className={` project-container ${inter.className}`}>
        <div
          className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px]
            before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
            before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px]
            after:translate-x-1/3
            after:content-[''] 
            "
        >
          <ul className="honeycomb wrapper-container">
            <li className="honeycomb-cell">
              <Link
                href="/play-around-projects/threejs"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Darth_Vader.png"
                  width={500}
                  height={500}
                  alt="ThreeJs Play-around"
                  priority
                />
                <div className="honeycomb-cell__title">ThreeJs Play-around</div>
              </Link>
            </li>

            <li className="honeycomb-cell flex-auto">
              <Link href="https://example.com/SH-Beach" className={"flex-auto"}>
                <Image
                  className="honeycomb-cell__image"
                  src="/SH-Beach.png"
                  width={500}
                  height={500}
                  alt="SH-Beach"
                  priority
                />
                <div className="honeycomb-cell__title flex-auto">SH-Beach</div>
              </Link>
            </li>

            <li className="honeycomb-cell">
              <Link
                href="https://example.com/DigitalAristoteles"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Digital_Aristoteles.png"
                  width={500}
                  height={500}
                  alt="Digital Aristoteles"
                  priority
                />
                <div className="honeycomb-cell__title">Digital Aristoteles</div>
              </Link>
            </li>

            <li className="honeycomb-cell">
              <Link href="https://example.com/LH-Leap" className={"flex-auto"}>
                <Image
                  className="honeycomb-cell__image"
                  src="/Lh-leap.png"
                  width={500}
                  height={500}
                  alt="LH-Leap"
                />

                <div className="honeycomb-cell__title">LH-Leap</div>
              </Link>
            </li>

            <li className="honeycomb-cell">
              <Link
                href="https://example.com/coming-up-soon"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="Polygon Pipeline"
                  priority
                />
                <div className="honeycomb-cell__title">
                  In Progress<small>Coming up soon</small>
                </div>
              </Link>
            </li>
            <li className="honeycomb-cell">
              <Link
                href="https://example.com/coming-up-soon"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="In Progress"
                  priority
                />
                <div className="honeycomb-cell__title">
                  In Progress<small>Wait for it</small>
                </div>
              </Link>
            </li>
            <li className="honeycomb-cell">
              <Link
                href="https://example.com/coming-up-soon"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="In Progress"
                  priority
                />
                <div className="honeycomb-cell__title">
                  In Progress<small>Just a second...</small>
                </div>
              </Link>
            </li>
            <li className="honeycomb-cell honeycomb__placeholder"></li>
            <li className="honeycomb-cell">
              <Link
                href="https://example.com/coming-up-soon"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="In Progress"
                  priority
                />
                <div className="honeycomb-cell__title">
                  In Progress<small>Just a tiny second...</small>
                </div>
              </Link>
            </li>
            <li className="honeycomb-cell honeycomb__placeholder"></li>
            <li className="honeycomb-cell">
              <Link
                href="https://example.com/coming-up-soon"
                className={"flex-auto"}
              >
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="In Progress"
                  priority
                />
                <div className="honeycomb-cell__title">
                  In Progress<small>...</small>
                </div>
              </Link>
            </li>
            <li className="honeycomb-cell honeycomb__placeholder"></li>
          </ul>
        </div>
      </main>
    </motion.div>
  );
}
