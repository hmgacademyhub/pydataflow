/* ═══════════════════════════════════════════════════════════
   PyData-Flow Pro v3 — Enterprise Application Engine
   All pre-existing features preserved + 15 new enhancements
   ═══════════════════════════════════════════════════════════ */

// ═══ STATE ═══
let pyodide=null,currentLessonId=null,currentPage='home',sessionStartTime=Date.now(),sessionTimerInterval=null,executionHistory=[],sidebarOpen=false,mobileMenuOpen=false;
let editorFontSize=14,isFullscreen=false;
let pomodoroTime=25*60,pomodoroRunning=false,pomodoroInterval=null,pomodoroIsBreak=false;
let glossaryFilter='';
let totalStudySeconds=parseInt(localStorage.getItem('total_study_seconds')||'0');
// ═══ ABOUT PAGE DATA (from PyLearnDS) ═══
const PROJECTS=[
  {name:"Student At-Risk Predictor",url:"student-at-risk-predictor.streamlit.app",desc:"ML model identifying at-risk students from academic and behavioural data"},
  {name:"Student Performance Tracker",url:"adewale-student-performance-tracker.streamlit.app",desc:"Track, visualise and analyse student academic records"},
  {name:"CBT Pro System",url:"cssadewale.github.io/cbt-system",desc:"Full computer-based testing system for schools"},
  {name:"Insurance Claim Prediction",url:"adewale-insurance-claim-prediction.streamlit.app",desc:"ML classifier predicting insurance claim likelihood"},
  {name:"Bank Customer Churn",url:"adewale-bank-customer-churn-prediction.streamlit.app",desc:"Predict which bank customers are likely to leave"},
  {name:"Fake News Detector",url:"adewale-fake-news-detector.streamlit.app",desc:"NLP model detecting misinformation using TF-IDF and ML"},
  {name:"SwiftChain Delivery",url:"adewale-swiftchain-delivery-prediction.streamlit.app",desc:"Predict delivery delays in supply chain logistics"},
  {name:"Burnout Prediction",url:"adewale-burnout-prediction.streamlit.app",desc:"Predict employee burnout risk from workplace data"},
  {name:"Study Plan Generator",url:"student-study-plan-generator.streamlit.app",desc:"Auto-generate personalised student study plans"},
  {name:"CBT Question Bank",url:"adewale-cbt-question-bank.streamlit.app",desc:"Structured question bank for CBT exam preparation"},
  {name:"Income Level Prediction",url:"adewale-income-level-prediction.streamlit.app",desc:"Classify income level from demographic data"},
  {name:"Yakub Promotion Prediction",url:"yakub-promotion-prediction.streamlit.app",desc:"HR model predicting employee promotion probability"}
];
const CERTS=[
  {icon:"🎓",title:"DSN x 3MTT x Google.org DeepTech_Ready",org:"DSML Track - Cohort 3 (2025-2026)"},
  {icon:"☁",title:"DSN x Microsoft Elevate AI Developers",org:"AI-900 Track - Cohort 1 (2025-2026)"},
  {icon:"🎯",title:"SkillBuild Hub Ambassador",org:"Cohort 4 (2025-2026)"},
  {icon:"🤖",title:"3MTT Data Science Programme",org:"Federal Government / 3MTT (2025)"}
];
const TECH_SKILLS=["Python","Pandas","NumPy","Scikit-learn","Matplotlib","Seaborn","SHAP","XGBoost","Gradient Boosting","Random Forest","SMOTE","TF-IDF","NLTK / VADER","Streamlit","FastAPI","Hugging Face Spaces","Power BI","Tableau","SQL","Git / GitHub","Supabase","HTML / CSS","Vanilla JS","Pyodide / WebAssembly"];
const HMG_SUBJECTS=["Mathematics","Further Mathematics","Physics","Chemistry","Biology","English Language","Literature","Computer Science","Economics","Commerce","WAEC","NECO","BECE / Junior WAEC","UTME / JAMB","Post-UTME","IGCSE","IELTS","JUPEB","SAT","Common Entrance"];


// ═══ XP SYSTEM ═══
const XP_ACTIONS={run:5,complete:50,quiz_correct:25,quiz_wrong:5,note:10,challenge:30,bookmark:2};

function updateXPPill(){const p=document.getElementById('xp-pill');if(p)p.textContent='⭐ '+getXP()+' XP';}
function addXP(action){let xp=parseInt(localStorage.getItem('xp')||'0');xp+=XP_ACTIONS[action]||0;localStorage.setItem('xp',String(xp));updateXPPill();return xp;}
function getXP(){return parseInt(localStorage.getItem('xp')||'0');}
function getLevel(){const xp=getXP();if(xp<100)return{lv:1,name:'Novice',next:100};if(xp<300)return{lv:2,name:'Learner',next:300};if(xp<600)return{lv:3,name:'Practitioner',next:600};if(xp<1000)return{lv:4,name:'Analyst',next:1000};if(xp<1500)return{lv:5,name:'Specialist',next:1500};return{lv:6,name:'Expert',next:9999};}

// ═══ COMMON PYTHON ERROR EXPLANATIONS ═══
const ERROR_HINTS=[
{pat:/NameError: name '(\w+)' is not defined/,fix:m=>`Variable "${m[1]}" doesn't exist yet. Did you spell it right? Make sure you defined it before using it.`},
{pat:/SyntaxError: invalid syntax/,fix:()=>'Check for missing colons (:) after if/for/def, unmatched quotes, or missing parentheses.'},
{pat:/IndentationError/,fix:()=>'Python requires consistent indentation (4 spaces). Check that your code lines are properly aligned.'},
{pat:/TypeError: unsupported operand/,fix:()=>"You're trying to do math with incompatible types (e.g., string + number). Use int() or str() to convert."},
{pat:/FileNotFoundError/,fix:()=>"File 'data.csv' not found. Load a dataset first from the Dataset Hub above."},
{pat:/KeyError: '(\w+)'/,fix:m=>`Column "${m[1]}" doesn't exist in your DataFrame. Check df.columns to see available columns.`},
{pat:/ModuleNotFoundError: No module named '(\w+)'/,fix:m=>`Module "${m[1]}" is not available. Only pandas, numpy, matplotlib, json, math, collections are pre-loaded.`},
{pat:/IndexError: list index out of range/,fix:()=>'You tried to access an index that doesn\'t exist. Remember Python starts counting at 0.'},
{pat:/ValueError/,fix:()=>'A function received an argument of the right type but wrong value. Check your inputs.'},
{pat:/ZeroDivisionError/,fix:()=>'You tried to divide by zero. Add a check: if denominator != 0.'},
];
function getErrorHint(errMsg){for(const h of ERROR_HINTS){const m=errMsg.match(h.pat);if(m)return h.fix(m);}return null;}

// ═══ ROUTER ═══
function navigateTo(page,lessonId){
    currentPage=page;
    document.querySelectorAll('.page').forEach(p=>p.style.display='none');
    const el=document.getElementById('page-'+page);if(el)el.style.display='block';
    document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
    document.querySelectorAll(`.nav-link[data-page="${page}"]`).forEach(l=>l.classList.add('active'));
    if(mobileMenuOpen)toggleMobileMenu();
    if(page==='home')renderHomePage();
    if(page==='curriculum')renderCurriculumPage();
    if(page==='lab'){renderLabPage();if(lessonId)loadLesson(lessonId);}
    if(page==='challenges')renderChallengesPage();
    if(page==='sandbox')renderSandboxPage();
    if(page==='cheatsheet')renderCheatsheetPage();
    if(page==='glossary')renderGlossaryPage();
    if(page==='resources')renderResourcesPage();
    if(page==='about')renderAboutPage();
    window.scrollTo({top:0,behavior:'smooth'});
}
function startLesson(id){navigateTo('lab',id);}

// ═══ INIT ═══
window.onload=()=>{
    detectSystemTheme();startSessionTimer();setupKeyboardShortcuts();restoreExecutionHistory();
    recordStudyDay();renderHomePage();
    document.getElementById('page-home').style.display='block';
    updateXPPill();
    setTimeout(()=>{if(!pyodide)initPyodide();},2000);
    // Accumulate study time
    setInterval(()=>{totalStudySeconds++;if(totalStudySeconds%60===0)localStorage.setItem('total_study_seconds',String(totalStudySeconds));},1000);
};

// ═══ STUDY STREAK ═══
function recordStudyDay(){
    const today=new Date().toISOString().slice(0,10);
    let sd=JSON.parse(localStorage.getItem('study_streak')||'{"days":[],"current":0}');
    if(!sd.days.includes(today)){
        sd.days.push(today);
        const sorted=[...new Set(sd.days)].sort().reverse();
        let streak=1;
        for(let i=1;i<sorted.length;i++){
            const a=new Date(sorted[i-1]+'T00:00:00'),b=new Date(sorted[i]+'T00:00:00');
            if(Math.round((a-b)/864e5)===1)streak++;else break;
        }
        sd.current=streak;localStorage.setItem('study_streak',JSON.stringify(sd));
    }
}
function getStreak(){return JSON.parse(localStorage.getItem('study_streak')||'{"current":0}').current||0;}
function getStudyDays(){const d=JSON.parse(localStorage.getItem('study_streak')||'{"days":[]}');return d.days||[];}

