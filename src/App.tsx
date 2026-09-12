import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Calendar, 
  Users, 
  Award, 
  CheckCircle, 
  Clock, 
  ExternalLink, 
  PlusCircle, 
  Search, 
  Trash2, 
  UserCheck, 
  UserX, 
  BarChart3, 
  TrendingUp, 
  ShieldAlert, 
  GraduationCap, 
  Sparkles, 
  Send, 
  Lock, 
  Key, 
  Edit3, 
  Copy, 
  Check, 
  LogOut, 
  Shield, 
  AlertTriangle,
  Layers,
  Phone,
  Mail,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';

const initialTeacherProfile = {
  name: "د. أستاذ الذكاء الاصطناعي والتكنولوجيا",
  title: "خبير التدريس الرقمي وتطبيقات الذكاء الاصطناعي",
  bio: "أكثر من 12 عاماً في تقديم البرامج التعليمية المتقدمة، مع توظيف أحدث أدوات الذكاء الاصطناعي لتمكين الطلاب وتحقيق التفوّق الأكاديمي والمهاري.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  email: "teacher@edu-platform.com",
  phone: "+20 100 123 4567",
  whatsapp: "+20 100 123 4567",
  qualifications: [
    "دكتوراه في تكنولوجيا التعليم والذكاء الاصطناعي",
    "مدرب معتمد للتعلم المدمج وتقنيات المستقبل",
    "مؤلف أكثر من 15 كتاباً وملخصاً دراسياً في المواد التخصصية"
  ],
  skills: [
    "الذكاء الاصطناعي في التعليم",
    "التحليل والتفكير النقدي",
    "تقنيات الشرح المبسط",
    "إعداد الاختبارات الشاملة",
    "المتابعة الفردية للطلاب"
  ]
};

const initialCourses = [
  { id: 'c1', name: 'أساسيات الذكاء الاصطناعي', codePrefix: 'AI-101' },
  { id: 'c2', name: 'البرمجة بلغة بايثون للذكاء الاصطناعي', codePrefix: 'PY-201' },
  { id: 'c3', name: 'خوارزميات التعلم الآلي والبيانات', codePrefix: 'ML-301' }
];

const initialResources = [
  {
    id: 1,
    courseId: 'c1',
    title: "ملخص مادة الذكاء الاصطناعي - الفصل الأول",
    category: "ملخصات",
    type: "PDF",
    date: "2026-09-01",
    url: "https://drive.google.com",
    description: "تجميع شامل لكافة القوانين والمفاهيم الأساسية مع أسئلة تدريبية وإجاباتها النموذجية."
  },
  {
    id: 2,
    courseId: 'c1',
    title: "فيديو شرح: أساسيات الخوارزميات والشبكات العصبيّة",
    category: "فيديوهات الشرح",
    type: "Video",
    date: "2026-09-03",
    url: "https://youtube.com",
    description: "شرح مرئي مدته 45 دقيقة بأسلوب مبسط وتطبيقات عملية على الشبكات العصبية."
  },
  {
    id: 3,
    courseId: 'c2',
    title: "مذكرة تطبيقات بايثون في تحليل البيانات",
    category: "ملخصات",
    type: "PDF",
    date: "2026-09-05",
    url: "https://drive.google.com",
    description: "أمثلة برمجية جليلة وكود مفصل للتحليل الإحصائي باستخدام مكتبات Pandas و NumPy."
  },
  {
    id: 4,
    courseId: 'c3',
    title: "تسجيل المحاضرة التفاعلية الأولية - التعلم الإشرافي",
    category: "محاضرات مسجلة",
    type: "Record",
    date: "2026-09-08",
    url: "https://youtube.com",
    description: "تسجيل المباشر الكامل مع الإجابة على استفسارات الطلاب وتحليل النماذج."
  }
];

const initialSessions = [
  {
    id: 1,
    courseId: 'c1',
    title: "محاضرة مباشرة: الذكاء الاصطناعي في حل المشكلات الأكاديمية",
    date: "2026-09-15",
    time: "07:00 مساءً",
    platform: "Zoom",
    link: "https://zoom.us/j/123456789",
    status: "قادمة"
  },
  {
    id: 2,
    courseId: 'c2',
    title: "جلسة مراجعة سريعة قبل الاختبار النصفي لبايثون",
    date: "2026-09-18",
    time: "08:30 مساءً",
    platform: "Google Meet",
    link: "https://meet.google.com/abc-defg-hij",
    status: "قادمة"
  }
];

