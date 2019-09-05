import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ExpressGraphql from 'express-graphql';

import { DB_CONFIG } from './configs/db';
import Schema from './graphql/graphql';

mongoose.Promise = global.Promise;
mongoose.connect(DB_CONFIG.MONGO_DB_URI, DB_CONFIG.MONGO_DB_OPTION);
mongoose.connection.on('error', err => {
    console.log(err);
})
mongoose.connection.on('open', () => {
    const app = express();
    app.use('*', cors());
    app.use(bodyParser({ limit: '50mb', extended: true }));

    app.use(
        '/graphql',
        ExpressGraphql(async (request, response, graphQLParams) => ({
            schema: Schema,
            rootValue: request.body.variables,//await someFunctionToGetRootValue(request),
            graphiql: true,
        })),
    );
    app.listen(9000, () => {
        console.log('App is running on port 9000')
    })
})