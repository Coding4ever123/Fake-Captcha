let codeToCopy = "Lol"
document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.querySelector("dialog")
    window.addEventListener("message", (e) => {
        if (e.data !== "trigger") return 
        console.log("Copying")
        navigator.clipboard.writeText(codeToCopy)
        dialog.showModal()
    })
    document.querySelector(".closemodal").addEventListener("click", function () {
        dialog.close()
    })
})
