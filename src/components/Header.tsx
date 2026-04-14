import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">КМКЩФ</div>
        <nav className="flex items-center gap-6 flex-wrap">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О колледже
          </a>
          <a
            href="https://vk.ru/club194039275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Новости
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
          <Link
            to="/specialties"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Специальности
          </Link>
          <Link
            to="/schedule"
            className="bg-white text-neutral-900 hover:bg-neutral-200 transition-colors duration-300 uppercase text-xs font-semibold px-4 py-2 rounded"
          >
            Расписание
          </Link>
        </nav>
      </div>
    </header>
  );
}