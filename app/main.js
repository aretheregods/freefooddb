const message = require("./grpcs/app_pb");
const services = require("./grpcs/app_grpc_pb");

const grpc = require("grpc");

function Main() {
    let client = new services.FFDBAPIClient('localhost:50051',
                                           grpc.credentials.createInsecure);
    let request = new message.FFDBRequest();
    let user;
    if(process.argv.length >= 3) {
        user = process.argv[2];
    } else {
        user = 'FFDB';
    }
    request.setName(user);
    client.sayFFDB(request, (err, response) {
        console.log("Greeting: " + response.getMessage());
    })
}

main();
