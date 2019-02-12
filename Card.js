// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function Card(props){
    console.log(props);
    const course = props.data.course;
    // const title = "React From the Beginning";
    const instructor = props.data.instructor;
    const image = props.data.image;
    const saleOn = false;
    return (
        <div className="col s3">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src={image} />
                </div>
                <div className="card-content">
                    <p>{course}</p>
                    <p>{instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">${saleOn ? 9.99 : 59.99}</a>
                </div>
            </div>
        </div>
        ); 
}
