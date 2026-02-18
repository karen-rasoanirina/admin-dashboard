import { Menu, Filter, Search, Plus, Sun, Bell, Settings, ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-800 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 w-full">
      <div className="flex items-center justify-between">
        
        {/* left */}
          <div className="flex items-center space-x-4">
          <button className="rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-500">
            <Menu className="w-5 h-5"/>
          </button>
        
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Welcome back Karen! Here is what's happening </p>
        </div>
      </div>

      {/*center */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 text-slate-400 -translate-y-1/2"/>
            <input 
            type="text" 
            placeholder="Search Anything"
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 
            border border-slate-200 dark:border-slate-800 dark:text-white placeholder-slate-500 placeholder:text-xs
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all rounded-xl"
            />
            <button className="absolute right-2 top-1/2 p-1.5 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Filter/>
            </button>
           </div>
        </div>

       { /* Right */}
          <div className="flex items-center space-x-3">
            <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r
            from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all">
              <Plus className="w-4 h-4"/>
              <span className="text-sm font-medium">Next</span>

              {/**Toggle mode sombre ou clair */}
            </button>
            <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Sun className="w-5 h-5"/>
            </button>

            {/** Notification */}
              <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5"/>
              <span className="absolute -top-0.5 w-5 h-4 bg-red-600 rounded-full text-white text-xs">3</span>
            </button>

            {/*Settings*/}
             <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Settings className="w-5 h-5"/>
            </button> 

            {/* User profile*/}
            <div className="flex items-center space-x-3 pl-3 border-l border-slate-300 dark:border-l-slate-700">
              <img src="src/assets/photo.jpg" 
              alt="User" 
              className="w-8 h-8 rounded-full ring-2 ring-blue-500"/>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Karen Rasoanirna
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Administrator
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header