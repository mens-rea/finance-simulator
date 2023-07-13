import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  let [initialValue, setInitialValue] = useState(0);
  let [yearsValue, setYearsValue] = useState(0);
  let [interestValue, setInterestValue] = useState(0);
  let [totalValue, setTotalValue] = useState(0);

  function changeInitial (e) {
    setInitialValue(e);
    recompute();
  }

  function changeYears (e) {
    setYearsValue(e);
    recompute();
  }

  function changeInterest (e) {
    setInterestValue(e);
  }

  function recompute(e) {
    let compoundingValue = initialValue;
    for (let x = 0; x<e; x++) {
      compoundingValue = parseFloat(compoundingValue) + compoundingValue * interestValue;
      console.log(compoundingValue);
    }
  
    setTotalValue(Math.round(compoundingValue));
  }

  useEffect(() => {recompute(yearsValue)}, [initialValue, yearsValue, interestValue]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Finance Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Finance Simulator
        </h1>
        
        <input className={styles.field} onChange={(e) => {changeInitial(e.target.value)}} type="number" placeholder="Amount to Invest"/>
        <input className={styles.field} onChange={(e) => {changeYears(e.target.value)}} type="number" placeholder="Number of years"/>
        <input className={styles.field} onChange={(e) => {changeInterest(e.target.value)}}  type="number" placeholder="Interest per year"/>
        <input className={styles.field} type="number" readOnly={true} value={totalValue} placeholder="Total Income"/>

        <input className={styles.submitBtn} type="submit" value="Add Item"/>
      </main>

      <footer>
        Created by
        <a
          href="https://thejuan.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          theJuan.codes
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          height: 80vh;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
