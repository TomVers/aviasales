import { useSelector } from 'react-redux'

import { Filter } from '../Filter/Filter'
import { Tickets } from '../Tickets/Tickets'
import { Spinner } from '../Spinner/Spinner'

import styles from './Content.module.scss'

export const Content = () => {
  const { stop } = useSelector((state) => state.ticketsListSlice)
  const loading = stop === false && <Spinner />
  return (
    <div className={styles.content}>
      <Filter />
      {loading}
      <Tickets />
    </div>
  )
}
