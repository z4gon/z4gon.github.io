import classNames from 'classnames'
import Link from 'next/link'
import styles from '../../../styles/components/blog/CoverImage.module.sass'

type Props = {
    title: string
    imageUrl: string
    imageSourceUrl?: string
    slug?: string
    className?: string
}

const CoverImage = ({
    title,
    imageUrl,
    imageSourceUrl = null,
    slug,
    className,
}: Props) => {
    // eslint-disable-next-line @next/next/no-img-element
    const image = <img src={imageUrl} alt={`Cover Image for ${title}`} />

    return (
        <div className={classNames(styles.coverImage, className)}>
            {slug ? (
                <Link
                    as={`/blog/${slug}`}
                    href="/blog/[slug]"
                    aria-label={title}
                >
                    {image}
                </Link>
            ) : (
                image
            )}

            {imageSourceUrl && (
                <a
                    href={imageSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Image Source 🔗
                </a>
            )}
        </div>
    )
}

export default CoverImage