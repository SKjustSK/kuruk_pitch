



"use client";

import Image from "next/image";

export default function Home() {
  
  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-white-900 text-white">
     
      <nav className="bg-blue-500 bg-opacity-10 left-0 flex justify-between items-center px-10 py-5 fixed w-full top-0 z-50 shadow-lg">
        <h1 className="text-5xl font-bold">EagleEyes</h1>
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-black text-2xl mr-10 ml-0"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("crowd")}
            className="hover:text-black text-2xl mr-10"
          >
            Crowd Management
          </button>
          <button
            onClick={() => scrollToSection("target")}
            className="hover:text-black text-2xl mr-10"
          >
            Target Detection
          </button>
          <button
            onClick={() => scrollToSection("crime")}
            className="hover:text-black text-2xl mr-10"
          >
            Crime Prevention
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen px-10 pt-20 bg-gray-100"
      >
        <div className="text-left text-gray-900">
          <h2 className="text-4xl font-bold mb-4">Advanced CCTV Monitoring</h2>
          <p className="text-lg mb-6">
            Real-time surveillance with AI-based anomaly detection and <br></br>
            high-definition monitoring for total security.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Learn More
          </button>
        </div>

        <div className="ml-10">
          <Image
            src="/cctv4.webp"
            alt="CCTV Monitoring"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Crowd Management section  */}
      <section
        id="crowd"
        className="flex items-center justify-center h-screen px-10 bg-blue-100"
      >
        <div className="text-left text-gray-900">
          <h2 className="text-4xl font-bold mb-4">Crowd Management</h2>
          <p className="text-lg mb-6">
            AI-powered analytics to monitor and manage large crowds efficiently.
          </p>
          <Image
            src="/crowd3.jpg"
            alt="Crowd Management"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Manage Crowd
          </button>
      </section>

      {/* Target Detection Section */}
      <section
        id="target"
        className="flex items-center justify-center h-screen px-10 bg-green-100"
      >
        <div className="text-left text-gray-900">
          <h2 className="text-4xl font-bold mb-4">Target Detection</h2>
          <p className="text-lg mb-6">
            Advanced object recognition and tracking to identify potential
            threats in real-time.
          </p>
          <Image
            src="/rArea.png"
            alt="Target Detection"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Detect Target
          </button>
      </section>

      {/* Crime Prevention Section */}
      <section
        id="crime"
        className="flex items-center justify-center h-screen px-10 bg-red-100"
      >
        <div className="text-left text-gray-900">
          <h2 className="text-4xl font-bold mb-4">Crime Prevention</h2>
          <p className="text-lg mb-6">
            Real-time analysis of surveillance footage to prevent criminal
            activities before they occur.
          </p>
          <Image
            src="/crime.jpeg"
            alt="Crime Prevention"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Prevent Crime
          </button>
      </section>
    </div>
  );
}




