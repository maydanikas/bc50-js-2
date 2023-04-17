import flatpickr from "flatpickr";

flatpickr(datePicker, {
    enableTime: false,
    time_24hr: false,
    defaultDate: new Date(),
    minuteIncrement: 1,
    theme: 'dark'
  });
