import { useState } from 'react';

export function Section3() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-full font-serif overflow-x-hidden mb-0 pb-0">
      {/* Preview image absolutely positioned and only rendered on hover */}
      {hovered !== null && (
        <img
          className="absolute left-1/2 top-12 md:top-20 -translate-x-1/2 z-20 h-40 w-32 md:h-108 md:w-86 rounded-3xl object-cover shadow-2xl transition-all duration-200 pointer-events-none"
          src={`https://awwwards-sundown-studio.vercel.app/vdonimgs/photo0${hovered}.avif`}
          alt="Project preview"
        />
      )}
      {[
        {
          id: 1,
          title: 'Carmelo Anthony 7pm In Brooklyn Set',
        },
        {
          id: 2,
          title: 'Maker Studio HIO',
        },
        {
          id: 3,
          title: '50th Aniversary',
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 5,
          title: 'Adipisicing elit. Fuga, cum.',
        },
      ].map((item) => (
        <div
          key={item.id}
          id={String(item.id)}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          className="h-24 md:h-36 w-full flex justify-between items-center border-b hover:bg-amber-400 transition-colors duration-200 px-2 md:px-4 relative z-10"
        >
          <div className="text-lg md:text-4xl flex items-center pl-2 md:pl-4">{item.title}</div>
          <div className="pr-2 md:pr-4 text-right">
            <div className="uppercase font-sans text-xs md:text-base">
              Wave sports entertainment
            </div>
            <div className="text-amber-900 flex justify-end text-xs md:text-base">Environments</div>
          </div>
        </div>
      ))}
    </div>
  );
}
