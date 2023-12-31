import React from 'react';
import Image from 'next/image';
import { Team } from '@/domain/models/team';

const TeamCard = ({ team }: {
  team: Team
}) => {
  return (
    <div className="h-full h-full max-h-20 rounded-full bg-[#DEDEDE]">
      <div className="grid h-full grid-cols-[75%_25%] gap-2">
        <div className="flex grid grid-rows-2 items-center py-4 pl-5">
          <p className="font-bold">{team.name}</p>
          <p>{ team.quota } credits left</p>
        </div>
        <div className="pr-4 pt-2">
          <Image
            src={'/images/icon_1024.png'}
            width={65.5}
            height={65.5}
            className="mx-auto rounded-full border-2 border-[#42A5F5] shadow"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
