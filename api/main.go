package main

import (
	"context"
	"log"
	"net"

	api "github.com/aretheregods/freefooddb/grpcs"
	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

type server struct{}

func (s *server) SayFFDB(ctx context.Context, in *api.FFDBRequest) (*api.FFDBResponse, error) {
	return &api.FFDBResponse{Message: "Hello, " + in.Name}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failure to listen %v", err)
	}
	s := grpc.NewServer()
	api.RegisterFFDBAPIServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failure to serve %v", err)
	}
}
