import React from "react";
import { CCol,CButton, CRow, CSelect } from "@coreui/react";

const Search = (props) => {
    let {dropData,searchData,searchChange,searchClick} = props;
    return(
        <CRow  className="mt-4">
            <CCol lg="4" > 
                <CSelect value={searchData} onChange={searchChange}>
                    <option className="text-center" value=''>----Please Select----</option>
                    {dropData.map((data,index)=>{
                        return(
                            <option key={index} id={data.id} value={data.id}>{data.name}</option>
                        )
                    })
                    }
                </CSelect>
            </CCol>
            <CCol lg="2">
            <CButton onClick={searchClick}  className="searchBtn" style={{width:"80px"}}>  Search</CButton>
            </CCol>
        </CRow>
    )
}

export default Search;