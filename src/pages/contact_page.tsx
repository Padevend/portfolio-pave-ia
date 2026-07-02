import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Globe,
  Phone,
  Loader2,
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
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className={`fixed bottom-10 right-10 z-[200] px-6 py-4 border shadow-lg text-xs font-medium flex items-center gap-3 bg-white ${
      type === "success"
        ? "border-emerald-200 text-emerald-700"
        : "border-red-200 text-red-700"
    }`}
  >
    <span
      className={`w-1.5 h-1.5 rounded-full ${
        type === "success" ? "bg-emerald-500" : "bg-red-500"
      }`}
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [toastMsg, setToastMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      setToastMsg("Votre message a bien été envoyé");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setToastMsg("L'envoi a échoué, réessayez plus tard");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  useEffect(() => {
    document.title = "Contact — Pavel Mbah-Ndam";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Padevend",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://cm.linkedin.com/in/mbah-nadam-pavel-developpeur-web",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:mbpavel21@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-24 bg-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,1)]" />
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">
              05 / Contact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-neutral-950 tracking-tight uppercase leading-none"
          >
            Parlons de <br />
            <span className="font-serif italic text-neutral-400 normal-case">
              votre projet.
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* COLONNE GAUCHE : informations */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-neutral-50/50 border border-neutral-200/80"
            >
              <h3 className="text-lg font-medium text-neutral-950 uppercase tracking-wide mb-4">
                Disponible pour de nouveaux projets
              </h3>
              <p className="text-neutral-500 text-xs font-light leading-relaxed mb-8 max-w-sm">
                Que vous ayez une idée précise ou un besoin encore flou, je
                suis à l'écoute pour transformer votre projet en une
                application claire, fiable et bien conçue.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:mbpavel21@gmail.com"
                  className="flex items-center gap-4 text-xs text-neutral-600 hover:text-blue-600 transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors duration-300 shrink-0">
                    <Mail size={14} />
                  </span>
                  mbpavel21@gmail.com
                </a>
                <a
                  href="tel:+237671941782"
                  className="flex items-center gap-4 text-xs text-neutral-600 hover:text-blue-600 transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors duration-300 shrink-0">
                    <Phone size={14} />
                  </span>
                  +237 671 941 782
                </a>
                <div className="flex items-center gap-4 text-xs text-neutral-600">
                  <span className="w-8 h-8 border border-neutral-200 flex items-center justify-center text-neutral-400 shrink-0">
                    <Globe size={14} />
                  </span>
                  Douala / Yaoundé, Cameroun
                </div>
              </div>
            </motion.div>

            <div>
              <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-[0.3em] block mb-6">
                Retrouvez-moi aussi ici
              </span>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-neutral-200 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
                    Nom ou organisation
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full bg-neutral-50/50 border border-neutral-200 px-5 py-3.5 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.com"
                    className="w-full bg-neutral-50/50 border border-neutral-200 px-5 py-3.5 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
                  Votre message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className="w-full bg-neutral-50/50 border border-neutral-200 px-5 py-3.5 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative w-full overflow-hidden bg-neutral-950 text-white py-4 text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-blue-600 disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Envoyer le message
                    </>
                  )}
                </span>
              </button>

              <p className="text-[10px] text-neutral-400 text-center">
                Connexion sécurisée · vos données ne sont partagées avec personne.
              </p>
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

export default Contact;