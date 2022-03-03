//DB framework

let db;
const request = indexedDB.open("Budget_db", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createdObjectStore("pending", { autoIncreamt:true });
};

request.onsuccess = function(event) {
    db = event.target.result;
    
    // check to confirm app is online 
    if (navigator.online) {
        checkDatabase();
    }
};

request.onerror = function(event){
    
}