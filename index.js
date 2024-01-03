const express = require("express")
const app = express();

var users = [{
    name: 'COlin',
    kidneys: [{
        healthy: false
    }]
}]
app.get("/", function (req, res) {
    const MyKidney = users[0].kidneys;
    const noOfKidneys = MyKidney.length;
    let healthyKidneys = 0;
    MyKidney.filter((val) => {
        if (val.healthy) {
            healthyKidneys++;
        }
    })
    const UnHealthyKidney = noOfKidneys - healthyKidneys;
    res.json({
        "NoofKideys": noOfKidneys,
        "healthyKidneys": healthyKidneys,
        "unHealthyKidney": UnHealthyKidney,
    })
})
app.use(express.json());
app.post("/", function (req, res) {
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        "healthy": isHealthy
    })
    res.json({
        msg: 'Done!'
    })
})
app.delete("/", (req, res) => {
    const newKidney = [];
    users[0].kidneys.filter((val) => {
        if (val.healthy) {
            newKidney.push({
                healthy: true
            })
        }
    })
    users[0].kidneys = newKidney;
})
app.listen(3000);