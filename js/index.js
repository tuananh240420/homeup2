// Swiper init
$.fn.selectpicker.Constructor.DEFAULTS.virtualScroll = true;
class ClassWatcher {
  constructor(
    targetNode,
    classToWatch,
    classAddedCallback,
    classRemovedCallback
  ) {
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);

    this.init();
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  observe() {
    this.observer.observe(this.targetNode, { attributes: true });
  }

  disconnect() {
    this.observer.disconnect();
  }

  mutationCallback = (mutationsList) => {
    for (let mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        let currentClassState = mutation.target.classList.contains(
          this.classToWatch
        );
        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    }
  };
}

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
      checkboxCotainer
        ?.querySelectorAll('.form-custom-checkbox input[type="checkbox"]')
        .forEach((checkbox) => (checkbox.checked = false));
      const selectPickerContainer = button.closest('.location-filter');
      if (selectPickerContainer)
        $('.location-filter .selectpicker').selectpicker('val', '');
      if (checkboxCotainer) {
        const spans = document.querySelectorAll('.loai-nha-dat-value');
        spans.forEach((item) => (item.innerText = item.dataset.default));
      }
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
  // $('#select-tinh-thanh').on(
  //   'changed.bs.select',
  //   function (e, clickedIndex, isSelected, previousValue) {
  //     // const selected = $(e.currentTarget).val();
  //     const selected =
  //       e.currentTarget.children[clickedIndex]?.innerText || undefined;
  //     // console.dir(e.currentTarget.children[clickedIndex].innerText);
  //     console.log(selected);
  //     document.querySelector('.location-filter-value').innerText =
  //       selected ||
  //       document.querySelector('.location-filter-value').dataset.default ||
  //       'Toàn quốc';
  //   }
  // );
  $('#select-tinh-thanh').on(
    'changed.bs.select',
    function (e, clickedIndex, isSelected, previousValue) {
      // const selected = $(e.currentTarget).val();
      const selected =
        e.currentTarget.children[clickedIndex]?.innerText || undefined;

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
          document
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
    if (!e.target.closest('.filter-container')) {
      if (!e.target.closest('.dropdown-menu'))
        document
          .querySelectorAll('.filter-container .switch')
          .forEach((item) => (item.checked = false));
    }
    if (!e.target.closest('.main-search-container > .dropdown-main')) {
      const cb = document.querySelector(
        '.main-search-container > .dropdown-main > input[type="checkbox"]'
      );
      if (cb) cb.checked = false;
    }
  });
})();

// Resposive

window.addEventListener('click', (e) => {
  const itemMenu = document.getElementById('profile-submenu')?.parentNode;
  if (e.target.closest('.item-menu') !== itemMenu) {
    document.getElementById('profile-submenu').style.display = 'none';
  }
});

document
  .querySelectorAll('.dropdown.bootstrap-select .actions-btn.bs-select-all')
  .forEach((item) => {
    item.onclick = () => {
      console.log(item.closest('.dropdown.bootstrap-select'));
    };
  });

const titleArr = {
  'Số phòng ngủ': 'phòng ngủ',
  'Hướng nhà': 'Hướng',
  'Nội dung tin có': 'Có',
};
document.querySelectorAll('.addition-filter').forEach((add) => {
  const value = add.querySelector('.price-filter-value');
  const count = add.querySelector('.addition-count');
  add.querySelector('.dropdown-btn > ul').onchange = () => {
    const res = Array.from(add.querySelectorAll('.checkbox-container')).reduce(
      (acc, container) => {
        const title = container.previousElementSibling.innerText;
        const checkboxContaienr = container.querySelectorAll(
          'input:checked + label'
        );
        const values = Array.from(checkboxContaienr).map(
          (item) => item.innerText
        );
        if (values.length === 0) return acc;
        if (titleArr[title] === 'phòng ngủ')
          return acc.concat(values.join(', ') + ' ' + titleArr[title]);
        else return acc.concat(titleArr[title] + ': ' + values.join(', '));
      },
      []
    );
    if (count) {
      if (res.length === 0) return count.classList.add('d-none');
      count.classList.remove('d-none');
      count.innerText = res.length;
      add
        .querySelector('.form-checkbox-resetall')
        .addEventListener('click', () => {
          count.classList.add('d-none');
        });
    }
    if (value) {
      value.innerText = res.join(', ');
      add
        .querySelector('.form-checkbox-resetall')
        .addEventListener('click', () => {
          value.innerText = 'Xem Thêm';
        });
    }
  };
});

