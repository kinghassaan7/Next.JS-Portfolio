import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <nav className="flex p-12 justify-between mr-8 ml-8 items-center">
          <div className="logo">
            <a
              href="#"
              className="font-bold text-2xl hover:text-purple-500 duration-500 delay-100 "
            >
              Portfolio.
            </a>
          </div>
          <ul className="links flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col ml-20 mt-4">
        <h1 className="text-5xl font-bold">Hi, I'm Saad Abid.</h1>
        <h3 className="text-blue-400 text-2xl font-bold mt-6">
          Frontend Developer
        </h3>
        <p className="mt-10 w-2/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          officiis et at aperiam nemo voluptatibus dolores numquam aspernatur
          similique quidem, fugiat, itaque ut, optio iusto consequatur aliquam.
        </p>
        <div className="btn-box mt-12">
          <a
            href="#"
            className="px-8 py-3 text-center bg-blue-500 rounded-lg hover:bg-purple-700 transition-all duration-700"
          >
            Hire Me
          </a>
          <a
            href="#"
            className="ml-10 px-8 py-3 text-center bg-blue-500 rounded-lg hover:bg-purple-700 transition-all duration-700"
          >
            Let's Talk
          </a>
        </div>
        <div className="flex mt-16 gap-10 mb-20">
          <a href="#" className="hover:opacity-50 duration-700">
            <img src="./instagram.png" alt="Instagram" className="w-7 h-7" />
          </a>
          <a href="#" className="hover:opacity-50 duration-700">
            <img src="./facebook.png" alt="Facebook" className="w-7 h-7" />
          </a>
          <a href="#" className="hover:opacity-50 duration-700">
            <img src="./twitter.png" alt="Twitter" className="w-7 h-7" />
          </a>
        </div>
      </main>
      <footer className="mt-5"></footer>
    </>
  );
};

export default Home;
