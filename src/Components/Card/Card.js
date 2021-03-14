import "./Card.css";

const Card = (props) => {
    const { name, id, popUpShow } = props;
    return(
        <div className="card" onClick={popUpShow} id={id}>
            <div className="card__image-container">
            <img src={`https://robohash.org/${id}`} alt="robots" />
            </div>
            <div className="card__text">
                <h2>{name}</h2>
                {/* <p>{email}</p> */}
            </div>
        </div>
    );
}

export default Card;