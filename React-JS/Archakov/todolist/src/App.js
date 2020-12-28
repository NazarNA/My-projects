import React from 'react';
import List from './List/List'

const App = () => {
  return (
    <div className="todo">
      <div className='todo__sidebar'>
        <List 
          items={[
            {
              color: 'green',
              name: 'Покупки',
              active: false,
            },
            {
              color: 'blue',
              name: 'Фронтенд',
              active: true
            },
            {
              color: 'pink',
              name: 'Фільми і серіали',
              active: false,
            }
          ]}/>
      </div>
      <div className='todo__tasks'>
        
      </div>
    </div>
  );
}

export default App;
