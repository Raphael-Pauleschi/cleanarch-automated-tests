import { Conta } from "../../src/Conta";

describe("Conta", () => {
  test("sacar com sucesso", async () => {
    const conta: Conta = new Conta("123456.9", 5000.0);
    conta.sacar(200.0);
    expect(conta.saldo).toBe(4800.0);
  });
  test("depositar com sucesso", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    conta.depositar(200.0);
    expect(conta.saldo).toBe(5200.0);
  });

  test("cascar com valor zerado", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    expect(() => {
      conta.sacar(0);
    }).toThrow("Valor não pode ser igual ou menor que zero");
  });
});
