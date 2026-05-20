import { Sponsors } from "./Sponsors";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 1. Agregamos un estado para el feedback visual ('idle' = quieto, 'sending' = enviando, 'success' = enviado, 'error' = falló)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // 2. Transformamos el handleSubmit en una función asíncrona (async)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Pasamos el estado a 'sending' (para cambiar el texto del botón)
    setStatus("sending");
    console.log("Form submitted:", formData);

    try {
      // Simulamos una petición al servidor que tarda 1.5 segundos (1500 ms)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Si todo sale bien, pasamos a estado de éxito
      setStatus("success");

      // ¡Limpiamos los campos del formulario de golpe!
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);

    } catch (error) {
      // Si algo fallara en el proceso, pasamos a estado de error
      console.error("Error submitting form:", error);
      setStatus("error");
    }

    setTimeout(() => {
        setStatus("idle");
      }, 3000);

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Sponsors />
      <section id="contact" className="relative bg-secondary text-foreground">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <p data-reveal className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                — Contact
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                data-reveal
                className="font-display font-light text-5xl md:text-8xl leading-[0.95] tracking-tight"
              >
                Begin a<br />
                <span className="italic text-accent">conversation.</span>
              </h2>
            </div>
          </div>

          <div className="mt-24 flex flex-col md:flex-row gap-16 md:gap-24" data-reveal>
            {/* Left Column: Contact Info */}
            <div className="w-full md:w-1/3 flex flex-col gap-12">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Studio
                </p>
                <p className="font-display text-2xl leading-snug">
                  42 Calvert Avenue<br />
                  London E2 7JP
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Enquiries
                </p>
                <a
                  href="mailto:hello@lambda-arch.studio"
                  className="font-display text-2xl leading-snug hover:text-accent transition-colors block"
                >
                  hello@lambda-arch.studio
                </a>
                <p className="font-display text-2xl leading-snug mt-2">+44 20 7946 0021</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full md:w-2/3">
              <form onSubmit={handleSubmit} autoComplete="on" className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-body text-xs tracking-widest text-[#3C3A36]/60 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="border-b border-[#3C3A36]/20 bg-transparent py-3 focus:border-[#B0A080] focus:outline-none transition-colors w-full autofill:shadow-[0_0_0px_1000px_var(--color-secondary)_inset] [-webkit-text-fill-color:#3C3A36]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-body text-xs tracking-widest text-[#3C3A36]/60 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="border-b border-[#3C3A36]/20 bg-transparent py-3 focus:border-[#B0A080] focus:outline-none transition-colors w-full autofill:shadow-[0_0_0px_1000px_var(--color-secondary)_inset] [-webkit-text-fill-color:#3C3A36]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-body text-xs tracking-widest text-[#3C3A36]/60 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="border-b border-[#3C3A36]/20 bg-transparent py-3 focus:border-[#B0A080] focus:outline-none transition-colors w-full autofill:bg-transparent shadow-[0_0_0px_1000px_transparent_inset]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-xs tracking-widest text-[#3C3A36]/60 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-b border-[#3C3A36]/20 bg-transparent py-3 focus:border-[#B0A080] focus:outline-none transition-colors w-full resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-[#B0A080] transition-colors cursor-pointer w-fit flex items-center gap-2 group"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                {status === "success" && (
                  <p className="font-body text-xs tracking-widest text-emerald-700/90 uppercase mt-2 animate-fade-in">
                    — Message sent successfully. We will get back to you shortly.
                  </p>
                )}

                {status === "error" && (
                  
                  <p className="font-body text-xs tracking-widest text-rose-700/90 uppercase mt-2">
                    — Transmission failed. Please try again.
                  </p>
                )}

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}