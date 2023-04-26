import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { checkAll, toggleCheck } from '../../store/ticketsSlice'

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const checks = useSelector((state) => state.tickets.panel)
  const checkElem = (id) => {
    dispatch(toggleCheck(id))
  }
  const checkAllElem = () => {
    dispatch(checkAll(!active))
  }

  useEffect(() => {
    setActive(checks.every((el) => el.isChecked === true))
  }, [checks])

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebar__title}>Количество пересадок</h3>
      <div className={styles.check}>
        <label key={0} htmlFor={0} className={styles.checkboxLabel}>
          <input
            id={0}
            type='checkbox'
            className={styles.checkboxInput}
            checked={active}
            onChange={() => checkAllElem()}
          />
          <span className={styles.checkboxSpan}></span>
          <span>Все</span>
        </label>
      </div>
      {checks.map((el) => (
        <div className={styles.check} key={el.id}>
          <label key={el.id} htmlFor={el.id} className={styles.checkboxLabel}>
            <input
              id={el.id}
              type='checkbox'
              className={styles.checkboxInput}
              checked={el.isChecked}
              onChange={() => checkElem(el.id)}
            />
            <span className={styles.checkboxSpan}></span>
            {el.label}
          </label>
        </div>
      ))}
    </div>
  )
}
