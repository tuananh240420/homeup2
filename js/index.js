// Swiper init
(() => {
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
})();

// Reset all checkbox
(() => {
  document.querySelectorAll('.form-checkbox-resetall').forEach((button) => {
    button.onclick = () => {
      const checkboxCotainer = button.closest('.form-checkbox-container');
      checkboxCotainer
        ?.querySelectorAll('.form-checkbox input[type="checkbox"]')
        .forEach((checkbox) => (checkbox.checked = false));
      const selectPickerContainer = button.closest('.location-filter');
      if (selectPickerContainer)
        $('.location-filter .selectpicker').selectpicker('val', '');
    };
  });
  document.querySelectorAll('.form-close').forEach((button) => {
    button.onclick = () => {
      const checkbox = button
        .closest('.filter-dropdown')
        ?.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.checked = false;
    };
  });
  $('#select-tinh-thanh').on(
    'changed.bs.select',
    function (e, clickedIndex, isSelected, previousValue) {
      const selected = $(e.currentTarget).val();
      document.querySelector('.location-filter-value').innerText =
        selected || 'Toàn quốc';
    }
  );
})();
const SELECT_RANGES_PRICE = [
  {
    MIN: 0,
    MAX: 5,
  },
  {
    MIN: 5,
    MAX: 8,
  },
  {
    MIN: 8,
    MAX: 10,
  },
  {
    MIN: 10,
    MAX: 20,
  },
  {
    MIN: 20,
    MAX: 30,
  },
  {
    MIN: 30,
    MAX: 50,
  },
];

const SELECT_RANGES_AREAS = [
  {
    MIN: 0,
    MAX: 30,
  },
  {
    MIN: 30,
    MAX: 50,
  },
  {
    MIN: 50,
    MAX: 80,
  },
  {
    MIN: 80,
    MAX: 100,
  },
  {
    MIN: 100,
    MAX: 150,
  },
  {
    MIN: 30,
    MAX: 50,
  },
];
const MIN = 0; // 0 Trieu
const MAX = 600; // 60 Ty
const MIN_AREA = 0;
const MAX_AREA = 500;
const MIN_PROPERTY = '--value-a';
const MAX_PROPERTY = '--value-b';
// Slice Range
(() => {
  const formatValueToPrice = (value) => {
    if (value < 10)
      if (value == 0) return '0 Triệu';
      else return value + '00 Triệu';
    return Number(value) / 10 + ' Tỷ';
  };

  const formatValueToArea = (value) => {
    if (value == 0) return '0 m²';
    else return value + ' m²';
  };

  const setStyleProperty = (node, property, value) => {
    if (node) node.style.setProperty(property, value);
  };
  const setInnerText = (node, text) => {
    if (node) node.innerText = text;
  };
  const removeActivedClassOfEl = (parentNode, classSelector) => {
    if (parentNode) {
      const activeNode = parentNode.querySelector(`${classSelector}.active`);
      if (activeNode) activeNode.classList.remove('active');
    }
  };

  const priceFilter = document.querySelector('.price-filter');
  if (priceFilter) {
    const priceRangeEl = priceFilter.querySelector('.range-slider-home-price');
    const inputMin = priceFilter.querySelector('.input-min');
    const inputMax = priceFilter.querySelector('.input-max');
    const minDisplayValueEl = priceFilter.querySelector('.from-value');
    const maxDisplayValueEl = priceFilter.querySelector('.to-value');
    const selecteListEl = priceFilter.querySelectorAll('.value-item');
    const applyBtn = priceFilter.querySelector('.form-close');
    const filterValue = priceFilter.querySelector('.price-filter-value');
    const resetBtn = priceFilter.querySelector('.form-checkbox-resetall');
    applyBtn.addEventListener('click', () => {
      filterValue.innerText =
        formatValueToPrice(inputMin.value) +
        ' đến ' +
        formatValueToPrice(inputMax.value);
    });
    resetBtn.addEventListener('click', () => {
      inputMin.value = MIN;
      setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
      setInnerText(minDisplayValueEl, formatValueToPrice(inputMin.value));
      removeActivedClassOfEl(priceFilter, '.value-item');

      inputMax.value = MAX;
      setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
      setInnerText(maxDisplayValueEl, formatValueToPrice(inputMax.value));
      filterValue.innerText = 'Mức giá';
    });
    inputMin.oninput = () => {
      setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
      setInnerText(minDisplayValueEl, formatValueToPrice(inputMin.value));
      removeActivedClassOfEl(priceFilter, '.value-item');
    };
    inputMax.oninput = () => {
      setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
      setInnerText(maxDisplayValueEl, formatValueToPrice(inputMax.value));
      removeActivedClassOfEl(priceFilter, '.value-item');
    };
    selecteListEl.forEach((item, index) => {
      item.onclick = () => {
        removeActivedClassOfEl(priceFilter, '.value-item');
        item.classList.add('active');
        inputMin.value = SELECT_RANGES_PRICE[index].MIN;
        setInnerText(minDisplayValueEl, formatValueToPrice(inputMin.value));
        setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
        inputMax.value = SELECT_RANGES_PRICE[index].MAX;
        setInnerText(maxDisplayValueEl, formatValueToPrice(inputMax.value));
        setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
      };
    });
  }
})();

