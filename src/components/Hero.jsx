import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Shekh Tausif
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            Frontend Developer
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-600 mb-8">
            <a
              href="mailto:shekhtausif8090@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm md:text-base">
                shekhtausif8090@gmail.com
              </span>
            </a>

            <a
              href="tel:+917218158458"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span className="text-sm md:text-base">+91 7218158458</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="text-sm md:text-base">Pune, India</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/shekhtausif8090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/shekhtausif8090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
