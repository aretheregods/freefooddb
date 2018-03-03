const grpc = require("grpc");
const message = require("./grpcs/app_pb");
const services = require("./grpcs/app_grpc_pb");

const Koa = require("koa");
const app = new Koa();

const environment = process.argv[2] || 'ffdbapi';
const PORT = process.env.PORT || 8080;

function Main() {
    let client = new services.FFDBAPIClient(environment + ':50051',
                                           grpc.credentials.createInsecure());
    let request = new message.FFDBRequest();
    let user;
    if(process.argv.length >= 4) {
        user = process.argv[3];
    } else {
        user = 'FFDB';
    }
    request.setName(user);
    client.sayFFDB(request, (err, response) => {
        app.use(ctx => {
            ctx.body = response.getMessage();
        })
        // console.log("Greeting: " + response.getMessage());
    })
}

Main();
app.listen(PORT, () => console.log("Listening on port " + PORT));
