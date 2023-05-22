#!/bin/bash
DOCKERFILE="Dockerfile"
IMAGE_NAME="demo/paragon-web-shop:latest"
docker build . -t $IMAGE_NAME -f $DOCKERFILE
