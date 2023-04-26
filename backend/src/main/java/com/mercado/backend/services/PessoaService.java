package com.mercado.backend.services;

import com.mercado.backend.entities.Pessoa;
import com.mercado.backend.entities.Produto;
import com.mercado.backend.repositories.PessoaRepository;
import com.mercado.backend.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository repository;

    public List<Pessoa> listarPessoas(){
        return repository.findAll();
    }

    public Optional<Pessoa> listarPessoa(Long id){
        return repository.findById(id);
    }

    public Pessoa salvarPessoa(Pessoa pessoa){
        return repository.save(pessoa);
    }

    public Pessoa atualizarPessoa(Pessoa pessoa){
        if (pessoa != null) {
            Pessoa pessoaExistente = new Pessoa();
            pessoaExistente = repository.findById(pessoa.getId()).get();
            pessoaExistente.setNome(pessoa.getNome());
            pessoaExistente.setEmail(pessoa.getEmail());
            pessoaExistente.setTelefone(pessoa.getTelefone());
            pessoaExistente.setTipo_cadastro(pessoa.getTipo_cadastro());

            repository.save(pessoaExistente);

            return pessoaExistente;
        }
        return new Pessoa();
    }

    public void deletarPessoa(Long id){
        repository.deleteById(id);
    }

}
