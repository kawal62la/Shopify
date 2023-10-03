const  mongoose =  require("mongoose");

let database={
    name: 'streamLinePrint',
    debug: false
}

mongoose.set('debug', database.debug); // for ananlysing the query.
mongoose.set('strictQuery',false);

let options = {
    useNewUrlParser: true,
    useUnifiedTopology:true
};


module.exports = DB=()=> {
    console.log("in connect")
    // mongoose runs only on 27017 port
    mongoose.connect('mongodb://127.0.0.1:27017/streamLinePrint').then(()=> {
        console.log("Connected to DB")
    }).catch((err)=> {
        console.log(err)
    })

}