package com.phone.ais.controller;

import com.phone.ais.jpa.domain.Provider;
import com.phone.ais.service.IProviderService;
import com.wordnik.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/provider")
@Api(value = "provider", description = "Provider resource endpoint")
public class ProviderController {
    private final IProviderService service;
    @Autowired
    public ProviderController(IProviderService service) {
        this.service = service;
    }

    @RequestMapping( method = RequestMethod.GET)
    public Page<Provider> findAll(Pageable pageable){
        return service.findAll(pageable);
    }
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Provider findOne(@PathVariable Long id){
        return service.findOne(id);
    }
    @RequestMapping( method = RequestMethod.POST)
    public Provider save(@RequestBody Provider provider){
        return service.save(provider);
    }
    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
