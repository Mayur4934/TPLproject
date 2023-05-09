import * as Mongoose from 'mongoose';

class MongoDbConnection {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;


  static connect(): Mongoose.Connection {
    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once('open', () => {
      console.log('Connected to mongodb.');
    });
    let isLogMongoose = config.get('application.loggerType') === 'DEBUG';
    Mongoose.set('debug',isLogMongoose);
    console.log('connecting to mongo...');
    this.mongooseInstance = Mongoose.connect('mongodb://' + host + '/' + name+'',{useNewUrlParser:true, useUnifiedTopology:true
      , useFindAndModify: false },(err)=> {
      if (err) {
        console.log('connection to mongo failed');
        console.log(err);
      }
    });
    return this.mongooseInstance;
  }
}
MongoDbConnection.connect();
export = MongoDbConnection;
