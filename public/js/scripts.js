window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048);
db.transaction(function(criar) {
    criar.executeSql("CREATE TABLE users (id INTEGER PRIMARY KEY, nome TEXT, senha TEXT)");
});

function salvar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    db.transaction(function(armazenar) {
        armazenar.executeSql("INSERT INTO users (nome,senha) VALUES (?,?)", [nome, senha]);
    });
}