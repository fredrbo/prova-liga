function loadContent(url, containerSelector) {
    var container = document.querySelector(containerSelector);
    fetch(url)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar conteúdo de ${url}:`, error));
}

