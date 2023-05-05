export const useLinkToPage = (title: string, url: string) => {
    const buttonDiv = document.querySelector(`.${title}`);
    buttonDiv?.addEventListener('click', () => window.open(url));
};
