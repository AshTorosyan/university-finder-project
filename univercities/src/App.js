import Input from "./components/Input/Input";
import Text from "./components/Text/Text";
import Wrapper from "./ui/Wrapper/Wrapper";
import Card from "./ui/Card/Card";
import { useRef, useState } from "react";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import Listitem from "./components/Listitem/Listitem";
import classes from './ui/Global.module.css';
import "./App.css";

const App = () => {
  const searchValue = useRef('');
  const [univercities,setUnivercities] = useState([]);
  const api = 'http://universities.hipolabs.com/search?country=';

  const findUnivercities = () => {
     fetch(api + searchValue.current.value)
     .then(data => data.json())
     .then(result => setUnivercities(result))
  }

  return (
   <Wrapper>
      <Card className={classes.card}>
         <Text className={classes.text}> Country to search universities </Text> <br></br>
         <Input className={classes.input} propsRef={searchValue}  type='text' placeholder="write universities"/>
         <Button className={classes.button} onClick={findUnivercities}> Find universities</Button>

      </Card>
      <List className={classes.list}>
         {
          univercities.map(univer => {
            return (
              <Listitem className={classes['list-item']} key={Math.random()}>
               <Text> name: {univer.name}</Text>  
               <br />
               <Text> country:  {univer.country}</Text>  
               <br />
               <Text> web-page: {univer['web_pages']}</Text>
               <br />
               <Text> alpha two code: {univer['alpha_two_code']}</Text>
               <br />
               <Text> domain: {univer.domains[0]}</Text>
              </Listitem>
            )
          })
         }
      </List>
   </Wrapper>
  )
}

export default App