import React from 'react';

const Marketer = () => {
  const cards = [
    { title: 'Marketer 1' },
    { title: 'Marketer 2' },
    { title: 'Marketer 3' },
    { title: 'Marketer 4' },
    { title: 'Marketer 5' },
  ];

  return (
    <div className="grid h-full grid-cols-1 gap-2 bg-[#202020] min-h-screen p-6 shadow-lg">
      <div className="grid grid-rows-3 gap-2">
        <div className="text-center">
          <p className="max-h-10 text-4xl font-bold text-white whitespace-nowrap">
            Marketer
          </p>
          <div className="font-bold flex justify-center items-center h-16">
            <p className='text-white text-sm whitespace-nowrap'>Credits Left: 100</p>
          </div>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Marketing Strategy</p>
          <p>Content related to Album Release.</p>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Social Media Direction</p>
          <p>Content related to single release.</p>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2 mb-4'>Hire a Marketer</p>
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

export default Marketer;
