import React from 'react'

import Burger from './Burger';

import styles from '../App.module.css';

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.bagZ}><strong>BagZ</strong></div>
      <Burger />
    </div>
  )
}

export default Header
