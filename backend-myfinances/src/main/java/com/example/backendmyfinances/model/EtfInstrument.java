package com.example.backendmyfinances.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@DiscriminatorValue("ETF")
public class EtfInstrument extends Instrument {
    @Id
    private Long id;

}
