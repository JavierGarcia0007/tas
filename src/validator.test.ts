// src/validator.test.ts
// O compilador de TypeScript resolverá o módulo JavaScript de forma transparente
import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {
    
    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    test('Deve lançar erro se o título do chamado for vazio', () => {
        expect(() => {
            validarChamado("");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
        expect(() => {
            validarChamado("    ");
        }).toThrow("O título do chamado não pode ser vazio.");
    });
});

test('Deve lançar erro se o título possuir menos de 5 caracteres', () => {
    expect(() => {
        validarChamado("Bug");
    }).toThrow("O título do chamado deve possuir no mínimo 5 caracteres.");
});

test('Deve lançar erro se o título possuir mais de 100 caracteres', () => {
    const tituloLongo = "A".repeat(101);

    expect(() => {
        validarChamado(tituloLongo);
    }).toThrow("O título do chamado deve possuir no máximo 100 caracteres.");
});

test('Deve validar com sucesso um título com exatamente 5 caracteres', () => {
    expect(validarChamado("Falha")).toBe(true);
});

test('Deve validar com sucesso um título com exatamente 100 caracteres', () => {
    const tituloExato = "A".repeat(100);

    expect(validarChamado(tituloExato)).toBe(true);
});

