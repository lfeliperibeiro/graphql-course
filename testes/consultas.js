const db = require('../config/db');

// db('perfis')
// 	.then(res => res.map(p => p.nome))
// 	.then(nomes => console.log(nomes))
// 	.finally(() => db.destroy())

// db('perfis').select('nome', 'id')
// 	.then(res => console.log(res))
// 	.finally(() => db.destroy())

// db.select('nome', 'id')
// 	.from('perfis')
// 	.limit(4).offset(2)
// 	.then(res=> console.log(res))
// 	.finally(() => db.destroy())

// você pode usar os mesmos métodos de uso de um banco relacional como like, que seria ilike e passar ´%ad%´
// lembrando que o knex é um query builder

db('perfis')
	.where({ id: 2})
	.first()
	.then(res=> console.log(res.nome))
	.finally(() => db.destroy())