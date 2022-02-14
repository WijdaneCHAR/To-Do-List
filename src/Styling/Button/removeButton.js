import styled from 'styled-components';

export const RemoveAll = styled.button`
background-color:transparent;
border:none;
color:#28405A ;
text-decoration:underline;
&:hover{
    text-decoration:none;
    cursor:pointer;
};
`;
export const Remove = styled(RemoveAll)`
float:right;
`;