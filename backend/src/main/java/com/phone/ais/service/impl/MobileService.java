package com.phone.ais.service.impl;

import com.phone.ais.jpa.domain.Mobile;
import com.phone.ais.jpa.repository.MobileRepository;
import com.phone.ais.service.IMobileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
@Service
public class MobileService implements IMobileService {

    private final MobileRepository repository;

    @Autowired
    public MobileService(MobileRepository repository) {
        this.repository = repository;
    }

    @Override
    public Mobile findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public Mobile save(Mobile entity) {
        return repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public Page<Mobile> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
