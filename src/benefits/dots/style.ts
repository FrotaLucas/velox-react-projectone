import styled from 'styled-components'


const Item = styled.div<{toggle: boolean}>`
 background-color: ${({ toggle }) => (toggle ? 'red' : 'blue')};
`;

export {Item};

