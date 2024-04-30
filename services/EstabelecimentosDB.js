import Database from "./DbServices";


const DB_Estabelecimentos = Database.getConnection();

export const getEstabelecimentos = async () => {
    let results = await DB_Estabelecimentos('select * from estabelecimentos');
    console.log(results);
    return results.rows._array;
}

export const insertEstabelecimentos = async (param) => {
    let results = await DB_Estabelecimentos(`insert into estabelecimentos(nome, cnpj, endereco, telefone, tipoCombustivel, preco, bandeiraPosto, outrosServicos) 
    values(?,?,?,?,?,?,?,?)`, [param.nome,param.cnpj,param.endereco,param.telefone,param.tipoCombustivel,param.preco,param.bandeiraPosto,param.outrosServicos]);
    console.log(results);

    return results.rowsAffected;
}