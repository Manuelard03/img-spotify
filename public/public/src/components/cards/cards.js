class cards extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/cards/cards.css">
        <section>
        <header><h2>¿Por qué cambiarse a Premium?</h2></header>
        <ul>
        <li>
            <div><img src="https://github.com/Manuelard03/Laboratorio-2-Algoritmos/blob/main/img/icono%201-spotify.PNG?raw=true"></div>
            <div>
                <h3>Descarga tu música</h3>
                <p>Escúchala desde cualquier lugar.</p>
            </div>
        </li>
        <li>
            <div><img src="https://github.com/Manuelard03/Laboratorio-2-Algoritmos/blob/main/img/icono%202%20-spotify.PNG?raw=true"></div>
            <div>
                <h3>Escucha música sin anuncios.</h3>
                <p>Disfruta de tu música sin interrupciones.</p>
            </div>
        </li>
        <li>
            <div><img src="https://github.com/Manuelard03/Laboratorio-2-Algoritmos/blob/main/img/icono%203-spotify.PNG?raw=true"></div>
            <div>
                <h3>Reproduce canciones en el</h3>
                <h3>orden que quieras.</h3>
                <p>Cualquier canción en cualquier orden.</p>
            </div>
        </li>
        <li>
            <div><img src="https://github.com/Manuelard03/Laboratorio-2-Algoritmos/blob/main/img/icono%204-spotify.PNG?raw=true"></div>
            <div>
                <h3>Mejor calidad de sonido.</h3>
                <p>Siente el sonido.</p>
            </div>
        </li>
    </ul>
        </section>
        `;
    }
}

customElements.define("my-cards", cards);
export default cards;