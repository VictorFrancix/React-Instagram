import Post from "./Post"
export default  function Posts(){
    const posts = [
        {perfil:"images/perfil-jv.jpg", user: "victor_francixx", imagem:"images/jv-isa.jpeg", likeimg: "images/nasa.png", likename: "Nasa"},
        {perfil:"images/gatinho.jpg", user: "meowed", imagem:"images/gato-fofo.jpg", likeimg: "images/cachorro-fofo.jpg", likename: "dog.fo"},
        {perfil:"images/gatinho.jpg", user: "meowed", imagem:"images/gato.jpg", likeimg: "images/natgeo.jpg", likename: "natgeo"},
        {perfil:"images/nasa.png", user: "Nasa", imagem:"images/via.jpg", likeimg: "images/yt.png", likename: "youtube"}
    ]
    return(
    <div class="posts">
        {posts.map( post => <Post perfil = {post.perfil} user = {post.user} imagem = {post.imagem} likeimg = {post.likeimg} likename = {post.likename}/> )}
    </div>
    )
}