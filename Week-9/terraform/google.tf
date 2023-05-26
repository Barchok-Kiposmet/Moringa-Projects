provider "google" {
  project = var.project_id
  region  = "europe-west1"
  zone    = "europe-west1-b"
}

resource "google_compute_instance" "default" {
  name         = "ansible-server"
  machine_type = "e2-medium"


  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
      labels = {
        my_label = "value"
      }
    }
  }


  network_interface {
    network = "default"

    access_config {
      // Ephemeral public IP
    }
  }

}