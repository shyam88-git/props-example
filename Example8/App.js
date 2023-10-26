class App extends React.Component{

    render(){

        return(
            <div>
                <Greeting name="Varun" from ="Deepak"/>
            </div>
        );
    }
}

let myDiv=document.querySelector("#root");
ReactDOM.render(<App/>,myDiv);