console.log('Update Script')
const simpleGit = require('simple-git');
const CronJob = require('cron').CronJob;

//run every One Minute
const job = new CronJob('*/1 * * * *',()=>{
    console.log('Cron_running');
    gitStatus();
},null,true,'Asia/Kuala_Lumpur');

const git = simpleGit.default();

async function gitPull(){
    await git.pull().then(result=>{
        console.log('GIT-PULL:',result);
    }).catch(error=>{
        console.log('GIT-PULL-ERROR')
        console.error(error);
    })
}

async function gitStatus(){
    await git.status().then((result)=>{
        console.log('GIT-STATUS:',result);
        if(result.behind > 0){
            //git pull
            gitPull();
        }
    }).catch(error=>{
        console.error(error);
    })
}
