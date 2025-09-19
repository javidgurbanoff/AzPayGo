export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-[#f7f5f0] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-3xl font-semibold text-[#aa8453]">404</p>
        <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-black sm:text-7xl">
          Oops! Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-700 sm:text-xl">
          Apologies, The page you're looking for might be unavailable or has
          been moved.
        </p>

        <div className="mt-8">
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury furniture setup"
            className="w-[400px] h-[250px] object-cover rounded-md shadow-lg mx-auto"
          />
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-[#aa8453] px-5 py-3 text-sm font-semibold text-white  hover:bg-[#2b2b2b] hover:text-[#aa8453] transition-all"
          >
            Go back home
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold text-black hover:text-[#aa8453]"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
