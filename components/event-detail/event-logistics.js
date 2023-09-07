import { AiOutlineCalendar } from 'react-icons/ai';
import { FaLocationPin } from 'react-icons/fa6';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <span className={classes.icon}>
            <AiOutlineCalendar />
          </span>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <span className={classes.icon}>
            <FaLocationPin />
          </span>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
