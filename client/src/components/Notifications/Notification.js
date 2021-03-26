import { store } from 'react-notifications-component';

/**
 * @Notification call as Notification('Wonderfull', 'you have crossed the level', 'success')
 * @reference https://www.npmjs.com/package/react-notifications-component
 * @author ishivanshgoel
 * Notification type : success danger info default warning
 */

function Notification(title, message, type) {
    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
}

export default Notification
