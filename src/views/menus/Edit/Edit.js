import React,{useState} from "react";
import Table from "./Table";
import Detail from "./Detail";

const Edit = () =>{
    const[detailData,setDetailData] = useState([])

    let detailClick = (data) =>{
        setDetailData(data)
    }

    const[dataArray,setDataArray ] = useState([
        {id:"100",name:"aung",email:"a@email",phone:"0911"},
        {id:"101",name:"maung",email:"m@email",phone:"0922"},
        {id:"102",name:"kaung",email:"k@email",phone:"0933"},
        {id:"103",name:"saung",email:"s@email",phone:"0944"},
    ])

    let resetClick = ()=>{
        setDetailData(
            {id:"",name:"",email:"",phone:""}
        );
    }
    return (
        <>
        <Table dataArray={dataArray}
        detailClick={detailClick}/>
        <Detail 
        detailData={detailData}
        resetClick={resetClick}
        />
        </>
    )
}

export default Edit