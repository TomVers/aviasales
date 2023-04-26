import styles from './Filter.module.scss'

export const Filter = () => {
  const filters = [
    { name: 'cheap', label: 'Самый дешевый' },
    { name: 'fast', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ]
  const filter = filters.map(({ name, label }) => {
    return (
      <li key={name} className={styles.filterLi}>
        <label className={styles.filterLabel}>
          <input type='radio' className={styles.filterInput} readOnly></input>
          {label}
        </label>
      </li>
    )
  })
  return <ul className={styles.filterUl}>{filter}</ul>
}
