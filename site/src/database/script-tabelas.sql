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

SELECT * FROM usuario;