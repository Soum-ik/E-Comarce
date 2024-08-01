let api;

if (process.env.NODE_ENV === "production") {
    api = 'something';
} else {
    api = 'http://localhost:3000/';
}

export default { api };