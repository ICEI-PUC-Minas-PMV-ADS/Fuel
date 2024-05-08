import Database from './DbServices';

// Inicializa a tabela no banco de dados
Database.initDB();

export const getPostos = async () => {
  try {
    let results = await Database.executeQuery('SELECT * FROM postos');
    //console.log(results);
    if (results.rows && results.rows._array) {
      return results.rows._array;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar postos:', error);
    throw error;  
  }
}

export const insertPostos = async (param) => {
  try {
    let results = await Database.executeQuery(`INSERT INTO postos (nome, tipoCombustivel, cnpj, preco, telefone, endereco, bandeiraPosto, outrosServicos)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [param.nome, param.tipoCombustivel, param.cnpj, param.preco, param.telefone, param.endereco, param.bandeiraPosto, param.outrosServicos]);
    //console.log(results);
    return results.rowsAffected;
  } catch (error) {
    console.error('Erro ao inserir posto:', error);
    throw error;  
  }
}