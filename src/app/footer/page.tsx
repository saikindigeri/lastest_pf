"use client";


export default function Footer() {


  return (
    <footer
      className={`py-6 text-center text-sm transition-all duration-300 `}
    >
      <p className="text-lg font-medium">
        <span className="font-serif tracking-wide">Designed & Developed by</span>{" "}
        <span className="font-extrabold font-mono text-xl underline decoration-wavy">
          Sai Kumar
        </span>
      </p>
      <p className="mt-1 text-base italic opacity-80">
        Built with passion <span className="text-red-500 text-lg">❤️</span>
      </p>
    </footer>
  );
}
