import React from 'react';
import { Alert, Button } from "@material-tailwind/react";

function AlertMessage({message, open, setOpen}) {
    console.log(message)
    // const [open, setOpen] = React.useState(true);
    const close = () => {
        open && (setTimeout(() => {
            setOpen(false)
        },8000))
    }
    close()

    return (
        <div>
          
        <Alert
         open={open}
         onClose={() => setOpen(false)}
         animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
         color="green">{message}</Alert>
        </div>
    );
}

export default AlertMessage;