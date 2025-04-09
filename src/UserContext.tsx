import { createContext, useState, ReactNode } from 'react';

export const UserContext = createContext<{ name: string; setName: (name: string) => void }>({
  name: '',
  setName: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('John');

  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;
};
