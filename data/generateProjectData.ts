import { Tag } from '../src/models/enums/Tag'
import { Technology } from '../src/models/enums/Technology'
import { LinkData } from '../src/models/LinkData'
import { ProjectCardConfig } from '../src/models/ProjectCardConfig'
import { ProjectData } from '../src/models/ProjectData'

interface GenerateProjectDataArgs {
    id: string
    aliases?: string[]
    thumbnailImageName: string
    metaImageName?: string
    imagesNames?: string[]
    videosNames?: string[]
    date: string
    youtubeVideoIds?: string[]
    primaryImageName?: string
    primaryVideoName?: string
    title: string
    subtitle: string
    description?: string[]
    implementationDetails: string[]
    tags: Tag[]
    gitHubUrl?: string
    links?: LinkData[]
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
    isPrivateRepo?: boolean
    cardConfig?: ProjectCardConfig
    technology?: Technology
}

const generateProjectData = ({
    id,
    aliases = [],
    date,
    thumbnailImageName,
    metaImageName,
    imagesNames = [],
    videosNames = [],
    youtubeVideoIds = [],
    primaryImageName = null,
    primaryVideoName = null,
    title,
    subtitle,
    description = [],
    implementationDetails,
    tags,
    gitHubUrl = null,
    links = [],
    appleAppStoreUrl = null,
    googlePlayStoreUrl = null,
    isPrivateRepo = false,
    technology = null,
    cardConfig = {
        backgroundSize: '120%',
        backgroundPosition: '0px 0px',
        gradientColor: 'rgb(0, 96, 115)',
    },
}: GenerateProjectDataArgs): ProjectData => {
    const imagesFolder = `/images/portfolio/${id}`
    const videosFolder = `/videos/${id}`

    const data: ProjectData = {
        id,
        aliases,
        date,
        thumbnailUrl: `${imagesFolder}/${thumbnailImageName}`,
        metaImageUrl: `${imagesFolder}/${metaImageName || thumbnailImageName}`,
        imagesUrls: imagesNames.map((name) => `${imagesFolder}/${name}`),
        videosUrls: videosNames.map((name) => `${videosFolder}/${name}`),
        youtubeVideoIds,
        primaryImageUrl: primaryImageName
            ? `${imagesFolder}/${primaryImageName}`
            : null,
        primaryVideoUrl: primaryVideoName
            ? `${videosFolder}/${primaryVideoName}`
            : null,
        title,
        subtitle,
        description,
        implementationDetails,
        tags,
        gitHubUrl: isPrivateRepo
            ? null
            : gitHubUrl || `https://github.com/z4gon/${id}`,
        links,
        appleAppStoreUrl,
        googlePlayStoreUrl,
        technology,
        cardConfig,
    }

    return data
}

export default generateProjectData
