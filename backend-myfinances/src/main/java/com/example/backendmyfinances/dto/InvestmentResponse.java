package com.example.backendmyfinances.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvestmentResponse {
    private Long id;
    private InvestmentType type;
    private String name;
    private String symbol;
}
