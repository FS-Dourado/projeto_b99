var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var nickname = req.body.nicknameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var personagem = req.body.personagemServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (nickname == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, nickname, email, senha, personagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar_pontos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontosCertos = req.body.pontosCertosServer;
    var pontosErrados = req.body.pontosErradosServer;
    var tema = req.body.temaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (pontosCertos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (pontosErrados == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (tema == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar_pontos(pontosCertos, pontosErrados, tema, fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}



function avaliar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrelas = req.body.estrelasServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (estrelas == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.avaliar(estrelas, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verificar_email(req, res) {
    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("O email está indefinido!");
    } else {
        usuarioModel.verificar_email(email)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.json({ emailCadastrado: true });
                } else {
                    res.json({ emailCadastrado: false });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao verificar o email! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function verificar_avaliacao(req, res) {
    var fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está indefinido!");
    } else {
        usuarioModel.verificar_avaliacao(fkUsuario)
            .then(function (resultado) {
                if(resultado){
                    res.status(200).json(resultado)
                    console.log("Deu certo controller")
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao verificar os campos! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function verificar_personagens(req, res) {

    usuarioModel.verificar_personagens()
            .then(function (resultado) {
                if(resultado){
                    console.log("Deu certo")
                }
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao verificar os campos! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    
}

function atualizar_rankingGeral(req, res) {
    usuarioModel.atualizar_rankingGeral()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingJake(req, res) {
    usuarioModel.atualizar_rankingJake()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingHolt(req, res) {
    usuarioModel.atualizar_rankingHolt()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingAmy(req, res) {
    usuarioModel.atualizar_rankingAmy()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingTerry(req, res) {
    usuarioModel.atualizar_rankingTerry()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingRosa(req, res) {
    usuarioModel.atualizar_rankingRosa()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingBoyle(req, res) {
    usuarioModel.atualizar_rankingBoyle()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_rankingGina(req, res) {
    usuarioModel.atualizar_rankingGina()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilGeral(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilGeral(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilJake(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilJake(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilHolt(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilHolt(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilAmy(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilAmy(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilTerry(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilTerry(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilRosa(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilRosa(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilBoyle(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilBoyle(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar_perfilGina(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.atualizar_perfilGina(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficoPersonagem(req, res) {

    usuarioModel.graficoPersonagem()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficoHallowen(req, res) {

    usuarioModel.graficoHallowen()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function episodio_hallowen(req, res) {
    fkUsuarioGeral = req.params.fkUsuarioGeral;

    usuarioModel.episodio_hallowen(fkUsuarioGeral)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function updatePersonagem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var selectedPersonagem = req.body.selectedPersonagemServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (selectedPersonagem == undefined) {
        res.status(400).send("Seu selected está undefined!");
    }else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.updatePersonagem(selectedPersonagem, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function updateHallowen(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var selectedHallowen = req.body.selectedHallowenServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (selectedHallowen == undefined) {
        res.status(400).send("Seu selected está undefined!");
    }else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.updateHallowen(selectedHallowen, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar_hallowen(req, res) {
    var selectedHallowen = req.body.selectedHallowenServer;
    var fkUsuario = req.body.fkUsuario;

    if (selectedfkUsuario == undefined) {
        res.status(400).send("O selected está indefinido!");
    } else {
        usuarioModel.cadastrar_hallowen(selectedHallowen, fkUsuario)
            .then(function (resultado) {
                console.log("Deu certo")
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao verificar o email! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    avaliar,
    atualizar_rankingGeral,
    atualizar_rankingJake,
    atualizar_rankingHolt,
    atualizar_rankingAmy,
    atualizar_rankingTerry,
    atualizar_rankingRosa,
    atualizar_rankingBoyle,
    atualizar_rankingGina,
    atualizar_perfilGeral,
    atualizar_perfilJake,
    atualizar_perfilHolt,
    atualizar_perfilAmy,
    atualizar_perfilTerry,
    atualizar_perfilRosa,
    atualizar_perfilBoyle,
    atualizar_perfilGina,
    graficoPersonagem,
    graficoHallowen,
    updatePersonagem,
    updateHallowen,
    cadastrar_hallowen,
    verificar_email,
    verificar_avaliacao,
    verificar_personagens,
    cadastrar_pontos,
    episodio_hallowen,
    testar
}