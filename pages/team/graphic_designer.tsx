import React from 'react';
import Image from 'next/image';

const GraphicDesigner = () => {
  const images = ['/images/placeholder_ai.png', '/images/placeholder_ai.png', '/images/placeholder_ai.png', '/images/placeholder_ai.png'];
  const renderImages = (images) => {
    return (
      <div className="flex mt-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`Image ${i + 1}`}
            width={80}
            height={80}
            className="rounded-md inline-block mr-2"
          />
        ))}
      </div>
    );
  };

  const cards = [
    { title: 'Designer 1' },
    { title: 'Designer 2' },
    { title: 'Designer 3' },
    { title: 'Designer 4' },
    { title: 'Designer 5' },
  ];

  return (
    <div className="grid h-full grid-cols-1 gap-2 bg-[#202020] min-h-screen p-6 shadow-lg">
      <div className="grid grid-rows-7 gap-2">
        <div className="text-center">
          <p className="max-h-10 text-4xl font-bold text-white whitespace-nowrap">
            Graphic Designer
          </p>
          <div className="font-bold flex justify-center items-center h-16">
            <p className='text-white text-sm whitespace-nowrap'>Credits Left: 100</p>
          </div>
        </div>

        <div>
          <div>
            <span className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Avatar</span>
            <button className="tapped_open_btn">generate more</button>
          </div>
          {renderImages(images)}
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Cover Art</p>
          {renderImages(images)}
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Headshots</p>
          {renderImages(images)}
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Stage Photos</p>
          {renderImages(images)}
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2 mb-4'>Hire a Designer</p>
          <div className="cards-container">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <button className="tapped_btn text-xs">Hire</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <button className="tapped_btn max-h-10 w-[86%]">
              Return to Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigner;
