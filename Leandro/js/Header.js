const template = `
<header>
    <div class="container flex f-ai-center f-jc-sb">
        <h1>VN02</h1>
        <nav>
            <a href="../index">Inicio /</a>
            <a href="../plan.html">Plan /</a>
            <a href="../mapa.html">Mapa /</a>
            <a href="tp.html">TP</a>
        </nav>
    </div>
</header>`;

const header = document.querySelector('#Header');
header.innerHTML = template;