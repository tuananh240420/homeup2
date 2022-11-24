// Count in BDS
let countBedroomInit = 0;
let countBathroomInit = 0;
let countFlatInit = 0;

function countBedroom() {
  console.log('aaaa');
  countBedroomInit -= 1;
  document.getElementById('text-bedroom').innerHTML = countBedroomInit;
  document.getElementById('minus-bedroom-img').style.background = 'red';
}
// document.getElementById()
class CountBtn {
  count = 0;
  minus(id) {
    if (this.count === 0) {
      return;
    }
    if (this.count === 1)
      document
        .getElementById(id)
        .previousElementSibling.classList.remove('active');
    else
      document
        .getElementById(id)
        .previousElementSibling.classList.add('active');
    this.count--;
    document.getElementById(id).innerHTML = this.count;
  }
  plus(id) {
    document.getElementById(id).previousElementSibling.classList.add('active');
    this.count++;
    document.getElementById(id).innerHTML = this.count;
  }
}
var bedroom = new CountBtn();
var bathroom = new CountBtn();
var flat = new CountBtn();

document.querySelectorAll('.dangtintuc-image').forEach((item) => {
  item.onclick = () => {
    document
      .querySelector('.dangtintuc-image.active')
      .classList.remove('active');
    item.classList.add('active');
  };
});

//

let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');
let speed = 10;
const getProgressEndValue = () => {
  return Math.floor(
    (100 / totalLength) *
      document.querySelectorAll(
        'input.ptanh-custom-input:not(:placeholder-shown):not([type="date"]), textarea:not(:placeholder-shown), .ptanh-custom-select.selected'
      ).length
  );
};
const changeProgress = () => {
  const progressEndValue = getProgressEndValue();
  let progressValue = valueContainer.textContent.split('%')[0];
  let progress = setInterval(() => {
    if (progressValue < progressEndValue) progressValue++;
    else if (progressValue > progressEndValue) progressValue--;
    else return;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #D1193F ${progressValue * 3.6}deg,
        #ECEDF1 ${progressValue * 3.6}deg
        )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};

const totalLength = document.querySelectorAll(
  'input.ptanh-custom-input:not([type="date"]), textarea, select.ptanh-custom-select'
).length;

$('.ptanh-custom-select').on(
  'changed.bs.select',
  function (e, clickedIndex, isSelected, previousValue) {
    e.currentTarget.parentNode.classList.toggle(
      'selected',
      $(e.currentTarget).val()?.length !== 0
    );
    changeProgress();
    const dependanceName = e.currentTarget.dataset.dependanceName;
    if (dependanceName)
      document
        .querySelectorAll(
          `select.ptanh-custom-select[data-dependance="${dependanceName}"]`
        )
        .forEach((item) => {
          // $(item).selectpicker('deselectAll');
          if (Array.isArray($(item).selectpicker('val')))
            $(item).selectpicker('deselectAll');
          else $(item).selectpicker('val', '');
        });
  }
);
document.querySelectorAll('.clear-select-bootstrap').forEach((item) => {
  item.onclick = () => {
    const select = item.previousElementSibling.querySelector('select');
    $(select).selectpicker('val', '');
  };
});

document.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('change', () => {
    changeProgress();
  });
});

const locationValue = document.getElementById('location-value');
const setLoactionValue = () => {
  const value = Array.from(
    document.querySelectorAll(
      '#collapseExample .bootstrap-select.selected select:not(.skip) ~ button .filter-option-inner-inner'
    )
  )
    .reverse()
    .map((item) => item.textContent)
    .join(', ');
  locationValue.value = value;
};
document
  .querySelectorAll('#collapseExample select:not(.skip)')
  .forEach((select) => {
    $(select).on(
      'changed.bs.select',
      (e, clickedIndex, isSelected, previousValue) => {
        setLoactionValue();
      }
    );
  });

const DATA = [
  [
    {
      label: 'test1',
      value: '1',
    },
    {
      label: 'test2',
      value: '2',
    },
    {
      label: 'test3',
      value: '3',
    },
    {
      label: 'test4',
      value: '4',
    },
    {
      label: 'test5',
      value: '5',
    },
    {
      label: 'test6',
      value: '6',
    },
  ],
  [
    {
      label: 'test12',
      value: '1',
    },
    {
      label: 'test22',
      value: '2',
    },
    {
      label: 'test32',
      value: '3',
    },
    {
      label: 'test42',
      value: '4',
    },
    {
      label: 'test52',
      value: '5',
    },
    {
      label: 'test62',
      value: '6',
    },
  ],
  [
    {
      label: 'test13',
      value: '1',
    },
    {
      label: 'test23',
      value: '2',
    },
    {
      label: 'test33',
      value: '3',
    },
    {
      label: 'test43',
      value: '4',
    },
    {
      label: 'test53',
      value: '5',
    },
    {
      label: 'test63',
      value: '6',
    },
  ],
];

const formatHtml = (data) => {
  return data
    .map((item) => `<option value=${item.value}>${item.label}</option>`)
    .join('');
};
$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
  const checkedValue = event.target.dataset.value;
  const data = DATA[Number(checkedValue) - 1];
  const html = formatHtml(data);
  document.getElementById('render-html').innerHTML = html;
  $('#render-html').selectpicker('refresh');
});
