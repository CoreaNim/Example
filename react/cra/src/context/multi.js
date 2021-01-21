import React, { useContext, createContext } from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
  return (
    <ThemeContext.Provider value="light">
      <UserContext.Provider value="mike">
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Profile() {
  console.log('Profile render');
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  console.log('Greeting render');
  const theme = useContext(ThemeContext);
  const userName = useContext(UserContext);
  return <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>{`${userName}님 안녕하세요`}</p>;
}
