import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const specialties = [
  {
    icon: "🩺",
    title: "Сестринское дело",
    qualification: "Медицинская сестра / Медицинский брат",
    duration: "2 года 10 месяцев (на базе 11 классов)",
    form: "Очная",
    skills: [
      "Оказывать доврачебную помощь и ухаживать за пациентами разного профиля.",
      "Проводить инъекции, ставить капельницы, обрабатывать раны.",
      "Работать с функциональной медицинской аппаратурой (тонометры, глюкометры, системы ЭКГ).",
      "Оформлять медицинскую документацию и соблюдать санитарные нормы.",
    ],
    workplace: "Поликлиники, стационары, школы, детские сады, дома престарелых, санатории.",
    why: "Самая востребованная специальность в медицине. Вы будете нужны в любой больнице страны с первого дня после выпуска.",
  },
  {
    icon: "⚕️",
    title: "Лечебное дело",
    qualification: "Фельдшер",
    duration: "3 года 10 месяцев (на базе 11 классов)",
    form: "Очная",
    skills: [
      "Самостоятельно ставить диагнозы и назначать лечение (в рамках компетенции фельдшера).",
      "Проводить реанимационные мероприятия (СЛР, остановка кровотечений).",
      "Принимать роды и ухаживать за новорожденными.",
      "Работать в скорой помощи, ФАПе или кабинете неотложной помощи.",
    ],
    workplace: "Скорая помощь, фельдшерско-акушерские пункты (ФАПы), здравпункты на предприятиях, медпункты вокзалов и аэропортов.",
    why: "Максимальная самостоятельность. Фельдшер может работать практически как врач общей практики в сельской местности или на выезде.",
  },
];

export default function Specialties() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-neutral-900 text-white px-6 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wide">
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>
        <span className="text-neutral-600">|</span>
        <span className="text-sm uppercase tracking-wide font-medium">КМКЩФ</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Специальности</h1>
        <p className="text-neutral-500 mb-10">Щигровский филиал ОБПОУ «КМК» — готовим медицинских специалистов</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialties.map((spec, i) => (
            <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
              <div className="bg-neutral-900 px-6 py-5">
                <div className="text-3xl mb-2">{spec.icon}</div>
                <h2 className="text-xl font-bold text-white">{spec.title}</h2>
                <p className="text-neutral-400 text-sm mt-1">{spec.qualification}</p>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={15} className="text-neutral-500" />
                    <span className="text-neutral-700">{spec.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={15} className="text-neutral-500" />
                    <span className="text-neutral-700">Форма обучения: {spec.form}</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Чему научитесь:</p>
                  <ul className="space-y-1">
                    {spec.skills.map((skill, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-1.5 flex-shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-1">Где работать:</p>
                  <p className="text-sm text-neutral-700">{spec.workplace}</p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-1">Почему стоит выбрать:</p>
                  <p className="text-sm text-neutral-700">{spec.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl border border-neutral-200 p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-3">Контакты для поступления</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-neutral-500 mb-1">Заведующий филиалом</p>
              <a href="tel:+74714542394" className="text-neutral-900 font-medium hover:underline">+(47145) 4-23-94</a>
              <p className="text-neutral-500 text-xs mt-1">Копылович Мальвина Витальевна</p>
            </div>
            <div>
              <p className="text-neutral-500 mb-1">Учебная часть</p>
              <a href="tel:+74714542705" className="text-neutral-900 font-medium hover:underline">+(47145) 4-27-05</a>
            </div>
            <div>
              <p className="text-neutral-500 mb-1">Официальный сайт</p>
              <a href="https://kolmed.ru" target="_blank" rel="noopener noreferrer" className="text-neutral-900 font-medium hover:underline">kolmed.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
