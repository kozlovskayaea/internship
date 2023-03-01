it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });

  // result не является индивидуальным в каждом случае, тесты будут проходить вне зависимости от полученного результата
  // Ответ: нужно отделить каждую проверку на отдельный блок it внутри describe, чтобы точно понимать, где происходит ошибка.