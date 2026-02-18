import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import { useState } from 'react';

function App() {
  

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
    transition-all duration-500"> 
      <div className='flex h-screen overflow-hidden'>
        <Sidebar/>
        <Header/>

      </div>
    </div>
  )
}

export default App;
