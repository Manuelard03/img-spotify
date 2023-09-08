class banner extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/banner/banner.css">
        
        <section>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png">
        
        <nav role="navigation">
        <ul>
            <li>Premium</li>
            <li>Ayuda</li>
            <li>Descargar</li>
            <li class="registro">Registrarse</li>
            <li class="inicio-sesion">Iniciar sesión</li>
        </ul>
    </nav>

        </section>
        `;
    }
}

customElements.define("my-banner", banner);
export default banner;