import StatsGrid from "./StatsGrid"
import ChartSection from "./ChartSection"
const Dashboard = () => {
  return (
    <div className="space-y-2 min-w-40">
        <StatsGrid/>
        <ChartSection/>
    </div>
  )
}

export default Dashboard