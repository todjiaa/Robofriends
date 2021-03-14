import "./Slide.css";

const Slide = (props) => {
    const { name, email, id, username, phone, website, companyName, city, activeIndex } = props;
    return(
        <div className="slide" id={id}>
            <div className="slide__image-container">
            <img src={`https://robohash.org/${activeIndex}`} alt="robots" />
            </div>
            <div className="slide__text">
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <p>{city}</p>
                <p>{companyName}</p>

            </div>
        </div>
    );
}

export default Slide;