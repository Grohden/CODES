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
    
    if(gulpArguments.includes.apply(gulpArguments, devTasks) && !forceProd){
        console.log('==== Dev ===');
        return 'dev';
    }
    
    console.log('==== Prod ===');
    return 'prod';
})(process.argv);
