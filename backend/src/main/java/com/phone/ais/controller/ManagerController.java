package com.phone.ais.controller;

import com.phone.ais.jpa.domain.Manager;
import com.phone.ais.service.IManagerService;
import com.wordnik.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/manager")
@Api(value = "manager", description = "Manager resource endpoint")
public class ManagerController {
    private final IManagerService service;
    @Autowired
    public ManagerController(IManagerService service) {
        this.service = service;
    }

    @RequestMapping( method = RequestMethod.GET)
    public Page<Manager> findAll(Pageable pageable){
        return service.findAll(pageable);
    }
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Manager findOne(@PathVariable Long id){
        return service.findOne(id);
    }
    @RequestMapping( method = RequestMethod.POST)
    public Manager save(@RequestBody Manager manager){
        return service.save(manager);
    }
    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
