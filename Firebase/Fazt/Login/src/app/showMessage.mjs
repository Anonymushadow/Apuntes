export const showMessage = (msg, type) => {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: type === "success" ? "green" : "red"
        },
        onClick: () => { }
    }).showToast();
}