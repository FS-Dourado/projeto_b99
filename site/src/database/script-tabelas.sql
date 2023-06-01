CREATE DATABASE b99;
USE b99;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY auto_increment,
	nome VARCHAR(45),
	sobrenome VARCHAR(45),
	nickname VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45),
    personagem VARCHAR(45)
);

CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY auto_increment,
    qtd_estrelas INT,
    fkUsuario INT,
    constraint fkUsuario FOREIGN KEY (fkUsuario) references usuario(idUsuario)
);

CREATE TABLE quiz(
	idQuiz INT PRIMARY KEY auto_increment,
    tema VARCHAR(45),
    pontosCertos INT,
    pontosErrados INT,
    fkUsuario INT,
    constraint fkUsuarioQuiz FOREIGN KEY (fkUsuario) references usuario(idUsuario)
);

SELECT * FROM usuario;
SELECT * FROM avaliacao;
SELECT * FROM quiz;
INSERT INTO avaliacao(qtd_estrelas) VALUES
	(5);