class Greeting extends React.Component{

    render(){

        let element=<h1>Good Morning Sir ${this.props.name}</h1>
        return element;

    }
}