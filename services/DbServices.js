import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('estabelecimentos.db');

export const insertEstabelecimento = (estabelecimento) => {
    console.log("Tentando inserir estabelecimento:", estabelecimento);
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO Estabelecimentos (nome, cnpj, endereco, telefone, tipoCombustivel, preco, bandeiraPosto, outrosServicos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [estabelecimento.nome, estabelecimento.cnpj, estabelecimento.endereco, estabelecimento.telefone, estabelecimento.tipoCombustivel, estabelecimento.preco, estabelecimento.bandeiraPosto, estabelecimento.outrosServicos],
                (tx, results) => {
                    console.log("Inserção de estabelecimento bem-sucedida:", results);
                    resolve(results);
                },
                (tx, error) => {
                    console.error("Erro ao inserir estabelecimento:", error);
                    reject(error);
                }
            );
        });
    });
};

export const setupDatabase = () => {
    console.log("Configurando banco de dados e criando tabela, se necessário.");
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Estabelecimentos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cnpj TEXT, endereco TEXT, telefone TEXT, tipoCombustivel TEXT, preco REAL, bandeiraPosto TEXT, outrosServicos TEXT);",
                [],
                () => {
                    console.log("Tabela criada ou já existente com sucesso.");
                    resolve();
                },
                (_, error) => {
                    console.error("Erro ao criar tabela:", error);
                    reject(error);
                }
            );
        });
    });
};
