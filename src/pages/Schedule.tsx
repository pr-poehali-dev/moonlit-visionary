import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const bellsWeekdayShift1 = [
  { pair: "1 пара", slots: ["8:15–9:00", "9:05–9:50"] },
  { pair: "2 пара", slots: ["10:00–10:45", "10:50–11:35"] },
  { pair: "3 пара", slots: ["12:05–12:50", "12:55–13:40"] },
  { pair: "4 пара", slots: ["13:50–14:35", "14:40–15:25"] },
];

const bellsWeekdayShift2 = [
  { pair: "0 пара", slots: ["12:05–12:50", "12:55–13:40"] },
  { pair: "1 пара", slots: ["14:15–15:00", "15:05–15:50"] },
  { pair: "2 пара", slots: ["16:00–16:45", "16:50–17:35"] },
  { pair: "3 пара", slots: ["17:45–18:30", "18:35–19:20"] },
];

const bellsSaturdayShift1 = [
  { pair: "1 пара", slots: ["8:00–8:45", "8:50–9:35"] },
  { pair: "2 пара", slots: ["9:45–10:30", "10:35–11:20"] },
  { pair: "3 пара", slots: ["11:30–12:15", "12:20–13:05"] },
];

const bellsSaturdayShift2 = [
  { pair: "1 пара", slots: ["11:40–12:25", "12:30–13:15"] },
  { pair: "2 пара", slots: ["13:25–14:10", "14:15–15:00"] },
  { pair: "3 пара", slots: ["15:10–15:55", "16:00–16:45"] },
];

function BellTable({ rows }: { rows: { pair: string; slots: string[] }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-neutral-100">
            <th className="border border-neutral-300 px-4 py-2 text-left font-semibold text-neutral-700">Пара</th>
            <th className="border border-neutral-300 px-4 py-2 text-left font-semibold text-neutral-700">1-й урок</th>
            <th className="border border-neutral-300 px-4 py-2 text-left font-semibold text-neutral-700">2-й урок</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
              <td className="border border-neutral-300 px-4 py-2 font-medium text-neutral-800">{row.pair}</td>
              <td className="border border-neutral-300 px-4 py-2 text-neutral-700">{row.slots[0]}</td>
              <td className="border border-neutral-300 px-4 py-2 text-neutral-700">{row.slots[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-neutral-900 text-white px-6 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wide">
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>
        <span className="text-neutral-600">|</span>
        <span className="text-sm uppercase tracking-wide font-medium">Щигровский филиал КМК</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Расписание звонков и занятий</h1>
        <p className="text-neutral-500 mb-8">Щигровский филиал ОБПОУ «КМК»</p>

        <Tabs defaultValue="bells">
          <TabsList className="mb-6 bg-neutral-200">
            <TabsTrigger value="bells" className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
              <Icon name="Bell" size={15} />
              <span className="ml-2">Расписание звонков</span>
            </TabsTrigger>
            <TabsTrigger value="lessons" className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
              <Icon name="BookOpen" size={15} />
              <span className="ml-2">Расписание занятий</span>
            </TabsTrigger>
          </TabsList>

          {/* Вкладка: Звонки */}
          <TabsContent value="bells">
            <div className="space-y-8">
              {/* Будни */}
              <div>
                <h2 className="text-lg font-bold text-neutral-800 mb-4 flex items-center gap-2">
                  <Icon name="CalendarDays" size={18} />
                  Будни (Пн–Пт)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-700 mb-3 text-sm uppercase tracking-wide">I Смена</h3>
                    <BellTable rows={bellsWeekdayShift1} />
                  </div>
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-700 mb-3 text-sm uppercase tracking-wide">II Смена</h3>
                    <BellTable rows={bellsWeekdayShift2} />
                  </div>
                </div>
              </div>

              {/* Суббота */}
              <div>
                <h2 className="text-lg font-bold text-neutral-800 mb-4 flex items-center gap-2">
                  <Icon name="CalendarDays" size={18} />
                  Суббота
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-700 mb-3 text-sm uppercase tracking-wide">I Смена</h3>
                    <BellTable rows={bellsSaturdayShift1} />
                  </div>
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-700 mb-3 text-sm uppercase tracking-wide">II Смена</h3>
                    <BellTable rows={bellsSaturdayShift2} />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Вкладка: Занятия */}
          <TabsContent value="lessons">
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <p className="text-neutral-500 text-sm mb-4">Актуальное расписание занятий</p>
              <img
                src="https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/bucket/0f73142e-df81-4083-9f28-45f62f38a2cd.png"
                alt="Расписание занятий"
                className="w-full rounded-md border border-neutral-200"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}