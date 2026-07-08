const NAV_ITEMS = ['Dashboard', 'Reports', 'Users', 'Settings']

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="sidebar__nav-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
