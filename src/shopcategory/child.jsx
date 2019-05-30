import React, {Component} from 'react';

class child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.demo = this.demo.bind(this);
    }
    demo(data){
        const new_data = this.props.no ;
        this.props.list(new_data);
        
        console.log(this.props.list(1))
    }
    render() { 
        return ( <li class="page-item" key= {this.props.no} id={this.props.no}>
                    <a class="page-link" onClick={this.props.list} href="#">
                        {this.props.no}
                    </a>    
                </li> );
    }
}
 
export default child;