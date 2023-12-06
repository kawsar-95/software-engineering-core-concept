const myPromise = new Promise(function (resolve, reject) {
    let sum = 0;
    for (let i = 0; i < 100000000000; i++) {
        sum += i;
    }
    resolve(sum);
});

myPromise
    .then((res) => {
        console.log("result:", res);
    })
    .catch((e) => {
        console.log("error:", e);
    });

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("Hello world!");
});
