export const elements = elementId => {
    return document.getElementById(elementId);
}

export const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};