"use client";

import Image from "next/image";
import Link from "next/link";
import images from "../../public/images.json";
import { useState, useEffect } from "react";

function shuffleArray(array: string[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function Home() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="relative w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-8 flex flex-col items-center justify-center px-8 fixed top-0 z-10 shadow-lg">
        <div className="absolute inset-0 bg-cover opacity-40" style={{ backgroundImage: "url('/img/confetti-background.png')" }}></div>

        <h1 className="text-5xl font-extrabold z-10 text-center">
          🎉 Happy 100th Birthday, Jerry! 🎉
        </h1>
        <p className="text-2xl mt-3 z-10 text-center">
          Celebrating a Century of Wonderful Memories
        </p>

        <Link href="https://airtable.com/appf7D6fF4UUK1uth/pagaqJvaCjL2dynU6/form" passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-white text-red-600 px-8 py-4 text-xl rounded-full shadow-lg font-bold z-10 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Upload Photos of Jerry
          </a>
        </Link>
      </header>

      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div className="h-0"></div>

      <main className="p-4 flex-grow">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
          {shuffledImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="mb-4 break-inside-avoid hover:opacity-90"
            >
              <Image
                src={src}
                alt={`Photo of Jerry ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                style={{ cursor: "default" }} // Set cursor to default
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white text-center py-4 mt-8">
        <p>Made with ❤️ from his family</p>
        <p>Celebrating 100 years of love, joy, and cherished memories.</p>
      </footer>
    </div>
  );
}
