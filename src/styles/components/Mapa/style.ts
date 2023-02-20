import styled from "styled-components";


export const ContainerMap = styled.div`
    *{
        fill: #e4e4e4;
    }
    path:hover{
        fill:#71aaff;
    }
    cursor:pointer;
`;
export const Box = styled.div`
    width: 15rem;
    height: 15rem;
    position: absolute;
    margin: 3rem 3rem 3rem 3rem;
    border-radius: 10px;
    opacity: 0.8;
    background: rgba( 255, 255, 255, 0.85 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.27 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    h1{
        color:#448fff;
        font-size: 2rem;
        font-weight: bold;
    }
    h2{
        color: #2060bf;
        font-size: 1.2rem;
        font-weight: bold;
    }
    h3{
        color:#2060bf;
        font-size: 0.9rem;
        font-weight: bold;
    }
    h4{
        font-size: 0.9rem;
        color:#848484;
    }
`;
