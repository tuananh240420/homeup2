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
        slidesPerGroup: 4,
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
        slidesPerGroup: 4,
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
        slidesPerGroup: 4,
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
        slidesPerGroup: 4,
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
        slidesPerGroup: 4,
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
        selected ||
        document.querySelector('.location-filter-value').dataset.default ||
        'Toàn quốc';
    }
  );
  $('#select-tinh-thanh').on(
    'changed.bs.select',
    function (e, clickedIndex, isSelected, previousValue) {
      console.log(e.currentTarget);
      const selected = $(e.currentTarget).val();
      document.querySelectorAll('.location-filter-value').forEach((item) => {
        item.innerText =
          selected ||
          document.querySelector('.location-filter-value').dataset.default ||
          'Toàn quốc';
      });
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
    const switchBtn = parentNode.querySelector('.switch');
    applyBtn.addEventListener('click', () => {
      filterValue.innerText =
        formatFunction(inputMin.value) +
        ' đến ' +
        formatFunction(inputMax.value);
    });
    resetBtn.addEventListener('click', () => {
      inputMin.value = minValue;
      setStyleProperty(priceRangeEl, MIN_PROPERTY, inputMin.value);
      setInnerText(minDisplayValueEl, formatFunction(inputMin.value));
      removeActivedClassOfEl(parentNode, '.value-item');
      inputMax.value = maxValue;
      setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
      setInnerText(maxDisplayValueEl, formatFunction(inputMax.value));
      filterValue.innerText = filterValue.dataset.default || defaultText;
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
        filterValue.innerText =
          formatFunction(inputMin.value) +
          ' đến ' +
          formatFunction(inputMax.value);
        switchBtn.checked = false;
      };
    });
  };

  const areaOptions = {
    parentNode: document.querySelector('.area-filter'),
    formatFunction: (value) => {
      if (value == 0) return '0 m²';
      else return value + ' m²';
    },
    defaultText: 'Diện tích',
    minValue: MIN_AREA,
    maxValue: MAX_AREA,
    selectRangesArr: SELECT_RANGES_AREAS,
  };
  const priceOptions = {
    parentNode: document.querySelector('.price-filter'),
    formatFunction: (value) => {
      if (value < 10)
        if (value == 0) return '0 Triệu';
        else return value + '00 Triệu';
      return Number(value) / 10 + ' Tỷ';
    },
    defaultText: 'Mức giá',
    minValue: MIN,
    maxValue: MAX,
    selectRangesArr: SELECT_RANGES_PRICE,
  };
  rangeSlideEvent(areaOptions);
  rangeSlideEvent(priceOptions);

  const filterResetAllbtn = document.querySelectorAll('.filter-reset-btn');
  if (filterResetAllbtn) {
    filterResetAllbtn.forEach(
      (item) =>
        (item.onclick = () => {
          const parentFilter = item.closest('.filter-container');
          console.log(parentFilter);
          parentFilter
            .querySelectorAll('.form-checkbox-resetall')
            .forEach((item) => item.click());
        })
    );
  }

  const checkboxList = document.querySelectorAll('.filter-container .switch');
  checkboxList.forEach((item) => {
    item.onchange = () => {
      // console.log(item);
      checkboxList.forEach((itemz) => {
        if (itemz !== item) {
          // itemz.checked = false;
          const applyBtn = itemz.parentNode.querySelector('.form-close');
          if (itemz.checked === true) {
            applyBtn.click();
          }
        }
      });
    };
  });

  window.addEventListener('click', (e) => {
    // console.log(e.target);

    if (!e.target.closest('.filter-container')) {
      document
        .querySelectorAll('.filter-container .switch')
        .forEach((item) => (item.checked = false));
    }
    if (!e.target.closest('.main-search-container > .dropdown-main')) {
      document.querySelector(
        '.main-search-container > .dropdown-main > input[type="checkbox"]'
      ).checked = false;
    }
  });
})();

// Resposive

(() => {
  const width = screen.width;
  // is mobile
  if (width < 576) {
    document
      .querySelectorAll('.price-filter.filter-dropdown .price-filter-value')
      .forEach((item) => {
        item.innerText = 'Tất cả';
        item.dataset.default = 'Tất cả';
      });
  }
})();

document.querySelectorAll('.sub-checkbox').forEach((sub) => {
  sub.onchange = () => {
    const parent = sub.parentNode.querySelector(
      '.form-checkbox[data-subcount]'
    );
    const length = sub.parentNode.querySelectorAll('.sub-checkbox').length;
    const subInput = sub.querySelector('input[type="checkbox"');
    const parentInput = parent.querySelector('input[type="checkbox"');
    if (subInput.checked) {
      parent.dataset.subcount = Number(parent.dataset.subcount) + 1;
      if (Number(parent.dataset.subcount) === length)
        parentInput.checked = true;
    } else {
      parent.dataset.subcount = Number(parent.dataset.subcount) - 1;
      parentInput.checked = false;
    }
  };
});

document.querySelectorAll('.form-checkbox[data-subcount]').forEach((parent) => {
  parent.onchange = () => {
    const parentInput = parent.querySelector('input[type="checkbox"');
    const subList = parent.parentNode.querySelectorAll(
      '.sub-checkbox input[type="checkbox"'
    );
    if (parentInput.checked) {
      subList.forEach((item) => (item.checked = true));
      parent.dataset.subcount = subList.length;
    } else {
      subList.forEach((item) => (item.checked = false));
      parent.dataset.subcount = 0;
    }
  };
});

window.addEventListener('click', (e) => {
  const itemMenu = document.getElementById('profile-submenu')?.parentNode;
  if (e.target.closest('.item-menu') !== itemMenu) {
    document.getElementById('profile-submenu').style.display = 'none';
  }
});
