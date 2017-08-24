import React,{Component} from 'react'
import ReactDOM, { render } from 'react-dom';

import  TestPage from  './test';
import  Car from  './details';

import {Router,Route} from 'react-router';


var http = require('http');

let baseURL  =  'http://52.43.27.150:8080';
//let baseURL  =  'http://localhost:8080';



var categories = []
//const rootElement = ;
class Main extends Component {
  

	constructor(props){
		super(props)
		this.state={array:[]}
	}
	componentDidMount(){
		var input = ["a","b","c","d","e"];
    var comp = <Test/>
		this.setState({array:input})
    this.setState({test:false})
    this.setState({comp:comp})
    var self = this;

    let requestURL =  baseURL + '/getAllCategories'


  		fetch(requestURL,{
	  		method:'get',
  		}).then(

	  		(response) => { 
          this.setState({array:["x","y"]});

	  			console.log("Hey i am here");
	  			console.log(response);
	  		return response.json()

	  		 }).then(
  		(responseData) => {
        categories = responseData

        var categoryTitles = responseData.map(function(item) {
            return item['resourceName'];
          });
        this.setState({array:categoryTitles});
  		}).catch((error) => {
  			console.log(error)
              
      });


  	}

      handleClick(index) {
        //console.log(categories[index]);
        this.setState({test:true})
      
        //this.getCategoryData(index)
       }



       getCategoryData(index) {
         let resourceName = categories[index].resourceName;
          let requestURL =  baseURL + '/fetch?category=' + resourceName
          fetch(requestURL,{
              method:'get',
              }).then((response) => { 
                console.log(response);
              })
        }



       //}


  	render() {
      if (this.state.test){
        return (
                <div>
          <h1>Test</h1>

        <Test> </Test>
        </div>
          );

      }

  		var newComp=[] ;
  	if(this.state.array.length){
  		this.state.array.map((item,index)=>{
  			newComp.push(
               <div  key={index}><button  onClick={()=>{this.handleClick(index)}}>{item }</button> </div>
  			)
  		})
  		
  	}
    return (
    	<div>
      		<h1>All Categories</h1>
      		{newComp}
      	</div>
    );
  } 
}

//ReactDOM.render(<Main />, document.getElementById('root')); 	 	
render( 
      <Router component={Main} path="app">
      <Route path ="/test" Component={TestPage} />
      <Route path ="/car" Component={Car} />
    </Router>,
  document.getElementById('app')
)