import styled from 'styled-components';

export const TableList = styled.div`
  width: 100%;
  padding-top: 7.5rem;

  &>table {
    width: 100%;
    border-spacing: 0 .5rem;

    &>thead>tr>th {
      padding: 1rem;
      text-align: left;
      line-height: 1.5rem;
      color: var(--text-body);
    }

    &>tbody>tr>td {
      border: 0;
      padding: 1rem;
      border-radius: .25rem;
      color: var(--text-body);
      background-color: var(--shape);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.whitdraw {
        color: var(--red);
      }
    }
  }
`;