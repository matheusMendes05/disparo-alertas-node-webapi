### API CONSULTA PROMOÇÔES DA ALPHAFM

• Busca promoções de um banco SQL alimentado por "alphafm-mysql-script-node"

• retorna todas as promocoes/promocao por ID

### exemplos:

http://localhost:3333/api/promocao/:any_id {
statusCode: 200,
results: [
{
id: any_id,
texto: any_texto,
slug: any_slug
}
]
}

http://localhost:3333/api/promocao/ {
statusCode: 200,
results: [
{
id: any_id,
texto: any_texto,
slug: any_slug
}
{
id: any_id,
texto: any_texto,
slug: any_slug
}
{
id: any_id,
texto: any_texto,
slug: any_slug
}
{
id: any_id,
texto: any_texto,
slug: any_slug
}
]
}
