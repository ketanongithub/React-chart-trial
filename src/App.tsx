import { useState } from 'react'
import Layout from './components/layout/Layout'
import Sidebar from './components/layout/Sidebar'
import BarChart from './components/BarChart'
import { CHART_DATA, type DatasetKey } from './data/chartData'

export default function App() {
  // Lifted state: owned here so BOTH the sidebar dropdown and the chart share it.
  const [dataset, setDataset] = useState<DatasetKey>('2024')

  // Derive the chart data from the currently selected key.
  const current = CHART_DATA[dataset]

  return (
    <Layout sidebar={<Sidebar selected={dataset} onChange={setDataset} />}>
      <BarChart
        title={current.label}
        categories={current.categories}
        values={current.values}
      />
    </Layout>
  )
}
