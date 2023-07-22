// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "greet.proto" (package "greet", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Greeter } from "./greet";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HelloReply } from "./greet";
import type { HelloRequest } from "./greet";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The greeting service definition.
 *
 * @generated from protobuf service greet.Greeter
 */
export interface IGreeterClient {
    /**
     * Sends a greeting
     *
     * @generated from protobuf rpc: SayHello(greet.HelloRequest) returns (greet.HelloReply);
     */
    sayHello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply>;
}
/**
 * The greeting service definition.
 *
 * @generated from protobuf service greet.Greeter
 */
export class GreeterClient implements IGreeterClient, ServiceInfo {
    typeName = Greeter.typeName;
    methods = Greeter.methods;
    options = Greeter.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Sends a greeting
     *
     * @generated from protobuf rpc: SayHello(greet.HelloRequest) returns (greet.HelloReply);
     */
    sayHello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HelloRequest, HelloReply>("unary", this._transport, method, opt, input);
    }
}