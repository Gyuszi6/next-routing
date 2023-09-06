import { FC } from 'react';
import { EventListProps } from './eventModel';
import EventItem from './EventItem';

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <div className='mt-32'>
      <ul>
        {events.map((element) => (
          <EventItem key={element.id} event={element} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
