import Highcharts from 'highcharts'
import HighchartsReactImport from 'highcharts-react-official'

// highcharts-react-official ships a CommonJS/UMD build. Under Vite's ESM
// interop the component can arrive wrapped as `{ default: Component }`, so
// unwrap it to get the actual React component.
const HighchartsReact =
  (HighchartsReactImport as unknown as { default?: typeof HighchartsReactImport })
    .default ?? HighchartsReactImport

type BarChartProps = {
  title: string
  categories: string[]
  values: number[]
}

export default function BarChart({ title, categories, values }: BarChartProps) {
  // Highcharts is fully driven by this options object. When props change,
  // a new object is created and the wrapper updates the existing chart.
  const options: Highcharts.Options = {
    chart: { type: 'column' }, // 'column' = vertical bars ('bar' = horizontal)
    title: { text: title },
    xAxis: { categories },
    yAxis: { title: { text: 'Calls' }, min: 0 },
    series: [{ type: 'column', name: 'Calls', data: values }],
    credits: { enabled: false },
    accessibility: { enabled: false },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
