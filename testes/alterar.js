const db = require('../config/db');

const novoUsuario = {
	nome: 'Pedro',
	email: 'predro@email.com',
	senha: '123456'
};

async function exercircio() {
	// count
	const qtde = await db('usuarios')
		.count('* as qtde').first();
	console.log(qtde);

	// inserir se a tabela estiver vazia

	if (qtde === 0) {
		await db('usuarios').insert(novoUsuario);
	}

	// consultar

	let { id } = await db('usuarios')
		.select('id').limit(1).first();

	// alterar

	await db('usuarios').where({ id })
		.update({ nome: 'Carlos' });

	return db('usuarios').where({ id });

}

exercircio()
	.then(usuario => console.log(usuario))
	.finally(() => db.destroy());

