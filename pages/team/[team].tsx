import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Model = () => {
  const router = useRouter();
  const { team: modelId } = router.query;

  if (!modelId) {
    return <div>Loading...</div>;
  }

  console.log(modelId);

  return (
    <div className="grid h-full grid-cols-1 gap-2 bg-[#202020] min-h-screen p-6 shadow-lg">
      <div className="grid grid-rows-6 gap-2">
        <div className="flex justify-between items-center">
          <p className="max-h-10 text-4xl font-bold text-white whitespace-nowrap">
            {modelId}
          </p>
          <div className="text-center font-bold">
            <p className='text-white text-sm whitespace-nowrap'>Credits Left: 100</p>
          </div>
        </div>
        <div>
          <p className='font-bold pb-2'>Team Description</p>
          <p>This team is made to demo the capabilities of Tapped AI but teams can be created for an album drop, upcoming event, marketing campaign, or just for fun!</p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="max-h-10 text-2xl font-bold text-[#fff] mr-2">Graphic Designer</span>
            <Link href="/team/graphic_designer">
              <button className="tapped_open_btn">Open</button>
            </Link>
          </div>
          <div className="h-[85%] flex items-center">
            <Image
              src="/images/placeholder_ai.png"
              alt="placeholder"
              width={60}
              height={60}
              className={'rounded-full border-4 border-[#202020] ml-[-12px]'}
            />
            <Image
              src="/images/placeholder_ai.png"
              alt="placeholder"
              width={60}
              height={60}
              className={'rounded-full border-4 border-[#202020] ml-[-12px]'}
            />
            <Image
              src="/images/placeholder_ai.png"
              alt="placeholder"
              width={60}
              height={60}
              className={'rounded-full border-4 border-[#202020] ml-[-12px]'}
            />
            <Image
              src="/images/placeholder_ai.png"
              alt="placeholder"
              width={60}
              height={60}
              className={'rounded-full border-4 border-[#202020] ml-[-12px]'}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="max-h-10 text-2xl font-bold text-[#fff] mr-2">Publicist</span>
            <Link href="/team/publicist">
              <button className="tapped_open_btn">Open</button>
            </Link>
          </div>
          <p className="py-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="max-h-10 text-2xl font-bold text-[#fff] mr-2">Marketer</span>
            <Link href="/team/marketer">
              <button className="tapped_open_btn">Open</button>
            </Link>
          </div>
          <p className="py-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="max-h-10 text-2xl font-bold text-[#fff] mr-2">Lawyer</span>
            <button className="tapped_open_btn text-xs">Limited to tapped ai pro or above</button>
          </div>
          <p className="py-4">
            Coming Soon!
          </p>
        </div>
        <div>
          <div>
            <Link href="/home">
              <button className="tapped_btn max-h-10 w-[91%]">
                return to team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
