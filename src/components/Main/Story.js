export default function Story(props){
    
    return (
        <div className="story">
            <div className="bordinha">
            <img src={props.imagem} alt =""/>
            </div>
            <p>{props.name}</p>
        </div>
    )
}
