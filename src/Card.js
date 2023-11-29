import "./Card.css"

function Card({ title, description, location, imageURL }) {
    return (
      <div className="card-container">
        <div className="card-image">
          <img className="main-img" src={(imageURL)} alt="" />
        </div>
  
        <div className="info">
          <h2 className="title">{title}</h2>
          <h5 className="location">{location}</h5>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  }
  
export default Card;