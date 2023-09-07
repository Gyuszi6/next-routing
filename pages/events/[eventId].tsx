import useDummy from '@/components/dummies/useDummy';
import { useRouter } from 'next/router';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EvenTContent from '../../components/event-detail/event-content';
import EventContent from '../../components/event-detail/event-content';

const EventDetailPage = () => {
  const { getEventById } = useDummy();
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const event = getEventById(eventId);
  if (!event) return <p>No event found</p>;
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};
export default EventDetailPage;
