import React from 'react'
import  styles from './Person.module.css';

const Person = () => {
  return (
    <div className={styles.divStyling}>
        <h1 className={styles.label}>LEGEND</h1>
        <button>click</button>
    </div>
  )
}

export default Person