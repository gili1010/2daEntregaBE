export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://lgili:Riquelme10@cluster0.9ncbzn8.mongodb.net/?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {

    },
    MODO_PERSISTENCIA: 'json'
}
