const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("Example Notification", {
                body: "This is more text",
                data: { hello: "world" },
                icon: "logo.png",
                // tag: "Welcome Message" //For windows
            })

            notification.addEventListener("error", e => {
                // console.log(e)
                alert("error")
            })
        }
    })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        interval = setInterval(() => {
            notification = new Notification("Come Back Please", {
                body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`
            })
        }, 100)

    } else {
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})