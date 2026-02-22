import { 
    ResponsiveContainer, 
    LineChart, 
    CartesianGrid,
    XAxis,
    YAxis ,
    Tooltip,
    Line,
} from "recharts";
const RevenueChart = () => {
const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 48000, expenses: 34000 },
  { month: "Mar", revenue: 52000, expenses: 36000 },
  { month: "Apr", revenue: 50000, expenses: 33000 },
  { month: "May", revenue: 55000, expenses: 37000 },
  { month: "Jun", revenue: 60000, expenses: 40000 },
  { month: "Jul", revenue: 62000, expenses: 42000 },
  { month: "Aug", revenue: 58000, expenses: 39000 },
  { month: "Sep", revenue: 53000, expenses: 35000 },
  { month: "Oct", revenue: 57000, expenses: 38000 },
  { month: "Nov", revenue: 61000, expenses: 41000 },
  { month: "Dec", revenue: 70000, expenses: 45000 },
];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl
    border border-slate-200/50 dark:border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
            <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Revenue Chart
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Monthly revenue and expenses
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500"></div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 rounded-full"> 
                        <span>Revenue</span>
                    </div>
                </div>
                 <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="text-sm text-slate-600 dark:text-slate-400"> 
                        <span>Expenses</span>
                    </div>
                </div>

            </div>
        </div>
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip formatter={(value)=>value?.toLocaleString() + "$"}/>
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3}/>
                    <Line type="monotone" dataKey="expenses" stroke="#a855f7" strokeWidth={3}/>
                </LineChart>

            </ResponsiveContainer>

        </div>
    </div>
  )
}

export default RevenueChart