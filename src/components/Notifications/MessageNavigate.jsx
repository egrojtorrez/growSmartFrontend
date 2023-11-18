import { Nav, Notification, Placeholder } from "rsuite";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const MessageNavigate = forwardRef(
  (
    {
      type = "info",
      navigate,
      to = "/",
      header = "Nueva Notificacion",
      text = "",
      ...rest
    },
    ref
  ) => {
    return (
      <Notification
        style={{ width: "300px" }}
        ref={ref}
        {...rest}
        type={type}
        header={
          <div style={{ width: "100%" }} onClick={() => navigate(to)}>
            {header}
          </div>
        }
        closable
      >
        <div onClick={() => navigate(to)}>{text}</div>
      </Notification>
    );
  }
);

export default MessageNavigate;
