import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number, effect: { type: String, default: "kenburns" } }



  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    // console.log(this.slideTargets.length);
    this.slideTargets.forEach((element, index) => {
      if (this.indexValue >= this.slideTargets.length)
      {
        this.indexValue = 0;
      }
      if (this.indexValue < 0)
      {
        this.indexValue = this.slideTargets.length - 1;
      }
      element.hidden = index != this.indexValue

      
    })
  }
}