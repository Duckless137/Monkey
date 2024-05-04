const monkeys = [
  {
    img: "assets/images/monkey_low.jpg",
    title: "Low quality monkey",
    desc: "Good for downloading photos fast. Use if you want to download in bulk or if you lack time. A bit pixelated, but I don't think your friend will be focused on the actual photos anyway.",
  },
  {
    img: "assets/images/monkey_med.png",
    title: "Medium quality monkey",
    desc: "A middle ground. A happy medium. Faster download than High quality, but larger file size than low quality. A solid go-to option if you're indecisive.",
  },
  {
    img: "assets/images/monkey_high.png",
    title: "High quality monkey",
    desc: "You want to slow down your friend's computer? Just download a few of these bad boys and next thing you know those fans will be in high gear. These larger-than-life monkeys are more than solid pranks, but be warned they can be friendship enders.",
  },
];

async function downloadElMono(fileName) {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", fileName);
  anchor.setAttribute("download", "mono.jpg");
  document.body.appendChild(anchor);
  anchor.click();
  anchor.parentNode.removeChild(anchor);
}

const quantity = 10;
class MonkeyButton {
  constructor(fileData) {
    const button = document.createElement("button");
    button.addEventListener("click", (e) => {
      hehe(fileData.img);
    });
    button.className = "monkey-button hidden";

    const image = document.createElement("div");
    image.style.backgroundImage = `url(${fileData.img})`;
    image.className = "monkey-image";

    const title = document.createElement("h2");
    title.innerHTML = fileData.title;
    title.className = "monkey-title";

    const info = document.createElement("div");
    info.className = "info-wrapper";

    const desc = document.createElement("p");
    desc.innerHTML = fileData.desc;
    desc.className = "monkey-ad";

    info.appendChild(image);
    info.appendChild(desc);
    button.appendChild(title);

    button.appendChild(info);

    document.querySelector(".button-container").appendChild(button);
  }
}

for (const file of monkeys) {
  new MonkeyButton(file);
}

function hehe(fileName) {
  const input = document.querySelector(".input");
  if (input.value.length > Number(input.maxlength)) {
    input.value = "9".repeat(input.maxlength);
  }
  const quantity = input.value;

  for (let i = 0; i < quantity; i++) {
    downloadElMono(fileName);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else if (entry.boundingClientRect.y > 0) {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function margin(element) {
  const screenHeight = window.innerHeight / 2;
  const ratio = Math.abs(element.offsetTop - screenHeight) / screenHeight;
  console.log(ratio);
}

async function animateButtons() {
  const buttons = document.querySelectorAll(".monkey-button");
  buttons.forEach((el) => {
		setInterval(function() {
      document.body.scrollTop = 0;
			const screenHeight = window.innerHeight / 2;
    	const rect = el.getBoundingClientRect();
    	const top = rect.top + rect.height / 2;
    	const ratio = (top - screenHeight) / screenHeight;
    	let shadow = (2 - Math.abs(ratio) * 5) * 10;
			if (shadow < 0) {
				shadow = 0;
			}
			el.animate(
				{
					boxShadow: `0 0 ${shadow}px ${shadow}px rgba(100,100,100,0.5)`
				},
				{
					duration: 200,
					fill: "forwards",
				}
			);
		},10)
  });
};
animateButtons();

const blob = document.querySelector('.blob');

window.onpointermove = event => {
	const { pageX, pageY } = event;

	blob.animate(
		{
			left: `${pageX}px`,
			top: `${pageY}px`
		},
	{
		duration: 3000,
		fill: "forwards",
	})

}

document.querySelector('.dramatic').animate({
  translate: '0 0px'
},
{
  duration: 5000,
  easing: 'cubic-bezier(.06,.76,.18,.97)',
  fill: 'forwards'
})