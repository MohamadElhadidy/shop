import Image from 'next/image'
import styles from './page.module.css'
import Header from  './header'
import Categories from './main/categories'

export default function Home() {
  return (
    <div>
    {/* header */}
    <Header/>
      <Categories/>
    </div>
  )
}
