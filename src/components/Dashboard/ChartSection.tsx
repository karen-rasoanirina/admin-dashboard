import RevenueChart from "./RevenueChart"
import SelectChart from "./SelectChart"

const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 w-full h-auto">
            <RevenueChart/>
        </div>
        <div className="space-y-6">
            <SelectChart/>
        </div>
    </div>
  )
}

export default ChartSection