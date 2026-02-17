import Image from 'next/image'
import { Typewriter } from './typewriter'

export function Home() {
  const skills = [
    'React Specialist',
    'Typescript Expert',
    'Front-end Architect',
    'Tailwind CSS Enthusiast',
    'UI/UX Ambassador',
    'Developer Experience Champion',
    'Next.js Developer',
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="relative z-10 text-center px-4">
        <Image
          src="/joshmdiaz.jpg"
          alt="Josh M. Diaz"
          width={300}
          height={300}
          className="w-[200px] md:w-[300px] rounded-full object-cover mx-auto mb-8 shadow-lg border-4 border-purple-400"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Josh M. Diaz
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          I&apos;m a <Typewriter words={skills} />
        </p>
        {/* <a
          href="#contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get in Touch
        </a> */}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
    </section>
  )
}
