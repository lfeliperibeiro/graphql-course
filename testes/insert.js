const db = require('../config/db');

// const novoPerfil = {
// 	nome: 'visitante',
// 	rotulo: 'Visitante',
// }
//
// db('perfis').insert(novoPerfil)
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

const perfilSU = {
	nome: 'root' + Math.random(),
	rotulo: 'Super Usuario'
}

db.insert(perfilSU).into('perfis')
	.then(res => console.log(res))
	.catch(err => console.log(err))