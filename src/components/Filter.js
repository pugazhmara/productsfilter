import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
               <div className="filter-result">{this.props.count} Products are available</div>
               <div className="items" >
               <button value="" onClick={this.props.filterProducts}>All</button>
               <button value="Watches" onClick={this.props.filterProducts}>Watches</button>
               <button value="Kurtas" onClick={this.props.filterProducts}>Kurta</button>
               <button value="Jeans" onClick={this.props.filterProducts}>Jeans</button>
               <button value="Flip Flops" onClick={this.props.filterProducts}>Flip Flops</button>
               <button value="Casual Shoes" onClick={this.props.filterProducts}>Casual Shoes</button>
               <button value="Sweatshirts" onClick={this.props.filterProducts}>Sweatshirts</button>
               <button value="Kurta Sets" onClick={this.props.filterProducts}>Kurta Sets</button>
               <button value="Jeans" onClick={this.props.filterProducts}>Jeans</button>
               <button value="Dresses" onClick={this.props.filterProducts}>Dresses</button>
               <button value="Jackets" onClick={this.props.filterProducts}>Jackets</button>
               <button value="Shirts" onClick={this.props.filterProducts}>Shirts</button>
               <button value="Fitness Bands" onClick={this.props.filterProducts}>Fitness Bands</button>
               <button value="Tshirts" onClick={this.props.filterProducts}>Tshirts</button>
               <button value="Jumpsuit" onClick={this.props.filterProducts}>Jumpsuit</button>
               <button value="Track Pants" onClick={this.props.filterProducts}>Track Pants</button>
               <button value="Clothing Set" onClick={this.props.filterProducts}>Clothing Set</button>
               <button value="Tops" onClick={this.props.filterProducts}>Tops</button>
               <button value="Headphones" onClick={this.props.filterProducts}>Headphones</button>
               <button value="Sarees" onClick={this.props.filterProducts}>Sarees</button>
               <button value="Mascara" onClick={this.props.filterProducts}>Mascara</button>
               <button value="Sports Shoes" onClick={this.props.filterProducts}>Sports Shoes</button>
               <button value="Kajal and Eyeliner" onClick={this.props.filterProducts}>Kajal and Eyeliner</button>
               <button value="Suits" onClick={this.props.filterProducts}>Suits</button>
               <button value="Sweaters" onClick={this.props.filterProducts}>Sweaters</button>
               <button value="Smart Watches" onClick={this.props.filterProducts}>Smart Watches</button>
               <button value="Formal Shoes" onClick={this.props.filterProducts}>Formal Shoes</button>
               <button value="Trousers" onClick={this.props.filterProducts}>Trousers</button>
               </div>
              
            
            </div>
        )
    }
}
