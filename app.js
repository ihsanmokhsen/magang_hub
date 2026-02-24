const documents = [
  {
    title: 'RENSTRA',
    description: 'Rencana Strategis BPAD sebagai acuan program dan target kinerja.',
    link: 'https://drive.google.com/file/d/12ZLeVzqYtcZbCqqo2ZqmwAqnHOTWjZGd/view?usp=sharing',
  },
  {
    title: 'RPJMD',
    description: 'Dokumen RPJMD sebagai arah pembangunan dan prioritas daerah.',
    link: 'https://drive.google.com/file/d/1Azjxne-mDYDYPUJIPhf7ZBDcBYFR0oeU/view?usp=sharing',
  },
];

const quizData = [
  {
    question: 'Apa kepanjangan BPAD?',
    options: ['Badan Pendapatan dan Aset Daerah', 'Badan Pengawasan Aset Daerah', 'Balai Pendataan Aset Daerah'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan UPTD?',
    options: ['Unit Pengelola Teknis Daerah', 'Unit Pelaksana Teknis Daerah', 'Unit Pelayanan Tertib Daerah'],
    answer: 1,
  },
  {
    question: 'Samsat dikenal sebagai?',
    options: ['Sistem Administrasi Manunggal Satu Atap', 'Sarana Administrasi Masyarakat Satu Atap', 'Sistem Amanah Manajemen Satu Atap'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan STNK?',
    options: ['Surat Tanda Nomor Kendaraan', 'Surat Tanda Naik Kendaraan', 'Sertifikat Tanda Nomor Kendaraan'],
    answer: 0,
  },
  {
    question: 'PKB di BPAD terkait dengan?',
    options: ['Pajak Kendaraan Bermotor', 'Pendaftaran Kendaraan Bermotor', 'Penerbitan Kartu Berkendara'],
    answer: 0,
  },
];

const state = {
  quizIndex: 0,
  quizScore: 0,
  answered: false,
};

const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

const docGrid = document.getElementById('doc-grid');
const template = document.getElementById('doc-card-template');

const quizProgress = document.getElementById('quiz-progress');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizScore = document.getElementById('quiz-score');
const quizNextBtn = document.getElementById('quiz-next');
const quizResetBtn = document.getElementById('quiz-reset');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveTab(button.dataset.tab);
  });
});

quizNextBtn.addEventListener('click', () => {
  if (!state.answered) return;

  state.quizIndex += 1;
  state.answered = false;

  if (state.quizIndex >= quizData.length) {
    renderQuizResult();
    return;
  }

  renderQuizQuestion();
});

quizResetBtn.addEventListener('click', resetQuiz);

function setActiveTab(tabName) {
  tabButtons.forEach((btn) => btn.classList.remove('active'));
  tabPanels.forEach((panel) => panel.classList.remove('active'));

  const targetButton = tabButtons.find((btn) => btn.dataset.tab === tabName);
  const targetPanel = document.getElementById(`tab-${tabName}`);

  if (targetButton) targetButton.classList.add('active');
  if (targetPanel) targetPanel.classList.add('active');
}

function renderDocuments() {
  docGrid.innerHTML = '';

  documents.forEach((doc) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.doc-title').textContent = doc.title;
    node.querySelector('.doc-desc').textContent = doc.description;
    node.querySelector('.doc-link').href = doc.link;
    docGrid.appendChild(node);
  });
}

function renderQuizQuestion() {
  const current = quizData[state.quizIndex];

  quizProgress.textContent = `Soal ${state.quizIndex + 1} dari ${quizData.length}`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = '';
  quizScore.textContent = `Skor: ${state.quizScore}`;
  quizNextBtn.disabled = true;

  quizOptions.innerHTML = '';
  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'btn btn-ghost quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(index));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (state.answered) return;

  const current = quizData[state.quizIndex];
  state.answered = true;

  const optionButtons = Array.from(document.querySelectorAll('.quiz-option'));
  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.answer) btn.classList.add('correct');
    if (index === selectedIndex && selectedIndex !== current.answer) btn.classList.add('wrong');
  });

  if (selectedIndex === current.answer) {
    state.quizScore += 20;
    quizFeedback.textContent = 'Jawaban benar.';
  } else {
    quizFeedback.textContent = 'Jawaban belum tepat. Pelajari lagi istilah BPAD.';
  }

  quizScore.textContent = `Skor: ${state.quizScore}`;
  quizNextBtn.disabled = false;
}

function renderQuizResult() {
  quizProgress.textContent = 'Selesai';
  quizQuestion.textContent = 'Game selesai. Keren, Sobat Magang!';
  quizOptions.innerHTML = '';
  quizFeedback.textContent = 'Klik Ulangi untuk mencoba lagi.';
  quizScore.textContent = `Skor akhir: ${state.quizScore} / 100`;
  quizNextBtn.disabled = true;
}

function resetQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.answered = false;
  renderQuizQuestion();
}

renderDocuments();
renderQuizQuestion();
