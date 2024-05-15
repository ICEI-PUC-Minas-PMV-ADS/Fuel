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
      let results = await Database.executeQuery(`
      INSERT INTO postos (
        nome, 
        cnpj, 
        endereco, 
        tipoCombustivel_1, 
        preco_1,
        tipoCombustivel_2, 
        preco_2, 
        tipoCombustivel_3, 
        preco_3, 
        tipoCombustivel_4, 
        preco_4, 
        tipoCombustivel_5, 
        preco_5, 
        tipoCombustivel_6, 
        preco_6, 
        bandeiraPosto, 
        outrosServicos
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
      [
        param.nome, 
        param.cnpj, 
        param.endereco, 
        param.tipoCombustivel_1, 
        param.preco_1,
        param.tipoCombustivel_2, 
        param.preco_2, 
        param.tipoCombustivel_3, 
        param.preco_3,
        param.tipoCombustivel_4, 
        param.preco_4,
        param.tipoCombustivel_5, 
        param.preco_5,
        param.tipoCombustivel_6, 
        param.preco_6,
        param.bandeiraPosto, 
        param.outrosServicos
      ]
    );
      console.log('Posto inserido com sucesso!');
      return results.rowsAffected;
    } catch (error) {
      console.error('Erro ao inserir posto:', error);
      throw error;  
    }
  }