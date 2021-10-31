const deviceReady = () => {
    window.addEventListener("batterystatus", onBatteryStatus, false);
    window.addEventListener("offline", checkConnection, false);
    window.addEventListener("online", checkConnection, true);
};
