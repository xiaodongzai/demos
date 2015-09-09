require.config({
    baseUrl: "./js",
    paths:{
        'jquery': "jquery",
        'log': 'log'
    },
    shim:{
        'log':{
            deps: ['jquery'],
            exports: 'log'
        }
    }
});

require(['jquery','log'], function ($,log) {
    log.writeLog('测试测试！！！');
});