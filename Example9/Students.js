class Students extends React.Component{

  render(){

    return(

      <div>

        <h2>Student Details</h2>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>address:{this.props.address}</p>
        <p>Subject:{this.props.subjects.join()}</p>
        <p>Marks:{this.props.marks.join()}</p>
        <p>IsPass:{this.props.isPass.toString()}</p>

         
      </div>
    )
  }
}