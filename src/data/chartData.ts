export type DatasetKey = '2023' | '2024' | '2025'

export type ChartDataset = {
  label: string
  categories: string[]
  values: number[]
}

// Mock "calls per month" data keyed by year. Swap this for an API call later.
export const CHART_DATA: Record<DatasetKey, ChartDataset> = {
  '2023': {
    label: 'Calls in 2023',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [30, 45, 28, 60, 41, 52],
  },
  '2024': {
    label: 'Calls in 2024',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [50, 62, 48, 71, 66, 80],
  },
  '2025': {
    label: 'Calls in 2025',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [72, 68, 90, 85, 100, 95],
  },
}

export const DATASET_OPTIONS: { value: DatasetKey; label: string }[] = [
  { value: '2023', label: 'Year 2023' },
  { value: '2024', label: 'Year 2024' },
  { value: '2025', label: 'Year 2025' },
]
