package com.phone.ais.jpa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@Entity
@Table(name = "client")
@Access(AccessType.FIELD)
public class Client extends AbstractPersistable {
    private String firstName;
    private String lastName;
    private String address;
    private String mobile;
    @ManyToOne
    @JoinColumn(name = "manager_id")
    private Manager manager;
}
