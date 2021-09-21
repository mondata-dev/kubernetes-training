terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = ">= 2.13.0"
    }
  }
}

provider "docker" {
  # uncomment the following for Windows!
  # host    = "npipe:////.//pipe//docker_engine"
}

resource "docker_image" "nginx" {
  name         = "mondata/kubernetes-training:1.0.0"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "kubernetes-training"
  ports {
    internal = 8080
    external = 8081
  }
}
