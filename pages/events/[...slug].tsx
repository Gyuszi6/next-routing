import useDummy from '@/components/dummies/useDummy';
import EventList from '@/components/events/EventList';
import { useRouter } from 'next/router';

const FilteredEventPage = () => {
  const router = useRouter();
  const { getFilteredEvents } = useDummy();
  const filteredData = router.query.slug;
  console.log(filteredData);
  if (!filteredData) return <p className='text-center mt-12'>Loading...</p>;
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (isNaN(numYear) || isNaN(numMonth)) return <p className='text-center mt-12'>Invalid filter</p>;
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) return <p className='text-center mt-12'>No events found</p>;

  return <EventList events={filteredEvents} />;
};

export default FilteredEventPage;
