const rangeSlideEvent = (opntions) => {
  const {
    parentNode,
    formatFunction,
    defaultText,
    minValue,
    maxValue,
    selectRangesArr,
  } = opntions;
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
      inputMax.value = selectRangesArr[index].maxValue;
      setInnerText(maxDisplayValueEl, formatFunction(inputMax.value));
      setStyleProperty(priceRangeEl, MAX_PROPERTY, inputMax.value);
    };
  });
};
