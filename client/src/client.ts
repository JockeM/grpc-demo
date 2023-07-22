import { GreeterClient } from './protos/greet.client.ts'
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'

const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8080",
});

const greeterClient = new GreeterClient(transport);

export { greeterClient };
