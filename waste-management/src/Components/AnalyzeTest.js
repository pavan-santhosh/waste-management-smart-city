import React from "react";
import { PropTypes } from "prop-types";

GetList.propTypes = {
    sensorData: PropTypes.array,
}

GetList.defaultProps = {
    sensorData: [],
}

function GetList(props){
    const {sensorData,field} = props;
    var data=''
    if (field=='1')
  data  = sensorData.field1
  if (field=='2')
  data  = sensorData.field2
  if (field=='3')
  data  = sensorData.field3
  if (field=='4')
  data  = sensorData.field4
    if(data == null)
    sensorData.field1=0;
    return(
        <p className="percentage">{data}%</p>
    )
}

export default GetList;