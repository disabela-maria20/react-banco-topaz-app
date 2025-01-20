Aqui está a lista das funções do Jest com exemplos:

---

# Funções do Jest

1. **`test()`**  
   Define um teste e descreve o que está sendo testado.
   ```javascript
   test('soma 1 e 2', () => {
     expect(1 + 2).toBe(3);
   });
   ```

2. **`expect()`**  
   Verifica se o valor que você passou é o que você espera.
   ```javascript
   expect(1 + 2).toBe(3);
   ```

3. **`toBe()`**  
   Compara o valor passado e verifica se ele é exatamente igual ao esperado.
   ```javascript
   expect(1 + 2).toBe(3);
   ```

4. **`beforeEach()`**  
   Executa um código antes de cada teste para preparar o ambiente.
   ```javascript
   beforeEach(() => {
     // Código que prepara o ambiente antes de cada teste
   });
   ```

5. **`afterEach()`**  
   Executa um código depois de cada teste para limpar o ambiente.
   ```javascript
   afterEach(() => {
     // Código que limpa o ambiente depois de cada teste
   });
   ```

6. **`beforeAll()`**  
   Executa um código uma vez antes de todos os testes, para preparar algo que é usado em vários testes.
   ```javascript
   beforeAll(() => {
     // Código que prepara o ambiente antes de todos os testes
   });
   ```

7. **`afterAll()`**  
   Executa um código uma vez depois de todos os testes, para limpar algo usado em vários testes.
   ```javascript
   afterAll(() => {
     // Código que limpa o ambiente depois de todos os testes
   });
   ```

8. **`toBeTruthy()`**  
   Verifica se o valor é "verdadeiro".
   ```javascript
   expect(1).toBeTruthy();  // 1 é verdadeiro
   ```

9. **`toBeFalsy()`**  
   Verifica se o valor é "falso".
   ```javascript
   expect(0).toBeFalsy();  // 0 é falso
   ```

10. **`toBeNull()`**  
    Verifica se o valor é `null`.
    ```javascript
    expect(null).toBeNull();
    ```

11. **`toBeUndefined()`**  
    Verifica se o valor é `undefined`.
    ```javascript
    let value;
    expect(value).toBeUndefined();
    ```

12. **`toBeDefined()`**  
    Verifica se o valor é **não** `undefined`.
    ```javascript
    let value = 5;
    expect(value).toBeDefined();
    ```

13. **`toEqual()`**  
    Compara objetos ou arrays, verificando se têm os mesmos valores (não se são exatamente o mesmo objeto).
    ```javascript
    const obj = { name: 'Alice' };
    expect(obj).toEqual({ name: 'Alice' });  // Eles têm o mesmo valor, então são iguais
    ```

14. **`toHaveLength()`**  
    Verifica o comprimento de uma string ou array.
    ```javascript
    expect([1, 2, 3]).toHaveLength(3);
    ```

15. **`toContain()`**  
    Verifica se um valor está dentro de um array ou string.
    ```javascript
    expect([1, 2, 3]).toContain(2);  // O número 2 está dentro do array
    ```

16. **`toMatch()`**  
    Verifica se uma string corresponde a uma expressão regular.
    ```javascript
    expect('Hello World').toMatch(/world/i);  // A string contém "world" (case-insensitive)
    ```

17. **`toThrow()`**  
    Verifica se uma função lança um erro.
    ```javascript
    function throwError() {
      throw new Error('oops');
    }
    
    expect(() => throwError()).toThrow('oops');
    ```

18. **`toBeGreaterThan()`**  
    Verifica se um valor é maior que outro.
    ```javascript
    expect(10).toBeGreaterThan(5);  // 10 é maior que 5
    ```

19. **`toBeLessThan()`**  
    Verifica se um valor é menor que outro.
    ```javascript
    expect(5).toBeLessThan(10);  // 5 é menor que 10
    ```

20. **`toBeCloseTo()`**  
    Verifica se dois números são "aproximadamente iguais", com uma margem de erro definida.
    ```javascript
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5);  // Verifica se 0.1 + 0.2 é aproximadamente igual a 0.3
    ```

