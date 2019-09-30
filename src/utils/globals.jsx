export function isMobileDevice() {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
};