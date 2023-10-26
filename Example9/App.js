class App extends React.Component{

  render(){

    return(

      <Students  name="Varun"
                 age={15}
                 address="Kathmandu"
                 subjects={["Java","Javascript","React JS"]}
                 marks={[25,24,24]}
                 isPass={true}
      />
    );
  }
}
let myDiv=document.querySelector('#root');
let root=ReactDOM.createRoot(myDiv);
root.render(<App/>);
