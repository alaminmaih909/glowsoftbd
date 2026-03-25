export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      
      <div className="w-full max-w-md text-center flex flex-col items-center">
        
        {/* Logo */}
        <img
          src="/glowsoftbd.com.png"
          alt="GlowSoftBD Logo"
          className="w-32 sm:w-40 md:w-48 lg:w-52 mb-6"
        />

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#f4a896] mb-3">
          Coming Soon ✨
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-2 leading-relaxed">
          <span className="text-[#7ec8e3] font-semibold">GlowSoftBD</span> খুব শীঘ্রই আসছে  
          নতুন স্কিন কেয়ার প্রোডাক্ট নিয়ে 💖
        </p>

        <p className="text-xs sm:text-sm text-gray-400 mb-4">
          Stay connected with us!
        </p>

        {/* Social */}
        {/* <div className="flex flex-wrap justify-center gap-4 mt-3">
          <a
            href="#"
            className="text-[#f4a896] hover:text-[#7ec8e3] transition text-sm sm:text-base"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-[#f4a896] hover:text-[#7ec8e3] transition text-sm sm:text-base"
          >
            Instagram
          </a>
        </div> */}

      </div>
    </main>
  );
}