import config from '../../../config';
import NavContent from './NavContent/navcontent';



export default function NavBar() {
  
  return (
    <div className="bg-white flex items-center p-4 justify-between sticky top-0">
        <NavContent/>
        <div className='flex items-center justify-between'>
          <div className="font-inter font-medium mr-4">
            {config.name}</div>
          <img src={config['avatar']} alt="Profile" className="w-8 h-8 rounded-full" /> {/* Display profile pic from config */}
        </div>
    </div>
  );
}
