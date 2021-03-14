import Card from "../Card/Card";
import "./Cardlist.css";


const Cardlist = (props) => {
    const cardArray = props.users.map(robot => {
        return(
            <Card 
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                email={robot.email}
                popUpShow={props.popUpShow}
            />
        ); 
    })

    return(
        <div className="cardlist">
            {cardArray}
        </div>
    );
}

export default Cardlist;