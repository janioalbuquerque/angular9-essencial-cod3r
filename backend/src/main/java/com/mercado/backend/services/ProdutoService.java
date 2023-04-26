package com.mercado.backend.services;

import com.mercado.backend.entities.Produto;
import com.mercado.backend.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public List<Produto> listarProdutos(){
        return repository.findAll();
    }

    public Optional<Produto> listarProduto(Long id){
        return repository.findById(id);
    }

    public Produto salvarProduto(Produto produto){
        return repository.save(produto);
    }

    public Produto atualizarProduto(Produto produto){
        if (produto != null) {
            Produto produtoExistente = new Produto();
            produtoExistente = repository.findById(produto.getId()).get();
            produtoExistente.setNome(produto.getNome());
            produtoExistente.setEstoque(produto.getEstoque());
            produtoExistente.setPreco(produto.getPreco());

            repository.save(produtoExistente);

            return produtoExistente;
        }
        return new Produto();
    }

    public void deletarProduto(Long id){
        repository.deleteById(id);
    }

}
