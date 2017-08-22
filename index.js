import React,{Component} from 'react'
import ReactDOM from 'react-dom';
var http = require('http');





class Main extends Component {
	constructor(props){
		super(props)
		this.state={array:[]}
	}
	componentDidMount(){
		var input = ["a","b","c","d","e"];
		this.setState({array:input})



var options = {
  host: '52.43.27.150',
  port: '8080',
  path: '/getAllCategories',
//  mode: 'no-cors'
};



var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };
var myRequest = new Request('http://52.43.27.150:8080/getAllCategories', myInit);

fetch(myRequest).then(function(response) {
  console.log(response.blob());
  return response.blob();
}).then(function(myBlob) {
  
});


  		// fetch('http://52.43.27.150:8080/getAllCategories',{
	  	// 	method:'get',
	  	//     mode: 'no-cors',
	  	// 	// headers: {
	  	// 	//             'X-API-CLIENT':'web',
	  	// 	//             "Content-Type": reqObj['contentType'] ?reqObj['contentType'] : "application/x-www-form-urlencoded"
	  	// 	//        },
	  	// 	//        body:reqObj.body
  		// }).then(

	  	// 	(response) => { 
    //       this.setState({array:["x","y"]});

	  	// 		console.log("Hey i am here");
	  	// 		console.log(response);
	  	// 	return response.json()

	  	// 	 }).then(
  		// (responseData) => {

    //     var categories = responseData.map(function(item) {
    //         return item['resourceName'];
    //       });
    //     this.setState({array:categories});
    //   console.log(responseData)
  		// console.log(responseData)
  		// }).catch((error) => {
  		// 	console.log(error)
  		//       });


  	}
  	render() {
  		var newComp=[] ;
  	if(this.state.array.length){
  		this.state.array.map((item,index)=>{
  			newComp.push(
  				<div key={index} >{item}</div>
  			)
  		})
  		
  	}
    return (
    	<div>
      		<h1>Hello world!</h1>
      		{newComp}
      	</div>
    );
  } 
}

ReactDOM.render(<Main />, document.getElementById('root')); 	 	