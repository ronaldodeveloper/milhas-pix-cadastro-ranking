"use client"

import { useState } from "react";
import CardProgress from "../CardProgress";
import { ProgressFlowData } from "../../data/ProgressFlowData";
import styles from "./ProgressFlow.module.scss";

function ProgressFlow({step}) {

    return (
        <div>
            {
                ProgressFlowData &&  ProgressFlowData.map((item) => {
                  return  (
                      <CardProgress
                          key={item.id}
                          active={step === 4 ? false : item.id === step }
                          title={item.title}
                          description={item.subtitle}
                          index={step}
                          disabled={item.id > step}
                      />
                  )
                })
            }
        </div>
    )
}

export default ProgressFlow;