class Greeting extends React.Component{

    render(){

        return(
            <h3>Good Evening {this.props.name} from {this.props.from}</h3>
        )
    }
}