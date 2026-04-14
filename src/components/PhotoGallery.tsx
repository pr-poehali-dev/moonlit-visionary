const photos = [
  {
    url: "https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/bucket/93267361-1c01-4de0-9af9-1f289506cecb.jpg",
    alt: "Занятие в аудитории",
  },
  {
    url: "https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/bucket/259b4b61-c94a-4121-9a5b-4501e6d650e1.jpg",
    alt: "Торжественное построение студентов",
  },
  {
    url: "https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/bucket/b5e33b71-2a6c-4faf-8d34-027b290f1261.jpg",
    alt: "Гардероб колледжа",
  },
  {
    url: "https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/bucket/ff4ef707-60fe-474c-8f63-9f4d6aec1774.jpg",
    alt: "Лекция в аудитории",
  },
];

export default function PhotoGallery() {
  return (
    <section className="bg-neutral-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-sm tracking-widest text-neutral-500 mb-2">Жизнь колледжа</h2>
        <p className="text-2xl lg:text-3xl text-neutral-900 font-light mb-10 leading-tight">
          Внутри колледжа
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="overflow-hidden group">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
