import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../features/Footer/footer";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-[#0B1F3A] lg:text-3xl">
                Blog
              </h2>

              <p className="hidden max-w-screen-sm text-m text-[#0B1F3A] md:block">
                Welcome to our Blog – your go-to space for insights, updates,
                and stories from the AzPaygo world. From tech trends to
                behind-the-scenes peeks, we share what inspires us and helps you
                stay informed.
              </p>
            </div>

            <a
              href="#"
              className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-[#0B1F3A] outline-none ring-indigo-300 transition duration-100 hover:bg-[#0B1F3A] hover:text-white focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <span className="relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                VR
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <span className="relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                Tech
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <span className="relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <span className="relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                Retro
              </span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
