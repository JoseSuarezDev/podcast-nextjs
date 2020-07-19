import Link from 'next/link'

export default class ListClips extends React.Component {
    render() {
        const { listClips } = this.props

        return <div className="audios">
            { listClips.map((clip, index) => (
                <Link href={`/podcast?id=${clip.id}`} key={index}>
                    <a className="podcast">
                        <h3>{clip.title}</h3>
                        <div className="meta">
                            { Math.ceil(clip.duration / 60) } minutes
                        </div>
                    </a>
                </Link>
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