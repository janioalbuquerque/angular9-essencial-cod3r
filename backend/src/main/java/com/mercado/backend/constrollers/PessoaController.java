package com.mercado.backend.constrollers;

import com.mercado.backend.entities.Pessoa;
import com.mercado.backend.services.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/pessoaController")
public class PessoaController {

    @Autowired
    private PessoaService service;

    @ResponseBody
    @RequestMapping(value = "/listarPessoas")
    public ResponseEntity<List<Pessoa>> listarPessoas(){
        List<Pessoa> lista = service.listarPessoas();
        return ResponseEntity.ok().body(lista);
    }

    @RequestMapping(value = "listarPessoa/{id}")
    public ResponseEntity<Optional<Pessoa>> listarPessoa(@PathVariable Long id){
        Optional<Pessoa> pessoa = service.listarPessoa(id);
        return ResponseEntity.ok().body(pessoa);
    }

    @ResponseBody
    @PostMapping(value = "/salvarPessoa")
    public ResponseEntity<Pessoa> salvarPessoa(@RequestBody Pessoa pessoa) {
        Pessoa pessoaSalvo = service.salvarPessoa(pessoa);
        return ResponseEntity.ok().body(pessoaSalvo);
    }

    @ResponseBody
    @PutMapping("/atualizarPessoa")
    public Pessoa atualizarPessoa(@RequestBody Pessoa pessoa) {
        return service.atualizarPessoa(pessoa);
    }

    @ResponseBody
    @DeleteMapping("/deletarPessoa/{id}")
    public void deletarPessoa(@PathVariable Long id) {
        service.deletarPessoa(id);
    }
}
