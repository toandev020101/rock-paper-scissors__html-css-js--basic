const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const appElement = $('.app')

const app = {
	handleEvents: function () {},

	render: function () {
		appElement.insertAdjacentHTML(
			'beforeend',
			`<div class="action">
        <img src="./assets/images/keo.png" alt="keo" class="action__item" />
        <img src="./assets/images/bua.png" alt="bua" class="action__item" />
        <img src="./assets/images/bao.png" alt="bao" class="action__item" />
      </div>`,
		)
	},

	start: function () {
		// Render action
		this.render()

		// Lắng nghe / xử lý các sự kiện (DOM Events)
		this.handleEvents()
	},
}

app.start()
