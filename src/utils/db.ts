import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

export async function connectToDB() {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    await connect(
        'mongodb+srv://opap:Mwly3bobkYw33jiF@kino-watcher-thfvq.mongodb.net/kinoResults?retryWrites=true&w=majority',
        options,
        (err) => {
            if(err) return console.error('Failed to connect in db!', err);
            console.info('Connection to db was successfull!')
        })
};