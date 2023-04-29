export interface Product {
    id?: number
    nome: string
    preco: number,
    estoque?: number,
    descricao?: string,
    cod_barras?: string,
    preco_custo?: string
}