var data = [
    {
      author:{
        avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
        name:"neo"
      },
      commentHeading: "I am the One.",
      text: "Humanity, relax. I will save you.",
      date: "Today",
      userBadge: [ 
        'Superman',
        'Herald',
        'Engineer'
      ]
    },
    {
      author:{
        avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
        name:"Morpheus"
      },
      commentHeading: "There is no spoon.",
      text: "Don't htink you are. KNow you are.",
      date: "Two days ago",
      userBadge: [ 
        'The man',
        'Bard',
        'Samurai swordsman'
      ]
    }
  ]

class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="UserInfo">
                <Avatar author={data[0]}/>
                <div className="UserInfo-name">
                {this.props.author.name}
                </div>
            </div>
        )
    }
}

class Avatar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <img className="Avatar"src={this.props.author.avatarUrl}alt={this.props.author.name} />
        )
    }
}

class CommentBody extends React.Component{
    constructor(props){
        super(props)
    }
    formatDate(date){
        this.date = date
    }
    render(){
        return (
            <div className="Comment-body">
                <h1>{this.props.commentHeading}</h1>
                <div className="Comment-text">{this.props.text}</div>
                <div className="Comment-date">
                {formatDate(this.props.date)}
                </div>
            </div>
        )
    }
}

class Badges extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="UserBadges">
                <div className="badge">{this.props.userBadge[0]}</div>
                <div className="badge">{this.props.userBadge[1]}</div>
                <div className="badge">{this.props.userBadge[2]}</div>
            </div>
        )
    }
}

function Comment(props) {
    return (
    <div className="Comment">
        <UserInfo author={data[0].author}/>
        <CommentBody author={data[0]}/>
        <Badges userBadge={data[0]}/>
    </div>
    );
}



ReactDOM.render(
    <Comment />,
    document.getElementById("root")
)