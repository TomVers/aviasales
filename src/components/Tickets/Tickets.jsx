import { Ticket } from '../Ticket/Ticket'

import styles from './Tickets.module.scss'

export const Tickets = () => {
  return (
    <div className=''>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={styles.showmore}>Показать еще 5 билетов!</button>
    </div>
  )
}
