import {Conta} from "../../src/Conta";

describe("Conta",()=>{
    test("sacar com sucesso", async () =>{
        const conta: Conta = new Conta("123456.9", 5000.0);
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.00);
    })
})