const deviceReady = () => {
    window.addEventListener("batterystatus", onBatteryStatus, false);
    window.addEventListener("sendOfflinePage ", checkConnection, false);
    window.addEventListener("online", checkConnection, true);
};
