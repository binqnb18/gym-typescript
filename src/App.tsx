import Navbar from "../src/scenes/navbar/index";
import { useState } from 'react';
import { SelectedPage } from '../src/shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
      <div className='app bg-gray-20'>
        <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        />
        </div>
  )
}

export default App
