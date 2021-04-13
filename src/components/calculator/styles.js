import styled from "styled-components";

export const Content = styled.div`
  /*border: 2px solid red;*/
  width: 400px;
  height: 620px;

  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);

  button {
    font-size: 2rem;
    border: 1px solid white;
    outline: none;
    background: rgba(255, 255, 255, 0.75);
    transition: background 0.5s;
    border-radius: 0;
    text-transform: uppercase;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }
  }

  .span-two {
    grid-column: span 2;
  }
`;

export const Visor = styled.div`
  grid-column: 1 / -1;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
`;

export const VisorLinhaSuperior = styled.div`
  display: flex;
`;

export const Memoria = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Operador = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  padding: 0 5px;
`;

export const OperandoAtual = styled.div`
  color: white;
  font-size: 2.5rem;
`;
