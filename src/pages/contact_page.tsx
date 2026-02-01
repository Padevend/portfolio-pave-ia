import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Terminal,
  Cpu,
  Globe,
  Phone,
  ShieldCheck,
  Activity,
} from "lucide-react";
import axios from "axios";

const CustomToast = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className={`fixed bottom-10 right-10 z-[200] px-6 py-3 rounded-xl border shadow-2xl font-mono text-xs flex items-center gap-3 ${
      type === "success"
        ? "bg-green-50 border-green-200 text-green-700"
        : "bg-red-50 border-red-200 text-red-700"
    }`}
  >
    <div
      className={`w-2 h-2 rounded-full ${type === "success" ? "bg-green-500" : "bg-red-500"} animate-pulse`}
    />
    {message}
  </motion.div>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [toastMsg, setToastMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await axios({
        method: "POST",
        url: "https://formspree.io/f/mnnrkozr",
        data: {
          ...formData,
        },
      });

      setStatus("success");
      setToastMsg("SIGNAL_DEPOSITED_SUCCESSFULLY");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setToastMsg("SIGNAL_TRANSMISSION_FAILED");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  useEffect(() => {
    document.title = "Contact - MBAH-NDAM TSOMELOU Pavel";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Padevend",
      color: "text-slate-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://cm.linkedin.com/in/mbah-nadam-pavel-developpeur-web",
      color: "text-blue-700",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:mbpavel21@gmail.com",
      color: "text-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-white overflow-hidden font-sans"
    >
      {/* Background Tech Decors */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            <div className="w-8 h-[1px] bg-blue-600" />
            Establish_Connection
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter"
          >
            GET IN <span className="text-blue-600">TOUCH.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Side: System Metrics & Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <Cpu className="text-blue-100" size={60} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Terminal size={20} className="text-blue-600" />
                Neural_Core.link
              </h3>
              <p className="text-slate-500 font-mono text-xs leading-relaxed mb-8">
                Prêt pour de nouvelles collaborations. Mon système est optimisé
                pour transformer vos concepts complexes en architectures
                numériques fluides.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                    <Mail size={14} />
                  </div>
                  <span className="text-slate-600">mbpavel21@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                    <Phone size={14} />
                  </div>
                  <span className="text-slate-600">+237 659 155 723</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                    <Globe size={14} />
                  </div>
                  <span className="text-slate-600">
                    Douala/Yaoundé, Cameroon
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="px-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-6">
                Social_Nodes
              </span>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:border-blue-500/50 hover:text-blue-600 transition-all"
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 border border-blue-50 bg-blue-50/30 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity size={16} className="text-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">
                  Available_for_work
                </span>
              </div>
              <ShieldCheck size={16} className="text-blue-300" />
            </div>
          </div>

          {/* Right Side: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest ml-1">
                    01_Identity
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NOM / ORGANISATION"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-mono focus:outline-none focus:border-blue-500/50 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest ml-1">
                    02_Signal_Path
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL_ADRESSE"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-mono focus:outline-none focus:border-blue-500/50 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest ml-1">
                  03_Data_Packet
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="VOTRE MESSAGE / CAHIER DES CHARGES..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-mono focus:outline-none focus:border-blue-500/50 focus:bg-white transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative w-full overflow-hidden bg-slate-900 text-white py-5 rounded-2xl font-mono text-xs font-black uppercase tracking-[0.3em] transition-all hover:bg-blue-600 disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "submitting" ? (
                    <>
                      <RefreshCw className="animate-spin" size={16} />
                      TRANSMISSION_IN_PROGRESS...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      EXECUTE_TRANSMISSION
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <div className="flex justify-between items-center text-[8px] font-mono text-slate-400 uppercase tracking-tighter mt-4">
                <span>Security: SSL_ENCRYPTED</span>
                <span>Port: 443_ACTIVE</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Notifications */}
      {status === "success" && (
        <CustomToast message={toastMsg} type="success" />
      )}
      {status === "error" && <CustomToast message={toastMsg} type="error" />}
    </section>
  );
};

// Helper for the spinner used in the button
const RefreshCw = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default Contact;
