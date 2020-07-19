import Link from 'next/link'
import Clips from '../components/ClipsO'

export default class extends React.Component {

    static async getInitialProps({query}) {
        let idPodcast = query.id

        let [reqPodcast] = await Promise.all([
            fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`)
        ])

        let dataPodcast = await reqPodcast.json()
        let podcast =  dataPodcast.body.audio_clip

        return { podcast }
    }

    render() {
        const { podcast } = this.props

        return <Clips clip={podcast} />
    }
}