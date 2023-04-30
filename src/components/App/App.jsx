import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSearchId, getTickets } from '../../store/ticketsListSlice'
import { Content } from '../Content/Content'
import { Sidebar } from '../Sidebar/Sidebar'
import logo from '../../assets/logo.svg'

import styles from './App.module.scss'

const App = () => {
  const dispatch = useDispatch()
  const { searchId, status, stop } = useSelector((state) => state.ticketsListSlice)
  useEffect(() => {
    dispatch(getSearchId())
  }, [])
  useEffect(() => {
    if (searchId && status !== 'rejected' && (!stop || (stop && status === 'resolved'))) {
      dispatch(getTickets(searchId))
    }
  }, [searchId, status, stop])
  // useEffect(() => {
  //   if (!stop) dispatch(getTickets(searchId))
  // }, [status])
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt='Avia' />
      </div>
      <div className={styles.main}>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
