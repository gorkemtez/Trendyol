import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div>  
          
       <div class='container-fluid' >            
        <OwlCarousel items={12}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           
           <div className='x'><a><img  className="img" src= {'assets/img/2.png'}/></a><p>Trendyol</p></div>  
           
           
        
 
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
        
  
export default Owldemo1