import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Productcard from '../Components/Productcard';

function Singlestorepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const simulatedData = [
      { id: 1, name: 'Product 1', description: 'Description 1', image: 'path_to_image_1' },
      { id: 2, name: 'Product 2', description: 'Description 2', image: 'path_to_image_2' },
      { id: 3, name: 'Product 3', description: 'Description 3', image: 'path_to_image_3' },
      { id: 4, name: 'Product 4', description: 'Description 4', image: 'path_to_image_4' }
      // Add more product objects as needed
    ];
    setData(simulatedData);
  }, []);

  return (
    <div>
     
      <div className='pt-8 px-60 '>
        <h1 className='font-serif text-4xl font-semibold text-gray-700'>Store Name</h1>
        <h1 className='mt-12 text-4xl font-light text-gray-900'>Produits</h1>
        <div className='grid grid-cols-4 gap-4'>
          {data.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Singlestorepage;
