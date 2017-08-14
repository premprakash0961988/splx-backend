import React,{Component} from 'react'
import ReactDOM from 'react-dom';

class Main extends Component {
	constructor(props){
		super(props)
		this.state={array:[]}
	}
	componentDidMount(){
		var input = ["a","b","c","d"];
		this.setState({array:input})
  		fetch('http://localhost:8080/getAllCategories',{
	  		method:'get',
	  	    mode: 'no-cors',
	  		// headers: {
	  		//             'X-API-CLIENT':'web',
	  		//             "Content-Type": reqObj['contentType'] ?reqObj['contentType'] : "application/x-www-form-urlencoded"
	  		//        },
	  		//        body:reqObj.body
  		}).then(

	  		(response) => { 
	  			console.log("Hey i am here");
	  			console.log(response);
	  		return response.json()

	  		 }).then(
  		(responseData) => {
  		console.log(responseData)
  		}).catch((error) => {
  			console.log(error)
  		      });
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