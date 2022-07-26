import React from 'react';
import {Cards,Charts,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import covidImage from './Images/covid19.png';
class App extends React.Component{
  state={
    data:{},
    country:"",
  }
  async componentDidMount()
  {
      const fetchedData=await fetchData();
      this.setState({data :fetchedData})
  }

  handleCountryChange= async(country)=>{
    const fetchedData=await fetchData(country);
    // console.log(fetchedData);
    this.setState({data: fetchedData,country:country});
  }
  render () {
    return(
      <div className={styles.container}>
      <img className={styles.image} src={covidImage} alt='Covid19'/>
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
