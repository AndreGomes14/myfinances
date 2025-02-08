package com.example.backendmyfinances.dto;

import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@Setter
@Getter
public class InvestmentRequest {

    @NotNull
    private InvestmentType type;

    @NotNull
    private String name;

    @NotNull
    private String symbol;

}
