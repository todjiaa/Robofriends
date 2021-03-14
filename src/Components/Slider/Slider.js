import "./Slider.css";
import Slide from "../Slide/Slide";

const Slider = (props) => {
    const content = props.content.map(el => {
        if (el.id === parseInt(props.activeIndex)) {
            
            console.log(el.id, parseInt(props.activeIndex))
            return(
                <Slide 
                key={el.id} 
                id={el.id} 
                name={el.name} 
                email={"Email: " + el.email}
                username={"Username: " + el.username}
                companyName={"Company name: " + el.company.name}
                city={"City: "+ el.address.city}
                activeIndex={props.activeIndex}
                />
            );
        }
    })

    return(
        <div className="slider" style={{display: `${props.display}`}} onClick={props.popUpHide} >
            {content}
        </div>
    );
}


export default Slider;



