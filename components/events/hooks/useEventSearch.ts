import { useRef } from 'react';

interface UseEventSearchProps {
  onSearch: (selectedYear: string, selectedMonth: string) => void;
}

const useEventSearch = ({ onSearch }: UseEventSearchProps) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value ?? '';
    const selectedMonth = monthInputRef.current?.value ?? '';
    onSearch(selectedYear, selectedMonth);
  };

  return { handleSubmit, yearInputRef, monthInputRef };
};

export default useEventSearch;
