const DOC_PROGRESS_KEY = 'bpad-doc-progress-v1';
const CHECKLIST_PROGRESS_KEY = 'bpad-checklist-progress-v1';

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
  {
    title: 'LKIP Laporan Kinerja Instansi Pemerintah',
    description: 'Dokumen LKIP sebagai laporan kinerja instansi pemerintah.',
    link: 'https://drive.google.com/file/d/1Wmh5_Kaq50d3HO-MQS7V9c5rrjUfjWws/view?usp=sharing',
  },
  {
    title: 'SOTK Badan Pendapatan dan Aset Daerah',
    description: 'Struktur organisasi BPAD sebagai acuan tugas dan fungsi setiap unit.',
    link: 'https://drive.google.com/file/d/18uTbAhfOgL6-kfQ7p9uzZu19VjGsPdAv/view?usp=drive_link',
  },
];

const onboardingChecklistItems = [
  { id: 'hadir-tepat-waktu', label: 'Sudah hadir sebelum pukul 07.30.' },
  { id: 'lapor-pembimbing', label: 'Sudah lapor ke pembimbing/unit kerja.' },
  { id: 'alur-kerja', label: 'Sudah memahami ruang kerja dan alur koordinasi harian.' },
  { id: 'baca-dokumen-awal', label: 'Sudah membuka tab Dokumen dan membaca dokumen inti (RENSTRA/RPJMD).' },
  { id: 'simpan-laporan', label: 'Sudah menyimpan link laporan harian Tally.' },
  { id: 'pahami-aturan', label: 'Sudah memahami aturan disiplin, etika, dan jam kerja.' },
  { id: 'kenal-istilah', label: 'Sudah mengenal istilah dasar BPAD (cek tab Glosarium).' },
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
    question: 'UPTD dalam konteks BPAD merujuk pada?',
    options: ['Unit pelaksana teknis BPAD di kabupaten/kota', 'Unit pusat transfer data', 'Unit penetapan tarif daerah'],
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
  {
    question: 'Apa kepanjangan BBNKB?',
    options: ['Bea Balik Nama Kendaraan Bermotor', 'Biaya Balik Nama Kendaraan Baru', 'Bukti Balik Nomor Kendaraan Bermotor'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan PBBKB?',
    options: ['Pajak Bahan Bakar Kendaraan Bermotor', 'Pajak Bahan Baku Kendaraan Bermotor', 'Pungutan Bahan Bakar Kendaraan Bermotor'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan PAD?',
    options: ['Pendapatan Asli Daerah', 'Pendanaan Aset Daerah', 'Penerimaan Administrasi Daerah'],
    answer: 0,
  },
  {
    question: 'UPTD BPAD di NTT tersebar di berapa kabupaten/kota?',
    options: ['22', '20', '24'],
    answer: 0,
  },
  {
    question: 'STNK digunakan sebagai?',
    options: ['Bukti registrasi dan identitas kendaraan', 'Surat mutasi kendaraan', 'Surat izin mengemudi'],
    answer: 0,
  },
  {
    question: 'Bidang Pendapatan I mengelola salah satu pajak berikut, yaitu...',
    options: ['Pajak Rokok', 'Pajak Hotel', 'Pajak Air Tanah Kota'],
    answer: 0,
  },
  {
    question: 'Salah satu tugas UPTD BPAD adalah...',
    options: ['Verifikasi dan penagihan pajak', 'Menyusun APBN', 'Menerbitkan SIM'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan SAMSAT?',
    options: ['Sistem Administrasi Manunggal Satu Atap', 'Sistem Administrasi Masyarakat Satu Atap', 'Sarana Administrasi Masyarakat Satu Atap'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan BPKB?',
    options: ['Bukti Pemilikan Kendaraan Bermotor', 'Buku Pemilik Kendaraan Bermotor', 'Bukti Pendaftaran Kendaraan Bermotor'],
    answer: 1,
  },
  {
    question: 'Apa kepanjangan OPD?',
    options: ['Organisasi Pembangunan Daerah', 'Organisasi Perangkat Daerah', 'Organisasi Pelayanan Daerah'],
    answer: 1,
  },
  {
    question: 'Apa kepanjangan DAU?',
    options: ['Dana Alokasi Umum', 'Dana Anggaran Umum', 'Dana Alokasi Usaha'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan DAK?',
    options: ['Dana Alokasi Khusus', 'Dana Anggaran Khusus', 'Dana Alokasi Keuangan'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan APBD?',
    options: ['Anggaran Pendapatan dan Belanja Daerah', 'Anggaran Pembangunan dan Belanja Daerah', 'Anggaran Pendapatan dan Biaya Daerah'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan ASN?',
    options: ['Aparatur Sipil Negara', 'Aparatur Sipil Nasional', 'Aparatur Sistem Negara'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan CPNS?',
    options: ['Calon Pegawai Negeri Sipil', 'Calon Pekerja Negeri Sipil', 'Calon Personel Negeri Sipil'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan PPPK?',
    options: ['Pegawai Pemerintah dengan Perjanjian Kerja', 'Pegawai Pemerintah dengan Perjanjian Kontrak', 'Pegawai Publik dengan Perjanjian Kerja'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan SOTK?',
    options: ['Susunan Organisasi dan Tata Kerja', 'Sistem Organisasi dan Tata Kelola', 'Struktur Organisasi dan Tata Kerja'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan BUMD?',
    options: ['Badan Usaha Milik Daerah', 'Badan Usaha Manajemen Daerah', 'Badan Umum Milik Daerah'],
    answer: 0,
  },
  {
    question: 'Apa kepanjangan SKPD?',
    options: ['Satuan Kerja Perangkat Daerah', 'Sistem Kerja Perangkat Daerah', 'Satuan Kerja Pembangunan Daerah'],
    answer: 0,
  },
  {
    question: 'Retribusi daerah adalah...',
    options: ['Pungutan atas layanan atau izin yang disediakan pemerintah daerah', 'Pajak yang dipungut oleh pemerintah pusat', 'Dana hibah dari luar negeri'],
    answer: 0,
  },
  {
    question: 'Bidang Pendapatan II BPAD mengelola...',
    options: ['Retribusi daerah dan dana perimbangan', 'Pajak Kendaraan Bermotor', 'Bea Balik Nama Kendaraan Bermotor'],
    answer: 0,
  },
];

const state = {
  quizIndex: 0,
  quizScore: 0,
  answered: false,
  readDocs: loadStoredMap(DOC_PROGRESS_KEY),
  checklist: loadStoredMap(CHECKLIST_PROGRESS_KEY),
};

const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
const tabLinks = Array.from(document.querySelectorAll('[data-tab-link]'));

const docGrid = document.getElementById('doc-grid');
const template = document.getElementById('doc-card-template');
const docProgressText = document.getElementById('doc-progress-text');
const docProgressFill = document.getElementById('doc-progress-fill');

const checklistList = document.getElementById('onboarding-checklist');
const checklistProgressText = document.getElementById('checklist-progress-text');
const checklistProgressFill = document.getElementById('checklist-progress-fill');

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

tabLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const tabName = link.dataset.tabLink;
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

function loadStoredMap(key) {
  try {
    const value = localStorage.getItem(key);
    if (!value) return {};

    const parsed = JSON.parse(value);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
    return {};
  } catch {
    return {};
  }
}

function saveStoredMap(key, payload) {
  localStorage.setItem(key, JSON.stringify(payload));
}

function toId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function setActiveTab(tabName) {
  tabButtons.forEach((btn) => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  tabPanels.forEach((panel) => panel.classList.remove('active'));

  const targetButton = tabButtons.find((btn) => btn.dataset.tab === tabName);
  const targetPanel = document.getElementById(`tab-${tabName}`);

  if (targetButton) {
    targetButton.classList.add('active');
    targetButton.setAttribute('aria-selected', 'true');
  }
  if (targetPanel) targetPanel.classList.add('active');
}

function updateDocumentProgress() {
  if (!docProgressText || !docProgressFill) return;

  const total = documents.length;
  const completed = documents.filter((doc, index) => state.readDocs[getDocumentId(doc, index)]).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  docProgressText.textContent = `Progress baca dokumen: ${completed}/${total} selesai (${percent}%)`;
  docProgressFill.style.width = `${percent}%`;
}

function getDocumentId(doc, index) {
  return `doc-${index + 1}-${toId(doc.title)}`;
}

function renderDocuments() {
  if (!docGrid || !template) return;

  docGrid.innerHTML = '';

  documents.forEach((doc, index) => {
    const docId = getDocumentId(doc, index);
    const node = template.content.firstElementChild.cloneNode(true);

    node.querySelector('.doc-title').textContent = doc.title;
    node.querySelector('.doc-desc').textContent = doc.description;
    node.querySelector('.doc-link').href = doc.link;

    const readCheckbox = node.querySelector('.doc-read-checkbox');
    if (readCheckbox) {
      readCheckbox.checked = Boolean(state.readDocs[docId]);
      readCheckbox.addEventListener('change', (event) => {
        state.readDocs[docId] = event.target.checked;
        saveStoredMap(DOC_PROGRESS_KEY, state.readDocs);
        updateDocumentProgress();
      });
    }

    docGrid.appendChild(node);
  });

  updateDocumentProgress();
}

function updateChecklistProgress() {
  if (!checklistProgressText || !checklistProgressFill) return;

  const total = onboardingChecklistItems.length;
  const completed = onboardingChecklistItems.filter((item) => state.checklist[item.id]).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  checklistProgressText.textContent = `Progress checklist: ${completed}/${total} selesai (${percent}%)`;
  checklistProgressFill.style.width = `${percent}%`;
}

function renderChecklist() {
  if (!checklistList) return;

  checklistList.innerHTML = '';

  onboardingChecklistItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'checklist-item';

    const label = document.createElement('label');
    label.className = 'checklist-toggle';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = Boolean(state.checklist[item.id]);

    const text = document.createElement('span');
    text.textContent = item.label;

    input.addEventListener('change', (event) => {
      state.checklist[item.id] = event.target.checked;
      saveStoredMap(CHECKLIST_PROGRESS_KEY, state.checklist);
      updateChecklistProgress();
    });

    label.appendChild(input);
    label.appendChild(text);
    li.appendChild(label);
    checklistList.appendChild(li);
  });

  updateChecklistProgress();
}

function renderQuizQuestion() {
  const current = quizData[state.quizIndex];

  quizProgress.textContent = `Soal ${state.quizIndex + 1} dari ${quizData.length}`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = '';
  quizScore.textContent = `Skor benar: ${state.quizScore}/${quizData.length}`;
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
    state.quizScore += 1;
    quizFeedback.textContent = 'Jawaban benar.';
  } else {
    quizFeedback.textContent = 'Jawaban belum tepat. Pelajari lagi istilah BPAD.';
  }

  quizScore.textContent = `Skor benar: ${state.quizScore}/${quizData.length}`;
  quizNextBtn.disabled = false;
}

function renderQuizResult() {
  const percentage = Math.round((state.quizScore / quizData.length) * 100);
  quizProgress.textContent = 'Selesai';
  quizQuestion.textContent = 'Game selesai. Keren, Sobat Magang!';
  quizOptions.innerHTML = '';
  quizFeedback.textContent = 'Klik Ulangi untuk mencoba lagi.';
  quizScore.textContent = `Skor akhir: ${state.quizScore}/${quizData.length} (${percentage}%)`;
  quizNextBtn.disabled = true;
}

function resetQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.answered = false;
  renderQuizQuestion();
}

renderDocuments();
renderChecklist();
renderQuizQuestion();
