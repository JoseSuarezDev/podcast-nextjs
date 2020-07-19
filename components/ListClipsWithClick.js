import Link from 'next/link'
import slug from '../helpers/slug'

export default class ListClipsWithClick extends React.Component {
    render() {
        const { listClips, onClickClip } = this.props

        return <div className="audios">
            { listClips.map((clip, index) => (
                <a className="podcast" onClick={(event) => onClickClip(event, clip)} key={index}
                href={`/${slug(clip.channel.title)}.${clip.channel.id}/${slug(clip.title)}.${clip.id}`}>
                    <h3>{clip.title}</h3>
                    <div className="meta">
                        { Math.ceil(clip.duration / 60) } minutes
                    </div>
                </a>
            )) } 

            <style jsx>{`
                .podcast {
                    display: block;
                    text-decoration: none;
                    color: #333;
                    padding: 15px;
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                    cursor: pointer;
                }
                .podcast:hover {

                }
                .podcast h3 {

                }
                .podcast .meta {
                    color: #666;
                    margin-top: 0.5em;
                    font-size: 0.8em;
                }
            `}</style>

        </div>
    }
}