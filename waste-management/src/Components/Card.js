import React from 'react'
import Circle from 'rc-progress/lib/Circle'
import AnalyzeTest from './AnalyzeTest'
import Map from './Map'

function Card({title,imageUrl,body,sensorData,field}) {
  var data=''
    if (field=='1')
  data  = sensorData.field1
  if (field=='2')
  data  = sensorData.field2
  if (field=='3')
  data  = sensorData.field3
  if (field=='4')
  data  = sensorData.field4

  const querystring = title
  const url = `http://localhost:3000/Map/${querystring}`;
  
  var msg='Bin is NOT Full'

  if(data == 100)
  {
    msg = "Bin is Full!!!"
  }
  
    return (
    <div className='card-container' >
        <div className='image-container'>
            <img src={imageUrl} alt='gnjkv kvnkvnskdnvksnskvnsvnknvknvksnkvnkvn'/>
            <Circle
             percent={data}
             strokeColor="red"
             strokeWidth={5}
             trailColor='yellow'
             trailWidth={4}
             strokeLinecap='square'
              />
             {/*<AnalyzeTest sensorData = {data}/>*/}
             <p className="percentage">{data}%</p>
        </div>
        <div className='card-title'>
            <h3 style={{top:-100}}>{title}</h3>
        </div>
        <div className='card-body'>
            <p>{msg}</p>
            <a href={url}>{body}</a>
        </div>
    </div>
  )
}

export default Card