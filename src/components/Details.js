import React from "react";
import Navtop from './Navtop'
import { useStoreContext } from "../store/storeprovider";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

const Details = () => {
    const { push } = useHistory();
    const {state,dispatch}=useStoreContext()
    const { register, handleSubmit } = useForm({Name:"",Score:""});
    const heroi = useLocation();
    const back = () => {
      push("/Hero");
    };
    const onSubmit = async(data) => {
        console.log(data);
        dispatch({ type: "SET_HERO", payload: data,index : heroi.state.i });
        push("/Hero");
    };
    return (
      <div>
        <Navtop />
        <Divstyled onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Button
              variant="contained"
              onClick={back}
              style={{
                width: 10,
                height: 30,
                paddingRight: 10,
                marginRight: 20,
              }}
            >
              &lt;
            </Button>
            {state.data[heroi.state.i].Name} Detail
          </div>
          <div style={{ paddingTop: 20 }}>
            Name :{" "}
            <TextField
              inputRef={register()}
              defaultValue={state.data[heroi.state.i].Name}
              style={{ paddingTop: 10 }}
              id="standard-basic"
              name="Name"
              type="text"
            />
          </div>
          <div>
            Score :{" "}
            <TextField
              defaultValue={state.data[heroi.state.i].Score}
              style={{ paddingTop: 10 }}
              id="standard-basic"
              type="text"
              name="Score"
              inputRef={register()}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            style={{ width: 10, height: 30, marginTop: 20 }}
          >
            save
          </Button>
        </Divstyled>
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
export default Details
