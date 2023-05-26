variable "docker_images" {
  type        = list(string)
  description = "This are the images in my environment"
  default = [
    "pkiposmet/yolo-client-server:1.1.0",
    "pkiposmet/yolo-backend-server:1.0.0",
  ]
}

# variable "instances" {
#   type = list(string)
#   default = [
#     "ansible-server",
#     "ansible-client-one",
#     "ansible-client-two",
#   ]
# }


variable "project_id" {
  type    = string
  default = "moringa-387909"
}