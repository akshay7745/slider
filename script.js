class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideNode = this.querySelector(".splide");

  }

  connectedCallback() {
    this.mountSplider();
  }

  mountSplider() {
    const splide = new Splide(this.splideNode,{
      type: 'loop',
      perPage: 1,
      autoplay: true,
    });
    splide.mount();
  }
}

customElements.define("slider-custom", CustomSlider);

const data = [
  {
    customSlide1: {
      options: {},
      slides: [
        {
          options: {},
          id: 1,
          imageUrl:
            "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
          title: "Women's Apparel",
          description:
            "Elevate your wardrobe with our limited-time fashion offer!",
          buttonLabel: "Explore More",
          layoutAlignment: {
            content: "center",
            button: "center",
            title: "center",
            description: "justify",
          },
        },
        {
          options: {},
          id: 2,
          imageUrl:
            "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
          title: "Trendy Classics",
          description: "Discover Signature Look: Fashion Forward and Fabulous!",
          buttonLabel: "Shop Now",
          layoutAlignment: {
            content: "center-left",
            button: "left",
            title: "left",
            description: "left",
          },
        },
        {
          options: {},
          id: 3,
          imageUrl:
            "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
          title: "Modern Elegance",
          description:
            "Step into the World of Style with the Latest Fashion Trends Unveiled!",
          buttonLabel: "Explore Now",
          layoutAlignment: {
            content: "center-left",
            button: "center",
            title: "center",
            description: "justify",
          },
        },
      ],
    },
  },
];

const slides = data[0].customSlide1.slides.map((slide) => {
  const { imageUrl, title, description, buttonLabel, layoutAlignment } = slide;

  return `<li class="splide__slide">
    <img
      src="${slide.imageUrl}"
      alt="${slide.title}"
    />
    <div data-id="1" class="overlay ${slide.layoutAlignment.content}">
      <div>
        <ul class="title">
          <li>${slide.title}</li>
        </ul>
        <h2 class="description">
          ${slide.description}
        </h2>
        <button class="button">${slide.buttonLabel}</button>
      </div>
    </div>
  </li>`;
}).join("");

document.querySelector(
  "body"
).innerHTML = `<slider-custom>
<section class="splide" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul class="splide__list">${slides}</ul>
  </div>
</section>
<slider-custom/>`;


// If you are getting custom data from the custom element itself then you can get the data in constuctor and if you want that data in slides then use it in the connected callback