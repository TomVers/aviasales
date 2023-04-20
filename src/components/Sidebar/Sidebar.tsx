import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  const checks = [
    { name: 'all', label: 'Все' },
    { name: '0', label: 'Без пересадок' },
    { name: '1', label: '1 пересадка' },
    { name: '2', label: '2 пересадки' },
    { name: '3', label: '3 пересадки' },
  ]
  const checkboxes = checks.map(({ name, label }) => {
    return (
      <li key={name} className={styles.check}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkboxInput} readOnly></input>
          <span className={styles.checkboxSpan}></span>
          {label}
        </label>
      </li>
    )
  })

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebar__title}>Количество пересадок</h3>
      <ul className={styles.sidebar__checkboxes}>{checkboxes}</ul>
    </div>
  )
}