const initialQuizQuestions = [
  {
    id: 1,
    courseId: 'c1',
    question: "ما هو الهدف الرئيسي من استخدام خوارزميات الذكاء الاصطناعي في التنبؤ بالتفوق الأكاديمي؟",
    options: [
      "استبدال المعلم في الصف الدراسي",
      "تحليل بيانات الطالب وتقديم دعم مخصص ومبكر",
      "إلغاء الاختبارات التحريرية",
      "تقليل عدد الطلاب في الفصل"
    ],
    correct: 1,
    explanation: "يساعد الذكاء الاصطناعي في تحليل سلوكيات الطالب ودرجاته لتحديد نقاط القوة والضعف وتقديم مسارات تعلم مخصصة."
  },
  {
    id: 2,
    courseId: 'c1',
    question: "أي من الخيارات التالية يُعد مثالاً على التعلم الإشرافي (Supervised Learning)؟",
    options: [
      "تصنيف الصور بناءً على بيانات معنونة سابقة (Labeled Data)",
      "تجميع مقالات بدون تسميات مسبقة (Clustering)",
      "توليد نص عشوائي دون تدريب",
      "محاكاة البيئة دون أي مكافأة"
    ],
    correct: 0,
    explanation: "التعلم الإشرافي يعتمد على إدخال بيانات ومعرفة الإجابات المسبقة (Labels) لتدرّب النموذج على التنبؤ."
  },
  {
    id: 3,
    courseId: 'c2',
    question: "ما هي المكتبة الأساسية في بايثون المُستخدمة لمعالجة المصفوفات والعمليات الرياضية السريعة؟",
    options: [
      "Django",
      "NumPy",
      "Flask",
      "BeautifulSoup"
    ],
    correct: 1,
    explanation: "تعتبر مكتبة NumPy النواة الأساسية لجميع الحسابات العلمية والمصفوفات في لغة بايثون."
  }
];

const initialAccessCodes = [
  { code: "STUDENT-2026-AI", studentName: "أحمد علي محمود", courseId: "c1", status: "نشط", usageLimit: 5, usedCount: 1, expiryDate: "2026-12-31" },
  { code: "STUDENT-2026-PY", studentName: "سارة محمد إبراهيم", courseId: "c2", status: "نشط", usageLimit: 3, usedCount: 2, expiryDate: "2026-11-30" },
  { code: "STUDENT-2026-ML", studentName: "عمر خالد العتيبي", courseId: "c3", status: "معطل", usageLimit: 1, usedCount: 1, expiryDate: "2026-09-01" }
];

const initialStudents = [
  { id: 1, name: "أحمد علي محمود", email: "ahmed@example.com", phone: "01012345678", code: "STUDENT-2026-AI", courseId: "c1", status: "نشط", quizScore: 100, joinDate: "2026-08-20" },
  { id: 2, name: "سارة محمد إبراهيم", email: "sara@example.com", phone: "01122334455", code: "STUDENT-2026-PY", courseId: "c2", status: "نشط", quizScore: 66, joinDate: "2026-08-25" },
  { id: 3, name: "عمر خالد العتيبي", email: "omar@example.com", phone: "01233445566", code: "STUDENT-2026-ML", courseId: "c3", status: "معلق", quizScore: null, joinDate: "2026-09-01" }
];

