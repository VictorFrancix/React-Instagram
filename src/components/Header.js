

export default function Header(){
    return(
        <header>
            <div class="desktop">
                <div class="logo-insta">
                    <a href="https://5xjic.csb.app/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <div class="linha-vertical"></div>
                    <a href="https://5xjic.csb.app/">
                        <img class="logo" src="images/logo.png" alt="ig" /></a>
                </div>

                <div class="pesquisa">
                    <input class="caixa-pesquisa" type="text" placeholder="Pesquisar" />
                </div>
                <div class="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
            <div class="logo-mobile">
                <a href="https://5xjic.csb.app/">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://5xjic.csb.app/">
                    <img class="logo" src="images/logo.png" alt="ig" />
                </a>
                <div class="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}