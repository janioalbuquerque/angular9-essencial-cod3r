package com.mercado.backend.constrollers;

import com.mercado.backend.entities.Produto;
import com.mercado.backend.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/produtoController")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @ResponseBody
    @RequestMapping(value = "/listarProdutos")
    public ResponseEntity<List<Produto>> listarProdutos(){
        List<Produto> lista = service.listarProdutos();
        return ResponseEntity.ok().body(lista);
    }

    @RequestMapping(value = "listarProduto/{id}")
    public ResponseEntity<Optional<Produto>> listarProduto(@PathVariable Long id){
        Optional<Produto> produto = service.listarProduto(id);
        return ResponseEntity.ok().body(produto);
    }

    @ResponseBody
    @PostMapping(value = "/salvarProduto")
    public ResponseEntity<Produto> salvarProduto(@RequestBody Produto produto) {
        Produto produtoSalvo = service.salvarProduto(produto);
        return ResponseEntity.ok().body(produtoSalvo);
    }

    @ResponseBody
    @PutMapping("/atualizarProduto")
    public Produto atualizarProduto(@RequestBody Produto produto) {
        return service.atualizarProduto(produto);
    }

    @ResponseBody
    @DeleteMapping("/deletarProduto/{id}")
    public void deletarProduto(@PathVariable Long id) {
        service.deletarProduto(id);
    }
}
