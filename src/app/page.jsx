"use client"

import { useState, useEffect } from "react";
import Header from "./../components/Header";
import Image from "next/image";
import Button from './../components/Button';
import ProgressFlow from './../components/ProgressFlow';
import {  ProgressFlowData } from "../data/ProgressFlowData";
import styles from "./home.module.scss";
import { WindowSize }  from './../hook/WindowSize.js';
import { getRanking } from "./../services/api.js";

export default function Home() {
  const [step, setStep] = useState(1);
  const windowsize = WindowSize();

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api?mile_value=${20.00}`, { cache: "no-store" })
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const result = await res.json()
        setData(result.data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError('Failed to load ranking simulation')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const HandleClickNext = () => {
    if (step === ProgressFlowData.length) return
    setStep(step + 1);
  };

  const HandleClickBack = () => {
    if (step === 1) return
    setStep(step - 1);
  };
  
  // console.log(JSON.stringify(data, null, 2));
  console.log(data);


  return (
    <>
      <Header />
      <main className="container">
        <ProgressFlow  step={step}/>
        <div className={`${styles.flowControls} ${windowsize.width >= 992 && styles.desktop}`}>
          <Button iconeName="icone-arrow-left" iconeDirection="left" variante={"outline-white"} onClick={HandleClickBack}>Voltar</Button>
          <div className={`${styles.flowControls_info}`}>
            <p className={styles.flowControls_info_text}>
              <span className="c-azul">{step}</span>
              {" de "}
              <span>{ProgressFlowData.length}</span>
            </p>
             <Button iconeName="icone-arrow-right" iconeDirection="right" onClick={HandleClickNext}>Prosseguir</Button>
          </div>
        </div>
        
      </main>
    </>
  )
}
