import styled from 'styled-components';

export const OptionsDiv = styled.div`
    background-color:#f6f6f6;
    text-align:justify;
    margin: 21px 10%;
    padding : 10px;
    height:50vh;
    overflow:scroll;
    border-radius: 20px;

::-webkit-scrollbar {
  width: 5px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
    border-radius:8px;
`;
export const OptionDiv = styled.div`
text-align:justify;
border-bottom:1px solid #CCC;
height:fit-content;
padding:15px 10px;
`;
export const AddOptionDiv = styled.div`
padding:30px 0;
margin: 21px ;
`;