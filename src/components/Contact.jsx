import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        toast.error(`❌ ${data.error || "Failed to send message."}`);
      }
    } catch (error) {
      toast.error("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section className="text-gray-200 py-20 container mx-auto">
      <Toaster position="top-center" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section - Contact Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Feel free to reach out to me through any of the channels below or send me a direct message using the form.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl border border-pink-500 flex items-center justify-center text-pink-500">
                <FaEnvelope size={22} />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-400">fuadhasan.web@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl border border-purple-500 flex items-center justify-center text-purple-500">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-gray-400">+088 016616662095</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl border border-green-500 flex items-center justify-center text-green-500">
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-400">Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-900 border border-gray-400/40 rounded-2xl p-8 shadow-lg">
          <form onSubmit={sendMail} className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-300 font-medium">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-700 outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-700 outline-none"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-700 outline-none"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-900 border border-gray-700 text-pink-500 font-semibold hover:text-white hover:bg-gradient-to-r from-pink-500 to-purple-500 transition cursor-pointer"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
