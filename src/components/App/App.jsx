import { Content } from '../Content/Content'
import { Sidebar } from '../Sidebar/Sidebar'
import logo from '../../assets/logo.svg'

import styles from './App.module.scss'

const App = () => {
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
