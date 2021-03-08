import "./Loading.css";

const Loading = (props) => {
    return(
        <div className={props.position}>
            <h2 className="text">Robots are loading</h2>
        </div>
    );
}

export default Loading;