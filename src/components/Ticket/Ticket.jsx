import logoS7 from '../../assets/logoS7.svg'

import styles from './Ticket.module.scss'

export const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <h3 className={styles.ticket__header_price}>11 111 Р</h3>
        <img src={logoS7}></img>
      </div>
      <div className={styles.ticket__text}>
        <div className={styles.ticket__info1}>
          <h4 className={styles.ticket__info1_1}>MOW - HKT</h4>
          <h4 className={styles.ticket__info1_2}>10:45 - 08:00</h4>
        </div>
        <div className={styles.ticket__info2}>
          <h4 className={styles.ticket__info2_1}>В пути</h4>
          <h4 className={styles.ticket__info2_2}>21ч 15м</h4>
        </div>
        <div className={styles.ticket__info3}>
          <h4 className={styles.ticket__info3_1}>2 пересадки</h4>
          <h4 className={styles.ticket__info3_2}>HKG, JNB</h4>
        </div>
      </div>
      <div className={styles.ticket__text}>
        <div className={styles.ticket__info1}>
          <h4 className={styles.ticket__info1_1}>HKT - MOW</h4>
          <h4 className={styles.ticket__info1_2}>11:15 - 06:20</h4>
        </div>
        <div className={styles.ticket__info2}>
          <h4 className={styles.ticket__info2_1}>В пути</h4>
          <h4 className={styles.ticket__info2_2}>13ч 30м</h4>
        </div>
        <div className={styles.ticket__info3}>
          <h4 className={styles.ticket__info3_1}>1 пересадка</h4>
          <h4 className={styles.ticket__info3_2}>HKG</h4>
        </div>
      </div>
    </div>
  )
}
