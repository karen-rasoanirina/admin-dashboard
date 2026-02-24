import { ArrowUpRight, ArrowDownRight, DollarSign, Eye, ShoppingCart, Users } from "lucide-react"


const stats = [
    {
        title: 'Total Revenue' ,
        value: '$130,000',
        change: '+ 13,8 %',
        trend: 'up',
        icon: DollarSign,
        color:'from-emerald-500 to-teal-600',
        bgColor:'bg-emerald-50 dark:bg-emerald-900/20',
        textColor:'text-emerald-600 dark:emrald-400'

    },
    {
        title:'Active Users', 
        change: '9.2%',
        value: '8,542',
        trend: 'up',
        icon: Users,
        color:'from-blue-500 to-indigo-600',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        textColor:'text-blue-600 dark:text-blue-400'

    },
    {
        title: 'Total Orders',
        value: '2,789',
        change: '+14,8%',
        trend: 'up',
        icon: ShoppingCart,
        color: 'from-purple-500 to-pink-600',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        textColor: 'text-purple-600 dark:text-purple-400'

    },
    {
        title: 'Page Views',
        value: '39,458',
        change: '-2,3%',
        trend: 'down',
        icon: Eye,
        color: 'from-orange-500 to-orange-600',
        bgColor:'bg-orange-50 dark:bg-orange-900/20',
        textColor: 'text-orange-600 dark:text-orange-400'

    }
];


const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
            <div className=" bg-white/80 backdrop-blur-xl dark:bg-slate-900 rounded-xl p-4 border
        border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group" key={index}>
            <div className="flex items-start justify-between">
                <div className="">
                    <p className="text-sm font-medium mb-2 text-slate-600 dark:text-slate-200">
                        {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                        {stat.value}
                    </p>
                    <div className="flex items-center whitespace-nowrap space-x-2">
                        {stat.trend === 'up' ? 
                        (<ArrowUpRight className="w-4 h-4 text-emerald-500"/>) : 
                        <ArrowDownRight className="w-4 h-4 text-red-500"/>}
                        <span 
                        className={`text-sm font-semibold 
                        ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                            {stat.change}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">vs last month</span>
                    </div>
                </div>
                <div 
                className={`p-3 rounded-2xl ${stat.bgColor} group-hover:scale-120 transition-all duration-300`}>
                    <stat.icon className={`w-5 h-5 ${stat.textColor}`}/>
                </div>
            </div>
            {/**Progress bar */}
            <div className="mt-4 h-2 rounded-full dark:bg-slate-800 overflow-hidden">
                <div className={`h-full bg-linear-to-r ${stat.color} rounded-full transition-all duration-100`}
            style={{width : stat.trend === 'up' ? "75%" : "45%"}}>
                   
                </div>

            </div>
        </div>
        ))}

    </div>
  )
}

export default StatsGrid