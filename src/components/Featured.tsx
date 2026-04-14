import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Верхний блок: текст + фото */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl text-neutral-900 leading-tight mb-8 font-light">
              Более 30 лет мы готовим медицинских специалистов — фельдшеров, медицинских сестёр для Курской области и всей страны.
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-neutral-700">
                <span className="w-2 h-2 bg-neutral-900 rounded-full flex-shrink-0"></span>
                <span>Государственное аккредитованное учреждение</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <span className="w-2 h-2 bg-neutral-900 rounded-full flex-shrink-0"></span>
                <span>Бюджетные и внебюджетные места</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <span className="w-2 h-2 bg-neutral-900 rounded-full flex-shrink-0"></span>
                <span>Современная клиническая база</span>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[360px] lg:h-[460px]">
            <img
              src="https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/files/55202ce4-efb2-4792-8706-78ffeae7d4ef.jpg"
              alt="Студенты медицинского колледжа"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Три карточки: расписание, специальности, контакты */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Расписание */}
          <div className="border border-neutral-200 p-6 flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest text-neutral-500">Расписание</p>
            <h3 className="text-xl text-neutral-900 font-medium leading-snug">Расписание звонков и занятий</h3>
            <p className="text-sm text-neutral-600 flex-1">Будни и суббота, I и II смены — всё актуальное расписание в одном месте.</p>
            <Link
              to="/schedule"
              className="inline-block border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300 uppercase text-xs font-semibold px-5 py-2.5 w-fit tracking-wide"
            >
              Смотреть
            </Link>
          </div>

          {/* Специальности */}
          <div className="border border-neutral-200 p-6 flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest text-neutral-500">Специальности</p>
            <h3 className="text-xl text-neutral-900 font-medium leading-snug">Сестринское дело и Лечебное дело</h3>
            <p className="text-sm text-neutral-600 flex-1">Фельдшеры и медицинские сёстры — самые востребованные профессии в здравоохранении.</p>
            <Link
              to="/specialties"
              className="inline-block border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300 uppercase text-xs font-semibold px-5 py-2.5 w-fit tracking-wide"
            >
              Подробнее
            </Link>
          </div>

          {/* Контакты */}
          <div id="contact" className="border border-neutral-200 p-6 flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest text-neutral-500">Контакты</p>
            <h3 className="text-xl text-neutral-900 font-medium leading-snug">Щигровский филиал ОБПОУ «КМБК»</h3>
            <div className="flex flex-col gap-2 flex-1">
              <div>
                <p className="text-xs text-neutral-500">Заведующий филиалом</p>
                <a href="tel:+74714542394" className="text-sm text-neutral-900 hover:underline font-medium">+(47145) 4-23-94</a>
                <p className="text-xs text-neutral-500 mt-0.5">Копылович Мальвина Витальевна</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Учительская</p>
                <a href="tel:+74714542391" className="text-sm text-neutral-900 hover:underline font-medium">+(47145) 4-23-91</a>
              </div>
              <div>
                <p className="text-xs text-neutral-500">г. Щигры, Курская обл.</p>
                <a href="https://kolmed.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-900 hover:underline font-medium">kolmed.ru</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}