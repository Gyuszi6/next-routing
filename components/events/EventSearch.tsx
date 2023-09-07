const EventSearch = () => {
  return (
    <form className='flex justify-center items-center bg-white border  w-min px-12 mx-auto mt-12 py-2 rounded shadow-md'>
      <div className='flex items-center'>
        <label className='mr-2 mt-0.5' htmlFor='year'>
          Year
        </label>
        <select id='year' className='w-28 border'>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
      <div className='mx-12 flex items-center'>
        <label className='mr-2 mt-0.5' htmlFor='month'>
          Month
        </label>
        <select id='month' className='w-28 border'>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
      <button type='submit' className='font-semibold text-white border rounded-xl bg-green-500 px-4 py-1 w-40'>
        Find events
      </button>
    </form>
  );
};

export default EventSearch;
