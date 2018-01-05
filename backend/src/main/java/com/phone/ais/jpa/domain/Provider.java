package com.phone.ais.jpa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "provider")
@Access(AccessType.FIELD)
public class Provider extends AbstractPersistable {
    @ManyToOne
    @JoinColumn(name = "mobile_id")
    private Mobile mobile;
    private int count;
    private double cost;
}
