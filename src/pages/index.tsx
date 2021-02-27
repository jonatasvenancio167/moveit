import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"

import Head from 'next/head'
import { GetServerSideProps } from 'next'
  
import styles from '../style/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';
import React from 'react';
import { ChallengesProvider } from '../context/ChallengerContext';

interface Homeprops {
  level: number
  currentExperience: number
  challengesCompleted: number 
}

export default function Home(props) {
  console.log(props)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ChallengesProvider level={props.level} 
                          currentExperience = {props.currentExperience} 
                          challengesCompleted = {props.challengesCompleted}
      >
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </ChallengesProvider>
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }

  }
}