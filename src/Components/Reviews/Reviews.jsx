
import Image from 'next/image';
import styles from './Reviews.module.scss'
import Stars from '@/Ui/Stars';

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <Image className={styles.image} src='/graos.png' alt='graos de café' width={425} height={250} />
            <h2 className='title light-bg'>O que falam da gente</h2>
            <div className={styles.review}>
                <Image className={styles.avatar}
                src='/avatar1.png' alt='avatar' width={120} height={120} />
                <h3>nome</h3>
                <h4>profissão</h4>
                <Stars stars={5} />
                <p>avaliação</p>
            </div>
            </section>
    )
}

export default Reviews;