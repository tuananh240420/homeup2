new Swiper('.duanmoi-swiper', {
  navigation: {
    nextEl: '.duanmoi-swiper-next',
    prevEl: '.duanmoi-swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

new Swiper('.danhmuc-swiper', {
  slidesPerView: 6,
  spaceBetween: 32,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  },
});
new Swiper('.bao-tri-swiper', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

new Swiper('.batdongsannoibat-swiper', {
  navigation: {
    nextEl: '.batdongsannoibat-swiper-next',
    prevEl: '.batdongsannoibat-swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
new Swiper('.danhgiatot-swiper', {
  navigation: {
    nextEl: '.danhgiatot-swiper-next',
    prevEl: '.danhgiatot-swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

const LIST_ITEM = ['Thị trường', 'Đô thị', 'Doanh nghiệp', 'Xây dựng'];
new Swiper('.home-pta1-swiper', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  pagination: {
    el: '.home-pta1-pagination',
    dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' cs-p-item' +
        '">' +
        LIST_ITEM[index] +
        '</span>'
      );
    },
  },
});
