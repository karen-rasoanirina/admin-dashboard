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
    Zap,
    Menu
 }from "lucide-react"
import { useState} from "react"
import type { Dispatch, SetStateAction } from "react"

type Page ='dashboard' |
 'settings'|
 'profile' |
  'analytics' |
   'users' |
    'ecommerce' | 
   'inventory' |
   'transaction' |
   'message' |
    'calendar' |
    'reports'

type MenuItem = {
  id: Page
  icon: any
  label: string
  active?: boolean
  badge?: string
  count?: string
  submenu?: { id: string; label: string }[]
}


const menuItems: MenuItem[]= [
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

type SideBarPropsType ={
    collapsed : boolean,
    onToggle : ()=>void,
    currentPage: Page,
    onPageChange: Dispatch<SetStateAction<Page>>

}
 

const Sidebar = ({collapsed, onToggle, currentPage, onPageChange}:SideBarPropsType) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['analytics']))
const ToggleExpanded = (itemid:string)  => {
    const newExpanded = new Set (expandedItems);
    if (newExpanded.has(itemid)){
        newExpanded.delete(itemid)
    }else {
        newExpanded.add(itemid)
    }       
setExpandedItems(newExpanded)
} 

  return (
    <div className={`${collapsed ? "w-15" : "w-72"} |  transition duration-300 ease-in-out bg-white/80 dark:bg-slate-700/80 backdrop-blur-xl
    border-r border-slate-200/50 dark:border-slate-700/50 relative z-10 flex flex-col `}>
        <div className="p-6 border-b" >
            
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                <div className={`${!collapsed ? 'w-10 h-10' : 'w-0 h-0'} bg-linear-to-r from-blue-600 to-purple-600 rounded-xl 
                flex items-center justify-center shadow-lg transition-all duration-300`}>
                    <Zap className={`${collapsed ? 'flex justify-center items-center' : ''} w-6 h-6 text-white`}/>
                </div>
                <div className= {`items-center ${collapsed ? 'hidden' : ''}` }>
                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                    Tekno
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                    Admin Panel
                    </p>
                </div> 
                </div>
                
                <button 
                onClick={onToggle}
                className="rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-500">
            <Menu className="w-5 h-5"/>
                </button> 
                </div>      
            
        </div>
        {/*Navgation*/}
        <nav>
         {menuItems.map((item)=>(
            <div key={item.id}>
                <button 
                className={`w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100
                ${currentPage === item.id || item.active ? "bg-linear-to-r from-blue-500 to-purple-500 text-white" :
                    "  dark:text-slate-200 dark:bg-slate-900 text-slate-700 bg-white/80"
                }`}
                onClick={()=>{
                    if (item.submenu){
                        ToggleExpanded(item.id)
                    }else {
                        onPageChange(item.id);
                    }
                }}
                >
                    <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5"/>
                        <p className={` ${collapsed ? 'hidden' : 'text-sm font-medium'}`}>{item.label}</p>
                        {item.badge && !collapsed && 
                        (<span className="transition-transform duration-300 py-1 px-2 rounded-full bg-red-600 text-white text-xs">
                            {item.badge}
                            </span>)}
                        {item.count && !collapsed && 
                        (<span className="transition-transform duration-300 py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-300">
                            {item.count}
                            </span>)}
                    </div>
                    {item.submenu && !collapsed && 
                    (<ChevronDown className={`w-4 h-4 transition-transform ${expandedItems.has(item.id) ? 'rotate-180' : ''}`}/>)}
                </button>
               { /* Sub menus*/}
               {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-8 space-y-1 ">
                        {item.submenu.map((subitem) => (
                            <button
                            className="w-full text-left text-sm p-2 text-slate-600 dark:text-slate-200
                            hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 rounded-lg transition-all
                            dark:hover:bg-slate-800">{subitem.label}</button>
                        ))}
               </div>
               )}

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
                <div className={`${collapsed ? 'hidden' : ''}`}>
                <p className="text-xm font-bold text-slate-800 dark:text-slate-400">Karen Rasoanirina</p>
                 <p className="text-xs text-slate-600 dark:text-slate-300">Administrator</p>

                </div>

                
            </div>
           

        </div>

    </div>
  )
}

export default Sidebar