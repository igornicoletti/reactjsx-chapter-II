import styled from 'styled-components';

export const HeaderCtn = styled.header`
  background-color: var(--blue);
`;

export const HeaderCtnCtt = styled.div`
  width: 100%;
  margin: 0 auto;;
  max-width: 1120px;
  position: relative;

  display: flex;
  align-items: center;
  padding: 1rem 1rem 10rem;
  justify-content: space-between;
  
  &>button {
    border: 0;
    color: white;
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: .25rem;
    transition: opacity .25s;
    background-color: var(--blue-light);

    &:hover {
      opacity: .75;
    }
  }
`;