import { FC } from 'react';
import { EventItemProps } from './eventModel';
import Link from 'next/link';
import Image from 'next/image';

const EventItem: FC<EventItemProps> = ({ event }) => {
  const date = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const address = event.location.replace(', ', '\n');
  return (
    <li className='flex flex-col w-1/2 h-min items-center mx-auto justify-center border rounded-xl  border-black my-12 shadow-md'>
      <div className='flex'>
        <Image width={300} height={300} className='min-h-[200px] min-w-[280px] rounded-l-xl' src={event.image} alt={event.image} />
        <div className='pt-2 px-4 w-full'>
          <h1 className='text-[18px] font-bold'>{event.title}</h1>
          <h2 className='text-[16px] my-1'>{date}</h2>
          <h2 className='text-[16px] my-1'>{address}</h2>
          <h2 className='text-[16px] my-1'>{event.description}</h2>
          <div className='text-right mb-4'>
            <Link href={`/events/${event.id}`} className='text-blue-800 underline'>
              To the event
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
