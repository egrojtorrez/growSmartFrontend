import { forwardRef } from "react";
import { Message, Notification } from "rsuite";

// export default function MessageError({ header = "Error", text = "" }) {
//   return (
//     <Notification>
//       <Message showIcon type="error" header={header}>
//         {text}
//       </Message>
//     </Notification>
//   );
// }

export const MessageError = forwardRef(
  ({ header = "Error", text = "", ...rest }, ref) => {
    return (
      <Notification
        style={{ width: "300px" }}
        type="error"
        header={header}
        ref={ref}
        {...rest}
      >
        {text}
      </Notification>
    );
  }
);

export const MessageSuccess = forwardRef(
  ({ header = "Exito", text = "", ...rest }, ref) => {
    return (
      <Notification
        style={{ width: "300px" }}
        type="success"
        header={header}
        ref={ref}
        {...rest}
      >
        {text}
      </Notification>
    );
  }
);

export const MessageWarning = forwardRef(
  ({ header = "Advertencia", text = "", ...rest }, ref) => {
    return (
      <Notification
        style={{ width: "300px" }}
        type="warning"
        header={header}
        ref={ref}
        {...rest}
      >
        {text}
      </Notification>
    );
  }
);

export const MessageInfo = forwardRef(
  ({ header = "Informacion", text = "", ...rest }, ref) => {
    return (
      <Notification
        style={{ width: "300px" }}
        type="info"
        header={header}
        ref={ref}
        {...rest}
      >
        {text}
      </Notification>
    );
  }
);
