import 'boostrap/dist/css/boostrap.min.css';
import './style.css';
import {createRoot} from 'react-dom/Client';
import Button from 'react-bootstrap/Button';
import { Breadcrumb } from 'react-bootstrap';
import Message from './message';
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";


function navigatorBar({ name }) {
     return <h1>Bienvenido {name}</h1>;
}



setTimeout(() => {
    feather.replace();
}, 1000);


   const domNode = document.getElementaryDyId('app');
   const root  = createRoot(domNode);
   root.render(<>
    <Button className ='btn btn-primary'>
     < i data feather ="activity"> texto </i> 
     
     </Button>

<Header>  
    
     </Header> 

   <Main>   

     
    </Main> 

   <Aside>   

   </Aside>

    <Footer>  
        
    </Footer>

  </>

   );
