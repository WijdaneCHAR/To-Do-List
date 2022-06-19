import styled from 'styled-components';
import { keyframes } from 'styled-components';
const txtAppear = keyframes`
0%{
    transform: translateY(0);
}
20%{
    transform: translateY(-1.5em);
   
}
40%{
    transform: translateY(1em);

}
60%{
    transform: translateY(-0.5em);
}
80%{
    transform: translateY(-0.25em);
}
100%{
    transform: translateY(0);
}
`;
export const NoOptions = styled.p`
    animation: ${txtAppear} 4s ease-in-out infinite;
    margin:35px 0;
    color:#333;
    text-align:center;
    font-size: 25px;
`;
