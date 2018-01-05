package com.phone.ais.controller;

import com.phone.ais.jpa.domain.Mobile;
import com.phone.ais.service.IMobileService;
import com.wordnik.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/mobile")
@Api(value = "mobile", description = "Mobile resource endpoint")
public class MobileController {

    private final IMobileService service;
    @Autowired
    public MobileController(IMobileService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Mobile> findAll(Pageable pageable){
        return service.findAll(pageable);
    }
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Mobile findOne(@PathVariable Long id){
        return service.findOne(id);
    }
    @RequestMapping( method = RequestMethod.POST)
    public Mobile save(@RequestBody Mobile mobile){
        return service.save(mobile);
    }
    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
         service.delete(id);
    }
}
