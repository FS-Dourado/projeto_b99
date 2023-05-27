// sessão
function validarSessao() {
    // aguardar();

    var idUsuario = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var nickname = sessionStorage.NICKNAME_USUARIO;
    var personagem = sessionStorage.PERSONAGEM_USUARIO;

    var b_id = document.getElementById("b_id");
    var b_usuario = document.getElementById("b_usuario");
    var b_nickname = document.getElementById("b_nickname");
    var b_personagem = document.getElementById("b_personagem");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_id.innerHTML = idUsuario;
        b_usuario.innerHTML = nome;
        b_nickname.innerHTML = nickname;
        b_personagem.innerHTML = personagem;
        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
   

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

