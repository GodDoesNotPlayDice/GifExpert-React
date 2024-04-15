import { AddCategory } from './Components';
import { GifGrid } from './Components';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="flex flex-col gap-10">
      <div className="p-5 bg-stone-800">
        <h1 className="text-gray-200 font-semibold text-4xl">GIF Expert</h1>
      </div>
      <div className="flex gap-6 flex-col items-center justify-center">
        <h2 className="text-5xl text-gray-200 font-semibold">
          Busca el GIF que quieras!
        </h2>
        <AddCategory 
        categories={categories}
        setCategories={setCategories} />
      </div>
      <div className='flex flex-col gap-20'>
          {
            categories.map((category) => (
              <GifGrid key={category} category={category} />
            ))
          }
      </div>
    </div>
  );
}

export default App;
