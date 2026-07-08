import { DATASET_OPTIONS, type DatasetKey } from '../../data/chartData'

type SidebarProps = {
  selected: DatasetKey
  onChange: (value: DatasetKey) => void
}

export default function Sidebar({ selected, onChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__section">
        <label htmlFor="dataset" className="sidebar__label">
          Dataset
        </label>
        <select
          id="dataset"
          className="sidebar__select"
          value={selected}
          onChange={(e) => onChange(e.target.value as DatasetKey)}
        >
          {DATASET_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  )
}
