package com.phone.ais.service.impl;

import com.phone.ais.jpa.domain.Client;
import com.phone.ais.jpa.repository.ClientRepository;
import com.phone.ais.service.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import java.util.List;
@Service
public class ClientService implements IClientService {

    private final ClientRepository repository;
    @Autowired
    public ClientService(ClientRepository repository) {
        this.repository = repository;
    }

    @Override
    public Client findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public Client save(Client entity) {
        return repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public Page<Client> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
