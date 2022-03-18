export default function Post(props){
    return (<div class="post">
            <div class="post-top">
                <div class="post-top-name">
                    <img src={props.perfil} alt="" class="icone-pequeno" />
                    <p class="nome-instagram">{props.user}</p>
                </div>
                <div>
                    <ion-icon class="ellipsis" name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <img src={props.imagem} alt="" />
            <div class="post-bottom">
                <div class="post-icons">
                    <div class="icons-left">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="icons-right">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="post-like">
                    <img src={props.likeimg} alt="" />
                    <p>
                        Curtido por <strong>{props.likename}</strong> e
                        <strong> outras 20.560 pessoas</strong>
                    </p>
                </div>
            </div>
        </div>)
}