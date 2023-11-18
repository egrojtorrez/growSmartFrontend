import { useNavigate } from "react-router-dom";
import { useToaster } from "rsuite";
import MessageNavigate from "@components/Notifications/MessageNavigate";

export const useToast = () => {
  const navigate = useNavigate();
  const toaster = useToaster();

  const notify = (notificacion, time = 3000) => {
    toaster.push(notificacion, {
      duration: time,
      placement: "TopEnd",
    });
  };

  const notifyNavigate = ({ header, type, text, to }) => {
    toaster.push(
      <MessageNavigate
        navigate={navigate}
        to={to}
        header={header}
        type={type}
        text={text}
      />,
      {
        duration: 5000,
        placement: "topEnd",
      }
    );
  };

  return { notify, notifyNavigate, toaster };
};
