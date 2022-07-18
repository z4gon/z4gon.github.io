import styles from '../../../styles/components/project/ProjectDetails.module.sass'
import { ProjectData } from '../../models/ProjectData'
import ExternalLink from './ExternalLink'
import ImagesSlider from './ImagesSlider'
import StoreLinks from './StoreLinks'

interface ProjectDetailsProps extends ProjectData {}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    imagesUrls,
    title,
    subtitle,
    description,
    bullets,
    tags,
    links,
    appleAppStoreUrl,
    googlePlayStoreUrl,
    youtubeVideoId,
}) => {
    return (
        <main className={styles.projectDetails}>
            <ImagesSlider imagesUrls={imagesUrls} />

            <article className={styles.information}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.subtitle}>{subtitle}</span>

                {description.map((paragraph, index) => (
                    <p className={styles.descriptionItem} key={index}>
                        {paragraph}
                    </p>
                ))}
            </article>

            <h2 className={styles.sectionTitle}>Details</h2>
            <ul className={styles.bullets}>
                {bullets.map((bullet, index) => (
                    <li className={styles.bullet} key={index}>
                        {bullet}
                    </li>
                ))}
            </ul>

            <h2 className={styles.sectionTitle}>Links</h2>
            <div className={styles.externalLinks}>
                {links.map((link, index) => (
                    <ExternalLink
                        key={index}
                        href={link.href}
                        text={link.text}
                    />
                ))}
            </div>

            <h2 className={styles.sectionTitle}>Store Presence</h2>
            <StoreLinks
                appleAppStoreUrl={appleAppStoreUrl}
                googlePlayStoreUrl={googlePlayStoreUrl}
            />

            <h2 className={styles.sectionTitle}>Video</h2>
            {youtubeVideoId && (
                <div className={styles.video}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title={title}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </main>
    )
}

export default ProjectDetails
