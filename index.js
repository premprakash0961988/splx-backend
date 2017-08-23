import React,{Component} from 'react'
import ReactDOM from 'react-dom';
var http = require('http');

//var request = require('request')
let baseURL  =  'http://52.43.27.150:8080';



var categories = []

class Main extends Component {
  

	constructor(props){
		super(props)
		this.state={array:[]}
	}
	componentDidMount(){
		var input = ["a","b","c","d","e"];
		this.setState({array:input})
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
        this.getCategoryData(index)
       }



       getCategoryData(index) {
        let dataURL = categories[index].get;
        


       }


  	render() {
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

ReactDOM.render(<Main />, document.getElementById('root')); 	 	