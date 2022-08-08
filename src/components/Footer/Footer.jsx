import React from "react";
function Footer() {
  return (
    <footer className="flex bg-gray-900 w-screen justify-center text-white">
      <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
        <div class="flex space-x-6 items-center justify-center">
          <ul class="flex space-x-6 ">
            <li class="flex justify-center items-center text-accent">
              <a class="text-base" href="https://github.com/Tiin24">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="2em"
                  height="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li class="flex justify-center items-center text-accent">
              <a
                class="text-base"
                href="https://www.linkedin.com/in/isaias-romero/"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
        <p class="text-paragraph opacity-80 text-[15px]">
          © 2022 Agustin Romero. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
