import React, { useEffect } from "react";
import { messaging, getToken } from "./firebase-config";

const FCMPage: React.FC = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const status = await Notification.requestPermission();
        if (status === "granted") {
          console.log("Notification permission granted.");

          const token = await getToken(messaging, {
            vapidKey:
              "BFrLwP67NSdN2HmC0gteZnao91fqrIbeCcqZ_3AW6m2oUE5Md2It2WK5LSel0FqAblLaJUNgJQkVwxLSBHOnrLo",
          });
          console.log("FCM Token:", token);
        } else {
          console.error("Notification permission denied.");
        }
      } catch (error) {
        console.error("Error getting FCM token:", error);
      }
    };

    requestPermission();
  }, []);

  return <div className="">Hello, world!</div>;
};

export default FCMPage;
