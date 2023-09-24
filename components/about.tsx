"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I began my career in sales and marketing. Leveraging my e-commerce experience, I transitioned into software 
development. My journey began with front-end development, and I subsequently delved into back-end 
development, ultimately becoming a full-stack developer. 
      </p>

      <p>Embracing emerging technologies in the web3 realm, I ventured into this field and started creating projects, 
especially for hackathons. As my knowledge in the web3 space continued to grow, I began using it for investments 
and consultancy services, managing portfolios, and engaging in partnership endeavors.

      </p>
      <p>I'm currently expanding my expertise in the web3 field while simultaneously working on the development of SaaS 
applications.</p>
    </motion.section>
  );
}
