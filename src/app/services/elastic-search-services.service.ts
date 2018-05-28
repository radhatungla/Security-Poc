import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';
//declare var elasticSearchUrl: any;
@Injectable()
export class ElasticSearchServicesService {

    //public constants = elasticSearchUrl;


    private searchType: String = '';
    private _client: Client;
    constructor() {
        if (!this._client) {
            this._connect();
        }
    };

    private _connect() {
        // create client
        this._client = new Client({
            host: 'http://awsnlsec001.amwaternp.net:19200/_search?q=',
            log: 'trace',
            defer: defer

        });

        // this function is to overwrite elastic search's default defer implementation
        function defer() {
            let resolve, reject, promise;

            promise = new Promise((_resolve, _reject) => {
                resolve = _resolve;
                reject = _reject;
            });

            return { resolve, reject, promise };
        }
    };

    isAvailable(): PromiseLike<String> {
        return this._client.ping({
            requestTimeout: 1000
        });
    }

    
    autoSearch(searchText): PromiseLike<any> {
        return this._client.search({
            size: 0,
            body:
            {
                "size": 0,
                "query":
                {
                    "query_string":
                    {
                        "default_field": "autoSuggestionName",
                        "query": "*" + searchText + "*",
                        "default_operator": "AND"
                    }
                },
                "aggs":
                {
                    "pacTitle":
                    {
                        "terms":
                        {
                            "field": "autoSuggestionName.keyword",
                            "size": 5
                        }
                    }
                }
                , "_source": ["autoSuggestionName"]
            }

        })
    }

}
