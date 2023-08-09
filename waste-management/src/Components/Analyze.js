import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Circle from 'rc-progress/lib/Circle'
import AnalyzeTest from './AnalyzeTest'
import Card from './Card'
import img1 from './ssn_main_gate.jpg'
import img2 from './ssn-clock-tower.jpg'
import img3 from './ssn_ece_department.jpg'
import img4 from './ssn_scool_of_management.jpg'

function Analyze() {

    const [sensorData, setSensorData] = useState([]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        //fetch('https://api.thingspeak.com/channels/2089280/feeds/last.json?api_key=8N49A8R08KGNBT20')
        fetch('https://api.thingspeak.com/channels/2125357/feeds/last.json?api_key=GX559NMTEDOUSH2E')
          .then(response => response.json())
          .then(data => setSensorData(data));
      }, 1000); // call the API every 10 seconds
  
      // cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);



  /*const [sensorData,setSensorData] = useState([])
  useEffect(()=>{
    async function fetchSensorData(){
      try{
        //const requestUrl = 'http://api.thingspeak.com/channels/2125357/feeds/last.json?api_key=GX559NMTEDOUSH2E';
        const requestUrl = 'https://api.thingspeak.com/channels/2089280/feeds/last.json?api_key=8N49A8R08KGNBT20';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setSensorData(responseJSON);
        
      }catch{

      }
    }
    fetchSensorData();
  },[]);
  if(sensorData.field1 == null)
  sensorData.field1=28;*/

  /*useEffect(async () => {
    console.log("yes");
    console.log("good");
    fetchSensorData()
  }, [sensorData]);*/
  var field1 = sensorData.field1

  return (
    <div className='Dashboard' style={{height:2800}}>
      

        
        <Navbar/>
        <p className='Montserrat_gold0' style={{top:-100}}>ANALYZE</p>
        
        <div style={{position: 'relative', left: 500, top: -300,margin: 40, height: 200, width: 200 }}>
           <Card
             title='SSN College Main Gate'
             imageUrl={img1}
             body='Directions to SSN College Main Gate'
             sensorData = {sensorData}
             field = '1'
           />
           
           <iframe className = 'Graph' position= 'absolute' top='0' right='0' width="450" height="260"  src="https://thingspeak.com/channels/2125357/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Garbage+Bin+1&type=line"></iframe>
          
            <Card
              title='SSN College Clock Tower'
              imageUrl={img2}
              body='Directions to SSN College Clock Tower'
              sensorData = {sensorData}
              field = '2'/>

            <iframe className='Graph2' width="450" height="260"  src="https://thingspeak.com/channels/2125357/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Garbage+Bin+1&type=line"></iframe>


            <Card
              title='SSN College ECE department'
              imageUrl={img3}
              body='Directions to SSN College ECE department'
              sensorData = {sensorData}
              field = '3'/>

            <iframe className='Graph3' position='absolute' top='1000' width="450" height="260"  src="https://thingspeak.com/channels/2125357/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Garbage+Bin+3&type=line"></iframe>


            <Card
              title='SSN School of Management'
              imageUrl={img4}
              body='Directions to SSN School of Management'
              sensorData = {sensorData}
              field = '4'/>
            
            <iframe className = "Graph4" width="450" height="260"  src="https://thingspeak.com/channels/2125357/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Garbage+Bin+4&type=line"></iframe>


          </div>
          {/*<div style={{position: 'relative', left: 500, top: -300,margin: 40, height: 200, width: 200}}>
          <Circle
             percent={sensorData.field1}
             strokeColor="red"
             strokeWidth={5}
             trailColor='yellow'
             trailWidth={4}
             strokeLinecap='square'
          />
          <AnalyzeTest sensorData = {sensorData} />
  </div>
          <div style={{position: 'relative', left: 1000, top: -780,margin: 40, height: 200, width: 200}}>
          <Circle
             percent={sensorData.field1}
             strokeColor="red"
             strokeWidth={5}
             trailColor='yellow'
             trailWidth={4}
             strokeLinecap='square'
          />
          <AnalyzeTest sensorData = {sensorData} />
          </div>
          <div style={{position: 'relative', left: 1000, top: -780,margin: 40, height: 200, width: 200}}>
          <Circle
             percent={sensorData.field1}
             strokeColor="red"
             strokeWidth={5}
             trailColor='yellow'
             trailWidth={4}
             strokeLinecap='square'
          />
          <AnalyzeTest sensorData = {sensorData} />
  </div>*/}
          
        

    </div>
  )
}

export default Analyze