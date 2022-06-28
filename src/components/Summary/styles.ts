import styled from 'styled-components';

export const SummaryBox = styled.div`
  width: 100%;
  position: relative;
`;

export const SummaryBoxAbs = styled.div`
  left: 0;
  top: 50%;
  width: 100%;
  position: absolute;
  transform: translate(0%, -50%);
`;

export const SummaryBoxAbsItems = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
`;

export const SummaryBoxAbsItemsCard = styled.div`
  gap: 1rem;
  display: grid;
  padding: 1rem;
  color: var(--text-tile);
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  background-color: var(--shape);

  &>div {
    gap: 1rem;
    display: grid;
    align-items: center;
    grid-template-rows: auto;
    justify-content: space-between;
    grid-template-columns: repeat(2, auto);
  }

  &>p {
    font-size: 2rem;
    line-height: 2rem;
  }

  &:last-child {
    color: white;
    background-color: var(--green);
  }
`;