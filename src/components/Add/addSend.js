axios({
    url: `localhost:/server/company/${company}/client/company`,
    method: 'post',
    data: {
        money : random
    },
/*     header : { "access-token": ''}, */
}).then(response => {
    func();
}).catch(response => {
    alert("잔액부족");
    console.log(response);
});