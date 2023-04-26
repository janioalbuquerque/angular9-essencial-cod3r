package com.mercado.backend.enums;

public enum TipoDeCadastroDePessoa {

    CLIENTE(1,"Cliente"),
    FORNECEDOR(2,"Fornecedor"),
    CLIENTE_FORNECEDOR(3,"Cliente/Fornecedor");

    private Number valor;
    private String descricao;

    TipoDeCadastroDePessoa(Number valor, String descricao) {
        this.valor = valor;
        this.descricao = descricao;
    }

    public Number getValor(){
        return valor;
    }
    public String getDescricao() {
        return descricao;
    }
}
