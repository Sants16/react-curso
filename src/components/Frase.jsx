import styles from './Frase.module.css'

function Frase(){

    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                <em>Componente com uma frase</em>
            </p>
        </div>
    )
}

export default Frase;