export default class extends React.Component {
    render() {
        return <div>

            <img src="/platzi-logo.png" alt="Platzi"/> 

            <h1>Vanzkyrim!</h1>
            <p>Tierras medias del oriente norte</p>


            <style jsx>{`
                div {
                    display: grid;
                    align-content: center;
                    height: 500px;
                    grid-template-rows: auto auto auto;
                }
                div *:not(img) {
                    color: white;
                    text-align: center;
                    margin: auto 0;
                }
                img {
                    max-width: 30%;
                    display: block;
                    margin: 50px auto;   
                }
            `}</style>

            <style jsx global>{`            
                body {
                    background: #3f5665;
                }
            `}
            </style>
        </div>
    }
}