var subscribers = [];

function save() {
    let json = JSON.stringify(subscribers);
    window.localStorage.setItem("dbSubscribers", json);
}

function retrieve() {
    let json = window.localStorage.getItem("dbSubscribers");
    subscribers = JSON.parse(json) || [];
}