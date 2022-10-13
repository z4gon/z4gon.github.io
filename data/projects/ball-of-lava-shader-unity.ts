import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'ball-of-lava-shader-unity',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        '7.gif',
        '6.gif',
        '5.gif',
        '4.gif',
        '3.gif',
        '2.gif',
        '1.gif',
    ],
    youtubeVideoIds: ['r5qDHvfYG9c'],
    title: 'Ball of Lava VFX',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    description: [
        'Ball of Lava VFX written in the Cg programming language for Unity Built-In RP.',
    ],
    implementationDetails: [
        'Using the Perlin Noise algorithm to displace verteces in the mesh, during the Vertex Shader Stage.',
        'Use _Time to animate the Perlin Noise, also multiply by _Displacement and _NoiseVelocity to control how much and how fast the noise is.',
        'Displace the uv coordinates to simulate rotation, multiply by _RotationVelocity to control the speed.',
        "Generate a Mesh and make sure the UV map wraps correctly, so the Perlin noise doesn't generate weird shapes in the mesh.",
        'Lerp between colors using steps.',
    ],
    tags: [
        Tag.Cg,
        Tag.ShaderLab,
        Tag.VertexShader,
        Tag.FragmentShader,
        Tag.Unity3D,
    ],
})

export default data
