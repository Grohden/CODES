process.env.ENV = (function(gulpArguments){
    //Define here the dev tasks
     let devTasks = [
        /watch/,
        /serve/,
        /run/,
    
        //Arg to force dev
        /--dev/
    ];
    
    //Arg to force prod (also override the --dev arg)
    let forceProd = gulpArguments.includes('--prod');
    let contains = gulpArguments.some(function(arg){
        return devTasks.some(rx => rx.test(arg));
    });
    
   if(contains && !forceProd){
        console.log('==== Executing tasks in Dev mode ===');
        return 'dev';
    }
    
    console.log('==== Executing tasks in Prod mode ===');
    return 'prod';
})(process.argv);
