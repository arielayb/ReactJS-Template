const express = require('express');
const app = express();
const SyncHook = require('tapable').SyncHook;
const elasticsearch = require('elasticsearch');

class MiddleWarePlugin {
    constructor(options) {
        this.options = options;
        this.hooks = {
			getData: new SyncHook()
        };
    }

    fetchData() {
        this.hooks.getData.call();
    }

    apply(compiler){
    
        // const middleWarePlugin = new MiddleWarePlugin();
        //
        // middleWarePlugin.fetchData();

        compiler.hooks.emit.tap("MiddleWarePlugin",  () => {
            var client = new elasticsearch.Client({
              host: 'localhost:9200',
              log: 'trace'
            });

            client.ping({
                requestTimeout: 30000,
            }, function (error) {
                if (error) {
                  console.error('elasticsearch cluster is down!');
                } else {
                  console.log('All is well');
                }
            });
        });

    }
}

module.exports = MiddleWarePlugin;