let count = 0;
$('.filter-select-boostrap').on(
  'changed.bs.select',
  function (e, clickedIndex, isSelected, previousValue) {
    count++;

    e.currentTarget.parentNode.classList.toggle(
      'selected',
      $(e.currentTarget).val()?.length !== 0
    );
    const dependanceName = e.currentTarget.dataset.dependanceName;
    if (dependanceName)
      document
        .querySelectorAll(
          `select.filter-select-boostrap[data-dependance="${dependanceName}"]`
        )
        .forEach((item) => {
          // $(item).selectpicker('deselectAll');
          if (Array.isArray($(item).selectpicker('val')))
            $(item).selectpicker('deselectAll');
          else $(item).selectpicker('val', '');
        });

    if (count === 1) {
      document
        .querySelectorAll('div.filter-select-boostrap')
        .forEach((item) => {
          new ClassWatcher(
            item,
            'show',
            () => {
              item.parentNode.classList.remove('position-relative');
            },
            () => {
              item.parentNode.classList.add('position-relative');
            }
          );
        });
    }
  }
);

document.querySelectorAll('.clear-select-bootstrap').forEach((item) => {
  item.onclick = () => {
    const select = item.previousElementSibling.querySelector('select');
    $(select).selectpicker('val', '');
  };
});

const clearFunction = () => {
  const select = this.previousElementSibling.querySelector('select');
  $(select).selectpicker('val', '');
};

// document
//   .querySelectorAll(
//     '.dropdown-container.form-checkbox-container .form-checkbox:not([data-count]) input[type="checkbox"]'
//   )
//   .forEach((item, i, arr) => {
//     item.addEventListener('change', () => {
//       const spans = document.querySelectorAll('.loai-nha-dat-value');
//       const label = item.previousElementSibling.innerText;

//       setTimeout(() => {
//       const spans = document.querySelectorAll('.loai-nha-dat-value');

//         const arrz = Array.from(
//           document.querySelectorAll(
//             '.dropdown-container.form-checkbox-container .form-checkbox:not([data-subcount]):not([data-count]) input[type="checkbox"]:checked'
//           )
//         ).map((itemz) => {
//           return itemz.previousElementSibling.innerText;
//         });
//         if (arrz.length === 0) {
//           spans.forEach((item) => (item.innerText = item.dataset.default));
//         } else spans.forEach((item) => (item.innerText = arrz.join(', ')));
//       }, 100);
//     });
//   });

// ========================== check all ===============================================
const setCheckAll = (el) => {
  const ul = el.closest('ul');
  const checkall = ul.querySelector('.form-checkbox:first-of-type input');

  if (
    ul.querySelectorAll('.form-checkbox:not(:first-of-type) input').length ===
    ul.querySelectorAll('.form-checkbox:not(:first-of-type) input:checked')
      .length
  ) {
    checkall.checked = true;
    const spans = document.querySelectorAll('.loai-nha-dat-value');
    spans.forEach((item) => (item.innerText = 'Tất cả nhà đất'));
  } else checkall.checked = false;
};

document
  .querySelectorAll('.form-checkbox:first-of-type input')
  .forEach((el) => {
    el.addEventListener('change', () => {
      const ul = el.closest('ul');
      ul.querySelectorAll('.form-checkbox:not(:first-of-type) input').forEach(
        (item) => {
          item.checked = el.checked;
          const spans = document.querySelectorAll('.loai-nha-dat-value');
          spans.forEach((item) =>
            el.checked
              ? (item.innerText = 'Tất cả nhà đất')
              : (item.innerText = item.dataset.default)
          );
        }
      );
    });
  });

const getSubList = (el) => {
  let sublist = [];
  let nextEle = el.nextElementSibling;
  while (nextEle?.classList.contains('sub-checkbox')) {
    sublist.push(nextEle.querySelector('input'));
    nextEle = nextEle.nextElementSibling;
  }
  return sublist;
};
const setCheckboxText = () => {
  const spans = document.querySelectorAll('.loai-nha-dat-value');

  const arrz = Array.from(
    document.querySelectorAll(
      '.dropdown-container.form-checkbox-container .form-checkbox:not([data-subcount]):not([data-count]) input[type="checkbox"]:checked'
    )
  ).map((itemz) => {
    return itemz.previousElementSibling.innerText;
  });
  if (arrz.length === 0) {
    spans.forEach((item) => (item.innerText = item.dataset.default));
  } else spans.forEach((item) => (item.innerText = arrz.join(', ')));
};
document
  .querySelectorAll(
    '.form-checkbox:not(:first-child):not(.sub-checkbox):not([data-subcount]) input'
  )
  .forEach((el) => {
    el.addEventListener('change', () => {
      setCheckboxText();
      setCheckAll(el);
    });
  });

document
  .querySelectorAll('.form-checkbox[data-subcount] input')
  .forEach((subParent) => {
    const subList = getSubList(subParent.parentNode);
    subParent.addEventListener('change', () => {
      subList.forEach((item) => (item.checked = subParent.checked));
      setCheckboxText();
    });
    subList.forEach((item) => {
      item.addEventListener('change', () => {
        subParent.checked = subList.every((i) => i.checked);
        setCheckboxText();
        setCheckAll(item.parentNode);
      });
    });
  });

document.querySelectorAll('.form-checkbox').forEach((item) => {
  item.onclick = (e) => {
    // console.log(123);
    // e.preventDefault();
    // e.stopPropagation();
  };
});
