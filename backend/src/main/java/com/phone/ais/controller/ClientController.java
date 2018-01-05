package com.phone.ais.controller;

import com.phone.ais.jpa.domain.Client;
import com.phone.ais.service.IClientService;
import com.wordnik.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/client")
@Api(value = "client", description = "Client resource endpoint")
public class ClientController {
    private final IClientService service;
    @Autowired
    public ClientController(IClientService service) {
        this.service = service;
    }

    @RequestMapping( method = RequestMethod.GET)
    public Page<Client> findAll(Pageable pageable){
        return service.findAll(pageable);
    }
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Client findOne(@PathVariable Long id){
        return service.findOne(id);
    }
    @RequestMapping( method = RequestMethod.POST)
    public Client save(@RequestBody Client client){
        return service.save(client);
    }
    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
