function Avatar(props) {

    return (
        <div>
            <img src={props.image} alt="Simpson"/>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
        </div>
    )
};

export default Avatar