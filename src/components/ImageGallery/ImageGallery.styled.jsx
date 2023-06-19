import styled from 'styled-components';

export const Gallery = styled.ul`
list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export const Item = styled.li`
width: 20%;
    height: 0;
    padding-bottom: 20%;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    
    :hover{
        transform: scale(1.02);
        cursor: pointer;    
    }
`

export const Image = styled.img`
width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`