import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSearchId, getTickets } from '../../store/ticketsListSlice'
import { Content } from '../Content/Content'
import { Sidebar } from '../Sidebar/Sidebar'
import earth from '../../assets/earth.svg'
import plane from '../../assets/plane.svg'

import styles from './App.module.scss'

const App = () => {
  const dispatch = useDispatch()
  const { searchId, status, stop } = useSelector((state) => state.ticketsListSlice)
  useEffect(() => {
    dispatch(getSearchId())
  }, [])
  useEffect(() => {
    if (searchId) dispatch(getTickets(searchId))
  }, [searchId])

  useEffect(() => {
    if ((status === 'rejected' && !stop) || (!stop && status === 'resolved'))
      dispatch(getTickets(searchId))
  }, [status])
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.plane}>
          <img className={styles.planeImg} src={plane} alt='plane' />
        </div>
        <img className={styles.earth} src={earth} alt='earth' />
      </div>
      <div className={styles.main}>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
