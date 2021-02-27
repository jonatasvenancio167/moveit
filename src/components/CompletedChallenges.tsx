import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengerContext'

import styles from '../style/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    const { challengesCompleted  } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completes</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}