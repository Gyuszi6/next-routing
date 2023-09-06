export interface EventProps {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface EventListProps {
  events: EventProps[];
}

export interface EventItemProps {
  event: EventProps;
}
