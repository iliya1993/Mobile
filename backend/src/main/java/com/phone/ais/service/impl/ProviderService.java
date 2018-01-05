package com.phone.ais.service.impl;

import com.phone.ais.jpa.domain.Provider;
import com.phone.ais.jpa.repository.ProviderRepository;
import com.phone.ais.service.IProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProviderService implements IProviderService {

    private final ProviderRepository repository;
    @Autowired
    public ProviderService(ProviderRepository repository) {
        this.repository = repository;
    }

    @Override
    public Provider findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public Provider save(Provider entity) {
        return repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public Page<Provider> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
