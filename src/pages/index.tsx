import React from 'react';
import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <h1>拜总牛逼!</h1>
        <h1>逼神牛逼!</h1>
        <h1>易神牛逼!</h1>
        <h1>蛤蟆牛逼!</h1>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
