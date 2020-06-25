import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const Home = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
    
        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`wrapped-tabpanel-${index}`}
                aria-labelledby={`wrapped-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={2}>{children}</Box>}
            </Typography>
        );
    }
    function a11yProps(index) {
        return {
            id: `wrapped-tab-${index}`,
            "aria-controls": `wrapped-tabpanel-${index}`
        };
    } 
      const theme = useTheme();
      const [value, setValue] = React.useState(0);
      const [heroSelect,setHeroselect] = React.useState()
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = (index) => {
        setValue(index);
      };
      const selecthero1 = () =>{
        setHeroselect("Hero1")
        a11yProps(2)
        
      }
      const selecthero2 = () =>{
        setHeroselect("Hero2")
      }
      const selecthero3 = () =>{
        setHeroselect("Hero3")
      }
    return (
        <div>
            Tour of heros
            <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Hero" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <div style={{marginTop : "20px" ,color : " #000"}}>Top Hero</div>
          
          <div><Button variant="contained" onClick={selecthero1} >
                Hero 1
            </Button>
            <Button variant="contained" onClick={selecthero2}>
                Hero 2
            </Button>
            <Button variant="contained" onClick={selecthero3}>
                Hero 3
            </Button>
            </div>
            <div style={{marginTop : "20px" ,color : " #000"}}>Hero serach</div>
            <div>
            <TextField/>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          My hero
          <div>
              Hero Name : <TextField/> 
              <Button variant="contained" >
                add
            </Button>
          </div>
        </TabPanel>
      </SwipeableViews>
        <div style={{visibility : "hidden"}}>
        <div>{heroSelect} detail</div>
        <div>
          Name :  <TextField value = {heroSelect}/>
        </div>
        <div>
          Score : <TextField/>
        </div>
        </div>
        </div>
        
    )
}

export default Home
