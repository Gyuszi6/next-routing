import { useRef } from 'react';

interface UseEventSearchProps {
  onSearch: (selectedYear: number, selectedMonth: number) => void;
}

const useEventSearch = ({ onSearch }: UseEventSearchProps) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedYear = Number(yearInputRef.current?.value) ?? 0;
    const selectedMonth = Number(monthInputRef.current?.value) ?? 0;
    onSearch(selectedYear, selectedMonth);
  };

  return { handleSubmit, yearInputRef, monthInputRef };
};

export default useEventSearch;
