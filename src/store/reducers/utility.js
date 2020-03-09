const  UpdateObject =(oldObject,Updated)=>{
    return{
        ...oldObject,
        ...Updated
    }
}


export default UpdateObject