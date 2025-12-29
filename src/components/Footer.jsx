import { Heart, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Shekh Tausif</h3>
            <p className="text-gray-400">
              Frontend Developer | React & Next.js Specialist
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:shekhtausif8090@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shekhtausif8090"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/shekhtausif8090"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> using React
            + Tailwind CSS
          </p>
          <p className="mt-2">© 2025 Shekh Tausif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
