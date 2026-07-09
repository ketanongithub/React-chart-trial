import Highcharts from 'highcharts'
import HighchartsReactImport from 'highcharts-react-official'

// highcharts-react-official ships a CommonJS/UMD build. Under Vite's ESM
// interop the component can arrive wrapped as `{ default: Component }`, so
// unwrap it to get the actual React component.
const HighchartsReact =
  (HighchartsReactImport as unknown as { default?: typeof HighchartsReactImport })
    .default ?? HighchartsReactImport

type PieChartProps = {
  title: string
  categories: string[]
  values: number[]
}

export default function PieChart({ title, categories, values }: PieChartProps) {
  // Pie slices need name/value pairs, so zip categories with values.
  const data = categories.map((name, i) => ({ name, y: values[i] }))

  const options: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text: title },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    series: [{ type: 'pie', name: 'Share', data }],
    credits: { enabled: false },
    accessibility: { enabled: false },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
