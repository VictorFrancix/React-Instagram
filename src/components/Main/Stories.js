import Story from "./Story"

export default function Stories(){
    const stories = [
        {imagem : "images/nasa.png", name : "nasa" }, 
        {imagem : "images/driven.png", name : "driven" }, 
        {imagem : "images/cachorro-fofo.jpg", name : "dog.fo" },
        {imagem : "images/gatinho.jpg", name : "meowed" }, 
        {imagem : "images/bob.jpg", name : "bobzin" }, 
        {imagem : "images/yt.png", name : "youtube" },
        {imagem : "images/natgeo.jpg", name : "natgeo" }, 
        {imagem : "images/respondeai.jpg", name : "respondeai" }
    ]

    return(<nav class="box-story">
        {stories.map( story => {
            return (<Story imagem ={story.imagem} name = {story.name}/>)
        })}
        <ion-icon name="chevron-forward-circle"></ion-icon>
    </nav>)
}

