import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/files/6e35690b-14f5-4a35-ab5d-fa92f9955aa0.jpg"
          alt="Щигровский филиал Курского медицинского колледжа"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Щигровский филиал</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          КУРСКИЙ<br/>МЕДИЦИНСКИЙ<br/>КОЛЛЕДЖ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Готовим профессионалов здравоохранения с заботой о каждом студенте
        </p>
        <a
          href="https://vk.ru/club194039275"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-neutral-900 px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Читать новости
        </a>
      </div>
    </div>
  );
}