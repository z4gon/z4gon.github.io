import { orderBy } from 'lodash'
import Metatags from '../src/components/Metatags'
import Container from '../src/components/page/Container'
import Page from '../src/components/page/Page'
import ProjectsGrid from '../src/components/projects-grid/ProjectsGrid'
import Spacer from '../src/components/Spacer'
import { getAllProjects } from '../src/lib/get-projects'
import { ProjectData } from '../src/models/ProjectData'

import styles from './404.module.sass'

interface NotFoundProps {
	projects: ProjectData[]
}

export default function NotFound({ projects }: NotFoundProps) {
	return (
		<Page>
			<Metatags />
			<Container>
				<Spacer amount="8em" />

				<h1 className={styles.title}>404</h1>
				<h2 className={styles.subtitle}>Not Found</h2>

				<p className={styles.description}>The url doesn&apos;t exist 💀</p>
				<p className={styles.description}>
					These projects might interest you 🥳
				</p>

				<Spacer amount="4em" />
				<ProjectsGrid projects={projects} />
				<Spacer amount="10em" />
			</Container>
		</Page>
	)
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
	let projects = getAllProjects()
	projects = orderBy(projects, ['priority'], ['asc'])

	return {
		props: {
			// only serialize the needed properties
			projects: projects.slice(0, 4),
		},
	}
}
