import { useDispatch, useSelector } from 'react-redux'

import { sortByPrice, sortByDuration, sortByBoth } from '../../store/ticketsListSlice'

import styles from './Filter.module.scss'

export const Filter = () => {
  const dispatch = useDispatch()
  const handleCheapTickets = () => {
    dispatch(sortByPrice())
  }
  const handleFastTickets = () => {
    dispatch(sortByDuration())
  }
  const handleOptiTickets = () => {
    dispatch(sortByBoth())
  }
  const activeTab = useSelector((state) => state.ticketsListSlice.activeTab)
  return (
    <div className={styles.filters}>
      <label
        onClick={handleCheapTickets}
        className={`${styles.filterItem} ${activeTab === 'price' ? styles.filterActive : ''}`}
      >
        <input className={styles.filterItemInput} type='radio' readOnly />
        Самый дешевый
      </label>
      <label
        onClick={handleFastTickets}
        type='button'
        className={`${styles.filterItem} ${activeTab === 'duration' ? styles.filterActive : ''}`}
      >
        <input className={styles.filterItemInput} type='radio' readOnly />
        Самый быстрый
      </label>
      <label
        onClick={handleOptiTickets}
        type='button'
        className={`${styles.filterItem} ${activeTab === 'opti' ? styles.filterActive : ''}`}
      >
        <input className={styles.filterItemInput} type='radio' readOnly />
        Оптимальный
      </label>
    </div>
  )
}
