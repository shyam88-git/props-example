class App extends React.Component{

    render(){

        return(

            <div>
                <Course name="Java" titles={["Java SE","Java EE","Android"]}/>
                <Course name="Javascript" titles={["Javascript","React JS","Android"]}/>
            </div>
        )
    }
}
let myDiv=document.querySelector('#root');
let root=ReactDOM.createRoot(myDiv);
root.render(<App/>);