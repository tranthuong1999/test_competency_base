import React, { useState } from 'react';
import { flushSync } from 'react-dom';


const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');


  const handleClick = () => {
    setTimeout(() => {
      console.log('%c⚠️ setCount và setText được gọi trong setTimeout', 'color: orange');
      setCount((prev) => prev + 1);
      setText('New Text');
      // setCount((prev) => prev + 1);
      // setText('New Text');
    }, 1000);
  };

  console.log('%c🔄 Rendered', 'color: green');

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>
      <h2>Text: {text}</h2>
      <button onClick={handleClick}>Trigger setTimeout update</button>
    </div>
  );
};

export default App;
