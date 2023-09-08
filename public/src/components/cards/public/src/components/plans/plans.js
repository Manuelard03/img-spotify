class plans extends HTMLElement {


    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/plans/plans.css">
        <section>
        <div>
        <h2>Elige tu plan Premium</h2>
        <h3>Escucha sin límites en tu teléfono, tus altavoces y otros dispositivos.</h3>
        <div class="metodos_de_pago">
            <ul>
                <li><img src="https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png"></li>
                <li><img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png"></li>
                <li><img src="https://1000marcas.net/wp-content/uploads/2020/03/American-Express-Logo-2006.jpg"></li>
                <li><img src="https://laruecol.com/wp-content/uploads/2022/08/diners-club-vertical-logo-06D94C3D74-seeklogo.com_.png"></li>
                <li><img src="https://w7.pngwing.com/pngs/246/916/png-transparent-computer-icons-logo-paypal-encapsulated-postscript-paypal-blue-angle-logo.png"></li>
            </ul>
            <div class="mas_metodos">
                <p>+2 más</p>
            </div>
        </div>

        <div class="planes">
            <div class="contenedores">
                <div class="info">
                    <ul>
                        <li>
                            <span class="span_1">3 meses gratis con suscripción</span>
                        </li>
                        <li>
                            <span class="span_2">Planes prepagos disponibles</span>
                        </li>
                    </ul>
                    <h3>Individual</h3>
                    <p>Después del período de la oferta, $ 16.900,00 al mes</p>
                    <p>1 cuenta</p>
                    <hr>
                    <ul class="list">
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Escucha música sin anuncios</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Reproduce tus canciones en cualquier lugar, incluso sin conexión</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Reproduce canciones en el orden que quieras</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Usa la opción prepaga o suscríbete</p>
                        </li>
                    </ul>
                    <div>
                        <button role="button">Empezar</button>
                    </div>
                    <div class="terminos">
                        <p>Solo para el plan Individual. Después, cuesta $&nbsp;16.900,00 al mes.
                            <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Se aplican Términos y Condiciones</a>.
                             Disponible solo para usuarios que todavía no han probado Premium. La oferta termina el 12/9/23.</p>
                    </div>
                </div>
                </div>
            <div class="contenedores">
                <div class="info">
                    <ul>
                        <li>
                            <span class="span_1">1 mes gratis con suscripción.</span>
                        </li>
                        <li>
                            <span class="span_2">Planes prepagos disponibles</span>
                        </li>
                    </ul>
                    <h3>Duo</h3>
                    <p>Desde $ 21.400,00 al mes después del período de la oferta</p>
                    <p>2 cuentas</p>
                    <hr>
                    <ul class="list">
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>2 cuentas Premium para parejas que conviven</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Escucha música sin anuncios, disfruta contenido en modo offline y reproduce las canciones en cualquier orden</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Usa la opción prepaga o suscríbete</p>
                        </li>
                    </ul>
                    <div>
                        <button role="button">Empezar</button>
                    </div>
                    <div class="terminos">
                        <p>
                            <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Se aplican Términos y Condiciones</a>.
                            El mes gratis no está disponible para los usuarios que ya han probado Premium.</p>
                    </div>
                </div>
                </div>
            <div class="contenedores">
                <div class="info">
                    <ul>
                        <li>
                            <span class="span_1">1 mes gratis con suscripción.</span>
                        </li>
                        <li>
                            <span class="span_2">Planes prepagos disponibles</span>
                        </li>
                    </ul>
                    <h3>Familiar</h3>
                    <p>Después del periodo de la oferta, $ 26.400,00 al mes</p>
                    <p>Hasta 6 cuentas</p>
                    <hr>
                    <ul class="list">
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>6 cuentas Premium para familiares que conviven</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Bloquea la música explícita</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Escucha música sin anuncios, disfruta contenido en modo offline y reproduce las canciones en cualquier orden</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Usa la opción prepaga o suscríbete</p>
                        </li>
                    </ul>
                    <div>
                        <button role="button">Empezar</button>
                    </div>
                    <div class="terminos">
                        <p>
                            <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Se aplican Términos y Condiciones</a>.
                            El mes gratis no está disponible para los usuarios que ya han probado Premium.</p>
                    </div>
                </div>
                </div>
            <div class="contenedores">
                <div class="info">
                    <ul>
                        <li>
                            <span class="span_1">1 mes gratis con suscripción.</span>
                        </li>
                        <li>
                            <span class="span_2">Planes prepagos disponibles</span>
                        </li>
                    </ul>
                    <h3>Universitario</h3>
                    <p>Después del periodo de la oferta, cuesta $ 9.300,00 al mes</p>
                    <p>1 cuenta</p>
                    <hr>
                    <ul class="list">
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Descuento especial para estudiantes universitarios que cumplen los requisitos</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Escucha música sin anuncios</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Reproduce tus canciones en cualquier lugar, incluso sin conexión</p>
                        </li>
                        <li>
                            <div><img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"></div>
                            <p>Reproduce canciones en el orden que quieras</p>
                        </li>
                    </ul>
                    <div>
                        <button role="button">Empezar</button>
                    </div>
                    <div class="terminos">
                        <p>
                            <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Se aplican Términos y Condiciones</a>.
                            Plan disponible solo para estudiantes de instituciones de educación superior aprobadas. Después del período de prueba, se aplicará una tarifa mensual de $ 9.300,00.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>
        `;
    }
}

customElements.define("my-plans", plans);
export default plans;