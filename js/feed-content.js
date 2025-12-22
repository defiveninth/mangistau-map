const places = [
	{
		id: "bozhyra",
		name: "Bozhyra (Boszhira)",
		image: "/public/bozhyra.png",
		url: "https://maps.app.goo.gl/vK8ayGY1HAe3dr7x8"
	},
	{
		id: "tuzbair",
		name: "Tuzbair Salt Flat",
		image: "/public/tuzbair.png",
		url: "https://maps.app.goo.gl/gEnghG44DjZy5VLV6"
	},
	{
		id: "airakty-zhygylan",
		name: "Airakty Zhygylan",
		image: "/public/airaqty.png",
		url: "https://maps.app.goo.gl/HFBT2jpUkMqz45Fg7"
	},
	{
		id: "karakiya",
		name: "Karakiya Depression",
		image: "/public/kakakia.png",
		url: "https://maps.app.goo.gl/755FmBsDUGXpvta88" // fix
	},
	{
		id: "sherkala",
		name: "Sherkala Mountain",
		image: "/public/sherkala.png",
		url: "https://maps.app.goo.gl/aFaa1xhpM76TA6V28"
	},
	{
		id: "otpan-tau",
		name: "Otpan Tau",
		image: "/public/otpan-tau.png",
		url: "https://maps.app.goo.gl/p3hM9VnxQPNgRJvz6"
	},
	{
		id: "karamsay",
		name: "Karamsay Canyon",
		image: "/public/karamsay.png",
		url: "https://maps.app.goo.gl/8r11Qmsqe3CoB7wV8"
	},
	{
		id: "torysh",
		name: "Torysh – Valley of Balls",
		image: "/public/torysh.png",
		url: "https://maps.app.goo.gl/V64ZhgEakmYtRBe69"
	}
]

const feed = document.getElementById("feed")

places.forEach((place) => {
	const slide = document.createElement("section")
	slide.className = "slide"
	slide.style.backgroundImage = `url(${place.image})`

	slide.innerHTML = `
      <div class="overlay">
        <div class="title">${place.name}</div>
        <a class="explore-btn" href="${place.url}" target="_blank">
  			Перейти
		</a>
      </div>
    `

	feed.appendChild(slide)
})
