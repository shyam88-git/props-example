class App extends React.Component{

    render(){

       return(
        <div>
            <Greeting name="Shyam"/>
        </div>
       );
    }
}

let myDiv=document.querySelector('#root');
let root=ReactDOM.createRoot(myDiv);
root.render(<App/>);