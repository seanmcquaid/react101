class CoinFlip extends React.Component{
    constructor(props){
        // this is a child class, it's a child of react.component
        // in order to get the cool stuff that is react.component, you must initialize super
        super(props);
        // react doesnt care about heads or tails like at all
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // State is special. React cares about state A LOT
        this.state = {
            image: this.coin[0]
        }
        // we are binding the this so we can use the same THIS IN OUR OTHER FUNCTION
        this.flipCoin = this.flipCoin.bind(this);
        // this.self = this
    }

    flipCoin(){
        console.log("flip Coin ran!")
        // listen, really.......
        // please listen
        // WE NEVER EVER EVER CHANGE/mutate STATE DIRECTLY
        // that is reacts jobs - react manages state
        // don't do it, you will kill your app or another developer will kill you
        // react gave us a setter/method to change state
        let coinSide = Math.round(Math.random());
        this.setState({
            image: this.coin[coinSide]
        })
        // NEVER do this.....
        // this.state.image = this.coin[coinSide]
    }

    // local class method
    // EVERY....repeat....EVERY class component must have a render
    render(){
        // it is my job to return a single dom element
        // whether you like it or not, render will run after the constructor.
        // react events are camelCase and attached to the element
        // you dont invoke them, you just pass them
        return (
            <div className="coin-Flip">
                <button onClick={this.flipCoin}>Flippity Flip</button>
                <img src={this.state.image}/>
            </div>
        )
    }
}

ReactDOM.render(
    <CoinFlip />,
    document.getElementById("root")
);