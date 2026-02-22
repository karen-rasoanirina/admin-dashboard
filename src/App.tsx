import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
type Page ='dashboard' | 'settings'| 'profile' | 'analytics' | 'users' | 'ecommerce' | 'inventory' |'transaction' |'message' | 'calendar' |'reports'
function App() {
  const [sideBarCollapsed, setsideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')
  

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-200 to-indigo-500 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
    transition-all duration-500"> 
      <div className='flex min-h-screen'>
        <Sidebar
        collapsed={sideBarCollapsed}
        onToggle={()=>setsideBarCollapsed(!sideBarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}/>

        <div className='flex-1 flex flex-col'>
          <Header/>
          <main className='flex-1 p-6 overflow-y-auto '>
            <div className='bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-6'>
             {currentPage === 'dashboard' &&  <Dashboard/>}
            </div>
          </main>
        </div>      
      </div>    
    </div>
  )
}

export default App;
