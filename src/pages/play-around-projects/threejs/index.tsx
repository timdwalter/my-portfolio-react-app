import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import React, { useRef, useState } from "react";
import App from "@/pages/play-around-projects/threejs/App";
import { Stats } from "@react-three/drei";
import { Leva } from "leva";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`wrapper-container ${inter.className}`}>
      <div className="about-container ">
        <div className="scene">
          <App />
          <Stats />
          <Leva collapsed />
        </div>
      </div>
    </main>
  );
}
