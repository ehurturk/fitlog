import React, {Component} from 'react'
import "./List.css"


export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ["hey hey mama", "the rock"],
		};

		this.add_list = this.add_list.bind(this);
	}

	add_list(input) {
		console.log(input);
		this.setState({list: [...this.state.list, input]});
	}

	render() {
		let inputstr = '';
		return (
			<div className="list">
				<ul>
					{this.state.list.map((element, index) => <li key={index}>{element}</li>)}
				</ul>
				<div className="inputArea">
					<label className="inputElement">Add Workout: </label>
					<input type="text" onChange={(evt) => { inputstr = evt.target.value; }} />
					<button className="inputElement btn" onClick={() => { this.add_list(inputstr);}}>Submit</button> <br></br>
					<button className="inputElement btn" onClick={() => this.setState({list: Array(0)})}>Clear</button>
				</div>
			</div>
		)
	}
}
