import React from 'react'
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const Navtop = () => {
    const { push } = useHistory();
    const gotohero = ()=>{
        push("/Hero")
    }
    const gotohome = () =>{
        push("/")
    }
    return (
        <div>
            <Divstyled>
                <b>Tour of heros</b>
                <div>
                    <Buttonstyled variant="contained" onClick={gotohome} style={{marginRight:20}}>
                    Dashboard
                    </Buttonstyled>
                    <Buttonstyled variant="contained" onClick={gotohero}>
                    Hero
                    </Buttonstyled>
                </div>
                
            </Divstyled>
      </div>
      
    );
}
const Divstyled = styled.div`
  background-color: #ffffff;
  flex-direction: column;
  font-size : 30px;
  align-items: center;
  display : flex;
  margin: 0 auto;
  justify-content: center;
  color: #61dafb;
`;
const Buttonstyled = styled(Button)`
  width: 150px;
`;
export default Navtop
