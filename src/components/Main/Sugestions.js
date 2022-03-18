export default function Sugestions(props){
    return(
    <div class="sugestao">
        <div class="insta">
            <img class="icone-pequeno" src={props.perfil} alt="" />
            <div>
                <p class="nome-instagram">{props.nome}</p>
                <p class="nome-perfil">{props.obs}</p>
            </div>
        </div>
        <p class="seguir">Seguir</p>
</div>)
}