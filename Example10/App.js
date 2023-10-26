class App extends React.Component{

    render(){

        return(

           <div>
            <h3>Emoji Pickers</h3>
             <Emoji e1="😂" e2="😂" e3="😂"/>
            <Emoji e1="😒" e2="😒" e3="😒"/>
            <Emoji e1="👌"e2="🥭" e3="❤️"/>
           </div>
        )
    }
}
let myDiv=document.querySelector('#root');
let root=ReactDOM.createRoot(myDiv);
root.render(<App/>);