export default function App() {
  const [viewMode, setViewMode] = useState('student'); // 'student' or 'admin'
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminPinError, setAdminPinError] = useState(false);
  const MASTER_PIN = "2026"; // Admin security PIN

  // Student Access Code Verification State
  const [activeAccessCode, setActiveAccessCode] = useState(null);
  const [studentCodeInput, setStudentCodeInput] = useState('');
  const [studentCodeError, setStudentCodeError] = useState('');

  // Main Dynamic Data States
  const [teacherProfile, setTeacherProfile] = useState(initialTeacherProfile);
  const [courses] = useState(initialCourses);
  const [resources, setResources] = useState(initialResources);
  const [sessions, setSessions] = useState(initialSessions);
  const [accessCodes, setAccessCodes] = useState(initialAccessCodes);
  const [students, setStudents] = useState(initialStudents);
  const [quizQuestions, setQuizQuestions] = useState(initialQuizQuestions);

  // Student UI States
  const [resourceFilter, setResourceFilter] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);

  // Admin UI Tabs & Forms
  const [adminTab, setAdminTab] = useState('profile'); // 'profile', 'courses', 'codes', 'students', 'sessions', 'quiz'
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [newResource, setNewResource] = useState({ courseId: 'c1', title: '', category: 'ملخصات', type: 'PDF', description: '', url: '' });

  const [showAddSessionModal, setShowAddSessionModal] = useState(false);
  const [newSession, setNewSession] = useState({ courseId: 'c1', title: '', date: '', time: '', platform: 'Zoom', link: '' });

  const [showAddCodeModal, setShowAddCodeModal] = useState(false);
  const [newCodeData, setNewCodeData] = useState({ studentName: '', courseId: 'c1', usageLimit: 5, expiryDate: '2026-12-31' });

  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ courseId: 'c1', question: '', opt0: '', opt1: '', opt2: '', opt3: '', correct: 0, explanation: '' });

  // Handle Admin PIN Authentication
  const handleAdminAuth = (e) => {
    e.preventDefault();
    if (adminPinInput === MASTER_PIN) {
      setIsAdminAuthenticated(true);
      setAdminPinError(false);
      setAdminPinInput('');
    } else {
      setAdminPinError(true);
    }
  };

  // Handle Student Code Verification
  const handleVerifyStudentCode = (e) => {
    e.preventDefault();
    setStudentCodeError('');
    const foundCode = accessCodes.find(c => c.code.trim().toUpperCase() === studentCodeInput.trim().toUpperCase());

    if (!foundCode) {
      setStudentCodeError('كود التفعيل غير صحيح، يرجى التأكد من الكود المالي أو التواصل مع معلم المادة.');
      return;
    }

    if (foundCode.status !== 'نشط') {
      setStudentCodeError('عذراً، هذا الكود معطل حالياً. يرجى التواصل مع المشرف لتفعيله.');
      return;
    }

    if (new Date(foundCode.expiryDate) < new Date()) {
      setStudentCodeError('منتهي الصلاحية! لقد انتهت فترة استخدام هذا الكود.');
      return;
    }

    // Activate session
    setActiveAccessCode(foundCode);
    setStudentCodeInput('');
  };

  // Generate Unique Code
  const generateUniqueCode = (studentName, courseId) => {
    const course = courses.find(c => c.id === courseId);
    const prefix = course ? course.codePrefix : 'EDU';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${randomNum}`;
  };

  // Admin Add Access Code
  const handleCreateCode = (e) => {
    e.preventDefault();
    if (!newCodeData.studentName) return;

    const generatedCode = generateUniqueCode(newCodeData.studentName, newCodeData.courseId);
    const newCode = {
      code: generatedCode,
      studentName: newCodeData.studentName,
      courseId: newCodeData.courseId,
      status: 'نشط',
      usageLimit: Number(newCodeData.usageLimit),
      usedCount: 0,
      expiryDate: newCodeData.expiryDate
    };

    setAccessCodes([newCode, ...accessCodes]);

    // Also register student record automatically
    const newStudent = {
      id: students.length + 1,
      name: newCodeData.studentName,
      email: `${newCodeData.studentName.split(' ')[0].toLowerCase()}@student.com`,
      phone: "01000000000",
      code: generatedCode,
      courseId: newCodeData.courseId,
      status: 'نشط',
      quizScore: null,
      joinDate: new Date().toISOString().split('T')[0]
    };
    setStudents([newStudent, ...students]);

    setShowAddCodeModal(false);
    setNewCodeData({ studentName: '', courseId: 'c1', usageLimit: 5, expiryDate: '2026-12-31' });
  };

  // Copy code to clipboard helper
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    const activeQuestions = quizQuestions.filter(q => !activeAccessCode || q.courseId === activeAccessCode.courseId);

    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score += 1;
      }
    });

    const finalPercent = Math.round((score / (activeQuestions.length || 1)) * 100);
    setQuizScore(finalPercent);
    setQuizSubmitted(true);

    // Update score in active student record
    if (activeAccessCode) {
      setStudents(students.map(s => {
        if (s.code === activeAccessCode.code) {
          return { ...s, quizScore: finalPercent };
        }
        return s;
      }));
    }
  };

  // Add Resource Handler
  const handleAddResource = (e) => {
    e.preventDefault();
    if (!newResource.title) return;
    setResources([{
      id: Date.now(),
      ...newResource,
      date: new Date().toISOString().split('T')[0]
    }, ...resources]);
    setShowAddResourceModal(false);
    setNewResource({ courseId: 'c1', title: '', category: 'ملخصات', type: 'PDF', description: '', url: '' });
  };

  // Add Session Handler
  const handleAddSession = (e) => {
    e.preventDefault();
    if (!newSession.title || !newSession.date) return;
    setSessions([{
      id: Date.now(),
      ...newSession,
      status: 'قادمة'
    }, ...sessions]);
    setShowAddSessionModal(false);
    setNewSession({ courseId: 'c1', title: '', date: '', time: '', platform: 'Zoom', link: '' });
  };

  // Add Quiz Question
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.question) return;
    setQuizQuestions([...quizQuestions, {
      id: Date.now(),
      courseId: newQuestion.courseId,
      question: newQuestion.question,
      options: [newQuestion.opt0, newQuestion.opt1, newQuestion.opt2, newQuestion.opt3],
      correct: Number(newQuestion.correct),
      explanation: newQuestion.explanation
    }]);
    setShowAddQuestionModal(false);
    setNewQuestion({ courseId: 'c1', question: '', opt0: '', opt1: '', opt2: '', opt3: '', correct: 0, explanation: '' });
  };

  // Code Status Toggle
  const toggleCodeStatus = (codeStr) => {
    setAccessCodes(accessCodes.map(c => {
      if (c.code === codeStr) {
        return { ...c, status: c.status === 'نشط' ? 'معطل' : 'نشط' };
      }
      return c;
    }));
  };

  // Filtered lists for Student View
  const studentCourseId = activeAccessCode ? activeAccessCode.courseId : null;
  const filteredResources = resources.filter(res => {
    const matchesCourse = !studentCourseId || res.courseId === studentCourseId;
    const matchesCategory = resourceFilter === 'الكل' || res.category === resourceFilter;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesCategory && matchesSearch;
  });

  const filteredSessions = sessions.filter(s => !studentCourseId || s.courseId === studentCourseId);
  const filteredQuizQuestions = quizQuestions.filter(q => !studentCourseId || q.courseId === studentCourseId);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* ========================================================================= */}
      {/* HEADER NAVBAR                                                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 bg-clip-text text-transparent">
                  منصتي التعليمية الذكية
                </span>
                <p className="text-xs text-slate-500 font-medium">نظام التعلم الرقمي المباشر والأكواد الخاصة</p>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
              <button
                onClick={() => setViewMode('student')}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  viewMode === 'student'
                    ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>واجهة الطلاب</span>
              </button>

              <button
                onClick={() => setViewMode('admin')}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  viewMode === 'admin'
                    ? 'bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Shield className="w-4 h-4 text-amber-400" />
                <span>لوحة تحكم المشرف (محمية)</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* STUDENT VIEW SECTION                                                     */}
      {/* ========================================================================= */}
      {viewMode === 'student' && (
        <main className="space-y-16 pb-24">
          
          {}
          <section id="about" className="pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 rounded-3xl text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Teacher Avatar */}
                  <div className="lg:col-span-4 flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full ring-4 ring-indigo-500/40 p-2 overflow-hidden shadow-2xl bg-indigo-950">
                        <img 
                          src={teacherProfile.avatar} 
                          alt={teacherProfile.name} 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="absolute bottom-2 right-2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md flex items-center space-x-1 space-x-reverse">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                        <span>معلم المادة متاح</span>
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-white mb-1">{teacherProfile.name}</h2>
                    <p className="text-indigo-300 text-xs font-semibold">{teacherProfile.title}</p>
                  </div>

                  {/* Teacher Bio & Info */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <span className="inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-semibold mb-3 border border-indigo-400/30">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>منصة التعلم الذكي والمحتوى المباشر</span>
                      </span>
                      <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
                        مرحباً بكم في منصتي التعليمية الرقمية
                      </h1>
                      <p className="mt-3 text-indigo-100/90 text-sm leading-relaxed">
                        {teacherProfile.bio}
                      </p>
                    </div>

                    {/* Qualifications Grid */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">المؤهلات والخبرات الأكاديمية</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-indigo-50">
                        {teacherProfile.qualifications.map((q, idx) => (
                          <li key={idx} className="flex items-center space-x-2 space-x-reverse bg-white/5 p-2.5 rounded-xl border border-white/10">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Info Badges */}
                    <div className="pt-2 flex flex-wrap gap-3">
                      <a href={`tel:${teacherProfile.phone}`} className="flex items-center space-x-2 space-x-reverse bg-indigo-600/40 hover:bg-indigo-600/60 px-3.5 py-1.5 rounded-xl border border-indigo-400/30 text-xs text-indigo-100 font-semibold transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{teacherProfile.phone}</span>
                      </a>
                      <a href={`mailto:${teacherProfile.email}`} className="flex items-center space-x-2 space-x-reverse bg-purple-600/40 hover:bg-purple-600/60 px-3.5 py-1.5 rounded-xl border border-purple-400/30 text-xs text-purple-100 font-semibold transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span>{teacherProfile.email}</span>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl border border-amber-200 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center space-x-2 space-x-reverse text-amber-800 font-bold text-sm mb-1">
                    <Key className="w-5 h-5 text-amber-600" />
                    <span>تفعيل كود الوصول الفريد (Student Access Code)</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    أدخل الكود الخاص بك الذي حصلت عليه من المعلم لفتح المحتوى التعليمي والدروس والاختبارات المخصصة لك.
                  </p>
                </div>

                {activeAccessCode ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-900">الكود مفعّل: {activeAccessCode.code}</div>
                        <div className="text-[11px] text-emerald-700">
                          الطالب: {activeAccessCode.studentName} | المادة: {courses.find(c => c.id === activeAccessCode.courseId)?.name}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveAccessCode(null)}
                      className="text-xs text-rose-600 font-bold hover:underline px-2"
                    >
                      إلغاء التفعيل
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVerifyStudentCode} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                    <input
                      type="text"
                      required
                      value={studentCodeInput}
                      onChange={(e) => setStudentCodeInput(e.target.value)}
                      placeholder="أدخل الكود هنا (مثال: AI-101-8492)"
                      className="px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-72 uppercase"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2 space-x-reverse"
                    >
                      <Key className="w-4 h-4" />
                      <span>تفعيل الكود</span>
                    </button>
                  </form>
                )}
              </div>

              {studentCodeError && (
                <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center space-x-2 space-x-reverse">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{studentCodeError}</span>
                </div>
              )}
            </div>
          </section>

          {}
          <section id="resources" className="scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="flex items-center space-x-2 space-x-reverse text-indigo-600 font-bold text-sm mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>المكتبة التعليمية الرقمية</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">الملخصات والفيديوهات والمحاضرات</h2>
                  <p className="text-slate-500 text-xs mt-1">
                    {activeAccessCode 
                      ? `تعرض الآن المواد المخصصة لك المندرجة تحت كود (${activeAccessCode.code})`
                      : 'يمكنك إدخال كود التفعيل أعلاه لتصفح المواد الخاصة بك.'}
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 absolute top-3.5 right-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن ملف أو فيديو..."
                    className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
                {['الكل', 'ملخصات', 'فيديوهات الشرح', 'محاضرات مسجلة'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setResourceFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      resourceFilter === cat
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Resource Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.length === 0 ? (
                  <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                    <p className="text-slate-500 text-xs">لا توجد مواد تعليمية مطابقة حالياً.</p>
                  </div>
                ) : (
                  filteredResources.map((res) => (
                    <div key={res.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                            res.category === 'ملخصات' 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : res.category === 'فيديوهات الشرح'
                              ? 'bg-purple-50 text-purple-700 border border-purple-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {res.category}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center space-x-1 space-x-reverse">
                            <Clock className="w-3 h-3" />
                            <span>{res.date}</span>
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-800 mb-2">{res.title}</h3>
                        <p className="text-slate-600 text-xs line-clamp-3 mb-4 leading-relaxed">{res.description}</p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500 flex items-center space-x-1 space-x-reverse">
                          {res.type === 'PDF' ? <FileText className="w-4 h-4 text-red-500" /> : <Video className="w-4 h-4 text-indigo-500" />}
                          <span>صيغة: {res.type}</span>
                        </span>
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 space-x-reverse px-3.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white transition-colors text-xs font-bold"
                        >
                          <span>عرض / تحميل</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </section>

          {}
          <section id="schedule" className="bg-slate-100 py-16 border-y border-slate-200/60 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center space-x-2 space-x-reverse text-indigo-600 font-bold text-xs mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>المواعيد والروابط المباشرة</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">جدول المحاضرات التفاعلية</h2>
                <p className="text-slate-500 text-xs mt-1">انضم للجلسات مباشرة عبر Zoom أو Google Meet بكود التفعيل الخاص بك.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSessions.map((session) => (
                  <div key={session.id} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                          {session.status}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 rounded-lg text-slate-600">
                          منصة: {session.platform}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-800 mb-3">{session.title}</h3>

                      <div className="space-y-2 text-xs text-slate-600 mb-6">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Calendar className="w-4 h-4 text-indigo-600" />
                          <span>التاريخ: {session.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Clock className="w-4 h-4 text-indigo-600" />
                          <span>التوقيت: {session.time}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={session.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold text-xs text-center flex items-center justify-center space-x-2 space-x-reverse shadow-md transition-all"
                    >
                      <span>الانضمام للمحاضرة الآن</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {}
          <section id="quiz" className="scroll-mt-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 space-x-reverse text-indigo-600 font-bold text-xs mb-1">
                  <Award className="w-4 h-4" />
                  <span>التقييم ومتابعة المستوى</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">الاختبار التفاعلي الذكي</h2>
                <p className="text-slate-500 text-xs mt-1">اختبر معلوماتك الآن وحصّل نتيجتك الفورية للتقييم الأكاديمي.</p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 md:p-8">
                
                {quizSubmitted ? (
                  <div className="text-center py-8 space-y-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-indigo-50 flex items-center justify-center border-4 border-indigo-200 shadow-inner">
                      <span className="text-3xl font-extrabold text-indigo-700">{quizScore}%</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {quizScore >= 80 ? 'ممتاز! أداء رائع جداً 🌟' : quizScore >= 50 ? 'جيد جداً! بإمكانك التحسن أكثر 👏' : 'يحتاج لمراجعة الملخصات مجدداً 📚'}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1">
                        تم تسجيل هذه النتيجة وتحديث مستواك في نظام المعلم.
                      </p>
                    </div>

                    <button
                      onClick={() => { setQuizSubmitted(false); setSelectedAnswers({}); }}
                      className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 transition-colors"
                    >
                      إعادة الاختبار
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuizSubmit} className="space-y-8">
                    {filteredQuizQuestions.map((q, qIdx) => (
                      <div key={q.id} className="space-y-3 pb-6 border-b border-slate-100 last:border-b-0">
                        <h4 className="font-bold text-sm text-slate-800 flex items-center space-x-2 space-x-reverse">
                          <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-bold">
                            {qIdx + 1}
                          </span>
                          <span>{q.question}</span>
                        </h4>

                        <div className="space-y-2 pr-8">
                          {q.options.map((option, optIdx) => (
                            <label
                              key={optIdx}
                              className={`flex items-center space-x-3 space-x-reverse p-3 rounded-xl border cursor-pointer transition-all ${
                                selectedAnswers[qIdx] === optIdx
                                  ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-medium shadow-sm'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`question-${qIdx}`}
                                checked={selectedAnswers[qIdx] === optIdx}
                                onChange={() => setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx })}
                                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                              />
                              <span className="text-xs">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={Object.keys(selectedAnswers).length < filteredQuizQuestions.length}
                        className={`w-full py-3.5 rounded-xl font-bold text-xs text-white shadow-lg transition-all ${
                          Object.keys(selectedAnswers).length < filteredQuizQuestions.length
                            ? 'bg-slate-300 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
                        }`}
                      >
                        تسليم الإجابات وإظهار النتيجة
                      </button>
                    </div>
                  </form>
                )}

              </div>

            </div>
          </section>

        </main>
      )}

      {/* ========================================================================= */}
      {/* ADMIN DASHBOARD SECTION (PROTECTED WITH MASTER PIN)                      */}
      {/* ========================================================================= */}
      {viewMode === 'admin' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {!isAdminAuthenticated ? (
            /* Security Lock Screen */
            <div className="max-w-md mx-auto my-12 bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto border border-amber-200">
                <Lock className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">منطقة المشرف المحمية</h2>
                <p className="text-xs text-slate-500 mt-1">
                  يرجى إدخال رمز الأمان الرئيسي للمعلم (PIN) للدخول وإدارة المنصة والأكواد والتعديلات.
                </p>
              </div>

              <form onSubmit={handleAdminAuth} className="space-y-4">
                <div>
                  <input
                    type="password"
                    required
                    value={adminPinInput}
                    onChange={(e) => setAdminPinInput(e.target.value)}
                    placeholder="أدخل كود الأمان الرئيسي (رمز افتراضي: 2026)"
                    className="w-full text-center px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {adminPinError && (
                    <p className="text-xs text-rose-600 font-bold mt-2">رمز الأمان غير صحيح! يرجى المحاولة مجدداً.</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>تأكيد الهوية والدخول</span>
                </button>
              </form>
            </div>
          ) : (
            /* Admin Panel Dashboard */
            <div className="space-y-8">
              
              {/* Top Banner */}
              <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-800">
                <div>
                  <div className="flex items-center space-x-2 space-x-reverse text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
                    <Shield className="w-4 h-4" />
                    <span>لوحة التحكم الرئيسية للمشرف (الصلاحيات الكاملة)</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-extrabold">{teacherProfile.name}</h1>
                  <p className="text-slate-400 text-xs mt-1">توليد أكواد الطلاب، إدارة المواد والروابط، وتحديث بياناتك الشخصية بسهولة.</p>
                </div>

                <button
                  onClick={() => setIsAdminAuthenticated(false)}
                  className="px-4 py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 text-xs font-bold rounded-xl border border-rose-500/30 flex items-center space-x-2 space-x-reverse transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>قفل لوحة التحكم</span>
                </button>
              </div>

              {/* Admin Tabs Bar */}
              <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
                {[
                  { id: 'profile', label: 'تعديل الملف الشخصي', icon: Edit3 },
                  { id: 'codes', label: 'أكواد تفعيل الطلاب (Access Codes)', icon: Key },
                  { id: 'courses', label: 'المواد والمحتوى التعليمي', icon: BookOpen },
                  { id: 'sessions', label: 'المحاضرات والروابط المباشرة', icon: Calendar },
                  { id: 'quiz', label: 'إدارة أسئلة الاختبارات', icon: Award },
                  { id: 'students', label: 'متابعة الطلاب والنتائج', icon: Users }
                ].map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setAdminTab(tab.id)}
                      className={`flex items-center space-x-2 space-x-reverse px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        adminTab === tab.id
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: EDIT PROFILE */}
              {adminTab === 'profile' && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-3">تعديل بيانات الملف الشخصي والخبرات</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">اسم المعلم / المحاضر</label>
                      <input
                        type="text"
                        value={teacherProfile.name}
                        onChange={(e) => setTeacherProfile({ ...teacherProfile, name: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">المسمى الوظيفي</label>
                      <input
                        type="text"
                        value={teacherProfile.title}
                        onChange={(e) => setTeacherProfile({ ...teacherProfile, title: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        value={teacherProfile.email}
                        onChange={(e) => setTeacherProfile({ ...teacherProfile, email: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">رقم الهاتف / الواتساب</label>
                      <input
                        type="text"
                        value={teacherProfile.phone}
                        onChange={(e) => setTeacherProfile({ ...teacherProfile, phone: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">رابط الصورة الشخصية</label>
                      <input
                        type="text"
                        value={teacherProfile.avatar}
                        onChange={(e) => setTeacherProfile({ ...teacherProfile, avatar: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">النبذة التعريفية (Bio)</label>
                      <textarea
                        rows={3}
                        value={teacherProfile.bio}
                        onChange={(e) => setTeacherProfile({ ...teacherProfile, bio: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border rounded-xl leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>يتم تحديث الواجهة العامة تلقائياً بمجرد تعديل القيم هنا.</span>
                  </div>
                </div>
              )}

              {/* TAB 2: ACCESS CODES MANAGEMENT */}
              {adminTab === 'codes' && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">نظام أكواد التفعيل للطلاب (Student Access Codes)</h3>
                      <p className="text-xs text-slate-500 mt-0.5">أنشئ أكواداً فريدة تمنح الطالب صلاحية الوصول للمادة والدروس المحددة.</p>
                    </div>

                    <button
                      onClick={() => setShowAddCodeModal(true)}
                      className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-2 space-x-reverse"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>إنشاء كود تفعيل جديد</span>
                    </button>
                  </div>

                  {/* Codes Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-xs">
                      <thead className="bg-slate-50 text-slate-600 border-b uppercase font-semibold">
                        <tr>
                          <th className="p-3">الكود الفريد</th>
                          <th className="p-3">اسم الطالب</th>
                          <th className="p-3">المادة</th>
                          <th className="p-3">حالة الكود</th>
                          <th className="p-3">تاريخ الانتهاء</th>
                          <th className="p-3 text-center">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {accessCodes.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80">
                            <td className="p-3 font-mono font-bold text-indigo-700">
                              <span className="bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                                {item.code}
                              </span>
                            </td>
                            <td className="p-3 font-bold text-slate-800">{item.studentName}</td>
                            <td className="p-3 font-medium text-slate-600">
                              {courses.find(c => c.id === item.courseId)?.name}
                            </td>
                            <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                                item.status === 'نشط' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="p-3 text-slate-500">{item.expiryDate}</td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                                <button
                                  onClick={() => copyToClipboard(item.code)}
                                  className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700"
                                  title="نسخ الكود"
                                >
                                  {copiedCode === item.code ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                                <button
                                  onClick={() => toggleCodeStatus(item.code)}
                                  className={`p-1.5 rounded-lg border text-xs font-bold ${
                                    item.status === 'نشط' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  }`}
                                >
                                  {item.status === 'نشط' ? 'تعطيل' : 'تفعيل'}
                                </button>
                                <button
                                  onClick={() => setAccessCodes(accessCodes.filter(c => c.code !== item.code))}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg border border-rose-200"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: CONTENT & MATERIALS */}
              {adminTab === 'courses' && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">إدارة مواد المكتبة الرقمية</h3>
                      <p className="text-xs text-slate-500 mt-0.5">رفع وتحديث روابط الملفات والفيديوهات والمحاضرات.</p>
                    </div>

                    <button
                      onClick={() => setShowAddResourceModal(true)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-2 space-x-reverse"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>إضافة ملف / فيديو جديد</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resources.map((res) => (
                      <div key={res.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 space-x-reverse mb-1">
                            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                              {courses.find(c => c.id === res.courseId)?.name}
                            </span>
                            <span className="text-[10px] text-slate-400">{res.category}</span>
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm">{res.title}</h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{res.description}</p>
                        </div>
                        <button
                          onClick={() => setResources(resources.filter(r => r.id !== res.id))}
                          className="text-rose-500 hover:text-rose-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SESSIONS & SCHEDULE */}
              {adminTab === 'sessions' && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">جدول المحاضرات والروابط المباشرة</h3>
                      <p className="text-xs text-slate-500 mt-0.5">مشاركة روابط Zoom و Google Meet مع التوقيت والمنصة.</p>
                    </div>

                    <button
                      onClick={() => setShowAddSessionModal(true)}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-2 space-x-reverse"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>جدولة محاضرة جديدة</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {sessions.map((sess) => (
                      <div key={sess.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm mb-1">{sess.title}</h4>
                          <p className="text-slate-500">
                            التاريخ: {sess.date} | الوقت: {sess.time} | المنصة: {sess.platform}
                          </p>
                        </div>
                        <button
                          onClick={() => setSessions(sessions.filter(s => s.id !== sess.id))}
                          className="text-rose-500 hover:text-rose-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: QUIZ QUESTIONS */}
              {adminTab === 'quiz' && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">إدارة أسئلة الاختبارات التفاعلية</h3>
                      <p className="text-xs text-slate-500 mt-0.5">إضافة أسئلة اختيار من متعدد مع التفسير والحل الصحيح.</p>
                    </div>

                    <button
                      onClick={() => setShowAddQuestionModal(true)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-2 space-x-reverse"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>إضافة سؤال جديد</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {quizQuestions.map((q, qIdx) => (
                      <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-bold text-slate-800 text-sm">{qIdx + 1}. {q.question}</h4>
                          <button
                            onClick={() => setQuizQuestions(quizQuestions.filter(item => item.id !== q.id))}
                            className="text-rose-500 hover:text-rose-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-slate-500">
                          الإجابة الصحيحة: الخيار رقم ({q.correct + 1}) - {q.options[q.correct]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: STUDENTS ANALYTICS */}
              {adminTab === 'students' && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-3">سجل الطلاب المسجلين ودرجات الاختبارات</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-xs">
                      <thead className="bg-slate-50 text-slate-600 border-b uppercase font-semibold">
                        <tr>
                          <th className="p-3">الطالب</th>
                          <th className="p-3">الكود المفعل</th>
                          <th className="p-3">المادة</th>
                          <th className="p-3">نتيجة الاختبار</th>
                          <th className="p-3">تاريخ الانضمام</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {students.map((s) => (
                          <tr key={s.id} className="hover:bg-slate-50/80">
                            <td className="p-3 font-bold text-slate-800">{s.name}</td>
                            <td className="p-3 font-mono font-bold text-indigo-700">{s.code}</td>
                            <td className="p-3 font-medium text-slate-600">{courses.find(c => c.id === s.courseId)?.name}</td>
                            <td className="p-3 font-bold">
                              {s.quizScore !== null ? (
                                <span className={s.quizScore >= 70 ? 'text-emerald-600' : 'text-amber-600'}>
                                  {s.quizScore}%
                                </span>
                              ) : (
                                <span className="text-slate-400 font-normal">لم يختبر بعد</span>
                              )}
                            </td>
                            <td className="p-3 text-slate-400">{s.joinDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* ADMIN MODALS (ADD ACCESS CODE, RESOURCE, SESSION, QUIZ QUESTION)          */}
      {/* ========================================================================= */}
      
      {/* Modal: Create Access Code */}
      {showAddCodeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-bold text-slate-800 text-base border-b pb-2">توليد كود تفعيل فريد لطالب جديد</h3>
            
            <form onSubmit={handleCreateCode} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">اسم الطالب المخصص له الكود</label>
                <input
                  type="text"
                  required
                  value={newCodeData.studentName}
                  onChange={(e) => setNewCodeData({ ...newCodeData, studentName: e.target.value })}
                  placeholder="مثال: محمد عبد الرحمن"
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">المادة الدراسية المخصصة</label>
                <select
                  value={newCodeData.courseId}
                  onChange={(e) => setNewCodeData({ ...newCodeData, courseId: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                >
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">تاريخ انتهاء صلاحية الكود</label>
                <input
                  type="date"
                  value={newCodeData.expiryDate}
                  onChange={(e) => setNewCodeData({ ...newCodeData, expiryDate: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => setShowAddCodeModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700"
                >
                  توليد الكود الآن
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Resource */}
      {showAddResourceModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-bold text-slate-800 text-base border-b pb-2">إضافة ملف أو فيديو للمكتبة</h3>
            <form onSubmit={handleAddResource} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">المادة المخصصة</label>
                <select
                  value={newResource.courseId}
                  onChange={(e) => setNewResource({ ...newResource, courseId: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                >
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">عنوان المادة / الدرس</label>
                <input
                  type="text"
                  required
                  value={newResource.title}
                  onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">التصنيف</label>
                  <select
                    value={newResource.category}
                    onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  >
                    <option value="ملخصات">ملخصات</option>
                    <option value="فيديوهات الشرح">فيديوهات الشرح</option>
                    <option value="محاضرات مسجلة">محاضرات مسجلة</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">نوع الملف</label>
                  <select
                    value={newResource.type}
                    onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  >
                    <option value="PDF">PDF</option>
                    <option value="Video">Video</option>
                    <option value="Record">Record</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">رابط Google Drive / YouTube</label>
                <input
                  type="url"
                  value={newResource.url}
                  onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">وصف مختصر</label>
                <textarea
                  rows={2}
                  value={newResource.description}
                  onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => setShowAddResourceModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700"
                >
                  حفظ في المكتبة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Session */}
      {showAddSessionModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-bold text-slate-800 text-base border-b pb-2">جدولة محاضرة زووم / جوجل ميت جديدة</h3>
            <form onSubmit={handleAddSession} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">عنوان المحاضرة</label>
                <input
                  type="text"
                  required
                  value={newSession.title}
                  onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">التاريخ</label>
                  <input
                    type="date"
                    required
                    value={newSession.date}
                    onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">التوقيت</label>
                  <input
                    type="text"
                    required
                    value={newSession.time}
                    onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                    placeholder="مثال: 08:00 مساءً"
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">رابط الانضمام (Zoom / Google Meet)</label>
                <input
                  type="url"
                  value={newSession.link}
                  onChange={(e) => setNewSession({ ...newSession, link: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => setShowAddSessionModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700"
                >
                  حفظ المحاضرة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Quiz Question */}
      {showAddQuestionModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-bold text-slate-800 text-base border-b pb-2">إضافة سؤال اختبار جديد</h3>
            <form onSubmit={handleAddQuestion} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">نص السؤال</label>
                <input
                  type="text"
                  required
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="الخيار الأول"
                  value={newQuestion.opt0}
                  onChange={(e) => setNewQuestion({ ...newQuestion, opt0: e.target.value })}
                  className="p-2.5 bg-slate-50 border rounded-xl"
                />
                <input
                  type="text"
                  required
                  placeholder="الخيار الثاني"
                  value={newQuestion.opt1}
                  onChange={(e) => setNewQuestion({ ...newQuestion, opt1: e.target.value })}
                  className="p-2.5 bg-slate-50 border rounded-xl"
                />
                <input
                  type="text"
                  required
                  placeholder="الخيار الثالث"
                  value={newQuestion.opt2}
                  onChange={(e) => setNewQuestion({ ...newQuestion, opt2: e.target.value })}
                  className="p-2.5 bg-slate-50 border rounded-xl"
                />
                <input
                  type="text"
                  required
                  placeholder="الخيار الرابع"
                  value={newQuestion.opt3}
                  onChange={(e) => setNewQuestion({ ...newQuestion, opt3: e.target.value })}
                  className="p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">رقم الإجابة الصحيحة</label>
                <select
                  value={newQuestion.correct}
                  onChange={(e) => setNewQuestion({ ...newQuestion, Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                >
                  <option value={0}>الخيار الأول</option>
                  <option value={1}>الخيار الثاني</option>
                  <option value={2}>الخيار الثالث</option>
                  <option value={3}>الخيار الرابع</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">التوضيح والشرح (يظهر بعد التسليم)</label>
                <textarea
                  rows={2}
                  value={newQuestion.explanation}
                  onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => setShowAddQuestionModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700"
                >
                  إضافة السؤال
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-slate-200">منصتي التعليمية الذكية المحمية © 2026</span>
          </div>
          <p className="text-center md:text-right text-slate-500">
            تم التحديث بنظام أكواد التفعيل الفريدة وحماية المشرف الكاملة.
          </p>
        </div>
      </footer>

    </div>
  );
}
