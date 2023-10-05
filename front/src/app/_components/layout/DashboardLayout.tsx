import { PropsWithChildren } from 'react'
import styles from './DashboardLayout.module.scss'
import Sidebar from './sidebar/Sidebar'

function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main>
				{children}
			</main>
    </div>
  )
}

export default DashboardLayout
