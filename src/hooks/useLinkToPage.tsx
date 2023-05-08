export const useLinkToPage = (title: string, url: string) => {
    const buttonDiv = document.getElementById(`${title}`);
    buttonDiv?.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(url);
    });
};
