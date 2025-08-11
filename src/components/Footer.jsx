export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f1a] text-gray-400 py-6 text-center text-sm mt-12">
      {/* Top gradient border - half width and centered */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>

      <p>© {new Date().getFullYear()} Fuad Hasan. All rights reserved.</p>
    </footer>
  );
}
