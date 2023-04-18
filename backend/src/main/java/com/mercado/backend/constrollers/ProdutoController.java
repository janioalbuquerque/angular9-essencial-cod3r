package com.mercado.backend.constrollers;

import com.mercado.backend.entities.Produto;
import com.mercado.backend.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/produtoController")
public class ProduceController {

    @Autowired
    private ProdutoController service;

    @ResponseBody
    @RequestMapping(value = "/listarProdutos")
    public ResponseEntity<List<Produto>> listarProdutos(){
        List<Produto> lista = service.listarProdutos();
        return ResponseEntity.ok().body(lista);
    }
}
