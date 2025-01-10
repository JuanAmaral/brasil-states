import styled from "styled-components";
interface ContainerMapProps {
    children?: React.ReactNode;
  }

export const ContainerMap = styled.div<ContainerMapProps>`
    path:hover{
        fill:#439750;
        cursor:pointer;

    }
    z-index: 999;
    -webkit-tap-highlight-color: transparent;
`;
