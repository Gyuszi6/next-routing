import data from './dummy.json';

interface DateFilterProps {
  year: number;
  month: number;
}

const useDummy = () => {
  const getAllEvents = () => {
    return data;
  };

  const getFeaturedEvents = () => {
    return data.filter((e) => e.isFeatured);
  };

  const getFilteredEvents = (dateFilter: DateFilterProps) => {
    const { year, month } = dateFilter;

    let filteredEvents = data.filter((e) => {
      const eventDate = new Date(e.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
  };

  const getEventById = (id: string) => {
    return data.find((e) => e.id === id);
  };
  return { getAllEvents, getFeaturedEvents, getFilteredEvents, getEventById };
};

export default useDummy;
