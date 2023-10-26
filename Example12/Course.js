class Course extends React.Component{
    

    render(){
        const{titles}=this.props;

        return(

            <div>
                <p>Course Name:{this.props.name}</p>

                <p>Titles:
                    <ul>
                        {titles.map((s)=>{

                            return(
                                <li>{s}</li>
                            )
                        })}
                    </ul>
                </p>
            </div>


        )
    }
}