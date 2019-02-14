function Header(props){
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

// function Counter(props){
//     return (
//         <div className="counter">
//             <button className="minus waves-effect waves-light btn">-</button>
//             <div className="player-score">0</div>
//             <button className="plus waves-effect waves-light btn">+</button>
//         </div>
//     )
// }

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playerScore : 0
        }
        this.playerPointsInc = this.playerPointsInc.bind(this)
        this.playerPointsDec = this.playerPointsDec.bind(this)
    }

    playerPointsInc(){
        this.setState({
            playerScore: this.state.playerScore + 1
        })
    }

    playerPointsDec(){
        this.setState({
            playerScore : this.state.playerScore - 1
        })
    }

    render(){
        return(
            <div className="counter">
                <button onClick={this.playerPointsDec} className="minus waves-effect waves-light btn">-</button>
                <div className="player-score">{this.state.playerScore}</div>
                <button onClick={this.playerPointsInc} className="plus waves-effect waves-light btn">+</button>
            </div>
        )
    }
}

function Player(props){
    const name = props.name;

    return(
        <div className="player">
            <div className="player-name">{name}</div>
            <Counter/>
        </div>
    )
}


// Application is Uppercase which mean it's a component
// All components without exception must return a single DOM element
function Application (props){
    return (
        <div className = "container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header title={props.title}/>
                    <div className="players">
                        <Player name="Michael"/>
                        <Player name="The Back End Guru"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ReactDOM.render puts React stuff in the DOM
// It takes 2 args:
// 1. What
// 2. Where

ReactDOM.render(
    <Application title="Ping Pong Tourney"/>,
    document.getElementById("root")
)