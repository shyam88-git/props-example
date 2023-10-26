class Course extends React.Component{
    

    render(){
        const{titles}=this.props;
        let subj=[];

         titles.forEach((s)=>{

                subj.push(<li>{s}</li>);
         });

        return(

            <div>

                <p>Course Name:{this.props.name}</p>
                  <p>Titles:<ul>{subj}</ul></p>

            </div>
        )
    }
}