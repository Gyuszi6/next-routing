import useDummy from '@/components/dummies/useDummy';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const router = useRouter();
  const { getAllEvents } = useDummy();
  const events = getAllEvents();
  const findEvent = (year: number, month: number) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEvent} />
      <EventList events={events} />;
    </div>
  );
};

export default EventsPage;
