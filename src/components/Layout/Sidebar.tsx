import { 
    BarChart3, 
    Calendar, 
    ChevronDown, 
    CreditCard, 
    FileText, 
    LayoutDashboard,
    MessageSquare,
   Package,
    Settings,
    ShoppingBag,
    Users,
    Zap
 }from "lucide-react"



const menuItems= [
{
    id : 'dashboard',
    icon : LayoutDashboard,
    label: 'Dashboard',
    active: true,
    badge: "New"
},{
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenu: [
        {id: 'overview', label: 'Overview'},
        {id: 'reports', label: 'Reports'},
        {id: 'insights', label: 'Insights'},
    ]
},{
    id: 'users',
    icon: Users,
    label: 'Users',
    count: '2.4k',
    submenu: [
        {id:'All-users', label:'All Users'},
        {id:'roles', label:'Roles et Permissions'},
        {id:'activity', label:'User Activity'},
    ],
},{
    id: 'ecommerce',
    icon: ShoppingBag,
    label:'E-commerce',
    submenu: [
        {id: 'products', label: 'Products'},
        {id: 'orders', label: 'Orders'},
        {id: 'customers', label: 'Customers'},
    ],
},{
    id: 'inventory',
    icon: Package,
    label: 'Inventory',
    count: '547'
},{
    id: 'transaction',
    icon: CreditCard,
    label: 'Transaction'
},{
    id: 'message',
    icon: MessageSquare,
    label:'Message',
    badge: '12',
},{
    id: 'calendar',
    icon:Calendar,
    label: 'Calendar'
},{
     id: 'reports',
    icon:FileText,
    label: 'Reports'
},{
    id:'settings',
    icon: Settings,
    label: 'Settings'
}

]

const Sidebar = () => {
  return (
    <div className="w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate/80 backdrop-blur-xl
    border-r border-slate-200/50 dark:border-slate-700/50 relative z-10 flex flex-col" >
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white"/>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                    Tekno
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                    Admin Panel
                    </p>
                </div>        
            </div>
        </div>
        {/*Navgation*/}
        <nav>
         {menuItems.map((item)=>(
            <div key={item.id}>
                <button className="w-full flex items-center justify-between p-3 rounded-xl dark:text-slate-200
                hover:bg-slate-100/50">
                    <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 "/>
                        <p className="text-sm font-medium">{item.label}</p>
                        {item.badge && (<span className="py-1 px-2 rounded-full bg-red-600 text-white text-xs">{item.badge}</span>)}
                        {item.count && (<span className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-300">{item.count}</span>)}
                    </div>
                    {item.submenu && <ChevronDown className="w-4 h-4"/>}
                </button>

            </div>
         ))}
        </nav>
        {/*User Profile */}
        <div className="p-2 border-t border-slate-200/20 dark:border-slate-700/50 ">
            <div className="flex items-center space-x-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <img 
                src="src/assets/photo.jpg
" 
                alt="User profile" 
                className="w-10 h-10 rounded-full ring-2 ring-blue-500"/>
                <div>
                <p className="text-xm font-bold text-slate-800 dark:text-slate-400">Karen Rasoanirina</p>
                 <p className="text-xs text-slate-600 dark:text-slate-300">Administrator</p>

                </div>

                
            </div>
           

        </div>

    </div>
  )
}

export default Sidebar