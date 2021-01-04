// eslint-disable-next-line prettier/prettier
; (function () {

  class NotesCard extends HTMLElement {
    constructor() {
      super()

      const headline = this.getAttribute('headline')
      const img = this.getAttribute('img')
      const text = this.getAttribute('text')

      this.attachShadow({ mode: 'open' })

      const template = document.createElement('template')
      template.innerHTML = `
      <style>
        @import url(assets/css/app.css);
      </style>

      <div class="ds-card-big fill-height link-arrow">
        <!-- Thumbnail -->
        <div
          style="background-image: url('${img}')"
          class="ds-card-big--thumbnail">

          <!-- Badge -->
          <div class="ds-badge">
            NEW&nbsp;EPISODE
          </div>

          <div class="ds-play">
            <img
              src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg"
              loading="lazy" alt="" class="listen-now-icon-1">

            <div class="ds-listen">Listen Now</div>
          </div>
        </div> <!-- .ds-card-big--thumbnail -->

        <!-- Conent -->
        <div class="ds-card-big--content">
          <h2 class="text-20 lh-28">${headline}</h2>

          <p>${text}</p>

          <div class="primary-color d-block mt-3 text-16 font-weight-600 ls-04">
            Show Notes <div class="arrow-right"></div>
          </div>
        </div> <!-- .ds-card-big--content -->
      </div> <!-- .ds-card-big -->
    `
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    // attributeChangedCallback(name, oldValue, newValue) {
    //   this.displayVal.innerText = this.value
    // }
  }

  window.customElements.define('notes-card', NotesCard)
})()
