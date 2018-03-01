// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpcs_app_pb = require('../grpcs/app_pb.js');

function serialize_api_FFDBRequest(arg) {
  if (!(arg instanceof grpcs_app_pb.FFDBRequest)) {
    throw new Error('Expected argument of type api.FFDBRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_api_FFDBRequest(buffer_arg) {
  return grpcs_app_pb.FFDBRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_FFDBResponse(arg) {
  if (!(arg instanceof grpcs_app_pb.FFDBResponse)) {
    throw new Error('Expected argument of type api.FFDBResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_api_FFDBResponse(buffer_arg) {
  return grpcs_app_pb.FFDBResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FFDBAPIService = exports.FFDBAPIService = {
  sayFFDB: {
    path: '/api.FFDBAPI/SayFFDB',
    requestStream: false,
    responseStream: false,
    requestType: grpcs_app_pb.FFDBRequest,
    responseType: grpcs_app_pb.FFDBResponse,
    requestSerialize: serialize_api_FFDBRequest,
    requestDeserialize: deserialize_api_FFDBRequest,
    responseSerialize: serialize_api_FFDBResponse,
    responseDeserialize: deserialize_api_FFDBResponse,
  },
};

exports.FFDBAPIClient = grpc.makeGenericClientConstructor(FFDBAPIService);
