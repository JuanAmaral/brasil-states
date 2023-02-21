import styled from "styled-components";


export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    margin: 10rem 0rem 0rem 50rem;
    width: 15rem;
    height: 20rem;
    border-radius: 20px;
    padding:0.8rem;
    background: rgba(255, 255, 255, 0.57);
    border-radius: 16px;
    box-shadow: 0px 0px 7.60714px 3.80357px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(9.3px);
    border-radius: 35px;
    text-align: center; 
    p{
        color:#3e3e3e;
        font-size: 1.8rem;
        font-weight: bold;
        height: 4rem;
        min-height: 4rem;
    }
    h1{
        color:#448fff;
        font-size: 3rem;
        font-weight: bold;
        width: 50%;
    }
    h2{
        color: #2060bf;
        font-size: 1.8rem;
        font-weight: bold;
        width: 50%;
    }
    h3{
        color:#2060bf;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        width: calc(100% / 3);
    }
    h4{
        font-size: 0.9rem;
        color:#848484;
        font-weight: 100;
        width: 50%;
        text-align:center;
    }
    h5{
        font-size: 0.9rem;
        color:#848484;
        font-weight: 100;
        width: calc(100% / 3); 
    }
    @media(max-width: 1024px){
        margin: 25rem 0rem 0rem 0rem;
        left: 20%;

    }
  

`;

export const TemperDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;
export const DadosDiv = styled.div`
    display:flex;
    height: 100%;
    width: calc(100% / 3);
    flex-direction:column;
`;
export const Divisor = styled.div`
    margin-top: 1rem;

`;