const setStyleProperty = (node, property, value) => {
  if (node) node.style.setProperty(property, value);
};
const setInnerText = (node, text) => {
  if (node) node.innerText = text;
};
const removeActivedClassOfEl = (parentNode, classSelector) => {
  if (parentNode) {
    const activeNode = parentNode.querySelector(`${classSelector}.active`);
    if (activeNode) activeNode.classList.remove('active');
  }
};
const parentNode = document.querySelector('.area-filter');
const formatFunction = (value) => {
  if (value == 0) return '0 m²';
  else return value + ' m²';
};
const defaultText = 'Diện tích';
const minValue = MIN_AREA;
const maxValue = MAX_AREA;
const selectRangesArr = SELECT_RANGES_AREAS;
const options = {
  parentNode,
  formatFunction,
  defaultText,
  minValue,
  maxValue,
  selectRangesArr,
};
const rangeSlideEvent = (options) => {
  const {
    parentNode,
    formatFunction,
    defaultText,
    minValue,
    maxValue,
    selectRangesArr,
  } = options;
  const priceRangeEl = parentNode.querySelector('.range-slider-home-price');
  const inputMin = parentNode.querySelector('.input-min');
  const inputMax = parentNode.querySelector('.input-max');
  const minDisplayValueEl = parentNode.querySelector('.from-value');
  const maxDisplayValueEl = parentNode.querySelector('.to-value');
  const selecteListEl = parentNode.querySelectorAll('.value-item');
  const applyBtn = parentNode.querySelector('.form-close');
  const filterValue = parentNode.querySelector('.price-filter-value');
  const resetBtn = parentNode.querySelector('.form-checkbox-resetall');
  applyBtn.addEventListener('click', () => {
    filterValue.innerText =
      formatFunction(inputMin.value) + ' đến ' + formatFunction(inputMax.value);
  });
  resetBtn.addEventListener('click', () => {
    inputMin.value = minValue;
    setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
    setInnerText(minDisplayValueEl, formatFunction(inputMin.value));
    removeActivedClassOfEl(parentNode, '.value-item');

    inputMax.value = maxValue;
    setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
    setInnerText(maxDisplayValueEl, formatFunction(inputMax.value));
    filterValue.innerText = defaultText;
  });
  inputMin.oninput = () => {
    setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
    setInnerText(minDisplayValueEl, formatFunction(inputMin.value));
    removeActivedClassOfEl(parentNode, '.value-item');
  };
  inputMax.oninput = () => {
    setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
    setInnerText(maxDisplayValueEl, formatFunction(inputMax.value));
    removeActivedClassOfEl(parentNode, '.value-item');
  };
  selecteListEl.forEach((item, index) => {
    item.onclick = () => {
      removeActivedClassOfEl(parentNode, '.value-item');
      item.classList.add('active');
      inputMin.value = selectRangesArr[index].MIN;
      setInnerText(minDisplayValueEl, formatFunction(inputMin.value));
      setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
      inputMax.value = selectRangesArr[index].MAX;
      setInnerText(maxDisplayValueEl, formatFunction(inputMax.value));
      setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
    };
  });
};

rangeSlideEvent(options);

const filterResetAllbtn = document.querySelector('.filter-reset-btn');
if (filterResetAllbtn) {
  filterResetAllbtn.onclick = () => {
    const parentFilter = filterResetAllbtn.closest('.filter-container');
    parentFilter
      .querySelectorAll('.form-checkbox-resetall')
      .forEach((item) => item.click());
  };
}