21. **`toStrictEqual()`**  
    Compara objetos ou arrays de forma profunda e verifica se são exatamente iguais, incluindo tipos e valores.
    ```javascript
    expect({ name: 'Alice' }).toStrictEqual({ name: 'Alice' });  // Verifica se são exatamente iguais
    ```

22. **`done()`**  
    Usado para testar funções assíncronas. Permite que o teste espere até que o código assíncrono termine.
    ```javascript
    test('chama callback com valor 1', (done) => {
      setTimeout(() => {
        expect(1).toBe(1);
        done();
      }, 1000);
    });
    ```

---

Essas são as funções mais comuns do Jest, com exemplos para ilustrar como elas funcionam em testes!

Aqui estão 35 funções mais usadas do **React Testing Library** com exemplos breves e explicações:

1. **render()**  
   - **Descrição**: Renderiza o componente no DOM virtual para o teste.  
   - **Exemplo**:  
     ```javascript
     render(<MyComponent />);
     ```

2. **screen**  
   - **Descrição**: Fornece um conjunto de métodos para consultar os elementos renderizados.  
   - **Exemplo**:  
     ```javascript
     screen.getByText('Hello');
     ```

3. **fireEvent()**  
   - **Descrição**: Simula eventos como cliques, digitação, etc.  
   - **Exemplo**:  
     ```javascript
     fireEvent.click(button);
     ```

4. **waitFor()**  
   - **Descrição**: Aguarda que uma condição seja atendida antes de continuar o teste.  
   - **Exemplo**:  
     ```javascript
     await waitFor(() => expect(screen.getByText('Loaded')).toBeInTheDocument());
     ```

5. **act()**  
   - **Descrição**: Garante que todas as atualizações de estado e efeitos sejam aplicadas antes de fazer asserções.  
   - **Exemplo**:  
     ```javascript
     act(() => { fireEvent.click(button); });
     ```

6. **cleanup()**  
   - **Descrição**: Limpa a árvore do DOM após cada teste (não necessária nas versões mais recentes).  
   - **Exemplo**:  
     ```javascript
     cleanup();
     ```

7. **getByText()**  
   - **Descrição**: Busca um elemento por seu texto.  
   - **Exemplo**:  
     ```javascript
     screen.getByText('Submit');
     ```

8. **getByRole()**  
   - **Descrição**: Busca um elemento por seu papel (ex: `button`, `heading`).  
   - **Exemplo**:  
     ```javascript
     screen.getByRole('button');
     ```

9. **getByTestId()**  
   - **Descrição**: Busca um elemento pelo atributo `data-testid`.  
   - **Exemplo**:  
     ```javascript
     screen.getByTestId('my-button');
     ```

10. **getByLabelText()**  
    - **Descrição**: Busca um elemento usando o texto de seu rótulo.  
    - **Exemplo**:  
      ```javascript
      screen.getByLabelText('Username');
      ```

11. **getByPlaceholderText()**  
    - **Descrição**: Busca um elemento pelo texto de seu `placeholder`.  
    - **Exemplo**:  
      ```javascript
      screen.getByPlaceholderText('Search');
      ```

12. **queryByText()**  
    - **Descrição**: Semelhante a `getByText()`, mas retorna `null` caso não encontre o elemento.  
    - **Exemplo**:  
      ```javascript
      screen.queryByText('Not Found');
      ```

13. **findByText()**  
    - **Descrição**: Busca um elemento de forma assíncrona, útil para elementos que aparecem depois de uma ação.  
    - **Exemplo**:  
      ```javascript
      await screen.findByText('Loaded');
      ```

14. **findByRole()**  
    - **Descrição**: Busca um elemento de forma assíncrona pelo seu papel.  
    - **Exemplo**:  
      ```javascript
      await screen.findByRole('button');
      ```

15. **findByTestId()**  
    - **Descrição**: Busca um elemento de forma assíncrona pelo atributo `data-testid`.  
    - **Exemplo**:  
      ```javascript
      await screen.findByTestId('my-button');
      ```

16. **debug()**  
    - **Descrição**: Imprime o estado atual do DOM no console para facilitar a depuração.  
    - **Exemplo**:  
      ```javascript
      screen.debug();
      ```

