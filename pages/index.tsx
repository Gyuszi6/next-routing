import useDummy from '@/components/dummies/useDummy';
import EventList from '@/components/events/EventList';

const HomePage = () => {
  const { getFeaturedEvents } = useDummy();

  return <EventList events={getFeaturedEvents()} />;
};
export default HomePage;
