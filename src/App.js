import React from 'react';
import data from "./data1.json";
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      search:"",
    };
  }
  filterProducts = (e) =>{
    console.log(e.target.value);
    
    this.setState({
      search: e.target.value,
      products: data.products.filter(
        (product) => 
        product.category.indexOf(e.target.value)!==-1
         ),
    })
  }
    render(){
      return(
      <div className="grid-container">
        <header>
         <div className="title-incresco"> Incresco Shopping </div> 
        </header>
        <main>
           <div className="content">
           <Filter count={this.state.products.length}
           filterProducts={this.filterProducts}
           
           ></Filter>

               <Products products={this.state.products}></Products>
           </div>
        </main>
        <footer>
            All rights are reserved by incresco
        </footer>
      </div>
    );
 }
 
}

export default App;
