import getAddressFromCep from "./getAddressFromCep"

describe("Quando a requisição é bem sucedida, ela retorna os dados esperados", ()=> {
  // 
  // 
  test("deve retornar os dados quando passamos um cep válido", async () => {
    const address = await getAddressFromCep('30120010');

    expect(address.cep).toBe("30130-010");
    expect(address.logradouro).toBe('Praça Sete de Setembro')
    expect(address.bairro).toBe('Centro')
    expect(address.uf).toBe('MG')
  });
  test("deve aceitar ceps com ou sem hífen", async () => {
    const firstAddress = await getAddressFromCep('30120010');
    expect(firstAddress.cep).toBe('30120-010');

    const secondAddress = await getAddressFromCep('30120-010');
    expect(firstAddress.cep).toBe('30120-010');
  })
})


// deve lançar um arro "Você precisa passar um CEP" quando recebe um CEP vazio
// deve lançar um erro quando passar um cep em formato inválido