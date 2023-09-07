import { FC } from 'react';
import { EventItemProps } from './eventModel';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai';
import { FaLocationPin } from 'react-icons/fa6';

const EventItem: FC<EventItemProps> = ({ event }) => {
  const date = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const address = event.location.replace(', ', '\n');
  return (
    <li className='flex flex-col w-1/2 bg-white  h-min items-center mx-auto justify-center border rounded-xl  border-black my-12 shadow-md'>
      <div className='flex'>
        <Image width={300} height={200} className='min-h-[200px] min-w-[280px] rounded-l-xl' src={event.image} alt={event.image} />
        <div className='pt-2 px-4 w-full'>
          <h1 className='text-[18px] font-bold'>{event.title}</h1>

          <div className='flex items-center'>
            <AiOutlineCalendar />
            <h2 className='text-[16px] my-1 ml-2'>{date}</h2>
          </div>
          <div className='flex items-center text-gray-500'>
            <FaLocationPin />
            <h2 className='text-[16px] my-1 ml-2 text-black'>{address}</h2>
          </div>
          <h2 className='text-[16px] my-1'>{event.description}</h2>
          <div className='flex justify-end items-center mb-4'>
            <Link href={`/events/${event.id}`} className='font-semibold text-white border rounded-xl bg-green-500 px-4 py-2'>
              <div className='flex items-center'>
                <p className='mr-2'>To the event</p>
                <AiOutlineArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
