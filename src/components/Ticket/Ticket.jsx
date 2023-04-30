import { convertDate, getFinalTime } from '../../utils/convertDate'
import { convertMin } from '../../utils/convertMin'
import { numTransfer } from '../../utils/numTransfer'

import styles from './Ticket.module.scss'

export const Ticket = (props) => {
  const {
    airline,
    price,
    departure,
    arrival,
    toDuration,
    toStops,
    fromDuration,
    fromStops,
    depDate,
    returnDeparture,
  } = props
  const imgUrl = 'https://pics.avs.io/99/36/'
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <h3 className={styles.ticket__header_price}>{price.toLocaleString('ru-RU')} Р</h3>
        <img className={styles.ticket__img} src={airline ? `${imgUrl}${airline}.png` : null}></img>
      </div>
      <div className={styles.ticket__text}>
        <div className={styles.ticket__flight}>
          <h4 className={styles.ticket__flight_to}>
            {departure} - {arrival}
          </h4>
          <h4 className={styles.ticket__flight_date}>
            {convertDate(depDate)} - {convertDate(getFinalTime(depDate, toDuration))}
          </h4>
        </div>
        <div className={styles.ticket__duration}>
          <h4 className={styles.ticket__duration_way}>В пути</h4>
          <h4 className={styles.ticket__duration_time}>{convertMin(toDuration)}</h4>
        </div>
        <div className={styles.ticket__stops}>
          <h4 className={styles.ticket__stops_num}>{numTransfer(toStops)}</h4>
          <h4 className={styles.ticket__stops_text}>{toStops.join(', ')}</h4>
        </div>
      </div>
      <div className={styles.ticket__text}>
        <div className={styles.ticket__flight}>
          <h4 className={styles.ticket__flight_to}>
            {arrival} - {departure}
          </h4>
          <h4 className={styles.ticket__flight_date}>
            {convertDate(returnDeparture)} -{' '}
            {convertDate(getFinalTime(returnDeparture, fromDuration))}
          </h4>
        </div>
        <div className={styles.ticket__duration}>
          <h4 className={styles.ticket__duration_way}>В пути</h4>
          <h4 className={styles.ticket__duration_time}>{convertMin(fromDuration)}</h4>
        </div>
        <div className={styles.ticket__stops}>
          <h4 className={styles.ticket__stops_num}>{numTransfer(fromStops)}</h4>
          <h4 className={styles.ticket__stops_text}>{fromStops.join(', ')}</h4>
        </div>
      </div>
    </div>
  )
}
