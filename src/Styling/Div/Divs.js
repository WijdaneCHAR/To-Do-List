import styled from 'styled-components';

export const OptionsDiv = styled.div`
    background-color:#f6f6f6;
    text-align:justify;
    margin: 21px ;
    padding : 10px;
    height:50vh;
    overflow:scroll;

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
padding:5px 0;
`;
export const AddOptionDiv = styled.div`
padding-bottom: 50px ;
`;