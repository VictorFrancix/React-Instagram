import Sugestions from "./Sugestions"

export default function Sidebar(){

    const sugestions = [
        {perfil:"images/gatinho.jpg", nome:"smallcutecats", obs:"Novo no Instagram"},
        {perfil:"images/zuck.jpg", nome:"zuck", obs:"Seguido(a) por PoliciaFederal"},
        {perfil:"images/neymar_foto_macaco_Easy-Resize.com_.jpg", nome:"neymarjr", obs:"Segue você"},
        {perfil:"images/corona.jpg", nome:"Covid-19", obs:"Seguido(a) por pfizerinc"},
        {perfil:"images/cr7.jpg", nome:"cristiano", obs:"Segue você"}
    ]

    return (
        <aside class="sidebar">
        <div class="perfil">
            <img src="images/perfil-jv.jpg" alt="" />
            <div>
                <p class="nome-instagram">victor_francixx</p>
                <p class="nome-perfil">João Victor</p>
            </div>
        </div>
        <div class="sugestoes">
            <div class="sugestao-titulo">
                <p>Sugestões para você</p>
                <p class = "ver">Ver tudo</p>
            </div>
            {sugestions.map(sugestion => {
            return (<Sugestions perfil = {sugestion.perfil} nome = {sugestion.nome} obs = {sugestion.obs}/>)
            })}
        </div>
        <div class="sobre">
            <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    </aside>
    )
}