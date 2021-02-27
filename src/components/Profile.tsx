import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengerContext'
import styles from '../style/components/profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={ styles.profileContainer}>
            <img src="https://github.com/jonatasvenancio167.png" alt="Jônatas Venâncio" />
            <div>
                <strong>Jônatas Venâncio</strong>
                <p>
                    <img src="icons/Level.svg" alt="level"/>
                    Level {level}
                </p>
            </div> 
        </div>
    )
}