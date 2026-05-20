import { Sponsors } from "./Sponsors";
import { useState } from "react";

const team = [
  {
    name: "",
    role: "Socio Fundador / Director Creativo",
    src: "/mateo.jpg",
  },
  {
    name: "",
    role: "Socia Ejecutiva / Directora de Proyectos",
    src: "/valentina.jpg",
  },
  {
    name: "",
    role: "Director de Innovación & BIM",
    src: "/julian.jpg",
  },
];

export function Team() {
  return (
    <section id="team" className="relative bg-background text-foreground py-24 md:py-36 border-t border-foreground/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="relative mb-16 flex flex-col md:flex-row md:items-center md:justify-center w-full">
          <div className="w-full md:w-auto md:absolute md:left-0 mb-6 md:mb-0">
            <p data-reveal className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              — Dirección
            </p>
          </div>
          <h2
            data-reveal
            className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight text-center w-full"
          >
            Diseño con propósito.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-12">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col" data-reveal>
              <div className="overflow-hidden mb-6">
                <img
                  src={member.src}
                  alt=""
                  loading="lazy"
                  className="w-full aspect-[3/4] md:aspect-[4/5] object-cover rounded-sm transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
                />
              </div>
              <h3 className="font-display text-2xl font-light">
                {member.name}
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "El diseño del nuevo centro médico superó todas nuestras expectativas. Lograron un equilibrio perfecto entre la complejidad técnica sanitaria y un ambiente humano inundado de luz natural.",
    name: "Dr. Carlos Pellegrini",
    role: "Director General de Infraestructura Sanitaria",
    img: "/cliente1.jpg",
  },
  {
    quote: "La experiencia de proyectar nuestra vivienda bioclimática con Lambda fue impecable. Entienden el entorno de Rosario y optimizan los recursos de una manera que se nota día a día en el confort de la casa.",
    name: "Ing. Elena Fontanarrosa",
    role: "Propietaria de Casa M4",
    img: "/cliente2.jpg",
  },
  {
    quote: "Rigurosidad técnica, cumplimiento de plazos y un lenguaje estético contemporáneo exquisito. Es un estudio que eleva el estándar de la arquitectura corporativa en la región.",
    name: "Arq. Santiago Rossi",
    role: "Consultor de Desarrollos Urbanos",
    img: "/cliente3.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-background text-foreground py-24 md:py-36 border-t border-foreground/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <p data-reveal className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              — OPINIONES
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              data-reveal
              className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight"
            >
              Confianza materializada en espacios.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col justify-between" data-reveal>
              <div className="flex flex-col">
                <div className="text-[#B0A080] text-xs flex gap-1 mb-3">
                  {"★".repeat(5)}
                </div>
                <p className="text-muted-foreground font-light text-sm italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.img}
                  alt=""
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                />
                <div className="flex flex-col">
                  <h4 className="font-display text-base font-light text-foreground">
                    {t.name}
                  </h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
                — Contacto
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                data-reveal
                className="font-display font-light text-5xl md:text-8xl leading-[0.95] tracking-tight"
              >
                Iniciá una<br />
                <span className="italic text-accent">conversación.</span>
              </h2>
            </div>
          </div>

          <div className="mt-24 flex flex-col md:flex-row gap-16 md:gap-24" data-reveal>
            {/* Left Column: Contact Info */}
            <div className="w-full md:w-1/3 flex flex-col gap-12">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Estudio
                </p>
                <p className="font-display text-2xl leading-snug">
                  Bv. Oroño 425<br />
                  Rosario, Santa Fe
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Consultas
                </p>
                <a
                  href="mailto:hola@lambda-arch.studio"
                  className="font-display text-2xl leading-snug hover:text-accent transition-colors block"
                >
                  hola@lambda-arch.studio
                </a>
                <p className="font-display text-2xl leading-snug mt-2">+54 341 425-0021</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full md:w-2/3">
              <form onSubmit={handleSubmit} autoComplete="on" className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-body text-xs tracking-widest text-[#3C3A36]/60 uppercase">
                      Nombre
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
                      Correo electrónico
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
                    Asunto
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
                    Mensaje
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
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                {status === "success" && (
                  <p className="font-body text-xs tracking-widest text-emerald-700/90 uppercase mt-2 animate-fade-in">
                    — Mensaje enviado con éxito. Nos pondremos en contacto a la brevedad.
                  </p>
                )}

                {status === "error" && (
                  
                  <p className="font-body text-xs tracking-widest text-rose-700/90 uppercase mt-2">
                    — Error en el envío. Por favor, intentalo de nuevo.
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