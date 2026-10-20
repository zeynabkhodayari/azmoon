<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>آزمون داروشناسی پرستاری – سطح متوسط</title>
<style>
  body {
    font-family: Tahoma, "Vazirmatn", sans-serif;
    background: #f4f7fa;
    color: #222;
    margin: 0;
    padding: 20px;
    line-height: 1.9;
  }
  .container {
    max-width: 900px;
    margin: auto;
    background: #fff;
    padding: 25px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  }
  h1 {
    text-align: center;
    color: #1a5276;
    font-size: 1.4rem;
    border-bottom: 2px solid #1a5276;
    padding-bottom: 10px;
  }
  .subtitle {
    text-align: center;
    color: #555;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  .question {
    background: #f9fbfd;
    border: 1px solid #d6e2ec;
    border-radius: 10px;
    padding: 15px 18px;
    margin-bottom: 20px;
  }
  .q-text {
    font-weight: bold;
    color: #154360;
    margin-bottom: 10px;
  }
  .options label {
    display: block;
    background: #fff;
    border: 1px solid #cfd8dc;
    border-radius: 8px;
    padding: 8px 12px;
    margin: 6px 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  .options label:hover {
    background: #eaf2f8;
  }
  .options input[type="radio"] {
    margin-left: 8px;
  }
  .feedback {
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    display: none;
    font-size: 0.95rem;
  }
  .feedback.correct {
    background: #d4efdf;
    border: 1px solid #27ae60;
    color: #145a32;
  }
  .feedback.wrong {
    background: #fadbd8;
    border: 1px solid #c0392b;
    color: #78281f;
  }
  .btn {
    background: #1a5276;
    color: #fff;
    border: none;
    padding: 10px 22px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    margin: 5px;
    font-family: inherit;
  }
  .btn:hover {
    background: #154360;
  }
  .btn-reset {
    background: #7f8c8d;
  }
  .btn-reset:hover {
    background: #5d6d6e;
  }
  .controls {
    text-align: center;
    margin-top: 25px;
  }
  #score {
    text-align: center;
    font-size: 1.15rem;
    font-weight: bold;
    color: #1a5276;
    margin-top: 15px;
    min-height: 30px;
  }
  .explain {
    display: block;
    margin-top: 6px;
    font-size: 0.9rem;
    color: #4a4a4a;
  }
</style>
</head>
<body>
<div class="container">
  <h1>آزمون داروشناسی پرستاری</h1>
  <p class="subtitle">۱۵ سوال چهارگزینه‌ای – سطح متوسط (درک و کاربرد)</p>
  <div id="quiz"></div>

  <div class="controls">
    <button class="btn" onclick="submitQuiz()">ثبت پاسخ‌ها و مشاهده نتیجه</button>
    <button class="btn btn-reset" onclick="resetQuiz()">شروع مجدد</button>
  </div>
  <div id="score"></div>
</div>

