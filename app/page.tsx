import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="#home">
          <div className="absolute z-50 py-3">
            <Image src="/favicon.ico" alt="logo" height="20" width="20" />
          </div>
        </Link>
        <div className="flex justify-end p-2 bg-green-500 text-black relative">
          <Link href="#home" className="pr-3 hover:text-white">Home</Link>
          <Link href="#About" className="pr-3 hover:text-white">About</Link>
          <Link href="#Projects" className="pr-3 hover:text-white">Projects</Link>
          <Link href="#skills" className="pr-3 hover:text-white">skills</Link>
          <Link href="#contact" className="pr-3 hover:text-white">contact</Link>
          <Link href="#About" className="pr-3 hover:text-white">About</Link>
        </div>
      </nav>

      {/* Keep image normal-sized */}
      <div className="relative flex justify-center mt-5"> 
        <Image src="/laptop.jpg" width={1000} height={500} alt="laptop" /> 

      
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 rounded-2xl text-white w-60 h-40 flex flex-col items-center justify-center shadow-lg">
         
          <span className="bold text-6xl">John Muchiri</span>
          <h3>full stack web developer</h3>
          <h3>Based in Nyeri, Kenya</h3>
        </div>

        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 items-end">
         
          <div className="bg-green-400 w-72 rounded-2xl pb-2">
            <div className="p-3.5 text-center text-black">
              <h1>Some content will go here</h1>
              <h1>Some content will go here</h1>
            </div>
          </div>
          <div className="bg-green-400 w-72 rounded-2xl pb-2">
            <div className="p-3.5 text-center text-black">
              <h1>Some content will go here</h1>
              <h1>Some content will go here</h1>
            </div>
          </div>
          <div className="bg-green-400 w-72 rounded-2xl pb-2">
            <div className="p-3.5 text-center text-black">
              <h1>Some content will go here</h1>
              <h1>Some content will go here</h1>
            </div>
          </div>
          <div className="bg-green-400 w-72 rounded-2xl pb-2">
            <div className="p-3.5 text-center text-black">
              <h1>Some content will go here</h1>
              <h1>Some content will go here</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
