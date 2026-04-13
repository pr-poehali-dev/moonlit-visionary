export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/3d574815-d0a6-4c09-a5ca-1ac743e66ad0/files/55202ce4-efb2-4792-8706-78ffeae7d4ef.jpg"
          alt="Студенты медицинского колледжа"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">О нашем филиале</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 70 лет мы готовим медицинских специалистов — фельдшеров, медицинских сестёр и акушерок для Курской области и всей страны.
        </p>
        <div className="flex flex-col gap-3 mb-8">
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
        <a href="#news" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Новости колледжа
        </a>
      </div>
    </div>
  );
}