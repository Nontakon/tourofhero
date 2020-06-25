import React from 'react'
import Navtop from './Navtop'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStoreContext } from "../store/storeprovider";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const Heros = () => {
    const { push } = useHistory();
    const {state, dispatch} = useStoreContext();
    const onSubmit = async (data) => {
      console.log(data);
      dispatch({ type: "ADD_HERO", payload: {Name:data.Name,Score:0 }});
    };
    const { register, handleSubmit } = useForm({defaultValues :{ Name: "", Score: "0" }});
    const selecthero = (i) => () => {
    push("/Detail", { i });
    };
    const deletehero = (i) => () => {
      dispatch({ type: "DEL_HERO", index: i });
    console.log(i)
    
    };
    return (
      <div>
        <Navtop />
        <Divstyled onSubmit={handleSubmit(onSubmit)}>
          My Heroes
          <div style={{ fontSize: "25px", paddingTop: 10 }}>
            Hero Name :{" "}
            <TextField
              style={{ paddingTop: 10 }}
              inputRef={register()}
              id="standard-basic"
              name="Name"
              type="text"
            />
            <Button
              variant="contained"
              type="submit"
              style={{ marginLeft: 20 }}
            >
              Add
            </Button>
          </div>
        </Divstyled>
        <ListDiv>
            {state.data.map(({Name,Score},i)=>{
                if(Name!==""&&Score!==""){
                return <DivinList style={{marginTop:20}}>
                <DivinList onClick={selecthero(i)}>
                    <Scorediv>
                        {Score}
                    </Scorediv>
                    <Namediv>
                        {Name}
                    </Namediv>  
                </DivinList>
                <DeleteName onClick={deletehero(i)}>
                        x
                </DeleteName>
                </DivinList>
                }else return null
                
            })}
        </ListDiv>
      </div>
    );
}
const Divstyled = styled.form`
  background-color: #fff;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  display: flex;
  margin: 50px 0 auto auto;
  justify-content: center;
  color: gray;
`;
const ListDiv = styled.div`
  flex-direction: column;
  font-size: 15px;
  align-items: center;
  display: flex;
  margin: 20px 0 auto auto;
  justify-content: center;
  color: gray;
`;
const DivinList = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  margin: 0 auto 0 auto;
  justify-content: center;
  background-color: gray;
`;
const Scorediv = styled.div`
  background-color: #61dafb;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  display: flex;
  margin: 0 5 5 auto;
  justify-content: center;
  color: gray;
  width:30px;
  height:30px;
  color: #fff;
`;
const Namediv = styled.div`
  background-color: gray;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  display: flex;
  margin :0 auto 0 30px;
  color: gray;
  width: 200px;
  height: 30px;
  color: #000;
`;
const DeleteName = styled.div`
  background-color: #fff;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 5px 5px 5px auto;
  padding-bottom: 2px;
  width: 20px;
  height: 20px;
  color: #000;
`;
export default Heros
