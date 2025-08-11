import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-10 py-16 text-gray-100 min-h-[400px]">
      {/* Left side: Contact info */}
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold text-pink-500">
          Contact <span className="italic">Me</span>
        </h2>
        <p className="text-lg max-w-md">
          Open to any adventure that involves learning and making cool stuff!
        </p>

        {/* Contact details */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white font-semibold text-lg">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:fuadhasan.web@gmail.com"
              className="hover:underline"
            >
              fuadhasan.web@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-white font-semibold text-lg">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/fuad05/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              @fuad05
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaMapMarkerAlt className="text-xl" />
            <span>Rajshahi, Bangladesh</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com/fuadhasan05"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition"
          >
            <FaGithub className="text-white" />
          </a>
          <a
            href="https://linkedin.com/in/fuad05"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition"
          >
            <FaLinkedin className="text-white" />
          </a>
          <a
            href="https://wa.me/08801616662095"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition"
          >
            <FaWhatsapp className="text-white" />
          </a>
          <a
            href="https://discord.com/users/.fuad_hasan"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition"
          >
            <FaDiscord className="text-white" />
          </a>
        </div>
      </div>

      {/* Right side: Contact form */}
      <form className="flex-1 max-w-lg p-6 rounded-lg border bg-gray-900 border-gray-400/40 shadow-lg flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 placeholder-gray-100 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 placeholder-gray-100 focus:outline-none"
          required
        />
        <select
          className="rounded-md py-3 px-4  bg-gray-500 text-gray-50 placeholder-gray-100 focus:outline-none"
          defaultValue="Project inquiries"
          required
        >
          <option disabled>Project inquiries</option>
          <option>Project inquiries</option>
          <option>Collaboration</option>
          <option>Others</option>
        </select>
        <textarea
          placeholder="Message"
          rows={5}
          className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 placeholder-gray-100 focus:outline-none resize-none"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-slate-800 hover:bg-slate-400 transition rounded-md py-3 font-semibold text-white flex justify-center items-center gap-2 cursor-pointer"
        >
          <FaTelegramPlane /> Send
        </button>
      </form>
    </section>
  );
}
