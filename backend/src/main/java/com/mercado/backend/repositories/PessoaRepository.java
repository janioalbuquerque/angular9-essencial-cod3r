package com.mercado.backend.repositories;

import com.mercado.backend.entities.Pessoa;
import com.mercado.backend.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
