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

/*
CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY auto_increment,
    qtd_estrelas INT,
    fkUsuario INT,
    constraint fkUsuario FOREIGN KEY (fkUsuario) references usuario(idUsuario)
);
*/
CREATE TABLE quiz(
	idQuiz INT PRIMARY KEY auto_increment,
    tema VARCHAR(45),
    pontosCertos INT,
    pontosErrados INT,
    fkUsuario INT,
    constraint fkUsuarioQuiz FOREIGN KEY (fkUsuario) references usuario(idUsuario)
);

ALTER TABLE usuario ADD COLUMN hallowen VARCHAR(45);

SELECT * FROM usuario;
SELECT * FROM avaliacao;
SELECT * FROM quiz;

    
SELECT usuario.nickname as nickname, 
quiz.pontosCertos AS pontos,
quiz.tema,
fkUsuario  FROM quiz JOIN usuario 
ON fkUsuario = idUsuario
WHERE tema = 'amy' and fkUsuario = 5 
	ORDER BY pontos DESC;

SELECT usuario.nickname as nickname, 
    SUM(quiz.pontosCertos) AS pontos,
    quiz.tema,
    fkUsuario FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'geral'
    GROUP BY fkUsuario
	ORDER BY pontos DESC;

SELECT hallowen FROM usuario
where idUsuario = 8;

UPDATE usuario SET personagem = 'Holt'
WHERE idUsuario = 1;

