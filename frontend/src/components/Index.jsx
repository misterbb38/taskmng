

import  { useState } from 'react';

import TopBar from './TopBar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Index() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
   
    <div className="flex h-screen bg-gray-100">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <MainContent selectedComponent={selectedComponent} />
      </div>
    </div>
    
  );
}

export default Index;

