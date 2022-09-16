import React from 'react'

import Burger from './Burger';
import { PageTitleLink } from '../style-constants/base-styles';

import styles from '../App.module.css';

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.bagZ}>
        <strong><PageTitleLink to='/'>BagZ</PageTitleLink></strong>
      </div>
      <Burger />
    </div>
  )
}

export default Header
