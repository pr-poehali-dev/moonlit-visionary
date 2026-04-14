export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Колледж</h3>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О филиале
                </a>
                <a
                  href="#news"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Новости
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Абитуриентам</h3>
                <a
                  href="#specialties"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Специальности
                </a>
                <a
                  href="#admission"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Поступление
                </a>
                <a
                  href="#docs"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Документы
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Адрес</h3>
                <p className="text-white text-sm sm:text-base">г. Щигры, Курская обл.</p>
                <p className="text-neutral-400 text-sm sm:text-base">Щигровский филиал</p>
                <p className="text-neutral-400 text-sm sm:text-base">ОБПОУ «КМК»</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 max-w-xs">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Контакты</h3>
                <p className="text-neutral-400 text-xs sm:text-sm">Заведующий филиалом:</p>
                <a href="tel:+74714542394" className="text-white hover:text-neutral-400 transition-colors text-sm">+(47145) 4-23-94</a>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">Учительская:</p>
                <a href="tel:+74714542391" className="text-white hover:text-neutral-400 transition-colors text-sm">+(47145) 4-23-91</a>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">Учебная часть:</p>
                <a href="tel:+74714542705" className="text-white hover:text-neutral-400 transition-colors text-sm">+(47145) 4-27-05</a>
                <a href="https://kolmed.ru" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors text-sm mt-1">kolmed.ru</a>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">Пн–Пт: 8:00–17:00</p>
                <p className="text-neutral-400 text-xs sm:text-sm">Перерыв: 12:00–13:00</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[10vw] sm:text-[9vw] lg:text-[8vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                КМК<br/>ЩИГРЫ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Щигровский филиал КМК</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}