package com.mercado.backend.services;

import com.mercado.backend.entities.Produto;
import com.mercado.backend.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public List<Produto> listarProdutos(){
        return repository.findAll();
    }

}
