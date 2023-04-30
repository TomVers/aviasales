import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { Ticket } from '../Ticket/Ticket'

import styles from './Tickets.module.scss'

export const Tickets = () => {
  const arrayTickets = useSelector((state) => state.ticketsListSlice.tickets)
  const fiveTickets = arrayTickets.slice(0, 5)
  return (
    <div className=''>
      {fiveTickets.map((el) => (
        <Ticket
          key={nanoid()}
          airline={el.carrier}
          price={el.price}
          departure={el.segments[0].origin}
          arrival={el.segments[0].destination}
          depDate={el.segments[0].date}
          toDuration={el.segments[0].duration}
          toStops={el.segments[0].stops}
          fromDuration={el.segments[1].duration}
          returnDeparture={el.segments[1].date}
          fromStops={el.segments[1].stops}
        />
      ))}
      <button className={styles.showmore}>Показать еще 5 билетов!</button>
    </div>
  )
}
