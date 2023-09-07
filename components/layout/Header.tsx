import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-gray-800 flex justify-between py-2 h-min px-16 text-white font-bold text-[22px]'>
      <div>
        <Link href='/'>Back to event list</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href='/events'>All events</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
