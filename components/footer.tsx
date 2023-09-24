import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
    <small className="mb-2 block text-xs">
      Copyright © 2023 Alperen Bekci
    </small>
    <a href="https://github.com/alperenbekci/alperenbekciPortfolio">
      <span className="bg-gradient-to-r from-purple-500 to-rose-400 text-xl m-2 text-transparent bg-clip-text font-extrabold">
        Open Source
      </span>
      💜🧡
    </a>
    <p className="text-xs mt-2">
      <span className="font-semibold">About this website:</span> built with
      React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
      Framer Motion, React Email & Resend
    </p>
  </footer>
  );
}
