import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Footer() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[#64ffda] font-mono text-base mb-4">
          04. What's Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">
          Get In Touch
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Currently I'm looking for new and challenging opportunities. Whether
          you have a question, want to collaborate, or just want to say hi, my
          inbox is always open. I'll try my best to get back to you!
        </p>

        <a
          href="mailto:shekhtausif8090@gmail.com"
          className="inline-flex items-center gap-2 border-2 border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-all font-mono text-lg group"
        >
          <Send
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mt-16 mb-12">
          <a
            href="https://linkedin.com/in/shekhtausif8090"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] transition-all hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/shekhtausif8090"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] transition-all hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:shekhtausif8090@gmail.com"
            className="text-gray-400 hover:text-[#64ffda] transition-all hover:-translate-y-1"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-center">
          <a
            href="mailto:shekhtausif8090@gmail.com"
            className="text-gray-400 hover:text-[#64ffda] font-mono text-sm mb-2 block"
          >
            shekhtausif8090@gmail.com
          </a>
          <p className="text-gray-500 font-mono text-xs">
            Designed & Built by Shekh Tausif
          </p>
          <p className="text-gray-600 text-xs mt-1">
            © 2025 Shekh Tausif. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