// ═══ BOOKMARKS ═══
function toggleBookmark(id){
    let bm=JSON.parse(localStorage.getItem('bookmarks')||'[]');
    if(bm.includes(id))bm=bm.filter(x=>x!==id);else{bm.push(id);addXP('bookmark');}
    localStorage.setItem('bookmarks',JSON.stringify(bm));
    if(currentPage==='lab')renderLabSidebar();
    showToast(bm.includes(id)?'⭐ Bookmarked!':'Bookmark removed','info');
}
function isBookmarked(id){return JSON.parse(localStorage.getItem('bookmarks')||'[]').includes(id);}
function getBookmarks(){return JSON.parse(localStorage.getItem('bookmarks')||'[]');}

// ═══ ACHIEVEMENTS ═══
const ACHIEVEMENTS=[
    {id:'first_run',icon:'🎯',title:'First Code',desc:'Run your first Python code',check:()=>executionHistory.length>0},
    {id:'five_done',icon:'⭐',title:'Fast Learner',desc:'Complete 5 lessons',check:()=>curriculum.filter(l=>localStorage.getItem(`done_${l.id}`)).length>=5},
    {id:'ten_done',icon:'🌟',title:'Dedicated',desc:'Complete 10 lessons',check:()=>curriculum.filter(l=>localStorage.getItem(`done_${l.id}`)).length>=10},
    {id:'half_done',icon:'🏅',title:'Halfway Hero',desc:'Complete 50% of lessons',check:()=>curriculum.filter(l=>localStorage.getItem(`done_${l.id}`)).length>=Math.floor(curriculum.length/2)},
    {id:'all_done',icon:'🏆',title:'Graduate',desc:'Complete ALL lessons',check:()=>curriculum.every(l=>localStorage.getItem(`done_${l.id}`))},
    {id:'streak_3',icon:'🔥',title:'On Fire',desc:'Study 3 days in a row',check:()=>getStreak()>=3},
    {id:'streak_7',icon:'💪',title:'Unstoppable',desc:'7-day study streak',check:()=>getStreak()>=7},
    {id:'notes_5',icon:'📝',title:'Note Taker',desc:'Write notes on 5 lessons',check:()=>{let c=0;curriculum.forEach(l=>{if(localStorage.getItem(`notes_${l.id}`)?.trim())c++;});return c>=5;}},
    {id:'quiz_10',icon:'🧠',title:'Quiz Master',desc:'Answer 10 quizzes correctly',check:()=>{let c=0;curriculum.forEach(l=>{const q=localStorage.getItem(`quiz_${l.id}`);if(q!==null&&parseInt(q)===l.quiz.answer)c++;});return c>=10;}},
    {id:'charts_5',icon:'📊',title:'Visualizer',desc:'Generate 5 plots',check:()=>parseInt(localStorage.getItem('plot_count')||'0')>=5},
    {id:'xp_500',icon:'💎',title:'XP Hunter',desc:'Earn 500 XP',check:()=>getXP()>=500},
    {id:'time_60',icon:'⏰',title:'Marathon',desc:'Study for 60+ minutes total',check:()=>totalStudySeconds>=3600},
];
function checkAchievements(){
    ACHIEVEMENTS.forEach(a=>{
        if(!localStorage.getItem(`ach_${a.id}`)&&a.check()){localStorage.setItem(`ach_${a.id}`,'true');showToast(`🏅 Achievement: ${a.title}!`,'success');}
    });
}
function incrementPlotCount(){const c=parseInt(localStorage.getItem('plot_count')||'0');localStorage.setItem('plot_count',String(c+1));}

// ═══ ACTIVITY HEATMAP ═══
function renderHeatmap(){
    const c=document.getElementById('heatmap');if(!c)return;
    const days=getStudyDays(),today=new Date();c.innerHTML='';
    for(let i=90;i>=0;i--){
        const d=new Date(today);d.setDate(d.getDate()-i);
        const key=d.toISOString().slice(0,10),active=days.includes(key);
        const count=days.filter(x=>x===key).length;
        let cls='heat-cell';if(active)cls+=' l'+(count>3?4:count>2?3:count>1?2:1);
        c.innerHTML+=`<div class="${cls}" title="${key}${active?' — studied':''}"></div>`;
    }
}

// ═══ LESSON OF THE DAY ═══
function getLessonOfDay(){
    const incomplete=curriculum.filter(l=>!localStorage.getItem(`done_${l.id}`));
    if(!incomplete.length)return curriculum[0];
    const day=new Date().getDate();return incomplete[day%incomplete.length];
}

// ═══ HOME PAGE ═══
function renderHomePage(){
    const total=curriculum.length;let completed=0;
    curriculum.forEach(l=>{if(localStorage.getItem(`done_${l.id}`))completed++;});
    const pct=Math.round((completed/total)*100);
    const el=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
    el('home-stat-lessons',total);el('home-stat-modules',MODULES.length);el('home-stat-completed',completed);el('home-stat-pct',pct+'%');
    el('home-stat-xp',getXP());
    el('home-stat-streak',getStreak());

    // Progress Ring
    const ring=document.getElementById('progress-ring-circle');
    if(ring){const r=54,circ=2*Math.PI*r;ring.style.strokeDasharray=circ;ring.style.strokeDashoffset=circ-(pct/100)*circ;}
    const rt=document.getElementById('ring-pct');if(rt)rt.textContent=pct+'%';

    // Continue banner
    const cb=document.getElementById('continue-banner');if(cb){
        const lastId=localStorage.getItem('last_lesson');
        const lesson=lastId?curriculum.find(l=>l.id===lastId):curriculum.find(l=>!localStorage.getItem(`done_${l.id}`));
        if(lesson){const mod=MODULES.find(m=>m.id===lesson.module);cb.style.display='flex';cb.innerHTML=`<div><div style="font-size:.88rem;font-weight:600;color:var(--hl-tx);">▶ Continue: ${lesson.title}</div><div style="font-size:.73rem;color:var(--tx2);">${mod?mod.title:''}</div></div><div class="btn btn-primary" style="padding:7px 18px;font-size:.78rem;">Resume →</div>`;cb.onclick=()=>startLesson(lesson.id);}
        else cb.style.display='none';
    }

    // Streak
    const sd=document.getElementById('streak-display');if(sd){
        const streak=getStreak(),days=getStudyDays().length;
        sd.innerHTML=`<div class="streak-card"><div style="font-size:1.8rem">${streak>0?'🔥':'❄️'}</div><div><div style="font-size:1.5rem;font-weight:800;color:var(--streak);">${streak}</div><div style="font-size:.7rem;color:var(--tx2);text-transform:uppercase;letter-spacing:.04em">Day Streak</div></div><div style="margin-left:auto;text-align:right"><div style="font-size:1.1rem;font-weight:700;color:var(--hl-tx)">${days}</div><div style="font-size:.7rem;color:var(--tx2);text-transform:uppercase">Total Days</div></div><div style="text-align:right"><div style="font-size:1.1rem;font-weight:700;color:var(--xp)">${Math.floor(totalStudySeconds/60)}m</div><div style="font-size:.7rem;color:var(--tx2);text-transform:uppercase">Study Time</div></div></div>`;
    }

    // XP Bar
    const xpw=document.getElementById('xp-section');if(xpw){
        const xp=getXP(),lv=getLevel();
        xpw.innerHTML=`<div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-fill" style="width:${Math.min(100,Math.round(xp/lv.next*100))}%"></div></div><div class="xp-label"><span>⚡ ${xp} XP — Level ${lv.lv}: ${lv.name}</span><span>${lv.next} XP to next</span></div></div>`;
    }

    // Heatmap
    renderHeatmap();

    // Lesson of the day
    const lotd=document.getElementById('lotd');if(lotd){
        const l=getLessonOfDay();const mod=MODULES.find(m=>m.id===l.module);
        lotd.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:.7rem;color:var(--tx2);text-transform:uppercase;font-weight:700;margin-bottom:2px;">💡 Lesson of the Day</div><div style="font-size:.92rem;font-weight:700;">${l.title}</div><div style="font-size:.75rem;color:var(--tx2);">${mod?mod.title:''}</div></div><span class="badge badge-${l.level}">${l.level}</span></div>`;
        lotd.onclick=()=>startLesson(l.id);
    }

    // Achievements
    const ac=document.getElementById('home-achievements');if(ac){
        ac.innerHTML='';ACHIEVEMENTS.forEach(a=>{
            const u=localStorage.getItem(`ach_${a.id}`);
            ac.innerHTML+=`<div class="achievement ${u?'unlocked':'locked'}" title="${a.desc}"><span>${a.icon}</span><span>${a.title}</span></div>`;
        });
    }

    // Modules
    const mc=document.getElementById('home-modules');if(mc){mc.innerHTML='';
        MODULES.forEach(mod=>{
            const lessons=curriculum.filter(l=>l.module===mod.id);const done=lessons.filter(l=>localStorage.getItem(`done_${l.id}`)).length;
            const pct=lessons.length?Math.round((done/lessons.length)*100):0;const fl=lessons[0];
            const card=document.createElement('div');card.className='card module-card fade-in';
            card.onclick=()=>{if(fl)startLesson(fl.id);else navigateTo('curriculum');};
            card.innerHTML=`<div class="card-body"><div style="display:flex;gap:12px;align-items:flex-start;"><div class="module-icon" style="background:${mod.color}15;color:${mod.color}">${mod.icon}</div><div style="flex:1;min-width:0;"><h3 style="font-size:.92rem;font-weight:700;margin-bottom:3px;">${mod.title}</h3><p style="font-size:.76rem;color:var(--tx2);line-height:1.4;margin-bottom:6px;">${mod.desc}</p><div style="display:flex;justify-content:space-between;font-size:.7rem;color:var(--tx2);"><span>${lessons.length} lessons</span><span style="font-weight:700;color:${pct===100?'var(--ok-tx)':'var(--hl-tx)'}">${pct===100?'✅ Complete':done+'/'+lessons.length}</span></div><div class="module-progress-bar"><div class="module-progress-fill" style="width:${pct}%"></div></div></div></div></div>`;
            mc.appendChild(card);
        });
    }
    checkAchievements();
    renderDailyGoal();
}