<script>
const questions = [
  {
    q: "کدام دارو از دسته مهارکننده‌های ACE است؟",
    options: ["لوزارتان", "انالاپریل", "آملودیپین", "آتنولول"],
    answer: 1,
    explain: "انالاپریل یک مهارکننده ACE است. لوزارتان ARB، آملودیپین مسدودکننده کانال کلسیم و آتنولول بتا-بلاکر است."
  },
  {
    q: "شایع‌ترین عارضه مهارکننده‌های ACE کدام است؟",
    options: ["سرفه خشک", "یبوست", "تورم مچ پا", "افزایش قند خون"],
    answer: 0,
    explain: "سرفه خشک شایع‌ترین عارضه ACEهاست. تورم مچ پا با آملودیپین و یبوست با وراپامیل مرتبط است."
  },
  {
    q: "کدام دارو در بارداری ممنوع است؟",
    options: ["آموکسی‌سیلین", "سفیکسیم", "داکسی‌سایکلین", "پنی‌سیلین"],
    answer: 2,
    explain: "داکسی‌سایکلین (تتراسایکلین) در بارداری ممنوع است و می‌تواند به دندان و استخوان جنین آسیب بزند."
  },
  {
    q: "بیمار تحت درمان با فوروزماید است. کدام یافته آزمایشگاهی را باید بیشتر پایش کرد؟",
    options: ["پتاسیم خون", "کلسیم خون", "هموگلوبین", "پلاکت"],
    answer: 0,
    explain: "فوروزماید باعث کاهش پتاسیم (هیپوکالمی) می‌شود؛ بنابراین پایش پتاسیم اهمیت دارد."
  },
  {
    q: "کدام دارو برای تسکین سریع درد آنژین (زیرزبانی) استفاده می‌شود؟",
    options: ["آتورواستاتین", "نیتروگلیسیرین", "وارفارین", "دیگوکسین"],
    answer: 1,
    explain: "نیتروگلیسیرین زیرزبانی برای تسکین سریع آنژین به کار می‌رود."
  },
  {
    q: "شایع‌ترین عارضه آملودیپین کدام است؟",
    options: ["سرفه خشک", "تورم مچ پا", "خونریزی گوارشی", "تاری دید"],
    answer: 1,
    explain: "تورم مچ پا عارضه شایع مسدودکننده‌های کانال کلسیم مانند آملودیپین است."
  },
  {
    q: "کدام دارو یک بتا-بلاکر است؟",
    options: ["متوپرولول", "لوزارتان", "فوروزماید", "آزیترومایسین"],
    answer: 0,
    explain: "متوپرولول بتا-بلاکر است. لوزارتان ARB، فوروزماید دیورتیک و آزیترومایسین آنتی‌بیوتیک ماکرولید است."
  },
  {
    q: "بیمار تحت درمان با وارفارین است. کدام اقدام پرستاری ضروری است؟",
    options: ["پایش منظم INR", "اندازه‌گیری قند خون", "پایش سطح پتاسیم", "شمارش پلاکت هفتگی"],
    answer: 0,
    explain: "وارفارین نیاز به پایش منظم INR دارد تا خطر خونریزی کنترل شود."
  },
  {
    q: "کدام آنتی‌بیوتیک می‌تواند باعث تغییر رنگ دائمی دندان در کودکان شود؟",
    options: ["آموکسی‌سیلین", "آزیترومایسین", "داکسی‌سایکلین", "سفیکسیم"],
    answer: 2,
    explain: "تتراسایکلین‌ها از جمله داکسی‌سایکلین در کودکان زیر ۱۲ سال باعث تغییر رنگ دندان می‌شوند."
  },
  {
    q: "کدام دارو یک دیورتیک است؟",
    options: ["هیدروکلروتیازید", "آتنولول", "انالاپریل", "دیگوکسین"],
    answer: 0,
    explain: "هیدروکلروتیازید دیورتیک تیازیدی است."
  },
  {
    q: "کدام علامت می‌تواند نشانه مسمومیت با دیگوکسین باشد؟",
    options: ["افزایش اشتها", "تهوع و تاری دید", "سرفه خشک", "تورم مچ پا"],
    answer: 1,
    explain: "تهوع، بی‌اشتهایی و تاری دید (گاهی هاله زرد) از علائم مسمومیت با دیگوکسین هستند."
  },
  {
    q: "کدام دارو برای کاهش کلسترول خون استفاده می‌شود؟",
    options: ["آتورواستاتین", "آملودیپین", "فوروزماید", "لوزارتان"],
    answer: 0,
    explain: "آتورواستاتین از دسته استاتین‌هاست و برای کاهش کلسترول استفاده می‌شود."
  },
  {
    q: "شایع‌ترین عارضه آنتی‌بیوتیک‌های پنی‌سیلین کدام است؟",
    options: ["واکنش آلرژیک", "خونریزی", "کندی ضربان قلب", "افزایش پتاسیم"],
    answer: 0,
    explain: "واکنش‌های آلرژیک (از راش تا آنافیلاکسی) شایع‌ترین و مهم‌ترین عارضه پنی‌سیلین‌هاست."
  },
  {
    q: "بیمار تحت درمان با اسپیرونولاکتون است. کدام عارضه باید پایش شود؟",
    options: ["کاهش پتاسیم", "افزایش پتاسیم", "کاهش قند خون", "کاهش اسید اوریک"],
    answer: 1,
    explain: "اسپیرونولاکتون پتاسیم را نگه می‌دارد و خطر هیپرکالمی (افزایش پتاسیم) دارد."
  },
  {
    q: "کدام توصیه برای بیمار مصرف‌کننده نیتروگلیسیرین زیرزبانی صحیح است؟",
    options: ["ایستاده مصرف کند", "پس از مصرف بنشیند یا دراز بکشد", "قرص را ببلعد", "همراه با آنتی‌اسید مصرف کند"],
    answer: 1,
    explain: "نیتروگلیسیرین می‌تواند باعث افت فشار و سرگیجه شود؛ بیمار باید پس از مصرف بنشیند یا دراز بکشد."
  }
];

const quizContainer = document.getElementById("quiz");
const scoreDiv = document.getElementById("score");
let submitted = false;

function renderQuiz() {
  quizContainer.innerHTML = "";
  submitted = false;
  scoreDiv.textContent = "";
  questions.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    let optionsHtml = "";
    item.options.forEach((opt, i) => {
      optionsHtml += `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label>`;
    });
    qDiv.innerHTML = `
      <div class="q-text">${index + 1}. ${item.q}</div>
      <div class="options">${optionsHtml}</div>
      <div class="feedback" id="fb${index}"></div>
    `;
    quizContainer.appendChild(qDiv);
  });
}

function submitQuiz() {
  if (submitted) return;
  let correctCount = 0;
  let allAnswered = true;

  questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const fb = document.getElementById("fb" + index);
    if (!selected) {
      allAnswered = false;
      fb.style.display = "block";
      fb.className = "feedback wrong";
      fb.innerHTML = "⚠️ به این سوال پاسخ نداده‌اید. پاسخ صحیح: " +
        `<strong>${item.options[item.answer]}</strong>` +
        `<span class="explain">${item.explain}</span>`;
      return;
    }
    const val = parseInt(selected.value);
    if (val === item.answer) {
      correctCount++;
      fb.style.display = "block";
      fb.className = "feedback correct";
      fb.innerHTML = "✅ پاسخ صحیح." +
        `<span class="explain">${item.explain}</span>`;
    } else {
      fb.style.display = "block";
      fb.className = "feedback wrong";
      fb.innerHTML = "❌ پاسخ نادرست. پاسخ صحیح: " +
        `<strong>${item.options[item.answer]}</strong>` +
        `<span class="explain">${item.explain}</span>`;
    }
  });

  submitted = true;
  scoreDiv.textContent = `نتیجه: ${correctCount} از ${questions.length} پاسخ صحیح` +
    (allAnswered ? "" : " (برخی سوالات بی‌پاسخ ماندند)");
}

function resetQuiz() {
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

renderQuiz();
</script>
</body>
</html>