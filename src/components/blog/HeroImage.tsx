import classNames from 'classnames'
import styles from './HeroImage.module.sass'

type Props = {
	title: string
	imageUrl: string
	imageSourceUrl?: string
	className?: string
}

const HeroImage = ({
	title,
	imageUrl,
	imageSourceUrl = null,
	className,
}: Props) => {
	return (
		<div className={classNames(styles.heroImage, className)}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={imageUrl} alt={`Cover Image for ${title}`} />

			{imageSourceUrl && (
				<a href={imageSourceUrl} target="_blank" rel="noopener noreferrer">
					Image Source 🔗
				</a>
			)}
		</div>
	)
}

export default HeroImage
