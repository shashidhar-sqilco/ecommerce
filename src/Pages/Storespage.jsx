import React, { useEffect, useState } from 'react';
import Storecard from '../Components/Storecard';

function Storespage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const simulatedData = [
      { id: 1, name: 'Store Name 1', description: 'Description 1', image: 'path_to_image_1' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 2, name: 'Store Name 2', description: 'Description 2', image: 'path_to_image_2' }
      // Add more store objects as needed
    ];
    setData(simulatedData);
  }, []);

  return (
    <div>
      <div className='pt-8 px-60 '>
        <h1 className='text-4xl'>Boutiques</h1>
        <div className='grid grid-cols-4 gap-4'>
          {data.map((store) => (
            <Storecard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Storespage;
