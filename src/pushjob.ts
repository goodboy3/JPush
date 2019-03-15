import schedule from 'node-schedule';
const JPush = require('jpush-async/lib/JPush/JPushAsync.js');

let client = JPush.buildClient('ca477a9e0b301bf2084ab8aa', 'f98af3bcf8199237cbc3d041');

console.log("开启定时推送任务");
let pushjob = schedule.scheduleJob("0 0 9 * * 2,4,6", () =>
{
    Push();
})


function Push()
{
    //开始推送
    console.log("开始推送");
    client.push().setPlatform(JPush.ALL)
        .setAudience(JPush.ALL)
        .setNotification("你妈喊你回家读免费小说啦~~~")
        .send()
        .then(function (result: any)
        {
            console.log("推送成功");
            console.log(result)
        }).catch(function (err: any)
        {
            console.log("推送错误");
            console.log(err)
        });
}
