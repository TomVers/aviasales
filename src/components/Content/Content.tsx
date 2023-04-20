import { Filter } from '../Filter/Filter'
import { Tickets } from '../Tickets/Tickets'

import styles from './Content.module.scss'

export const Content = () => {
  return (
    <div className={styles.content}>
      <Filter />
      <Tickets />
    </div>
  )
}
