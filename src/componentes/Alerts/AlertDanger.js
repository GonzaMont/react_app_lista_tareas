import React from "react";
import MuiAlert from "@material-ui/lab/Alert";


// import 'bootstrap/dist/css/bootstrap.min.css';

function Alert(props, texto) {
    return <MuiAlert elevation={6} 
                     variant="filled" {...props} />;
  }
    
  export default function AlertTexto() {
    
    return (
      <div>
        {/* <Alert severity="success">Sample Success Message</Alert> */}
        <Alert severity="error">El alerta de error</Alert>
      </div>
    );
  }







// function AlertDismissibleExample() {
//     const [show, setShow] = useState(true);
  
//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   }
  
//   render(<AlertDismissibleExample />);