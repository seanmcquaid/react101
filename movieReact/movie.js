class App extends React.Component{
    constructor(){
        super();
        this.state = {
            moviesToShow: []
        }
    }
    // componentDidMount is special, react calls it , we dont
    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log((myJson));
        });
        console.log('mounted')
        this.setState({
            moviesToShow: [1]
        })
    }


    // We NEED render
    // render is special, react uses it....we dont 
    render(){
        console.log('its rendered')
        return (
            <h1>Sanity Check</h1>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
)