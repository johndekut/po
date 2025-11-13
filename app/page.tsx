// pages/index.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-6 bg-white bg-opacity-70 backdrop-blur-md z-50 shadow-md">
        <Link href ="#home">
          <Image src = "/logo.jpg"
          height={60}
          width={80}
          alt="logo image"
          className="rounded-2xl"
          />
        </Link>
         
        <ul className="flex space-x-5 text-gray-800 text-lg font-bold">
          <li><Link href="#projects" className="hover:text-blue-500 transition  ">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-blue-500 transition">Skills</Link></li>
          <li><Link href="#about" className="hover:text-blue-500 transition">About</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500 transition">Contact</Link></li>
          <li><Link href="#home" className="hover:text-blue-500 transition">Home</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<section id="home" className="relative w-full h-screen">
  <div className="relative w-full inline-block">
    <Image
      src="/laptop.jpg"
      alt="Hero Image"
      width={1000}
      height={500}
      className="w-full h-auto"
    />

    <div className="grid grid-cols-3 gap-4 ">
  <div className="bg-gray-300 rounded-lg p-3 text-black text-center">
    <h2 className="font-bold"> project design</h2>
    <p></p>
  </div>
  <div className="bg-green-500 p-6 text-white text-center"></div>
  <div className="bg-green-500 p-6 text-white text-center">Box 3</div>
  <div className="bg-green-500 p-6 text-white text-center">Box 4</div>
  <div className="bg-green-500 p-6 text-white text-center">Box 5</div>
  <div className="bg-green-500 p-6 text-white text-center">Box 6</div>
</div>


    {/* Floating Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-5">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">Hi, I'm John Muchiri</h1>
      <p className="text-lg text-white drop-shadow-md">
        A Full Stack Web Developer crafting awesome web experiences.
      </p>
      <div className="flex justify-center space-x-4 mt-4 ">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-500 transition">
          View Projects
        </button>
        <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition">
          Contact Me
        </button>
       
      </div>
       <div>
          <button className="bg-amber-600 px-6 py-2 rounded-lg">Lets build your website</button>
        </div>
    </div>
  </div>
</section>


      {/* Placeholder Sections */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
      </section>

      <section id="skills" className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold text-blue-600">Skills</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">Projects</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold text-blue-600">Contact Me</h1>
      </section>
    </main>
  );
}
