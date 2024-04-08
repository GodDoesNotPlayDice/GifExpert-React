import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState(["Hola", "XD"]);

  // When press enter in the input field the value is added to the categories array 
  const onAddCategory = (e) => { 
    if (e.key === "Enter") {
      setCategories([...categories, e.target.value])
      e.target.value = ''; // Clear input field after adding category
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="p-5 bg-stone-800">
        <h1 className="text-gray-200 font-semibold text-4xl">GIF Expert</h1>
      </div>
      <div className="flex gap-6 flex-col items-center justify-center">
        <h2 className="text-5xl text-gray-200 font-semibold">
          Busca el GIF que quieras!
        </h2>
        <input 
          className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="search" 
          type="text" 
          placeholder="Capitan america!" 
          onKeyDown={onAddCategory} // Call onAddCategory when a key is pressed
        />
      </div>
      <div>
        <ol>
          {
            categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