// ═══ CURRICULUM PAGE ═══
function renderCurriculumPage(){
    const c=document.getElementById('curriculum-modules');if(!c)return;c.innerHTML='';
    const search=(document.getElementById('curriculum-search')?.value||'').toLowerCase();
    MODULES.forEach(mod=>{
        const lessons=curriculum.filter(l=>l.module===mod.id);
        const filtered=search?lessons.filter(l=>l.title.toLowerCase().includes(search)||l.level.toLowerCase().includes(search)):lessons;
        if(search&&filtered.length===0)return;
        const done=lessons.filter(l=>localStorage.getItem(`done_${l.id}`)).length;const pct=lessons.length?Math.round((done/lessons.length)*100):0;
        let html=`<div class="card fade-in" style="margin-bottom:18px;"><div class="card-body"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;"><h3 style="font-size:1.05rem;font-weight:700;display:flex;align-items:center;gap:8px;"><span style="font-size:1.3rem;">${mod.icon}</span> ${mod.title}</h3><span style="font-size:.73rem;color:var(--tx2);font-weight:600;">${pct}%</span></div><p style="font-size:.8rem;color:var(--tx2);margin-bottom:12px;">${mod.desc}</p><div class="module-progress-bar" style="margin-bottom:14px;"><div class="module-progress-fill" style="width:${pct}%"></div></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:8px;">`;
        (search?filtered:lessons).forEach(l=>{
            const isDone=localStorage.getItem(`done_${l.id}`);const bm=isBookmarked(l.id);
            html+=`<div class="lesson-card-item ${isDone?'completed':''}" onclick="startLesson('${l.id}')" style="padding:10px;"><div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:.8rem;font-weight:600;">${isDone?'✅ ':''}${bm?'⭐ ':''}${l.title}</span><span class="badge badge-${l.level}">${l.level}</span></div><div class="lesson-time" style="margin-top:3px;">⏱ ~${getLessonTime(l)} min</div></div>`;
        });
        html+='</div></div></div>';c.innerHTML+=html;
    });
}
function getLessonTime(l){return{Foundational:5,Beginner:8,Intermediate:12,Advanced:15,Expert:20,Capstone:25}[l.level]||10;}

// ═══ LAB PAGE ═══
function renderLabPage(){renderLabSidebar();updateProgress();if(!currentLessonId)loadLesson(curriculum[0].id);if(!pyodide)initPyodide();}
function renderLabSidebar(){
    const nav=document.getElementById('lab-curriculum-nav');if(!nav)return;nav.innerHTML='';
    const search=(document.getElementById('lab-lesson-search')?.value||'').toLowerCase();
    const bms=getBookmarks();
    if(bms.length>0&&!search){
        const bh=document.createElement('div');bh.style.cssText='font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--bkmk);padding:8px 8px 3px;';bh.innerHTML='⭐ Bookmarked';nav.appendChild(bh);
        bms.forEach(bid=>{const l=curriculum.find(x=>x.id===bid);if(!l)return;const isDone=localStorage.getItem(`done_${l.id}`);const isActive=l.id===currentLessonId;const btn=document.createElement('button');btn.className='lesson-nav-btn'+(isDone?' completed-lesson':'')+(isActive?' active-lesson':'');btn.innerHTML=`<span style="font-size:.74rem;">⭐ ${l.title.replace(/^\d+\.\d+\s/,'')}</span>`;btn.onclick=()=>loadLesson(l.id);nav.appendChild(btn);});
    }
    MODULES.forEach(mod=>{
        const lessons=curriculum.filter(l=>l.module===mod.id);const filtered=search?lessons.filter(l=>l.title.toLowerCase().includes(search)||l.level.toLowerCase().includes(search)):lessons;if(search&&filtered.length===0)return;
        const header=document.createElement('div');header.style.cssText='font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--tx2);padding:10px 8px 3px;display:flex;align-items:center;gap:5px;';
        header.innerHTML=`<span>${mod.icon}</span> ${mod.title.replace('Module ','M')}`;nav.appendChild(header);
        (search?filtered:lessons).forEach(l=>{const isDone=localStorage.getItem(`done_${l.id}`);const isActive=l.id===currentLessonId;const btn=document.createElement('button');btn.className='lesson-nav-btn'+(isDone?' completed-lesson':'')+(isActive?' active-lesson':'');btn.innerHTML=`<span style="font-size:.76rem;">${isDone?'✅ ':''}${l.title.replace(/^\d+\.\d+\s/,'')}</span><span class="badge badge-${l.level}">${l.level}</span>`;btn.onclick=()=>loadLesson(l.id);nav.appendChild(btn);});
    });
}

// ═══ LESSON LOADING ═══
function loadLesson(id){
    startLessonTimer();currentLessonId=id;localStorage.setItem('last_lesson',id);
    const lesson=curriculum.find(l=>l.id===id);if(!lesson)return;
    const mod=MODULES.find(m=>m.id===lesson.module);
    // Breadcrumb
    const bc=document.getElementById('lesson-breadcrumb');
    if(bc)bc.innerHTML=`<span class="bc-link" onclick="navigateTo('home')">Home</span><span class="bc-sep">›</span><span class="bc-link" onclick="navigateTo('curriculum')">Curriculum</span><span class="bc-sep">›</span><span>${mod?mod.title:''}</span><span class="bc-sep">›</span><span style="color:var(--tx);font-weight:600;">${lesson.title}</span>`;
    // Bookmark
    const bmBtn=document.getElementById('bookmark-btn');
    if(bmBtn){bmBtn.className='bookmark-btn'+(isBookmarked(id)?' active':'');bmBtn.textContent=isBookmarked(id)?'⭐':'☆';bmBtn.onclick=()=>{toggleBookmark(id);bmBtn.className='bookmark-btn'+(isBookmarked(id)?' active':'');bmBtn.textContent=isBookmarked(id)?'⭐':'☆';};}
    // Time
    const te=document.getElementById('lesson-time-est');if(te)te.innerHTML=`⏱ ~${getLessonTime(lesson)} min`;
    // Rating
    renderRating(id);
    // Content
    document.getElementById('lesson-content').innerHTML=`<div class="fade-in">${lesson.content}</div>`;
    document.getElementById('tutor-tip').innerHTML=`<div class="fade-in"><b>💡 ${lesson.tip}</b></div>`;
    const savedCode=localStorage.getItem(`code_${id}`);
    document.getElementById('code-editor').value=savedCode||lesson.defaultCode;
    updateLineNumbers();
    setupQuiz(lesson);updateCompleteButton(id);updateNavButtons();renderLabSidebar();loadNotes(id);renderComments(id);
    const editor=document.getElementById('code-editor');
    editor.oninput=()=>{localStorage.setItem(`code_${currentLessonId}`,editor.value);updateLineNumbers();};
    editor.onscroll=()=>{const ln=document.getElementById('line-numbers');if(ln)ln.scrollTop=editor.scrollTop;};
    if(sidebarOpen)toggleMobileSidebar();
    if(window.innerWidth<768)window.scrollTo({top:0,behavior:'smooth'});
    checkAchievements();
}

// ═══ RATING ═══
function renderRating(id){
    const c=document.getElementById('lesson-rating');if(!c)return;
    const saved=parseInt(localStorage.getItem(`rating_${id}`)||'0');
    c.innerHTML='<span style="font-size:.7rem;color:var(--tx2);margin-right:4px;">Rate:</span>';
    for(let i=1;i<=5;i++){
        c.innerHTML+=`<button class="${i<=saved?'filled':''}" onclick="setRating('${id}',${i})">${i<=saved?'★':'☆'}</button>`;
    }
}
function setRating(id,stars){localStorage.setItem(`rating_${id}`,String(stars));renderRating(id);showToast(`Rated ${stars} star${stars>1?'s':''}!`,'info');}

