import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "supported" ]
  static targets = [ "source" ]

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }
}