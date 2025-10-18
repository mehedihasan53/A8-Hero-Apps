const getInstalledApp = () => {
    const installedApp = localStorage.getItem("installedApp");
    return installedApp ? JSON.parse(installedApp) : [];
};

const addToInstall = (app) => {
    const installedAppArray = getInstalledApp();
    const alreadyInstalled = installedAppArray.some((a) => a.id === app.id);

    if (alreadyInstalled) return false;

    installedAppArray.push(app);
    localStorage.setItem("installedApp", JSON.stringify(installedAppArray));
    return true;
};

const removeFromInstall = (id) => {
    const installedAppArray = getInstalledApp().filter((app) => app.id !== id);
    localStorage.setItem("installedApp", JSON.stringify(installedAppArray));
};

export { addToInstall, getInstalledApp, removeFromInstall };
