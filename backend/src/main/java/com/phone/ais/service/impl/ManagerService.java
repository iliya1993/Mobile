package com.phone.ais.service.impl;

import com.phone.ais.jpa.domain.Manager;
import com.phone.ais.jpa.repository.ManagerRepository;
import com.phone.ais.service.IManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
@Service
public class ManagerService implements IManagerService {

    private final ManagerRepository repository;
    @Autowired
    public ManagerService(ManagerRepository repository) {
        this.repository = repository;
    }

    @Override
    public Manager findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public Manager save(Manager entity) {
        return repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public Page<Manager> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