// ═══ COMMENTS (localStorage-based) ═══
function renderComments(id){
    const c=document.getElementById('comments-section');if(!c)return;
    const comments=JSON.parse(localStorage.getItem(`comments_${id}`)||'[]');
    let html=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><h3 style="font-size:.78rem;font-weight:700;color:var(--tx2);text-transform:uppercase;letter-spacing:.04em;">💬 Discussion</h3><span style="font-size:.7rem;color:var(--tx3);">${comments.length} notes</span></div>`;
    html+=`<div style="display:flex;gap:6px;margin-bottom:10px;"><input id="comment-input" class="search-input" placeholder="Add a discussion note..." style="flex:1;font-size:.8rem;"><button onclick="addComment('${id}')" class="btn-ghost" style="color:var(--hl-tx);font-size:.78rem;">Post</button></div>`;
    if(comments.length){comments.slice(-5).reverse().forEach(cm=>{html+=`<div class="comment"><div class="comment-author">You <span class="comment-time">· ${cm.time}</span></div><div class="comment-body">${escH(cm.text)}</div></div>`;});}
    else{html+='<div style="font-size:.78rem;color:var(--tx3);font-style:italic;padding:8px;">No discussion notes yet.</div>';}
    c.innerHTML=html;
}
function addComment(id){
    const input=document.getElementById('comment-input');if(!input||!input.value.trim())return;
    const comments=JSON.parse(localStorage.getItem(`comments_${id}`)||'[]');
    comments.push({text:input.value.trim(),time:new Date().toLocaleString()});
    localStorage.setItem(`comments_${id}`,JSON.stringify(comments));
    renderComments(id);input.value='';showToast('💬 Note posted!','success');
}

// ═══ QUIZ ═══
function setupQuiz(lesson){
    const qs=document.getElementById('quiz-section');qs.style.display='block';
    document.getElementById('quiz-question').innerText=lesson.quiz.question;
    const od=document.getElementById('quiz-options');od.innerHTML='';
    const qa=localStorage.getItem(`quiz_${lesson.id}`);
    const rb=document.getElementById('quiz-retry');if(rb)rb.style.display=qa!==null&&parseInt(qa)!==lesson.quiz.answer?'inline-block':'none';
    lesson.quiz.options.forEach((opt,idx)=>{
        const btn=document.createElement('button');btn.className='quiz-option';btn.innerText=opt;
        if(qa!==null){btn.disabled=true;if(idx===lesson.quiz.answer)btn.classList.add('correct');if(parseInt(qa)===idx&&idx!==lesson.quiz.answer)btn.classList.add('wrong');}
        else{btn.onclick=()=>checkAnswer(idx,lesson.quiz.answer,lesson.id);}
        od.appendChild(btn);
    });
}
function retryQuiz(){if(!currentLessonId)return;localStorage.removeItem(`quiz_${currentLessonId}`);const l=curriculum.find(x=>x.id===currentLessonId);if(l)setupQuiz(l);showToast('Quiz reset. Try again!','info');}
function checkAnswer(sel,cor,lid){
    document.querySelectorAll('#quiz-options .quiz-option').forEach((btn,idx)=>{btn.disabled=true;if(idx===cor)btn.classList.add('correct');if(idx===sel&&sel!==cor)btn.classList.add('wrong');});
    localStorage.setItem(`quiz_${lid}`,sel);
    const rb=document.getElementById('quiz-retry');if(rb)rb.style.display=sel!==cor?'inline-block':'none';
    if(sel===cor){addXP('quiz_correct');showToast("🎉 Correct! +25 XP",'success');}
    else{addXP('quiz_wrong');showToast("❌ Not quite. Correct answer highlighted.",'warning');}
    checkAchievements();
}
function updateCompleteButton(id){
    const isDone=localStorage.getItem(`done_${id}`);const btn=document.getElementById('complete-btn');
    if(isDone){btn.innerHTML="✅ Completed!";btn.className="complete-btn done";btn.onclick=null;}
    else{btn.innerHTML="✅ Mark as Completed";btn.className="complete-btn";btn.onclick=handleCompletion;}
}
function handleCompletion(){
    if(!currentLessonId)return;
    localStorage.setItem(`done_${currentLessonId}`,'true');addXP('complete');updateProgress();updateCompleteButton(currentLessonId);renderLabSidebar();
    showToast("🎉 Lesson completed! +50 XP",'success');triggerConfetti();checkAchievements();
    const allDone=curriculum.every(l=>localStorage.getItem(`done_${l.id}`));
    if(allDone){setTimeout(()=>{showToast("🏆 Course completed!",'success');showCertificateModal();},1500);}
    else{const idx=curriculum.findIndex(l=>l.id===currentLessonId);if(idx<curriculum.length-1)setTimeout(()=>{loadLesson(curriculum[idx+1].id);showToast("➡️ Next lesson...",'info');},1200);}
}

// ═══ LINE NUMBERS ═══
function updateLineNumbers(){
    const ed=document.getElementById('code-editor'),ln=document.getElementById('line-numbers');if(!ed||!ln)return;
    const lines=ed.value.split('\n').length;ln.innerHTML='';
    for(let i=1;i<=Math.max(lines,10);i++){const s=document.createElement('span');s.textContent=i;ln.appendChild(s);}
    // Sync font size and line-height
    ln.style.fontSize=ed.style.fontSize||'14px';ln.style.lineHeight=window.getComputedStyle(ed).lineHeight;
}

// ═══ FONT SIZE ═══
function changeFontSize(d){editorFontSize=Math.max(10,Math.min(24,editorFontSize+d));const ed=document.getElementById('code-editor');ed.style.fontSize=editorFontSize+'px';document.getElementById('font-size-display').textContent=editorFontSize+'px';updateLineNumbers();}

// ═══ FULLSCREEN ═══
function toggleFullscreen(){const w=document.getElementById('editor-wrap');if(!w)return;isFullscreen=!isFullscreen;w.classList.toggle('editor-fullscreen',isFullscreen);document.getElementById('fs-btn').textContent=isFullscreen?'⊡':'⛶';if(isFullscreen)document.getElementById('code-editor').style.height='auto';else document.getElementById('code-editor').style.height='';}

// ═══ DOWNLOAD CODE ═══
function downloadCode(){const code=document.getElementById('code-editor').value;if(!code.trim()){showToast('Nothing to download!','warning');return;}const l=curriculum.find(x=>x.id===currentLessonId);const blob=new Blob([code],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=(l?l.id:'code')+'.py';a.click();URL.revokeObjectURL(url);showToast('💾 Downloaded!','success');}

// ═══ EXPORT ALL NOTES ═══
function exportAllNotes(){
    let md='# PyData-Flow Pro — My Notes\n\n';
    curriculum.forEach(l=>{const n=localStorage.getItem(`notes_${l.id}`);if(n?.trim()){md+=`## ${l.title}\n\n${n.trim()}\n\n---\n\n`;}});
    if(md.length<50){showToast('No notes to export!','warning');return;}
    const blob=new Blob([md],{type:'text/markdown'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='pydata_notes.md';a.click();URL.revokeObjectURL(url);showToast('📄 Notes exported as Markdown!','success');
}

// ═══ DATA PREVIEW ═══
function toggleDataPreview(){
    const dp=document.getElementById('data-preview');if(!dp)return;dp.classList.toggle('visible');
    if(dp.classList.contains('visible')){
        if(!pyodide){dp.innerHTML='<p style="color:var(--err-tx)">Engine not ready</p>';return;}
        try{
            pyodide.runPython(`import sys,io\nsys.stdout=io.StringIO()\nsys.stderr=io.StringIO()`);
            pyodide.runPython(`import pandas as pd\ntry:\n df=pd.read_csv('data.csv')\n print(df.head().to_html(classes='',index=False))\nexcept Exception as e:\n print(f'<p style="color:#ef4444">Error: {e}</p>')`);
            dp.innerHTML=pyodide.runPython("sys.stdout.getvalue()");
        }catch(e){dp.innerHTML='<p style="color:var(--err-tx)">Load a dataset first</p>';}
    }
}

// ═══ NAV ═══
function goToPrevLesson(){const i=curriculum.findIndex(l=>l.id===currentLessonId);if(i>0)loadLesson(curriculum[i-1].id);}
function goToNextLesson(){const i=curriculum.findIndex(l=>l.id===currentLessonId);if(i<curriculum.length-1)loadLesson(curriculum[i+1].id);}
function updateNavButtons(){const i=curriculum.findIndex(l=>l.id===currentLessonId);const pb=document.getElementById('prev-lesson-btn'),nb=document.getElementById('next-lesson-btn');if(pb){pb.disabled=i<=0;pb.querySelector('.nav-label').textContent=i>0?curriculum[i-1].title:'';}if(nb){nb.disabled=i>=curriculum.length-1;nb.querySelector('.nav-label').textContent=i<curriculum.length-1?curriculum[i+1].title:'';}}

// ═══ PROGRESS ═══
function updateProgress(){const total=curriculum.length;let completed=0;curriculum.forEach(l=>{if(localStorage.getItem(`done_${l.id}`))completed++;});const pct=Math.round((completed/total)*100);const pb=document.getElementById('lab-progress-bar');if(pb)pb.style.width=pct+'%';const pt=document.getElementById('lab-progress-text');if(pt)pt.textContent=`${pct}% — ${completed}/${total}`;const sc=document.getElementById('lab-stat-completed');if(sc)sc.textContent=completed;const sr=document.getElementById('lab-stat-remaining');if(sr)sr.textContent=total-completed;}

// ═══ PYODIDE ═══
async function initPyodide(){
    const output=document.getElementById('output');const dot=document.getElementById('engine-status');
    const lbar=document.getElementById('lbar');const lmsg=document.getElementById('lmsg');const lerr=document.getElementById('ld-err');const stxt=document.getElementById('stext');
    function setBar(w){if(lbar)lbar.style.width=w+'%';}
    try{if(output)output.innerHTML='<div class="skeleton" style="height:20px;width:70%;margin-bottom:8px;"></div><div class="skeleton" style="height:20px;width:50%;"></div>';setBar(15);if(lmsg)lmsg.textContent='Loading Python runtime (Pyodide v0.23.4)…';
        pyodide=await loadPyodide();
        setBar(55);if(lmsg)lmsg.textContent='Loading NumPy…';
        await pyodide.loadPackage('numpy');
        setBar(72);if(lmsg)lmsg.textContent='Loading Pandas…';
        await pyodide.loadPackage('pandas');
        setBar(88);if(lmsg)lmsg.textContent='Loading Matplotlib…';
        await pyodide.loadPackage('matplotlib');
        setBar(96);if(lmsg)lmsg.textContent='Finalising…';
        pyodide.runPython("import sys,io,numpy as np,pandas as pd");if(output)output.innerHTML='<span style="color:var(--green);font-weight:700;">✓ Python Ready! Load a dataset and code.</span>';
        if(dot){dot.className='sdot ready';}if(stxt)stxt.textContent='Python ready';setBar(100);
        setTimeout(function(){var loader=document.getElementById('loader');if(loader){loader.classList.add('hide');setTimeout(function(){loader.style.display='none';},500);}},300);
        showToast('Python engine loaded!','success');}catch(err){if(output)output.innerHTML='<span style="color:var(--red);font-weight:700;">✗ Error loading Python. Please refresh.</span>';
        if(dot){dot.className='sdot error';}if(stxt)stxt.textContent='Error';
        if(lerr){lerr.className='ld-err show';lerr.innerHTML='<strong>Python failed to load.</strong><br><br>Try refreshing on Wi-Fi. Lessons, quizzes, and cheatsheets still work.';}
        if(lmsg)lmsg.textContent='Refresh to retry.';
        setTimeout(function(){var loader=document.getElementById('loader');if(loader){loader.classList.add('hide');setTimeout(function(){loader.style.display='none';},500);}},1000);
        showToast('Engine failed. Refresh to retry.','error');}}

// ═══ DATASETS ═══
async function loadDataset(){const sel=document.getElementById('dataset-select').value;if(sel==='none')return;if(!pyodide){showToast('Engine loading...','warning');return;}const csv=datasets[sel];if(!csv){showToast('Not found.','error');return;}pyodide.FS.writeFile('data.csv',csv);document.getElementById('output').innerHTML=`<span style="color:#3b82f6;font-weight:600;">📊 Loaded "${sel}" (${csv.split('\n').length} rows)</span>`;showToast(`Dataset loaded!`,'info');const dp=document.getElementById('data-preview');if(dp)dp.classList.remove('visible');}
function handleCustomCSV(event){const file=event.target.files[0];if(!file)return;if(!file.name.endsWith('.csv')){showToast('Upload .csv file.','error');return;}if(!pyodide){showToast('Engine loading...','warning');return;}const reader=new FileReader();reader.onload=e=>{pyodide.FS.writeFile('data.csv',e.target.result);document.getElementById('output').innerHTML=`<span style="color:#3b82f6;font-weight:600;">📁 Loaded "${file.name}"</span>`;document.getElementById('dataset-select').value='none';showToast('Loaded!','success');};reader.readAsText(file);}

// ═══ CODE EXECUTION ═══
async function runCode(){
    if(!pyodide){showToast('Engine loading...','warning');return;}
    const code=document.getElementById('code-editor').value;const output=document.getElementById('output');const canvas=document.getElementById('plot-canvas');const btn=document.getElementById('run-btn');
    if(!code.trim()){showToast('Write code first!','warning');return;}
    btn.innerText="⏳ Running...";btn.disabled=true;
    try{
        pyodide.runPython(`import sys,io\nsys.stdout=io.StringIO()\nsys.stderr=io.StringIO()`);
        pyodide.runPython(`import matplotlib\nmatplotlib.use('AGG')\nimport matplotlib.pyplot as plt\nimport io as _io,base64 as _b64\ndef _sp():\n _b=_io.BytesIO()\n plt.savefig(_b,format='png',dpi=100,bbox_inches='tight',facecolor='white',edgecolor='none')\n _b.seek(0)\n print(f"__PLOT__{_b64.b64encode(_b.read()).decode()}__ENDPLOT__")\n plt.close('all')\nplt.show=_sp`);
        await pyodide.runPythonAsync(code);
        const stdout=pyodide.runPython("sys.stdout.getvalue()"),stderr=pyodide.runPython("sys.stderr.getvalue()");
        if(stdout.includes("__PLOT__")){
            const parts=stdout.split("__PLOT__");let txt=parts[0];
            // Collect ALL plots
            let plotHtml='';
            for(let i=1;i<parts.length;i++){const pp=parts[i].split("__ENDPLOT__");if(pp.length>=2){plotHtml+=`<img src="data:image/png;base64,${pp[0]}" class="fade-in" alt="Plot" style="margin-bottom:8px;">`;txt+=pp.slice(1).join("");incrementPlotCount();}}
            canvas.innerHTML=plotHtml;
            output.innerHTML=fmtOut(txt)||'<span style="color:var(--tx3);font-style:italic;">Plot(s) generated.</span>';
        }else{output.innerHTML=fmtOut(stdout)||'<span style="color:#22c55e;font-style:italic;">✓ Executed.</span>';canvas.innerHTML='<span style="color:var(--tx2);font-size:.73rem;font-style:italic;">No plot.</span>';}
        if(stderr?.trim())output.innerHTML+=`<div style="color:#f59e0b;margin-top:8px;font-size:.78rem;">⚠ ${escH(stderr)}</div>`;
        addToHistory(code,true);addXP('run');
    }catch(err){
        const errMsg=err.message||String(err);
        let html=`<div style="color:#ef4444;"><b>Error:</b> ${escH(errMsg)}</div>`;
        const hint=getErrorHint(errMsg);
        if(hint)html+=`<div class="error-helper"><b>💡 Tip:</b><p>${hint}</p></div>`;
        output.innerHTML=html;addToHistory(code,false);
    }finally{btn.innerText="Run ▶";btn.disabled=false;checkAchievements();}
}
function fmtOut(t){if(!t?.trim())return'';return'<pre style="white-space:pre-wrap;word-break:break-word;margin:0;font-size:.8rem;line-height:1.5;">'+escH(t.trim())+'</pre>';}
function escH(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

// ═══ CODE TOOLS ═══
function copyCode(){const c=document.getElementById('code-editor').value;if(!c.trim()){showToast('Nothing to copy!','warning');return;}if(navigator.clipboard?.writeText)navigator.clipboard.writeText(c).then(()=>showToast('📋 Copied!','success')).catch(()=>fbCopy(c));else fbCopy(c);}
function fbCopy(t){const ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');showToast('📋 Copied!','success');}catch(e){showToast('Copy failed.','error');}document.body.removeChild(ta);}
function clearOutput(){document.getElementById('output').innerHTML='<span style="color:var(--tx2);font-style:italic;">Cleared.</span>';document.getElementById('plot-canvas').innerHTML='<span style="color:var(--tx2);font-size:.73rem;font-style:italic;">Visualizations here...</span>';}
function resetCode(){if(!currentLessonId)return;const l=curriculum.find(x=>x.id===currentLessonId);if(l){document.getElementById('code-editor').value=l.defaultCode;localStorage.removeItem(`code_${currentLessonId}`);updateLineNumbers();showToast('Code reset.','info');}}

// ═══ NOTES ═══
function loadNotes(id){const n=document.getElementById('lesson-notes');if(n)n.value=localStorage.getItem(`notes_${id}`)||'';}
function saveNotes(){if(!currentLessonId)return;const n=document.getElementById('lesson-notes');if(n){localStorage.setItem(`notes_${currentLessonId}`,n.value);addXP('note');showToast('📝 Saved! +10 XP','success');checkAchievements();}}
function autoSaveNotes(){if(!currentLessonId)return;const n=document.getElementById('lesson-notes');if(n)localStorage.setItem(`notes_${currentLessonId}`,n.value);}

// ═══ POMODORO ═══
function togglePomodoro(){if(pomodoroRunning){clearInterval(pomodoroInterval);pomodoroRunning=false;showToast('Paused.','info');}else{pomodoroRunning=true;pomodoroInterval=setInterval(()=>{pomodoroTime--;if(pomodoroTime<=0){clearInterval(pomodoroInterval);pomodoroRunning=false;if(pomodoroIsBreak){pomodoroTime=25*60;pomodoroIsBreak=false;showToast('Break over!','info');}else{pomodoroTime=5*60;pomodoroIsBreak=true;showToast('🎉 Pomodoro done! Break time.','success');triggerConfetti();}}updatePomodoroDisplay();},1000);showToast('Focus! 25 min.','success');}updatePomodoroDisplay();}
function resetPomodoro(){clearInterval(pomodoroInterval);pomodoroRunning=false;pomodoroIsBreak=false;pomodoroTime=25*60;updatePomodoroDisplay();}
function updatePomodoroDisplay(){const el=document.getElementById('pomodoro-time');if(!el)return;const m=Math.floor(pomodoroTime/60),s=pomodoroTime%60;el.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;const w=document.getElementById('pomodoro-wrap');if(w){w.classList.toggle('running',pomodoroRunning);w.classList.toggle('break-time',pomodoroIsBreak);}const btn=document.getElementById('pomodoro-toggle');if(btn)btn.textContent=pomodoroRunning?'⏸':'▶';}

// ═══ TOAST ═══
function showToast(msg,type='info'){const c=document.getElementById('toast-container');if(!c)return;const t=document.createElement('div');t.className=`toast ${type}`;t.textContent=msg;t.setAttribute('role','alert');c.appendChild(t);setTimeout(()=>{if(t.parentNode)t.parentNode.removeChild(t);},3200);}

// ═══ THEME ═══
function detectSystemTheme(){const s=localStorage.getItem('theme');if(s==='light')document.body.classList.add('light-mode');else document.body.classList.remove('light-mode');updateThemeIcon();}
function toggleTheme(){document.body.classList.toggle('light-mode');const d=!document.body.classList.contains('light-mode');localStorage.setItem('theme',d?'dark':'light');updateThemeIcon();showToast(d?'🌙 Dark':'☀️ Light','info');}
function updateThemeIcon(){const b=document.getElementById('theme-toggle-btn');if(b)b.textContent=document.body.classList.contains('light-mode')?'🌙':'☀️';}

// ═══ SESSION TIMER ═══
function startSessionTimer(){sessionStartTime=Date.now();sessionTimerInterval=setInterval(updateSessionTimer,1000);updateSessionTimer();document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(sessionTimerInterval);else sessionTimerInterval=setInterval(updateSessionTimer,1000);});}
function updateSessionTimer(){const e=Date.now()-sessionStartTime;const m=Math.floor(e/60000),s=Math.floor((e%60000)/1000);const t=document.getElementById('session-timer');if(t)t.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;}

// ═══ HISTORY ═══
function addToHistory(code,ok){executionHistory.unshift({code:code.substring(0,100),fullCode:code,time:new Date().toLocaleTimeString(),success:ok});if(executionHistory.length>20)executionHistory.pop();saveExecHist();renderHistory();}
function renderHistory(){const c=document.getElementById('history-list');if(!c)return;c.innerHTML='';if(!executionHistory.length){c.innerHTML='<span style="color:var(--tx2);font-size:.73rem;font-style:italic;">No history.</span>';return;}executionHistory.slice(0,10).forEach(e=>{const d=document.createElement('div');d.className='history-item';d.innerHTML=`${e.success?'✅':'❌'} <span style="opacity:.5">${e.time}</span> ${escH(e.code)}`;d.title='Click to restore';d.onclick=()=>{document.getElementById('code-editor').value=e.fullCode;updateLineNumbers();showToast('Restored.','info');};c.appendChild(d);});}
function saveExecHist(){try{localStorage.setItem('exec_history',JSON.stringify(executionHistory.slice(0,20)));}catch(e){}}
function restoreExecutionHistory(){try{const s=localStorage.getItem('exec_history');if(s)executionHistory=JSON.parse(s);}catch(e){}}

// ═══ SNIPPETS ═══
function renderSnippets(){const c=document.getElementById('snippet-list');if(!c)return;c.innerHTML='';snippetLibrary.forEach(s=>{const b=document.createElement('button');b.className='history-item';b.textContent=`📎 ${s.name}`;b.onclick=()=>{document.getElementById('code-editor').value=s.code;updateLineNumbers();showToast(`Loaded: ${s.name}`,'info');};c.appendChild(b);});}

// ═══ TABS ═══
function switchTab(name){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelector(`.tab-btn[data-tab="${name}"]`)?.classList.add('active');['output','history','snippets'].forEach(t=>{const el=document.getElementById('tab-'+t);if(el)el.style.display=t===name?'block':'none';});if(name==='history')renderHistory();if(name==='snippets')renderSnippets();}

// ═══ CHALLENGES ═══
function renderChallengesPage(){
    const c=document.getElementById('challenges-list');if(!c)return;c.innerHTML='';
    const challenges=[
        {id:'c1',title:'FizzBuzz',desc:'Print 1-30. Multiples of 3→"Fizz", 5→"Buzz", both→"FizzBuzz".',difficulty:1,starter:'# FizzBuzz\nfor i in range(1, 31):\n    # Your code here\n    pass'},
        {id:'c2',title:'Reverse a String',desc:'Reverse a string without [::-1].',difficulty:1,starter:'def reverse_string(s):\n    # Your code here\n    pass\n\nprint(reverse_string("PyData"))'},
        {id:'c3',title:'Find Duplicates',desc:'Find all duplicate values in a list.',difficulty:2,starter:'data = [1, 3, 5, 3, 7, 1, 9, 5, 11]\n# Find duplicates\n'},
        {id:'c4',title:'Word Frequency',desc:'Count word occurrences in a sentence.',difficulty:2,starter:'sentence = "the cat sat on the mat the cat"\n# Count frequencies\n'},
        {id:'c5',title:'CSV Analyzer',desc:'Load Education data, find top 3 students, calc pass rate.',difficulty:3,starter:'import pandas as pd\ndf = pd.read_csv("data.csv")\n# Analyze\n'},
        {id:'c6',title:'Sales Dashboard',desc:'Calculate revenue, create sorted bar chart.',difficulty:3,starter:'import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv("data.csv")\n# Dashboard\n'},
        {id:'c7',title:'Weather Reporter',desc:'Find extremes, create Temp vs Humidity scatter.',difficulty:4,starter:'import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv("data.csv")\n# Report\n'},
        {id:'c8',title:'Full Pipeline',desc:'Load→Clean→Analyze→Visualize→Report.',difficulty:5,starter:'import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\ndf = pd.read_csv("data.csv")\n# Full pipeline\n'},
    ];
    challenges.forEach(ch=>{
        let dots='';for(let i=0;i<5;i++)dots+=`<span class="challenge-dot${i<ch.difficulty?' filled':''}"></span>`;
        c.innerHTML+=`<div class="card challenge-card fade-in" style="margin-bottom:10px;" onclick="startChallenge('${ch.id}')"><div class="card-body" style="padding:14px;"><div style="display:flex;justify-content:space-between;align-items:center;"><h3 style="font-size:.92rem;font-weight:700;">${ch.title}</h3><div class="challenge-difficulty">${dots}</div></div><p style="font-size:.8rem;color:var(--tx2);margin-top:4px;">${ch.desc}</p></div></div>`;
    });
    window._challenges=challenges;
}
function startChallenge(id){const ch=window._challenges?.find(c=>c.id===id);if(!ch)return;addXP('challenge');navigateTo('lab');setTimeout(()=>{document.getElementById('code-editor').value=ch.starter;updateLineNumbers();showToast(`Challenge: ${ch.title} +30 XP`,'info');},300);}

// ═══ SANDBOX PAGE ═══
function renderSandboxPage(){
    if(!pyodide)initPyodide();
    const ed=document.getElementById('sandbox-editor');if(ed&&!ed.value)ed.value="# Free Python Sandbox\n# Write anything you want!\n\nprint('Hello from the Sandbox!')";
    updateSandboxLines();
}
function runSandbox(){
    if(!pyodide){showToast('Engine loading...','warning');return;}
    const code=document.getElementById('sandbox-editor').value;const output=document.getElementById('sandbox-output');const canvas=document.getElementById('sandbox-canvas');
    if(!code.trim())return;
    try{
        pyodide.runPython(`import sys,io\nsys.stdout=io.StringIO()\nsys.stderr=io.StringIO()`);
        pyodide.runPython(`import matplotlib\nmatplotlib.use('AGG')\nimport matplotlib.pyplot as plt\nimport io as _io,base64 as _b64\ndef _sp():\n _b=_io.BytesIO()\n plt.savefig(_b,format='png',dpi=100,bbox_inches='tight',facecolor='white',edgecolor='none')\n _b.seek(0)\n print(f"__PLOT__{_b64.b64encode(_b.read()).decode()}__ENDPLOT__")\n plt.close('all')\nplt.show=_sp`);
        pyodide.runPythonAsync(code).then(()=>{
            const stdout=pyodide.runPython("sys.stdout.getvalue()");
            if(stdout.includes("__PLOT__")){const parts=stdout.split("__PLOT__");let txt=parts[0],plots='';for(let i=1;i<parts.length;i++){const pp=parts[i].split("__ENDPLOT__");if(pp.length>=2){plots+=`<img src="data:image/png;base64,${pp[0]}" style="max-width:100%;border-radius:8px;margin:4px 0;">`;txt+=pp.slice(1).join("");}}canvas.innerHTML=plots;output.innerHTML=fmtOut(txt)||'Plot generated.';}
            else{output.innerHTML=fmtOut(stdout)||'<span style="color:#22c55e">✓ Done.</span>';canvas.innerHTML='';}
        }).catch(err=>{output.innerHTML=`<div style="color:#ef4444"><b>Error:</b> ${escH(err.message||String(err))}</div>`;const hint=getErrorHint(err.message||'');if(hint)output.innerHTML+=`<div class="error-helper"><b>💡</b><p>${hint}</p></div>`;});
    }catch(e){output.innerHTML=`<div style="color:#ef4444">${escH(String(e))}</div>`;}
}
function updateSandboxLines(){const ed=document.getElementById('sandbox-editor'),ln=document.getElementById('sandbox-line-numbers');if(!ed||!ln)return;const lines=ed.value.split('\n').length;ln.innerHTML='';for(let i=1;i<=Math.max(lines,10);i++){const s=document.createElement('span');s.textContent=i;ln.appendChild(s);}}

// ═══ MODALS ═══
function openMentor(){document.getElementById('mentor-modal').classList.add('active');document.body.style.overflow='hidden';}
function closeMentor(){document.getElementById('mentor-modal').classList.remove('active');document.body.style.overflow='';}
function showCertificateModal(){document.getElementById('certificate-modal').classList.add('active');document.body.style.overflow='hidden';}
function closeCertificate(){document.getElementById('certificate-modal').classList.remove('active');document.body.style.overflow='';}
function showShortcutsModal(){document.getElementById('shortcuts-modal').classList.add('active');document.body.style.overflow='hidden';}
function closeShortcuts(){document.getElementById('shortcuts-modal').classList.remove('active');document.body.style.overflow='';}
function downloadCertificate(){const name=document.getElementById('cert-name-input')?.value||'Learner';const date=new Date().toLocaleDateString('en-NG',{year:'numeric',month:'long',day:'numeric'});const h=`<!DOCTYPE html><html><head><title>Certificate</title><style>body{font-family:Georgia,serif;margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f8fafc}.cert{border:4px solid #6366f1;border-radius:24px;padding:60px 50px;max-width:700px;text-align:center;background:linear-gradient(135deg,#eef2ff,#faf5ff)}.cert h1{color:#312e81;font-size:2rem}.cert .name{font-size:2.2rem;color:#1e1b4b;border-bottom:2px solid #6366f1;display:inline-block;padding-bottom:4px;margin:20px 0}.cert p{color:#475569;line-height:1.6}.cert .date{color:#6366f1;font-weight:bold;margin-top:30px}</style></head><body><div class="cert"><h1>🏆 Certificate of Completion</h1><h2 style="color:#4f46e5;font-weight:normal">PyData-Flow Pro — Python for Data Science</h2><p>This certifies that</p><div class="name">${escH(name)}</div><p>has completed the <b>PyData-Flow Pro</b> curriculum (${curriculum.length} lessons, ${MODULES.length} modules) with ${getXP()} XP earned.</p><p class="date">${date}</p><p style="margin-top:20px;font-size:.85rem;color:#94a3b8">Mentor: Adewale Samson Adeagbo</p></div></body></html>`;const b=new Blob([h],{type:'text/html'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=`PyDataFlow_Certificate_${name.replace(/\s+/g,'_')}.html`;a.click();URL.revokeObjectURL(u);showToast('Downloaded!','success');}

// ═══ EXPORT/IMPORT/RESET ═══
function exportProgress(){const d={};curriculum.forEach(l=>{['done_','quiz_','notes_','code_','rating_','comments_'].forEach(p=>{d[p+l.id]=localStorage.getItem(p+l.id)||null;});});d.bookmarks=localStorage.getItem('bookmarks');d.study_streak=localStorage.getItem('study_streak');d.theme=localStorage.getItem('theme');d.xp=localStorage.getItem('xp');d.plot_count=localStorage.getItem('plot_count');d.total_study_seconds=localStorage.getItem('total_study_seconds');d.daily_goal=localStorage.getItem('daily_goal');d.total_lesson_minutes=localStorage.getItem('total_lesson_minutes');d.exportDate=new Date().toISOString();const b=new Blob([JSON.stringify(d,null,2)],{type:'application/json'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download='pydata_progress.json';a.click();URL.revokeObjectURL(u);showToast('Exported!','success');}
function importProgress(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{try{const d=JSON.parse(ev.target.result);Object.keys(d).forEach(k=>{if(d[k]!==null)localStorage.setItem(k,d[k]);});updateProgress();if(currentPage==='lab')renderLabSidebar();if(currentPage==='home')renderHomePage();if(currentPage==='curriculum')renderCurriculumPage();showToast('Imported!','success');}catch(er){showToast('Invalid file.','error');}};r.readAsText(f);}
function resetAllProgress(){if(!confirm('⚠️ Erase ALL data? Cannot be undone.'))return;curriculum.forEach(l=>{['done_','quiz_','notes_','code_','rating_','comments_'].forEach(p=>localStorage.removeItem(p+l.id));});['exec_history','bookmarks','study_streak','plot_count','xp','total_study_seconds','last_lesson'].forEach(k=>localStorage.removeItem(k));ACHIEVEMENTS.forEach(a=>localStorage.removeItem(`ach_${a.id}`));executionHistory=[];totalStudySeconds=0;updateProgress();if(currentPage==='lab'){renderLabSidebar();loadLesson(curriculum[0].id);renderHistory();}if(currentPage==='home')renderHomePage();if(currentPage==='curriculum')renderCurriculumPage();showToast('Reset complete.','info');}

// ═══ MOBILE ═══
function toggleMobileSidebar(){const s=document.getElementById('lab-sidebar'),o=document.getElementById('sidebar-overlay');sidebarOpen=!sidebarOpen;if(sidebarOpen){s.classList.remove('sidebar-mobile-hidden');s.classList.add('sidebar-mobile-visible');o.style.display='block';}else{s.classList.add('sidebar-mobile-hidden');s.classList.remove('sidebar-mobile-visible');o.style.display='none';}}
function toggleMobileMenu(){mobileMenuOpen=!mobileMenuOpen;document.getElementById('mobile-nav')?.classList.toggle('open',mobileMenuOpen);}

// ═══ KEYBOARD ═══
function setupKeyboardShortcuts(){
    document.addEventListener('keydown',e=>{
        if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();if(currentPage==='lab')runCode();if(currentPage==='sandbox')runSandbox();}
        if((e.ctrlKey||e.metaKey)&&e.key==='s'){e.preventDefault();if(currentPage==='lab')saveNotes();}
        if((e.ctrlKey||e.metaKey)&&e.key==='/'){e.preventDefault();showShortcutsModal();}
        if(e.key==='Escape'){closeMentor();closeCertificate();closeShortcuts();if(sidebarOpen)toggleMobileSidebar();if(isFullscreen)toggleFullscreen();}
    });
    document.addEventListener('keydown',e=>{
        if(e.key==='Tab'&&(e.target.id==='code-editor'||e.target.id==='sandbox-editor')){
            e.preventDefault();const ed=e.target;const s=ed.selectionStart,en=ed.selectionEnd;
            ed.value=ed.value.substring(0,s)+'    '+ed.value.substring(en);ed.selectionStart=ed.selectionEnd=s+4;
            if(e.target.id==='code-editor')updateLineNumbers();if(e.target.id==='sandbox-editor')updateSandboxLines();
        }
    });
}

// ═══ CONFETTI ═══
function triggerConfetti(){const cols=['#6366f1','#22c55e','#f59e0b','#ef4444','#3b82f6','#ec4899'];for(let i=0;i<40;i++){const p=document.createElement('div');p.className='confetti-piece';p.style.left=Math.random()*100+'vw';p.style.backgroundColor=cols[Math.floor(Math.random()*cols.length)];p.style.width=(Math.random()*8+5)+'px';p.style.height=(Math.random()*8+5)+'px';p.style.borderRadius=Math.random()>.5?'50%':'2px';p.style.animation=`confettiFall ${Math.random()*2+1.5}s linear ${Math.random()*.5}s forwards`;document.body.appendChild(p);setTimeout(()=>{if(p.parentNode)p.parentNode.removeChild(p);},4000);}}

// ═══ CHEATSHEET ═══
function renderCheatsheetPage(){const c=document.getElementById('cheatsheet-content');if(!c)return;c.innerHTML='';const search=(document.getElementById('cheatsheet-search')?.value||'').toLowerCase();cheatsheetData.forEach(g=>{const fi=search?g.items.filter(i=>i.cmd.toLowerCase().includes(search)||i.desc.toLowerCase().includes(search)):g.items;if(search&&fi.length===0)return;let h=`<div class="cheatsheet-group"><h3>📌 ${g.group}</h3>`;fi.forEach(i=>{h+=`<div class="cheat-item"><div class="cheat-code">${escH(i.cmd)}</div><div style="color:var(--tx2);font-size:.8rem;">${i.desc}</div></div>`;});h+='</div>';c.innerHTML+=h;});}

// ═══ GLOSSARY ═══
function renderGlossaryPage(){const c=document.getElementById('glossary-content');if(!c)return;let items=[...glossaryData];const search=(document.getElementById('glossary-search')?.value||'').toLowerCase();if(search)items=items.filter(i=>i.term.toLowerCase().includes(search)||i.def.toLowerCase().includes(search));if(glossaryFilter)items=items.filter(i=>i.term.charAt(0).toUpperCase()===glossaryFilter);c.innerHTML='';items.forEach(i=>{c.innerHTML+=`<div class="glossary-item"><div class="glossary-term">${i.term}</div><div class="glossary-def">${i.def}</div></div>`;});const an=document.getElementById('alpha-nav');if(an){const letters=[...new Set(glossaryData.map(g=>g.term.charAt(0).toUpperCase()))].sort();an.innerHTML=`<button class="${glossaryFilter===''?'active':''}" onclick="glossaryFilter='';renderGlossaryPage();">All</button>`;letters.forEach(l=>{an.innerHTML+=`<button class="${glossaryFilter===l?'active':''}" onclick="glossaryFilter='${l}';renderGlossaryPage();">${l}</button>`;});}}

// ═══ RESOURCES ═══
function renderResourcesPage(){const rm=document.getElementById('roadmap-content');if(rm){const steps=[{icon:'🐍',title:'Python Basics (Wk 1-2)',desc:'Variables, types, operators, strings.'},{icon:'🔀',title:'Control Flow (Wk 3-4)',desc:'If/else, loops, functions, comprehensions.'},{icon:'🗂️',title:'Data Structures (Wk 5)',desc:'Lists, tuples, dicts, sets.'},{icon:'📁',title:'Files & Data (Wk 6)',desc:'CSV, JSON, data cleaning.'},{icon:'🐼',title:'Pandas (Wk 7-9)',desc:'DataFrames, filtering, groupby, merge, pivot.'},{icon:'📊',title:'Visualization (Wk 10-11)',desc:'Bar, line, pie, scatter, histogram, dashboards.'},{icon:'📐',title:'Statistics (Wk 12)',desc:'Descriptive stats, correlation, outliers.'},{icon:'🏆',title:'Capstone (Wk 13-14)',desc:'End-to-end analysis projects.'},{icon:'🚀',title:'Next Steps',desc:'SQL, ML, Seaborn, Streamlit, APIs.'}];rm.innerHTML='';steps.forEach(s=>{rm.innerHTML+=`<div class="roadmap-step"><div class="roadmap-dot">${s.icon}</div><div><h4 style="font-weight:700;margin-bottom:3px;">${s.title}</h4><p style="font-size:.83rem;color:var(--tx2);line-height:1.5;">${s.desc}</p></div></div>`;});}const fq=document.getElementById('faq-content');if(fq){fq.innerHTML='';faqData.forEach((f,i)=>{fq.innerHTML+=`<div class="faq-item"><div class="faq-q" onclick="toggleFaq(${i})"><span>${f.q}</span><span id="faq-icon-${i}">+</span></div><div class="faq-a" id="faq-a-${i}">${f.a}</div></div>`;});}}

// ═══ PRINT LESSON ═══
function printLesson(){
    const content=document.getElementById('lesson-content');
    const tip=document.getElementById('tutor-tip');
    if(!content)return;
    const lesson=curriculum.find(l=>l.id===currentLessonId);
    const mod=lesson?MODULES.find(m=>m.id===lesson.module):null;
    const w=window.open('','_blank');
    w.document.write(`<!DOCTYPE html><html><head><title>\${lesson?lesson.title:'Lesson'} — PyData-Flow Pro</title>
    <style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;color:#1a1a1a;line-height:1.7}
    h1{font-size:24px;margin-bottom:4px}h2{font-size:20px;margin-top:24px}
    code{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:14px}
    .code-block{background:#1e293b;color:#4ade80;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;margin:12px 0;white-space:pre-wrap}
    .meta{color:#64748b;font-size:13px;margin-bottom:20px}
    .tip{background:#fef3c7;border-left:4px solid #f59e0b;padding:12px 16px;margin:16px 0;border-radius:0 8px 8px 0;font-style:italic}
    .footer{margin-top:40px;padding-top:16px;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:11px;text-align:center}
    ul,ol{padding-left:20px}li{margin-bottom:4px}
    @media print{body{margin:20px}}</style></head><body>
    <h1>\${lesson?lesson.title:'Lesson'}</h1>
    <div class="meta">\${mod?mod.title:''} · Level: \${lesson?lesson.level:''} · PyData-Flow Pro by Adewale Samson Adeagbo</div>
    \${content.innerHTML}
    \${tip?'<div class="tip">'+tip.innerText+'</div>':''}
    <div class="footer">PyData-Flow Pro — Built by Adewale Samson Adeagbo · Lagos, Nigeria<br>linkedin.com/in/adewalesamsonadeagbo · github.com/cssadewale · cssadewale.pages.dev</div>
    </body></html>`);
    w.document.close();
    setTimeout(()=>w.print(),500);
    showToast('🖨️ Print dialog opened','info');
}

// ═══ DAILY STUDY GOAL ═══
function getDailyGoal(){
    const today=new Date().toISOString().slice(0,10);
    const data=JSON.parse(localStorage.getItem('daily_goal')||'{}');
    if(data.date!==today){data.date=today;data.lessonsToday=0;data.target=3;localStorage.setItem('daily_goal',JSON.stringify(data));}
    return data;
}
function incrementDailyGoal(){
    const data=getDailyGoal();
    data.lessonsToday++;
    localStorage.setItem('daily_goal',JSON.stringify(data));
}
function renderDailyGoal(){
    const c=document.getElementById('daily-goal-display');if(!c)return;
    const data=getDailyGoal();
    const pct=Math.min(100,Math.round(data.lessonsToday/data.target*100));
    const complete=data.lessonsToday>=data.target;
    c.innerHTML=`<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:var(--bg3);border:1px solid var(--brd);margin-bottom:12px;">
        <span style="font-size:1.4rem;">\${complete?'🎯':'📎'}</span>
        <div style="flex:1;">
            <div style="font-size:.72rem;font-weight:700;color:var(--tx2);">Daily Goal: \${data.lessonsToday}/\${data.target} lessons</div>
            <div style="height:4px;background:var(--bg4);border-radius:4px;overflow:hidden;margin-top:3px;">
                <div style="height:100%;width:\${pct}%;background:\${complete?'var(--green)':'var(--blue)'};border-radius:4px;transition:width .5s;"></div>
            </div>
        </div>
        \${complete?'<span style="font-size:.7rem;color:var(--green);font-weight:700;">Complete! ✅</span>':''}
    </div>`;
}

// ═══ MODULE CERTIFICATES ═══
function checkModuleCertificates(){
    MODULES.forEach(mod=>{
        const lessons=curriculum.filter(l=>l.module===mod.id);
        const allDone=lessons.every(l=>localStorage.getItem(`done_\${l.id}`));
        if(allDone&&!localStorage.getItem(`modcert_\${mod.id}`)){
            localStorage.setItem(`modcert_\${mod.id}`,'true');
            showToast(`📜 Module Certificate: \${mod.title} completed!`,'success');
        }
    });
}
function getModuleCertCount(){
    return MODULES.filter(m=>localStorage.getItem(`modcert_\${m.id}`)).length;
}

// ═══ LESSON TIME TRACKING ═══
let lessonStartTime=null;
function startLessonTimer(){lessonStartTime=Date.now();}
function getLessonDuration(){
    if(!lessonStartTime)return 0;
    return Math.round((Date.now()-lessonStartTime)/60000);
}
function saveLessonTime(id){
    const mins=getLessonDuration();
    if(mins>0&&mins<120){
        const total=parseInt(localStorage.getItem('total_lesson_minutes')||'0');
        localStorage.setItem('total_lesson_minutes',String(total+mins));
    }
}
function getTotalLessonMinutes(){return parseInt(localStorage.getItem('total_lesson_minutes')||'0');}
function toggleFaq(i){const a=document.getElementById('faq-a-'+i),ic=document.getElementById('faq-icon-'+i);if(a){a.classList.toggle('open');if(ic)ic.textContent=a.classList.contains('open')?'−':'+';}}

// ═══ ABOUT PAGE ═══
function renderAboutPage(){
    // Skills
    const sw=document.getElementById('skills-wrap');
    if(sw)sw.innerHTML=TECH_SKILLS.map(s=>'<span class="skill-tag">'+s+'</span>').join('');
    // HMG Subjects
    const hs=document.getElementById('hmg-subjects');
    if(hs)hs.innerHTML=HMG_SUBJECTS.map(s=>'<span class="hmg-subj">'+s+'</span>').join('');
    // Certifications
    const cg=document.getElementById('cert-grid');
    if(cg)cg.innerHTML=CERTS.map(c=>'<div class="cert-card"><div class="cert-icon">'+c.icon+'</div><div class="cert-title">'+c.title+'</div><div class="cert-org">'+c.org+'</div></div>').join('');
    // Projects
    const pg=document.getElementById('proj-grid');
    if(pg)pg.innerHTML=PROJECTS.map(p=>'<a class="proj-card" href="https://'+p.url+'" target="_blank" rel="noopener"><h4>'+p.name+'</h4><p>'+p.desc+'</p><span class="proj-url">↗ '+p.url+'</span></a>').join('');
}
