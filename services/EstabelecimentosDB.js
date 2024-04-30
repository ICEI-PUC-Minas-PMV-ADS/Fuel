import Database from "./DbServices";

const ExecuteQuery = Database.getConnection();

export const getEstabelecimentos = async () => {
    let results = await ExecuteQuery('SELECT * FROM estabelecimentos');
    console.log(results);
    return results.rows._array;
}

export const insertEstabelecimentos = async (param) => {
    try {
        console.log("Dados a serem inseridos:", param);
        
        let results = await ExecuteQuery(
            'INSERT INTO estabelecimentos(nome, cnpj, endereco, telefone, tipoCombustivel, preco, bandeiraPosto, outrosServicos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [param.nome, param.cnpj, param.endereco, param.telefone, param.tipoCombustivel, param.preco, param.bandeiraPosto, param.outrosServicos]
        );

        console.log("Resultado do insert:", results);

        return results.rowsAffected;
    } catch (error) {
        console.error('Erro ao inserir estabelecimento:', error);
        throw error; // Rejogue o erro para que possa ser capturado onde a função for chamada
    }
}
