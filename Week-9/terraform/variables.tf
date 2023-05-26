variable "docker_images" {
  type        = list(string)
  description = "This are the images in my environment"
  default = [
    "pkiposmet/yolo-client-server:1.1.0",
    "pkiposmet/yolo-backend-server:1.0.0",
  ]
}