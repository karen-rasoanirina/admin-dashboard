import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Phones", value: 32, color: "#0000FF" },
  { name: "Laptops", value: 24, color: "#00C49F" },
  { name: "Tablets", value: 18, color: "#FFBB28" },
  { name: "Accessories", value: 26, color: "#FF8042" },
];
const SelectChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl
    p-6 border border-slate-200 dark:border-slate-700">
        <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Sales by Category
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                Production Distribution 
            </p>
        </div>
        <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    >
                    {data.map((entry, index)=>(
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                    ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>

            </ResponsiveContainer>

            
        </div>

    </div>
  )
}

export default SelectChart