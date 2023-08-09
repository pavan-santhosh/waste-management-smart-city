import React from 'react'
import Navbar from './Navbar'

function Map(title) {
  console.log(title.title)
  if(title.title === 'SSN College Main Gate'){
    console.log('varudhu')
  }
  if(title.title === "SSN College Main Gate"){
    return (
      <div className='Dashboard'>
        
  
  
          <Navbar/>
         {/* <p className='Montserrat_gold0'>MAP</p>*/}
          <iframe className='Map' width="1100" height="745" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=SSN%20College%20of%20Engineering+(Title)&amp;ie=UTF8&amp;t=k&amp;z=20&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    ) 
  }
    else if(title.title === 'SSN College Clock Tower'){
      return (
        <div className='Dashboard'>
          
    
    
            <Navbar/>
           {/* <p className='Montserrat_gold0'>MAP</p>*/}
           <iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Clock%20Tower%20Q53W%2B3HR%2C%20Thiruporur%2C%20Tamil%20Nadu%20603105+(Title)&amp;ie=UTF8&amp;t=k&amp;z=20&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      )
    }
  else if(title.title == 'SSN College ECE department'){
    return (
      <div className='Dashboard'>
        
  
  
          <Navbar/>
         {/* <p className='Montserrat_gold0'>MAP</p>*/}
         <iframe className = "Map" width="1100" height="745" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=ECE%20Department%20Q52W%2B7CG%2C%20Kalavakkam%2C%20Tamil%20Nadu%20603105+(Title)&amp;ie=UTF8&amp;t=k&amp;z=20&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    )
  }
  else if(title.title == 'SSN School of Management'){
    return (
      <div className='Dashboard'>
        
  
  
          <Navbar/>
         {/* <p className='Montserrat_gold0'>MAP</p>*/}
         <iframe className="Map" width="1100" height="745" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sri%20Sivasubramaniya%20Nadar%20(SSN)%20School%20of%20Management.%20(%E0%AE%8E%E0%AE%B8%E0%AF%8D%20%E0%AE%8E%E0%AE%B8%E0%AF%8D%20%E0%AE%8E%E0%AE%A9%E0%AF%8D%20%E0%AE%AE%E0%AF%87%E0%AE%B2%E0%AE%BE%E0%AE%A3%E0%AF%8D%E0%AE%AE%E0%AF%88%E0%AE%AA%E0%AF%8D%20%E0%AE%AA%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AE%BF)%20Q53X+4JV,%20Old%20Mahabalipuram%20Road,%20Kalavakkam,%20Chennai,%20Tamil%20Nadu%20603110+(My%20Business%20Name)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
      </div>
    )
  } 
  else{
     console.log(title);
  return (
    <div className='Dashboard'>
      


        <Navbar/>
       {/* <p className='Montserrat_gold0'>MAP</p>*/}
       <iframe className="Map" width="1100" height="745" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sri%20Sivasubramaniya%20Nadar%20(SSN)%20School%20of%20Management.%20(%E0%AE%8E%E0%AE%B8%E0%AF%8D%20%E0%AE%8E%E0%AE%B8%E0%AF%8D%20%E0%AE%8E%E0%AE%A9%E0%AF%8D%20%E0%AE%AE%E0%AF%87%E0%AE%B2%E0%AE%BE%E0%AE%A3%E0%AF%8D%E0%AE%AE%E0%AF%88%E0%AE%AA%E0%AF%8D%20%E0%AE%AA%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AE%BF)%20Q53X+4JV,%20Old%20Mahabalipuram%20Road,%20Kalavakkam,%20Chennai,%20Tamil%20Nadu%20603110+(My%20Business%20Name)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
    </div>
  )
  }
}

export default Map