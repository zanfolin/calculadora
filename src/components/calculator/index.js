import React, { useState, useEffect } from "react";
import {
  Content,
  Visor,
  Memoria,
  Operador,
  OperandoAtual,
  VisorLinhaSuperior
} from "./styles";

const Calculator = () => {
  const [operandoUm, setOperandoUm] = useState("");
  const [operandoDois, setOperandoDois] = useState("");
  const [operador, setOperador] = useState("=");

  const portuguese = new Intl.NumberFormat("pt-BR");

  useEffect(() => console.log({ operandoUm, operador, operandoDois }), [
    operandoUm,
    operador,
    operandoDois
  ]);

  function resolveClick() {
    switch (operador) {
      case "+":
        setOperandoDois(
          (parseFloat(operandoDois) + parseFloat(operandoUm)).toString()
        );
        break;
      case "-":
        setOperandoDois(
          (parseFloat(operandoUm) - parseFloat(operandoDois)).toString()
        );
        break;
      case "*":
        setOperandoDois((old) =>
          (parseFloat(old) * parseFloat(operandoUm)).toString()
        );
        break;
      case "/":
        setOperandoDois((old) =>
          (parseFloat(operandoUm) / parseFloat(old)).toString()
        );
        break;
      default:
        console.error("Sem operação");
    }
    setOperandoUm("");
    setOperador("=");
  }

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) =>
      parseFloat(firstValue) + parseFloat(secondValue),
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue
  };

  function operandoClick(numero) {
    if (operandoDois.length < 11)
      if (operador === "=") {
        setOperandoDois(numero);
        setOperador("");
      } else setOperandoDois((old) => old + numero);
  }

  function limparClick() {
    setOperandoUm("");
    setOperandoDois("");
    setOperador("=");
  }

  function deleteNumber() {
    if (operandoDois.length > 0) setOperandoDois((old) => old.slice(0, -1));
  }

  function operadorClick(op) {
    if (operador.length !== 0) {
      let temp = CalculatorOperations[operador](
        parseFloat(operandoUm),
        parseFloat(operandoDois)
      );
      setOperandoUm(temp.toString());
    } else setOperandoUm(operandoDois);

    setOperandoDois("");
    setOperador(op);
  }

  function ponto() {
    console.log(parseFloat(operandoDois), parseInt(operandoDois, 10));
    if (!(parseFloat(operandoDois) - parseInt(operandoDois, 10))) {
      if (operador === "=") {
        setOperandoDois("0.");
        setOperador("");
      } else setOperandoDois((old) => old + ".");
    }
  }

  return (
    <Content>
      <Visor>
        <VisorLinhaSuperior>
          <Memoria>{portuguese.format(operandoUm)}</Memoria>
          <Operador>{operador}</Operador>
        </VisorLinhaSuperior>
        <OperandoAtual>{portuguese.format(operandoDois)}</OperandoAtual>
      </Visor>
      <button className="span-two" onClick={limparClick}>
        AC
      </button>
      <button onClick={deleteNumber}>del</button>
      <button onClick={(e) => operadorClick(e.target.innerText)}>/</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>1</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>2</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>3</button>
      <button onClick={(e) => operadorClick(e.target.innerText)}>*</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>4</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>5</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>6</button>
      <button onClick={(e) => operadorClick(e.target.innerText)}>+</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>7</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>8</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>9</button>
      <button onClick={(e) => operadorClick(e.target.innerText)}>-</button>
      <button onClick={ponto}>.</button>
      <button onClick={(e) => operandoClick(e.target.innerText)}>0</button>
      <button className="span-two" onClick={resolveClick}>
        =
      </button>
    </Content>
  );
};

export default Calculator;