17. **getByValue()**  
    - **Descrição**: Busca um elemento de formulário pelo valor.  
    - **Exemplo**:  
      ```javascript
      screen.getByValue('Some value');
      ```

18. **waitForElementToBeRemoved()**  
    - **Descrição**: Aguarda a remoção de um elemento do DOM.  
    - **Exemplo**:  
      ```javascript
      await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
      ```

19. **within()**  
    - **Descrição**: Limita a busca a um elemento específico do DOM.  
    - **Exemplo**:  
      ```javascript
      const section = screen.getByRole('region');
      within(section).getByText('Item 1');
      ```

20. **waitForElement()**  
    - **Descrição**: Espera um elemento estar presente no DOM.  
    - **Exemplo**:  
      ```javascript
      await waitForElement(() => screen.getByText('Loaded'));
      ```

21. **getByAltText()**  
    - **Descrição**: Busca um elemento `<img>` pelo texto alternativo (`alt`).  
    - **Exemplo**:  
      ```javascript
      screen.getByAltText('Logo');
      ```

22. **getByTitle()**  
    - **Descrição**: Busca um elemento pelo atributo `title`.  
    - **Exemplo**:  
      ```javascript
      screen.getByTitle('Close Button');
      ```

23. **getByRow()**  
    - **Descrição**: Busca um elemento dentro de uma tabela baseado em sua linha (`row`).  
    - **Exemplo**:  
      ```javascript
      screen.getByRow(2);
      ```

24. **queryByRole()**  
    - **Descrição**: Semelhante a `getByRole()`, mas retorna `null` se o elemento não for encontrado.  
    - **Exemplo**:  
      ```javascript
      screen.queryByRole('button');
      ```

25. **findByLabelText()**  
    - **Descrição**: Busca um elemento de forma assíncrona usando o texto do rótulo.  
    - **Exemplo**:  
      ```javascript
      await screen.findByLabelText('Username');
      ```

26. **fireEvent.change()**  
    - **Descrição**: Simula a mudança de valor de um input.  
    - **Exemplo**:  
      ```javascript
      fireEvent.change(input, { target: { value: 'new value' } });
      ```

27. **fireEvent.submit()**  
    - **Descrição**: Simula o envio de um formulário.  
    - **Exemplo**:  
      ```javascript
      fireEvent.submit(form);
      ```

28. **fireEvent.keyDown()**  
    - **Descrição**: Simula um evento de tecla pressionada (keydown).  
    - **Exemplo**:  
      ```javascript
      fireEvent.keyDown(input, { key: 'Enter' });
      ```

29. **fireEvent.keyUp()**  
    - **Descrição**: Simula um evento de tecla solta (keyup).  
    - **Exemplo**:  
      ```javascript
      fireEvent.keyUp(input, { key: 'Enter' });
      ```

30. **fireEvent.focus()**  
    - **Descrição**: Simula o foco em um elemento.  
    - **Exemplo**:  
      ```javascript
      fireEvent.focus(input);
      ```

31. **fireEvent.blur()**  
    - **Descrição**: Simula a perda de foco de um elemento.  
    - **Exemplo**:  
      ```javascript
      fireEvent.blur(input);
      ```

32. **waitForDomChange()**  
    - **Descrição**: Aguarda mudanças no DOM.  
    - **Exemplo**:  
      ```javascript
      await waitForDomChange();
      ```

33. **findByPlaceholderText()**  
    - **Descrição**: Busca um elemento de forma assíncrona pelo `placeholder`.  
    - **Exemplo**:  
      ```javascript
      await screen.findByPlaceholderText('Search');
      ```

34. **findByTestId()**  
    - **Descrição**: Busca de forma assíncrona por um elemento pelo atributo `data-testid`.  
    - **Exemplo**:  
      ```javascript
      await screen.findByTestId('my-button');
      ```

35. **screen.debug()**  
    - **Descrição**: Imprime o HTML renderizado no momento do teste para depuração.  
    - **Exemplo**:  
      ```javascript
      screen.debug();
      ```

Essas funções cobrem uma ampla gama de necessidades para testar componentes React de maneira eficaz com a React Testing Library. Elas permitem simular eventos, buscar elementos no DOM, aguardar atualizações assíncronas e depurar o estado dos componentes.