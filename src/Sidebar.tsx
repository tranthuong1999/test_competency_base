import { memo } from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Sidebar = () => {
  const { name } = useContext(UserContext);
  console.log('🔄 Sidebar re-rendered');
  return <div>Sidebar {name}</div>;
};

export default Sidebar;
