import styled from 'styled-components';

export const ModalForm = styled.div`
  gap: 1.5rem;
  display: grid;
  position: relative;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  &>button {
    top: 0;
    right: 0;
    position: absolute;
    transition: opacity .25s;
    background-color: inherit;
    transform: translate(50%, -50%);

    &:hover {
      opacity: .75;
    }
  }
  
  &>h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: var(--text-tile);
  }

  &>form {
    gap: 1rem;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;

    &>input {
      width: 100%;
      height: 3.5rem;
      font-size: 1rem;
      padding: 0 1rem;
      border-radius: .25rem;
      color: var(--text-body);
      border: .1rem solid #d7d7d7;
      background-color: var(--background);

      &::placeholder {
        color: var(--text-body);
      }
    }

    &>div {
      gap: 1rem;
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: repeat(2, 1fr);
    }

    &>button {
      width: 100%;
      color: white;
      height: 3.5rem;
      font-size: 1rem;
      padding: 0 1rem;
      font-weight: 600;
      border-radius: .25rem;
      transition: opacity .25s;
      text-transform: uppercase;
      background-color: var(--green);
      border: .1rem solid var(--green);

      &:hover {
        opacity: .75;
      }
    }
  }
`;

type ModalFormBtnProps = {
  isActive: boolean;
  isActiveColor: 'red' | 'green';
};

const modalFormBtnBg = {
  red: '#ffded7',
  green: '#eefdec'
};

export const ModalFormBtn = styled.button<ModalFormBtnProps>`
  gap: .5rem;
  width: 100%;
  height: 3.5rem;
  display: grid;
  font-size: 1rem;
  padding: 0 1rem;
  align-items: center;
  border-radius: .25rem;
  color: var(--text-body);
  justify-content: center;
  transition: opacity .25s;
  grid-template-rows: auto;
  border: .1rem solid #d7d7d7;
  grid-template-columns: repeat(2, auto);
  background-color: ${props => props.isActive ? modalFormBtnBg[props.isActiveColor] : 'transparent'};

  &:hover {
    opacity: .75;
  }
`;