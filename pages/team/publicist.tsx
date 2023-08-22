import React from 'react';

const Publicist = () => {
  const cards = [
    { title: 'Publicist 1' },
    { title: 'Publicist 2' },
    { title: 'Publicist 3' },
    { title: 'Publicist 4' },
    { title: 'Publicist 5' },
  ];

  return (
    <div className="grid h-full grid-cols-1 gap-2 bg-[#202020] min-h-screen p-6 shadow-lg">
      <div className="grid grid-rows-4 gap-2">
        <div className="text-center">
          <p className="max-h-10 text-4xl font-bold text-white whitespace-nowrap">
            Publicist
          </p>
          <div className="font-bold flex justify-center items-center h-16">
            <p className='text-white text-sm whitespace-nowrap'>Credits Left: 100</p>
          </div>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Album Release</p>
          <p>Content related to Album Release.</p>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Single Release</p>
          <p>Content related to single release.</p>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2'>Single Release</p>
          <p>Content related to single release.</p>
        </div>

        <div>
          <p className='max-h-10 text-2xl font-bold text-[#fff] mr-2 mb-4'>Hire a Publicist</p>
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

export default Publicist;
