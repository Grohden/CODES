process.env.ENV = (function(gulpArguments){
    //Define here the dev tasks
    let devTasks = [
        'serve',
        'watch',
        
        //Arg to force dev
        '--dev'
    ];
    
    //Arg to force prod (also override the --dev arg)
    let forceProd = gulpArguments.includes('--prod');
    let contains = gulpArguments.every(function(arg){
        return devTasks.includes(arg)
    });
    
    if(contains && !forceProd){
        console.log('==== Dev ===');
        return 'dev';
    }
    
    console.log('==== Prod ===');
    return 'prod';
})(process.argv);
