import useDummy from '@/components/dummies/useDummy';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';

const EventsPage = () => {
  const { getAllEvents } = useDummy();
  const events = getAllEvents();
  return (
    <div>
      <EventSearch />
      <EventList events={events} />;
    </div>
  );
};

export default EventsPage;
