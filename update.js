console.log('Update Script')
const simpleGit = require('simple-git');
const fs = require('fs');

const git = simpleGit.default();

async function gitPull(){
    await git.pull().then(result=>{
        console.log('GIT-PULL:',result);
    }).catch(error=>{
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
gitStatus();

