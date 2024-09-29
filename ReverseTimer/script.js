// انتخاب دکمه شروع تایمر
const startButton = document.getElementById('start-timer');

// انتخاب فیلدهای فرم
const eventNameInput = document.getElementById('event-name');
const eventDateInput = document.getElementById('event-date');

// انتخاب بخش تایمر
const countdownTimer = document.getElementById('countdown-timer');

// انتخاب بخش‌های روز، ساعت، دقیقه و ثانیه
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// دکمه شروع تایمر را گوش می‌دهیم
startButton.addEventListener('click', function() {
    // گرفتن ورودی‌های کاربر
    const eventName = eventNameInput.value;
    const eventDate = new Date(eventDateInput.value);

    // بررسی اینکه آیا زمان و نام رویداد وارد شده است یا خیر
    if (eventName === "" || isNaN(eventDate.getTime())) {
        alert('Please enter a valid event name and date.');
        return;
    }

    // مخفی کردن فرم و نمایش تایمر
    document.getElementById('event-form').classList.add('hidden');
    countdownTimer.classList.remove('hidden');

    // شروع شمارش معکوس
    startCountdown(eventDate);
});

// تابعی برای شروع شمارش معکوس
function startCountdown(eventDate) {
    // یک تابع که هر 1 ثانیه اجرا می‌شود
    const interval = setInterval(function() {
        // گرفتن زمان فعلی
        const now = new Date().getTime();
        
        // محاسبه تفاوت بین زمان فعلی و زمان رویداد
        const timeRemaining = eventDate - now;

        // محاسبه روز، ساعت، دقیقه و ثانیه از تفاوت زمان
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // نمایش اعداد محاسبه شده
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        // وقتی تایمر به پایان برسد
        if (timeRemaining < 0) {
            clearInterval(interval); // متوقف کردن شمارش
            alert('The event has started!'); // نمایش پیغام پایان تایمر

            // بازگشت به فرم
            countdownTimer.classList.add('hidden'); // پنهان کردن تایمر
            document.getElementById('event-form').classList.remove('hidden'); // نمایش فرم
            eventNameInput.value = ''; // پاک کردن فیلد نام رویداد
            eventDateInput.value = ''; // پاک کردن فیلد تاریخ
            todayCheckbox.checked = false; // ریست کردن چک باکس
        }
    }, 1000); // هر 1 ثانیه
}

