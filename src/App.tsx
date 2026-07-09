import { useState } from 'react'
import Layout from './components/layout/Layout'
import Sidebar from './components/layout/Sidebar'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import { CHART_DATA, type DatasetKey } from './data/chartData'

export default function App() {
  // Lifted state: owned here so the sidebar dropdown and BOTH charts share it.
  const [dataset, setDataset] = useState<DatasetKey>('2024')

  // Derive the chart data from the currently selected key.
  const current = CHART_DATA[dataset]

  return (
    <Layout sidebar={<Sidebar selected={dataset} onChange={setDataset} />}>
      <div className="chart-grid">
        <div className="chart-card">
          <BarChart
            title={current.label}
            categories={current.categories}
            values={current.values}
          />
        </div>
        <div className="chart-card">
          <PieChart
            title={`${current.label} — share`}
            categories={current.categories}
            values={current.values}
          />
        </div>
      </div>
    </Layout>
  )
}
