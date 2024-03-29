import { BlogPost } from '../../models/BlogPost'
import MarkdownContent from '../markdown/MarkdownContent'
import PostHeader from './PostHeader'

interface PostProps {
	post: BlogPost
}

const Post = ({ post }: PostProps) => {
	const {
		title,
		date,
		author,
		heroImageUrl,
		heroVideoUrl = '',
		heroImageSourceUrl,
		markdownContent,
		excerpt,
	} = post

	return (
		<article>
			<PostHeader
				title={title}
				excerpt={excerpt}
				heroImageUrl={heroImageUrl}
				heroImageSourceUrl={heroImageSourceUrl}
				heroVideoUrl={heroVideoUrl}
				date={date}
				author={author}
			/>
			<MarkdownContent markdownString={markdownContent} />
		</article>
	)
}

export default Post
