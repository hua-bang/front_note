let db, request, version = 1;
request = indexedDB.open("admin", version);
request.onerror = (event) => {
    console.log(event);
}
request.onsuccess = (event) => {
    db = event.target.result;
}

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    if(db.objectStoreNames.contains("users")) {
        db.deleteObjectStore("users");
    }
    db.createObjectStore("users", {keyPath: "username"});
}