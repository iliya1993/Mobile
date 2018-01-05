package com.phone.ais.jpa.repository;

import com.phone.ais.jpa.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
