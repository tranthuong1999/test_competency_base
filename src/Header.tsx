import { useContext, memo } from 'react';
import { UserContext } from './UserContext';

const Header = () => {
  const { name } = useContext(UserContext);
  console.log('🔄 Header re-rendered');

  return <div>Welcome, {name}</div>;
};

export default memo(Header);
