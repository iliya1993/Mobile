package com.phone.ais.jpa.domain;

import com.phone.ais.jpa.domain.enums.Country;
import com.phone.ais.jpa.domain.enums.MobileType;
import com.phone.ais.jpa.domain.enums.OperationSystem;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "mobile")
@Access(AccessType.FIELD)
public class Mobile extends AbstractPersistable {
    private String brand;
    private String model;
    private int processorFrequency;
    private int processorCoreCount;
    private String simType;
    @Enumerated(value = EnumType.STRING)
    private OperationSystem operationSystem;
    @Enumerated(value = EnumType.STRING)
    private MobileType type;
    @Enumerated(value = EnumType.STRING)
    private Country country;
}
