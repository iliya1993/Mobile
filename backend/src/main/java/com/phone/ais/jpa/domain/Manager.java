package com.phone.ais.jpa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "client")
@Access(AccessType.FIELD)
public class Manager extends AbstractPersistable {
        private String firstName;
        private String lastName;
        private String position;
        private String cashBoxNumber;
        @OneToMany(mappedBy = "manager", cascade = CascadeType.ALL)
        private List<Client> clientList;
}
