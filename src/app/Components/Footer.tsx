import CityTime from './cityTime';

export default function Footer () {
  return (
  <div className='mt-24 font-spmR align-bottom mb-10'>
    <div className='text-center'><CityTime/></div>
    <p className='text-center dark:text-emerald-600 text-orange-600'>ahmed.dev</p>
  </div>
  );
};