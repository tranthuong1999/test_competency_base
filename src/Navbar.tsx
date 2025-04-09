import { memo, useContext } from 'react';
import { UserContext } from './UserContext';

const Navbar = () => {
  const { name } = useContext(UserContext);
  console.log('🔄 Navbar re-rendered');
  return <div>Navbar</div>;
};

export default Navbar;
