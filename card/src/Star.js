
export default function Star(props) {
    let starIcon = props.isFilled ? "./images/star-filled.png" : "./images/star-empty.png"

        return (
            <img 
                src={starIcon}
                className="card--favorite"
                onClick={props.handleClick}
            />
    )
}