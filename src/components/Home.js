import React from "react";
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import Navtop from './Navtop';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useStoreContext } from "../store/storeprovider";
const Home = () => {
  const { push } = useHistory();
  const {state}=useStoreContext()
      
  const selecthero = (i) => () =>{
        push("/Detail",{i})
      }
  const [search,setSearch]=React.useState("")
  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };
    return (
      <div>
        <Navtop />
        <Divstyled>
          Top Heroes
          <div>
            {state.data.sort((a,b)=>{return b.Score-a.Score}).map(({Name,Score},i)=>{
              if(i<3&&Name!==""){
                return(
                
                <Buttonstyled
                  variant="contained"
                  onClick={selecthero(i)}
                  style={{ marginRight: 20 }}
                >
                  {Name}
                </Buttonstyled>
              )}else{
                return null
              }

            })}
          </div>
        </Divstyled>
        <Searchstyled>
          Hero Search
          <TextField type="text" placeholder="" onChange={searchSpace} />
          {state.data.map(({Name},i)=>{ return {Name,i}})
          .map(({Name,i}) => {
              if (search === "") {
                return null;
              }else if (Name.toLowerCase().includes(search.toLowerCase())) {
                return <SearchButton onClick={selecthero(i)}>{Name}</SearchButton>;
              }else return null})
          }
        </Searchstyled>
      </div>
    );
}
const Divstyled = styled.div`
  background-color: #fff;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  display: flex;
  margin: 50px 0 auto auto;
  justify-content: center;
  color: gray;
`;
const Searchstyled = styled.div`
  background-color: #fff;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  display: flex;
  margin: 50px 0 auto auto;
  justify-content: center;
  color: gray;
`;
const Buttonstyled = styled(Button)`
  &&& {
    margin: 50px 0 auto auto;
    width: 100px;
    height: 100px;
    background-color: #61dafb;
    color: #fff;
  }
`;
const SearchButton = styled(Button)`
  &&& {
    margin: 5px auto 0 auto;
    background-color: #61dafb;
    color: #fff;
  }
`;
export default Home
