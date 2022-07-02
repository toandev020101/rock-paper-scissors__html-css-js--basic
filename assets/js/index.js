const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const appElement = $('.app')

const app = {
	handleEvents: function () {
		const _this = this
		const actionElement = $('.action')

		// xử lý chọn action
		actionElement.onclick = function (e) {
			const btn = e.target
			if (btn.classList.contains('action__item')) {
				// xóa các action
				actionElement.remove()

				// tạo result
				const resultElement = document.createElement('div')
				resultElement.classList.add('result')
				btn.classList.add('user-active')
				resultElement.insertAdjacentElement('beforeend', btn)

				const textElement = document.createElement('span')
				textElement.classList.add('result__text')

				// so sánh đáp án
				const chooseRandom = Math.floor(Math.random() * 2)

				if (parseInt(btn.dataset.index) === chooseRandom) {
					textElement.textContent = 'Hòa rồi !'
					textElement.classList.add('result__text--info')
				} else if (
					(parseInt(btn.dataset.index) === 0 && chooseRandom === 2) ||
					(parseInt(btn.dataset.index) === 1 && chooseRandom === 0) ||
					(parseInt(btn.dataset.index) === 2 && chooseRandom === 1)
				) {
					textElement.textContent = 'Bạn thắng !'
					textElement.classList.add('result__text--success')
				} else {
					textElement.textContent = 'Bạn thua !'
					textElement.classList.add('result__text--danger')
				}

				resultElement.insertAdjacentElement('beforeend', textElement)

				let resultAction
				if (chooseRandom === 0) {
					resultAction = 'keo'
				} else if (chooseRandom === 1) {
					resultAction = 'bua'
				} else {
					resultAction = 'bao'
				}

				resultElement.insertAdjacentHTML(
					'beforeend',
					`<img src="./assets/images/${resultAction}.png" alt="keo" data-index=${chooseRandom} class="action__item random-active" />`,
				)

				// thêm result vào app
				appElement.insertAdjacentElement('beforeend', resultElement)

				// thêm nút ván mới
				appElement.insertAdjacentHTML(
					'beforeend',
					`<button class='btn-reset'>Ván mới</button>`,
				)
			}
		}

		// xử lý ván mới
		appElement.onclick = function (e) {
			const btn = e.target
			if (btn.classList.contains('btn-reset')) {
				$('.result').remove()
				$('.btn-reset').remove()
				_this.start()
			}
		}
	},

	render: function () {
		appElement.insertAdjacentHTML(
			'beforeend',
			`<div class="action">
        <img src="./assets/images/keo.png" alt="keo" data-index=0 class="action__item" />
        <img src="./assets/images/bua.png" alt="bua" data-index=1 class="action__item" />
        <img src="./assets/images/bao.png" alt="bao" data-index=2 class="action__item" />
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
