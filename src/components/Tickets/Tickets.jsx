import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { Alert } from 'antd'

import { addFiveTickets } from '../../store/ticketsListSlice'
import { Ticket } from '../Ticket/Ticket'

import styles from './Tickets.module.scss'

export const Tickets = () => {
  const dispatch = useDispatch()
  const [filteredTickets, setFilteredTickets] = useState([])
  const checks = useSelector((state) => state.priceFilterSlice.panel)
  const arrayTickets = useSelector((state) => state.ticketsListSlice.tickets)
  const numTickets = useSelector((state) => state.ticketsListSlice.incTickets)
  const visibleTickets = filteredTickets.slice(0, numTickets)
  const handleMoreTickets = () => {
    dispatch(addFiveTickets())
  }
  useEffect(() => {
    const activeFilters = checks.filter((el) => el.isChecked)
    const variable = arrayTickets.filter((el) => {
      const data = el.segments[0].stops.length
      return activeFilters.some((elem) => elem.numStops === data)
    })
    setFilteredTickets(variable)
  }, [checks, arrayTickets])
  if (checks.filter((el) => el.isChecked) == 0) {
    return (
      <Alert message='Рейсов, подходящих под заданные фильтры, не найдено' type='info' showIcon />
    )
  } else {
    return (
      <div className=''>
        {visibleTickets.map((el) => (
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
        <button className={styles.showmore} onClick={handleMoreTickets}>
          Показать еще 5 билетов!
        </button>
      </div>
    )
  }
}
