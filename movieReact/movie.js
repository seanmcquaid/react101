// not every component has to be a class
// class component needed when dealing with state
function Poster(props){
    return (
        <div className="col s4 m3">
        <img src={props.image}/>
        </div>
    )
}

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
        // Fetch is a replacement for GETJSON/ajax/axios
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((myJson)=>{
            const results = myJson.results;
            // console.log(results)
            this.setState({
                moviesToShow: results
            })
        });
        console.log('mounted')
    }


    // We NEED render
    // render is special, react uses it....we dont 
    render(){
        console.log(this.state.moviesToShow)
        const imagePath = "http://image.tmdb.org/t/p/w300";
        let movieList = this.state.moviesToShow.map((movie)=>{
            const fullImagePath = imagePath + movie.poster_path
            return (<Poster key={movie.id} image={fullImagePath}/>)
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    {movieList}
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
)