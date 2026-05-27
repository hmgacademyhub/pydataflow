/* ============================================
   PyData-Flow Pro — Complete Data Science Curriculum
   200 Lessons across 42 Modules
   ============================================ */

const MODULES = [
    { id:"m1", title:"Module 1: Python Foundations",      icon:"🐍", color:"#3b82f6", desc:"Core Python programming — variables, data types, operators, and basic I/O. The building blocks every data scientist needs." },
    { id:"m2", title:"Module 2: Control Flow & Functions", icon:"🔀", color:"#8b5cf6", desc:"Decision making with if/else, looping through data, and writing reusable functions. The logic layer." },
    { id:"m3", title:"Module 3: Data Structures",          icon:"🗂️", color:"#ec4899", desc:"Lists, tuples, dictionaries, sets — master the containers that hold your data." },
    { id:"m4", title:"Module 4: Working with Files & Data", icon:"📁", color:"#f59e0b", desc:"Reading CSVs, handling text files, working with JSON — real-world data ingestion." },
    { id:"m5", title:"Module 5: Pandas Mastery",            icon:"🐼", color:"#10b981", desc:"DataFrames, Series, filtering, grouping, merging, and reshaping data at scale." },
    { id:"m6", title:"Module 6: Data Visualization",        icon:"📊", color:"#ef4444", desc:"Matplotlib charts — bar, line, pie, scatter, histogram — turning numbers into insight." },
    { id:"m7", title:"Module 7: Statistics & Analysis",     icon:"📐", color:"#6366f1", desc:"Descriptive stats, distributions, correlation, outliers — the math behind the magic." },
    { id:"m8", title:"Module 8: Capstone Projects",         icon:"🏆", color:"#f59e0b", desc:"End-to-end data science projects using everything you've learned. Portfolio-ready work." },
    { id:"m9",  title:"Module 9: NumPy Deep Dive",          icon:"🔢", color:"#06b6d4", desc:"Numerical computing at scale — arrays, broadcasting, linear algebra, and random number generation. The engine under Pandas." },
    { id:"m10", title:"Module 10: Error Handling & Debugging", icon:"🐛", color:"#f97316", desc:"Try/except, common errors, debugging strategies, and defensive coding. Write code that doesn't break." },
    { id:"m11", title:"Module 11: Advanced Pandas",            icon:"🔬", color:"#14b8a6", desc:"Time series, window functions, string methods, multi-index, and performance optimization." },
    { id:"m12", title:"Module 12: Real-World Projects",        icon:"🌍", color:"#8b5cf6", desc:"Industry-grade projects: HR analytics, financial analysis, and a complete data pipeline." },
,
    { id:"m13", title:"Module 13: Data Wrangling Patterns", icon:"🔧", color:"#0ea5e9", desc:"Real-world data reshaping — wide vs long, multi-source integration, date/currency handling, and data quality scoring." },
    { id:"m14", title:"Module 14: Exploratory Data Analysis", icon:"🔍", color:"#d946ef", desc:"The EDA framework — univariate, bivariate, and multivariate analysis. The systematic approach every analyst uses." },
    { id:"m15", title:"Module 15: Industry Portfolio Projects", icon:"🌐", color:"#059669", desc:"Six industry-grade projects: e-commerce, healthcare, social media, real estate, supply chain, and a full portfolio report." },
,
    { id:"m16", title:"Module 16: Practice Lab — Python Basics", icon:"🏋️", color:"#10b981", desc:"Hands-on coding exercises covering variables, operators, strings, loops, and functions. Write, run, and verify your own solutions." },
    { id:"m17", title:"Module 17: Practice Lab — Data & Pandas", icon:"💪", color:"#0ea5e9", desc:"Applied exercises combining data structures, file handling, and Pandas operations. Build real analysis workflows from scratch." },
    { id:"m18", title:"Module 18: Practice Lab — Viz & Stats", icon:"🧪", color:"#f97316", desc:"Chart-building exercises and statistical analysis tasks. Create professional visuals and interpret statistical results." },
    { id:"m19", title:"Module 19: Data Normalization & Scaling", icon:"📏", color:"#6366f1", desc:"Min-Max scaling, Z-score standardization, and when each matters. Essential preprocessing for any analysis or ML pipeline." },
    { id:"m20", title:"Module 20: A/B Testing & Experiments", icon:"🧬", color:"#ec4899", desc:"Design experiments, calculate sample sizes, interpret results. The scientific method applied to business data." },
    { id:"m21", title:"Module 21: SQL for Data Scientists", icon:"🗄️", color:"#8b5cf6", desc:"SQL SELECT, WHERE, GROUP BY, JOIN — written and simulated in Python. The query language every DS role requires." },
    { id:"m22", title:"Module 22: Automated Reports", icon:"📑", color:"#14b8a6", desc:"Generate professional text-based reports programmatically. Summary statistics, findings, and recommendations — all automated." },
    { id:"m23", title:"Module 23: APIs & Web Data", icon:"🌐", color:"#f59e0b", desc:"How APIs work, JSON responses, pagination, and rate limits. Conceptual understanding with hands-on JSON parsing." },
    { id:"m24", title:"Module 24: Intro to Machine Learning", icon:"🤖", color:"#ef4444", desc:"What ML is, supervised vs unsupervised, train/test split, and building a simple classifier — all from scratch, no sklearn required." },
    { id:"m25", title:"Module 25: Practice Lab — Advanced", icon:"🔥", color:"#d946ef", desc:"Expert-level exercises combining EDA, wrangling, visualization, and reporting into complete mini-projects." },
    { id:"m26", title:"Module 26: Certification Exams", icon:"🎓", color:"#059669", desc:"Timed certification exams at 5 levels: Foundations, Analyst, Specialist, Expert, and Grand Master. Pass all five to earn your certificate." },
,
    { id:"m27", title:"Module 27: Python Deep Dive", icon:"🧬", color:"#0891b2", desc:"Scope, generators, *args/**kwargs, file I/O, and advanced string methods. Master Python itself before mastering its libraries." },
    { id:"m28", title:"Module 28: Data Engineering", icon:"⚙️", color:"#7c3aed", desc:"ETL pipelines, data validation, chunked processing, and building reproducible data workflows. Production-grade data handling." },
    { id:"m29", title:"Module 29: Feature Engineering Pro", icon:"🔬", color:"#db2777", desc:"Binning, one-hot encoding, feature interactions, handling imbalanced data. The art that separates average from great models." },
    { id:"m30", title:"Module 30: ML Algorithms from Scratch", icon:"🤖", color:"#dc2626", desc:"Decision trees, KNN, and logistic regression — built from scratch with only NumPy. Understand what sklearn does under the hood." },
    { id:"m31", title:"Module 31: Model Evaluation", icon:"📏", color:"#0d9488", desc:"Accuracy, precision, recall, F1, confusion matrix, cross-validation, and the bias-variance tradeoff. Judge your models properly." },
    { id:"m32", title:"Module 32: Practice Lab — Expert", icon:"🔥", color:"#ea580c", desc:"Expert-level exercises combining advanced Python, data engineering, feature engineering, and ML. Build production-quality solutions." },
    { id:"m33", title:"Module 33: Code-Along Projects", icon:"🏗️", color:"#4f46e5", desc:"Four guided projects built step-by-step: student tracker, sales analyzer, health screener, and a complete ML pipeline." },
    { id:"m34", title:"Module 34: Final Certifications", icon:"🎓", color:"#047857", desc:"Comprehensive certification exams covering every topic. Pass all six to prove total mastery of Python for Data Science." },
,
    { id:"m35", title:"Module 35: Python OOP for Data Science", icon:"🏛️", color:"#0284c7", desc:"Classes, objects, methods, and properties. Build reusable data analysis tools using object-oriented programming." },
    { id:"m36", title:"Module 36: Text & NLP Fundamentals", icon:"📰", color:"#c026d3", desc:"Text preprocessing, tokenization, TF-IDF, and sentiment analysis — all from scratch without ML APIs." },
    { id:"m37", title:"Module 37: Time Series & Forecasting", icon:"📆", color:"#0f766e", desc:"Decomposition, moving averages, trend detection, and simple forecasting. Predict future values from historical data." },
    { id:"m38", title:"Module 38: Data Storytelling", icon:"📖", color:"#b45309", desc:"Turn analysis into narrative. The STAR framework, executive summaries, and presenting data to non-technical audiences." },
    { id:"m39", title:"Module 39: Nigerian Data Projects", icon:"🇳🇬", color:"#15803d", desc:"Five projects using Nigerian context: education, transport, e-commerce, healthcare, and agriculture. Built for HMG Academy." },
    { id:"m40", title:"Module 40: Career & Portfolio", icon:"💼", color:"#7c3aed", desc:"Portfolio building, interview preparation, resume optimization, and mock interview questions. Land your first data science role." },
    { id:"m41", title:"Module 41: Practice Lab — Comprehensive", icon:"🏆", color:"#dc2626", desc:"Six comprehensive exercises that combine multiple skills. The final practice round before certification." },
    { id:"m42", title:"Module 42: HMG Academy Certifications", icon:"🎓", color:"#047857", desc:"Six-level HMG Academy certification path: Foundation → Analyst → Specialist → Expert → Master → Grand Master." },
];

const curriculum = [
    // ──────────── MODULE 1: PYTHON FOUNDATIONS ────────────
    {
        id:"py_intro", module:"m1", title:"1.1 What is Python?", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">Welcome to Python</h2>
<p class="mb-4">Python is the <b>#1 language for Data Science</b>. Why? Because it reads almost like English, has thousands of free libraries, and is used by Google, Netflix, NASA, and banks worldwide.</p>
<div class="code-block">print("Hello, Data Scientist!")</div>
<p class="mb-2"><b>Why Python for Data Science?</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Easy to learn</b> — closest to natural English</li>
<li><b>Massive ecosystem</b> — Pandas, NumPy, Matplotlib, Scikit-learn</li>
<li><b>Free & open source</b> — no license costs</li>
<li><b>Huge community</b> — help is always available</li>
</ul>
<p>This platform runs Python <b>directly in your browser</b> using Pyodide — no installation needed!</p>`,
        tip:"Tutor's Insight: You don't need to be a 'math genius' or 'computer expert' to learn Python. You just need curiosity and consistency. Start small, practice daily.",
        defaultCode:`# Your very first Python program!\nprint("Hello, Data Scientist!")\nprint("Welcome to PyData-Flow Pro")\nprint("Today we begin an amazing journey! 🚀")`,
        quiz:{question:"Why is Python the #1 language for Data Science?",options:["It is the fastest language","It is easy to learn and has a massive ecosystem","It was created by a data scientist","It only works for data science"],answer:1}
    },
    {
        id:"variables", module:"m1", title:"1.2 Variables & Data Types", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">Storing Data in Variables</h2>
<p class="mb-4">A <b>variable</b> is a labeled container. Instead of remembering that a student scored 95, you write <code>score = 95</code> and Python remembers it for you.</p>
<div class="code-block">name = "Adewale"    # String (text)<br>age = 28             # Integer (whole number)<br>gpa = 3.85           # Float (decimal)<br>is_student = True    # Boolean (True/False)</div>
<p class="mb-2"><b>The 4 Basic Data Types:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>String (str)</b> — text in quotes: <code>"Hello"</code></li>
<li><b>Integer (int)</b> — whole numbers: <code>42</code></li>
<li><b>Float (float)</b> — decimals: <code>3.14</code></li>
<li><b>Boolean (bool)</b> — <code>True</code> or <code>False</code></li>
</ul>
<p><b>Naming Rules:</b> Use lowercase with underscores: <code>student_name</code>, not <code>StudentName</code>.</p>`,
        tip:"Tutor's Insight: Always name variables clearly. Use 'total_revenue' instead of 'tr'. Good names make code self-documenting. Your future self will thank you.",
        defaultCode:`# Create variables of different types\nname = "Lagos"\nyear = 2026\ntemperature = 32.5\nis_sunny = True\n\n# Check their types\nprint(f"City: {name} (type: {type(name).__name__})")\nprint(f"Year: {year} (type: {type(year).__name__})")\nprint(f"Temp: {temperature}°C (type: {type(temperature).__name__})")\nprint(f"Sunny: {is_sunny} (type: {type(is_sunny).__name__})")`,
        quiz:{question:"Which data type stores decimal numbers?",options:["String","Integer","Float","Boolean"],answer:2}
    },
    {
        id:"operators", module:"m1", title:"1.3 Operators & Expressions", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">Doing Calculations</h2>
<p class="mb-4">Python can do math! Operators let you add, subtract, multiply, divide, and more.</p>
<div class="code-block">+  Addition        10 + 3  → 13<br>-  Subtraction     10 - 3  → 7<br>*  Multiplication  10 * 3  → 30<br>/  Division        10 / 3  → 3.333<br>// Floor Division  10 // 3 → 3<br>%  Modulus         10 % 3  → 1<br>** Power           10 ** 3 → 1000</div>
<p class="mb-2"><b>Comparison Operators</b> (return True/False):</p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>==</code> Equal to | <code>!=</code> Not equal to</li>
<li><code>&gt;</code> Greater than | <code>&lt;</code> Less than</li>
<li><code>&gt;=</code> Greater or equal | <code>&lt;=</code> Less or equal</li>
</ul>`,
        tip:"Tutor's Insight: Use // for integer division when you need whole numbers (like splitting items into groups). Use % to find remainders (useful for checking even/odd).",
        defaultCode:`# Arithmetic\nrevenue = 500000\nexpenses = 320000\nprofit = revenue - expenses\nmargin = (profit / revenue) * 100\n\nprint(f"Revenue:  ₦{revenue:,}")\nprint(f"Expenses: ₦{expenses:,}")\nprint(f"Profit:   ₦{profit:,}")\nprint(f"Margin:   {margin:.1f}%")\n\n# Comparison\nprint(f"\\nIs profitable? {profit > 0}")\nprint(f"High margin?   {margin > 30}")`,
        quiz:{question:"What does 10 % 3 return?",options:["3","3.33","1","0"],answer:2}
    },
    {
        id:"strings", module:"m1", title:"1.4 String Operations", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">Working with Text</h2>
<p class="mb-4">Strings are everywhere in data — names, addresses, emails, descriptions. Python has powerful string methods.</p>
<div class="code-block">name = "adewale samson"<br>print(name.upper())      # ADEWALE SAMSON<br>print(name.title())      # Adewale Samson<br>print(name.split())      # ['adewale', 'samson']<br>print(len(name))         # 14</div>
<p class="mb-2"><b>Essential String Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.upper()</code> / <code>.lower()</code> / <code>.title()</code> — change case</li>
<li><code>.strip()</code> — remove whitespace</li>
<li><code>.replace(old, new)</code> — substitute text</li>
<li><code>.split(sep)</code> — break into list</li>
<li><code>.startswith()</code> / <code>.endswith()</code> — check prefixes/suffixes</li>
<li><b>f-strings:</b> <code>f"Hello {name}"</code> — embed variables in text</li>
</ul>`,
        tip:"Tutor's Insight: f-strings (formatted string literals) are your best friend. Always use them for combining variables with text: f\"Score: {score}\".",
        defaultCode:`# String methods\nemail = "  Student@University.EDU.NG  "\ncleaned = email.strip().lower()\n\nprint(f"Original: '{email}'")\nprint(f"Cleaned:  '{cleaned}'")\nprint(f"Domain:   '{cleaned.split('@')[1]}'")\n\n# f-string formatting\nstudent = "Bisi"\nscore = 87.5\nprint(f"\\n{student} scored {score:.0f}%")\nprint(f"Grade: {'A' if score >= 70 else 'B'}")`,
        quiz:{question:"What does 'hello world'.title() return?",options:["'HELLO WORLD'","'hello world'","'Hello World'","'Hello world'"],answer:2}
    },
    {
        id:"input_output", module:"m1", title:"1.5 Input & Output", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">Talking to the User</h2>
<p class="mb-4"><code>print()</code> sends output to the screen. <code>input()</code> receives text from the user. These are the two basic communication channels.</p>
<div class="code-block">print("Hello!")          # Basic output<br>print(x, y, sep=", ")   # Custom separator<br>print(f"Value: {x}")    # Formatted output</div>
<p class="mb-2"><b>Print Formatting Options:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>f"{value:.2f}"</code> — 2 decimal places</li>
<li><code>f"{value:,}"</code> — thousands separator</li>
<li><code>f"{value:>10}"</code> — right-align in 10 chars</li>
<li><code>f"{value:.1%}"</code> — percentage format</li>
</ul>
<p><i>Note: input() is limited in browser Python. We focus on print() formatting here.</i></p>`,
        tip:"Tutor's Insight: Mastering print formatting makes your output professional. Use f'{value:,.2f}' for currency and f'{value:.1%}' for percentages.",
        defaultCode:`# Professional output formatting\nproducts = [\n    ("Laptop", 450000, 12),\n    ("Phone", 180000, 45),\n    ("Tablet", 95000, 28),\n]\n\nprint(f"{'Product':<10} {'Price':>12} {'Qty':>6} {'Revenue':>14}")\nprint("-" * 44)\nfor name, price, qty in products:\n    rev = price * qty\n    print(f"{name:<10} ₦{price:>10,} {qty:>6} ₦{rev:>12,}")`,
        quiz:{question:"What does f'{3.14159:.2f}' output?",options:["3.14159","3.14","3.1","3"],answer:1}
    },

    // ──────────── MODULE 2: CONTROL FLOW ────────────
    {
        id:"if_else", module:"m2", title:"2.1 If / Else Decisions", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Making Decisions in Code</h2>
<p class="mb-4">Programs need to make choices. <b>If/else</b> statements let your code take different paths based on conditions.</p>
<div class="code-block">score = 85<br><br>if score >= 90:<br>    grade = "A"<br>elif score >= 70:<br>    grade = "B"<br>elif score >= 50:<br>    grade = "C"<br>else:<br>    grade = "F"</div>
<p class="mb-2"><b>Key Rules:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Conditions must be <b>True or False</b></li>
<li>Use <code>elif</code> for additional conditions</li>
<li><code>else</code> catches everything not matched</li>
<li><b>Indentation matters!</b> Use 4 spaces</li>
</ul>`,
        tip:"Tutor's Insight: In data science, you'll use if/else for data classification, filtering outliers, and creating new categories from existing data.",
        defaultCode:`# Grading system\nstudents = {\n    "Adewale": 95, "Bisi": 72,\n    "Chidi": 58, "Dayo": 43, "Eka": 88\n}\n\nfor name, score in students.items():\n    if score >= 90:\n        grade, remark = "A", "Excellent"\n    elif score >= 70:\n        grade, remark = "B", "Very Good"\n    elif score >= 50:\n        grade, remark = "C", "Fair"\n    else:\n        grade, remark = "F", "Needs Improvement"\n    print(f"{name:>8}: {score}% → Grade {grade} ({remark})")`,
        quiz:{question:"What keyword is used for additional conditions after 'if'?",options:["else if","elif","elseif","otherwise"],answer:1}
    },
    {
        id:"for_loops", module:"m2", title:"2.2 For Loops", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Repeating Actions</h2>
<p class="mb-4">A <b>for loop</b> repeats code for each item in a sequence. This is fundamental to processing data — you'll loop through rows, columns, and files constantly.</p>
<div class="code-block">fruits = ["mango", "orange", "banana"]<br><br>for fruit in fruits:<br>    print(f"I like {fruit}")</div>
<p class="mb-2"><b>Useful Loop Patterns:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>range(n)</code> — loop n times: 0 to n-1</li>
<li><code>range(start, stop, step)</code> — custom range</li>
<li><code>enumerate(list)</code> — get index + value</li>
<li><code>zip(list1, list2)</code> — pair items together</li>
</ul>`,
        tip:"Tutor's Insight: In Pandas, you'll rarely write explicit for loops (vectorized operations are faster). But understanding loops is crucial for grasping what Pandas does under the hood.",
        defaultCode:`# Loop through data\nscores = [85, 92, 78, 90, 88, 95, 72]\n\nprint("=== Score Analysis ===")\ntotal = 0\nfor i, score in enumerate(scores, 1):\n    status = "✅ Pass" if score >= 75 else "❌ Fail"\n    print(f"Student {i}: {score}% {status}")\n    total += score\n\navg = total / len(scores)\nprint(f"\\nAverage: {avg:.1f}%")\nprint(f"Above average: {sum(1 for s in scores if s > avg)}")`,
        quiz:{question:"What does range(5) generate?",options:["1,2,3,4,5","0,1,2,3,4","0,1,2,3,4,5","5,4,3,2,1"],answer:1}
    },
    {
        id:"while_loops", module:"m2", title:"2.3 While Loops", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Looping Until a Condition</h2>
<p class="mb-4">A <b>while loop</b> keeps running as long as a condition is True. Use it when you don't know in advance how many times to repeat.</p>
<div class="code-block">count = 0<br>while count < 5:<br>    print(count)<br>    count += 1</div>
<p class="mb-2"><b>Loop Control:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>break</code> — stop the loop immediately</li>
<li><code>continue</code> — skip to next iteration</li>
<li>Always ensure the condition eventually becomes False (avoid infinite loops!)</li>
</ul>`,
        tip:"Tutor's Insight: While loops are used in simulations, convergence algorithms, and data streaming. In everyday data science, for loops and Pandas operations are more common.",
        defaultCode:`# Compound interest calculator\nprincipal = 100000  # ₦100,000\nrate = 0.08  # 8% annual\ntarget = 200000  # Double the money\n\nyears = 0\namount = principal\n\nprint(f"Starting: ₦{amount:,.0f}")\nprint(f"Target:   ₦{target:,.0f}")\nprint(f"Rate:     {rate:.0%}\\n")\n\nwhile amount < target:\n    amount *= (1 + rate)\n    years += 1\n    print(f"Year {years:>2}: ₦{amount:>12,.0f}")\n\nprint(f"\\n✅ Takes {years} years to reach ₦{target:,}")`,
        quiz:{question:"What does 'break' do inside a loop?",options:["Pauses the loop","Stops the loop immediately","Skips to next iteration","Restarts the loop"],answer:1}
    },
    {
        id:"functions", module:"m2", title:"2.4 Writing Functions", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Reusable Code Blocks</h2>
<p class="mb-4">A <b>function</b> is a named block of code you can call whenever needed. Functions prevent repetition and make code organized.</p>
<div class="code-block">def calculate_grade(score):<br>    if score >= 70: return "Pass"<br>    else: return "Fail"<br><br>result = calculate_grade(85)<br>print(result)  # Pass</div>
<p class="mb-2"><b>Function Anatomy:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>def</code> — keyword to define a function</li>
<li><b>Parameters</b> — input variables in parentheses</li>
<li><code>return</code> — sends a value back to the caller</li>
<li><b>Default arguments:</b> <code>def greet(name="World")</code></li>
</ul>`,
        tip:"Tutor's Insight: In data science, you'll write functions for data cleaning pipelines, custom transformations, and analysis helpers. A good function does ONE thing well.",
        defaultCode:`# Data analysis functions\ndef analyze_scores(scores, label="Dataset"):\n    """Analyze a list of numeric scores."""\n    n = len(scores)\n    avg = sum(scores) / n\n    highest = max(scores)\n    lowest = min(scores)\n    spread = highest - lowest\n    \n    print(f"📊 {label} Analysis")\n    print(f"   Count:   {n}")\n    print(f"   Average: {avg:.1f}")\n    print(f"   Highest: {highest}")\n    print(f"   Lowest:  {lowest}")\n    print(f"   Range:   {spread}")\n    return avg\n\n# Use the function\nmaths = [85, 92, 78, 90, 88]\nscience = [72, 65, 88, 91, 78]\n\navg_m = analyze_scores(maths, "Mathematics")\nprint()\navg_s = analyze_scores(science, "Science")\nprint(f"\\n🏆 Better subject: {'Maths' if avg_m > avg_s else 'Science'}")`,
        quiz:{question:"What keyword sends a value back from a function?",options:["send","output","return","yield"],answer:2}
    },
    {
        id:"list_comp", module:"m2", title:"2.5 List Comprehensions", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Elegant One-Line Loops</h2>
<p class="mb-4"><b>List comprehensions</b> are a Pythonic way to create lists in a single line. They're faster and more readable than regular loops for simple transformations.</p>
<div class="code-block"># Regular loop<br>squares = []<br>for x in range(5):<br>    squares.append(x**2)<br><br># List comprehension (same result)<br>squares = [x**2 for x in range(5)]</div>
<p class="mb-2"><b>Patterns:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>[expr for item in iterable]</code> — transform each item</li>
<li><code>[expr for item in iterable if cond]</code> — filter + transform</li>
<li><code>{key: val for item in iterable}</code> — dict comprehension</li>
</ul>`,
        tip:"Tutor's Insight: List comprehensions are used EVERYWHERE in Python data science. They're the standard way to transform and filter data. Master them early.",
        defaultCode:`# List comprehensions in action\nscores = [85, 42, 92, 38, 78, 55, 90, 67, 88, 45]\n\n# Filter passing scores\npassing = [s for s in scores if s >= 50]\nfailing = [s for s in scores if s < 50]\n\n# Transform: grade each score\ngrades = ["Pass" if s >= 50 else "Fail" for s in scores]\n\n# Create labeled results\nresults = [f"Score {s}: {'✅' if s >= 50 else '❌'}" for s in scores]\n\nprint("All scores:", scores)\nprint("Passing:", passing)\nprint("Failing:", failing)\nprint(f"Pass rate: {len(passing)/len(scores):.0%}")\nprint("\\nDetailed:")\nfor r in results:\n    print(f"  {r}")`,
        quiz:{question:"What is [x*2 for x in [1,2,3]]?",options:["[1,2,3]","[2,4,6]","[1,4,9]","[3,6,9]"],answer:1}
    },

    // ──────────── MODULE 3: DATA STRUCTURES ────────────
    {
        id:"lists_deep", module:"m3", title:"3.1 Lists In-Depth", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Mastering Lists</h2>
<p class="mb-4">Lists are <b>ordered, mutable collections</b>. They're the most-used data structure in Python and the foundation of data science.</p>
<div class="code-block">data = [10, 20, 30, 40, 50]<br>data[0]      # 10 (first item)<br>data[-1]     # 50 (last item)<br>data[1:4]    # [20, 30, 40] (slicing)</div>
<p class="mb-2"><b>Essential List Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.append(x)</code> — add to end</li>
<li><code>.insert(i, x)</code> — add at position</li>
<li><code>.remove(x)</code> — remove first occurrence</li>
<li><code>.pop(i)</code> — remove and return item</li>
<li><code>.sort()</code> — sort in place</li>
<li><code>.reverse()</code> — reverse in place</li>
<li><code>.count(x)</code> — count occurrences</li>
<li><code>.index(x)</code> — find position</li>
</ul>`,
        tip:"Tutor's Insight: Slicing is incredibly powerful: data[::2] gets every 2nd item, data[::-1] reverses the list. Master slicing and you master lists.",
        defaultCode:`# List operations for data science\ntemps = [32, 28, 35, 31, 29, 36, 30, 33, 27, 34]\n\nprint(f"All temps: {temps}")\nprint(f"First 3:   {temps[:3]}")\nprint(f"Last 3:    {temps[-3:]}")\nprint(f"Reversed:  {temps[::-1]}")\n\n# Sorting\nsorted_temps = sorted(temps)\nprint(f"\\nSorted: {sorted_temps}")\nprint(f"Min: {min(temps)}°C")\nprint(f"Max: {max(temps)}°C")\nprint(f"Avg: {sum(temps)/len(temps):.1f}°C")\n\n# Finding position\nhottest = max(temps)\nprint(f"\\nHottest day was day {temps.index(hottest) + 1}")`,
        quiz:{question:"What does data[-1] return?",options:["The first item","An error","The last item","The second-to-last item"],answer:2}
    },
    {
        id:"tuples", module:"m3", title:"3.2 Tuples", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Immutable Sequences</h2>
<p class="mb-4"><b>Tuples</b> are like lists but <b>cannot be changed</b> after creation. They're used for fixed data like coordinates, RGB colors, and database records.</p>
<div class="code-block">point = (10, 20)     # A coordinate<br>rgb = (255, 128, 0)  # Orange color<br>x, y = point         # Unpacking!</div>
<p class="mb-2"><b>When to Use Tuples:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Data that shouldn't change (coordinates, configs)</li>
<li>Dictionary keys (lists can't be keys!)</li>
<li>Function return values (return multiple things)</li>
<li>Slightly faster than lists for read-only data</li>
</ul>`,
        tip:"Tutor's Insight: In Pandas, df.shape returns a tuple (rows, cols). Many Pandas operations return tuples. Understanding them is essential.",
        defaultCode:`# Tuples in practice\nstudents = [\n    ("Adewale", 95, "A"),\n    ("Bisi", 78, "B"),\n    ("Chidi", 62, "C"),\n    ("Dayo", 88, "B"),\n]\n\nprint(f"{'Name':<10} {'Score':>6} {'Grade':>6}")\nprint("-" * 24)\nfor name, score, grade in students:\n    print(f"{name:<10} {score:>6} {grade:>6}")\n\n# Multiple return values\ndef get_stats(scores):\n    return min(scores), max(scores), sum(scores)/len(scores)\n\nlow, high, avg = get_stats([s[1] for s in students])\nprint(f"\\nMin: {low}  Max: {high}  Avg: {avg:.1f}")`,
        quiz:{question:"Can you modify a tuple after creation?",options:["Yes, with .modify()","Yes, with indexing","No, tuples are immutable","Only the first item"],answer:2}
    },
    {
        id:"dicts", module:"m3", title:"3.3 Dictionaries", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Key-Value Storage</h2>
<p class="mb-4"><b>Dictionaries</b> store data as key-value pairs. Think of them as a real dictionary: word → definition. They're the Python equivalent of JSON objects.</p>
<div class="code-block">student = {<br>    "name": "Adewale",<br>    "score": 95,<br>    "grade": "A"<br>}<br>print(student["name"])  # Adewale</div>
<p class="mb-2"><b>Key Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.keys()</code>, <code>.values()</code>, <code>.items()</code></li>
<li><code>.get(key, default)</code> — safe access</li>
<li><code>.update(other_dict)</code> — merge dicts</li>
<li><code>key in dict</code> — check existence</li>
</ul>`,
        tip:"Tutor's Insight: Dictionaries are the backbone of data representation. JSON (the internet's data format) IS a dictionary. Pandas rows can be represented as dicts.",
        defaultCode:`# Student database\nstudents = {\n    "STU001": {"name": "Adewale", "score": 95, "subject": "Maths"},\n    "STU002": {"name": "Bisi", "score": 78, "subject": "Science"},\n    "STU003": {"name": "Chidi", "score": 88, "subject": "Maths"},\n    "STU004": {"name": "Dayo", "score": 62, "subject": "Science"},\n}\n\n# Iterate and analyze\nfor sid, info in students.items():\n    status = "Pass ✅" if info["score"] >= 70 else "Fail ❌"\n    print(f"{sid}: {info['name']:<10} {info['subject']:<8} {info['score']}% {status}")\n\n# Count by subject\nfrom collections import Counter\nsubjects = Counter(s["subject"] for s in students.values())\nprint(f"\\nBy subject: {dict(subjects)}")`,
        quiz:{question:"How do you safely get a value from a dict without risking an error?",options:["dict[key]","dict.safe(key)","dict.get(key, default)","dict.find(key)"],answer:2}
    },
    {
        id:"sets", module:"m3", title:"3.4 Sets", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Unique Collections</h2>
<p class="mb-4"><b>Sets</b> are unordered collections of <b>unique items</b>. They're perfect for removing duplicates, membership testing, and set operations (union, intersection).</p>
<div class="code-block">colors = {"red", "blue", "green", "red"}<br># → {"red", "blue", "green"} (no duplicates!)</div>
<p class="mb-2"><b>Set Operations:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>A | B</code> or <code>A.union(B)</code> — all items from both</li>
<li><code>A & B</code> or <code>A.intersection(B)</code> — items in both</li>
<li><code>A - B</code> or <code>A.difference(B)</code> — items only in A</li>
<li><code>A ^ B</code> — items in one but not both</li>
</ul>`,
        tip:"Tutor's Insight: Sets are blazingly fast for 'is this item in the collection?' checks. Use them when you need to find unique values, common items, or differences between datasets.",
        defaultCode:`# Set operations for data analysis\nclass_a = {"Adewale", "Bisi", "Chidi", "Dayo", "Eka"}\nclass_b = {"Chidi", "Femi", "Grace", "Eka", "Hassan"}\n\nprint(f"Class A: {class_a}")\nprint(f"Class B: {class_b}")\nprint(f"\\nIn both classes:  {class_a & class_b}")\nprint(f"All students:     {class_a | class_b}")\nprint(f"Only in A:        {class_a - class_b}")\nprint(f"Only in B:        {class_b - class_a}")\n\n# Remove duplicates from data\ndata = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]\nunique = sorted(set(data))\nprint(f"\\nRaw data:    {data}")\nprint(f"Unique vals: {unique}")\nprint(f"Duplicates removed: {len(data) - len(unique)}")`,
        quiz:{question:"What is the main feature of a set?",options:["Ordered items","Key-value pairs","Only unique items","Fixed size"],answer:2}
    },

    // ──────────── MODULE 4: FILES & DATA ────────────
    {
        id:"csv_basics", module:"m4", title:"4.1 Reading CSV Files", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Your First Data File</h2>
<p class="mb-4"><b>CSV (Comma-Separated Values)</b> is the most common data format. It's a plain text file where each line is a row and values are separated by commas.</p>
<div class="code-block">import pandas as pd<br>df = pd.read_csv('data.csv')<br>print(df.head())   # First 5 rows<br>print(df.shape)    # (rows, cols)</div>
<p class="mb-2"><b>Common Parameters:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>sep=','</code> — column delimiter</li>
<li><code>header=0</code> — row number for column names</li>
<li><code>index_col=0</code> — which column is the index</li>
<li><code>na_values=['N/A','?']</code> — treat as missing</li>
<li><code>usecols=[0,1,3]</code> — load specific columns</li>
</ul>
<p>📌 Use the <b>Dataset Hub</b> to load sample data!</p>`,
        tip:"Tutor's Insight: Always run df.head(), df.shape, and df.info() immediately after loading data. This 30-second habit prevents hours of debugging later.",
        defaultCode:`import pandas as pd\n\n# Load the dataset (select one from Dataset Hub!)\ndf = pd.read_csv('data.csv')\n\n# The 3 commands you should ALWAYS run first\nprint("=== Head (first 5 rows) ===")\nprint(df.head())\nprint(f"\\n=== Shape ===")\nprint(f"{df.shape[0]} rows × {df.shape[1]} columns")\nprint(f"\\n=== Column Types ===")\nprint(df.dtypes)`,
        quiz:{question:"What function reads a CSV file into a DataFrame?",options:["pd.open_csv()","pd.load('file.csv')","pd.read_csv()","pd.import_csv()"],answer:2}
    },
    {
        id:"data_cleaning", module:"m4", title:"4.2 Data Cleaning Basics", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Cleaning Messy Data</h2>
<p class="mb-4">Real-world data is <b>always messy</b>. Missing values, duplicates, wrong types — cleaning data takes 60-80% of a data scientist's time!</p>
<div class="code-block">df.isnull().sum()      # Count missing per column<br>df.dropna()            # Remove rows with missing<br>df.fillna(0)           # Replace missing with 0<br>df.drop_duplicates()   # Remove duplicate rows</div>
<p class="mb-2"><b>Common Cleaning Tasks:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Missing values:</b> drop, fill, or interpolate</li>
<li><b>Duplicates:</b> detect and remove</li>
<li><b>Type conversion:</b> <code>df['col'].astype(int)</code></li>
<li><b>String cleaning:</b> <code>df['col'].str.strip().str.lower()</code></li>
<li><b>Renaming columns:</b> <code>df.rename(columns={'old':'new'})</code></li>
</ul>`,
        tip:"Tutor's Insight: Never delete data blindly. Always check WHY it's missing first. Sometimes missing data IS the insight (e.g., students who didn't submit assignments).",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Create sample messy data\ndf = pd.DataFrame({\n    'Name': ['Adewale', 'Bisi', 'Chidi', 'Adewale', 'Eka', None],\n    'Score': [95, None, 72, 95, 88, 65],\n    'Subject': [' Maths ', 'Science', 'maths', ' Maths ', 'SCIENCE', 'Science']\n})\n\nprint("=== BEFORE CLEANING ===")\nprint(df)\nprint(f"\\nMissing values:\\n{df.isnull().sum()}")\n\n# Clean it!\ndf_clean = df.copy()\ndf_clean['Name'] = df_clean['Name'].fillna('Unknown')\ndf_clean['Score'] = df_clean['Score'].fillna(df_clean['Score'].mean())\ndf_clean['Subject'] = df_clean['Subject'].str.strip().str.title()\ndf_clean = df_clean.drop_duplicates()\n\nprint("\\n=== AFTER CLEANING ===")\nprint(df_clean)\nprint(f"\\nRows removed: {len(df) - len(df_clean)}")`,
        quiz:{question:"What percentage of a data scientist's time is typically spent cleaning data?",options:["10-20%","30-40%","60-80%","90-100%"],answer:2}
    },
    {
        id:"json_data", module:"m4", title:"4.3 Working with JSON", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">JSON — The Internet's Data Format</h2>
<p class="mb-4"><b>JSON (JavaScript Object Notation)</b> is how APIs and web services send data. It looks like Python dictionaries and lists.</p>
<div class="code-block">import json<br><br># Python dict → JSON string<br>data = {"name": "Adewale", "score": 95}<br>json_str = json.dumps(data, indent=2)<br><br># JSON string → Python dict<br>parsed = json.loads(json_str)</div>
<p class="mb-2"><b>JSON ↔ Python Mapping:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>JSON object { } → Python dict { }</li>
<li>JSON array [ ] → Python list [ ]</li>
<li>JSON string → Python str</li>
<li>JSON number → Python int/float</li>
<li>JSON true/false → Python True/False</li>
<li>JSON null → Python None</li>
</ul>`,
        tip:"Tutor's Insight: APIs return JSON. Pandas can read JSON directly with pd.read_json(). Understanding JSON is essential for web data and API work.",
        defaultCode:`import json\nimport pandas as pd\n\n# Create structured data as JSON\nstudents_json = json.dumps([\n    {"name": "Adewale", "scores": {"maths": 95, "science": 88}},\n    {"name": "Bisi", "scores": {"maths": 72, "science": 91}},\n    {"name": "Chidi", "scores": {"maths": 85, "science": 78}},\n], indent=2)\n\nprint("JSON Format:")\nprint(students_json)\n\n# Parse it back\ndata = json.loads(students_json)\n\n# Convert to DataFrame\nrows = []\nfor s in data:\n    rows.append({"name": s["name"], **s["scores"]})\n\ndf = pd.DataFrame(rows)\nprint("\\nAs DataFrame:")\nprint(df)`,
        quiz:{question:"What Python function converts a dict to a JSON string?",options:["json.parse()","json.dumps()","json.encode()","json.convert()"],answer:1}
    },

    // ──────────── MODULE 5: PANDAS MASTERY ────────────
    {
        id:"dataframes", module:"m5", title:"5.1 DataFrames Deep Dive", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">The Heart of Data Science</h2>
<p class="mb-4">A <b>DataFrame</b> is a 2D table with labeled rows and columns. It's the central object in Pandas and the tool you'll use 90% of the time.</p>
<div class="code-block">import pandas as pd<br>df = pd.DataFrame({<br>    'Name': ['Adewale', 'Bisi'],<br>    'Score': [95, 78]<br>})<br>print(df)</div>
<p class="mb-2"><b>Core Attributes:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>df.shape</code> — (rows, columns)</li>
<li><code>df.columns</code> — column names</li>
<li><code>df.index</code> — row labels</li>
<li><code>df.dtypes</code> — data types per column</li>
<li><code>df.describe()</code> — statistical summary</li>
<li><code>df.info()</code> — comprehensive overview</li>
</ul>`,
        tip:"Tutor's Insight: Think of a DataFrame as a 'super-powered Excel spreadsheet' that can handle millions of rows, do complex calculations, and create charts — all with a few lines of code.",
        defaultCode:`import pandas as pd\n\ndf = pd.read_csv('data.csv')\n\n# Comprehensive exploration\nprint("=== DataFrame Overview ===")\nprint(f"Shape: {df.shape[0]} rows × {df.shape[1]} columns")\nprint(f"Columns: {list(df.columns)}")\nprint(f"\\n=== First 3 rows ===")\nprint(df.head(3))\nprint(f"\\n=== Last 3 rows ===")\nprint(df.tail(3))\nprint(f"\\n=== Data Types ===")\nprint(df.dtypes)\nprint(f"\\n=== Statistics ===")\nprint(df.describe())`,
        quiz:{question:"What does df.shape return?",options:["Number of rows","Number of columns","A tuple (rows, columns)","Total number of cells"],answer:2}
    },
    {
        id:"selecting", module:"m5", title:"5.2 Selecting & Filtering Data", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Finding What You Need</h2>
<p class="mb-4"><b>Selecting</b> and <b>filtering</b> data is the most frequent operation in data analysis. Pandas gives you multiple powerful ways to slice your data.</p>
<div class="code-block"># Select columns<br>df['Name']              # Single column (Series)<br>df[['Name', 'Score']]   # Multiple columns<br><br># Filter rows<br>df[df['Score'] > 80]    # Rows where score > 80<br>df[df['Name'] == 'Bisi']# Specific name</div>
<p class="mb-2"><b>Selection Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>df.loc[row, col]</code> — by label</li>
<li><code>df.iloc[row, col]</code> — by position (index)</li>
<li><code>df.query("col > 80")</code> — SQL-like syntax</li>
<li><code>df[df['col'].isin(['A','B'])]</code> — multiple values</li>
</ul>`,
        tip:"Tutor's Insight: Use .loc for label-based selection and .iloc for position-based. When in doubt, use .loc — it's more explicit and less error-prone.",
        defaultCode:`import pandas as pd\n\ndf = pd.read_csv('data.csv')\nprint("Full dataset:")\nprint(df)\n\n# Select specific columns\nprint("\\n=== Names only ===")\nprint(df['Name'])\n\n# Filter rows with conditions\nif 'Score' in df.columns:\n    high_scorers = df[df['Score'] >= 85]\n    print(f"\\n=== High Scorers (≥85) ===")\n    print(high_scorers)\n    print(f"\\n{len(high_scorers)} out of {len(df)} students scored 85+")`,
        quiz:{question:"Which method selects data by position (row/column number)?",options:["df.loc","df.iloc","df.at","df.select"],answer:1}
    },
    {
        id:"groupby", module:"m5", title:"5.3 GroupBy — Split-Apply-Combine", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">The Power of Grouping</h2>
<p class="mb-4"><b>GroupBy</b> is one of the most powerful operations in Pandas. It splits data into groups, applies a function, and combines results. Like a pivot table in Excel.</p>
<div class="code-block">df.groupby('Subject')['Score'].mean()<br># → Average score per subject<br><br>df.groupby('Subject').agg({<br>    'Score': ['mean', 'max', 'count']<br>})</div>
<p class="mb-2"><b>Common Aggregations:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.mean()</code> — average</li>
<li><code>.sum()</code> — total</li>
<li><code>.count()</code> — number of items</li>
<li><code>.min()</code> / <code>.max()</code></li>
<li><code>.std()</code> — standard deviation</li>
<li><code>.agg(['mean','sum','count'])</code> — multiple at once</li>
</ul>`,
        tip:"Tutor's Insight: GroupBy answers questions like 'What is the average X per Y?' — this is the bread and butter of business analytics and reporting.",
        defaultCode:`import pandas as pd\n\ndf = pd.read_csv('data.csv')\nprint("Dataset:")\nprint(df)\n\n# Group by a categorical column\nif 'Subject' in df.columns:\n    print("\\n=== Average Score by Subject ===")\n    print(df.groupby('Subject')['Score'].mean())\n    print("\\n=== Full Summary ===")\n    summary = df.groupby('Subject').agg(\n        Avg_Score=('Score', 'mean'),\n        Max_Score=('Score', 'max'),\n        Students=('Name', 'count')\n    ).round(1)\n    print(summary)\nelse:\n    print("\\nTip: Load the Education dataset for best results!")`,
        quiz:{question:"What does groupby() conceptually do?",options:["Sorts the data","Splits data into groups, applies function, combines results","Removes duplicates","Merges two DataFrames"],answer:1}
    },
    {
        id:"merge_concat", module:"m5", title:"5.4 Merging & Concatenating", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Combining Multiple Datasets</h2>
<p class="mb-4">Real analysis often requires combining data from multiple sources. Pandas provides <b>merge</b> (SQL-like joins) and <b>concat</b> (stacking).</p>
<div class="code-block"># Concatenate (stack)<br>pd.concat([df1, df2])            # Stack rows<br>pd.concat([df1, df2], axis=1)    # Stack columns<br><br># Merge (join on key)<br>pd.merge(df1, df2, on='ID')      # Inner join<br>pd.merge(df1, df2, how='left')   # Left join</div>
<p class="mb-2"><b>Join Types:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>inner</code> — only matching keys (default)</li>
<li><code>left</code> — all from left + matching right</li>
<li><code>right</code> — all from right + matching left</li>
<li><code>outer</code> — all from both</li>
</ul>`,
        tip:"Tutor's Insight: Merging is like VLOOKUP on steroids. If you've used VLOOKUP or INDEX/MATCH in Excel, pd.merge() does the same thing but for entire tables.",
        defaultCode:`import pandas as pd\n\n# Create two related datasets\nstudents = pd.DataFrame({\n    'ID': [1, 2, 3, 4],\n    'Name': ['Adewale', 'Bisi', 'Chidi', 'Dayo']\n})\n\nscores = pd.DataFrame({\n    'ID': [1, 2, 3, 5],\n    'Score': [95, 78, 88, 72],\n    'Subject': ['Maths', 'Science', 'Maths', 'English']\n})\n\nprint("Students:\\n", students)\nprint("\\nScores:\\n", scores)\n\n# Inner merge (only matching)\ninner = pd.merge(students, scores, on='ID')\nprint("\\n=== Inner Merge ===")\nprint(inner)\n\n# Left merge (keep all students)\nleft = pd.merge(students, scores, on='ID', how='left')\nprint("\\n=== Left Merge ===")\nprint(left)`,
        quiz:{question:"Which merge type keeps all rows from both DataFrames?",options:["inner","left","right","outer"],answer:3}
    },
    {
        id:"pivot_reshape", module:"m5", title:"5.5 Pivot Tables & Reshaping", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Reshaping Data for Analysis</h2>
<p class="mb-4"><b>Pivot tables</b> summarize data by reorganizing rows into columns. <b>Melt</b> does the reverse — turning columns into rows (long format).</p>
<div class="code-block"># Pivot table<br>pd.pivot_table(df, values='Score',<br>    index='Name', columns='Subject',<br>    aggfunc='mean')<br><br># Melt (unpivot)<br>pd.melt(df, id_vars=['Name'],<br>    value_vars=['Maths', 'Science'])</div>
<p class="mb-2"><b>Reshaping Tools:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>pivot_table()</code> — summarize with aggregation</li>
<li><code>melt()</code> — wide → long format</li>
<li><code>stack()</code> / <code>unstack()</code> — index level manipulation</li>
<li><code>transpose()</code> or <code>df.T</code> — flip rows ↔ columns</li>
</ul>`,
        tip:"Tutor's Insight: Pivot tables are Excel's most loved feature — and Pandas does it better. Use them for cross-tabulation reports that managers actually understand.",
        defaultCode:`import pandas as pd\n\n# Create sample data\ndf = pd.DataFrame({\n    'Student': ['Adewale','Adewale','Bisi','Bisi','Chidi','Chidi'],\n    'Subject': ['Maths','Science','Maths','Science','Maths','Science'],\n    'Score': [95, 88, 72, 91, 85, 78],\n    'Term': ['T1','T1','T1','T1','T1','T1']\n})\n\nprint("Raw Data:")\nprint(df)\n\n# Create pivot table\npivot = pd.pivot_table(df, values='Score',\n    index='Student', columns='Subject', aggfunc='mean')\nprint("\\n=== Pivot Table ===")\nprint(pivot)\nprint(f"\\nBest in Maths:   {pivot['Maths'].idxmax()} ({pivot['Maths'].max()})")\nprint(f"Best in Science: {pivot['Science'].idxmax()} ({pivot['Science'].max()})")`,
        quiz:{question:"What does pd.melt() do?",options:["Removes missing values","Converts wide format to long format","Melts duplicate rows","Sorts the data"],answer:1}
    },
    {
        id:"new_columns", module:"m5", title:"5.6 Creating New Columns", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Feature Engineering</h2>
<p class="mb-4"><b>Creating new columns</b> from existing data is called <b>feature engineering</b>. It's how you extract insights and prepare data for analysis.</p>
<div class="code-block">df['Total'] = df['Price'] * df['Quantity']<br>df['Grade'] = df['Score'].apply(<br>    lambda x: 'A' if x>=90 else 'B'<br>)</div>
<p class="mb-2"><b>Techniques:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Arithmetic:</b> <code>df['A'] + df['B']</code></li>
<li><b>Conditions:</b> <code>np.where(cond, true_val, false_val)</code></li>
<li><b>Apply:</b> <code>df['col'].apply(func)</code> — apply any function</li>
<li><b>String methods:</b> <code>df['col'].str.upper()</code></li>
<li><b>Binning:</b> <code>pd.cut(df['col'], bins)</code></li>
</ul>`,
        tip:"Tutor's Insight: Feature engineering is where domain knowledge meets code. The best new features come from understanding your data's context, not from fancy algorithms.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\nprint("Original:")\nprint(df.head())\n\n# Create new columns\nif 'Score' in df.columns:\n    df['Grade'] = np.where(df['Score'] >= 90, 'A',\n                  np.where(df['Score'] >= 70, 'B',\n                  np.where(df['Score'] >= 50, 'C', 'F')))\n    df['Status'] = df['Score'].apply(lambda x: 'Pass ✅' if x >= 50 else 'Fail ❌')\n    if 'Attendance' in df.columns:\n        df['Engagement'] = (df['Score'] * 0.7 + df['Attendance'] * 0.3).round(1)\n    \n    print("\\nWith new columns:")\n    print(df)\n    print(f"\\nGrade distribution:\\n{df['Grade'].value_counts()}")`,
        quiz:{question:"What does df['col'].apply(func) do?",options:["Applies a CSS style","Runs a function on every value in the column","Merges columns","Deletes the column"],answer:1}
    },

    // ──────────── MODULE 6: VISUALIZATION ────────────
    {
        id:"matplotlib_intro", module:"m6", title:"6.1 Matplotlib Basics", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Your First Chart</h2>
<p class="mb-4"><b>Matplotlib</b> is Python's foundational plotting library. Every chart starts with the same pattern: create a figure, add data, customize, show.</p>
<div class="code-block">import matplotlib.pyplot as plt<br><br>plt.figure(figsize=(8, 5))<br>plt.plot([1,2,3], [10,20,30])<br>plt.title('My First Chart')<br>plt.xlabel('X Axis')<br>plt.ylabel('Y Axis')<br>plt.show()</div>
<p class="mb-2"><b>The Figure → Axes Pattern:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>fig, ax = plt.subplots()</code> — create canvas + chart area</li>
<li><code>ax.plot()</code> — draw on the chart</li>
<li><code>ax.set_title()</code>, <code>ax.set_xlabel()</code> — add labels</li>
<li><code>plt.tight_layout()</code> — fix spacing</li>
<li><code>plt.show()</code> — render the chart</li>
</ul>`,
        tip:"Tutor's Insight: Always use the 'fig, ax' pattern (plt.subplots). It gives you full control and works perfectly for single or multiple charts.",
        defaultCode:`import matplotlib.pyplot as plt\n\n# Simple line chart\nmonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']\nrevenue = [120, 135, 142, 155, 148, 170]\n\nfig, ax = plt.subplots(figsize=(8, 5))\nax.plot(months, revenue, marker='o', color='#6366f1',\n        linewidth=2, markersize=8)\nax.set_title('Monthly Revenue (₦ thousands)', fontsize=14, fontweight='bold')\nax.set_ylabel('Revenue (₦K)')\nax.grid(True, alpha=0.3)\nax.fill_between(range(len(months)), revenue, alpha=0.1, color='#6366f1')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does plt.tight_layout() do?",options:["Makes text bold","Removes the chart border","Adjusts spacing to prevent overlap","Maximizes chart size"],answer:2}
    },
    {
        id:"bar_charts", module:"m6", title:"6.2 Bar Charts", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Comparing Categories</h2>
<p class="mb-4"><b>Bar charts</b> are the best way to compare quantities across categories. Use vertical bars for few categories, horizontal for many or long labels.</p>
<div class="code-block">ax.bar(categories, values)<br>ax.barh(categories, values)  # Horizontal</div>
<p class="mb-2"><b>Bar Chart Variants:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Simple bar:</b> one set of bars</li>
<li><b>Grouped bar:</b> side-by-side comparison</li>
<li><b>Stacked bar:</b> parts of a whole</li>
<li><b>Horizontal bar:</b> long category names</li>
</ul>`,
        tip:"Tutor's Insight: Bar charts are the workhorse of business presentations. They're always understood, always appropriate for comparisons. When in doubt, use a bar chart.",
        defaultCode:`import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('data.csv')\n\nfig, ax = plt.subplots(figsize=(8, 5))\n\nif 'Name' in df.columns and 'Score' in df.columns:\n    colors = ['#22c55e' if s >= 80 else '#f59e0b' if s >= 60 else '#ef4444'\n              for s in df['Score']]\n    ax.bar(df['Name'], df['Score'], color=colors, edgecolor='white', linewidth=1.5)\n    ax.set_title('Performance by Student', fontsize=14, fontweight='bold')\n    ax.set_ylabel('Score')\n    ax.axhline(y=80, color='#22c55e', linestyle='--', alpha=0.5, label='Target (80)')\n    ax.legend()\n    for i, v in enumerate(df['Score']):\n        ax.text(i, v + 1, str(v), ha='center', fontweight='bold', fontsize=9)\nelse:\n    ax.text(0.5, 0.5, 'Load Education dataset first!', ha='center', transform=ax.transAxes)\n\nplt.xticks(rotation=45)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"When should you use a horizontal bar chart?",options:["When values are negative","When you have many categories with long names","When data is time-based","Always"],answer:1}
    },
    {
        id:"line_charts", module:"m6", title:"6.3 Line Charts", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Showing Trends Over Time</h2>
<p class="mb-4"><b>Line charts</b> are perfect for showing how values change over time. They reveal trends, patterns, and anomalies at a glance.</p>
<div class="code-block">ax.plot(x, y, marker='o', linewidth=2)<br>ax.plot(x, y2, '--', label='Target')<br>ax.legend()</div>
<p class="mb-2"><b>Line Style Options:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>'-'</code> solid | <code>'--'</code> dashed | <code>':'</code> dotted</li>
<li><code>marker='o'</code> circle | <code>'s'</code> square | <code>'^'</code> triangle</li>
<li><code>linewidth=2</code> — thickness</li>
<li><code>alpha=0.5</code> — transparency</li>
<li><code>ax.fill_between()</code> — shaded area</li>
</ul>`,
        tip:"Tutor's Insight: Line charts should ONLY be used for continuous or sequential data (time, temperature, etc.). Never use them for categorical data — use bar charts instead.",
        defaultCode:`import matplotlib.pyplot as plt\nimport numpy as np\n\n# Quarterly data\nquarters = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026']\nrevenue = [45, 52, 48, 61, 58, 72]\nexpenses = [38, 41, 44, 50, 47, 55]\nprofit = [r - e for r, e in zip(revenue, expenses)]\n\nfig, ax = plt.subplots(figsize=(8, 5))\nax.plot(quarters, revenue, 'o-', color='#22c55e', linewidth=2, label='Revenue')\nax.plot(quarters, expenses, 's--', color='#ef4444', linewidth=2, label='Expenses')\nax.plot(quarters, profit, '^:', color='#6366f1', linewidth=2, label='Profit')\nax.fill_between(range(len(quarters)), profit, alpha=0.1, color='#6366f1')\nax.set_title('Financial Trends', fontsize=14, fontweight='bold')\nax.set_ylabel('Amount (₦ millions)')\nax.legend()\nax.grid(True, alpha=0.2)\nplt.xticks(rotation=30)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Line charts are best for showing what?",options:["Parts of a whole","Comparisons between categories","Trends over time","Geographic data"],answer:2}
    },
    {
        id:"pie_scatter", module:"m6", title:"6.4 Pie & Scatter Plots", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Proportions & Relationships</h2>
<p class="mb-4"><b>Pie charts</b> show parts of a whole. <b>Scatter plots</b> reveal relationships between two numeric variables.</p>
<div class="code-block"># Pie chart<br>ax.pie(values, labels=names, autopct='%1.1f%%')<br><br># Scatter plot<br>ax.scatter(x, y, c=colors, s=sizes)</div>
<p class="mb-2"><b>When to Use:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Pie:</b> 3-6 categories showing composition (budget allocation)</li>
<li><b>Scatter:</b> relationship between two numbers (height vs weight)</li>
<li>Scatter + <code>c=</code> for color coding groups</li>
<li>Scatter + <code>s=</code> for sizing by value (bubble chart)</li>
</ul>`,
        tip:"Tutor's Insight: Pie charts are controversial! Many data scientists prefer bar charts even for proportions. Use pie only when you have few clear categories.",
        defaultCode:`import matplotlib.pyplot as plt\nimport numpy as np\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\n\n# Pie chart\ncategories = ['Fees', 'Salary', 'Transport', 'Food', 'Savings']\namounts = [45000, 120000, 15000, 25000, 35000]\ncolors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6']\nax1.pie(amounts, labels=categories, autopct='%1.0f%%',\n        colors=colors, startangle=90, textprops={'fontsize': 9})\nax1.set_title('Monthly Budget', fontweight='bold')\n\n# Scatter plot\nnp.random.seed(42)\nhours = np.random.randint(1, 10, 20)\nscores = hours * 10 + np.random.randint(-5, 15, 20)\nax2.scatter(hours, scores, c=scores, cmap='RdYlGn', s=100,\n            edgecolor='white', linewidth=1.5)\nax2.set_title('Study Hours vs Score', fontweight='bold')\nax2.set_xlabel('Hours Studied')\nax2.set_ylabel('Score')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Scatter plots are used to show:",options:["Trends over time","Proportions","Relationships between two numeric variables","Ranking"],answer:2}
    },
    {
        id:"histograms", module:"m6", title:"6.5 Histograms & Distributions", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Understanding Data Spread</h2>
<p class="mb-4"><b>Histograms</b> show the <b>distribution</b> (shape/spread) of numeric data. They answer: "How is this data spread out?"</p>
<div class="code-block">ax.hist(data, bins=20, edgecolor='white')<br>ax.hist(data, bins=20, density=True)  # Probability</div>
<p class="mb-2"><b>Distribution Shapes:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Normal (bell curve):</b> most common — symmetric around mean</li>
<li><b>Skewed right:</b> tail extends to the right (income data)</li>
<li><b>Skewed left:</b> tail extends to the left (exam scores)</li>
<li><b>Uniform:</b> all values equally likely (dice rolls)</li>
<li><b>Bimodal:</b> two peaks (mixed populations)</li>
</ul>`,
        tip:"Tutor's Insight: ALWAYS plot a histogram before doing any statistical analysis. The shape of the distribution tells you which methods are appropriate.",
        defaultCode:`import matplotlib.pyplot as plt\nimport numpy as np\n\nnp.random.seed(42)\n\n# Generate sample data with different distributions\nnormal = np.random.normal(70, 15, 200)  # Mean=70, SD=15\nskewed = np.random.exponential(30, 200) + 20\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\n\n# Normal distribution\nax1.hist(normal, bins=20, color='#6366f1', edgecolor='white', alpha=0.8)\nax1.axvline(np.mean(normal), color='red', linestyle='--', label=f'Mean: {np.mean(normal):.1f}')\nax1.set_title('Normal Distribution (Exam Scores)', fontweight='bold')\nax1.set_xlabel('Score')\nax1.set_ylabel('Frequency')\nax1.legend()\n\n# Skewed distribution\nax2.hist(skewed, bins=20, color='#10b981', edgecolor='white', alpha=0.8)\nax2.axvline(np.mean(skewed), color='red', linestyle='--', label=f'Mean: {np.mean(skewed):.1f}')\nax2.axvline(np.median(skewed), color='blue', linestyle='--', label=f'Median: {np.median(skewed):.1f}')\nax2.set_title('Right-Skewed (Income-like Data)', fontweight='bold')\nax2.set_xlabel('Value')\nax2.legend()\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does a histogram show?",options:["Trends over time","Distribution/spread of data","Category comparisons","Correlations"],answer:1}
    },
    {
        id:"subplots", module:"m6", title:"6.6 Multi-Chart Dashboards", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Creating Dashboard Layouts</h2>
<p class="mb-4"><b>Subplots</b> let you place multiple charts side by side or in a grid — creating mini dashboards in a single figure.</p>
<div class="code-block">fig, axes = plt.subplots(2, 2, figsize=(12, 8))<br>axes[0,0].bar(...)    # Top-left<br>axes[0,1].plot(...)   # Top-right<br>axes[1,0].scatter(...)# Bottom-left<br>axes[1,1].hist(...)   # Bottom-right</div>
<p class="mb-2"><b>Layout Options:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>plt.subplots(rows, cols)</code> — grid of charts</li>
<li><code>fig.suptitle()</code> — overall title</li>
<li><code>plt.tight_layout()</code> — auto-spacing</li>
<li><code>gridspec_kw={'width_ratios': [2,1]}</code> — custom sizes</li>
</ul>`,
        tip:"Tutor's Insight: Dashboards tell a complete story. Put overview charts at the top, details at the bottom. Use consistent colors across charts for the same metric.",
        defaultCode:`import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\n\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Data Dashboard', fontsize=16, fontweight='bold', y=1.02)\n\nif 'Score' in df.columns and 'Name' in df.columns:\n    axes[0,0].bar(df['Name'], df['Score'], color='#6366f1')\n    axes[0,0].set_title('Scores by Student')\n    axes[0,0].tick_params(axis='x', rotation=45)\n\n    axes[0,1].hist(df['Score'], bins=8, color='#10b981', edgecolor='white')\n    axes[0,1].set_title('Score Distribution')\n\n    axes[1,0].scatter(range(len(df)), df['Score'], c=df['Score'], cmap='RdYlGn', s=100)\n    axes[1,0].set_title('Score Spread')\n\n    if 'Attendance' in df.columns:\n        axes[1,1].scatter(df['Attendance'], df['Score'], color='#f59e0b', s=100)\n        axes[1,1].set_title('Attendance vs Score')\n        axes[1,1].set_xlabel('Attendance %')\n    else:\n        sorted_df = df.sort_values('Score')\n        axes[1,1].barh(sorted_df['Name'], sorted_df['Score'], color='#ef4444')\n        axes[1,1].set_title('Ranked Scores')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does fig.suptitle() add?",options:["A subtitle to one chart","An overall title above all subplots","A footer text","A watermark"],answer:1}
    },

    // ──────────── MODULE 7: STATISTICS ────────────
    {
        id:"descriptive", module:"m7", title:"7.1 Descriptive Statistics", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Summarizing Data with Numbers</h2>
<p class="mb-4"><b>Descriptive statistics</b> summarize data into meaningful numbers. They answer: "What does this data look like?"</p>
<div class="code-block">df['Score'].mean()     # Average<br>df['Score'].median()   # Middle value<br>df['Score'].mode()     # Most frequent<br>df['Score'].std()      # Spread (standard deviation)</div>
<p class="mb-2"><b>The Big Five:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Mean</b> — average value (sensitive to outliers)</li>
<li><b>Median</b> — middle value (robust to outliers)</li>
<li><b>Mode</b> — most common value</li>
<li><b>Standard Deviation</b> — how spread out the data is</li>
<li><b>Percentiles</b> — where values fall (25th, 50th, 75th)</li>
</ul>`,
        tip:"Tutor's Insight: If mean and median are very different, your data is skewed. In skewed data, median is more representative than mean (e.g., income data).",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\n\nif 'Score' in df.columns:\n    scores = df['Score']\n    print("=== Descriptive Statistics ===")\n    print(f"Count:    {scores.count()}")\n    print(f"Mean:     {scores.mean():.1f}")\n    print(f"Median:   {scores.median():.1f}")\n    print(f"Std Dev:  {scores.std():.1f}")\n    print(f"Min:      {scores.min()}")\n    print(f"Max:      {scores.max()}")\n    print(f"Range:    {scores.max() - scores.min()}")\n    print(f"\\n25th percentile: {scores.quantile(0.25):.1f}")\n    print(f"50th percentile: {scores.quantile(0.50):.1f}")\n    print(f"75th percentile: {scores.quantile(0.75):.1f}")\n    \n    skew_indicator = "Right-skewed" if scores.mean() > scores.median() else "Left-skewed" if scores.mean() < scores.median() else "Symmetric"\n    print(f"\\nDistribution: {skew_indicator}")\nelse:\n    print("Load Education dataset for best results!")`,
        quiz:{question:"Which measure of center is most resistant to outliers?",options:["Mean","Median","Mode","Standard Deviation"],answer:1}
    },
    {
        id:"correlation", module:"m7", title:"7.2 Correlation Analysis", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Finding Relationships</h2>
<p class="mb-4"><b>Correlation</b> measures the strength and direction of a relationship between two numeric variables. Values range from -1 to +1.</p>
<div class="code-block">df.corr()                    # Correlation matrix<br>df['A'].corr(df['B'])        # Between two columns</div>
<p class="mb-2"><b>Interpreting Correlation:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>+1</b> — perfect positive (A goes up → B goes up)</li>
<li><b>0</b> — no relationship</li>
<li><b>-1</b> — perfect negative (A goes up → B goes down)</li>
<li><b>|r| > 0.7</b> — strong | <b>0.3-0.7</b> — moderate | <b>< 0.3</b> — weak</li>
</ul>
<p class="text-sm mt-3" style="color:var(--text-muted);">⚠️ <b>Correlation ≠ Causation!</b> Ice cream sales and drowning deaths are correlated, but one doesn't cause the other (summer does).</p>`,
        tip:"Tutor's Insight: Always visualize correlations with scatter plots. A number alone can be misleading — the Anscombe's Quartet proves this beautifully.",
        defaultCode:`import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\n\n# Calculate correlations\nnumeric_cols = df.select_dtypes(include=[np.number]).columns\nif len(numeric_cols) >= 2:\n    corr_matrix = df[numeric_cols].corr()\n    print("=== Correlation Matrix ===")\n    print(corr_matrix.round(2))\n    \n    # Visualize\n    fig, ax = plt.subplots(figsize=(8, 6))\n    im = ax.imshow(corr_matrix, cmap='RdYlGn', vmin=-1, vmax=1)\n    ax.set_xticks(range(len(numeric_cols)))\n    ax.set_yticks(range(len(numeric_cols)))\n    ax.set_xticklabels(numeric_cols, rotation=45)\n    ax.set_yticklabels(numeric_cols)\n    for i in range(len(numeric_cols)):\n        for j in range(len(numeric_cols)):\n            ax.text(j, i, f'{corr_matrix.iloc[i,j]:.2f}', ha='center', va='center', fontweight='bold')\n    plt.colorbar(im)\n    ax.set_title('Correlation Heatmap', fontweight='bold')\n    plt.tight_layout()\n    plt.show()\nelse:\n    print("Load a dataset with multiple numeric columns!")`,
        quiz:{question:"A correlation of -0.85 indicates:",options:["Weak positive relationship","Strong negative relationship","No relationship","Strong positive relationship"],answer:1}
    },
    {
        id:"outliers", module:"m7", title:"7.3 Detecting Outliers", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Finding Unusual Data Points</h2>
<p class="mb-4"><b>Outliers</b> are data points that are significantly different from others. They can be errors OR genuine extreme values. Detecting them is crucial.</p>
<div class="code-block"># IQR Method<br>Q1 = df['col'].quantile(0.25)<br>Q3 = df['col'].quantile(0.75)<br>IQR = Q3 - Q1<br>lower = Q1 - 1.5 * IQR<br>upper = Q3 + 1.5 * IQR</div>
<p class="mb-2"><b>Detection Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>IQR Method:</b> Values beyond 1.5×IQR from Q1/Q3</li>
<li><b>Z-Score:</b> Values more than 2-3 standard deviations from mean</li>
<li><b>Visual:</b> Box plots clearly show outliers</li>
</ul>`,
        tip:"Tutor's Insight: Never remove outliers automatically! Always investigate first. That 'outlier' student with 100% might be your top performer, not an error.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data with outliers\nnp.random.seed(42)\nscores = list(np.random.normal(75, 10, 30).astype(int))\nscores.extend([15, 100, 12])  # Add outliers\nscores = np.array(scores)\n\n# IQR method\nQ1, Q3 = np.percentile(scores, [25, 75])\nIQR = Q3 - Q1\nlower, upper = Q1 - 1.5*IQR, Q3 + 1.5*IQR\n\noutliers = scores[(scores < lower) | (scores > upper)]\nnormal = scores[(scores >= lower) & (scores <= upper)]\n\nprint(f"Q1: {Q1}, Q3: {Q3}, IQR: {IQR}")\nprint(f"Bounds: [{lower:.0f}, {upper:.0f}]")\nprint(f"Outliers found: {outliers}")\n\n# Box plot\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\nax1.boxplot(scores, vert=True)\nax1.set_title('Box Plot (shows outliers)', fontweight='bold')\nax2.hist(scores, bins=15, color='#6366f1', edgecolor='white')\nax2.axvline(lower, color='red', linestyle='--', label=f'Lower bound: {lower:.0f}')\nax2.axvline(upper, color='red', linestyle='--', label=f'Upper bound: {upper:.0f}')\nax2.set_title('Histogram with Outlier Bounds', fontweight='bold')\nax2.legend(fontsize=8)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"In the IQR method, outliers are beyond:",options:["1×IQR from Q1/Q3","1.5×IQR from Q1/Q3","2×IQR from Q1/Q3","3×IQR from Q1/Q3"],answer:1}
    },
    {
        id:"probability", module:"m7", title:"7.4 Basic Probability & Distributions", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">The Language of Uncertainty</h2>
<p class="mb-4"><b>Probability</b> quantifies uncertainty. <b>Distributions</b> describe the patterns of possible outcomes. Together, they're the foundation of statistical thinking.</p>
<div class="code-block">import numpy as np<br><br># Normal distribution<br>data = np.random.normal(mean, std, size)<br><br># Probability basics<br># P(event) = favorable / total<br>prob = favorable_outcomes / total_outcomes</div>
<p class="mb-2"><b>Key Distributions:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Normal (Gaussian):</b> bell curve — heights, test scores</li>
<li><b>Uniform:</b> equal probability — dice rolls</li>
<li><b>Binomial:</b> success/failure trials — pass/fail rates</li>
<li><b>Poisson:</b> rare events — customer arrivals per hour</li>
</ul>`,
        tip:"Tutor's Insight: The Normal distribution is everywhere: heights, errors, stock returns, test scores. If you understand ONE distribution, make it this one.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Common Probability Distributions', fontsize=14, fontweight='bold')\n\n# Normal\ndata = np.random.normal(70, 15, 1000)\naxes[0,0].hist(data, bins=30, color='#6366f1', edgecolor='white', density=True)\naxes[0,0].set_title(f'Normal (μ=70, σ=15)')\n\n# Uniform\ndata = np.random.uniform(0, 100, 1000)\naxes[0,1].hist(data, bins=30, color='#22c55e', edgecolor='white', density=True)\naxes[0,1].set_title('Uniform (0 to 100)')\n\n# Binomial\ndata = np.random.binomial(20, 0.6, 1000)\naxes[1,0].hist(data, bins=20, color='#f59e0b', edgecolor='white', density=True)\naxes[1,0].set_title('Binomial (n=20, p=0.6)')\n\n# Poisson\ndata = np.random.poisson(5, 1000)\naxes[1,1].hist(data, bins=15, color='#ef4444', edgecolor='white', density=True)\naxes[1,1].set_title('Poisson (λ=5)')\n\nfor ax in axes.flat:\n    ax.set_ylabel('Density')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Which distribution describes bell-shaped data?",options:["Uniform","Binomial","Poisson","Normal (Gaussian)"],answer:3}
    },

    // ──────────── MODULE 8: CAPSTONE PROJECTS ────────────
    {
        id:"capstone_education", module:"m8", title:"8.1 Project: Education Analysis", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Capstone: Nigerian Education Report</h2>
<p class="mb-4">Build a complete analysis report using the Education dataset. You'll practice the full data science workflow:</p>
<div class="code-block">1. Load & inspect the data<br>2. Clean and prepare<br>3. Calculate statistics<br>4. Create visualizations<br>5. Draw conclusions</div>
<p class="mb-2"><b>Requirements:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Load the Education dataset from the Dataset Hub</li>
<li>Show descriptive statistics</li>
<li>Compare performance by subject</li>
<li>Create at least 2 different chart types</li>
<li>Write your findings as printed text</li>
</ul>
<p class="text-sm" style="color:var(--text-muted);">This is a portfolio-worthy project! Take your time.</p>`,
        tip:"Tutor's Insight: Capstone projects are where everything clicks. Don't rush — a well-done project teaches more than 10 quick exercises.",
        defaultCode:`import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# ===== CAPSTONE: EDUCATION ANALYSIS =====\n\n# Step 1: Load\ndf = pd.read_csv('data.csv')\nprint("📊 EDUCATION ANALYSIS REPORT")\nprint("=" * 40)\nprint(f"Dataset: {df.shape[0]} students, {df.shape[1]} fields\\n")\n\n# Step 2: Summary Statistics\nprint("📈 OVERALL STATISTICS")\nprint(f"Average Score:  {df['Score'].mean():.1f}%")\nprint(f"Highest Score:  {df['Score'].max()}% ({df.loc[df['Score'].idxmax(), 'Name']})")\nprint(f"Lowest Score:   {df['Score'].min()}% ({df.loc[df['Score'].idxmin(), 'Name']})")\n\n# Step 3: Group Analysis\nif 'Subject' in df.columns:\n    print(f"\\n📚 BY SUBJECT")\n    for subj, group in df.groupby('Subject'):\n        print(f"  {subj}: Avg={group['Score'].mean():.1f}%, Students={len(group)}")\n\n# Step 4: Visualize\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\n\n# Bar chart\ncolors = ['#22c55e' if s >= 80 else '#f59e0b' if s >= 60 else '#ef4444' for s in df['Score']]\nax1.bar(df['Name'], df['Score'], color=colors)\nax1.set_title('Individual Scores', fontweight='bold')\nax1.axhline(y=df['Score'].mean(), color='blue', linestyle='--', alpha=0.5)\nax1.tick_params(axis='x', rotation=45)\n\n# Distribution\nax2.hist(df['Score'], bins=8, color='#6366f1', edgecolor='white')\nax2.set_title('Score Distribution', fontweight='bold')\nax2.set_xlabel('Score')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"In a data science workflow, what comes after loading data?",options:["Visualization","Cleaning/Preparation","Machine Learning","Reporting"],answer:1}
    },
    {
        id:"capstone_sales", module:"m8", title:"8.2 Project: Business Analytics", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Capstone: Sales Dashboard</h2>
<p class="mb-4">Build a business analytics dashboard using the Sales dataset. Analyze revenue, identify top products, and visualize trends.</p>
<div class="code-block">Business Questions to Answer:<br>• What is the total revenue?<br>• Which product generates the most revenue?<br>• What is the average order value?<br>• How is revenue distributed across products?</div>
<p class="mb-2"><b>Requirements:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Load the Sales dataset</li>
<li>Calculate total revenue (Price × Quantity)</li>
<li>Find top 3 revenue-generating products</li>
<li>Create a revenue bar chart</li>
<li>Create a revenue pie chart</li>
<li>Print business insights</li>
</ul>`,
        tip:"Tutor's Insight: Business stakeholders care about money, trends, and actionable insights. Always lead with 'the bottom line' — total revenue, profit margin, growth rate.",
        defaultCode:`import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Load Sales dataset from Dataset Hub!\ndf = pd.read_csv('data.csv')\n\n# Feature Engineering\ndf['Revenue'] = df['Price'] * df['Quantity']\n\nprint("💰 SALES ANALYTICS DASHBOARD")\nprint("=" * 40)\nprint(f"Products: {len(df)}")\nprint(f"Total Revenue: ₦{df['Revenue'].sum():,.0f}")\nprint(f"Avg Order Value: ₦{df['Revenue'].mean():,.0f}")\nprint(f"\\n🏆 Top 3 Products by Revenue:")\ntop3 = df.nlargest(3, 'Revenue')[['Product', 'Revenue']]\nfor _, row in top3.iterrows():\n    print(f"   {row['Product']}: ₦{row['Revenue']:,.0f}")\n\n# Dashboard\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\n\n# Revenue bar chart\ndf_sorted = df.sort_values('Revenue', ascending=True)\nax1.barh(df_sorted['Product'], df_sorted['Revenue'], color='#6366f1')\nax1.set_title('Revenue by Product', fontweight='bold')\nax1.set_xlabel('Revenue (₦)')\n\n# Revenue pie chart\nax2.pie(df['Revenue'], labels=df['Product'], autopct='%1.0f%%', startangle=90)\nax2.set_title('Revenue Share', fontweight='bold')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"In business analytics, what does 'revenue' mean?",options:["Profit after expenses","Total money earned from sales","Cost of goods","Net income"],answer:1}
    },
    {
        id:"capstone_weather", module:"m8", title:"8.3 Project: Weather Analysis", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Capstone: Nigerian Weather Report</h2>
<p class="mb-4">Analyze weather patterns across Nigerian cities. This project combines statistics, grouping, filtering, and multi-chart visualization.</p>
<div class="code-block">Analysis Tasks:<br>• Which city is hottest / coolest?<br>• What's the humidity pattern?<br>• Group cities by weather condition<br>• Create a comprehensive dashboard</div>
<p class="mb-2"><b>Requirements:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Load the Weather dataset</li>
<li>Descriptive statistics for all numeric columns</li>
<li>Group analysis by weather Condition</li>
<li>Create a 2×2 dashboard with different chart types</li>
<li>Print weather advisory based on data</li>
</ul>`,
        tip:"Tutor's Insight: Real-world data analysis always combines multiple techniques. This project tests your ability to pick the RIGHT chart for each question.",
        defaultCode:`import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Load Weather dataset from Dataset Hub!\ndf = pd.read_csv('data.csv')\n\nprint("🌤 NIGERIAN WEATHER ANALYSIS")\nprint("=" * 40)\nprint(df)\n\nprint(f"\\n📊 Temperature Stats:")\nprint(f"  Hottest: {df.loc[df['Temperature'].idxmax(), 'City']} ({df['Temperature'].max()}°C)")\nprint(f"  Coolest: {df.loc[df['Temperature'].idxmin(), 'City']} ({df['Temperature'].min()}°C)")\nprint(f"  Average: {df['Temperature'].mean():.1f}°C")\n\nprint(f"\\n☁️ By Condition:")\nfor cond, group in df.groupby('Condition'):\n    print(f"  {cond}: {len(group)} cities, avg temp {group['Temperature'].mean():.1f}°C")\n\n# Dashboard\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Nigerian Weather Dashboard', fontsize=14, fontweight='bold')\n\naxes[0,0].bar(df['City'], df['Temperature'], color='#ef4444')\naxes[0,0].set_title('Temperature by City')\naxes[0,0].tick_params(axis='x', rotation=45)\n\naxes[0,1].bar(df['City'], df['Humidity'], color='#3b82f6')\naxes[0,1].set_title('Humidity by City')\naxes[0,1].tick_params(axis='x', rotation=45)\n\ncond_counts = df['Condition'].value_counts()\naxes[1,0].pie(cond_counts, labels=cond_counts.index, autopct='%1.0f%%')\naxes[1,0].set_title('Weather Conditions')\n\naxes[1,1].scatter(df['Temperature'], df['Humidity'], c=df['Wind_Speed'],\n                  cmap='viridis', s=150, edgecolor='white')\naxes[1,1].set_title('Temp vs Humidity (color=Wind)')\naxes[1,1].set_xlabel('Temperature')\naxes[1,1].set_ylabel('Humidity')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Which chart type best shows the relationship between Temperature and Humidity?",options:["Bar chart","Pie chart","Scatter plot","Histogram"],answer:2}
    },
    // ──────────── MODULE 9: NUMPY DEEP DIVE ────────────
    {
        id:"numpy_intro", module:"m9", title:"9.1 NumPy Arrays vs Lists", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Why NumPy Exists</h2>
<p class="mb-4">Python lists are slow for math. <b>NumPy arrays</b> are stored as contiguous typed memory and operations run on compiled C code — <b>100x faster</b> than loops on lists.</p>
<div class="code-block">import numpy as np<br>arr = np.array([10, 20, 30, 40, 50])<br>print(arr * 2)    # [20 40 60 80 100] — instant!<br>print(arr.mean())  # 30.0</div>
<p class="mb-2"><b>Key Differences from Lists:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Typed</b> — all elements must be the same type (int, float)</li>
<li><b>Vectorized</b> — <code>arr * 2</code> multiplies every element, no loop needed</li>
<li><b>Broadcasting</b> — operations between arrays of different shapes</li>
<li><b>Foundation</b> — Pandas Series and DataFrames are built on NumPy</li>
</ul>
<p>Every <code>df['column']</code> in Pandas is secretly a NumPy array underneath.</p>`,
        tip:"Tutor's Insight: When you see Pandas code like df['score'].mean(), it's actually calling NumPy under the hood. Understanding NumPy gives you X-ray vision into how Pandas works.",
        defaultCode:`import numpy as np\n\n# Speed comparison concept\nscores = np.array([78, 45, 92, 63, 55, 88, 40, 71, 84, 59])\n\n# Vectorized operations (no loops!)\nprint("Original: ", scores)\nprint("+ 5 bonus:", scores + 5)\nprint("Doubled:  ", scores * 2)\nprint("Passed:   ", scores[scores >= 50])\nprint("Failed:   ", scores[scores < 50])\n\n# Statistics in one line\nprint(f"\\nMean:   {scores.mean():.1f}")\nprint(f"Median: {np.median(scores):.1f}")\nprint(f"Std:    {scores.std():.1f}")\nprint(f"Min:    {scores.min()}")\nprint(f"Max:    {scores.max()}")\n\n# Boolean indexing\nprint(f"\\nPass rate: {(scores >= 50).sum()}/{len(scores)} = {(scores >= 50).mean():.0%}")`,
        quiz:{question:"Why is NumPy faster than Python lists for math?",options:["It uses more memory","Operations run on compiled C code, not Python loops","It only works with small data","It compresses the data"],answer:1}
    },
    {
        id:"numpy_reshape", module:"m9", title:"9.2 Reshaping & 2D Arrays", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Multi-Dimensional Arrays</h2>
<p class="mb-4">Real data is often 2D (rows × columns). NumPy handles matrices natively — essential for linear algebra, image processing, and machine learning.</p>
<div class="code-block">matrix = np.array([[1,2,3], [4,5,6]])<br>print(matrix.shape)  # (2, 3) — 2 rows, 3 cols<br><br># Reshape: change dimensions<br>arr = np.arange(12)<br>grid = arr.reshape(3, 4)  # 3×4 matrix</div>
<p class="mb-2"><b>Essential Operations:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.reshape(rows, cols)</code> — change shape without changing data</li>
<li><code>.flatten()</code> — collapse to 1D</li>
<li><code>.T</code> — transpose (flip rows ↔ columns)</li>
<li><code>np.arange(n)</code> — like range() but returns array</li>
<li><code>np.zeros((r,c))</code>, <code>np.ones((r,c))</code> — fill with 0s or 1s</li>
<li><code>axis=0</code> — operate down columns; <code>axis=1</code> — across rows</li>
</ul>`,
        tip:"Tutor's Insight: axis=0 means 'down the rows' (column-wise), axis=1 means 'across the columns' (row-wise). This trips up everyone at first. Draw it on paper!",
        defaultCode:`import numpy as np\n\n# Create a student scores matrix (3 students × 4 subjects)\nscores = np.array([\n    [88, 76, 92, 85],  # Student 1\n    [72, 68, 80, 75],  # Student 2\n    [95, 90, 88, 92],  # Student 3\n])\nsubjects = ['Maths', 'English', 'Science', 'History']\n\nprint("Score Matrix:")\nprint(scores)\nprint(f"Shape: {scores.shape}")\n\n# Axis operations\nprint(f"\\nAverage per student (axis=1): {scores.mean(axis=1).round(1)}")\nprint(f"Average per subject (axis=0): {scores.mean(axis=0).round(1)}")\n\n# Best in each subject\nfor i, subj in enumerate(subjects):\n    best = scores[:, i].max()\n    who = scores[:, i].argmax() + 1\n    print(f"  {subj}: Student {who} with {best}")\n\n# Transpose\nprint(f"\\nTransposed shape: {scores.T.shape}")`,
        quiz:{question:"In NumPy, axis=0 operates:",options:["Across rows (horizontally)","Down columns (vertically)","On the diagonal","On the last element"],answer:1}
    },
    {
        id:"numpy_random", module:"m9", title:"9.3 Random Numbers & Simulation", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Generating Data for Testing</h2>
<p class="mb-4">NumPy's random module lets you generate realistic synthetic data — essential for testing, simulation, and understanding distributions.</p>
<div class="code-block">np.random.seed(42)  # Reproducible results<br>np.random.randint(1, 100, 10)   # 10 random ints 1-99<br>np.random.normal(70, 15, 100)   # 100 values, mean=70, std=15<br>np.random.choice(['A','B','C'], 20)  # 20 random picks</div>
<p class="mb-2"><b>Why Seeds Matter:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>np.random.seed(42)</code> — same seed = same "random" numbers every time</li>
<li>Essential for <b>reproducible research</b> — others can verify your results</li>
<li>Use ANY integer as seed — 42 is traditional (Hitchhiker's Guide reference)</li>
</ul>`,
        tip:"Tutor's Insight: ALWAYS set a seed when generating random data. Without it, your results change every run, making debugging impossible and research non-reproducible.",
        defaultCode:`import numpy as np\n\nnp.random.seed(2024)\n\n# Generate a synthetic class of 30 students\nn = 30\nnames = [f"Student_{i:02d}" for i in range(1, n+1)]\nscores = np.random.normal(65, 15, n).clip(0, 100).round(1)\nattendance = np.random.normal(80, 12, n).clip(40, 100).round(0)\n\nprint(f"Generated {n} students")\nprint(f"Score range: {scores.min():.0f} – {scores.max():.0f}")\nprint(f"Score mean:  {scores.mean():.1f} (target was 65)")\nprint(f"Score std:   {scores.std():.1f} (target was 15)")\n\n# Simulate pass/fail\npassed = (scores >= 50).sum()\nprint(f"\\nPass rate: {passed}/{n} = {passed/n:.0%}")\n\n# Random sampling\nprint(f"\\nRandom 5 scores: {np.random.choice(scores, 5, replace=False).round(0)}")`,
        quiz:{question:"Why do we set np.random.seed(42)?",options:["To make random numbers truly random","To ensure reproducible results","To generate numbers faster","To limit the range"],answer:1}
    },

    // ──────────── MODULE 10: ERROR HANDLING ────────────
    {
        id:"try_except", module:"m10", title:"10.1 Try / Except — Handling Errors", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">When Things Go Wrong</h2>
<p class="mb-4">Errors are inevitable. <code>try/except</code> lets your program handle errors gracefully instead of crashing. This is essential for production data pipelines.</p>
<div class="code-block">try:<br>    result = 10 / 0<br>except ZeroDivisionError:<br>    print("Cannot divide by zero!")<br>except Exception as e:<br>    print(f"Error: {e}")<br>finally:<br>    print("This always runs")</div>
<p class="mb-2"><b>Common Python Errors:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>NameError</code> — variable not defined</li>
<li><code>TypeError</code> — wrong type for operation (e.g., "5" + 3)</li>
<li><code>ValueError</code> — right type, wrong value (e.g., int("hello"))</li>
<li><code>KeyError</code> — dict key doesn't exist</li>
<li><code>IndexError</code> — list index out of range</li>
<li><code>FileNotFoundError</code> — file doesn't exist</li>
</ul>`,
        tip:"Tutor's Insight: In data science, errors usually mean bad data — not bad code. A missing column, a None value, a wrong type. try/except helps you find and fix these gracefully.",
        defaultCode:`# Error handling in data science\ndef safe_divide(a, b):\n    try:\n        return round(a / b, 2)\n    except ZeroDivisionError:\n        return 0\n    except TypeError:\n        return None\n\n# Test it\nprint(safe_divide(100, 3))    # 33.33\nprint(safe_divide(100, 0))    # 0 (no crash!)\nprint(safe_divide("100", 3))  # None\n\n# Real-world: processing messy data\nraw_scores = ["85", "92", "N/A", "78", "", "91", "abc"]\nclean = []\nfor val in raw_scores:\n    try:\n        clean.append(int(val))\n    except (ValueError, TypeError):\n        print(f"  Skipped invalid: '{val}'")\n\nprint(f"\\nCleaned: {clean}")\nprint(f"Valid: {len(clean)}/{len(raw_scores)}")`,
        quiz:{question:"What does the 'finally' block do?",options:["Runs only if no error","Runs only if there's an error","Always runs, error or not","Prevents errors"],answer:2}
    },
    {
        id:"debugging", module:"m10", title:"10.2 Debugging Strategies", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Finding and Fixing Bugs</h2>
<p class="mb-4">Every programmer encounters bugs. The difference between a beginner and an expert is <b>how fast they find and fix them</b>. Here are battle-tested strategies.</p>
<div class="code-block"># Strategy 1: Print debugging<br>print(f"DEBUG: x = {x}, type = {type(x)}")<br><br># Strategy 2: Check types<br>assert isinstance(score, (int, float)), "Score must be numeric"<br><br># Strategy 3: Read the error message!<br># It tells you: file, line number, error type, and message</div>
<p class="mb-2"><b>The Debugging Checklist:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Read the error message</b> — Python tells you exactly what's wrong</li>
<li><b>Check the line number</b> — the error points to where it happened</li>
<li><b>Print variables</b> — see what your data actually looks like</li>
<li><b>Check types</b> — "42" (string) ≠ 42 (integer)</li>
<li><b>Test with small data</b> — isolate the problem</li>
<li><b>Google the error</b> — someone has had the same problem</li>
</ul>`,
        tip:"Tutor's Insight: 90% of data science bugs come from 3 things: wrong data types, missing values (NaN), and off-by-one indexing errors. Check these first!",
        defaultCode:`# Debugging practice — find and fix the bugs!\n\n# Bug 1: Type mismatch\ndef calculate_average(scores):\n    try:\n        # Filter out non-numeric values\n        valid = [s for s in scores if isinstance(s, (int, float))]\n        if not valid:\n            return 0\n        return sum(valid) / len(valid)\n    except Exception as e:\n        print(f"Error: {e}")\n        return 0\n\n# Test with messy data\nmessy = [85, "92", None, 78, 90, "N/A"]\nprint(f"Average: {calculate_average(messy):.1f}")\n\n# Bug 2: Safe dictionary access\nstudent = {"name": "Adewale", "score": 95}\n\n# This would crash: student["grade"]\n# Safe way:\ngrade = student.get("grade", "Not assigned")\nprint(f"Grade: {grade}")\n\n# Assertion for validation\ndef validate_score(score):\n    assert 0 <= score <= 100, f"Score {score} is out of range!"\n    return True\n\ntry:\n    validate_score(85)   # OK\n    print("Score 85: Valid ✅")\n    validate_score(150)  # Will fail\nexcept AssertionError as e:\n    print(f"Score 150: Invalid ❌ — {e}")`,
        quiz:{question:"What is the FIRST thing you should do when you get an error?",options:["Rewrite all the code","Read the error message carefully","Delete the file","Ask someone else"],answer:0}
    },

    // ──────────── MODULE 11: ADVANCED PANDAS ────────────
    {
        id:"string_methods", module:"m11", title:"11.1 Pandas String Methods", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Text Data at Scale</h2>
<p class="mb-4">Real datasets are full of text — names, addresses, categories. Pandas <code>.str</code> accessor lets you apply string operations to entire columns at once.</p>
<div class="code-block">df['name'].str.upper()<br>df['name'].str.contains('ada')<br>df['email'].str.split('@').str[1]  # Get domain<br>df['phone'].str.replace('-', '')</div>
<p class="mb-2"><b>Essential .str Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.str.lower()</code> / <code>.str.upper()</code> / <code>.str.title()</code></li>
<li><code>.str.strip()</code> — remove whitespace</li>
<li><code>.str.contains('pattern')</code> — filter by text</li>
<li><code>.str.replace('old', 'new')</code></li>
<li><code>.str.split('sep')</code> — split into parts</li>
<li><code>.str.len()</code> — length of each string</li>
<li><code>.str.extract(r'(\d+)')</code> — regex extraction</li>
</ul>`,
        tip:"Tutor's Insight: String cleaning is 30% of real data cleaning. Names like 'ADEWALE', 'adewale', ' Adewale ' are all the same person but Pandas treats them as different. .str methods fix this.",
        defaultCode:`import pandas as pd\n\n# Messy text data\ndf = pd.DataFrame({\n    'name': ['  adewale SAMSON ', 'BISI okafor', ' chidi  ', 'Dayo ADE'],\n    'email': ['ade@gmail.com', 'BISI@YAHOO.COM', 'chidi@school.edu', 'dayo@work.ng'],\n    'phone': ['080-1234-5678', '090 5678 1234', '0811-111-2222', '070-9999-8888'],\n})\n\nprint("=== BEFORE CLEANING ===")\nprint(df)\n\n# Clean with .str methods\ndf['name'] = df['name'].str.strip().str.title()\ndf['email'] = df['email'].str.lower().str.strip()\ndf['domain'] = df['email'].str.split('@').str[1]\ndf['phone_clean'] = df['phone'].str.replace('-', '').str.replace(' ', '')\n\nprint("\\n=== AFTER CLEANING ===")\nprint(df)\n\n# Filter by text\ngmail_users = df[df['email'].str.contains('gmail')]\nprint(f"\\nGmail users: {len(gmail_users)}")`,
        quiz:{question:"What does df['name'].str.strip().str.title() do?",options:["Deletes the column","Removes whitespace then capitalizes first letter of each word","Sorts alphabetically","Converts to numbers"],answer:1}
    },
    {
        id:"time_series", module:"m11", title:"11.2 Time Series Basics", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Working with Dates and Time</h2>
<p class="mb-4">Much of data science involves <b>time-based data</b> — sales over months, stock prices by day, user activity by hour. Pandas has powerful datetime tools.</p>
<div class="code-block">df['date'] = pd.to_datetime(df['date'])<br>df['month'] = df['date'].dt.month<br>df['day_name'] = df['date'].dt.day_name()<br>df.set_index('date').resample('M').mean()</div>
<p class="mb-2"><b>Key Datetime Operations:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>pd.to_datetime()</code> — convert string to datetime</li>
<li><code>.dt.year</code>, <code>.dt.month</code>, <code>.dt.day</code> — extract parts</li>
<li><code>.dt.day_name()</code> — Monday, Tuesday, etc.</li>
<li><code>.resample('M')</code> — aggregate by month/week/year</li>
<li><code>.rolling(7).mean()</code> — 7-day moving average</li>
</ul>`,
        tip:"Tutor's Insight: Always convert date columns with pd.to_datetime() as your FIRST step. Strings that look like dates aren't dates — you can't do math on strings.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Create time series data\nnp.random.seed(42)\ndates = pd.date_range('2026-01-01', periods=90, freq='D')\nsales = np.random.normal(50000, 15000, 90).clip(10000, 100000).round(0)\n\ndf = pd.DataFrame({'date': dates, 'sales': sales})\ndf['date'] = pd.to_datetime(df['date'])\n\n# Extract date components\ndf['month'] = df['date'].dt.month_name()\ndf['day'] = df['date'].dt.day_name()\ndf['week'] = df['date'].dt.isocalendar().week\n\nprint("First 5 rows:")\nprint(df.head())\n\n# Monthly summary\nmonthly = df.set_index('date').resample('M')['sales'].agg(['sum','mean','count'])\nmonthly.columns = ['Total', 'Average', 'Days']\nprint("\\nMonthly Summary:")\nprint(monthly.round(0))\n\n# Best day of week\nby_day = df.groupby('day')['sales'].mean().sort_values(ascending=False)\nprint(f"\\nBest day: {by_day.index[0]} (₦{by_day.iloc[0]:,.0f} avg)")`,
        quiz:{question:"What does .resample('M').mean() do?",options:["Removes monthly data","Groups by month and calculates the average","Adds missing months","Converts to monthly format"],answer:1}
    },
    {
        id:"window_funcs", module:"m11", title:"11.3 Window Functions & Rolling", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Sliding Window Calculations</h2>
<p class="mb-4"><b>Window functions</b> compute values across a sliding window of rows — essential for trends, moving averages, running totals, and ranking.</p>
<div class="code-block"># Rolling (sliding window)<br>df['ma_7'] = df['value'].rolling(7).mean()<br><br># Expanding (cumulative)<br>df['cumsum'] = df['value'].expanding().sum()<br><br># Ranking<br>df['rank'] = df['score'].rank(ascending=False)</div>
<p class="mb-2"><b>Window Types:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.rolling(n)</code> — last n values (moving average)</li>
<li><code>.expanding()</code> — all values up to current (cumulative)</li>
<li><code>.shift(n)</code> — move values up/down by n positions</li>
<li><code>.pct_change()</code> — percentage change from previous value</li>
<li><code>.rank()</code> — assign ranks</li>
</ul>`,
        tip:"Tutor's Insight: Moving averages smooth out noise in time series. A 7-day MA reveals weekly trends; a 30-day MA reveals monthly trends. Stock analysts use 50-day and 200-day MAs.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\ndates = pd.date_range('2026-01-01', periods=30, freq='D')\nsales = np.random.normal(50, 10, 30).clip(20, 80).round(0)\n\ndf = pd.DataFrame({'date': dates, 'sales': sales})\n\n# Rolling average (7-day)\ndf['ma_7'] = df['sales'].rolling(7).mean().round(1)\n\n# Cumulative sum\ndf['cum_total'] = df['sales'].expanding().sum()\n\n# Day-over-day change\ndf['change'] = df['sales'].diff()\ndf['pct_change'] = (df['sales'].pct_change() * 100).round(1)\n\n# Ranking\ndf['rank'] = df['sales'].rank(ascending=False).astype(int)\n\nprint("=== Sales with Window Functions ===")\nprint(df[['date', 'sales', 'ma_7', 'cum_total', 'change', 'rank']].head(15).to_string(index=False))\n\nprint(f"\\nBest day: {df.loc[df['sales'].idxmax(), 'date'].strftime('%b %d')} (₦{df['sales'].max():.0f}k)")\nprint(f"Total revenue: ₦{df['cum_total'].iloc[-1]:,.0f}k")`,
        quiz:{question:"What does .rolling(7).mean() calculate?",options:["The mean of the entire column","The average of the last 7 values at each point","Every 7th value","The 7 largest values"],answer:1}
    },

    // ──────────── MODULE 12: REAL-WORLD PROJECTS ────────────
    {
        id:"project_hr", module:"m12", title:"12.1 Project: HR Analytics", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌍 HR Analytics — Employee Attrition</h2>
<p class="mb-4">Analyze employee data to understand why people leave. This is a real interview question at companies like IBM, Deloitte, and PwC.</p>
<div class="code-block">Business Questions:<br>• What is the overall attrition rate?<br>• Which department has highest turnover?<br>• Does salary correlate with leaving?<br>• Who is most at risk of leaving?</div>
<p class="mb-2"><b>Skills Practiced:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Data generation with NumPy random</li>
<li>Feature engineering (tenure groups, salary bands)</li>
<li>GroupBy analysis with multiple aggregations</li>
<li>Conditional logic for risk classification</li>
<li>Multi-chart dashboard</li>
</ul>`,
        tip:"Tutor's Insight: HR analytics is one of the fastest-growing areas of data science. Companies lose ₦millions when experienced employees leave. Predicting attrition saves real money.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(2024)\nn = 60\n\n# Generate HR data\ndf = pd.DataFrame({\n    'emp_id': range(1, n+1),\n    'department': np.random.choice(['Engineering','Marketing','Sales','HR','Finance'], n),\n    'salary': np.random.normal(85000, 25000, n).clip(35000, 200000).round(0),\n    'tenure_years': np.random.exponential(3, n).clip(0.5, 15).round(1),\n    'satisfaction': np.random.uniform(1, 10, n).round(1),\n    'left': np.random.choice([0, 1], n, p=[0.75, 0.25]),\n})\n\nprint("📊 HR ATTRITION ANALYSIS")\nprint("=" * 40)\nprint(f"Total employees: {n}")\nprint(f"Attrition rate: {df['left'].mean():.0%}")\n\n# By department\nprint("\\n📋 By Department:")\nfor dept, grp in df.groupby('department'):\n    rate = grp['left'].mean()\n    print(f"  {dept:<12s}: {rate:.0%} left (n={len(grp)})")\n\n# Salary comparison\nstayed = df[df['left']==0]['salary'].mean()\nleft = df[df['left']==1]['salary'].mean()\nprint(f"\\n💰 Avg salary — Stayed: ₦{stayed:,.0f} | Left: ₦{left:,.0f}")\n\n# Dashboard\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\nby_dept = df.groupby('department')['left'].mean().sort_values()\nby_dept.plot(kind='barh', ax=axes[0], color='#ef4444')\naxes[0].set_title('Attrition Rate by Department')\naxes[0].set_xlabel('Rate')\naxes[1].hist([df[df['left']==0]['satisfaction'], df[df['left']==1]['satisfaction']],\n             label=['Stayed','Left'], color=['#22c55e','#ef4444'], bins=10)\naxes[1].set_title('Satisfaction: Stayed vs Left')\naxes[1].legend()\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does an 'attrition rate' measure?",options:["Revenue growth","Percentage of employees who leave","Customer satisfaction","Product quality"],answer:1}
    },
    {
        id:"project_finance", module:"m12", title:"12.2 Project: Financial Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌍 Financial Analysis — Revenue Trends</h2>
<p class="mb-4">Analyze business financial data with time series, calculate KPIs, and build an executive dashboard. This is what business analysts do daily.</p>
<div class="code-block">Key KPIs to Calculate:<br>• Monthly revenue and growth rate<br>• Profit margin over time<br>• Best and worst performing months<br>• Cumulative revenue vs target</div>`,
        tip:"Tutor's Insight: Financial analysis always starts with the question 'Are we on track?' Everything else — charts, tables, reports — exists to answer that one question clearly.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nmonths = pd.date_range('2025-01-01', periods=12, freq='M')\n\ndf = pd.DataFrame({\n    'month': months,\n    'revenue': np.random.normal(500, 80, 12).clip(300, 700).round(0) * 1000,\n    'expenses': np.random.normal(350, 50, 12).clip(200, 500).round(0) * 1000,\n})\n\ndf['profit'] = df['revenue'] - df['expenses']\ndf['margin'] = (df['profit'] / df['revenue'] * 100).round(1)\ndf['revenue_growth'] = df['revenue'].pct_change() * 100\ndf['cum_revenue'] = df['revenue'].cumsum()\ntarget = 6_000_000  # Annual target\n\nprint("💰 FINANCIAL PERFORMANCE REPORT")\nprint("=" * 50)\nprint(f"Total Revenue:  ₦{df['revenue'].sum():>12,.0f}")\nprint(f"Total Expenses: ₦{df['expenses'].sum():>12,.0f}")\nprint(f"Total Profit:   ₦{df['profit'].sum():>12,.0f}")\nprint(f"Avg Margin:     {df['margin'].mean():.1f}%")\nprint(f"Target:         ₦{target:>12,.0f}")\nprint(f"Achievement:    {df['revenue'].sum()/target:.0%}")\n\n# Dashboard\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Annual Financial Dashboard', fontsize=14, fontweight='bold')\naxes[0,0].bar(df['month'].dt.strftime('%b'), df['revenue']/1000, color='#22c55e', label='Revenue')\naxes[0,0].bar(df['month'].dt.strftime('%b'), df['expenses']/1000, color='#ef4444', alpha=0.7, label='Expenses')\naxes[0,0].set_title('Revenue vs Expenses (₦K)'); axes[0,0].legend(); axes[0,0].tick_params(axis='x', rotation=45)\naxes[0,1].plot(df['month'].dt.strftime('%b'), df['margin'], 'o-', color='#6366f1')\naxes[0,1].set_title('Profit Margin %'); axes[0,1].axhline(y=df['margin'].mean(), ls='--', color='gray')\naxes[1,0].fill_between(range(12), df['cum_revenue']/1e6, alpha=0.3, color='#22c55e')\naxes[1,0].plot(df['cum_revenue']/1e6, 'o-', color='#22c55e')\naxes[1,0].axhline(y=target/1e6, ls='--', color='red', label=f'Target: ₦{target/1e6:.0f}M')\naxes[1,0].set_title('Cumulative Revenue (₦M)'); axes[1,0].legend()\naxes[1,1].bar(df['month'].dt.strftime('%b'), df['profit']/1000,\n              color=['#22c55e' if p>0 else '#ef4444' for p in df['profit']])\naxes[1,1].set_title('Monthly Profit (₦K)'); axes[1,1].tick_params(axis='x', rotation=45)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What is 'profit margin'?",options:["Revenue minus expenses","Profit divided by revenue, as a percentage","Total sales volume","Revenue growth rate"],answer:1}
    },
    {
        id:"project_pipeline", module:"m12", title:"12.3 Project: Complete Data Pipeline", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌍 End-to-End Data Pipeline</h2>
<p class="mb-4">This is the <b>ultimate capstone</b>. Build a complete, professional data pipeline that goes from raw messy data to an actionable report — exactly what happens in industry.</p>
<div class="code-block">The Professional Pipeline:<br>1. Generate / Load raw data<br>2. Inspect and understand<br>3. Clean (missing, duplicates, types)<br>4. Feature engineering<br>5. Exploratory analysis<br>6. Statistical summary<br>7. Visualization dashboard<br>8. Written findings and recommendations</div>
<p class="mb-2">This project uses EVERY concept from all 12 modules.</p>`,
        tip:"Tutor's Insight: This is what data scientists actually do. The only thing missing from a 'real job' project is machine learning — and everything before and after ML is identical to what you'll build here.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ========================================\n# COMPLETE DATA PIPELINE — STUDENT AT RISK\n# Built by: Adewale Samson Adeagbo\n# ========================================\n\nnp.random.seed(2024)\nn = 50\n\n# STEP 1: Generate raw data with issues\nraw = pd.DataFrame({\n    'id': range(1, n+1),\n    'name': [f"Student_{i:02d}" for i in range(1, n+1)],\n    'gender': np.random.choice(['M','F'], n),\n    'maths': np.random.normal(62, 18, n).clip(0, 100).round(1),\n    'english': np.random.normal(65, 15, n).clip(0, 100).round(1),\n    'science': np.random.normal(60, 20, n).clip(0, 100).round(1),\n    'attendance': np.random.normal(78, 15, n).clip(40, 100).round(1),\n})\n# Inject missing values\nfor col in ['maths','english','attendance']:\n    idx = np.random.choice(n, 4, replace=False)\n    raw.loc[idx, col] = np.nan\n\nprint("STEP 1 — RAW DATA")\nprint(f"Shape: {raw.shape} | Missing: {raw.isnull().sum().sum()}")\n\n# STEP 2: Clean\ndf = raw.copy()\nfor col in ['maths','english','science']:\n    df[col] = df[col].fillna(df[col].median())\ndf['attendance'] = df['attendance'].fillna(df['attendance'].median())\nprint(f"\\nSTEP 2 — CLEANED: {df.isnull().sum().sum()} missing")\n\n# STEP 3: Feature Engineering\ndf['average'] = df[['maths','english','science']].mean(axis=1).round(1)\ndf['grade'] = pd.cut(df['average'], bins=[0,40,50,60,70,100], labels=['F','D','C','B','A'])\n\ndef risk_level(row):\n    score = 0\n    if row['average'] < 50: score += 3\n    elif row['average'] < 60: score += 1\n    if row['attendance'] < 70: score += 3\n    elif row['attendance'] < 80: score += 1\n    return 'HIGH' if score >= 4 else 'MODERATE' if score >= 2 else 'LOW'\n\ndf['risk'] = df.apply(risk_level, axis=1)\n\n# STEP 4: Analysis\nprint(f"\\nSTEP 3-4 — ANALYSIS")\nprint(f"Average score: {df['average'].mean():.1f}")\nprint(f"Pass rate (≥50): {(df['average']>=50).mean():.0%}")\nprint(f"\\nRisk Distribution:")\nprint(df['risk'].value_counts().to_string())\n\nprint(f"\\nBy Gender:")\nprint(df.groupby('gender')[['average','attendance']].mean().round(1).to_string())\n\n# STEP 5: Dashboard\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Student At-Risk Dashboard', fontsize=14, fontweight='bold')\naxes[0,0].hist(df['average'], bins=10, color='#6366f1', edgecolor='white')\naxes[0,0].set_title('Score Distribution')\nrisk_counts = df['risk'].value_counts()\naxes[0,1].pie(risk_counts, labels=risk_counts.index, autopct='%1.0f%%',\n              colors=['#22c55e','#f59e0b','#ef4444'])\naxes[0,1].set_title('Risk Levels')\naxes[1,0].scatter(df['attendance'], df['average'],\n                  c=df['risk'].map({'LOW':'green','MODERATE':'orange','HIGH':'red'}), s=80)\naxes[1,0].set_xlabel('Attendance %'); axes[1,0].set_ylabel('Average Score')\naxes[1,0].set_title('Attendance vs Score')\ndf.groupby('grade', observed=True)['id'].count().plot(kind='bar', ax=axes[1,1], color='#3b82f6')\naxes[1,1].set_title('Grade Distribution')\nplt.tight_layout()\nplt.show()\n\n# STEP 6: Report\nhigh = df[df['risk']=='HIGH']\nprint(f"\\n{'='*50}")\nprint(f"  📋 FINAL REPORT — Student At-Risk Analysis")\nprint(f"  Built by: Adewale Samson Adeagbo")\nprint(f"{'='*50}")\nprint(f"  Students: {n} | High Risk: {len(high)}")\nif len(high) > 0:\n    print("\\n  ⚠️ Students needing immediate support:")\n    for _, r in high.head(5).iterrows():\n        print(f"    {r['name']}: avg={r['average']:.0f}, attend={r['attendance']:.0f}%")`,
        quiz:{question:"In the data science workflow, what comes BEFORE visualization?",options:["Deployment","Data cleaning and analysis","Report writing","Machine learning"],answer:1}
    },
,
// ──── MODULE 1 ADDITIONS ────
    {
        id:"type_conversion", module:"m1", title:"1.6 Type Conversion & NoneType", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">Converting Between Types</h2>
<p class="mb-4">Data often arrives as the <b>wrong type</b> — a number stored as text, a decimal where you need a whole number. <b>Type conversion</b> (casting) fixes this.</p>
<div class="code-block">int("42")       # String → Integer: 42<br>float("3.14")   # String → Float: 3.14<br>str(100)        # Integer → String: "100"<br>bool(0)         # Integer → Boolean: False<br>bool("hello")   # Non-empty string → True</div>
<p class="mb-2"><b>The 5th Type — NoneType:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>None</code> represents <b>absence of a value</b> — not zero, not empty string, not False</li>
<li>Functions without <code>return</code> automatically return <code>None</code></li>
<li>In Pandas, missing data (NaN) is related to <code>None</code></li>
<li>Always check with <code>is None</code>, never <code>== None</code></li>
</ul>
<div class="callout ci"><div class="cl">DATA SCIENCE CONNECTION</div><p>When you load a CSV, numbers stored as strings cannot be used for math. <code>df['price'] = df['price'].astype(float)</code> converts an entire column. This is one of the most common data cleaning steps.</p></div>`,
        tip:"Tutor's Insight: The #1 beginner mistake is trying to do math with strings. '5' + 3 gives a TypeError. Always convert with int() or float() first. In Pandas, use .astype().",
        defaultCode:`# Type conversion in action\nscore_text = "85"\nscore_num = int(score_text)\nprint(f"Text: '{score_text}' (type: {type(score_text).__name__})")\nprint(f"Number: {score_num} (type: {type(score_num).__name__})")\nprint(f"Math works now: {score_num + 15}\\n")\n\n# NoneType\nresult = None\nprint(f"result is None: {result is None}")\nprint(f"bool(None): {bool(None)}")\nprint(f"bool(0): {bool(0)}")\nprint(f"bool(''): {bool('')}")\nprint(f"bool('hello'): {bool('hello')}\\n")\n\n# Truthiness table\nvalues = [0, 1, -1, 0.0, 3.14, "", "hi", None, [], [1,2], True, False]\nfor v in values:\n    print(f"  {str(v):>8s} → bool = {bool(v)}")`,
        quiz:{question:"What does bool(None) return?",options:["True","False","None","Error"],answer:1}
    },

    // ──── MODULE 2 ADDITIONS ────
    {
        id:"nested_loops", module:"m2", title:"2.6 Nested Loops & Patterns", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Loops Inside Loops</h2>
<p class="mb-4">A <b>nested loop</b> is a loop inside another loop. The inner loop completes all its iterations for EACH iteration of the outer loop. Essential for processing 2D data like tables.</p>
<div class="code-block">for row in range(3):<br>    for col in range(4):<br>        print(f"({row},{col})", end=" ")<br>    print()  # New line after each row</div>
<p class="mb-2"><b>When You Need Nested Loops:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Processing a <b>table</b> (rows × columns)</li>
<li>Comparing <b>every item against every other</b></li>
<li>Generating <b>combinations</b> or <b>patterns</b></li>
<li>Working with <b>matrices</b> (before you learn NumPy)</li>
</ul>
<div class="callout cw"><div class="cl">PERFORMANCE WARNING</div><p>Nested loops are O(n²) — if the outer loop runs 1000 times and inner runs 1000 times, that's 1,000,000 operations. In data science, use vectorized operations (NumPy/Pandas) instead whenever possible.</p></div>`,
        tip:"Tutor's Insight: Nested loops help you understand what's happening when Pandas does df.groupby().apply(). Under the hood, it's iterating through groups and applying a function to each — a conceptual nested loop.",
        defaultCode:`# Multiplication table\nprint("=== Multiplication Table ===")\nprint("   ", end="")\nfor j in range(1, 8):\n    print(f"{j:>4}", end="")\nprint("\\n" + "-" * 32)\n\nfor i in range(1, 8):\n    print(f"{i:>2} |", end="")\n    for j in range(1, 8):\n        print(f"{i*j:>4}", end="")\n    print()\n\n# Finding pairs that sum to target\nprint("\\n=== Pairs that sum to 100 ===")\nscores = [45, 55, 30, 70, 60, 40, 80, 20]\nfor i in range(len(scores)):\n    for j in range(i+1, len(scores)):\n        if scores[i] + scores[j] == 100:\n            print(f"  {scores[i]} + {scores[j]} = 100")`,
        quiz:{question:"How many total iterations does a loop of 5 inside a loop of 3 produce?",options:["5","8","15","35"],answer:2}
    },
    {
        id:"lambda_map", module:"m2", title:"2.7 Lambda, Map & Filter", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">Compact Functional Tools</h2>
<p class="mb-4">A <b>lambda</b> is a tiny anonymous function in one line. <b>map()</b> applies a function to every item. <b>filter()</b> keeps only items that pass a test. These are the building blocks of Pandas' <code>.apply()</code>.</p>
<div class="code-block">double = lambda x: x * 2<br>grade = lambda s: "Pass" if s >= 50 else "Fail"<br><br>list(map(lambda x: x**2, [1,2,3]))  # [1,4,9]<br>list(filter(lambda x: x>50, scores)) # keeps >50</div>
<p class="mb-2"><b>When to Use Each:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Lambda</b> — when you need a quick throwaway function</li>
<li><b>map()</b> — transform every item in a list</li>
<li><b>filter()</b> — keep only items matching a condition</li>
<li><b>sorted() with key=</b> — custom sort orders</li>
</ul>
<div class="callout ci"><div class="cl">DATA SCIENCE CONNECTION</div><p>In Pandas, <code>df['grade'] = df['score'].apply(lambda s: 'A' if s>=70 else 'F')</code> uses lambda to create a new column. This is one of the most common Pandas patterns.</p></div>`,
        tip:"Tutor's Insight: Lambda is just a shorthand for def. Use lambda for simple one-line operations. If it needs multiple lines, write a proper function with def instead.",
        defaultCode:`# Lambda basics\ngrade = lambda s: "A" if s>=70 else ("B" if s>=60 else ("C" if s>=50 else "F"))\nbonus = lambda s: round(s * 1.1, 1)\n\nscores = [85, 42, 91, 67, 55, 78, 33, 96]\n\n# Map: apply to all\nboosted = list(map(bonus, scores))\ngrades = list(map(grade, scores))\nprint("Original:", scores)\nprint("Boosted: ", boosted)\nprint("Grades:  ", grades)\n\n# Filter: keep matching\npassing = list(filter(lambda s: s >= 50, scores))\nfailing = list(filter(lambda s: s < 50, scores))\nprint(f"\\nPassing ({len(passing)}): {passing}")\nprint(f"Failing ({len(failing)}): {failing}")\n\n# Sorted with key\nstudents = [("Bisi",78), ("Adewale",95), ("Chidi",62), ("Dayo",88)]\nby_score = sorted(students, key=lambda s: s[1], reverse=True)\nprint("\\nRanked:")\nfor i, (name, sc) in enumerate(by_score, 1):\n    print(f"  {i}. {name}: {sc}")`,
        quiz:{question:"What does filter(lambda x: x>50, [30,60,40,70]) return?",options:["[30,40]","[60,70]","[True,True]","60,70"],answer:1}
    },

    // ──── MODULE 3 ADDITIONS ────
    {
        id:"nested_data", module:"m3", title:"3.5 Nested Data Structures", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Data Inside Data</h2>
<p class="mb-4">Real data is rarely flat. <b>Nested structures</b> — lists of dicts, dicts of lists, dicts of dicts — represent hierarchical data like JSON APIs, student records, and organizational charts.</p>
<div class="code-block">school = {<br>  "name": "HMG Academy",<br>  "classes": [<br>    {"name": "JSS3", "students": 45},<br>    {"name": "SS2", "students": 38}<br>  ]<br>}</div>
<p class="mb-2"><b>Common Patterns:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>List of dicts</b> — each dict is a row → <code>pd.DataFrame(list_of_dicts)</code></li>
<li><b>Dict of lists</b> — each key is a column → <code>pd.DataFrame(dict_of_lists)</code></li>
<li><b>Nested dicts</b> — hierarchical data (JSON from APIs)</li>
</ul>`,
        tip:"Tutor's Insight: A list of dictionaries IS a table. This is exactly how pd.DataFrame() creates DataFrames. Master nested structures and you master data representation.",
        defaultCode:`import pandas as pd\n\n# List of dicts → DataFrame (most common pattern)\nstudents = [\n    {"name": "Adewale", "maths": 95, "science": 88, "grade": "A"},\n    {"name": "Bisi", "maths": 72, "science": 91, "grade": "B"},\n    {"name": "Chidi", "maths": 85, "science": 78, "grade": "B"},\n    {"name": "Dayo", "maths": 62, "science": 55, "grade": "C"},\n]\n\n# Instant DataFrame!\ndf = pd.DataFrame(students)\nprint("DataFrame from list of dicts:")\nprint(df)\n\n# Nested dict — school records\nschool = {\n    "HMG Academy": {\n        "classes": {"JSS3": 45, "SS1": 42, "SS2": 38},\n        "location": "Lagos"\n    }\n}\n\n# Navigate nested data\nfor name, info in school.items():\n    print(f"\\n{name} ({info['location']})")\n    total = 0\n    for cls, count in info["classes"].items():\n        print(f"  {cls}: {count} students")\n        total += count\n    print(f"  Total: {total}")`,
        quiz:{question:"What does pd.DataFrame(list_of_dicts) create?",options:["A list","A dictionary","A DataFrame where each dict is a row","An error"],answer:2}
    },
    {
        id:"collections_mod", module:"m3", title:"3.6 Collections Module", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Specialized Containers</h2>
<p class="mb-4">Python's <code>collections</code> module provides specialized containers that solve common data science problems more elegantly than basic dicts and lists.</p>
<div class="code-block">from collections import Counter, defaultdict<br><br>Counter(["A","B","A","C","A","B"])  # {'A':3, 'B':2, 'C':1}<br>Counter("hello world")  # character frequency</div>
<p class="mb-2"><b>Key Tools:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Counter</b> — count occurrences of anything (most common in data science)</li>
<li><b>defaultdict</b> — dict with a default value for missing keys</li>
<li><b>OrderedDict</b> — dict that remembers insertion order (Python 3.7+ dicts already do this)</li>
<li><b>namedtuple</b> — tuple with named fields (like a lightweight class)</li>
</ul>`,
        tip:"Tutor's Insight: Counter is your best friend for frequency analysis. value_counts() in Pandas is essentially Counter for DataFrames. Learn Counter and you understand value_counts().",
        defaultCode:`from collections import Counter, defaultdict\n\n# Counter — frequency analysis\ngrades = ["A","B","A","C","B","A","B","F","A","B","C","A"]\ncount = Counter(grades)\nprint("Grade frequency:", dict(count))\nprint("Most common:", count.most_common(2))\n\n# Counter with text\ntext = "data science is the science of data"\nwords = Counter(text.split())\nprint(f"\\nWord frequency: {dict(words)}")\n\n# defaultdict — group by category\nfrom collections import defaultdict\nstudents = [\n    ("Maths", "Adewale"), ("Science", "Bisi"),\n    ("Maths", "Chidi"), ("Science", "Dayo"),\n    ("Maths", "Eka"), ("English", "Femi"),\n]\n\nby_subject = defaultdict(list)\nfor subj, name in students:\n    by_subject[subj].append(name)\n\nprint("\\nStudents by subject:")\nfor subj, names in by_subject.items():\n    print(f"  {subj}: {', '.join(names)} ({len(names)})")`,
        quiz:{question:"What does Counter(['a','b','a','c','a']).most_common(1) return?",options:["['a']","[('a', 3)]","{'a': 3}","3"],answer:1}
    },

    // ──── MODULE 4 ADDITIONS ────
    {
        id:"regex_basics", module:"m4", title:"4.4 Regex — Pattern Matching", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Finding Patterns in Text</h2>
<p class="mb-4"><b>Regular Expressions (regex)</b> are patterns that match text. They're used for extracting phone numbers, emails, dates, and cleaning messy text data at scale.</p>
<div class="code-block">import re<br><br>re.findall(r'\\d+', 'Score: 85, Age: 17')  # ['85','17']<br>re.sub(r'[^a-zA-Z ]', '', 'Hello! #123')  # 'Hello '</div>
<p class="mb-2"><b>Essential Patterns:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>\\d</code> — any digit (0-9)</li>
<li><code>\\w</code> — any word character (letter, digit, underscore)</li>
<li><code>\\s</code> — any whitespace</li>
<li><code>+</code> — one or more | <code>*</code> — zero or more</li>
<li><code>[A-Z]</code> — any uppercase letter</li>
<li><code>^</code> — start of string | <code>$</code> — end of string</li>
</ul>
<div class="callout ci"><div class="cl">DATA SCIENCE CONNECTION</div><p>Pandas integrates regex: <code>df['col'].str.extract(r'(\\d+)')</code> extracts numbers from text columns. Essential for cleaning messy data.</p></div>`,
        tip:"Tutor's Insight: You don't need to memorize regex. Bookmark a cheatsheet and look up patterns when needed. The skill is knowing WHEN regex is the right tool.",
        defaultCode:`import re\n\n# Extract numbers from text\ntext = "Student scored 85 out of 100 in Maths, age 17"\nnumbers = re.findall(r'\\d+', text)\nprint(f"Numbers found: {numbers}")\n\n# Validate email format\nemails = ["ade@gmail.com", "bad-email", "bisi@yahoo.co.ng", "@invalid", "ok@school.edu"]\npattern = r'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$'\nfor e in emails:\n    valid = bool(re.match(pattern, e))\n    print(f"  {e:<25s} {'✅ Valid' if valid else '❌ Invalid'}")\n\n# Clean messy text\nmessy = "  Hello!!!  World###  123  "\ncleaned = re.sub(r'[^a-zA-Z0-9 ]', '', messy).strip()\nprint(f"\\nMessy:   '{messy}'")\nprint(f"Cleaned: '{cleaned}'")\n\n# Extract phone numbers\ntext2 = "Call 080-1234-5678 or 090-8765-4321"\nphones = re.findall(r'\\d{3}-\\d{4}-\\d{4}', text2)\nprint(f"\\nPhones: {phones}")`,
        quiz:{question:"What does \\d+ match?",options:["One digit","One or more digits","Letters only","Whitespace"],answer:1}
    },
    {
        id:"safe_loading", module:"m4", title:"4.5 Error-Proof Data Loading", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Loading Data That Won't Crash</h2>
<p class="mb-4">In production, data loading must be <b>bulletproof</b>. Files might be missing, formats might change, columns might have unexpected types. Defensive loading prevents crashes.</p>
<div class="code-block">try:<br>    df = pd.read_csv('data.csv')<br>    assert len(df) > 0, "Empty file!"<br>    required = ['Name','Score']<br>    assert all(c in df.columns for c in required)<br>except FileNotFoundError:<br>    print("File not found")<br>except AssertionError as e:<br>    print(f"Validation failed: {e}")</div>
<p class="mb-2"><b>The Defensive Loading Checklist:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>✅ Wrap in try/except</li>
<li>✅ Check file exists</li>
<li>✅ Validate row count > 0</li>
<li>✅ Verify expected columns exist</li>
<li>✅ Check data types after loading</li>
<li>✅ Report missing value counts</li>
</ul>`,
        tip:"Tutor's Insight: In industry, data pipelines run automatically at 3am. Nobody is watching. If your loading code crashes silently, you won't know until the CEO asks why the dashboard is empty.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndef safe_load(filename, required_cols=None):\n    """Load CSV with full validation."""\n    print(f"Loading '{filename}'...")\n    \n    try:\n        df = pd.read_csv(filename)\n    except FileNotFoundError:\n        print("  ❌ File not found!")\n        return None\n    except Exception as e:\n        print(f"  ❌ Error: {e}")\n        return None\n    \n    # Validation\n    print(f"  ✅ Loaded: {df.shape[0]} rows × {df.shape[1]} cols")\n    \n    if df.empty:\n        print("  ⚠️ WARNING: File is empty!")\n        return df\n    \n    # Check required columns\n    if required_cols:\n        missing = [c for c in required_cols if c not in df.columns]\n        if missing:\n            print(f"  ⚠️ Missing columns: {missing}")\n        else:\n            print(f"  ✅ All required columns present")\n    \n    # Report missing values\n    nulls = df.isnull().sum()\n    if nulls.sum() > 0:\n        print(f"  ⚠️ Missing values:")\n        for col, n in nulls[nulls > 0].items():\n            print(f"      {col}: {n} missing")\n    else:\n        print("  ✅ No missing values")\n    \n    return df\n\n# Test it\ndf = safe_load('data.csv', required_cols=['Name', 'Score'])\nif df is not None:\n    print(f"\\nReady for analysis! Shape: {df.shape}")`,
        quiz:{question:"Why wrap pd.read_csv() in try/except?",options:["It makes the code faster","To prevent crashes from missing or corrupt files","It's required by Python","To load files faster"],answer:1}
    },

    // ──── MODULE 5 ADDITIONS ────
    {
        id:"apply_transform", module:"m5", title:"5.7 Apply, Map & Transform", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Custom Operations at Scale</h2>
<p class="mb-4"><b>apply()</b> runs any function on every row or column. <b>map()</b> replaces values using a dictionary. <b>transform()</b> returns same-shaped results for group operations.</p>
<div class="code-block">df['grade'] = df['score'].apply(lambda s: 'A' if s>=70 else 'F')<br>df['status'] = df['code'].map({'M':'Male', 'F':'Female'})<br>df['group_avg'] = df.groupby('class')['score'].transform('mean')</div>
<p class="mb-2"><b>When to Use Each:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>apply()</b> — custom function on each value/row/column</li>
<li><b>map()</b> — replace values using a lookup dictionary (Series only)</li>
<li><b>applymap()</b> — apply function to every cell in DataFrame</li>
<li><b>transform()</b> — like apply but keeps original index (for groupby)</li>
</ul>`,
        tip:"Tutor's Insight: transform() is the secret weapon of Pandas. It lets you add a group statistic (like group average) as a new column while keeping every row — something groupby().mean() alone can't do.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'name': ['Adewale','Bisi','Chidi','Dayo','Eka','Femi'],\n    'class': ['A','A','A','B','B','B'],\n    'score': [95, 72, 88, 65, 82, 55],\n    'gender': ['M','F','M','M','F','M'],\n})\n\n# apply: custom function\ndf['grade'] = df['score'].apply(\n    lambda s: 'A' if s>=80 else ('B' if s>=60 else 'F')\n)\n\n# map: value replacement\ndf['gender_full'] = df['gender'].map({'M':'Male', 'F':'Female'})\n\n# transform: group stat as column\ndf['class_avg'] = df.groupby('class')['score'].transform('mean').round(1)\ndf['vs_class'] = (df['score'] - df['class_avg']).round(1)\n\nprint(df.to_string(index=False))\n\n# Apply with axis=1 (across columns per row)\ndef risk_check(row):\n    if row['score'] < 60 and row['vs_class'] < 0:\n        return 'HIGH RISK'\n    elif row['score'] < 70:\n        return 'MONITOR'\n    return 'OK'\n\ndf['status'] = df.apply(risk_check, axis=1)\nprint("\\nWith risk status:")\nprint(df[['name','score','class_avg','vs_class','status']].to_string(index=False))`,
        quiz:{question:"What does transform() do differently from apply()?",options:["It runs faster","It returns results with the same index as the original","It only works with numbers","It modifies in place"],answer:1}
    },
    {
        id:"multi_index", module:"m5", title:"5.8 Multi-Index & Advanced Indexing", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Hierarchical Indexes</h2>
<p class="mb-4">A <b>MultiIndex</b> lets you have multiple levels of row labels — like grouping by both department AND team. It's what makes complex reports possible.</p>
<div class="code-block">df.set_index(['dept', 'team'])<br>df.loc[('Engineering', 'Backend')]<br>df.index.get_level_values(0)  # First level</div>
<p class="mb-2"><b>Key Operations:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>.set_index(['col1','col2'])</code> — create multi-level index</li>
<li><code>.reset_index()</code> — flatten back to columns</li>
<li><code>.loc[(level1, level2)]</code> — access specific group</li>
<li><code>.xs('value', level='name')</code> — cross-section slice</li>
<li><code>.swaplevel()</code> — swap index levels</li>
</ul>`,
        tip:"Tutor's Insight: MultiIndex looks intimidating but it's just groupby results kept as an index. Every groupby result IS a MultiIndex DataFrame. Understanding this makes complex reports easy.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Create hierarchical data\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'dept': ['Eng','Eng','Eng','Sales','Sales','Sales','HR','HR'],\n    'team': ['Backend','Frontend','Data','Lagos','Abuja','PH','Recruit','Benefits'],\n    'headcount': [12, 8, 5, 15, 10, 7, 4, 3],\n    'avg_salary': [120, 110, 130, 85, 80, 75, 90, 85],\n})\n\nprint("Original:")\nprint(df)\n\n# Set multi-index\nmi = df.set_index(['dept', 'team'])\nprint("\\nMulti-Index:")\nprint(mi)\n\n# Access specific groups\nprint("\\nEngineering department:")\nprint(mi.loc['Eng'])\n\n# GroupBy creates MultiIndex automatically\nsummary = df.groupby('dept').agg(\n    total_staff=('headcount', 'sum'),\n    avg_sal=('avg_salary', 'mean'),\n    teams=('team', 'count')\n).round(0)\nprint("\\nDepartment Summary:")\nprint(summary)\n\n# Reset back to flat\nprint("\\nFlattened:")\nprint(summary.reset_index())`,
        quiz:{question:"What does .reset_index() do to a MultiIndex DataFrame?",options:["Deletes the index","Converts index levels back to regular columns","Sorts the data","Creates a new index"],answer:1}
    },

    // ──── MODULE 6 ADDITIONS ────
    {
        id:"chart_styling", module:"m6", title:"6.7 Chart Customization & Styling", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Professional Chart Design</h2>
<p class="mb-4">Default charts look amateur. <b>Professional charts</b> have clear titles, labeled axes, appropriate colors, annotations, and clean layouts. The difference is in the details.</p>
<div class="code-block">ax.set_title('Title', fontsize=14, fontweight='bold', pad=15)<br>ax.set_xlabel('X Label', fontsize=11)<br>ax.spines['top'].set_visible(False)  # Remove top border<br>ax.annotate('Peak', xy=(x,y), fontsize=9)</div>
<p class="mb-2"><b>Styling Checklist:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>✅ Descriptive title (what + when + units)</li>
<li>✅ Labeled axes with units</li>
<li>✅ Remove unnecessary borders (spines)</li>
<li>✅ Consistent color scheme</li>
<li>✅ Annotations for key data points</li>
<li>✅ Legend only when multiple series</li>
<li>✅ Grid lines at low opacity</li>
</ul>`,
        tip:"Tutor's Insight: A chart should be understood in 5 seconds. If someone needs to read the data to understand it, the chart has failed. Title tells WHAT, subtitle tells WHY.",
        defaultCode:`import matplotlib.pyplot as plt\nimport numpy as np\n\nmonths = ['Jan','Feb','Mar','Apr','May','Jun']\nrevenue = [45, 52, 48, 61, 55, 72]\ntarget = [50, 50, 50, 55, 55, 60]\n\nfig, ax = plt.subplots(figsize=(9, 5))\n\n# Plot with style\nax.bar(months, revenue, color='#6366f1', edgecolor='white',\n       linewidth=1.5, label='Actual', zorder=2)\nax.plot(months, target, 'o--', color='#ef4444', linewidth=2,\n        markersize=7, label='Target', zorder=3)\n\n# Professional styling\nax.set_title('Monthly Revenue vs Target', fontsize=14,\n             fontweight='bold', pad=15)\nax.set_ylabel('Revenue (₦ thousands)', fontsize=11)\nax.spines['top'].set_visible(False)\nax.spines['right'].set_visible(False)\nax.grid(axis='y', alpha=0.2)\nax.legend(frameon=False, fontsize=10)\n\n# Annotate peak\npeak_idx = revenue.index(max(revenue))\nax.annotate(f'Peak: ₦{max(revenue)}K', \n            xy=(peak_idx, max(revenue)),\n            xytext=(peak_idx-0.5, max(revenue)+5),\n            fontsize=9, fontweight='bold', color='#6366f1',\n            arrowprops=dict(arrowstyle='->', color='#6366f1'))\n\n# Value labels\nfor i, v in enumerate(revenue):\n    color = '#22c55e' if v >= target[i] else '#ef4444'\n    ax.text(i, v+1.5, f'{v}', ha='center', fontsize=9,\n            fontweight='bold', color=color)\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does ax.spines['top'].set_visible(False) do?",options:["Removes the title","Hides the top border of the chart","Removes gridlines","Hides the legend"],answer:1}
    },
    {
        id:"boxplot_heatmap", module:"m6", title:"6.8 Box Plots & Heatmaps", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Advanced Chart Types</h2>
<p class="mb-4"><b>Box plots</b> show distributions with quartiles and outliers. <b>Heatmaps</b> visualize matrices like correlation tables using color intensity.</p>
<div class="code-block"># Box plot — shows median, quartiles, outliers<br>ax.boxplot([group1, group2], labels=['A','B'])<br><br># Heatmap — correlation matrix<br>im = ax.imshow(corr_matrix, cmap='RdYlGn')</div>
<p class="mb-2"><b>When to Use:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Box plot</b> — compare distributions across groups, spot outliers</li>
<li><b>Heatmap</b> — visualize correlation matrices, pivot tables</li>
<li><b>Violin plot</b> — box plot + distribution shape combined</li>
</ul>`,
        tip:"Tutor's Insight: Box plots are the fastest way to compare groups. In one glance you see median, spread, and outliers for each group. Use them in every EDA.",
        defaultCode:`import matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\nnp.random.seed(42)\n\n# Generate data\nmaths = np.random.normal(72, 15, 40)\nscience = np.random.normal(65, 18, 40)\nenglish = np.random.normal(78, 12, 40)\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\n\n# Box plot\nbp = ax1.boxplot([maths, science, english],\n                  labels=['Maths','Science','English'],\n                  patch_artist=True,\n                  boxprops=dict(facecolor='#6366f133'))\nax1.set_title('Score Distribution by Subject', fontweight='bold')\nax1.set_ylabel('Score')\nax1.grid(axis='y', alpha=0.2)\n\n# Heatmap\ndf = pd.DataFrame({'Maths':maths[:20], 'Science':science[:20], 'English':english[:20]})\ncorr = df.corr()\nim = ax2.imshow(corr, cmap='RdYlGn', vmin=-1, vmax=1)\nax2.set_xticks(range(3)); ax2.set_yticks(range(3))\nax2.set_xticklabels(corr.columns); ax2.set_yticklabels(corr.columns)\nfor i in range(3):\n    for j in range(3):\n        ax2.text(j, i, f'{corr.iloc[i,j]:.2f}',\n                ha='center', va='center', fontweight='bold',\n                color='black' if abs(corr.iloc[i,j])<0.5 else 'white')\nplt.colorbar(im, ax=ax2, shrink=0.8)\nax2.set_title('Correlation Heatmap', fontweight='bold')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"In a box plot, what does a dot beyond the whiskers represent?",options:["The mean","The median","An outlier","The maximum"],answer:2}
    },

    // ──── MODULE 7 ADDITIONS ────
    {
        id:"sampling_clt", module:"m7", title:"7.5 Sampling & Central Limit Theorem", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">The Most Important Theorem in Statistics</h2>
<p class="mb-4">The <b>Central Limit Theorem (CLT)</b> says: take enough random samples from ANY distribution, and the means of those samples will form a <b>normal (bell) curve</b>. This is why statistics works on real data.</p>
<div class="code-block">samples = [np.random.choice(data, 30).mean() <br>           for _ in range(1000)]<br># samples will be normally distributed!</div>
<p class="mb-2"><b>Sampling Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Random sampling</b> — every item has equal chance</li>
<li><b>Stratified sampling</b> — proportional from each group</li>
<li><b>Systematic sampling</b> — every nth item</li>
<li><b>Sample size matters</b> — n≥30 is the magic threshold for CLT</li>
</ul>
<div class="callout ct"><div class="cl">WHY THIS MATTERS</div><p>CLT is why we can draw conclusions about millions of people from a survey of 1,000. It's the mathematical foundation of polls, A/B tests, quality control, and every confidence interval you'll ever see.</p></div>`,
        tip:"Tutor's Insight: CLT is the reason data science works. We almost never have ALL the data — we have samples. CLT guarantees that our sample statistics are reliable IF the sample is large enough.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\n# Original data: SKEWED (not normal)\npopulation = np.random.exponential(50, 10000)\n\n# Take many samples and calculate means\nsample_means = []\nfor _ in range(2000):\n    sample = np.random.choice(population, 30)\n    sample_means.append(sample.mean())\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\n\n# Original: skewed\nax1.hist(population, bins=40, color='#ef4444', edgecolor='white', alpha=0.8)\nax1.set_title('Original Population (Skewed!)', fontweight='bold')\nax1.axvline(np.mean(population), color='blue', ls='--',\n           label=f'Mean: {np.mean(population):.1f}')\nax1.legend()\n\n# Sample means: NORMAL!\nax2.hist(sample_means, bins=40, color='#22c55e', edgecolor='white', alpha=0.8)\nax2.set_title('Distribution of Sample Means (Normal!)', fontweight='bold')\nax2.axvline(np.mean(sample_means), color='blue', ls='--',\n           label=f'Mean: {np.mean(sample_means):.1f}')\nax2.legend()\n\nplt.tight_layout()\nplt.show()\n\nprint("🎯 Central Limit Theorem in Action!")\nprint(f"Population mean: {np.mean(population):.1f}")\nprint(f"Mean of sample means: {np.mean(sample_means):.1f}")\nprint(f"They match! Even though the population is skewed.")`,
        quiz:{question:"What does the Central Limit Theorem guarantee?",options:["All data is normal","Sample means become normally distributed with enough samples","Larger samples are always better","You need the entire population"],answer:1}
    },
    {
        id:"hypothesis_testing", module:"m7", title:"7.6 Hypothesis Testing Concepts", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Making Data-Driven Decisions</h2>
<p class="mb-4"><b>Hypothesis testing</b> is a formal framework for answering: "Is this difference real or just random chance?" It's the scientific method applied to data.</p>
<div class="code-block">H₀ (Null): There is NO real difference<br>H₁ (Alternative): There IS a real difference<br><br>p-value < 0.05 → Reject H₀ → Difference is real<br>p-value >= 0.05 → Cannot reject H₀ → Might be chance</div>
<p class="mb-2"><b>The Framework:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Step 1:</b> State H₀ (no effect) and H₁ (there is an effect)</li>
<li><b>Step 2:</b> Collect data and calculate test statistic</li>
<li><b>Step 3:</b> Find p-value (probability of seeing this result by chance)</li>
<li><b>Step 4:</b> If p < 0.05, reject H₀ — the effect is statistically significant</li>
</ul>
<div class="callout cw"><div class="cl">COMMON MISCONCEPTION</div><p>p-value is NOT the probability the hypothesis is true. It's the probability of getting your data IF the null hypothesis were true. A p-value of 0.03 means: "There's only a 3% chance of seeing this result by random chance alone."</p></div>`,
        tip:"Tutor's Insight: In industry, hypothesis testing decides things like: 'Did the new website layout increase sales?' or 'Does the new drug work?' Getting this wrong costs millions.",
        defaultCode:`import numpy as np\n\nnp.random.seed(42)\n\n# Scenario: Did the new teaching method improve scores?\nold_method = np.random.normal(65, 12, 40)  # 40 students, mean=65\nnew_method = np.random.normal(72, 11, 40)  # 40 students, mean=72\n\nprint("=== HYPOTHESIS TEST ===")\nprint("H₀: New method has NO effect (means are equal)")\nprint("H₁: New method IMPROVES scores (new mean > old mean)")\nprint(f"\\nOld method: mean={old_method.mean():.1f}, std={old_method.std():.1f}")\nprint(f"New method: mean={new_method.mean():.1f}, std={new_method.std():.1f}")\nprint(f"Difference: {new_method.mean() - old_method.mean():.1f} points")\n\n# Simulation-based test (no scipy needed!)\nobserved_diff = new_method.mean() - old_method.mean()\n\n# Simulate: if H₀ is true (no difference), how often do we see this big a diff?\ncombined = np.concatenate([old_method, new_method])\nn_simulations = 10000\nsim_diffs = []\nfor _ in range(n_simulations):\n    np.random.shuffle(combined)\n    sim_diffs.append(combined[:40].mean() - combined[40:].mean())\n\np_value = np.mean(np.array(sim_diffs) >= observed_diff)\n\nprint(f"\\np-value: {p_value:.4f}")\nif p_value < 0.05:\n    print("✅ REJECT H₀ — The improvement is statistically significant!")\n    print("   The new teaching method likely works.")\nelse:\n    print("❌ CANNOT reject H₀ — The difference might be random chance.")\n    print("   We need more evidence.")`,
        quiz:{question:"If p-value = 0.02, what do you conclude?",options:["The null hypothesis is true","Reject H₀ — the result is statistically significant","The test failed","We need more data"],answer:1}
    },

    // ──── MODULE 9 ADDITIONS ────
    {
        id:"numpy_masking", module:"m9", title:"9.4 Boolean Masking & Fancy Indexing", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Selecting Data Like a Pro</h2>
<p class="mb-4"><b>Boolean masking</b> filters arrays using True/False conditions — the same concept behind Pandas filtering. <b>Fancy indexing</b> selects specific positions.</p>
<div class="code-block">arr = np.array([78, 45, 92, 63, 55])<br>mask = arr >= 60         # [True, False, True, True, False]<br>arr[mask]                 # [78, 92, 63]<br>arr[[0, 2, 4]]           # Fancy indexing: [78, 92, 55]</div>`,
        tip:"Tutor's Insight: When you write df[df['score'] > 70] in Pandas, it creates a boolean mask underneath. NumPy masking IS Pandas filtering at the C level.",
        defaultCode:`import numpy as np\n\nscores = np.array([78, 45, 92, 63, 55, 88, 33, 71, 96, 42])\nnames = np.array(['Ade','Bisi','Chidi','Dayo','Eka','Femi','Grace','Hassan','Ifeoma','Jide'])\n\n# Boolean masking\npassing = scores >= 50\nprint(f"Scores:  {scores}")\nprint(f"Passing: {passing}")\nprint(f"Who passed: {names[passing]}")\nprint(f"Their scores: {scores[passing]}")\n\n# Complex conditions\nhigh = (scores >= 80) & (scores <= 100)\nlow = scores < 50\nprint(f"\\nHigh achievers: {names[high]} → {scores[high]}")\nprint(f"Need support: {names[low]} → {scores[low]}")\n\n# Replace with np.where\ngrades = np.where(scores >= 70, 'Pass', np.where(scores >= 50, 'Average', 'Fail'))\nprint(f"\\nGrade labels: {grades}")\n\n# Fancy indexing: specific positions\ntop3_idx = np.argsort(scores)[-3:][::-1]  # Indices of top 3\nprint(f"\\nTop 3: {names[top3_idx]} → {scores[top3_idx]}")`,
        quiz:{question:"What does arr[arr > 50] return?",options:["True/False array","Only values greater than 50","Index positions","Count of values"],answer:1}
    },
    {
        id:"numpy_linalg", module:"m9", title:"9.5 Linear Algebra Basics", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Math Behind Machine Learning</h2>
<p class="mb-4"><b>Linear algebra</b> is the mathematical backbone of data science and ML. Dot products, matrix multiplication, and solving systems of equations — all powered by NumPy.</p>
<div class="code-block">np.dot(a, b)          # Dot product<br>a @ b                 # Matrix multiplication<br>np.linalg.inv(A)      # Matrix inverse<br>np.linalg.norm(v)     # Vector length</div>`,
        tip:"Tutor's Insight: You don't need a math degree, but understanding dot products helps you understand how ML models make predictions. Each prediction is literally a dot product of weights and features.",
        defaultCode:`import numpy as np\n\n# Vectors (1D arrays)\nfeatures = np.array([85, 90, 75])  # student: maths, science, attendance\nweights = np.array([0.4, 0.4, 0.2])  # importance weights\n\nweighted_score = np.dot(features, weights)\nprint(f"Features: {features}")\nprint(f"Weights:  {weights}")\nprint(f"Weighted score: {weighted_score:.1f}\\n")\n\n# Matrix multiplication\nstudents = np.array([\n    [85, 90, 75],  # Student 1\n    [70, 65, 80],  # Student 2\n    [92, 88, 95],  # Student 3\n])\n\n# Apply weights to ALL students at once\nall_scores = students @ weights\nprint("Student matrix:")\nprint(students)\nprint(f"\\nWeighted scores: {all_scores.round(1)}")\nprint(f"Best student: #{all_scores.argmax()+1} with {all_scores.max():.1f}\\n")\n\n# Useful operations\nprint(f"Matrix shape: {students.shape}")\nprint(f"Column means: {students.mean(axis=0).round(1)}")\nprint(f"Row means:    {students.mean(axis=1).round(1)}")`,
        quiz:{question:"What does np.dot([1,2,3], [4,5,6]) compute?",options:["[4,10,18]","32","[5,7,9]","Error"],answer:1}
    },

    // ──── MODULE 10 ADDITION ────
    {
        id:"defensive_prog", module:"m10", title:"10.3 Defensive Programming", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Writing Code That Won't Break</h2>
<p class="mb-4"><b>Defensive programming</b> means writing code that anticipates and handles problems before they crash your program. Guard clauses, input validation, and assertions are your shields.</p>
<div class="code-block">def process_score(score):<br>    assert isinstance(score, (int,float)), "Must be numeric"<br>    assert 0 <= score <= 100, "Must be 0-100"<br>    return round(score, 1)</div>`,
        tip:"Tutor's Insight: In data pipelines that run overnight, defensive code is the difference between waking up to results and waking up to a crashed system. Always validate inputs.",
        defaultCode:`# Defensive function design\ndef analyze_scores(scores, label="Data"):\n    """Analyze scores with full input validation."""\n    # Guard clause: check input type\n    if not isinstance(scores, (list, tuple)):\n        print(f"⚠️ Expected list, got {type(scores).__name__}")\n        return None\n    \n    # Guard clause: check not empty\n    if len(scores) == 0:\n        print("⚠️ Empty list — nothing to analyze")\n        return None\n    \n    # Filter out non-numeric values\n    valid = [s for s in scores if isinstance(s, (int, float))]\n    skipped = len(scores) - len(valid)\n    \n    if len(valid) == 0:\n        print("⚠️ No valid numeric scores found")\n        return None\n    \n    # Safe analysis\n    result = {\n        "label": label,\n        "count": len(valid),\n        "skipped": skipped,\n        "mean": round(sum(valid)/len(valid), 1),\n        "min": min(valid),\n        "max": max(valid),\n    }\n    \n    print(f"📊 {label}: mean={result['mean']}, n={result['count']}")\n    if skipped > 0:\n        print(f"   ⚠️ Skipped {skipped} invalid values")\n    return result\n\n# Test with good data\nanalyze_scores([85, 92, 78, 90], "Clean Data")\n\n# Test with messy data\nanalyze_scores([85, "N/A", None, 78, "absent", 90], "Messy Data")\n\n# Test edge cases\nanalyze_scores([], "Empty")\nanalyze_scores("not a list", "Wrong Type")`,
        quiz:{question:"What is a 'guard clause'?",options:["A try/except block","An early return that checks for invalid input","A password check","A loop condition"],answer:1}
    },

    // ──── MODULE 11 ADDITIONS ────
    {
        id:"categories", module:"m11", title:"11.4 Working with Categories", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Categorical Data Done Right</h2>
<p class="mb-4">Text columns like 'gender', 'grade', 'status' should be treated as <b>categories</b>, not strings. This saves memory, enables ordering (A > B > C), and prevents typos from creating phantom groups.</p>
<div class="code-block">df['grade'] = pd.Categorical(df['grade'], <br>    categories=['F','D','C','B','A'], ordered=True)<br>df[df['grade'] >= 'B']  # Comparison works!</div>`,
        tip:"Tutor's Insight: Converting string columns to categories can reduce memory usage by 90%. For a dataset with 1M rows where 'gender' is M/F, categories store 2 values + integer codes instead of 1M strings.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\nn = 100\ndf = pd.DataFrame({\n    'name': [f"Student_{i}" for i in range(n)],\n    'score': np.random.normal(65, 15, n).clip(0, 100).round(1),\n    'gender': np.random.choice(['M','F'], n),\n})\n\n# Create ordered grade category\nbins = [0, 40, 50, 60, 70, 100]\nlabels = ['F', 'D', 'C', 'B', 'A']\ndf['grade'] = pd.cut(df['score'], bins=bins, labels=labels)\n\n# Make it ordered categorical\ndf['grade'] = pd.Categorical(df['grade'],\n    categories=['F','D','C','B','A'], ordered=True)\n\nprint("Grade distribution:")\nprint(df['grade'].value_counts().sort_index())\n\n# Filter using comparison (works because ordered!)\nhigh = df[df['grade'] >= 'B']\nprint(f"\\nStudents with B or above: {len(high)}")\n\n# Memory comparison\nprint(f"\\nMemory as string: {df['gender'].astype(str).memory_usage()} bytes")\ndf['gender'] = df['gender'].astype('category')\nprint(f"Memory as category: {df['gender'].memory_usage()} bytes")`,
        quiz:{question:"Why use pd.Categorical instead of strings?",options:["It looks nicer","Saves memory and enables ordered comparisons","Required by Pandas","It's faster to type"],answer:1}
    },
    {
        id:"memory_opt", module:"m11", title:"11.5 Memory Optimization", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Handling Large Datasets</h2>
<p class="mb-4">When datasets grow to millions of rows, memory becomes critical. Knowing how to <b>reduce DataFrame memory usage by 50-90%</b> is what separates junior from senior data scientists.</p>
<div class="code-block">df.memory_usage(deep=True).sum()  # Total bytes<br>df['col'] = df['col'].astype('int32')  # Downcast<br>df['cat'] = df['cat'].astype('category')</div>`,
        tip:"Tutor's Insight: I've seen DataFrames go from 4GB to 400MB just by downcasting numeric types and converting strings to categories. This makes the difference between 'it crashed' and 'it worked perfectly'.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\nn = 1000\ndf = pd.DataFrame({\n    'id': range(n),\n    'score': np.random.randint(0, 100, n),\n    'temperature': np.random.uniform(20, 40, n),\n    'gender': np.random.choice(['Male','Female'], n),\n    'grade': np.random.choice(['A','B','C','D','F'], n),\n})\n\n# Check current memory\nbefore = df.memory_usage(deep=True).sum()\nprint(f"Before optimization: {before:,} bytes")\nprint(df.dtypes)\n\n# Optimize\ndf_opt = df.copy()\ndf_opt['id'] = df_opt['id'].astype('int32')\ndf_opt['score'] = df_opt['score'].astype('int8')\ndf_opt['temperature'] = df_opt['temperature'].astype('float32')\ndf_opt['gender'] = df_opt['gender'].astype('category')\ndf_opt['grade'] = df_opt['grade'].astype('category')\n\nafter = df_opt.memory_usage(deep=True).sum()\nprint(f"\\nAfter optimization: {after:,} bytes")\nprint(f"Reduction: {(1-after/before)*100:.0f}%")\nprint(f"\\nOptimized dtypes:")\nprint(df_opt.dtypes)`,
        quiz:{question:"Which saves the most memory for a column with only 3 unique text values?",options:["astype('str')","astype('category')","astype('object')","No change needed"],answer:1}
    },
    {
        id:"pandas_power", module:"m11", title:"11.6 Pandas Power Moves", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Advanced Techniques Combined</h2>
<p class="mb-4">This lesson combines everything: chaining operations, using <code>assign()</code> for readable pipelines, <code>query()</code> for clean filtering, and <code>pipe()</code> for reusable transformations.</p>
<div class="code-block">result = (df<br>  .query('score > 50')<br>  .assign(grade=lambda d: d['score'].apply(grade_fn))<br>  .groupby('grade')<br>  .agg(avg=('score','mean'), count=('name','count'))<br>)</div>`,
        tip:"Tutor's Insight: Method chaining is how senior data scientists write Pandas. Each line does one thing, reads top-to-bottom like English, and is easy to debug by commenting out any line.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'name': [f"Student_{i:02d}" for i in range(1,31)],\n    'score': np.random.normal(65, 15, 30).clip(0, 100).round(1),\n    'attend': np.random.normal(80, 12, 30).clip(50, 100).round(0),\n    'gender': np.random.choice(['M','F'], 30),\n})\n\n# Pandas power chain\nresult = (\n    df\n    .assign(\n        grade=lambda d: pd.cut(d['score'], bins=[0,40,50,60,70,100],\n                               labels=['F','D','C','B','A']),\n        risk=lambda d: np.where(\n            (d['score']<50) | (d['attend']<70), 'At Risk', 'OK'\n        ),\n        boosted=lambda d: (d['score'] * 1.05).clip(0, 100).round(1)\n    )\n    .query('score > 0')  # Clean filter syntax\n)\n\nprint("Full result:")\nprint(result[['name','score','grade','attend','risk']].head(10).to_string(index=False))\n\n# Summary with chain\nsummary = (\n    result\n    .groupby('grade', observed=True)\n    .agg(\n        count=('name', 'count'),\n        avg_score=('score', 'mean'),\n        avg_attend=('attend', 'mean'),\n        at_risk=('risk', lambda x: (x=='At Risk').sum())\n    )\n    .round(1)\n    .sort_index(ascending=False)\n)\n\nprint("\\nGrade Summary:")\nprint(summary)`,
        quiz:{question:"What does .assign() do in a method chain?",options:["Deletes columns","Creates new columns without breaking the chain","Renames the DataFrame","Sorts the data"],answer:1}
    },

    // ──── MODULE 13: DATA WRANGLING ────
    {
        id:"wide_long", module:"m13", title:"13.1 Wide vs Long Data", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Two Ways to Shape Data</h2>
<p class="mb-4">Data comes in two shapes: <b>wide</b> (one row per subject, multiple columns) and <b>long</b> (multiple rows per subject, one value column). Different analyses need different shapes.</p>
<div class="code-block"># Wide → Long: pd.melt()<br>pd.melt(df, id_vars=['name'], var_name='subject', value_name='score')<br><br># Long → Wide: pd.pivot_table()<br>df.pivot_table(index='name', columns='subject', values='score')</div>`,
        tip:"Tutor's Insight: Wide format is human-friendly (easy to read). Long format is analysis-friendly (easy to groupby, plot, and model). Know how to convert between them freely.",
        defaultCode:`import pandas as pd\n\n# Wide format (how teachers see data)\nwide = pd.DataFrame({\n    'name': ['Adewale','Bisi','Chidi','Dayo'],\n    'maths': [95, 72, 88, 65],\n    'science': [88, 91, 78, 55],\n    'english': [82, 85, 90, 70],\n})\nprint("=== WIDE FORMAT ===")\nprint(wide)\n\n# Wide → Long (for analysis)\nlong = pd.melt(wide, id_vars=['name'],\n               var_name='subject', value_name='score')\nprint("\\n=== LONG FORMAT ===")\nprint(long)\n\n# Now groupby is easy!\nprint("\\n=== Analysis (only possible in long format) ===")\nprint(long.groupby('subject')['score'].agg(['mean','min','max']).round(1))\n\n# Long → Wide (back again)\nwide_again = long.pivot_table(index='name', columns='subject', values='score')\nprint("\\n=== Back to Wide ===")\nprint(wide_again)`,
        quiz:{question:"Which format is better for groupby analysis?",options:["Wide (columns for each variable)","Long (one value column)","Either works the same","Neither — use lists"],answer:1}
    },
    {
        id:"multi_source", module:"m13", title:"13.2 Multi-Source Data Integration", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Combining Data from Multiple Sources</h2>
<p class="mb-4">Real analysis rarely uses one dataset. You'll combine student info + scores + attendance from different sources. The key is finding the <b>common key</b> that links them.</p>`,
        tip:"Tutor's Insight: 80% of data integration problems come from mismatched keys — different spellings, extra spaces, case differences. Always clean your join keys first.",
        defaultCode:`import pandas as pd\n\n# Source 1: Student info\nstudents = pd.DataFrame({\n    'id': [1, 2, 3, 4, 5],\n    'name': ['Adewale', 'Bisi', 'Chidi', 'Dayo', 'Eka'],\n    'class': ['SS2', 'SS2', 'SS3', 'SS3', 'SS2'],\n})\n\n# Source 2: Exam scores\nscores = pd.DataFrame({\n    'student_id': [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],\n    'subject': ['Maths','Maths','Maths','Maths','Maths',\n                'Science','Science','Science','Science','Science'],\n    'score': [95, 72, 88, 65, 82, 88, 91, 78, 55, 90],\n})\n\n# Source 3: Attendance\nattendance = pd.DataFrame({\n    'id': [1, 2, 3, 4, 5],\n    'attend_pct': [98, 85, 92, 68, 95],\n})\n\nprint("Source 1 (Students):"); print(students)\nprint("\\nSource 2 (Scores):"); print(scores)\nprint("\\nSource 3 (Attendance):"); print(attendance)\n\n# Merge all three\ncombined = (\n    scores\n    .merge(students, left_on='student_id', right_on='id')\n    .merge(attendance, on='id')\n    .drop(columns=['student_id'])\n)\n\nprint("\\n=== COMBINED DATASET ===")\nprint(combined)\n\n# Now do analysis across all sources\nprint("\\n=== Average by Class ===")\nprint(combined.groupby('class')[['score','attend_pct']].mean().round(1))`,
        quiz:{question:"What must two DataFrames have in common to merge?",options:["Same number of rows","Same column names","A shared key column","Same data types"],answer:2}
    },
    {
        id:"dates_currency", module:"m13", title:"13.3 Handling Dates & Currency", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Real-World Data Formats</h2>
<p class="mb-4">Dates and money are the two most commonly mishandled data types. Dates arrive as strings in dozens of formats. Currency values have symbols and commas that prevent math.</p>`,
        tip:"Tutor's Insight: ALWAYS convert dates with pd.to_datetime() and clean currency strings before analysis. A column of '₦1,000' strings looks like money but Python sees them as text — no math possible.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Messy date and currency data\ndf = pd.DataFrame({\n    'date_str': ['2026-01-15', '15/02/2026', 'March 20, 2026', '2026-04-10'],\n    'revenue_str': ['₦1,200,000', '₦850,000', '₦2,100,000', '₦950,000'],\n    'product': ['Laptop', 'Phone', 'Server', 'Tablet'],\n})\n\nprint("=== RAW (Messy) ===")\nprint(df)\nprint(f"\\nTypes: {df.dtypes.to_dict()}")\n\n# Clean dates\ndf['date'] = pd.to_datetime(df['date_str'], format='mixed')\ndf['month'] = df['date'].dt.month_name()\ndf['quarter'] = df['date'].dt.quarter\n\n# Clean currency\ndf['revenue'] = (\n    df['revenue_str']\n    .str.replace('₦', '', regex=False)\n    .str.replace(',', '', regex=False)\n    .astype(float)\n)\n\nprint("\\n=== CLEANED ===")\nprint(df[['product', 'date', 'month', 'revenue']])\n\nprint(f"\\nTotal revenue: ₦{df['revenue'].sum():,.0f}")\nprint(f"Average: ₦{df['revenue'].mean():,.0f}")\nprint(f"Date range: {df['date'].min().strftime('%b %Y')} to {df['date'].max().strftime('%b %Y')}")`,
        quiz:{question:"Why can't you do math with '₦1,200,000' as-is?",options:["The number is too large","It's a string, not a number — must remove ₦ and commas first","₦ is not supported","Python doesn't support currency"],answer:1}
    },
    {
        id:"data_quality", module:"m13", title:"13.4 Data Quality Scorecard", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Measuring Data Health</h2>
<p class="mb-4">Before any analysis, assess your data's quality systematically. A <b>data quality scorecard</b> checks completeness, consistency, validity, and uniqueness — and gives you a confidence score.</p>`,
        tip:"Tutor's Insight: In production, I run a data quality check BEFORE every analysis. If quality drops below 80%, the pipeline sends an alert instead of producing unreliable reports.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\nn = 50\ndf = pd.DataFrame({\n    'id': list(range(1, n+1)) + [1, 2],  # duplicates\n    'name': [f"Student_{i}" for i in range(1, n+1)] + [None, "Student_02"],\n    'score': list(np.random.normal(65, 15, n).round(1)) + [None, 200],\n    'gender': list(np.random.choice(['M','F'], n)) + ['X', 'M'],\n    'age': list(np.random.randint(14, 20, n)) + [None, 99],\n})\n\nprint("=== DATA QUALITY SCORECARD ===")\nprint(f"Dataset: {df.shape[0]} rows × {df.shape[1]} columns\\n")\n\ntotal_cells = df.shape[0] * df.shape[1]\n\n# 1. Completeness\nmissing = df.isnull().sum().sum()\ncompleteness = (1 - missing/total_cells) * 100\nprint(f"1. COMPLETENESS: {completeness:.1f}%")\nprint(f"   Missing values: {missing}/{total_cells}")\nfor col in df.columns:\n    n_miss = df[col].isnull().sum()\n    if n_miss > 0:\n        print(f"   - {col}: {n_miss} missing")\n\n# 2. Uniqueness\ndupes = df.duplicated(subset=['id']).sum()\nuniqueness = (1 - dupes/len(df)) * 100\nprint(f"\\n2. UNIQUENESS: {uniqueness:.1f}%")\nprint(f"   Duplicate rows: {dupes}")\n\n# 3. Validity\ninvalid_scores = ((df['score'] < 0) | (df['score'] > 100)).sum()\ninvalid_gender = (~df['gender'].isin(['M','F'])).sum()\nvalidity_issues = invalid_scores + invalid_gender\nvalidity = (1 - validity_issues/len(df)) * 100\nprint(f"\\n3. VALIDITY: {validity:.1f}%")\nprint(f"   Out-of-range scores: {invalid_scores}")\nprint(f"   Invalid gender codes: {invalid_gender}")\n\n# Overall score\noverall = (completeness + uniqueness + validity) / 3\nprint(f"\\n{'='*40}")\nprint(f"OVERALL QUALITY SCORE: {overall:.1f}%")\nprint(f"{'='*40}")\nif overall >= 90:\n    print("✅ HIGH QUALITY — Ready for analysis")\nelif overall >= 70:\n    print("⚠️ MEDIUM — Clean before analysis")\nelse:\n    print("❌ LOW — Significant cleaning needed")`,
        quiz:{question:"What does a data quality scorecard measure?",options:["Code performance","Data completeness, uniqueness, and validity","Chart aesthetics","Model accuracy"],answer:1}
    },

    // ──── MODULE 14: EDA ────
    {
        id:"eda_framework", module:"m14", title:"14.1 The EDA Framework", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Systematic Data Exploration</h2>
<p class="mb-4"><b>Exploratory Data Analysis (EDA)</b> is the systematic process of understanding data before modeling. It answers: What does the data look like? What patterns exist? What's unusual?</p>
<div class="code-block">The EDA Checklist:<br>1. Shape & structure (rows, cols, types)<br>2. Missing values & duplicates<br>3. Descriptive statistics<br>4. Distribution of each variable<br>5. Relationships between variables<br>6. Outliers & anomalies<br>7. Initial hypotheses</div>`,
        tip:"Tutor's Insight: EDA should be done BEFORE you decide what analysis or model to build. Many beginners skip EDA and jump to ML — then wonder why their model performs poorly. EDA reveals the 'why'.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\n\nprint("="*50)\nprint("   EXPLORATORY DATA ANALYSIS REPORT")\nprint("   Built by: Adewale Samson Adeagbo")\nprint("="*50)\n\n# Step 1: Structure\nprint(f"\\n📐 STRUCTURE")\nprint(f"   Rows: {df.shape[0]} | Columns: {df.shape[1]}")\nprint(f"   Columns: {list(df.columns)}")\nprint(f"   Types: {df.dtypes.to_dict()}")\n\n# Step 2: Missing & Duplicates\nprint(f"\\n🔍 DATA QUALITY")\nprint(f"   Missing: {df.isnull().sum().sum()}")\nprint(f"   Duplicates: {df.duplicated().sum()}")\n\n# Step 3: Statistics\nprint(f"\\n📊 STATISTICS")\nnumeric = df.select_dtypes(include=[np.number])\nfor col in numeric.columns:\n    print(f"   {col}: mean={df[col].mean():.1f}, "\n          f"median={df[col].median():.1f}, "\n          f"std={df[col].std():.1f}, "\n          f"range=[{df[col].min()}, {df[col].max()}]")\n\n# Step 4: Categories\nprint(f"\\n📋 CATEGORICAL COLUMNS")\nfor col in df.select_dtypes(include=['object']).columns:\n    print(f"   {col}: {df[col].nunique()} unique → {df[col].value_counts().to_dict()}")\n\nprint(f"\\n✅ EDA complete. Ready for deeper analysis.")`,
        quiz:{question:"When should you do EDA?",options:["After building a model","Before any analysis or modeling","Only when data is messy","Only for large datasets"],answer:1}
    },
    {
        id:"univariate", module:"m14", title:"14.2 Univariate Analysis", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Analyzing One Variable at a Time</h2>
<p class="mb-4"><b>Univariate analysis</b> examines each variable independently. For numeric variables: histograms and statistics. For categorical: frequency counts and bar charts.</p>`,
        tip:"Tutor's Insight: Always start univariate before bivariate. Understanding each column alone reveals data quality issues, outliers, and distribution shapes that affect everything downstream.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('data.csv')\n\nnumeric_cols = df.select_dtypes(include=[np.number]).columns\ncat_cols = df.select_dtypes(include=['object']).columns\n\nprint("=== UNIVARIATE ANALYSIS ===")\n\n# Numeric columns\nfor col in numeric_cols:\n    data = df[col].dropna()\n    print(f"\\n📊 {col}:")\n    print(f"   Mean: {data.mean():.1f} | Median: {data.median():.1f}")\n    print(f"   Std: {data.std():.1f} | Range: [{data.min()}, {data.max()}]")\n    skew = "Right-skewed" if data.mean() > data.median() else "Left-skewed" if data.mean() < data.median() else "Symmetric"\n    print(f"   Shape: {skew}")\n\n# Categorical columns\nfor col in cat_cols:\n    print(f"\\n📋 {col}: {df[col].nunique()} categories")\n    for val, cnt in df[col].value_counts().items():\n        pct = cnt/len(df)*100\n        print(f"   {val}: {cnt} ({pct:.0f}%)")\n\n# Visualization\nif len(numeric_cols) > 0:\n    n = len(numeric_cols)\n    fig, axes = plt.subplots(1, n, figsize=(5*n, 4))\n    if n == 1: axes = [axes]\n    for ax, col in zip(axes, numeric_cols):\n        ax.hist(df[col].dropna(), bins=10, color='#6366f1', edgecolor='white')\n        ax.axvline(df[col].mean(), color='red', ls='--', label='Mean')\n        ax.set_title(f'{col} Distribution', fontweight='bold')\n        ax.legend(fontsize=8)\n    plt.tight_layout()\n    plt.show()`,
        quiz:{question:"What does univariate analysis examine?",options:["Relationships between variables","One variable at a time","The entire dataset at once","Only numeric data"],answer:1}
    },
    {
        id:"bivariate", module:"m14", title:"14.3 Bivariate Analysis", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Relationships Between Two Variables</h2>
<p class="mb-4"><b>Bivariate analysis</b> explores how two variables relate. Numeric vs numeric → scatter plot & correlation. Numeric vs categorical → grouped box plot. Categorical vs categorical → cross-tabulation.</p>`,
        tip:"Tutor's Insight: The best insights in data science come from bivariate analysis. 'Scores are high' is univariate. 'Scores are high WHEN attendance is above 80%' is bivariate — and that's actionable.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('data.csv')\n\nprint("=== BIVARIATE ANALYSIS ===")\n\nnumeric = df.select_dtypes(include=[np.number]).columns\n\n# Correlation between all numeric pairs\nif len(numeric) >= 2:\n    corr = df[numeric].corr()\n    print("\\n📊 Correlations:")\n    for i in range(len(numeric)):\n        for j in range(i+1, len(numeric)):\n            r = corr.iloc[i,j]\n            strength = "Strong" if abs(r)>0.7 else "Moderate" if abs(r)>0.3 else "Weak"\n            print(f"   {numeric[i]} vs {numeric[j]}: r={r:.2f} ({strength})")\n\n# Grouped analysis\ncat_cols = df.select_dtypes(include=['object']).columns\nif len(cat_cols) > 0 and len(numeric) > 0:\n    cat = cat_cols[0]\n    num = numeric[0]\n    print(f"\\n📋 {num} by {cat}:")\n    for group, data in df.groupby(cat):\n        print(f"   {group}: mean={data[num].mean():.1f}, n={len(data)}")\n\n# Visualization\nif len(numeric) >= 2:\n    fig, ax = plt.subplots(figsize=(8, 5))\n    x_col, y_col = numeric[0], numeric[1]\n    ax.scatter(df[x_col], df[y_col], alpha=0.7, color='#6366f1', s=80, edgecolor='white')\n    ax.set_xlabel(x_col, fontsize=11)\n    ax.set_ylabel(y_col, fontsize=11)\n    r = df[x_col].corr(df[y_col])\n    ax.set_title(f'{x_col} vs {y_col} (r={r:.2f})', fontweight='bold')\n    ax.grid(alpha=0.2)\n    plt.tight_layout()\n    plt.show()`,
        quiz:{question:"Scatter plots show the relationship between:",options:["Two categorical variables","Two numeric variables","Time and categories","Groups and frequencies"],answer:1}
    },
    {
        id:"auto_eda", module:"m14", title:"14.4 Automated EDA Report", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">One Function, Complete Report</h2>
<p class="mb-4">Build a reusable <b>auto_eda() function</b> that generates a complete exploratory analysis — stats, quality checks, distributions, and visualizations — for ANY dataset with ONE function call.</p>`,
        tip:"Tutor's Insight: Senior data scientists have template EDA functions they reuse on every project. Building yours now means you'll never start from scratch again. This is your most reusable asset.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndef auto_eda(df, title="Dataset"):\n    """Complete automated EDA for any DataFrame."""\n    sep = "=" * 50\n    print(f"{sep}")\n    print(f"  AUTO-EDA: {title}")\n    print(f"  By: Adewale Samson Adeagbo")\n    print(f"{sep}")\n    \n    # Structure\n    print(f"\\n📐 SHAPE: {df.shape[0]} rows × {df.shape[1]} columns")\n    \n    # Quality\n    missing = df.isnull().sum()\n    total_missing = missing.sum()\n    quality = (1 - total_missing/(df.shape[0]*df.shape[1])) * 100\n    print(f"\\n🔍 QUALITY: {quality:.0f}%")\n    if total_missing > 0:\n        for col, n in missing[missing>0].items():\n            print(f"   ⚠️ {col}: {n} missing ({n/len(df)*100:.0f}%)")\n    print(f"   Duplicates: {df.duplicated().sum()}")\n    \n    # Statistics\n    numeric = df.select_dtypes(include=[np.number])\n    if len(numeric.columns) > 0:\n        print(f"\\n📊 NUMERIC SUMMARY:")\n        for col in numeric.columns:\n            d = df[col].dropna()\n            print(f"   {col}: {d.mean():.1f} ± {d.std():.1f} [{d.min():.0f}–{d.max():.0f}]")\n    \n    # Categories\n    cats = df.select_dtypes(include=['object'])\n    if len(cats.columns) > 0:\n        print(f"\\n📋 CATEGORIES:")\n        for col in cats.columns:\n            top = df[col].value_counts().head(3)\n            print(f"   {col} ({df[col].nunique()} unique): {dict(top)}")\n    \n    # Visualization\n    n_num = len(numeric.columns)\n    if n_num > 0:\n        cols = min(n_num, 3)\n        fig, axes = plt.subplots(1, cols, figsize=(4*cols, 4))\n        if cols == 1: axes = [axes]\n        for ax, col in zip(axes, numeric.columns[:cols]):\n            ax.hist(df[col].dropna(), bins=12, color='#6366f1', edgecolor='white')\n            ax.set_title(col, fontweight='bold', fontsize=11)\n            ax.axvline(df[col].mean(), color='red', ls='--', lw=1.5)\n        plt.suptitle(f'{title} — Distributions', fontsize=13, fontweight='bold')\n        plt.tight_layout()\n        plt.show()\n    \n    print(f"\\n✅ EDA complete for '{title}'")\n\n# Run it!\ndf = pd.read_csv('data.csv')\nauto_eda(df, "Education Dataset")`,
        quiz:{question:"What is the biggest advantage of an auto_eda() function?",options:["It makes charts prettier","Reusable across any dataset — saves hours of repetitive work","It replaces machine learning","It fixes data quality automatically"],answer:1}
    },

    // ──── MODULE 15: INDUSTRY PROJECTS ────
    {
        id:"proj_ecommerce", module:"m15", title:"15.1 E-Commerce Customer Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Customer Behavior Analysis</h2>
<p class="mb-4">Analyze customer purchase patterns — who spends the most, what products sell best, when peak buying happens. This is what Amazon and Jumia analysts do daily.</p>`,
        tip:"Tutor's Insight: E-commerce analysis is the most in-demand data science skill in Nigeria. Every business with an online presence needs someone who can answer: 'Who are our best customers and what do they buy?'",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(2024)\nn = 100\ndf = pd.DataFrame({\n    'customer_id': np.random.randint(1, 30, n),\n    'product': np.random.choice(['Laptop','Phone','Headset','Charger','Case','Cable'], n),\n    'price': np.random.choice([450000,180000,25000,8000,5000,3000], n),\n    'quantity': np.random.randint(1, 5, n),\n    'date': pd.date_range('2026-01-01', periods=n, freq='3D'),\n})\ndf['revenue'] = df['price'] * df['quantity']\n\nprint("🛒 E-COMMERCE ANALYSIS")\nprint("="*45)\nprint(f"Orders: {n} | Customers: {df['customer_id'].nunique()}")\nprint(f"Revenue: ₦{df['revenue'].sum():,.0f}")\nprint(f"Avg order: ₦{df['revenue'].mean():,.0f}")\n\n# Top products\nprint("\\n📦 Revenue by Product:")\nprod = df.groupby('product')['revenue'].sum().sort_values(ascending=False)\nfor p, r in prod.items():\n    print(f"  {p:<10s}: ₦{r:>12,.0f} ({r/df['revenue'].sum()*100:.0f}%)")\n\n# Top customers\nprint("\\n👤 Top 5 Customers:")\ntop = df.groupby('customer_id')['revenue'].sum().nlargest(5)\nfor cid, r in top.items():\n    print(f"  Customer #{cid}: ₦{r:,.0f}")\n\n# Dashboard\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\nprod.plot(kind='barh', ax=axes[0], color='#6366f1')\naxes[0].set_title('Revenue by Product', fontweight='bold')\naxes[0].set_xlabel('Revenue (₦)')\nmonthly = df.set_index('date').resample('M')['revenue'].sum()\nmonthly.plot(ax=axes[1], marker='o', color='#22c55e', linewidth=2)\naxes[1].set_title('Monthly Revenue', fontweight='bold')\naxes[1].set_ylabel('Revenue (₦)')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What is 'average order value'?",options:["Median price","Total revenue divided by number of orders","Most expensive product","Cheapest product"],answer:1}
    },
    {
        id:"proj_health", module:"m15", title:"15.2 Healthcare Data Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Patient Health Metrics</h2>
<p class="mb-4">Analyze patient data to find health risk patterns — which factors correlate with high blood pressure, who needs intervention, how to segment patients by risk level.</p>`,
        tip:"Tutor's Insight: Healthcare analytics saves lives. Identifying at-risk patients early — before they end up in the emergency room — is literally the difference between life and death. This is meaningful work.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nn = 80\ndf = pd.DataFrame({\n    'patient_id': range(1, n+1),\n    'age': np.random.randint(25, 75, n),\n    'bp_systolic': np.random.normal(130, 20, n).clip(90, 200).round(0),\n    'bmi': np.random.normal(27, 5, n).clip(18, 45).round(1),\n    'glucose': np.random.normal(100, 25, n).clip(60, 200).round(0),\n    'smoker': np.random.choice(['Yes','No'], n, p=[0.25, 0.75]),\n})\n\n# Risk classification\ndef risk_level(row):\n    risk = 0\n    if row['bp_systolic'] >= 140: risk += 2\n    elif row['bp_systolic'] >= 130: risk += 1\n    if row['bmi'] >= 30: risk += 2\n    if row['glucose'] >= 126: risk += 2\n    if row['smoker'] == 'Yes': risk += 1\n    if row['age'] >= 55: risk += 1\n    return 'HIGH' if risk >= 4 else 'MODERATE' if risk >= 2 else 'LOW'\n\ndf['risk'] = df.apply(risk_level, axis=1)\n\nprint("🏥 PATIENT HEALTH ANALYSIS")\nprint("="*45)\nprint(f"Patients: {n}")\nprint(f"\\nRisk Distribution:")\nfor risk, count in df['risk'].value_counts().items():\n    print(f"  {risk}: {count} ({count/n*100:.0f}%)")\n\nprint(f"\\nMetrics by Risk Level:")\nprint(df.groupby('risk')[['bp_systolic','bmi','glucose','age']].mean().round(1))\n\nhigh = df[df['risk']=='HIGH']\nprint(f"\\n⚠️ HIGH RISK patients: {len(high)}")\nprint(f"  Avg age: {high['age'].mean():.0f}")\nprint(f"  Smokers: {(high['smoker']=='Yes').sum()}/{len(high)}")\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\ncolors = df['risk'].map({'LOW':'#22c55e','MODERATE':'#f59e0b','HIGH':'#ef4444'})\naxes[0].scatter(df['bmi'], df['bp_systolic'], c=colors, s=60, alpha=0.7, edgecolor='white')\naxes[0].set_xlabel('BMI'); axes[0].set_ylabel('Blood Pressure')\naxes[0].set_title('BMI vs Blood Pressure by Risk', fontweight='bold')\ndf['risk'].value_counts().plot(kind='pie', ax=axes[1], autopct='%1.0f%%',\n    colors=['#22c55e','#f59e0b','#ef4444'])\naxes[1].set_title('Risk Distribution', fontweight='bold')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"In healthcare analytics, what is the goal of risk stratification?",options:["To bill patients more","To identify who needs early intervention","To reduce hospital size","To sort by age"],answer:1}
    },
    {
        id:"proj_sentiment", module:"m15", title:"15.3 Text Analysis — Word Frequency", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Analyzing Text Data</h2>
<p class="mb-4">Text data is everywhere — reviews, surveys, social media. Learn to extract insights from text using <b>word frequency analysis</b>, cleaning, and pattern detection — no ML APIs needed.</p>`,
        tip:"Tutor's Insight: Text analysis doesn't always need machine learning. Simple word counting, frequency analysis, and pattern matching can reveal 80% of the insights. Start simple, add complexity only when needed.",
        defaultCode:`import pandas as pd\nfrom collections import Counter\nimport re\n\n# Sample customer reviews\nreviews = [\n    "Great product, fast delivery! Very happy with my purchase.",\n    "Terrible quality. Product broke after one week. Very disappointed.",\n    "Good value for money. Delivery was fast. Would recommend.",\n    "Worst experience ever. Slow delivery, damaged package.",\n    "Excellent product! Fast shipping and great customer service.",\n    "Product is okay but delivery took too long. Average quality.",\n    "Amazing! Best purchase this year. Fast and reliable delivery.",\n    "Poor quality product. Not worth the money at all.",\n    "Very good product. Arrived quickly. Happy customer here!",\n    "Terrible service. Product was wrong. Very unhappy.",\n]\n\n# Clean and tokenize\ndef clean_text(text):\n    text = text.lower()\n    text = re.sub(r'[^a-z\\s]', '', text)\n    return text.split()\n\n# Word frequency\nall_words = []\nfor review in reviews:\n    all_words.extend(clean_text(review))\n\n# Remove stop words\nstop_words = {'the','a','an','is','was','were','and','or','but','in','on','at','to',\n              'for','of','with','my','this','that','it','i','very','not'}\nfiltered = [w for w in all_words if w not in stop_words and len(w) > 2]\n\nfreq = Counter(filtered)\nprint("📊 WORD FREQUENCY ANALYSIS")\nprint("="*40)\nprint(f"Total reviews: {len(reviews)}")\nprint(f"Total words: {len(all_words)}")\nprint(f"Unique words: {len(set(filtered))}")\n\nprint("\\n🔝 Top 15 Words:")\nfor word, count in freq.most_common(15):\n    bar = "█" * count\n    print(f"  {word:<12s} {count:>2d} {bar}")\n\n# Simple sentiment\npositive = ['great','good','excellent','amazing','best','happy','fast','recommend','reliable']\nnegative = ['terrible','worst','poor','slow','disappointed','unhappy','damaged','broke','wrong']\n\nprint("\\n💭 SENTIMENT ANALYSIS:")\nfor i, review in enumerate(reviews, 1):\n    words = set(clean_text(review))\n    pos = len(words & set(positive))\n    neg = len(words & set(negative))\n    sentiment = "😊 Positive" if pos > neg else "😠 Negative" if neg > pos else "😐 Neutral"\n    print(f"  Review {i:>2d}: {sentiment}")`,
        quiz:{question:"What is the first step in text analysis?",options:["Build an ML model","Clean the text (lowercase, remove punctuation)","Count characters","Translate to English"],answer:1}
    },
    {
        id:"proj_realestate", module:"m15", title:"15.4 Real Estate Price Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Property Market Analysis</h2>
<p class="mb-4">Analyze property data to understand what drives prices — location, size, bedrooms, age. This is the same analysis that Zillow, PropertyPro, and every real estate company does.</p>`,
        tip:"Tutor's Insight: Real estate analysis teaches you feature importance intuitively. You already know that location matters for price. Data science quantifies exactly HOW MUCH it matters.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nn = 60\ndf = pd.DataFrame({\n    'location': np.random.choice(['Lekki','Ikeja','VI','Surulere','Yaba','Ikoyi'], n),\n    'bedrooms': np.random.choice([1,2,3,4,5], n, p=[0.1,0.25,0.35,0.2,0.1]),\n    'sqm': np.random.randint(40, 300, n),\n    'age_years': np.random.randint(0, 25, n),\n})\n# Price based on features\nbase = {'Lekki':80,'Ikeja':50,'VI':120,'Surulere':35,'Yaba':40,'Ikoyi':150}\ndf['price_m'] = df.apply(lambda r: (\n    base[r['location']] + r['bedrooms']*15 + r['sqm']*0.3 - r['age_years']*2\n    + np.random.normal(0, 10)\n), axis=1).round(1).clip(10, 500)\n\nprint("🏠 REAL ESTATE ANALYSIS — Lagos")\nprint("="*45)\nprint(f"Properties: {n}")\nprint(f"Price range: ₦{df['price_m'].min():.0f}M – ₦{df['price_m'].max():.0f}M")\n\nprint("\\n📍 Average Price by Location:")\nloc_avg = df.groupby('location')['price_m'].agg(['mean','count']).sort_values('mean', ascending=False)\nfor loc, row in loc_avg.iterrows():\n    print(f"  {loc:<10s}: ₦{row['mean']:>6.1f}M (n={int(row['count'])})")\n\nprint("\\n🛏️ Price by Bedrooms:")\nbed_avg = df.groupby('bedrooms')['price_m'].mean().round(1)\nfor beds, price in bed_avg.items():\n    print(f"  {beds} bed: ₦{price}M")\n\n# Correlations\nprint("\\n📊 Price Correlations:")\nfor col in ['bedrooms','sqm','age_years']:\n    r = df[col].corr(df['price_m'])\n    direction = "↑" if r > 0 else "↓"\n    print(f"  {col}: {r:.2f} {direction}")\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\nloc_avg['mean'].plot(kind='barh', ax=axes[0], color='#6366f1')\naxes[0].set_title('Avg Price by Location (₦M)', fontweight='bold')\naxes[1].scatter(df['sqm'], df['price_m'], c=df['bedrooms'], cmap='viridis', s=60, edgecolor='white')\naxes[1].set_xlabel('Size (sqm)'); axes[1].set_ylabel('Price (₦M)')\naxes[1].set_title('Size vs Price (color=bedrooms)', fontweight='bold')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Which factor typically has the strongest correlation with property price?",options:["Age of building","Color of walls","Location","Number of windows"],answer:2}
    },
    {
        id:"proj_supply", module:"m15", title:"15.5 Supply Chain Dashboard", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Logistics & Delivery Analysis</h2>
<p class="mb-4">Build a supply chain dashboard showing delivery performance, delays, warehouse efficiency, and fulfillment rates. This is what Amazon logistics and DHL analysts build.</p>`,
        tip:"Tutor's Insight: Supply chain analytics is a massive industry. Every company that ships products needs data scientists to optimize routes, reduce delays, and minimize costs.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nn = 80\ndf = pd.DataFrame({\n    'order_id': range(1001, 1001+n),\n    'warehouse': np.random.choice(['Lagos','Abuja','PH','Kano'], n),\n    'destination': np.random.choice(['Lagos','Ibadan','Abuja','Kano','PH','Enugu','Benin'], n),\n    'promised_days': np.random.choice([2,3,5,7], n),\n    'actual_days': np.random.randint(1, 12, n),\n    'weight_kg': np.random.uniform(0.5, 30, n).round(1),\n    'cost': np.random.uniform(1000, 15000, n).round(0),\n})\ndf['on_time'] = df['actual_days'] <= df['promised_days']\ndf['delay'] = (df['actual_days'] - df['promised_days']).clip(lower=0)\n\nprint("📦 SUPPLY CHAIN DASHBOARD")\nprint("="*45)\nprint(f"Orders: {n}")\nprint(f"On-time rate: {df['on_time'].mean():.0%}")\nprint(f"Avg delivery: {df['actual_days'].mean():.1f} days")\nprint(f"Avg delay (when late): {df[~df['on_time']]['delay'].mean():.1f} days")\nprint(f"Total cost: ₦{df['cost'].sum():,.0f}")\n\nprint("\\n🏭 By Warehouse:")\nfor wh, grp in df.groupby('warehouse'):\n    print(f"  {wh:<6s}: {grp['on_time'].mean():.0%} on-time, "\n          f"avg {grp['actual_days'].mean():.1f} days, "\n          f"{len(grp)} orders")\n\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Supply Chain Dashboard', fontsize=14, fontweight='bold')\ndf.groupby('warehouse')['on_time'].mean().plot(kind='bar', ax=axes[0,0], color='#22c55e')\naxes[0,0].set_title('On-Time Rate by Warehouse'); axes[0,0].set_ylim(0,1)\naxes[0,0].tick_params(axis='x', rotation=0)\naxes[0,1].hist(df['actual_days'], bins=10, color='#6366f1', edgecolor='white')\naxes[0,1].axvline(df['actual_days'].mean(), color='red', ls='--')\naxes[0,1].set_title('Delivery Time Distribution')\ndf.groupby('warehouse')['cost'].mean().plot(kind='barh', ax=axes[1,0], color='#f59e0b')\naxes[1,0].set_title('Avg Cost by Warehouse')\naxes[1,1].scatter(df['weight_kg'], df['cost'], alpha=0.6, color='#ef4444', s=40)\naxes[1,1].set_xlabel('Weight (kg)'); axes[1,1].set_ylabel('Cost (₦)')\naxes[1,1].set_title('Weight vs Cost')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What is 'on-time delivery rate'?",options:["Average delivery time","Percentage of orders delivered by the promised date","Number of orders per day","Cost per delivery"],answer:1}
    },
    {
        id:"proj_portfolio", module:"m15", title:"15.6 Portfolio Project: Full DS Report", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Your Portfolio Masterpiece</h2>
<p class="mb-4">This is the <b>final capstone</b> — a complete, professional data science report that combines EVERY skill from all 15 modules. Generate data, clean it, analyze it, visualize it, and write findings. This project goes on your portfolio.</p>
<div class="code-block">The Professional Report Structure:<br>1. Executive Summary (key findings)<br>2. Data Description & Quality<br>3. Exploratory Analysis<br>4. Statistical Tests<br>5. Visualizations (4+ charts)<br>6. Findings & Recommendations</div>`,
        tip:"Tutor's Insight: This single project demonstrates more skill than 10 tutorials. Put this on GitHub, link it on LinkedIn, show it in interviews. A well-documented analysis project IS your resume.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════\n# PORTFOLIO PROJECT: Student Performance\n# Analyst: Adewale Samson Adeagbo\n# ═══════════════════════════════════════════\n\nnp.random.seed(2024)\nn = 60\n\n# DATA GENERATION\ndf = pd.DataFrame({\n    'id': range(1, n+1),\n    'name': [f"Student_{i:02d}" for i in range(1, n+1)],\n    'gender': np.random.choice(['M','F'], n),\n    'class': np.random.choice(['SS1','SS2','SS3'], n),\n    'maths': np.random.normal(62, 18, n).clip(0,100).round(1),\n    'english': np.random.normal(68, 14, n).clip(0,100).round(1),\n    'science': np.random.normal(58, 20, n).clip(0,100).round(1),\n    'attendance': np.random.normal(82, 12, n).clip(40,100).round(0),\n})\nfor col in ['maths','english']:\n    df.loc[np.random.choice(n, 3, replace=False), col] = np.nan\n\nprint("═"*55)\nprint("  📊 STUDENT PERFORMANCE ANALYSIS REPORT")\nprint("  Analyst: Adewale Samson Adeagbo")\nprint("═"*55)\n\n# SECTION 1: Data Quality\nprint(f"\\n📋 1. DATA OVERVIEW")\nprint(f"   Students: {n} | Columns: {df.shape[1]}")\nprint(f"   Missing: {df.isnull().sum().sum()} values")\ndf_clean = df.copy()\nfor col in ['maths','english','science']:\n    df_clean[col] = df_clean[col].fillna(df_clean[col].median())\n\n# SECTION 2: Feature Engineering\ndf_clean['average'] = df_clean[['maths','english','science']].mean(axis=1).round(1)\ndf_clean['grade'] = pd.cut(df_clean['average'], bins=[0,40,50,60,70,100],\n                           labels=['F','D','C','B','A'])\ndef risk(row):\n    s = 0\n    if row['average'] < 50: s += 3\n    if row['attendance'] < 70: s += 3\n    return 'HIGH' if s >= 4 else 'MODERATE' if s >= 2 else 'LOW'\ndf_clean['risk'] = df_clean.apply(risk, axis=1)\n\n# SECTION 3: Analysis\nprint(f"\\n📈 2. KEY FINDINGS")\nprint(f"   Avg Score: {df_clean['average'].mean():.1f}%")\nprint(f"   Pass Rate: {(df_clean['average']>=50).mean():.0%}")\nprint(f"   High Risk: {(df_clean['risk']=='HIGH').sum()} students")\n\nprint(f"\\n   By Class:")\nfor cls, grp in df_clean.groupby('class'):\n    print(f"   {cls}: avg={grp['average'].mean():.1f}, "\n          f"pass_rate={(grp['average']>=50).mean():.0%}, n={len(grp)}")\n\nprint(f"\\n   By Gender:")\nfor g, grp in df_clean.groupby('gender'):\n    label = 'Male' if g=='M' else 'Female'\n    print(f"   {label}: avg={grp['average'].mean():.1f}, n={len(grp)}")\n\n# SECTION 4: Visualization\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Student Performance Dashboard — Adewale Samson Adeagbo',\n             fontsize=13, fontweight='bold')\n\naxes[0,0].hist(df_clean['average'], bins=12, color='#6366f1', edgecolor='white')\naxes[0,0].axvline(df_clean['average'].mean(), color='red', ls='--')\naxes[0,0].set_title('Score Distribution')\n\nrisk_c = df_clean['risk'].value_counts()\naxes[0,1].pie(risk_c, labels=risk_c.index, autopct='%1.0f%%',\n              colors=['#22c55e','#f59e0b','#ef4444'])\naxes[0,1].set_title('Risk Levels')\n\ncolors = df_clean['risk'].map({'LOW':'green','MODERATE':'orange','HIGH':'red'})\naxes[1,0].scatter(df_clean['attendance'], df_clean['average'],\n                  c=colors, s=50, alpha=0.7, edgecolor='white')\naxes[1,0].set_xlabel('Attendance %'); axes[1,0].set_ylabel('Average Score')\naxes[1,0].set_title('Attendance vs Score')\n\ndf_clean.groupby('class')['average'].mean().plot(kind='bar', ax=axes[1,1], color='#3b82f6')\naxes[1,1].set_title('Average by Class'); axes[1,1].tick_params(axis='x', rotation=0)\n\nplt.tight_layout()\nplt.show()\n\n# SECTION 5: Recommendations\nprint(f"\\n📝 3. RECOMMENDATIONS")\nhigh = df_clean[df_clean['risk']=='HIGH']\nprint(f"   1. {len(high)} HIGH-RISK students need immediate attention")\nprint(f"   2. Focus on Science (lowest avg: {df_clean['science'].mean():.1f})")\nprint(f"   3. Attendance below 70% strongly correlates with failure")\nprint(f"\\n{'═'*55}")\nprint(f"  Report complete. Built with PyData-Flow Pro.")\nprint(f"{'═'*55}")`,
        quiz:{question:"What makes this a 'portfolio-worthy' project?",options:["It uses fancy libraries","It combines data loading, cleaning, analysis, visualization, and actionable recommendations","It has many lines of code","It uses machine learning"],answer:1}
    },
,
// ═══ MODULE 16: PRACTICE LAB — PYTHON BASICS ═══
    {
        id:"ex_vars", module:"m16", title:"16.1 Exercise: Variables & Math", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">🏋️ Exercise: Build a Student Report Card</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Create variables for a student's name, 5 subject scores, and calculate: total, average, highest, lowest, and pass/fail status (pass = average ≥ 50). Print a formatted report card.</p></div>
<p class="mb-2"><b>Requirements:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Create variables: <code>name</code>, <code>maths</code>, <code>english</code>, <code>science</code>, <code>history</code>, <code>art</code></li>
<li>Calculate <code>total</code>, <code>average</code>, <code>highest</code>, <code>lowest</code></li>
<li>Determine pass/fail (average ≥ 50 = Pass)</li>
<li>Print a neatly formatted report card with all values</li>
<li>Use f-strings for formatting with 1 decimal place for average</li>
</ul>
<div class="callout ct"><div class="cl">HINT</div><p>Use <code>max()</code> and <code>min()</code> for highest/lowest. Use <code>f"{value:.1f}"</code> for 1 decimal place.</p></div>`,
        tip:"Exercise Tip: Start by creating all variables first, then do calculations, then format the output. Breaking problems into steps is the #1 skill in programming.",
        defaultCode:`# ═══ EXERCISE: Student Report Card ═══\n# TODO: Create these variables with scores (0-100)\nname = "___"  # Your name or any student name\nmaths = 0\nenglish = 0\nscience = 0\nhistory = 0\nart = 0\n\n# TODO: Calculate total, average, highest, lowest\ntotal = 0\naverage = 0\nhighest = 0\nlowest = 0\n\n# TODO: Determine pass/fail\nstatus = "___"\n\n# TODO: Print formatted report card\n# Expected output format:\n# ╔══════════════════════════════╗\n#   REPORT CARD: [Name]\n# ╠══════════════════════════════╣\n#   Maths:    85\n#   English:  78\n#   ...\n# ╠══════════════════════════════╣\n#   Total:    410\n#   Average:  82.0\n#   Highest:  92\n#   Lowest:   72\n#   Status:   PASS ✅\n# ╚══════════════════════════════╝\n\nprint("Replace this with your solution!")`,
        quiz:{question:"What function finds the largest value from multiple numbers?",options:["big()","largest()","max()","top()"],answer:2}
    },
    {
        id:"ex_loops", module:"m16", title:"16.2 Exercise: Loops & Conditionals", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">🏋️ Exercise: Class Score Analyzer</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Given a list of 10 student scores, write a program that loops through each score, assigns a letter grade (A/B/C/D/F), counts how many students are in each grade, and prints a summary.</p></div>
<p class="mb-2"><b>Requirements:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Grade scale: A (≥80), B (≥70), C (≥60), D (≥50), F (&lt;50)</li>
<li>Loop through all scores using <code>enumerate()</code></li>
<li>Print each student's score and grade</li>
<li>Count students in each grade category</li>
<li>Calculate and print: pass rate, class average, grade distribution</li>
</ul>`,
        tip:"Exercise Tip: Use a dictionary to count grades: grades = {'A':0, 'B':0, 'C':0, 'D':0, 'F':0} and increment inside the loop.",
        defaultCode:`# ═══ EXERCISE: Class Score Analyzer ═══\nscores = [85, 42, 91, 67, 55, 78, 33, 96, 71, 59]\n\n# TODO: Loop through scores, assign grades\n# Grade scale: A(≥80) B(≥70) C(≥60) D(≥50) F(<50)\n\n# TODO: Count students per grade\n\n# TODO: Calculate pass rate (D or above = pass)\n\n# TODO: Print summary\n# Expected output:\n# Student 1: 85 → Grade A\n# Student 2: 42 → Grade F\n# ...\n# ═══ CLASS SUMMARY ═══\n# Total: 10 students\n# Average: 67.7\n# Pass Rate: 70%\n# Grade Distribution: A:3, B:2, C:1, D:2, F:2\n\nprint("Replace this with your solution!")`,
        quiz:{question:"What does enumerate(scores, 1) provide?",options:["Just the values","Index starting at 1 and the value","Only even-indexed items","A sorted list"],answer:1}
    },
    {
        id:"ex_functions", module:"m16", title:"16.3 Exercise: Build a Calculator", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">🏋️ Exercise: Multi-Function Calculator</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a set of functions for a data analysis calculator: statistical functions (mean, median, mode, range), a grade calculator, and a function that generates a mini-report for any list of numbers.</p></div>
<p class="mb-2"><b>Required Functions:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>calc_mean(numbers)</code> — return the average</li>
<li><code>calc_median(numbers)</code> — return the middle value (sort first!)</li>
<li><code>calc_mode(numbers)</code> — return the most frequent value</li>
<li><code>calc_range(numbers)</code> — return max - min</li>
<li><code>assign_grade(score)</code> — return letter grade</li>
<li><code>analyze(numbers, label)</code> — print a complete report using all above</li>
</ul>`,
        tip:"Exercise Tip: For median — sort the list, then check if length is odd (middle value) or even (average of two middle values).",
        defaultCode:`# ═══ EXERCISE: Multi-Function Calculator ═══\n\n# TODO: Build these functions\ndef calc_mean(numbers):\n    pass  # Return average\n\ndef calc_median(numbers):\n    pass  # Return middle value\n\ndef calc_mode(numbers):\n    pass  # Return most frequent value\n\ndef calc_range(numbers):\n    pass  # Return max - min\n\ndef assign_grade(score):\n    pass  # Return A/B/C/D/F\n\ndef analyze(numbers, label="Dataset"):\n    pass  # Print complete report\n\n# Test your functions:\ntest_data = [85, 72, 91, 67, 85, 78, 55, 91, 72, 85]\n\n# Should output:\n# 📊 Analysis: Test Data\n#   Mean:   78.1\n#   Median: 78.0 (or close)\n#   Mode:   85\n#   Range:  36\n#   Min:    55\n#   Max:    91\n#   Grades: A:3, B:2, C:2, D:1, F:0\n\nanalyze(test_data, "Test Data")\nprint("Replace this with your solution!")`,
        quiz:{question:"How do you find the median of [3,1,4,1,5]?",options:["Average all values","Sort first, then take the middle value","Take the first value","Take the most frequent value"],answer:1}
    },
    {
        id:"ex_comprehensions", module:"m16", title:"16.4 Exercise: Data Transformation Pipeline", level:"Beginner",
        content:`<h2 class="text-2xl font-bold mb-3">🏋️ Exercise: Clean & Transform Data</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>You have messy student data as a list of dictionaries. Use list comprehensions, lambda functions, and dictionary operations to clean, transform, and analyze it — all without using Pandas.</p></div>
<p class="mb-2"><b>Tasks:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Filter out students with missing names (None)</li>
<li>Add a 10% bonus to all scores (cap at 100)</li>
<li>Create a grade for each student using lambda</li>
<li>Separate into passing and failing lists</li>
<li>Find top 3 students by score</li>
<li>Calculate subject averages across all students</li>
</ul>`,
        tip:"Exercise Tip: List comprehensions with conditions: [x for x in data if x is not None]. Lambda for grade: lambda s: 'A' if s>=80 else 'B' if s>=70 else 'F'",
        defaultCode:`# ═══ EXERCISE: Data Transformation Pipeline ═══\nstudents = [\n    {"name": "Adewale", "maths": 85, "science": 78},\n    {"name": None, "maths": 62, "science": 70},\n    {"name": "Bisi", "maths": 91, "science": 88},\n    {"name": "Chidi", "maths": 45, "science": 52},\n    {"name": "Dayo", "maths": 72, "science": 65},\n    {"name": None, "maths": 55, "science": 48},\n    {"name": "Eka", "maths": 38, "science": 42},\n    {"name": "Femi", "maths": 96, "science": 92},\n]\n\n# TODO 1: Filter out students with name = None\n\n# TODO 2: Add 'average' key to each student (maths+science)/2\n\n# TODO 3: Add 'grade' using lambda (A≥80, B≥70, C≥60, D≥50, F<50)\n\n# TODO 4: Separate into passing (grade != F) and failing lists\n\n# TODO 5: Sort by average and find top 3\n\n# TODO 6: Calculate overall maths and science averages\n\nprint("Replace this with your solution!")`,
        quiz:{question:"What does [x for x in data if x['name'] is not None] do?",options:["Removes all data","Keeps only items where name exists","Sorts by name","Counts None values"],answer:1}
    },

    // ═══ MODULE 17: PRACTICE LAB — DATA & PANDAS ═══
    {
        id:"ex_pandas_basics", module:"m17", title:"17.1 Exercise: DataFrame Mastery", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">💪 Exercise: Build & Analyze a DataFrame</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Create a DataFrame from scratch with 10 students, 4 subjects, and attendance. Then perform 8 specific analysis tasks without any hints — just the requirements.</p></div>
<p class="mb-2"><b>Tasks (do ALL 8):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>1. Create a DataFrame with columns: Name, Maths, English, Science, Attendance</li>
<li>2. Add a column 'Average' = mean of the 3 subjects</li>
<li>3. Add a column 'Grade' (A≥80, B≥70, C≥60, D≥50, F&lt;50)</li>
<li>4. Filter students with attendance &lt; 75% — label them "At Risk"</li>
<li>5. Find the top 3 students by average</li>
<li>6. Find the worst-performing subject (lowest overall average)</li>
<li>7. Calculate pass rate (average ≥ 50)</li>
<li>8. Print a complete summary report</li>
</ul>`,
        tip:"Exercise Tip: Use np.where() for the Grade column. Use .nlargest(3, 'Average') for top 3. Think step by step.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ EXERCISE: DataFrame Mastery ═══\n# Build everything from scratch!\n\n# TODO: Create your DataFrame (10 students, realistic scores)\n\n# TODO: Tasks 1-8 (see requirements above)\n\nprint("Build your complete analysis here!")`,
        quiz:{question:"How do you find the top 3 rows by a column value?",options:["df.sort_values().head(3)","df.nlargest(3, 'col')","df.top(3)","df.best(3)"],answer:1}
    },
    {
        id:"ex_data_cleaning", module:"m17", title:"17.2 Exercise: Clean Real-World Data", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">💪 Exercise: The Messy Dataset Challenge</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>You receive an extremely messy dataset. Clean it using every technique you've learned: handle missing values, fix types, remove duplicates, standardize text, clip outliers, and validate the result.</p></div>
<p class="mb-2"><b>The data has these problems (fix ALL of them):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Missing names (None) — drop these rows</li>
<li>Missing scores — fill with column median</li>
<li>Duplicate student IDs — keep first occurrence</li>
<li>Scores out of range (negatives and >100) — clip to 0-100</li>
<li>Inconsistent gender text ('M','Male','male','m') — standardize to M/F</li>
<li>Leading/trailing whitespace in names — strip</li>
</ul>`,
        tip:"Exercise Tip: Work on a copy (df.copy()). Fix one problem at a time. Check df.info() and df.isnull().sum() after each step to verify your cleaning worked.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ EXERCISE: The Messy Dataset Challenge ═══\nnp.random.seed(42)\n\n# This data is intentionally messy!\ndf = pd.DataFrame({\n    'id': [1,2,3,4,5,6,7,8,2,9],  # duplicate ID=2\n    'name': ['  Adewale ','Bisi',None,'Dayo','Eka  ',' Femi','Grace',None,'Bisi','Hassan'],\n    'score': [85, None, 72, -5, 150, 88, None, 65, 78, 55],\n    'gender': ['M','Female','F','male','F','Male','f','M','female','m'],\n    'age': [17, 16, None, 18, 17, None, 16, 17, 16, 18]\n})\n\nprint("=== RAW DATA ===")\nprint(df)\nprint(f"\\nProblems: {df.isnull().sum().sum()} missing, {df.duplicated('id').sum()} duplicate IDs")\n\n# TODO: Clean ALL problems listed above\n# Goal: Zero missing values, zero duplicates, all scores 0-100,\n# all genders 'M' or 'F', no extra whitespace\n\nprint("\\n=== CLEANED DATA ===")\nprint("Replace this with your cleaning pipeline!")`,
        quiz:{question:"Why should you always work on df.copy() when cleaning?",options:["It's faster","To preserve the original data in case you make a mistake","Python requires it","It uses less memory"],answer:1}
    },
    {
        id:"ex_groupby_merge", module:"m17", title:"17.3 Exercise: Multi-Table Analysis", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">💪 Exercise: Combine & Analyze 3 Datasets</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>You have 3 separate data sources: student info, exam scores, and attendance records. Merge them into one master table, then answer 5 business questions using GroupBy and aggregation.</p></div>
<p class="mb-2"><b>Questions to Answer:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Q1: What is the average score by class?</li>
<li>Q2: Which class has the best attendance?</li>
<li>Q3: Is there a correlation between attendance and scores?</li>
<li>Q4: Who are the top 5 students overall?</li>
<li>Q5: Which subject has the widest performance gap (max - min)?</li>
</ul>`,
        tip:"Exercise Tip: Merge on the shared 'id' column. Use how='left' to keep all students even if some are missing from a source.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ EXERCISE: Multi-Table Analysis ═══\nnp.random.seed(42)\n\n# Source 1: Student Info\nstudents = pd.DataFrame({\n    'id': range(1, 16),\n    'name': [f"Student_{i:02d}" for i in range(1, 16)],\n    'class': ['SS1']*5 + ['SS2']*5 + ['SS3']*5,\n    'gender': np.random.choice(['M','F'], 15)\n})\n\n# Source 2: Exam Scores  \nscores = pd.DataFrame({\n    'student_id': list(range(1,16))*3,\n    'subject': ['Maths']*15 + ['English']*15 + ['Science']*15,\n    'score': np.random.normal(65, 15, 45).clip(20, 100).round(1)\n})\n\n# Source 3: Attendance\nattendance = pd.DataFrame({\n    'id': range(1, 16),\n    'attend_pct': np.random.normal(82, 12, 15).clip(50, 100).round(0)\n})\n\n# TODO: Merge all 3 sources into one master DataFrame\n# TODO: Answer all 5 questions above\n# TODO: Print a formatted summary\n\nprint("Build your multi-table analysis here!")`,
        quiz:{question:"When merging DataFrames, what does how='left' mean?",options:["Keep only matching rows","Keep all rows from the left table, fill missing from right with NaN","Keep all rows from both","Delete the left table"],answer:1}
    },
    {
        id:"ex_pipeline", module:"m17", title:"17.4 Exercise: End-to-End Pipeline", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">💪 Exercise: Complete Analysis Pipeline</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a COMPLETE data pipeline from scratch: generate synthetic data, inject realistic problems, clean everything, engineer features, analyze, and produce a professional report — all in one script.</p></div>
<p class="mb-2"><b>Pipeline Steps (all required):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Step 1: Generate 50+ student records with np.random</li>
<li>Step 2: Inject 5-10% missing values realistically</li>
<li>Step 3: Clean (fill missing, fix types, remove duplicates)</li>
<li>Step 4: Engineer features (average, grade, risk level)</li>
<li>Step 5: GroupBy analysis (by class, gender, risk)</li>
<li>Step 6: Create at least 2 matplotlib charts</li>
<li>Step 7: Print a professional summary report</li>
</ul>`,
        tip:"Exercise Tip: This is your mini-capstone. Treat it like a real job deliverable. Your output should be something a school principal could read and act on.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Complete Analysis Pipeline ═══\n# Build the ENTIRE pipeline from scratch!\n# No hints — use everything you've learned.\n\nnp.random.seed(2024)  # For reproducibility\n\n# Step 1: Generate data\n# Step 2: Inject problems\n# Step 3: Clean\n# Step 4: Feature engineering\n# Step 5: Analysis\n# Step 6: Visualization\n# Step 7: Report\n\nprint("Build your complete pipeline here!")\nprint("This is your portfolio piece!")`,
        quiz:{question:"What is the correct order in a data pipeline?",options:["Visualize → Clean → Load → Analyze","Load → Clean → Engineer Features → Analyze → Visualize → Report","Report → Analyze → Clean → Load","Clean → Load → Report → Visualize"],answer:1}
    },

    // ═══ MODULE 18: PRACTICE LAB — VIZ & STATS ═══
    {
        id:"ex_charts", module:"m18", title:"18.1 Exercise: 6-Chart Dashboard", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">🧪 Exercise: Professional Dashboard</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Create a 2×3 grid of charts (6 total) showing different aspects of the same dataset. Each chart must be a DIFFERENT type and must have proper titles, labels, and formatting.</p></div>
<p class="mb-2"><b>Required Charts:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Chart 1: Bar chart — scores by student</li>
<li>Chart 2: Histogram — score distribution</li>
<li>Chart 3: Pie chart — grade distribution</li>
<li>Chart 4: Line chart — cumulative average</li>
<li>Chart 5: Scatter — attendance vs score</li>
<li>Chart 6: Horizontal bar — subject averages</li>
</ul>`,
        tip:"Exercise Tip: Use fig, axes = plt.subplots(2, 3, figsize=(15, 9)). Access charts as axes[0,0], axes[0,1], etc.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: 6-Chart Dashboard ═══\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'Name': [f"Student_{i}" for i in range(1, 21)],\n    'Maths': np.random.normal(68, 15, 20).clip(20, 100).round(1),\n    'English': np.random.normal(72, 12, 20).clip(20, 100).round(1),\n    'Science': np.random.normal(60, 18, 20).clip(20, 100).round(1),\n    'Attendance': np.random.normal(82, 10, 20).clip(50, 100).round(0),\n})\ndf['Average'] = df[['Maths','English','Science']].mean(axis=1).round(1)\n\n# TODO: Create a 2×3 subplot grid\n# TODO: Build all 6 charts with proper styling\n# TODO: Add suptitle: "Student Performance Dashboard"\n\nprint("Build your dashboard here!")\nprint("Remember: plt.tight_layout() and plt.show()")`,
        quiz:{question:"What creates a 2-row, 3-column grid of charts?",options:["plt.subplots(3,2)","plt.subplots(2,3)","plt.grid(2,3)","plt.chart(6)"],answer:1}
    },
    {
        id:"ex_stats", module:"m18", title:"18.2 Exercise: Statistical Investigation", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🧪 Exercise: Is the Difference Real?</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Two classes took the same exam. Class A used a new teaching method, Class B used the traditional method. Determine if the difference in scores is statistically significant or just random chance.</p></div>
<p class="mb-2"><b>Your Analysis Must Include:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Descriptive stats for both classes (mean, median, std)</li>
<li>Visualization comparing both distributions (overlapping histograms)</li>
<li>Permutation test (simulate 10,000 random shuffles)</li>
<li>Calculate p-value and state your conclusion</li>
<li>Box plot comparison</li>
</ul>`,
        tip:"Exercise Tip: A permutation test shuffles all scores together, splits them randomly into two groups, and measures the difference. If the real difference is bigger than 95% of random differences, it's significant.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Statistical Investigation ═══\nnp.random.seed(42)\n\n# Class A: New teaching method (n=35)\nclass_a = np.random.normal(72, 12, 35).clip(20, 100).round(1)\n\n# Class B: Traditional method (n=35)\nclass_b = np.random.normal(65, 14, 35).clip(20, 100).round(1)\n\n# TODO: Descriptive statistics for both\n# TODO: Calculate observed difference in means\n# TODO: Overlapping histograms\n# TODO: Permutation test (10,000 simulations)\n# TODO: Calculate p-value\n# TODO: Box plot comparison\n# TODO: State your conclusion\n\nprint("Build your statistical analysis here!")\nprint("Is the new method significantly better?")`,
        quiz:{question:"If p-value = 0.03, what do you conclude?",options:["No difference exists","The difference is statistically significant (p < 0.05)","The test failed","We need more data"],answer:1}
    },
    {
        id:"ex_eda_full", module:"m18", title:"18.3 Exercise: Complete EDA", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🧪 Exercise: Full EDA from Scratch</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Perform a complete Exploratory Data Analysis on a business dataset. Cover EVERY aspect: structure, quality, univariate, bivariate, and multivariate analysis. Produce a written summary of findings.</p></div>`,
        tip:"Exercise Tip: Follow the EDA checklist: Shape → Quality → Distributions → Relationships → Outliers → Hypotheses → Summary. This is what interviewers want to see.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Complete EDA ═══\nnp.random.seed(42)\nn = 100\ndf = pd.DataFrame({\n    'employee_id': range(1, n+1),\n    'department': np.random.choice(['Sales','Engineering','Marketing','HR','Finance'], n),\n    'salary': np.random.normal(85, 25, n).clip(30, 200).round(0) * 1000,\n    'experience_years': np.random.exponential(5, n).clip(0.5, 25).round(1),\n    'satisfaction': np.random.uniform(1, 10, n).round(1),\n    'performance': np.random.normal(7, 2, n).clip(1, 10).round(1),\n    'left_company': np.random.choice([0, 1], n, p=[0.8, 0.2]),\n})\n\n# TODO: Complete EDA — structure, quality, univariate,\n# bivariate, multivariate, outliers, summary\n# Include at least 4 charts\n\nprint("Build your complete EDA here!")`,
        quiz:{question:"What should be the FIRST step in any EDA?",options:["Build charts","Check shape, columns, and data types","Run machine learning","Clean the data"],answer:1}
    },
    {
        id:"ex_report", module:"m18", title:"18.4 Exercise: Automated Report Generator", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🧪 Exercise: Build a Report Function</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Create a function <code>generate_report(df, title)</code> that takes ANY DataFrame and produces a complete, professional, printed analysis report — automatically detecting numeric and categorical columns.</p></div>
<p class="mb-2"><b>Your function must:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Auto-detect numeric vs categorical columns</li>
<li>Print data quality summary (missing, duplicates)</li>
<li>Show statistics for all numeric columns</li>
<li>Show value counts for all categorical columns</li>
<li>Create an appropriate chart for each column</li>
<li>Print findings and recommendations</li>
<li>Work on ANY DataFrame — not just one specific dataset</li>
</ul>`,
        tip:"Exercise Tip: Use df.select_dtypes(include=[np.number]) for numeric and df.select_dtypes(include=['object']) for categorical. This makes your function universal.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Automated Report Generator ═══\n\ndef generate_report(df, title="Dataset Report"):\n    """Generate a complete analysis report for ANY DataFrame."""\n    # TODO: Build this function\n    # It must work on ANY dataset, not just one specific one\n    pass\n\n# Test with education data\ndf1 = pd.read_csv('data.csv')\ngenerate_report(df1, "Education Analysis")\n\n# It should also work with this data:\ndf2 = pd.DataFrame({\n    'product': np.random.choice(['A','B','C','D'], 50),\n    'revenue': np.random.normal(1000, 200, 50).round(0),\n    'units': np.random.randint(5, 50, 50),\n    'region': np.random.choice(['North','South','East','West'], 50),\n})\ngenerate_report(df2, "Sales Analysis")\n\nprint("Build a UNIVERSAL report generator!")`,
        quiz:{question:"Why should the function auto-detect column types?",options:["It's more complex","So it works on ANY dataset, not just one specific one","Python requires it","For better performance"],answer:1}
    },

    // ═══ MODULE 19: DATA NORMALIZATION ═══
    {
        id:"minmax_scaling", module:"m19", title:"19.1 Min-Max Scaling", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Bringing Data to the Same Scale</h2>
<p class="mb-4"><b>Min-Max scaling</b> transforms values to a 0-1 range. This is essential when combining features with different units — you can't compare a score (0-100) with attendance (0-100%) with age (15-20) without normalizing.</p>
<div class="code-block">scaled = (value - min) / (max - min)<br># Result: always between 0 and 1</div>
<p class="mb-2"><b>Formula:</b> <code>x_scaled = (x - x_min) / (x_max - x_min)</code></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Min value → 0, Max value → 1, everything else → proportional</li>
<li>Preserves the <b>shape</b> of the distribution</li>
<li>Sensitive to outliers (one extreme value compresses everything else)</li>
<li>Use when you know the data has fixed boundaries (scores 0-100)</li>
</ul>
<div class="callout ci"><div class="cl">DATA SCIENCE CONNECTION</div><p>Many ML algorithms (KNN, Neural Networks, SVM) require scaled data. Without scaling, features with larger ranges dominate the model. Scaling gives every feature equal influence.</p></div>`,
        tip:"Tutor's Insight: If your data has extreme outliers, Min-Max scaling squishes everything into a tiny range near 0. In that case, use Z-score standardization instead.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Min-Max scaling from scratch\ndef min_max_scale(series):\n    """Scale values to 0-1 range."""\n    return (series - series.min()) / (series.max() - series.min())\n\n# Student data with different scales\ndf = pd.DataFrame({\n    'name': ['Adewale','Bisi','Chidi','Dayo','Eka'],\n    'score': [95, 72, 88, 45, 80],       # 0-100\n    'attend': [98, 65, 92, 78, 85],       # 0-100\n    'age': [17, 19, 16, 18, 17],          # 15-20\n    'study_hours': [5.5, 2.0, 4.8, 1.2, 3.5],  # 0-8\n})\n\nprint("=== BEFORE SCALING ===")\nprint(df)\n\n# Scale all numeric columns\nfor col in ['score','attend','age','study_hours']:\n    df[f'{col}_scaled'] = min_max_scale(df[col]).round(3)\n\nprint("\\n=== AFTER SCALING (0-1 range) ===")\nscaled_cols = [c for c in df.columns if '_scaled' in c]\nprint(df[['name'] + scaled_cols])\n\n# Now we can compare fairly\ndf['composite'] = df[scaled_cols].mean(axis=1).round(3)\nprint("\\n=== COMPOSITE SCORE (equal weight) ===")\nprint(df[['name','composite']].sort_values('composite', ascending=False))`,
        quiz:{question:"After Min-Max scaling, what range do values fall into?",options:["0 to 100","-1 to 1","0 to 1","The original range"],answer:2}
    },
    {
        id:"zscore", module:"m19", title:"19.2 Z-Score Standardization", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">How Many Standard Deviations Away?</h2>
<p class="mb-4">A <b>Z-score</b> tells you how far a value is from the mean, measured in standard deviations. Z = 0 means exactly average. Z = 2 means 2 standard deviations above average.</p>
<div class="code-block">z = (value - mean) / std_dev<br># Z = 0: exactly average<br># Z > 0: above average<br># Z < 0: below average<br># |Z| > 2: unusual<br># |Z| > 3: very unusual (possible outlier)</div>`,
        tip:"Tutor's Insight: Z-scores are the universal translator of data science. A score of 85 means nothing without context. A Z-score of 1.5 means 'better than ~93% of the class' — regardless of the subject or scale.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndef z_score(series):\n    """Calculate Z-scores."""\n    return ((series - series.mean()) / series.std()).round(2)\n\ndf = pd.DataFrame({\n    'name': ['Adewale','Bisi','Chidi','Dayo','Eka','Femi','Grace','Hassan'],\n    'maths': [95, 72, 88, 45, 80, 55, 91, 67],\n    'english': [82, 85, 78, 62, 90, 70, 88, 75],\n})\n\n# Calculate Z-scores\ndf['maths_z'] = z_score(df['maths'])\ndf['english_z'] = z_score(df['english'])\n\nprint("=== SCORES WITH Z-SCORES ===")\nprint(df)\n\n# Interpret Z-scores\nprint("\\n=== INTERPRETATION ===")\nfor _, row in df.iterrows():\n    for subj in ['maths','english']:\n        z = row[f'{subj}_z']\n        if abs(z) > 2: label = "⚠️ UNUSUAL"\n        elif z > 1: label = "📈 Above Average"\n        elif z < -1: label = "📉 Below Average"\n        else: label = "➡️ Average"\n        print(f"  {row['name']:>8s} {subj:>7s}: score={row[subj]:>5.0f}, z={z:>+.2f} {label}")`,
        quiz:{question:"A Z-score of -2.5 means the value is:",options:["Very high","Exactly average","2.5 standard deviations BELOW the mean","Invalid"],answer:2}
    },
    {
        id:"when_scale", module:"m19", title:"19.3 When to Scale (and When Not To)", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Scaling Decision Framework</h2>
<p class="mb-4">Not all data needs scaling. Knowing <b>when</b> to scale and <b>which method</b> to use is a critical professional skill.</p>
<div class="code-block">SCALE when:<br>✅ Combining features with different units<br>✅ Using distance-based algorithms (KNN, clustering)<br>✅ Comparing across different scales<br><br>DON'T SCALE when:<br>❌ Using tree-based models (they don't care about scale)<br>❌ The original units are meaningful (₦ revenue)<br>❌ You only have one feature</div>`,
        tip:"Tutor's Insight: In interviews, they'll ask 'When would you NOT scale your data?' The answer: when using decision trees/random forests, when the original units matter for interpretation, or when all features are already on the same scale.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndef min_max(s): return ((s - s.min()) / (s.max() - s.min())).round(3)\ndef z_standard(s): return ((s - s.mean()) / s.std()).round(3)\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'student': [f"S{i}" for i in range(1, 11)],\n    'score': np.random.normal(70, 15, 10).clip(20, 100).round(1),\n    'income_k': np.random.exponential(50, 10).clip(10, 300).round(0),\n    'age': np.random.randint(16, 20, 10),\n})\n\nprint("=== ORIGINAL ===")\nprint(df.describe().round(1))\n\nprint("\\n=== MIN-MAX SCALED ===")\nfor col in ['score','income_k','age']:\n    df[f'{col}_mm'] = min_max(df[col])\nprint(df[[c for c in df.columns if '_mm' in c]].describe().round(3))\n\nprint("\\n=== Z-SCORE STANDARDIZED ===")\nfor col in ['score','income_k','age']:\n    df[f'{col}_z'] = z_standard(df[col])\nprint(df[[c for c in df.columns if '_z' in c]].describe().round(3))\n\n# Decision framework\nprint("\\n=== SCALING DECISION ===")\nprint("Min-Max: Best when you need 0-1 range, no extreme outliers")\nprint("Z-Score: Best when data has outliers, need to compare across distributions")\nprint("None:    Best for tree-based models or when units are meaningful")`,
        quiz:{question:"Decision trees require scaled data. True or False?",options:["True — always scale","False — tree-based models don't need scaling","Only for deep trees","Only for random forests"],answer:1}
    },

    // ═══ MODULE 20: A/B TESTING ═══
    {
        id:"ab_design", module:"m20", title:"20.1 Designing A/B Tests", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">The Scientific Method for Business</h2>
<p class="mb-4">An <b>A/B test</b> compares two versions (A = control, B = treatment) to determine which performs better. It's how Netflix, Google, and every tech company makes data-driven decisions.</p>
<div class="code-block">A/B Test Structure:<br>1. Define the metric (what you're measuring)<br>2. State hypotheses (H₀: no difference, H₁: B is better)<br>3. Determine sample size (how many users)<br>4. Run the experiment (random assignment)<br>5. Analyze results (statistical significance)<br>6. Make a decision (implement or reject)</div>`,
        tip:"Tutor's Insight: A/B testing is the most valuable statistical skill in industry. Companies like Amazon run thousands of A/B tests simultaneously. Learning this makes you immediately employable.",
        defaultCode:`import numpy as np\n\nnp.random.seed(42)\n\n# Scenario: Does a new app layout increase session time?\n# Control (A): Old layout — avg 5.2 min per session\n# Treatment (B): New layout — we expect longer sessions\n\nn_users = 500  # per group\n\n# Simulate user behavior\ncontrol = np.random.normal(5.2, 2.1, n_users)  # Old layout\ntreatment = np.random.normal(5.8, 2.3, n_users)  # New layout\n\nprint("═══ A/B TEST: App Layout Experiment ═══")\nprint(f"\\nControl (A):   n={n_users}, mean={control.mean():.2f} min, std={control.std():.2f}")\nprint(f"Treatment (B): n={n_users}, mean={treatment.mean():.2f} min, std={treatment.std():.2f}")\nprint(f"Difference:    {treatment.mean() - control.mean():.2f} min")\nprint(f"Relative lift: {(treatment.mean()/control.mean() - 1)*100:.1f}%")\n\n# Permutation test\nobserved_diff = treatment.mean() - control.mean()\ncombined = np.concatenate([control, treatment])\nsim_diffs = []\nfor _ in range(10000):\n    np.random.shuffle(combined)\n    sim_diffs.append(combined[:n_users].mean() - combined[n_users:].mean())\n\np_value = np.mean(np.array(sim_diffs) >= observed_diff)\n\nprint(f"\\np-value: {p_value:.4f}")\nif p_value < 0.05:\n    print("✅ SIGNIFICANT — The new layout increases session time!")\n    print("   Recommendation: Roll out to all users.")\nelse:\n    print("❌ NOT SIGNIFICANT — Cannot confirm improvement.")\n    print("   Recommendation: Continue testing or try a different design.")`,
        quiz:{question:"In A/B testing, what is the 'control' group?",options:["The group that receives the new treatment","The group that stays with the current version","The group with the most users","The group that is tested last"],answer:1}
    },
    {
        id:"ab_analysis", module:"m20", title:"20.2 Analyzing A/B Test Results", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">From Data to Decision</h2>
<p class="mb-4">Running the test is easy. <b>Correctly interpreting results</b> is the hard part. You need to understand statistical power, effect size, confidence intervals, and common pitfalls.</p>`,
        tip:"Tutor's Insight: The most common A/B testing mistake is stopping too early. If you check results daily and stop when p < 0.05, you'll get false positives 30%+ of the time. Always pre-determine your sample size.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(2024)\n\n# E-commerce A/B test: Does a green 'Buy' button convert better than blue?\nblue_clicks = np.random.binomial(1, 0.12, 1000)   # 12% conversion rate\ngreen_clicks = np.random.binomial(1, 0.145, 1000)  # 14.5% conversion rate\n\nblue_rate = blue_clicks.mean()\ngreen_rate = green_clicks.mean()\nlift = (green_rate / blue_rate - 1) * 100\n\nprint("═══ A/B TEST RESULTS ═══")\nprint(f"Blue button:  {blue_rate:.1%} conversion ({blue_clicks.sum()}/{len(blue_clicks)})")\nprint(f"Green button: {green_rate:.1%} conversion ({green_clicks.sum()}/{len(green_clicks)})")\nprint(f"Relative lift: {lift:+.1f}%")\n\n# Permutation test\nobserved = green_rate - blue_rate\ncombined = np.concatenate([blue_clicks, green_clicks])\np_diffs = []\nfor _ in range(10000):\n    np.random.shuffle(combined)\n    p_diffs.append(combined[:1000].mean() - combined[1000:].mean())\n\np_value = np.mean(np.array(p_diffs) >= observed)\n\nprint(f"\\nStatistical Test:")\nprint(f"  Observed difference: {observed:.3f}")\nprint(f"  p-value: {p_value:.4f}")\nprint(f"  Significant at 95%: {'Yes ✅' if p_value < 0.05 else 'No ❌'}")\n\n# Visualization\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\nax1.bar(['Blue (Control)','Green (Treatment)'], [blue_rate, green_rate],\n        color=['#3b82f6','#22c55e'], edgecolor='white')\nax1.set_ylabel('Conversion Rate')\nax1.set_title('Conversion by Button Color', fontweight='bold')\nfor i, v in enumerate([blue_rate, green_rate]):\n    ax1.text(i, v+0.005, f'{v:.1%}', ha='center', fontweight='bold')\n\nax2.hist(p_diffs, bins=50, color='#94a3b8', edgecolor='white', alpha=0.7)\nax2.axvline(observed, color='red', linewidth=2, label=f'Observed: {observed:.3f}')\nax2.set_title('Permutation Distribution', fontweight='bold')\nax2.set_xlabel('Difference in conversion rates')\nax2.legend()\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Why is it dangerous to stop an A/B test early?",options:["The data gets deleted","You increase the chance of false positives (seeing a difference that isn't real)","The server costs more","Users might complain"],answer:1}
    },
    {
        id:"ab_exercise", module:"m20", title:"20.3 Exercise: Design Your Own A/B Test", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🧬 Exercise: Full A/B Test</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Design, simulate, and analyze a complete A/B test for a school scenario: Does sending weekly progress reports to parents improve student scores?</p></div>`,
        tip:"Exercise Tip: Think about what could go wrong — students in the treatment group might study harder just because they know they're being watched (Hawthorne effect). Real experiments need careful design.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: A/B Test — Parent Progress Reports ═══\n# H₀: Weekly reports have NO effect on student scores\n# H₁: Weekly reports IMPROVE student scores\n\nnp.random.seed(42)\n\n# TODO: Simulate two groups of 40 students each\n# Control: No reports (scores ~ normal(65, 14))\n# Treatment: Weekly reports (scores ~ normal(71, 13))\n\n# TODO: Calculate descriptive stats for both groups\n# TODO: Run permutation test (10,000 simulations)\n# TODO: Calculate p-value\n# TODO: Create comparison visualization\n# TODO: Write conclusion and recommendation\n\nprint("Design your complete A/B test here!")`,
        quiz:{question:"What is the Hawthorne effect?",options:["A statistical formula","People change behavior when they know they're being observed","A type of chart","A data cleaning technique"],answer:1}
    },

    // ═══ MODULE 21: SQL CONCEPTS ═══
    {
        id:"sql_select", module:"m21", title:"21.1 SQL SELECT in Python", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">SQL — The Other Language Every DS Needs</h2>
<p class="mb-4"><b>SQL (Structured Query Language)</b> retrieves data from databases. Almost every data science job requires SQL. The good news: if you know Pandas, you already know 80% of SQL concepts.</p>
<div class="code-block">SQL:    SELECT name, score FROM students WHERE score > 70<br>Pandas: df[df['score'] > 70][['name', 'score']]<br><br>SQL:    SELECT dept, AVG(score) FROM students GROUP BY dept<br>Pandas: df.groupby('dept')['score'].mean()</div>
<p class="mb-2"><b>SQL ↔ Pandas Translation:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>SELECT columns</code> → <code>df[['col1','col2']]</code></li>
<li><code>WHERE condition</code> → <code>df[df['col'] > value]</code></li>
<li><code>ORDER BY col</code> → <code>df.sort_values('col')</code></li>
<li><code>GROUP BY col</code> → <code>df.groupby('col')</code></li>
<li><code>JOIN</code> → <code>pd.merge()</code></li>
<li><code>COUNT(*)</code> → <code>len(df)</code> or <code>df['col'].count()</code></li>
</ul>`,
        tip:"Tutor's Insight: In data science interviews, SQL is tested separately from Python. But the logic is identical — filtering, grouping, aggregating, joining. Master Pandas and you've mastered SQL concepts.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Simulate a database table\nnp.random.seed(42)\nstudents = pd.DataFrame({\n    'id': range(1, 21),\n    'name': [f"Student_{i:02d}" for i in range(1, 21)],\n    'dept': np.random.choice(['Science','Arts','Commerce'], 20),\n    'score': np.random.normal(65, 15, 20).clip(20, 100).round(1),\n    'year': np.random.choice([2024, 2025, 2026], 20),\n})\n\nprint("TABLE: students")\nprint(students.head(10))\n\n# SQL: SELECT name, score FROM students WHERE score > 70\nresult = students[students['score'] > 70][['name', 'score']]\nprint("\\n--- WHERE score > 70 ---")\nprint(result)\n\n# SQL: SELECT dept, AVG(score), COUNT(*) FROM students GROUP BY dept\nresult2 = students.groupby('dept').agg(\n    avg_score=('score', 'mean'),\n    count=('id', 'count')\n).round(1)\nprint("\\n--- GROUP BY dept ---")\nprint(result2)\n\n# SQL: SELECT * FROM students ORDER BY score DESC LIMIT 5\ntop5 = students.sort_values('score', ascending=False).head(5)\nprint("\\n--- ORDER BY score DESC LIMIT 5 ---")\nprint(top5[['name','dept','score']])`,
        quiz:{question:"What is the Pandas equivalent of SQL's WHERE clause?",options:["df.where()","df[df['col'] > value]","df.filter()","df.select()"],answer:1}
    },
    {
        id:"sql_joins", module:"m21", title:"21.2 SQL JOINs in Python", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Connecting Multiple Tables</h2>
<p class="mb-4">Real databases have many tables connected by keys. <b>JOINs</b> combine them. In Pandas, <code>pd.merge()</code> does exactly the same thing.</p>
<div class="code-block">SQL:    SELECT * FROM orders JOIN customers ON orders.cust_id = customers.id<br>Pandas: pd.merge(orders, customers, left_on='cust_id', right_on='id')</div>`,
        tip:"Tutor's Insight: JOIN questions appear in 90% of data science interviews. Practice INNER, LEFT, RIGHT, and OUTER joins until you can do them in your sleep.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Simulate two database tables\ncustomers = pd.DataFrame({\n    'cust_id': [1, 2, 3, 4, 5],\n    'name': ['Adewale','Bisi','Chidi','Dayo','Eka'],\n    'city': ['Lagos','Abuja','Lagos','PH','Ibadan'],\n})\n\norders = pd.DataFrame({\n    'order_id': [101, 102, 103, 104, 105, 106],\n    'cust_id': [1, 2, 1, 3, 6, 2],  # Note: cust_id=6 not in customers!\n    'amount': [5000, 3200, 1800, 7500, 2100, 4600],\n    'product': ['Laptop','Phone','Cable','Monitor','Mouse','Tablet'],\n})\n\nprint("CUSTOMERS:"); print(customers)\nprint("\\nORDERS:"); print(orders)\n\n# INNER JOIN — only matching\ninner = pd.merge(orders, customers, on='cust_id')\nprint("\\n--- INNER JOIN (only matches) ---")\nprint(inner)\n\n# LEFT JOIN — keep all orders\nleft = pd.merge(orders, customers, on='cust_id', how='left')\nprint("\\n--- LEFT JOIN (all orders, customer info where available) ---")\nprint(left)\n\n# Aggregation after join\nprint("\\n--- Revenue by Customer ---")\nrevenue = inner.groupby('name')['amount'].agg(['sum','count']).sort_values('sum', ascending=False)\nrevenue.columns = ['total_spent','num_orders']\nprint(revenue)`,
        quiz:{question:"What does a LEFT JOIN keep?",options:["Only matching rows","All rows from the left table, with NaN for unmatched right rows","All rows from both tables","Only unmatched rows"],answer:1}
    },
    {
        id:"sql_exercise", module:"m21", title:"21.3 Exercise: SQL-Style Analysis", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🗄️ Exercise: Answer Business Questions</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>You have 3 database tables: employees, departments, and salaries. Write Pandas code equivalent to 6 specific SQL queries to answer business questions.</p></div>`,
        tip:"Exercise Tip: Think in SQL first ('I need to JOIN these tables, GROUP BY department, and ORDER BY average salary'), then translate to Pandas. The logic is identical.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\n\n# Table 1: Employees\nemployees = pd.DataFrame({\n    'emp_id': range(1, 21),\n    'name': [f"Employee_{i:02d}" for i in range(1, 21)],\n    'dept_id': np.random.choice([1,2,3,4], 20),\n    'hire_year': np.random.choice([2020,2021,2022,2023,2024], 20),\n})\n\n# Table 2: Departments\ndepartments = pd.DataFrame({\n    'dept_id': [1, 2, 3, 4],\n    'dept_name': ['Engineering','Marketing','Sales','HR'],\n})\n\n# Table 3: Salaries\nsalaries = pd.DataFrame({\n    'emp_id': range(1, 21),\n    'salary': np.random.normal(85, 20, 20).clip(40, 150).round(0) * 1000,\n})\n\n# ═══ ANSWER THESE SQL QUERIES IN PANDAS ═══\n\n# Q1: SELECT * FROM employees JOIN departments ON dept_id\n# Q2: SELECT dept_name, COUNT(*) FROM ... GROUP BY dept_name\n# Q3: SELECT dept_name, AVG(salary) FROM ... GROUP BY dept_name ORDER BY AVG(salary) DESC\n# Q4: SELECT name, salary FROM ... WHERE salary > 100000 ORDER BY salary DESC\n# Q5: SELECT hire_year, COUNT(*) FROM employees GROUP BY hire_year\n# Q6: SELECT dept_name, MAX(salary), MIN(salary) FROM ... GROUP BY dept_name\n\nprint("Write your SQL-equivalent Pandas code here!")`,
        quiz:{question:"What is the Pandas equivalent of SQL's GROUP BY?",options:["df.group()","df.groupby()","df.aggregate()","df.split()"],answer:1}
    },

    // ═══ MODULE 22: AUTOMATED REPORTS ═══
    {
        id:"report_text", module:"m22", title:"22.1 Generating Text Reports", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Reports That Write Themselves</h2>
<p class="mb-4">Instead of manually writing analysis reports, build Python functions that <b>generate professional reports automatically</b> from any dataset. This is what production data science looks like.</p>`,
        tip:"Tutor's Insight: At my previous role, I built auto-report functions that ran every Monday morning and emailed the school principal a weekly performance summary. This saved 4 hours of manual work per week.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndef generate_executive_summary(df, title, key_metric_col, group_col=None):\n    """Generate a professional executive summary."""\n    sep = "═" * 55\n    print(f"\\n{sep}")\n    print(f"  📊 EXECUTIVE SUMMARY: {title.upper()}")\n    print(f"  Generated: {pd.Timestamp.now().strftime('%Y-%m-%d %H:%M')}")\n    print(f"  Analyst: Adewale Samson Adeagbo")\n    print(f"{sep}")\n    \n    print(f"\\n  📐 DATASET OVERVIEW")\n    print(f"  Records: {len(df):,} | Fields: {df.shape[1]}")\n    print(f"  Data quality: {(1-df.isnull().sum().sum()/(df.shape[0]*df.shape[1]))*100:.0f}%")\n    \n    metric = df[key_metric_col]\n    print(f"\\n  📈 KEY METRIC: {key_metric_col.upper()}")\n    print(f"  Mean:    {metric.mean():.1f}")\n    print(f"  Median:  {metric.median():.1f}")\n    print(f"  Std Dev: {metric.std():.1f}")\n    print(f"  Range:   {metric.min():.0f} – {metric.max():.0f}")\n    \n    if group_col and group_col in df.columns:\n        print(f"\\n  📋 BREAKDOWN BY {group_col.upper()}")\n        for grp, data in df.groupby(group_col):\n            print(f"  {grp}: mean={data[key_metric_col].mean():.1f}, n={len(data)}")\n    \n    # Findings\n    best = df.loc[metric.idxmax()]\n    worst = df.loc[metric.idxmin()]\n    print(f"\\n  🔍 KEY FINDINGS")\n    print(f"  • Highest: {metric.max():.0f}")\n    print(f"  • Lowest:  {metric.min():.0f}")\n    if metric.mean() > metric.median():\n        print(f"  • Distribution is right-skewed (mean > median)")\n    \n    print(f"\\n{sep}")\n    print(f"  END OF REPORT")\n    print(f"{sep}")\n\n# Test it!\ndf = pd.read_csv('data.csv')\ngenerate_executive_summary(df, "Student Performance Review", "Score", "Subject")`,
        quiz:{question:"Why automate report generation?",options:["It's more fun","Consistency, speed, and eliminates manual errors","Python requires it","Reports look better"],answer:1}
    },
    {
        id:"report_dashboard", module:"m22", title:"22.2 Report with Charts", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Visual Reports — Charts + Text</h2>
<p class="mb-4">The best reports combine <b>text summaries with charts</b>. Build a function that generates both — a complete analysis package ready for stakeholders.</p>`,
        tip:"Tutor's Insight: Executives read the text summary. Analysts study the charts. A good report serves both audiences in one document.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndef full_report(df, title, metric_col, category_col=None):\n    """Generate text report + chart dashboard."""\n    # TEXT SECTION\n    print("═"*50)\n    print(f"  {title}")\n    print(f"  By: Adewale Samson Adeagbo")\n    print("═"*50)\n    print(f"  Records: {len(df)} | Quality: {(1-df.isnull().mean().mean())*100:.0f}%")\n    print(f"  {metric_col}: mean={df[metric_col].mean():.1f}, std={df[metric_col].std():.1f}")\n    \n    if category_col:\n        print(f"\\n  By {category_col}:")\n        for g, d in df.groupby(category_col):\n            print(f"    {g}: {d[metric_col].mean():.1f} (n={len(d)})")\n    \n    # CHART SECTION\n    n_charts = 3 if category_col else 2\n    fig, axes = plt.subplots(1, n_charts, figsize=(5*n_charts, 5))\n    fig.suptitle(title, fontsize=14, fontweight='bold')\n    \n    axes[0].hist(df[metric_col], bins=10, color='#6366f1', edgecolor='white')\n    axes[0].axvline(df[metric_col].mean(), color='red', ls='--')\n    axes[0].set_title(f'{metric_col} Distribution')\n    \n    if category_col:\n        df.groupby(category_col)[metric_col].mean().plot(kind='bar', ax=axes[1], color='#22c55e')\n        axes[1].set_title(f'Mean by {category_col}')\n        axes[1].tick_params(axis='x', rotation=0)\n        \n        axes[2].boxplot([d[metric_col].dropna() for _, d in df.groupby(category_col)],\n                       labels=df[category_col].unique())\n        axes[2].set_title(f'Distribution by {category_col}')\n    else:\n        axes[1].scatter(range(len(df)), df[metric_col], alpha=0.5, color='#f59e0b')\n        axes[1].set_title(f'{metric_col} Spread')\n    \n    plt.tight_layout()\n    plt.show()\n    print("\\n✅ Report complete.")\n\ndf = pd.read_csv('data.csv')\nfull_report(df, "Student Analysis Report", "Score", "Subject")`,
        quiz:{question:"Who benefits from text in a report vs. charts?",options:["Text is for developers, charts for designers","Text is for executives (quick summary), charts for analysts (details)","Everyone prefers charts only","Text and charts serve the same audience"],answer:1}
    },
    {
        id:"report_exercise", module:"m22", title:"22.3 Exercise: Build Your Report Generator", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">📑 Exercise: Universal Report Generator</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a <code>DataReport</code> class that generates a complete analysis for ANY dataset. It must auto-detect column types, handle missing data, produce appropriate charts, and write a text summary.</p></div>`,
        tip:"Exercise Tip: A class lets you store state (the DataFrame, computed stats) and provide multiple methods (summary, charts, recommendations). This is production-level Python.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Universal Report Generator ═══\n# Build a class that works on ANY dataset\n\nclass DataReport:\n    def __init__(self, df, title="Data Report"):\n        self.df = df.copy()\n        self.title = title\n        # TODO: auto-detect numeric and categorical columns\n        # TODO: compute basic stats on init\n    \n    def quality_check(self):\n        """Print data quality summary."""\n        # TODO: missing values, duplicates, data types\n        pass\n    \n    def describe_numeric(self):\n        """Statistics for all numeric columns."""\n        pass\n    \n    def describe_categorical(self):\n        """Value counts for all categorical columns."""\n        pass\n    \n    def visualize(self):\n        """Auto-generate appropriate charts."""\n        pass\n    \n    def full_report(self):\n        """Generate complete report."""\n        self.quality_check()\n        self.describe_numeric()\n        self.describe_categorical()\n        self.visualize()\n\n# Test on education data\ndf = pd.read_csv('data.csv')\nreport = DataReport(df, "Education Analysis")\nreport.full_report()\n\nprint("Build your universal report class!")`,
        quiz:{question:"Why use a class instead of separate functions?",options:["Classes are faster","A class bundles data and related functions together, maintaining state","Python requires classes","Classes use less memory"],answer:1}
    },

    // ═══ MODULE 23: APIs & WEB DATA ═══
    {
        id:"api_concepts", module:"m23", title:"23.1 How APIs Work", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Getting Data from the Internet</h2>
<p class="mb-4">An <b>API (Application Programming Interface)</b> is a structured way to request data from a service. You send a request to a URL, and it returns data — usually as JSON.</p>
<div class="code-block">How API requests work:<br>1. You → send request to URL (endpoint)<br>2. Server → processes your request<br>3. Server → returns data as JSON<br>4. You → parse JSON into Python dict/list<br>5. You → convert to DataFrame for analysis</div>
<p class="mb-2"><b>Key Concepts:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Endpoint</b> — the URL you send requests to</li>
<li><b>GET request</b> — ask for data (most common)</li>
<li><b>Response</b> — the data the server sends back (usually JSON)</li>
<li><b>Status code</b> — 200 = success, 404 = not found, 500 = server error</li>
<li><b>Rate limit</b> — maximum requests per minute/hour</li>
</ul>
<div class="callout cw"><div class="cl">NO PAID APIs NEEDED</div><p>We simulate API responses with local JSON data. The parsing and analysis skills are identical to working with real APIs — the only difference is the data source.</p></div>`,
        tip:"Tutor's Insight: 60% of real-world data science involves getting data FROM somewhere — APIs, databases, files, web scraping. The analysis is only possible after you can reliably access the data.",
        defaultCode:`import json\nimport pandas as pd\n\n# Simulating an API response (in real life, this comes from a URL)\napi_response = json.dumps({\n    "status": "success",\n    "count": 5,\n    "data": [\n        {"id": 1, "city": "Lagos", "temp": 32, "humidity": 78, "condition": "Sunny"},\n        {"id": 2, "city": "Abuja", "temp": 29, "humidity": 65, "condition": "Cloudy"},\n        {"id": 3, "city": "Kano", "temp": 36, "humidity": 45, "condition": "Sunny"},\n        {"id": 4, "city": "Port Harcourt", "temp": 30, "humidity": 85, "condition": "Rainy"},\n        {"id": 5, "city": "Ibadan", "temp": 31, "humidity": 70, "condition": "Cloudy"},\n    ]\n})\n\n# Parse JSON → Python dict\nresult = json.loads(api_response)\n\nprint(f"API Status: {result['status']}")\nprint(f"Records: {result['count']}")\n\n# Convert to DataFrame\ndf = pd.DataFrame(result['data'])\nprint("\\nDataFrame from API:")\nprint(df)\n\n# Analyze\nprint(f"\\nHottest: {df.loc[df['temp'].idxmax(), 'city']} ({df['temp'].max()}°C)")\nprint(f"Most humid: {df.loc[df['humidity'].idxmax(), 'city']} ({df['humidity'].max()}%)")\nprint(f"Conditions: {df['condition'].value_counts().to_dict()}")`,
        quiz:{question:"What format do most APIs return data in?",options:["CSV","HTML","JSON","XML"],answer:2}
    },
    {
        id:"api_parsing", module:"m23", title:"23.2 Parsing Complex JSON", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Navigating Nested API Data</h2>
<p class="mb-4">Real API responses are often deeply nested — objects within objects within arrays. Learning to navigate and flatten this structure is essential.</p>`,
        tip:"Tutor's Insight: The #1 frustration with APIs is nested data. The key is to visualize the structure as a tree, then use list comprehensions or pd.json_normalize() to flatten it.",
        defaultCode:`import json\nimport pandas as pd\n\n# Complex nested API response (simulated)\napi_data = {\n    "school": "HMG Academy",\n    "year": 2026,\n    "departments": [\n        {\n            "name": "Science",\n            "head": "Dr. Okafor",\n            "students": [\n                {"name": "Adewale", "scores": {"maths": 95, "physics": 88, "chemistry": 92}},\n                {"name": "Bisi", "scores": {"maths": 72, "physics": 78, "chemistry": 65}},\n            ]\n        },\n        {\n            "name": "Arts",\n            "head": "Mrs. Adesanya",\n            "students": [\n                {"name": "Chidi", "scores": {"literature": 85, "history": 78, "government": 90}},\n                {"name": "Dayo", "scores": {"literature": 62, "history": 70, "government": 55}},\n            ]\n        }\n    ]\n}\n\nprint(f"School: {api_data['school']}")\nprint(f"Year: {api_data['year']}")\nprint(f"Departments: {len(api_data['departments'])}\\n")\n\n# Flatten nested data\nrows = []\nfor dept in api_data['departments']:\n    for student in dept['students']:\n        row = {\n            'department': dept['name'],\n            'head': dept['head'],\n            'student': student['name'],\n        }\n        row.update(student['scores'])\n        rows.append(row)\n\ndf = pd.DataFrame(rows)\nprint("Flattened to DataFrame:")\nprint(df)\n\n# Analysis\nprint(f"\\nAll numeric columns:")\nnum_cols = df.select_dtypes(include='number').columns.tolist()\nfor col in num_cols:\n    print(f"  {col}: mean={df[col].mean():.1f}")`,
        quiz:{question:"What does 'flattening' nested JSON mean?",options:["Compressing the file","Converting hierarchical data into a flat table (rows and columns)","Deleting nested keys","Sorting the data"],answer:1}
    },
    {
        id:"api_exercise", module:"m23", title:"23.3 Exercise: API Data Pipeline", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🌐 Exercise: Full API Data Pipeline</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a complete pipeline that: receives simulated API data, validates the response, flattens nested structures, cleans the data, analyzes it, and generates a report with charts.</p></div>`,
        tip:"Exercise Tip: In production, you'd add error handling for network failures, rate limiting, and data validation. Even with simulated data, practice these patterns.",
        defaultCode:`import json\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: API Data Pipeline ═══\n\n# Simulated API response (multi-page)\napi_pages = [\n    {"page": 1, "total_pages": 2, "data": [\n        {"id":1,"name":"Product_A","category":"Electronics","sales":150,"revenue":45000},\n        {"id":2,"name":"Product_B","category":"Clothing","sales":300,"revenue":15000},\n        {"id":3,"name":"Product_C","category":"Electronics","sales":80,"revenue":64000},\n    ]},\n    {"page": 2, "total_pages": 2, "data": [\n        {"id":4,"name":"Product_D","category":"Food","sales":500,"revenue":10000},\n        {"id":5,"name":"Product_E","category":"Clothing","sales":200,"revenue":20000},\n        {"id":6,"name":"Product_F","category":"Food","sales":450,"revenue":13500},\n    ]},\n]\n\n# TODO: Combine all pages into one DataFrame\n# TODO: Validate (check for missing values, correct types)\n# TODO: Add computed columns (revenue_per_unit = revenue/sales)\n# TODO: Analysis by category\n# TODO: Find top product by revenue\n# TODO: Create 2 charts\n# TODO: Print summary report\n\nprint("Build your API data pipeline here!")`,
        quiz:{question:"What is pagination in APIs?",options:["A type of error","Splitting large results across multiple pages/requests","A data format","A security feature"],answer:1}
    },

    // ═══ MODULE 24: INTRO TO ML ═══
    {
        id:"ml_concepts", module:"m24", title:"24.1 What is Machine Learning?", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Teaching Computers to Learn from Data</h2>
<p class="mb-4"><b>Machine Learning</b> is the science of making computers learn patterns from data without being explicitly programmed. Instead of writing rules, you show examples and let the algorithm find the rules.</p>
<div class="code-block">Traditional: IF score > 70 THEN "Pass" (human writes rule)<br>ML:         Show 1000 examples of pass/fail → model learns the pattern<br><br>Two main types:<br>• Supervised:   You have labels (pass/fail) → model predicts new labels<br>• Unsupervised: No labels → model finds hidden patterns/groups</div>
<p class="mb-2"><b>Key ML Concepts:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Features (X)</b> — input variables the model uses to predict</li>
<li><b>Target (y)</b> — what you're trying to predict</li>
<li><b>Training</b> — showing the model examples so it learns</li>
<li><b>Testing</b> — checking how well the model works on new data</li>
<li><b>Overfitting</b> — model memorizes training data but fails on new data</li>
</ul>
<div class="callout ci"><div class="cl">NO SKLEARN NEEDED</div><p>We build a simple classifier from scratch using only NumPy. This teaches you what ML libraries do under the hood. Understanding the fundamentals makes you a better ML practitioner.</p></div>`,
        tip:"Tutor's Insight: ML is not magic. Every model is just math: multiply features by weights, add them up, make a prediction. The 'learning' part is adjusting the weights to minimize errors.",
        defaultCode:`import numpy as np\nimport pandas as pd\n\n# ML is just: features × weights = prediction\n# Let's prove it!\n\nnp.random.seed(42)\nn = 20\n\n# Student data (features)\nscores = np.random.normal(65, 15, n).clip(20, 100)\nattend = np.random.normal(80, 12, n).clip(40, 100)\n\n# Target: did they pass? (1=yes, 0=no)\n# Rule: pass if score > 50 AND attendance > 65\nactual = ((scores > 50) & (attend > 65)).astype(int)\n\nprint("=== MACHINE LEARNING FROM SCRATCH ===")\nprint(f"Students: {n}")\nprint(f"Pass rate: {actual.mean():.0%}\\n")\n\n# Simple rule-based "model"\ndef predict(score, attendance):\n    """Our hand-built classifier.\"\"\"\n    # Weighted combination\n    risk_score = score * 0.6 + attendance * 0.4\n    return 1 if risk_score > 55 else 0\n\n# Make predictions\npredictions = np.array([predict(s, a) for s, a in zip(scores, attend)])\n\n# Evaluate accuracy\ncorrect = (predictions == actual).sum()\naccuracy = correct / n\n\nprint("Predictions vs Actual:")\nfor i in range(n):\n    match = "✅" if predictions[i] == actual[i] else "❌"\n    print(f"  Student {i+1}: score={scores[i]:.0f}, attend={attend[i]:.0f} "\n          f"→ predicted={predictions[i]}, actual={actual[i]} {match}")\n\nprint(f"\\nAccuracy: {correct}/{n} = {accuracy:.0%}")\nprint(f"\\n💡 This IS machine learning at its core —")\nprint(f"   features × weights → prediction → check accuracy → adjust weights")`,
        quiz:{question:"In supervised ML, what is the 'target' variable?",options:["The biggest feature","What you're trying to predict","The training data","The model's name"],answer:1}
    },
    {
        id:"ml_train_test", module:"m24", title:"24.2 Train/Test Split", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Testing on Unseen Data</h2>
<p class="mb-4">The golden rule of ML: <b>never test on data the model has already seen</b>. Split your data into training (learn from this) and testing (evaluate on this). This prevents overfitting.</p>
<div class="code-block">from sklearn.model_selection import train_test_split<br>X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)<br><br># We'll do this from scratch — no sklearn needed:</div>`,
        tip:"Tutor's Insight: Overfitting is the #1 ML mistake. A model that's 99% accurate on training data but 50% on test data has memorized, not learned. Always evaluate on held-out test data.",
        defaultCode:`import numpy as np\n\nnp.random.seed(42)\n\n# Generate dataset\nn = 100\nscores = np.random.normal(65, 15, n).clip(20, 100).round(1)\nattend = np.random.normal(80, 12, n).clip(40, 100).round(1)\npassed = ((scores > 50) & (attend > 65)).astype(int)\n\n# Train/Test split from scratch (80/20)\ndef train_test_split(X, y, test_ratio=0.2, seed=42):\n    np.random.seed(seed)\n    n = len(y)\n    indices = np.random.permutation(n)\n    test_size = int(n * test_ratio)\n    test_idx = indices[:test_size]\n    train_idx = indices[test_size:]\n    return X[train_idx], X[test_idx], y[train_idx], y[test_idx]\n\n# Stack features\nX = np.column_stack([scores, attend])\ny = passed\n\nX_train, X_test, y_train, y_test = train_test_split(X, y)\n\nprint(f"Total: {len(y)} | Train: {len(y_train)} | Test: {len(y_test)}")\nprint(f"Train pass rate: {y_train.mean():.0%}")\nprint(f"Test pass rate:  {y_test.mean():.0%}")\n\n# Simple model: weighted threshold\ndef model_predict(X, w_score=0.6, w_attend=0.4, threshold=55):\n    composite = X[:, 0] * w_score + X[:, 1] * w_attend\n    return (composite > threshold).astype(int)\n\n# Evaluate on TRAINING data\ntrain_pred = model_predict(X_train)\ntrain_acc = (train_pred == y_train).mean()\n\n# Evaluate on TEST data (the real test!)\ntest_pred = model_predict(X_test)\ntest_acc = (test_pred == y_test).mean()\n\nprint(f"\\n📊 MODEL EVALUATION")\nprint(f"Training accuracy: {train_acc:.0%}")\nprint(f"Testing accuracy:  {test_acc:.0%}")\n\nif test_acc > 0.8:\n    print("\\n✅ Good model — performs well on unseen data!")\nelif test_acc > 0.6:\n    print("\\n⚠️ Decent — but could be improved")\nelse:\n    print("\\n❌ Poor — model may be overfitting or underfitting")`,
        quiz:{question:"Why do we split data into train and test sets?",options:["To save memory","To test if the model works on data it has NEVER seen before","To make training faster","Because sklearn requires it"],answer:1}
    },
    {
        id:"ml_exercise", module:"m24", title:"24.3 Exercise: Build a Classifier", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🤖 Exercise: Student Risk Classifier</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a complete classification pipeline from scratch: generate student data, split into train/test, build a rule-based classifier, evaluate performance, and visualize results.</p></div>`,
        tip:"Exercise Tip: Start simple — a single threshold. Then make it more complex — weighted combination. Track how accuracy changes. This is how real ML research works: iterate and improve.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Build a Student Risk Classifier ═══\nnp.random.seed(2024)\n\n# TODO: Generate 100 students with: maths, english, science, attendance\n# TODO: Create target variable 'at_risk' (1 if avg < 50 OR attend < 65)\n# TODO: Split into 80% train, 20% test\n# TODO: Build a classifier function\n# TODO: Evaluate on train AND test\n# TODO: Calculate accuracy, precision (of the at-risk predictions)\n# TODO: Visualize: scatter plot with color = predicted risk\n# TODO: Print confusion matrix style results:\n#   True Positives: correctly predicted at-risk\n#   True Negatives: correctly predicted safe\n#   False Positives: predicted at-risk but actually safe\n#   False Negatives: predicted safe but actually at-risk\n\nprint("Build your complete ML pipeline here!")\nprint("This is data science in action!")`,
        quiz:{question:"What is a False Negative in a risk classifier?",options:["Correctly identifying an at-risk student","Predicting 'safe' for a student who is actually at-risk","Predicting 'at-risk' for a safe student","Any wrong prediction"],answer:1}
    },

    // ═══ MODULE 25: PRACTICE LAB — ADVANCED ═══
    {
        id:"ex_advanced_eda", module:"m25", title:"25.1 Exercise: Industry EDA", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🔥 Exercise: Complete Industry Analysis</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Perform a complete, industry-grade analysis on a synthetic employee dataset. This is the type of analysis you'd do on your first day at a data science job.</p></div>`,
        tip:"Exercise Tip: Imagine your manager will read this. Structure your output as: Executive Summary → Key Findings → Detailed Analysis → Recommendations. Lead with the most important insight.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ INDUSTRY EXERCISE: Employee Analytics ═══\nnp.random.seed(2024)\nn = 200\n\ndf = pd.DataFrame({\n    'emp_id': range(1, n+1),\n    'dept': np.random.choice(['Engineering','Sales','Marketing','HR','Finance','Operations'], n),\n    'level': np.random.choice(['Junior','Mid','Senior','Lead'], n, p=[0.4,0.3,0.2,0.1]),\n    'salary': np.random.normal(90, 30, n).clip(30, 250).round(0) * 1000,\n    'tenure': np.random.exponential(3, n).clip(0.5, 20).round(1),\n    'satisfaction': np.random.uniform(1, 10, n).round(1),\n    'performance': np.random.normal(7, 1.5, n).clip(1, 10).round(1),\n    'overtime_hrs': np.random.exponential(5, n).clip(0, 30).round(0),\n    'left': np.random.choice([0, 1], n, p=[0.82, 0.18]),\n})\n\n# YOUR ANALYSIS MUST INCLUDE:\n# 1. Data quality assessment\n# 2. Salary analysis by department and level\n# 3. Attrition analysis (who leaves and why?)\n# 4. Satisfaction vs performance relationship\n# 5. Overtime impact on attrition\n# 6. At least 4 professional charts\n# 7. Executive summary with recommendations\n\nprint("Build your industry-grade analysis here!")`,
        quiz:{question:"What should be the FIRST thing in a business report?",options:["Methodology","Raw data tables","Executive summary with key findings","Code documentation"],answer:2}
    },
    {
        id:"ex_advanced_pipeline", module:"m25", title:"25.2 Exercise: Production Pipeline", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🔥 Exercise: Automated Analysis System</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a reusable analysis system with functions for: data loading, validation, cleaning, feature engineering, analysis, visualization, and report generation. It must work on ANY dataset.</p></div>`,
        tip:"Exercise Tip: This is what senior data scientists build. Each function should have a docstring, handle errors gracefully, and produce clear output. Code quality matters as much as results.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Production Analysis System ═══\n# Build a complete, reusable system\n\ndef load_and_validate(filepath, required_cols=None):\n    """Load data with full validation."""\n    pass\n\ndef clean_data(df):\n    """Clean: missing values, duplicates, outliers."""\n    pass\n\ndef engineer_features(df, numeric_cols, category_col=None):\n    """Create derived columns: averages, grades, risk levels."""\n    pass\n\ndef analyze(df, metric_col, group_col=None):\n    """Generate descriptive statistics and group comparisons."""\n    pass\n\ndef visualize(df, metric_col, group_col=None):\n    """Create a 4-chart dashboard."""\n    pass\n\ndef generate_report(df, title):\n    """Run the complete pipeline and generate report."""\n    pass\n\n# Test: should work on ANY dataset\ndf = pd.read_csv('data.csv')\ngenerate_report(df, "Universal Analysis")\n\nprint("Build your production system here!")`,
        quiz:{question:"What makes code 'production-ready'?",options:["It's long","Error handling, documentation, reusability, and clear output","It uses classes","It runs fast"],answer:1}
    },

    // ═══ MODULE 26: CERTIFICATION EXAMS ═══
    {
        id:"cert_foundations", module:"m26", title:"26.1 Certification: Python Foundations", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 CERTIFICATION EXAM — Level 1: Foundations</h2>
<div class="callout ct"><div class="cl">EXAM INSTRUCTIONS</div><p>Complete all tasks below to earn your <b>Python Foundations Certificate</b>. You must demonstrate mastery of variables, types, operators, strings, loops, and functions. Write all code from memory — no copying from lessons.</p></div>
<p class="mb-2"><b>Tasks (ALL required for certification):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Task 1:</b> Create variables of all 5 types (int, float, str, bool, None) and print each with its type</li>
<li><b>Task 2:</b> Write a function that takes a score and returns the grade (A/B/C/D/F)</li>
<li><b>Task 3:</b> Using a loop, process a list of 8 scores: print each with its grade, then print the average and pass rate</li>
<li><b>Task 4:</b> Use list comprehension to filter scores ≥ 60 and create a new list of (score, grade) tuples</li>
<li><b>Task 5:</b> Format the output professionally using f-strings with alignment and decimal places</li>
</ul>
<div class="callout cw"><div class="cl">PASSING CRITERIA</div><p>All 5 tasks must produce correct output. Code must run without errors. Output must be formatted professionally.</p></div>`,
        tip:"Certification Tip: This exam tests whether you can write Python from memory. If you need to look up syntax, review the lessons first. The goal is fluency, not memorization.",
        defaultCode:`# ═══════════════════════════════════════════════\n# CERTIFICATION EXAM — Level 1: Python Foundations\n# Candidate: [Your Name]\n# Date: 2026\n# ═══════════════════════════════════════════════\n\n# Task 1: Variables of ALL 5 types\n# Write your code here\n\n# Task 2: Grade calculator function\n# Write your code here\n\n# Task 3: Loop through scores with analysis\nscores = [85, 42, 91, 67, 55, 78, 33, 96]\n# Write your code here\n\n# Task 4: List comprehension\n# Write your code here\n\n# Task 5: Formatted output\n# Write your code here\n\nprint("\\n✅ Certification exam submitted!")\nprint("If all 5 tasks pass → Python Foundations Certificate earned!")`,
        quiz:{question:"What are the 5 basic Python data types?",options:["int, float, str, bool, NoneType","int, float, str, list, dict","number, text, boolean, array, object","int, float, string, true, false"],answer:0}
    },
    {
        id:"cert_analyst", module:"m26", title:"26.2 Certification: Data Analyst", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 CERTIFICATION EXAM — Level 2: Data Analyst</h2>
<div class="callout ct"><div class="cl">EXAM INSTRUCTIONS</div><p>Complete all tasks to earn your <b>Data Analyst Certificate</b>. You must demonstrate Pandas mastery, data cleaning, and basic analysis.</p></div>
<p class="mb-2"><b>Tasks:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Task 1:</b> Create a DataFrame with 15+ records, at least 5 columns</li>
<li><b>Task 2:</b> Inject and then clean: missing values, duplicates, type errors</li>
<li><b>Task 3:</b> Engineer 3 new columns (average, grade, risk status)</li>
<li><b>Task 4:</b> GroupBy analysis with at least 2 different aggregations</li>
<li><b>Task 5:</b> Create a 2-chart visualization</li>
<li><b>Task 6:</b> Print a formatted summary report</li>
</ul>`,
        tip:"Certification Tip: Quality over quantity. A clean, well-documented 30-line analysis beats a messy 100-line one. Employers hire for clarity of thought.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# CERTIFICATION EXAM — Level 2: Data Analyst\n# Candidate: [Your Name]\n# ═══════════════════════════════════════════════\n\n# Task 1-6: Complete all requirements\n# Write your code from scratch — no copying!\n\nprint("Build your complete certification exam here!")\nprint("This earns you the Data Analyst Certificate!")`,
        quiz:{question:"What does df.groupby('col').agg() do?",options:["Deletes grouped data","Splits data into groups and applies multiple aggregate functions","Sorts the data","Merges two DataFrames"],answer:1}
    },
    {
        id:"cert_specialist", module:"m26", title:"26.3 Certification: Data Specialist", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 CERTIFICATION EXAM — Level 3: Data Specialist</h2>
<div class="callout ct"><div class="cl">EXAM INSTRUCTIONS</div><p>Complete all tasks for your <b>Data Specialist Certificate</b>. You must demonstrate advanced Pandas, statistical analysis, and professional visualization.</p></div>
<p class="mb-2"><b>Tasks:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Task 1:</b> Generate synthetic data (50+ records) with realistic distributions</li>
<li><b>Task 2:</b> Multi-source data merge (create and join 3 tables)</li>
<li><b>Task 3:</b> Complete EDA: quality, univariate, bivariate analysis</li>
<li><b>Task 4:</b> Statistical summary with correlation and outlier detection</li>
<li><b>Task 5:</b> 4-chart professional dashboard</li>
<li><b>Task 6:</b> Executive report with findings and recommendations</li>
</ul>`,
        tip:"Certification Tip: At this level, your report should be good enough to present to a non-technical manager. Clear language, labeled charts, actionable insights.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# CERTIFICATION EXAM — Level 3: Data Specialist\n# ═══════════════════════════════════════════════\n\n# Complete all 6 tasks from scratch\n# This is a professional-grade deliverable\n\nprint("Build your Data Specialist certification here!")`,
        quiz:{question:"What makes an EDA 'complete'?",options:["Running df.describe()","Structure → Quality → Univariate → Bivariate → Outliers → Hypotheses → Summary","Creating one chart","Counting rows and columns"],answer:1}
    },
    {
        id:"cert_expert", module:"m26", title:"26.4 Certification: Data Expert", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 CERTIFICATION EXAM — Level 4: Data Expert</h2>
<div class="callout ct"><div class="cl">EXAM INSTRUCTIONS</div><p>The <b>Data Expert Certificate</b> requires building a complete, production-quality analysis project from scratch — including A/B testing concepts, normalization, and ML readiness.</p></div>
<p class="mb-2"><b>Tasks:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Task 1:</b> Full data pipeline (generate → clean → engineer → analyze)</li>
<li><b>Task 2:</b> A/B test simulation with permutation test and p-value</li>
<li><b>Task 3:</b> Feature normalization (Min-Max AND Z-score)</li>
<li><b>Task 4:</b> Build a simple classifier with train/test evaluation</li>
<li><b>Task 5:</b> 6-chart dashboard with professional styling</li>
<li><b>Task 6:</b> Complete executive report with statistical evidence</li>
</ul>`,
        tip:"Certification Tip: This is the level where you can legitimately put 'Data Scientist' on your LinkedIn. Your work should be indistinguishable from a professional analysis.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# CERTIFICATION EXAM — Level 4: Data Expert\n# Candidate: [Your Name]\n# Mentor: Adewale Samson Adeagbo\n# ═══════════════════════════════════════════════\n\n# Complete all 6 tasks\n# This is EXPERT level — portfolio quality required\n\nprint("Build your Data Expert certification project here!")\nprint("This project goes on your portfolio and LinkedIn!")`,
        quiz:{question:"What separates a junior from a senior data scientist?",options:["Knowing more Python syntax","Ability to communicate findings clearly and build production-quality pipelines","Using more libraries","Working faster"],answer:1}
    },
    {
        id:"cert_master", module:"m26", title:"26.5 Certification: Grand Master", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 GRAND MASTER CERTIFICATION</h2>
<div class="callout ct"><div class="cl">FINAL EXAM — THE ULTIMATE TEST</div><p>The <b>Grand Master Certificate</b> is the highest achievement. You must build a complete, industry-ready data science project that could be presented to a real company. This project demonstrates mastery of EVERY concept taught in the entire curriculum.</p></div>
<p class="mb-2"><b>Requirements (ALL mandatory):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>100+ records of synthetic data with realistic distributions</li>
<li>Full cleaning pipeline with quality scorecard</li>
<li>10+ engineered features</li>
<li>Complete EDA (univariate, bivariate, multivariate)</li>
<li>Statistical testing with significance conclusions</li>
<li>Data normalization</li>
<li>Simple ML classifier with train/test evaluation</li>
<li>8+ chart professional dashboard</li>
<li>Executive report with 5+ actionable recommendations</li>
<li>Code must be organized with functions and documentation</li>
</ul>
<div class="callout cw"><div class="cl">THIS IS YOUR PORTFOLIO MASTERPIECE</div><p>Put this on GitHub. Link it on LinkedIn. Show it in interviews. A well-executed Grand Master project demonstrates more skill than any course certificate from an online platform.</p></div>`,
        tip:"Grand Master Tip: Choose a domain you're passionate about — education, healthcare, finance, e-commerce, sports. Passion shows in the quality of your analysis. This project IS your resume.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════════════\n# GRAND MASTER CERTIFICATION PROJECT\n# PyData-Flow Pro — Highest Achievement\n#\n# Candidate: [Your Full Name]\n# Date: 2026\n# Mentor: Adewale Samson Adeagbo\n# Platform: PyData-Flow Pro\n# ═══════════════════════════════════════════════════════\n\n# This is your magnum opus.\n# Build the most impressive data science project you can.\n# Every concept from 120 lessons should be represented.\n\n# Structure:\n# 1. EXECUTIVE SUMMARY\n# 2. DATA GENERATION & LOADING\n# 3. DATA QUALITY ASSESSMENT\n# 4. CLEANING PIPELINE\n# 5. FEATURE ENGINEERING\n# 6. EXPLORATORY DATA ANALYSIS\n# 7. STATISTICAL TESTING\n# 8. NORMALIZATION & ML READINESS\n# 9. SIMPLE MODEL + EVALUATION\n# 10. DASHBOARD (8+ charts)\n# 11. FINDINGS & RECOMMENDATIONS\n# 12. CONCLUSION\n\nnp.random.seed(2024)\n\nprint("Build your Grand Master project here!")\nprint("This is the culmination of your entire learning journey.")\nprint("Make it extraordinary.")`,
        quiz:{question:"What is the single most important quality of a portfolio project?",options:["Length of code","Use of advanced libraries","Clear communication of insights with actionable recommendations","Number of charts"],answer:2}
    },
,
// ═══ MODULE 27: PYTHON DEEP DIVE ═══
    {
        id:"scope_vars", module:"m27", title:"27.1 Scope & Variable Lifetime", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Where Variables Live and Die</h2>
<p class="mb-4"><b>Scope</b> determines where a variable can be accessed. Variables created inside a function are <b>local</b> — they exist only during that function call and are destroyed when it returns.</p>
<div class="code-block">x = 10  # Global scope<br><br>def my_func():<br>    y = 20  # Local scope — only exists inside my_func<br>    print(x)  # Can READ global x → 10<br>    print(y)  # Can access local y → 20<br><br>my_func()<br>print(x)  # Works → 10<br># print(y)  # ERROR! y doesn't exist here</div>
<p class="mb-2"><b>Scope Rules (LEGB):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>L</b>ocal — inside the current function</li>
<li><b>E</b>nclosing — inside an outer function (for nested functions)</li>
<li><b>G</b>lobal — at the module/file level</li>
<li><b>B</b>uilt-in — Python's built-in names (print, len, etc.)</li>
</ul>
<div class="callout cw"><div class="cl">COMMON MISTAKE</div><p>Never use <code>global</code> keyword in data science code. Instead, pass values as function parameters and use <code>return</code> to send results back. This makes your code testable and predictable.</p></div>`,
        tip:"Tutor's Insight: 90% of 'variable not defined' errors in data science come from scope confusion — defining a variable inside a function then trying to use it outside. Always return what you need.",
        defaultCode:`# Understanding scope\ncount = 0  # Global\n\ndef analyze(scores):\n    # Local variables\n    total = sum(scores)\n    avg = total / len(scores)\n    passed = sum(1 for s in scores if s >= 50)\n    rate = passed / len(scores)\n    \n    # Return results (don't use global!)\n    return {\n        "total": total,\n        "average": round(avg, 1),\n        "passed": passed,\n        "rate": f"{rate:.0%}"\n    }\n\n# Call the function and capture the return value\nmaths = [85, 42, 91, 67, 55, 78, 33, 96]\nresult = analyze(maths)\n\nprint("=== Analysis Results ===")\nfor key, val in result.items():\n    print(f"  {key}: {val}")\n\n# These local variables don't exist here:\n# print(total)  # NameError!\n# print(avg)    # NameError!\n# But the result dict does:\nprint(f"\\nAverage from result: {result['average']}")`,
        quiz:{question:"What happens if you try to access a local variable outside its function?",options:["It returns None","It returns 0","NameError — the variable doesn't exist there","It works fine"],answer:2}
    },
    {
        id:"args_kwargs", module:"m27", title:"27.2 *args and **kwargs", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Flexible Function Parameters</h2>
<p class="mb-4"><code>*args</code> collects extra positional arguments as a tuple. <code>**kwargs</code> collects extra keyword arguments as a dictionary. Together, they make functions incredibly flexible.</p>
<div class="code-block">def report(*scores, student="Unknown", **options):<br>    print(f"Student: {student}")<br>    print(f"Scores: {scores}")  # tuple<br>    print(f"Options: {options}")  # dict<br><br>report(85, 92, 78, student="Adewale", subject="Maths", term="T1")</div>
<p class="mb-2"><b>When to Use:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>*args</code> — when you don't know how many values will be passed</li>
<li><code>**kwargs</code> — when you want to accept optional named parameters</li>
<li>Both are used extensively in Pandas and Matplotlib (that's why <code>plt.plot()</code> accepts so many options)</li>
</ul>`,
        tip:"Tutor's Insight: Every time you write df.groupby('col', as_index=False) or plt.bar(x, y, color='blue', edgecolor='white'), you're using **kwargs. Understanding this makes library documentation make sense.",
        defaultCode:`# Build a flexible analysis function\ndef analyze(*scores, label="Dataset", passing_mark=50, show_detail=False):\n    """Analyze any number of scores with configurable options."""\n    scores = list(scores)\n    n = len(scores)\n    avg = sum(scores) / n\n    passed = sum(1 for s in scores if s >= passing_mark)\n    \n    print(f"📊 {label} ({n} scores, pass mark: {passing_mark})")\n    print(f"   Average: {avg:.1f}")\n    print(f"   Pass rate: {passed}/{n} = {passed/n:.0%}")\n    \n    if show_detail:\n        for i, s in enumerate(scores, 1):\n            status = "✅" if s >= passing_mark else "❌"\n            print(f"   Score {i}: {s} {status}")\n    \n    return avg\n\n# Call with different argument counts\nanalyze(85, 92, 78, label="Maths")\nprint()\nanalyze(55, 42, 38, 71, 63, label="Science", passing_mark=45, show_detail=True)\nprint()\n\n# Unpack a list into *args\nall_scores = [88, 72, 95, 61, 83, 77]\nanalyze(*all_scores, label="All Subjects", show_detail=False)`,
        quiz:{question:"What does *args collect?",options:["Named arguments as a dict","Extra positional arguments as a tuple","The first argument only","All arguments as a list"],answer:1}
    },
    {
        id:"generators", module:"m27", title:"27.3 Generators & Iterators", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Memory-Efficient Data Processing</h2>
<p class="mb-4">A <b>generator</b> produces values one at a time using <code>yield</code> instead of <code>return</code>. Unlike lists, generators don't store all values in memory — they compute each value on demand.</p>
<div class="code-block">def count_up(n):<br>    i = 0<br>    while i < n:<br>        yield i  # Produces one value, then pauses<br>        i += 1<br><br>for num in count_up(5):<br>    print(num)  # 0, 1, 2, 3, 4</div>
<p class="mb-2"><b>Why Generators Matter:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Memory efficient</b> — process 1 billion rows without loading all into memory</li>
<li><b>Lazy evaluation</b> — values computed only when needed</li>
<li><b>Pipeline friendly</b> — chain generators for multi-step processing</li>
<li>Pandas' <code>read_csv(chunksize=1000)</code> returns a generator!</li>
</ul>
<div class="callout ci"><div class="cl">DATA SCIENCE CONNECTION</div><p>When processing a 10GB CSV file, you can't load it all into memory. <code>pd.read_csv('huge.csv', chunksize=10000)</code> returns a generator that processes 10,000 rows at a time. Understanding generators is understanding how big data processing works.</p></div>`,
        tip:"Tutor's Insight: Generator expressions look like list comprehensions but with () instead of []: (x**2 for x in range(1000000)) uses almost zero memory, while [x**2 for x in range(1000000)] uses ~8MB.",
        defaultCode:`# Generator basics\ndef score_generator(n, seed=42):\n    """Generate n random scores one at a time."""\n    import random\n    random.seed(seed)\n    for i in range(n):\n        yield round(random.gauss(65, 15))\n\n# Process scores one at a time (memory efficient)\nprint("=== Processing scores with generator ===")\ntotal = 0\ncount = 0\npassed = 0\n\nfor score in score_generator(1000):\n    total += score\n    count += 1\n    if score >= 50:\n        passed += 1\n\nprint(f"Processed {count} scores")\nprint(f"Average: {total/count:.1f}")\nprint(f"Pass rate: {passed/count:.0%}")\n\n# Generator expression (like list comprehension but lazy)\nnumbers = range(1, 11)\nsquares_list = [x**2 for x in numbers]  # Creates list in memory\nsquares_gen = (x**2 for x in numbers)   # Creates generator (lazy)\n\nprint(f"\\nList: {squares_list}")  # All values stored\nprint(f"Generator: {squares_gen}")  # Just an object\nprint(f"Sum from generator: {sum(squares_gen)}")  # Computed on demand\n\n# Chaining generators (pipeline)\ndef clean_scores(scores):\n    for s in scores:\n        if 0 <= s <= 100:  # Filter valid\n            yield s\n\ndef grade_scores(scores):\n    for s in scores:\n        yield (s, "Pass" if s >= 50 else "Fail")\n\n# Pipeline: generate → clean → grade\nraw = score_generator(20)\ncleaned = clean_scores(raw)\ngraded = grade_scores(cleaned)\n\nprint("\\n=== Generator Pipeline ===")\nfor score, grade in graded:\n    print(f"  {score}: {grade}")`,
        quiz:{question:"What keyword makes a function a generator?",options:["return","generate","yield","iter"],answer:2}
    },
    {
        id:"file_io", module:"m27", title:"27.4 File I/O & Context Managers", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Reading and Writing Files</h2>
<p class="mb-4">The <code>with</code> statement (context manager) ensures files are properly closed after use — even if an error occurs. This is the professional way to handle files.</p>
<div class="code-block">with open('output.txt', 'w') as f:<br>    f.write("Hello, World!\\n")<br>    f.write("Line 2\\n")<br># File automatically closed here<br><br>with open('output.txt', 'r') as f:<br>    content = f.read()<br>    print(content)</div>
<p class="mb-2"><b>File Modes:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>'r'</code> — read (default) | <code>'w'</code> — write (overwrites) | <code>'a'</code> — append</li>
<li><code>'rb'</code>/<code>'wb'</code> — binary mode (for images, etc.)</li>
<li><code>f.read()</code> — read entire file | <code>f.readline()</code> — one line | <code>f.readlines()</code> — all lines as list</li>
</ul>`,
        tip:"Tutor's Insight: In Pyodide (browser Python), file I/O works with the virtual filesystem. In real Python on your computer, you'd use actual file paths. The concepts are identical.",
        defaultCode:`# Write a report to a file\nstudents = [\n    ("Adewale", 95, "A"), ("Bisi", 72, "B"),\n    ("Chidi", 88, "B"), ("Dayo", 45, "F"),\n    ("Eka", 78, "B"), ("Femi", 55, "C"),\n]\n\n# Write report\nwith open('report.txt', 'w') as f:\n    f.write("="*40 + "\\n")\n    f.write("  STUDENT PERFORMANCE REPORT\\n")\n    f.write("  By: Adewale Samson Adeagbo\\n")\n    f.write("="*40 + "\\n\\n")\n    \n    for name, score, grade in students:\n        status = "PASS" if score >= 50 else "FAIL"\n        f.write(f"  {name:<10s} {score:>3d}%  Grade {grade}  [{status}]\\n")\n    \n    avg = sum(s[1] for s in students) / len(students)\n    f.write(f"\\n  Average: {avg:.1f}%\\n")\n    f.write(f"  Pass rate: {sum(1 for s in students if s[1]>=50)/len(students):.0%}\\n")\n\nprint("✅ Report written to 'report.txt'")\n\n# Read it back\nwith open('report.txt', 'r') as f:\n    content = f.read()\n\nprint("\\n📄 File contents:")\nprint(content)\n\n# Read line by line (memory efficient for large files)\nprint("\\n📋 Line by line:")\nwith open('report.txt', 'r') as f:\n    for i, line in enumerate(f, 1):\n        print(f"  Line {i}: {line.rstrip()}")`,
        quiz:{question:"What does the 'with' statement guarantee?",options:["The file opens faster","The file is automatically closed even if an error occurs","The file is read-only","The file is encrypted"],answer:1}
    },

    // ═══ MODULE 28: DATA ENGINEERING ═══
    {
        id:"etl_concepts", module:"m28", title:"28.1 ETL — Extract, Transform, Load", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">The Data Pipeline Pattern</h2>
<p class="mb-4"><b>ETL</b> is the standard pattern for moving data from source to analysis-ready form. Every data science project follows this pattern, whether you realize it or not.</p>
<div class="code-block">def extract():    # Get raw data<br>    return pd.read_csv('raw_data.csv')<br><br>def transform(df):  # Clean & reshape<br>    df = df.dropna()<br>    df['score'] = df['score'].clip(0, 100)<br>    return df<br><br>def load(df):     # Save or present<br>    df.to_csv('clean_data.csv', index=False)<br>    return df<br><br># The pipeline<br>raw = extract()<br>clean = transform(raw)<br>final = load(clean)</div>
<p class="mb-2"><b>Why ETL Matters:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Makes data processing <b>reproducible</b> — same input always gives same output</li>
<li>Each step can be <b>tested independently</b></li>
<li>Easy to <b>modify one step</b> without breaking others</li>
<li>This is literally what tools like Apache Spark, Airflow, and dbt do at scale</li>
</ul>`,
        tip:"Tutor's Insight: At every data science job I've held, the first thing I built was an ETL pipeline. The analysis is only as good as the data feeding it. Master ETL and you master data science foundations.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ PROFESSIONAL ETL PIPELINE ═══\n\ndef extract(source="generated"):\n    """Step 1: Extract — get raw data from source."""\n    print("📥 EXTRACT: Loading data...")\n    np.random.seed(42)\n    n = 50\n    df = pd.DataFrame({\n        'id': range(1, n+1),\n        'name': [f"Student_{i:02d}" for i in range(1, n+1)],\n        'score': np.random.normal(65, 18, n).clip(-10, 120).round(1),  # Has invalid values!\n        'attend': np.random.normal(80, 15, n).round(1),\n        'gender': np.random.choice(['M','F','m','f','Male','Female'], n),  # Inconsistent!\n    })\n    # Inject missing values\n    for col in ['score', 'attend']:\n        df.loc[np.random.choice(n, 4, replace=False), col] = np.nan\n    print(f"   Extracted {len(df)} rows, {df.isnull().sum().sum()} missing values")\n    return df\n\ndef transform(df):\n    """Step 2: Transform — clean, validate, engineer features."""\n    print("\\n🔄 TRANSFORM: Cleaning data...")\n    df = df.copy()\n    \n    # Fix missing values\n    df['score'] = df['score'].fillna(df['score'].median())\n    df['attend'] = df['attend'].fillna(df['attend'].median())\n    \n    # Clip out-of-range values\n    df['score'] = df['score'].clip(0, 100)\n    df['attend'] = df['attend'].clip(0, 100)\n    \n    # Standardize gender\n    df['gender'] = df['gender'].str.upper().str[0]\n    \n    # Feature engineering\n    df['grade'] = pd.cut(df['score'], bins=[0,40,50,60,70,100], labels=['F','D','C','B','A'])\n    df['risk'] = np.where((df['score']<50) | (df['attend']<65), 'At Risk', 'OK')\n    \n    print(f"   Cleaned: {df.isnull().sum().sum()} missing, {len(df)} rows")\n    return df\n\ndef load(df, report=True):\n    """Step 3: Load — present results."""\n    print("\\n📤 LOAD: Generating output...")\n    if report:\n        print(f"\\n{'='*45}")\n        print(f"  📊 ETL PIPELINE REPORT")\n        print(f"  By: Adewale Samson Adeagbo")\n        print(f"{'='*45}")\n        print(f"  Records: {len(df)}")\n        print(f"  Average: {df['score'].mean():.1f}")\n        print(f"  Pass rate: {(df['score']>=50).mean():.0%}")\n        print(f"  At risk: {(df['risk']=='At Risk').sum()}")\n        print(f"\\n  Grade distribution:")\n        for g, c in df['grade'].value_counts().sort_index().items():\n            print(f"    {g}: {c}")\n    return df\n\n# ═══ RUN THE PIPELINE ═══\nraw = extract()\nclean = transform(raw)\nfinal = load(clean)`,
        quiz:{question:"In ETL, what does 'Transform' do?",options:["Downloads data","Cleans, validates, and reshapes data","Saves to database","Visualizes results"],answer:1}
    },
    {
        id:"data_validation", module:"m28", title:"28.2 Data Validation Schemas", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Catching Bad Data Before It Breaks Things</h2>
<p class="mb-4"><b>Data validation</b> checks that incoming data meets expected rules BEFORE analysis begins. It's the security guard at the door of your pipeline.</p>
<div class="code-block">def validate(df, schema):<br>    errors = []<br>    for col, rules in schema.items():<br>        if col not in df.columns:<br>            errors.append(f"Missing column: {col}")<br>        elif rules.get('min') and df[col].min() < rules['min']:<br>            errors.append(f"{col} below minimum")<br>    return errors</div>`,
        tip:"Tutor's Insight: In production, data arrives from external sources you don't control. Without validation, a single bad value ('N/A' where a number should be) can crash your entire pipeline at 3am.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndef validate_dataframe(df, schema):\n    """Validate a DataFrame against a schema of rules.\n    Returns (is_valid, list_of_errors).\"\"\"\n    errors = []\n    \n    # Check required columns\n    for col, rules in schema.items():\n        if col not in df.columns:\n            errors.append(f"❌ Missing required column: '{col}'")\n            continue\n        \n        # Check for nulls\n        if rules.get('required', False) and df[col].isnull().any():\n            n_null = df[col].isnull().sum()\n            errors.append(f"⚠️ '{col}' has {n_null} null values")\n        \n        # Check numeric range\n        if 'min_val' in rules:\n            below = (df[col] < rules['min_val']).sum()\n            if below > 0:\n                errors.append(f"⚠️ '{col}': {below} values below {rules['min_val']}")\n        \n        if 'max_val' in rules:\n            above = (df[col] > rules['max_val']).sum()\n            if above > 0:\n                errors.append(f"⚠️ '{col}': {above} values above {rules['max_val']}")\n        \n        # Check allowed values\n        if 'allowed' in rules:\n            invalid = ~df[col].isin(rules['allowed'])\n            if invalid.sum() > 0:\n                bad = df[col][invalid].unique()[:3]\n                errors.append(f"⚠️ '{col}': invalid values found: {list(bad)}")\n        \n        # Check data type\n        if 'dtype' in rules:\n            if not df[col].dtype.name.startswith(rules['dtype']):\n                errors.append(f"⚠️ '{col}': expected {rules['dtype']}, got {df[col].dtype}")\n    \n    is_valid = len(errors) == 0\n    return is_valid, errors\n\n# Define schema\nstudent_schema = {\n    'name':   {'required': True, 'dtype': 'object'},\n    'score':  {'required': True, 'dtype': 'float', 'min_val': 0, 'max_val': 100},\n    'gender': {'required': True, 'allowed': ['M', 'F']},\n    'attend': {'required': False, 'dtype': 'float', 'min_val': 0, 'max_val': 100},\n}\n\n# Test with messy data\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'name': ['Adewale', 'Bisi', None, 'Dayo', 'Eka'],\n    'score': [95.0, -5.0, 72.0, 150.0, 88.0],\n    'gender': ['M', 'F', 'X', 'Male', 'F'],\n    'attend': [98.0, None, 85.0, 72.0, 91.0],\n})\n\nprint("=== DATA VALIDATION ===")\nprint(df)\nprint()\n\nvalid, errors = validate_dataframe(df, student_schema)\nprint(f"Valid: {valid}")\nif errors:\n    print(f"\\n{len(errors)} issues found:")\n    for e in errors:\n        print(f"  {e}")\nelse:\n    print("✅ All checks passed!")`,
        quiz:{question:"Why validate data before analysis?",options:["To make it look pretty","To catch bad values that would crash or corrupt your results","It's faster","Python requires it"],answer:1}
    },
    {
        id:"chunked_processing", module:"m28", title:"28.3 Processing Large Files", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">When Data Doesn't Fit in Memory</h2>
<p class="mb-4">Real datasets can be 10GB+. Loading them entirely into memory crashes your computer. <b>Chunked processing</b> reads and processes data in manageable pieces.</p>
<div class="code-block"># Process a huge CSV in chunks of 10,000 rows<br>chunks = pd.read_csv('huge.csv', chunksize=10000)<br>results = []<br>for chunk in chunks:<br>    # Process each chunk<br>    result = chunk.groupby('col').mean()<br>    results.append(result)<br>final = pd.concat(results)</div>`,
        tip:"Tutor's Insight: The ability to process data larger than your RAM is what separates a data scientist from someone who can 'use Pandas'. This skill is required for any serious data engineering role.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# Simulate a large file by creating chunks\nnp.random.seed(42)\n\ndef generate_large_dataset(n_chunks=5, chunk_size=20):\n    """Simulate reading a large file in chunks."""\n    for i in range(n_chunks):\n        chunk = pd.DataFrame({\n            'id': range(i*chunk_size+1, (i+1)*chunk_size+1),\n            'score': np.random.normal(65, 15, chunk_size).clip(0, 100).round(1),\n            'dept': np.random.choice(['Science','Arts','Commerce'], chunk_size),\n        })\n        yield chunk  # Generator — one chunk at a time!\n\n# Process chunks without loading everything\nprint("=== CHUNKED PROCESSING ===")\ntotal_rows = 0\nchunk_summaries = []\n\nfor i, chunk in enumerate(generate_large_dataset(n_chunks=5, chunk_size=20)):\n    # Process each chunk independently\n    summary = {\n        'chunk': i+1,\n        'rows': len(chunk),\n        'mean': chunk['score'].mean(),\n        'pass_rate': (chunk['score'] >= 50).mean(),\n    }\n    chunk_summaries.append(summary)\n    total_rows += len(chunk)\n    print(f"  Chunk {i+1}: {len(chunk)} rows, avg={summary['mean']:.1f}")\n\n# Combine results\nresults = pd.DataFrame(chunk_summaries)\nprint(f"\\n=== FINAL RESULTS ===")\nprint(f"Total rows processed: {total_rows}")\nprint(f"Overall average: {results['mean'].mean():.1f}")\nprint(f"Overall pass rate: {results['pass_rate'].mean():.0%}")\nprint(f"\\n✅ Processed {total_rows} rows without loading all into memory!")`,
        quiz:{question:"What does pd.read_csv('file.csv', chunksize=1000) return?",options:["A DataFrame with 1000 rows","An error","A generator that yields 1000-row DataFrames","A list of DataFrames"],answer:2}
    },
    {
        id:"pipeline_functions", module:"m28", title:"28.4 Building Reusable Pipelines", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Production-Ready Data Workflows</h2>
<p class="mb-4">A <b>data pipeline</b> is a series of functions that each take data in, process it, and pass it to the next step. Making these functions reusable and composable is the hallmark of professional data engineering.</p>`,
        tip:"Tutor's Insight: The best pipelines are boring — they do the same thing reliably every time. Excitement in a data pipeline means something went wrong. Boring = production-ready.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ COMPOSABLE PIPELINE FRAMEWORK ═══\n\ndef step(name):\n    """Decorator that logs pipeline step execution."""\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            print(f"  ▶ {name}...")\n            result = func(*args, **kwargs)\n            if isinstance(result, pd.DataFrame):\n                print(f"    → {len(result)} rows, {result.shape[1]} cols")\n            return result\n        return wrapper\n    return decorator\n\n@step("Extract data")\ndef extract():\n    np.random.seed(42)\n    return pd.DataFrame({\n        'name': [f"S_{i:02d}" for i in range(1, 31)],\n        'score': np.random.normal(65, 15, 30).round(1),\n        'attend': np.random.normal(80, 12, 30).round(1),\n        'dept': np.random.choice(['Sci','Art','Com'], 30),\n    })\n\n@step("Clean data")\ndef clean(df):\n    df = df.copy()\n    df['score'] = df['score'].clip(0, 100)\n    df['attend'] = df['attend'].clip(0, 100)\n    return df\n\n@step("Engineer features")\ndef engineer(df):\n    df = df.copy()\n    df['grade'] = pd.cut(df['score'], bins=[0,50,70,100], labels=['Fail','Pass','Excel'])\n    df['risk'] = np.where((df['score']<50)|(df['attend']<70), 'HIGH', 'LOW')\n    return df\n\n@step("Generate report")\ndef report(df):\n    print(f"\\n{'='*40}")\n    print(f"  📊 PIPELINE OUTPUT")\n    print(f"  Analyst: Adewale Samson Adeagbo")\n    print(f"{'='*40}")\n    print(f"  Students: {len(df)}")\n    print(f"  Avg Score: {df['score'].mean():.1f}")\n    print(f"  Pass Rate: {(df['score']>=50).mean():.0%}")\n    print(f"  High Risk: {(df['risk']=='HIGH').sum()}")\n    for dept, grp in df.groupby('dept'):\n        print(f"  {dept}: avg={grp['score'].mean():.1f}, n={len(grp)}")\n    return df\n\n# ═══ RUN PIPELINE ═══\nprint("=== PIPELINE EXECUTION ===")\nresult = report(engineer(clean(extract())))\nprint(f"\\n✅ Pipeline complete: {len(result)} records processed")`,
        quiz:{question:"What makes a data pipeline 'production-ready'?",options:["It uses complex algorithms","It's reproducible, testable, and handles errors gracefully","It runs fast","It uses cloud services"],answer:1}
    },

    // ═══ MODULE 29: FEATURE ENGINEERING PRO ═══
    {
        id:"binning", module:"m29", title:"29.1 Binning & Discretization", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Converting Numbers to Categories</h2>
<p class="mb-4"><b>Binning</b> converts continuous numbers into discrete categories. Age 25 becomes '18-30'. Score 85 becomes 'A'. This is one of the most common feature engineering techniques.</p>
<div class="code-block">pd.cut(df['age'], bins=[0, 18, 30, 50, 100],<br>       labels=['Child','Young','Middle','Senior'])<br><br>pd.qcut(df['score'], q=4,<br>        labels=['Bottom 25%','Below Avg','Above Avg','Top 25%'])</div>
<p class="mb-2"><b>Two Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>pd.cut()</code> — fixed-width bins (0-25, 25-50, 50-75, 75-100)</li>
<li><code>pd.qcut()</code> — equal-sized groups (each bin has same number of items)</li>
</ul>`,
        tip:"Tutor's Insight: Binning is used everywhere: credit scores (Poor/Fair/Good/Excellent), age groups for marketing, performance tiers for employees. It turns continuous data into actionable categories.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'name': [f"Student_{i:02d}" for i in range(1, 21)],\n    'score': np.random.normal(65, 18, 20).clip(10, 100).round(1),\n    'age': np.random.randint(14, 20, 20),\n})\n\n# Method 1: pd.cut — fixed boundaries\ndf['grade'] = pd.cut(df['score'],\n    bins=[0, 40, 50, 60, 70, 100],\n    labels=['F', 'D', 'C', 'B', 'A'])\n\n# Method 2: pd.qcut — equal-sized groups\ndf['quartile'] = pd.qcut(df['score'], q=4,\n    labels=['Bottom 25%', 'Below Avg', 'Above Avg', 'Top 25%'])\n\n# Age binning\ndf['age_group'] = pd.cut(df['age'],\n    bins=[13, 15, 17, 20],\n    labels=['Junior', 'Middle', 'Senior'])\n\nprint("=== BINNED DATA ===")\nprint(df[['name','score','grade','quartile','age','age_group']].to_string(index=False))\n\nprint("\\n=== Grade Distribution ===")\nprint(df['grade'].value_counts().sort_index())\n\nprint("\\n=== Quartile Distribution ===")\nprint(df['quartile'].value_counts())`,
        quiz:{question:"What's the difference between pd.cut() and pd.qcut()?",options:["cut is faster","cut uses fixed bin edges, qcut creates equal-sized groups","qcut only works with integers","They're identical"],answer:1}
    },
    {
        id:"one_hot", module:"m29", title:"29.2 One-Hot Encoding", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Converting Categories to Numbers</h2>
<p class="mb-4">Machine learning algorithms need numbers, not text. <b>One-hot encoding</b> converts categorical columns into binary (0/1) columns — one column per category.</p>
<div class="code-block"># Gender: M/F → two columns<br>pd.get_dummies(df, columns=['gender'])<br># Creates: gender_M (0 or 1), gender_F (0 or 1)</div>`,
        tip:"Tutor's Insight: One-hot encoding is the standard way to handle categorical data for ML. If you have a 'color' column with [Red, Blue, Green], you get 3 new columns: color_Red, color_Blue, color_Green.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'name': ['Adewale','Bisi','Chidi','Dayo','Eka','Femi'],\n    'dept': ['Science','Arts','Science','Commerce','Arts','Commerce'],\n    'gender': ['M','F','M','M','F','M'],\n    'score': [95, 72, 88, 65, 82, 55],\n})\n\nprint("=== BEFORE ENCODING ===")\nprint(df)\n\n# One-hot encode categorical columns\ndf_encoded = pd.get_dummies(df, columns=['dept', 'gender'], prefix=['dept', 'gen'])\n\nprint("\\n=== AFTER ONE-HOT ENCODING ===")\nprint(df_encoded)\n\nprint("\\n=== COLUMN TYPES ===")\nfor col in df_encoded.columns:\n    dtype = df_encoded[col].dtype\n    print(f"  {col}: {dtype}")`,
        quiz:{question:"What does one-hot encoding produce for a column with 4 unique categories?",options:["1 new column","2 new columns","4 new binary (0/1) columns","8 new columns"],answer:2}
    },
    {
        id:"feature_interact", module:"m29", title:"29.3 Feature Interactions", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Combining Features for New Insights</h2>
<p class="mb-4"><b>Feature interactions</b> create new columns by combining existing ones. Sometimes the relationship between variables matters more than the variables themselves.</p>
<div class="code-block">df['engagement'] = df['score'] * 0.6 + df['attend'] * 0.4<br>df['score_per_hour'] = df['score'] / df['study_hours']<br>df['above_class_avg'] = df['score'] > df.groupby('class')['score'].transform('mean')</div>`,
        tip:"Tutor's Insight: The best features come from domain knowledge. A doctor knows BMI = weight/height². A teacher knows that low attendance + low homework = at-risk student. Translate your knowledge into features.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'name': [f"S_{i:02d}" for i in range(1, 16)],\n    'maths': np.random.normal(68, 15, 15).clip(20, 100).round(1),\n    'english': np.random.normal(72, 12, 15).clip(20, 100).round(1),\n    'science': np.random.normal(62, 18, 15).clip(20, 100).round(1),\n    'attend': np.random.normal(82, 10, 15).clip(50, 100).round(0),\n    'class': np.random.choice(['SS1','SS2','SS3'], 15),\n})\n\n# Feature interactions\ndf['avg_score'] = df[['maths','english','science']].mean(axis=1).round(1)\ndf['score_range'] = df[['maths','english','science']].max(axis=1) - df[['maths','english','science']].min(axis=1)\ndf['engagement'] = (df['avg_score'] * 0.7 + df['attend'] * 0.3).round(1)\ndf['vs_class_avg'] = (df['avg_score'] - df.groupby('class')['avg_score'].transform('mean')).round(1)\ndf['best_subject'] = df[['maths','english','science']].idxmax(axis=1)\ndf['consistent'] = df['score_range'] < 15  # Low variation = consistent\n\nprint("=== ENGINEERED FEATURES ===")\nprint(df[['name','avg_score','score_range','engagement','vs_class_avg','best_subject','consistent']].to_string(index=False))\n\nprint("\\n=== INSIGHTS ===")\nprint(f"Most consistent: {df[df['consistent']]['name'].tolist()}")\nprint(f"Above class average: {(df['vs_class_avg']>0).sum()}/{len(df)}")`,
        quiz:{question:"What is a 'feature interaction'?",options:["Deleting a feature","Creating a new feature by combining two or more existing features","Renaming features","Sorting by features"],answer:1}
    },
    {
        id:"imbalanced_data", module:"m29", title:"29.4 Handling Imbalanced Data", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">When Classes Aren't Equal</h2>
<p class="mb-4"><b>Imbalanced data</b> means one class is much more common than another. Example: 95% of students pass, 5% fail. A model that always predicts "pass" gets 95% accuracy but is useless!</p>
<div class="code-block">Techniques:<br>1. Oversampling minority class (duplicate rare cases)<br>2. Undersampling majority class (reduce common cases)<br>3. Using class weights<br>4. Using appropriate metrics (F1, not accuracy)</div>`,
        tip:"Tutor's Insight: Fraud detection is the classic imbalanced problem: 99.9% of transactions are legitimate. A model that always says 'not fraud' is 99.9% accurate but catches zero fraudsters. Always check class balance!",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\n\n# Create imbalanced dataset (95% pass, 5% fail)\nn = 200\ndf = pd.DataFrame({\n    'score': np.concatenate([\n        np.random.normal(72, 10, int(n*0.95)),  # 190 passing\n        np.random.normal(35, 8, int(n*0.05)),   # 10 failing\n    ]).round(1),\n})\ndf['label'] = np.where(df['score'] >= 50, 'Pass', 'Fail')\n\nprint("=== IMBALANCED DATA ===")\nprint(f"Total: {len(df)}")\nprint(f"Pass: {(df['label']=='Pass').sum()} ({(df['label']=='Pass').mean():.0%})")\nprint(f"Fail: {(df['label']=='Fail').sum()} ({(df['label']=='Fail').mean():.0%})")\nprint(f"\\n⚠️ A 'dummy' model that always predicts 'Pass'")\nprint(f"   would get {(df['label']=='Pass').mean():.0%} accuracy!")\nprint(f"   But it catches 0 failures!")\n\n# Technique 1: Oversampling (duplicate minority)\nfail_rows = df[df['label'] == 'Fail']\noversampled = pd.concat([df, fail_rows] * 9, ignore_index=True)  # Repeat fail 9x\nprint(f"\\n=== AFTER OVERSAMPLING ===")\nprint(f"Pass: {(oversampled['label']=='Pass').sum()}")\nprint(f"Fail: {(oversampled['label']=='Fail').sum()}")\nprint(f"Ratio: {(oversampled['label']=='Fail').mean():.0%} fail")\n\n# Technique 2: Undersampling (reduce majority)\nn_minority = (df['label']=='Fail').sum()\nmajority = df[df['label']=='Pass'].sample(n=n_minority*3, random_state=42)\nundersampled = pd.concat([majority, fail_rows], ignore_index=True)\nprint(f"\\n=== AFTER UNDERSAMPLING ===")\nprint(f"Pass: {(undersampled['label']=='Pass').sum()}")\nprint(f"Fail: {(undersampled['label']=='Fail').sum()}")\nprint(f"Ratio: {(undersampled['label']=='Fail').mean():.0%} fail")`,
        quiz:{question:"Why is accuracy misleading for imbalanced data?",options:["It's calculated wrong","A model can get high accuracy by always predicting the majority class","Imbalanced data has no accuracy","Accuracy only works for binary problems"],answer:1}
    },

    // ═══ MODULE 30: ML ALGORITHMS FROM SCRATCH ═══
    {
        id:"decision_tree", module:"m30", title:"30.1 Decision Trees — Concept & Build", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">If-Else Chains That Learn</h2>
<p class="mb-4">A <b>decision tree</b> is just a series of if/else questions that split data into groups. It's the most intuitive ML algorithm because it mimics how humans make decisions.</p>
<div class="code-block">Is score >= 60?<br>  ├── YES: Is attendance >= 75?<br>  │     ├── YES: PASS ✅<br>  │     └── NO: AT RISK ⚠️<br>  └── NO: FAIL ❌</div>
<p class="mb-2"><b>How Trees Learn:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Try every possible split point on every feature</li>
<li>Choose the split that best separates the classes</li>
<li>Repeat recursively on each subset</li>
<li>Stop when groups are pure or a depth limit is reached</li>
</ul>`,
        tip:"Tutor's Insight: Decision trees are used in Random Forests and Gradient Boosting — the algorithms that win most Kaggle competitions. Understanding a single tree means understanding the building blocks of the best models.",
        defaultCode:`import numpy as np\n\n# Build a simple decision tree classifier from scratch\nclass SimpleDecisionTree:\n    def __init__(self, max_depth=3):\n        self.max_depth = max_depth\n        self.tree = None\n    \n    def _best_split(self, X, y):\n        """Find the best feature and threshold to split on."""\n        best_score = -1\n        best_feat = None\n        best_thresh = None\n        \n        for feat in range(X.shape[1]):\n            thresholds = np.unique(X[:, feat])\n            for thresh in thresholds:\n                left = y[X[:, feat] <= thresh]\n                right = y[X[:, feat] > thresh]\n                if len(left) == 0 or len(right) == 0:\n                    continue\n                # Purity score (higher = better split)\n                score = abs(left.mean() - right.mean())\n                if score > best_score:\n                    best_score = score\n                    best_feat = feat\n                    best_thresh = thresh\n        \n        return best_feat, best_thresh\n    \n    def _build(self, X, y, depth=0):\n        if depth >= self.max_depth or len(np.unique(y)) == 1:\n            return {'leaf': True, 'prediction': round(y.mean())}\n        \n        feat, thresh = self._best_split(X, y)\n        if feat is None:\n            return {'leaf': True, 'prediction': round(y.mean())}\n        \n        left_mask = X[:, feat] <= thresh\n        return {\n            'leaf': False,\n            'feature': feat,\n            'threshold': thresh,\n            'left': self._build(X[left_mask], y[left_mask], depth+1),\n            'right': self._build(X[~left_mask], y[~left_mask], depth+1),\n        }\n    \n    def fit(self, X, y):\n        self.tree = self._build(X, y)\n    \n    def _predict_one(self, x, node):\n        if node['leaf']:\n            return node['prediction']\n        if x[node['feature']] <= node['threshold']:\n            return self._predict_one(x, node['left'])\n        return self._predict_one(x, node['right'])\n    \n    def predict(self, X):\n        return np.array([self._predict_one(x, self.tree) for x in X])\n\n# Test it!\nnp.random.seed(42)\nscores = np.random.normal(65, 15, 50).clip(20, 100)\nattend = np.random.normal(80, 12, 50).clip(40, 100)\nX = np.column_stack([scores, attend])\ny = ((scores >= 50) & (attend >= 65)).astype(int)\n\n# Train\ntree = SimpleDecisionTree(max_depth=3)\ntree.fit(X, y)\n\n# Predict\npreds = tree.predict(X)\naccuracy = (preds == y).mean()\n\nprint("=== DECISION TREE FROM SCRATCH ===")\nprint(f"Samples: {len(y)}")\nprint(f"Features: score, attendance")\nprint(f"Accuracy: {accuracy:.0%}")\nprint(f"\\nThis tree learned the rules automatically!")`,
        quiz:{question:"How does a decision tree choose where to split?",options:["Randomly","By finding the split that best separates the classes","By the first feature always","By the largest values"],answer:1}
    },
    {
        id:"knn_scratch", module:"m30", title:"30.2 K-Nearest Neighbors from Scratch", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Classify by Finding Similar Examples</h2>
<p class="mb-4"><b>KNN</b> classifies a new data point by looking at its K closest neighbors and voting. If 3 of 5 nearest neighbors are 'Pass', the new point is classified as 'Pass'.</p>
<div class="code-block">Algorithm:<br>1. Calculate distance from new point to ALL training points<br>2. Find the K closest ones<br>3. Take a majority vote of their labels<br>4. That's the prediction!</div>`,
        tip:"Tutor's Insight: KNN is beautifully simple — no training, no weights, no complex math. It literally just remembers all the data and looks up the most similar examples. The downside: it's slow for large datasets.",
        defaultCode:`import numpy as np\n\ndef euclidean_distance(a, b):\n    """Calculate distance between two points."""\n    return np.sqrt(np.sum((a - b) ** 2))\n\nclass SimpleKNN:\n    def __init__(self, k=5):\n        self.k = k\n    \n    def fit(self, X, y):\n        self.X_train = X\n        self.y_train = y\n    \n    def predict_one(self, x):\n        # Calculate distances to all training points\n        distances = [euclidean_distance(x, x_train) for x_train in self.X_train]\n        # Find K nearest\n        k_indices = np.argsort(distances)[:self.k]\n        k_labels = self.y_train[k_indices]\n        # Majority vote\n        return round(np.mean(k_labels))\n    \n    def predict(self, X):\n        return np.array([self.predict_one(x) for x in X])\n\n# Generate data\nnp.random.seed(42)\nn = 60\nscores = np.random.normal(65, 15, n).clip(20, 100)\nattend = np.random.normal(80, 12, n).clip(40, 100)\nX = np.column_stack([scores / 100, attend / 100])  # Normalize!\ny = ((scores >= 50) & (attend >= 65)).astype(int)\n\n# Split train/test\nidx = np.random.permutation(n)\nX_train, X_test = X[idx[:48]], X[idx[48:]]\ny_train, y_test = y[idx[:48]], y[idx[48:]]\n\n# Train and evaluate\nfor k in [3, 5, 7]:\n    knn = SimpleKNN(k=k)\n    knn.fit(X_train, y_train)\n    preds = knn.predict(X_test)\n    acc = (preds == y_test).mean()\n    print(f"K={k}: Accuracy = {acc:.0%}")\n\nprint(f"\\n✅ KNN built from scratch — no sklearn needed!")`,
        quiz:{question:"What does KNN do when predicting?",options:["Trains a neural network","Finds the K closest training examples and votes","Fits a line through the data","Randomly guesses"],answer:1}
    },
    {
        id:"confusion_matrix", module:"m30", title:"30.3 Confusion Matrix & Metrics", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Beyond Accuracy — Real Model Evaluation</h2>
<p class="mb-4">Accuracy alone is not enough. A <b>confusion matrix</b> shows exactly where your model succeeds and fails. From it, we derive precision, recall, and F1 score.</p>
<div class="code-block">                 Predicted<br>              Pos    Neg<br>Actual Pos:  TP      FN<br>Actual Neg:  FP      TN<br><br>Precision = TP / (TP + FP)  — "Of all positive predictions, how many were correct?"<br>Recall    = TP / (TP + FN)  — "Of all actual positives, how many did we find?"<br>F1        = 2 * (P * R) / (P + R)  — Harmonic mean of both</div>`,
        tip:"Tutor's Insight: In medical diagnosis, a False Negative (missing a sick patient) is much worse than a False Positive (unnecessary test). In spam filtering, a False Positive (good email in spam) is worse. Context determines which metric matters most.",
        defaultCode:`import numpy as np\n\ndef confusion_matrix(actual, predicted):\n    """Calculate confusion matrix and all metrics."""\n    tp = sum((a == 1 and p == 1) for a, p in zip(actual, predicted))\n    tn = sum((a == 0 and p == 0) for a, p in zip(actual, predicted))\n    fp = sum((a == 0 and p == 1) for a, p in zip(actual, predicted))\n    fn = sum((a == 1 and p == 0) for a, p in zip(actual, predicted))\n    \n    accuracy = (tp + tn) / (tp + tn + fp + fn)\n    precision = tp / (tp + fp) if (tp + fp) > 0 else 0\n    recall = tp / (tp + fn) if (tp + fn) > 0 else 0\n    f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0\n    \n    return {\n        'TP': tp, 'TN': tn, 'FP': fp, 'FN': fn,\n        'Accuracy': accuracy,\n        'Precision': precision,\n        'Recall': recall,\n        'F1': f1,\n    }\n\n# Simulate predictions\nnp.random.seed(42)\nactual =    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1]\npredicted = [1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1]\n\nresults = confusion_matrix(actual, predicted)\n\nprint("=== CONFUSION MATRIX ===")\nprint(f"                 Predicted")\nprint(f"              Pos    Neg")\nprint(f"Actual Pos:  {results['TP']:>3d}    {results['FN']:>3d}")\nprint(f"Actual Neg:  {results['FP']:>3d}    {results['TN']:>3d}")\n\nprint(f"\\n=== METRICS ===")\nprint(f"Accuracy:  {results['Accuracy']:.0%}")\nprint(f"Precision: {results['Precision']:.0%} — 'When I say Pass, how often am I right?'")\nprint(f"Recall:    {results['Recall']:.0%} — 'Of all actual Passes, how many did I catch?'")\nprint(f"F1 Score:  {results['F1']:.0%} — 'Balance of Precision and Recall'")\n\nprint(f"\\n=== INTERPRETATION ===")\nprint(f"False Positives ({results['FP']}): Predicted Pass but actually Fail")\nprint(f"False Negatives ({results['FN']}): Predicted Fail but actually Pass")`,
        quiz:{question:"What does 'Recall' measure?",options:["How many predictions were correct","Of all actual positives, what fraction did the model find?","The speed of the model","The total number of predictions"],answer:1}
    },
    {
        id:"cross_validation", module:"m30", title:"30.4 Cross-Validation", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Testing Your Model Properly</h2>
<p class="mb-4"><b>Cross-validation</b> splits data into K groups (folds), trains on K-1 folds, and tests on the remaining fold. Repeat K times. This gives a much more reliable accuracy estimate than a single train/test split.</p>
<div class="code-block">K-Fold Cross-Validation (K=5):<br>Fold 1: [TEST] [train] [train] [train] [train]<br>Fold 2: [train] [TEST] [train] [train] [train]<br>Fold 3: [train] [train] [TEST] [train] [train]<br>Fold 4: [train] [train] [train] [TEST] [train]<br>Fold 5: [train] [train] [train] [train] [TEST]<br><br>Final accuracy = average of all 5 fold accuracies</div>`,
        tip:"Tutor's Insight: A single train/test split can be lucky or unlucky. Cross-validation tests on EVERY data point (across different folds), giving you a reliable estimate of how well your model will perform on truly new data.",
        defaultCode:`import numpy as np\n\ndef k_fold_split(X, y, k=5, seed=42):\n    """Split data into K folds."""\n    np.random.seed(seed)\n    indices = np.random.permutation(len(y))\n    fold_size = len(y) // k\n    folds = []\n    for i in range(k):\n        test_idx = indices[i*fold_size:(i+1)*fold_size]\n        train_idx = np.concatenate([indices[:i*fold_size], indices[(i+1)*fold_size:]])\n        folds.append((train_idx, test_idx))\n    return folds\n\n# Simple classifier\ndef predict(X, threshold=55):\n    return (X[:, 0] * 0.6 + X[:, 1] * 0.4 > threshold).astype(int)\n\n# Generate data\nnp.random.seed(42)\nn = 100\nscores = np.random.normal(65, 15, n).clip(20, 100)\nattend = np.random.normal(80, 12, n).clip(40, 100)\nX = np.column_stack([scores, attend])\ny = ((scores >= 50) & (attend >= 65)).astype(int)\n\n# 5-fold cross-validation\nfolds = k_fold_split(X, y, k=5)\naccuracies = []\n\nprint("=== 5-FOLD CROSS-VALIDATION ===")\nfor i, (train_idx, test_idx) in enumerate(folds):\n    X_test, y_test = X[test_idx], y[test_idx]\n    preds = predict(X_test)\n    acc = (preds == y_test).mean()\n    accuracies.append(acc)\n    print(f"  Fold {i+1}: {acc:.0%} accuracy ({len(test_idx)} test samples)")\n\nprint(f"\\n=== RESULT ===")\nprint(f"Mean accuracy: {np.mean(accuracies):.0%}")\nprint(f"Std deviation: {np.std(accuracies):.0%}")\nprint(f"\\n✅ Cross-validation gives a more reliable estimate!")`,
        quiz:{question:"Why is cross-validation better than a single train/test split?",options:["It's faster","Every data point gets tested, giving a more reliable accuracy estimate","It uses less data","The model learns better"],answer:1}
    },
    {
        id:"overfitting", module:"m30", title:"30.5 Overfitting vs Underfitting", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">The Goldilocks Problem of ML</h2>
<p class="mb-4"><b>Overfitting:</b> model memorizes training data but fails on new data. <b>Underfitting:</b> model is too simple to capture patterns. The goal is the sweet spot in between.</p>
<div class="code-block">Underfitting:  Train acc: 55%  Test acc: 52%  ← Too simple<br>Good fit:      Train acc: 88%  Test acc: 85%  ← Just right ✅<br>Overfitting:   Train acc: 99%  Test acc: 60%  ← Memorized!</div>`,
        tip:"Tutor's Insight: Overfitting is the #1 reason ML models fail in production. A model that's 99% accurate on training data but 60% on new data is useless. Always compare train vs test performance.",
        defaultCode:`import numpy as np\n\nnp.random.seed(42)\n\n# Generate noisy data\nn = 80\nscores = np.random.normal(65, 15, n).clip(20, 100)\nattend = np.random.normal(80, 12, n).clip(40, 100)\nnoise = np.random.normal(0, 10, n)\nX = np.column_stack([scores, attend])\ny = ((scores + noise >= 50) & (attend + noise >= 65)).astype(int)\n\n# Split\nidx = np.random.permutation(n)\nX_train, X_test = X[idx[:60]], X[idx[60:]]\ny_train, y_test = y[idx[:60]], y[idx[60:]]\n\nprint("=== OVERFITTING vs UNDERFITTING ===")\nprint(f"Training: {len(y_train)} | Testing: {len(y_test)}\\n")\n\n# Underfitting: too simple (predict majority class)\npred_always = np.ones(len(y_test)).astype(int)  # Always predict 1\ntrain_acc_u = (np.ones(len(y_train)) == y_train).mean()\ntest_acc_u = (pred_always == y_test).mean()\nprint(f"Underfitting (always predict 'Pass'):")\nprint(f"  Train: {train_acc_u:.0%} | Test: {test_acc_u:.0%} | Gap: {abs(train_acc_u-test_acc_u):.0%}")\n\n# Good fit: reasonable model\ndef good_model(X, w1=0.6, w2=0.4, thresh=55):\n    return (X[:,0]*w1 + X[:,1]*w2 > thresh).astype(int)\n\ntrain_acc_g = (good_model(X_train) == y_train).mean()\ntest_acc_g = (good_model(X_test) == y_test).mean()\nprint(f"\\nGood fit (weighted threshold):")\nprint(f"  Train: {train_acc_g:.0%} | Test: {test_acc_g:.0%} | Gap: {abs(train_acc_g-test_acc_g):.0%}")\n\n# Overfitting: memorize training data\ntrain_preds = y_train.copy()  # Perfect on training!\ntest_acc_o = (good_model(X_test, w1=0.9, w2=0.1, thresh=40) == y_test).mean()\nprint(f"\\nOverfitting (over-tuned):")\nprint(f"  Train: 100% | Test: {test_acc_o:.0%} | Gap: {100-test_acc_o*100:.0f}%")\n\nprint(f"\\n=== DIAGNOSIS ===")\nprint(f"If train >> test → Overfitting (model too complex)")\nprint(f"If both low     → Underfitting (model too simple)")\nprint(f"If both high    → Good fit! ✅")`,
        quiz:{question:"What does overfitting look like?",options:["Low training accuracy, low test accuracy","High training accuracy, high test accuracy","High training accuracy, LOW test accuracy","Low training accuracy, high test accuracy"],answer:2}
    },

    // ═══ MODULE 31: MODEL EVALUATION ═══ (abbreviated for space)
    {
        id:"eval_metrics", module:"m31", title:"31.1 Choosing the Right Metric", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Which Metric Matters Most?</h2>
<p class="mb-4">Different problems need different metrics. <b>Accuracy</b> works for balanced data. <b>Precision</b> matters when false positives are costly. <b>Recall</b> matters when false negatives are dangerous.</p>
<div class="code-block">Medical: Recall matters — don't miss sick patients<br>Spam: Precision matters — don't block good emails<br>Balanced: F1 Score — harmonic mean of both<br>Business: Often custom metrics (revenue impact)</div>`,
        tip:"Tutor's Insight: In interviews, 'Which metric would you use?' is the most common ML question. The answer is ALWAYS 'it depends on the business context.' Then explain why.",
        defaultCode:`import numpy as np\n\n# Scenario comparison\nprint("=== WHICH METRIC FOR WHICH PROBLEM? ===\\n")\n\nscenarios = [\n    {\n        "name": "Medical Screening",\n        "priority": "Recall (don't miss sick patients)",\n        "actual":    [1,1,1,1,1,0,0,0,0,0],\n        "predicted": [1,1,1,1,0,0,0,1,0,0],\n        "why": "A missed disease (FN) could be fatal. Better to have extra tests (FP) than miss someone."\n    },\n    {\n        "name": "Email Spam Filter",\n        "priority": "Precision (don't block good emails)",\n        "actual":    [1,1,1,0,0,0,0,0,0,0],\n        "predicted": [1,1,0,0,0,0,0,0,0,0],\n        "why": "A good email in spam (FP) means missed business. A spam in inbox (FN) is just annoying."\n    },\n]\n\nfor s in scenarios:\n    a, p = s['actual'], s['predicted']\n    tp = sum(1 for x,y in zip(a,p) if x==1 and y==1)\n    fp = sum(1 for x,y in zip(a,p) if x==0 and y==1)\n    fn = sum(1 for x,y in zip(a,p) if x==1 and y==0)\n    tn = sum(1 for x,y in zip(a,p) if x==0 and y==0)\n    \n    acc = (tp+tn)/(tp+tn+fp+fn)\n    prec = tp/(tp+fp) if (tp+fp)>0 else 0\n    rec = tp/(tp+fn) if (tp+fn)>0 else 0\n    f1 = 2*prec*rec/(prec+rec) if (prec+rec)>0 else 0\n    \n    print(f"📋 {s['name']}")\n    print(f"   Priority: {s['priority']}")\n    print(f"   Accuracy: {acc:.0%} | Precision: {prec:.0%} | Recall: {rec:.0%} | F1: {f1:.0%}")\n    print(f"   Why: {s['why']}\\n")`,
        quiz:{question:"For medical diagnosis, which metric is most important?",options:["Accuracy","Precision","Recall (don't miss sick patients)","F1 Score"],answer:2}
    },
    {
        id:"bias_variance", module:"m31", title:"31.2 Bias-Variance Tradeoff", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">The Fundamental ML Tradeoff</h2>
<p class="mb-4"><b>Bias</b> = model is too simple, misses patterns. <b>Variance</b> = model is too complex, captures noise. Every model balances these two.</p>
<div class="code-block">High Bias:     Simple model, consistent but wrong (underfitting)<br>High Variance:  Complex model, fits training data but unstable (overfitting)<br>Sweet Spot:     Just enough complexity to capture real patterns</div>`,
        tip:"Tutor's Insight: This is the most fundamental concept in all of machine learning. If you understand bias-variance, you understand why regularization, cross-validation, and ensemble methods exist.",
        defaultCode:`import numpy as np\n\nnp.random.seed(42)\n\n# True relationship: y = 2x + noise\nX = np.random.uniform(0, 10, 50)\ny = 2 * X + np.random.normal(0, 3, 50)\n\n# High Bias model: predict the mean (ignores X entirely)\nmean_pred = np.full_like(y, y.mean())\nbias_error = np.mean((y - mean_pred)**2)\n\n# Good model: linear relationship\nslope = np.sum((X - X.mean()) * (y - y.mean())) / np.sum((X - X.mean())**2)\nintercept = y.mean() - slope * X.mean()\nlinear_pred = slope * X + intercept\ngood_error = np.mean((y - linear_pred)**2)\n\n# High Variance model: memorize training data\n# (perfect on training, bad on new data)\noverfit_pred = y.copy()  # Perfect fit to training\noverfit_error = 0  # Zero training error\n\nprint("=== BIAS-VARIANCE TRADEOFF ===")\nprint(f"\\nTrue relationship: y ≈ 2x + noise\\n")\nprint(f"High Bias (predict mean only):")\nprint(f"  Training error: {bias_error:.1f}")\nprint(f"  Problem: Ignores the relationship between X and Y\\n")\n\nprint(f"Good Fit (linear model: y = {slope:.1f}x + {intercept:.1f}):")\nprint(f"  Training error: {good_error:.1f}")\nprint(f"  Captures the real trend without fitting noise ✅\\n")\n\nprint(f"High Variance (memorize everything):")\nprint(f"  Training error: {overfit_error:.1f} (perfect!)")\nprint(f"  Problem: Will fail on ANY new data\\n")\n\nprint("📌 KEY TAKEAWAY:")\nprint("  More complexity → less bias, more variance")\nprint("  Less complexity → more bias, less variance")\nprint("  The art of ML is finding the balance.")`,
        quiz:{question:"A model with high variance will:",options:["Be too simple","Perform well on training but poorly on new data","Always have low accuracy","Ignore all features"],answer:1}
    },
    {
        id:"model_selection", module:"m31", title:"31.3 Model Selection Framework", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Choosing the Right Model</h2>
<p class="mb-4">Different models excel at different problems. Here's a practical framework for choosing the right approach based on your data characteristics and business needs.</p>`,
        tip:"Tutor's Insight: In industry, 80% of your time is spent on data preparation and feature engineering. The choice of model usually matters less than the quality of your features and data cleaning.",
        defaultCode:`import numpy as np\n\nnp.random.seed(42)\n\nprint("═══ MODEL SELECTION FRAMEWORK ═══")\nprint("By: Adewale Samson Adeagbo\\n")\n\nprint("📋 Step 1: UNDERSTAND YOUR PROBLEM")\nprint("   Classification? (predict a category: pass/fail, spam/not)")\nprint("   Regression? (predict a number: price, score, revenue)")\nprint("   Clustering? (find natural groups, no labels)\\n")\n\nprint("📋 Step 2: UNDERSTAND YOUR DATA")\nprint("   How many samples? (<100 = simple model, >10K = complex OK)")\nprint("   How many features? (>50 may need feature selection)")\nprint("   Is it balanced? (check class distribution)\\n")\n\nprint("📋 Step 3: START SIMPLE")\nprint("   Always start with the simplest model that could work.")\nprint("   Then add complexity only if needed.\\n")\n\nprint("📋 Step 4: MODEL CHEAT SHEET")\nmodels = [\n    ("Rule-based", "Any", "Simple rules, <100 samples", "Student grading, risk flags"),\n    ("Decision Tree", "Classification", "Interpretable, small-medium data", "Loan approval, triage"),\n    ("KNN", "Classification", "Small data, few features", "Recommendation, similarity"),\n    ("Linear Regression", "Regression", "Linear relationship", "Price prediction, forecasting"),\n    ("Random Forest", "Both", "Medium-large data, robust", "Most business problems"),\n]\n\nprint(f"  {'Model':<18s} {'Type':<16s} {'Best For':<35s} {'Example'}")\nprint("  " + "-"*90)\nfor name, mtype, best, example in models:\n    print(f"  {name:<18s} {mtype:<16s} {best:<35s} {example}")\n\nprint("\\n📋 Step 5: EVALUATE PROPERLY")\nprint("   Use cross-validation, not a single train/test split")\nprint("   Compare multiple models on the same data")\nprint("   Choose based on the RIGHT metric for your problem")`,
        quiz:{question:"When starting a new ML project, what should you try first?",options:["The most complex neural network","The simplest model that could work","Random Forest always","Whatever is newest"],answer:1}
    },

    // ═══ MODULE 32: PRACTICE LAB — EXPERT ═══
    {
        id:"ex_etl_build", module:"m32", title:"32.1 Exercise: Build an ETL Pipeline", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🔥 Exercise: Production ETL</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a complete ETL pipeline with: data validation, error handling, logging, and a final report. The pipeline must be reusable for ANY dataset.</p></div>`,
        tip:"Exercise Tip: A production pipeline should NEVER crash silently. Log every step, validate every input, and produce a summary of what happened.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ EXERCISE: Build a Production ETL Pipeline ═══\n# Requirements:\n# 1. Extract: Load/generate data with realistic problems\n# 2. Validate: Check schema, types, ranges\n# 3. Transform: Clean, engineer features\n# 4. Load: Generate formatted report\n# 5. Logging: Print status at each step\n# 6. Error handling: Pipeline must not crash\n\n# Your pipeline must work on any dataset!\n\nprint("Build your production ETL pipeline here!")`,
        quiz:{question:"What should a production pipeline do when it encounters bad data?",options:["Crash immediately","Log the issue, skip the bad record, and continue processing","Ignore it","Delete all data"],answer:1}
    },
    {
        id:"ex_ml_project", module:"m32", title:"32.2 Exercise: Complete ML Project", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🔥 Exercise: End-to-End ML</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Build a complete ML project: generate data, clean it, engineer features, normalize, split train/test, build 2 different classifiers, evaluate with confusion matrix and cross-validation, and declare a winner.</p></div>`,
        tip:"Exercise Tip: This is what data science interviews test. The complete pipeline from raw data to model comparison is the core competency every employer wants to see.",
        defaultCode:`import numpy as np\nimport pandas as pd\n\n# ═══ EXERCISE: Complete ML Project ═══\n# 1. Generate 100+ student records\n# 2. Clean and validate\n# 3. Engineer 5+ features\n# 4. Normalize features\n# 5. Train/test split (80/20)\n# 6. Build classifier 1 (threshold-based)\n# 7. Build classifier 2 (KNN or tree)\n# 8. Confusion matrix for both\n# 9. Cross-validation for both\n# 10. Compare and declare winner\n# 11. Print professional report\n\nprint("Build your complete ML project here!")\nprint("This is your data science capstone!")`,
        quiz:{question:"What's the most important thing to compare when choosing between two models?",options:["Training accuracy","Test/cross-validation performance on unseen data","Code length","Training speed"],answer:1}
    },
    {
        id:"ex_feature_eng", module:"m32", title:"32.3 Exercise: Feature Engineering Challenge", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🔥 Exercise: Create 10 Features</h2>
<div class="callout ci"><div class="cl">INSTRUCTIONS</div><p>Given a basic student dataset, engineer at least 10 new features using binning, interactions, one-hot encoding, rolling calculations, and domain knowledge. Then show which features are most useful.</p></div>`,
        tip:"Exercise Tip: The best data scientists create features that capture DOMAIN KNOWLEDGE — things like 'is score declining?' or 'is attendance below class average?' Think about what a teacher would check.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'name': [f"S_{i:02d}" for i in range(1, 31)],\n    'maths': np.random.normal(65, 15, 30).clip(20, 100).round(1),\n    'english': np.random.normal(70, 12, 30).clip(20, 100).round(1),\n    'science': np.random.normal(60, 18, 30).clip(20, 100).round(1),\n    'attend': np.random.normal(80, 12, 30).clip(40, 100).round(0),\n    'class': np.random.choice(['SS1','SS2','SS3'], 30),\n    'gender': np.random.choice(['M','F'], 30),\n})\n\n# TODO: Create 10+ engineered features\n# Ideas: average, range, grade, risk, vs_class_avg,\n# best_subject, worst_subject, consistent, encoded gender,\n# binned attendance, engagement score, etc.\n\nprint("Engineer at least 10 new features!")\nprint("Show which features correlate most with performance.")`,
        quiz:{question:"What makes a good engineered feature?",options:["It's mathematically complex","It captures domain knowledge and adds predictive information","It has a long name","It uses many columns"],answer:1}
    },
    {
        id:"ex_portfolio_final", module:"m32", title:"32.4 Exercise: Portfolio Masterpiece", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🔥 The Ultimate Exercise</h2>
<div class="callout ci"><div class="cl">FINAL EXERCISE</div><p>Build the most impressive data science project you can. Combine EVERY skill from all modules: Python, Pandas, NumPy, visualization, statistics, feature engineering, ML, cross-validation — into one cohesive, professional analysis. This goes on your portfolio.</p></div>`,
        tip:"Exercise Tip: Choose a domain you're passionate about. Passion shows in the quality of analysis. This project IS your resume.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ PORTFOLIO MASTERPIECE ═══\n# Analyst: [Your Name]\n# Mentor: Adewale Samson Adeagbo\n# Platform: PyData-Flow Pro\n#\n# Structure:\n# 1. Executive Summary\n# 2. Data Generation/Loading\n# 3. Data Quality Assessment\n# 4. Cleaning Pipeline\n# 5. Feature Engineering (10+ features)\n# 6. EDA (univariate + bivariate)\n# 7. Statistical Testing\n# 8. Normalization\n# 9. ML Model + Evaluation\n# 10. Dashboard (6+ charts)\n# 11. Findings & Recommendations\n# 12. Conclusion\n\nnp.random.seed(2024)\n\nprint("Build your magnum opus here!")\nprint("Every skill from 150 lessons in one project.")`,
        quiz:{question:"What separates a portfolio project from a homework assignment?",options:["It's longer","Clear communication of insights, professional presentation, and actionable recommendations","More charts","Using more libraries"],answer:1}
    },

    // ═══ MODULE 33: CODE-ALONG PROJECTS ═══
    {
        id:"codealong_tracker", module:"m33", title:"33.1 Code-Along: Student Tracker", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">🏗️ Build Along: Student Performance Tracker</h2>
<p class="mb-4">Follow these steps to build a complete student performance tracking system. Each step builds on the previous one. <b>Type the code yourself</b> — don't copy/paste!</p>
<div class="callout ct"><div class="cl">BUILD STEPS</div><p>Step 1: Create the data → Step 2: Clean it → Step 3: Add grades → Step 4: Find at-risk students → Step 5: Generate report → Step 6: Create chart</p></div>`,
        tip:"Code-Along Tip: Resist the urge to copy-paste. Typing each line yourself builds muscle memory. You'll be surprised how much faster you learn.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ CODE-ALONG: Student Tracker ═══\n# Follow along step by step!\n\n# STEP 1: Create the data\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'name': [f"Student_{i:02d}" for i in range(1, 21)],\n    'maths': np.random.normal(68, 15, 20).clip(20, 100).round(1),\n    'english': np.random.normal(72, 12, 20).clip(20, 100).round(1),\n    'science': np.random.normal(60, 18, 20).clip(20, 100).round(1),\n    'attend': np.random.normal(82, 10, 20).clip(50, 100).round(0),\n})\nprint("Step 1 ✅ Data created:", df.shape)\n\n# STEP 2: Calculate averages\ndf['average'] = df[['maths','english','science']].mean(axis=1).round(1)\nprint("Step 2 ✅ Averages calculated")\n\n# STEP 3: Assign grades\ndf['grade'] = pd.cut(df['average'], bins=[0,40,50,60,70,100], labels=['F','D','C','B','A'])\nprint("Step 3 ✅ Grades assigned")\n\n# STEP 4: Identify at-risk\ndf['risk'] = np.where((df['average']<50) | (df['attend']<70), 'AT RISK', 'OK')\nat_risk = df[df['risk']=='AT RISK']\nprint(f"Step 4 ✅ Found {len(at_risk)} at-risk students")\n\n# STEP 5: Report\nprint(f"\\n{'='*45}")\nprint(f"  📊 STUDENT TRACKER REPORT")\nprint(f"  Built by: Adewale Samson Adeagbo")\nprint(f"{'='*45}")\nprint(f"  Total: {len(df)} | Average: {df['average'].mean():.1f}")\nprint(f"  Pass rate: {(df['average']>=50).mean():.0%}")\nprint(f"  At risk: {len(at_risk)}")\nif len(at_risk) > 0:\n    print(f"\\n  ⚠️ At-risk students:")\n    for _, r in at_risk.iterrows():\n        print(f"    {r['name']}: avg={r['average']}, attend={r['attend']}%")\n\n# STEP 6: Chart\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\ncolors = ['#22c55e' if g in ['A','B'] else '#f59e0b' if g in ['C','D'] else '#ef4444' for g in df['grade']]\nax1.bar(range(len(df)), df['average'], color=colors)\nax1.set_title('Student Averages', fontweight='bold')\nax1.axhline(y=50, color='red', ls='--', alpha=0.5)\ndf['grade'].value_counts().sort_index().plot(kind='bar', ax=ax2, color='#6366f1')\nax2.set_title('Grade Distribution', fontweight='bold')\nplt.tight_layout()\nplt.show()\nprint("\\nStep 6 ✅ Dashboard complete!")`,
        quiz:{question:"Why should you type code instead of copy-paste when learning?",options:["It's slower","Typing builds muscle memory and forces you to read every line","The computer prefers it","Copy-paste causes errors"],answer:1}
    },
    {
        id:"codealong_sales", module:"m33", title:"33.2 Code-Along: Sales Analyzer", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🏗️ Build Along: Business Sales Dashboard</h2>
<p class="mb-4">Build a complete sales analysis tool step by step. This is what business analysts build on day one at a new job.</p>`,
        tip:"Code-Along Tip: After building this, try modifying it with your own data. Change the products, prices, and dates. Making it your own solidifies the learning.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ CODE-ALONG: Sales Analyzer ═══\nnp.random.seed(42)\nn = 100\n\n# Build the dataset\ndf = pd.DataFrame({\n    'date': pd.date_range('2026-01-01', periods=n, freq='D'),\n    'product': np.random.choice(['Laptop','Phone','Tablet','Headset','Charger'], n),\n    'price': np.random.choice([450000,180000,95000,25000,8000], n),\n    'quantity': np.random.randint(1, 10, n),\n    'region': np.random.choice(['Lagos','Abuja','PH','Kano'], n),\n})\ndf['revenue'] = df['price'] * df['quantity']\ndf['month'] = df['date'].dt.month_name()\n\nprint("═"*50)\nprint("  💰 SALES ANALYSIS DASHBOARD")\nprint("  Analyst: Adewale Samson Adeagbo")\nprint("═"*50)\nprint(f"\\n  Orders: {n} | Products: {df['product'].nunique()}")\nprint(f"  Revenue: ₦{df['revenue'].sum():,.0f}")\nprint(f"  Avg Order: ₦{df['revenue'].mean():,.0f}")\n\nprint("\\n  📦 By Product:")\nfor prod, grp in df.groupby('product'):\n    pct = grp['revenue'].sum() / df['revenue'].sum() * 100\n    print(f"    {prod:<10s}: ₦{grp['revenue'].sum():>12,.0f} ({pct:.0f}%)")\n\nprint("\\n  🌍 By Region:")\nfor reg, grp in df.groupby('region'):\n    print(f"    {reg:<6s}: ₦{grp['revenue'].sum():>12,.0f} ({len(grp)} orders)")\n\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Sales Dashboard — Adewale Samson Adeagbo', fontsize=13, fontweight='bold')\n\ndf.groupby('product')['revenue'].sum().sort_values().plot(kind='barh', ax=axes[0,0], color='#6366f1')\naxes[0,0].set_title('Revenue by Product')\n\ndf.groupby('region')['revenue'].sum().plot(kind='pie', ax=axes[0,1], autopct='%1.0f%%')\naxes[0,1].set_title('Revenue by Region')\n\ndf.set_index('date')['revenue'].rolling(7).mean().plot(ax=axes[1,0], color='#22c55e')\naxes[1,0].set_title('7-Day Moving Average')\n\ndf.groupby('product')['quantity'].sum().plot(kind='bar', ax=axes[1,1], color='#f59e0b')\naxes[1,1].set_title('Units Sold')\naxes[1,1].tick_params(axis='x', rotation=45)\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What is a 7-day moving average?",options:["The average of 7 random days","The average of the most recent 7 days, recalculated at each point","The 7th day's value","The total divided by 7"],answer:1}
    },
    {
        id:"codealong_health", module:"m33", title:"33.3 Code-Along: Health Screener", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🏗️ Build Along: Patient Health Screener</h2>
<p class="mb-4">Build a health risk screening tool that categorizes patients by risk level based on multiple health metrics.</p>`,
        tip:"Code-Along Tip: Healthcare analytics saves lives. This exact pattern — risk scoring based on multiple factors — is used in hospitals worldwide.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ CODE-ALONG: Health Screener ═══\nnp.random.seed(42)\nn = 80\n\ndf = pd.DataFrame({\n    'patient_id': range(1, n+1),\n    'age': np.random.randint(25, 75, n),\n    'bp_systolic': np.random.normal(128, 18, n).clip(90, 200).round(0),\n    'bmi': np.random.normal(26, 5, n).clip(17, 45).round(1),\n    'glucose': np.random.normal(105, 25, n).clip(60, 250).round(0),\n    'smoker': np.random.choice([0, 1], n, p=[0.7, 0.3]),\n})\n\ndef calculate_risk(row):\n    score = 0\n    if row['bp_systolic'] >= 140: score += 3\n    elif row['bp_systolic'] >= 130: score += 1\n    if row['bmi'] >= 30: score += 2\n    elif row['bmi'] >= 25: score += 1\n    if row['glucose'] >= 126: score += 3\n    elif row['glucose'] >= 100: score += 1\n    if row['smoker']: score += 2\n    if row['age'] >= 60: score += 1\n    return 'HIGH' if score >= 5 else 'MODERATE' if score >= 2 else 'LOW'\n\ndf['risk'] = df.apply(calculate_risk, axis=1)\n\nprint("═"*50)\nprint("  🏥 HEALTH SCREENING REPORT")\nprint("  Analyst: Adewale Samson Adeagbo")\nprint("═"*50)\nprint(f"  Patients: {n}")\nfor risk, grp in df.groupby('risk'):\n    print(f"  {risk}: {len(grp)} ({len(grp)/n:.0%})")\n\nhigh = df[df['risk']=='HIGH']\nif len(high) > 0:\n    print(f"\\n  ⚠️ HIGH RISK patients ({len(high)}):")\n    for _, r in high.head(5).iterrows():\n        flags = []\n        if r['bp_systolic'] >= 140: flags.append('BP↑')\n        if r['bmi'] >= 30: flags.append('BMI↑')\n        if r['glucose'] >= 126: flags.append('Glucose↑')\n        if r['smoker']: flags.append('Smoker')\n        print(f"    #{r['patient_id']}: age={r['age']}, flags={', '.join(flags)}")\n\nfig, axes = plt.subplots(1, 3, figsize=(14, 5))\ndf['risk'].value_counts().plot(kind='pie', ax=axes[0], autopct='%1.0f%%', colors=['#22c55e','#f59e0b','#ef4444'])\naxes[0].set_title('Risk Distribution')\ncolors = df['risk'].map({'LOW':'green','MODERATE':'orange','HIGH':'red'})\naxes[1].scatter(df['bmi'], df['bp_systolic'], c=colors, s=40, alpha=0.7)\naxes[1].set_xlabel('BMI'); axes[1].set_ylabel('Blood Pressure')\naxes[1].set_title('BMI vs BP (by Risk)')\ndf.groupby('risk')[['bp_systolic','bmi','glucose']].mean().plot(kind='bar', ax=axes[2])\naxes[2].set_title('Averages by Risk')\naxes[2].tick_params(axis='x', rotation=0)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"In risk scoring, why combine multiple factors?",options:["One factor alone is unreliable — risk comes from the combination of factors","It makes the code longer","Doctors require it","It's more accurate than any single measure"],answer:0}
    },
    {
        id:"codealong_ml", module:"m33", title:"33.4 Code-Along: ML Pipeline", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏗️ Build Along: Complete ML Pipeline</h2>
<p class="mb-4">Build a full ML pipeline from scratch: data → features → normalize → split → train → evaluate → compare models.</p>`,
        tip:"Code-Along Tip: This is the exact workflow used at companies like Google, Amazon, and every Nigerian bank's data science team. Master this pipeline and you can solve any classification problem.",
        defaultCode:`import numpy as np\nimport pandas as pd\n\n# ═══ CODE-ALONG: Complete ML Pipeline ═══\nnp.random.seed(42)\nn = 100\n\n# 1. DATA\ndf = pd.DataFrame({\n    'score': np.random.normal(65, 15, n).clip(20, 100).round(1),\n    'attend': np.random.normal(80, 12, n).clip(40, 100).round(1),\n    'homework': np.random.uniform(0.3, 1.0, n).round(2),\n})\ndf['passed'] = ((df['score']>=50) & (df['attend']>=65)).astype(int)\nprint(f"1. Data: {n} students, {df['passed'].mean():.0%} pass rate")\n\n# 2. FEATURES (normalize)\nfor col in ['score','attend','homework']:\n    df[f'{col}_norm'] = (df[col] - df[col].min()) / (df[col].max() - df[col].min())\nprint("2. Features normalized to 0-1")\n\n# 3. SPLIT\nX = df[['score_norm','attend_norm','homework_norm']].values\ny = df['passed'].values\nidx = np.random.permutation(n)\nX_train, X_test = X[idx[:80]], X[idx[80:]]\ny_train, y_test = y[idx[:80]], y[idx[80:]]\nprint(f"3. Split: {len(y_train)} train, {len(y_test)} test")\n\n# 4. MODEL 1: Threshold\ndef threshold_model(X, w=[0.4, 0.4, 0.2], t=0.45):\n    return (X @ np.array(w) > t).astype(int)\n\np1_train = threshold_model(X_train)\np1_test = threshold_model(X_test)\nacc1_train = (p1_train == y_train).mean()\nacc1_test = (p1_test == y_test).mean()\nprint(f"4. Threshold: train={acc1_train:.0%}, test={acc1_test:.0%}")\n\n# 5. MODEL 2: KNN\ndef knn_predict(X_train, y_train, X_test, k=5):\n    preds = []\n    for x in X_test:\n        dists = np.sqrt(np.sum((X_train - x)**2, axis=1))\n        nearest = y_train[np.argsort(dists)[:k]]\n        preds.append(round(nearest.mean()))\n    return np.array(preds)\n\np2_test = knn_predict(X_train, y_train, X_test, k=5)\nacc2_test = (p2_test == y_test).mean()\nprint(f"5. KNN(k=5): test={acc2_test:.0%}")\n\n# 6. EVALUATE\nprint(f"\\n{'='*40}")\nprint(f"  📊 MODEL COMPARISON")\nprint(f"{'='*40}")\nprint(f"  Threshold: {acc1_test:.0%} test accuracy")\nprint(f"  KNN (k=5): {acc2_test:.0%} test accuracy")\nwinner = "Threshold" if acc1_test >= acc2_test else "KNN"\nprint(f"  Winner: {winner} ✅")`,
        quiz:{question:"What's the correct order in an ML pipeline?",options:["Model → Data → Evaluate","Data → Features → Split → Train → Evaluate","Evaluate → Train → Data","Split → Train → Data → Features"],answer:1}
    },

    // ═══ MODULE 34: FINAL CERTIFICATIONS ═══
    {
        id:"cert_python_final", module:"m34", title:"34.1 Final Cert: Python Mastery", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 FINAL CERTIFICATION — Python Mastery</h2>
<div class="callout ct"><div class="cl">EXAM REQUIREMENTS</div><p>Demonstrate complete Python fluency: variables, types, operators, strings, loops, functions, comprehensions, generators, file I/O, error handling, and OOP basics. All from memory.</p></div>
<p class="mb-2"><b>Tasks (ALL required):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Task 1: Create a function with *args, **kwargs, and a docstring</li>
<li>Task 2: Process a list using comprehension, map, and filter</li>
<li>Task 3: Handle at least 3 types of exceptions</li>
<li>Task 4: Write a generator that yields processed data</li>
<li>Task 5: Write data to a file and read it back</li>
</ul>`,
        tip:"Certification Tip: This tests fluency. If you can write all 5 tasks from memory without looking anything up, you've truly mastered Python fundamentals.",
        defaultCode:`# ═══ FINAL CERTIFICATION: Python Mastery ═══\n# Candidate: [Your Name]\n# Complete ALL 5 tasks from memory\n\n# Task 1: Function with *args, **kwargs\n# Task 2: Comprehension, map, filter  \n# Task 3: Exception handling (3 types)\n# Task 4: Generator function\n# Task 5: File I/O with 'with'\n\nprint("Complete all 5 tasks to earn Python Mastery Certificate!")`,
        quiz:{question:"What makes you 'fluent' in Python?",options:["Knowing every function","Being able to solve problems from memory without looking up syntax","Using advanced libraries","Writing long programs"],answer:1}
    },
    {
        id:"cert_data_final", module:"m34", title:"34.2 Final Cert: Data Engineering", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 FINAL CERTIFICATION — Data Engineering</h2>
<div class="callout ct"><div class="cl">EXAM REQUIREMENTS</div><p>Build a complete ETL pipeline with validation, cleaning, feature engineering, and reporting.</p></div>`,
        tip:"Certification Tip: Your pipeline should handle ANY messy data gracefully — missing values, wrong types, outliers, duplicates. Test with intentionally broken data.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ FINAL CERTIFICATION: Data Engineering ═══\n# Build a complete ETL pipeline\n# Must include: validation, cleaning, features, report\n\nprint("Build your certified data engineering pipeline!")`,
        quiz:{question:"What does ETL stand for?",options:["Export, Test, Load","Extract, Transform, Load","Evaluate, Train, Learn","Edit, Type, Launch"],answer:1}
    },
    {
        id:"cert_viz_final", module:"m34", title:"34.3 Final Cert: Visualization Expert", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 FINAL CERTIFICATION — Visualization Expert</h2>
<div class="callout ct"><div class="cl">EXAM REQUIREMENTS</div><p>Create an 8-chart professional dashboard with proper titles, labels, colors, annotations, and styling. Must include: bar, line, pie, scatter, histogram, box plot, heatmap, and stacked bar.</p></div>`,
        tip:"Certification Tip: A visualization expert chart should be understood in 5 seconds. Title tells WHAT, labels tell HOW MUCH, color tells WHO/WHERE.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ FINAL CERTIFICATION: Visualization Expert ═══\n# Create 8-chart dashboard (all different types)\n\nprint("Build your certified 8-chart dashboard!")`,
        quiz:{question:"How many seconds should it take to understand a well-designed chart?",options:["30 seconds","5 seconds or less","2 minutes","It depends on complexity"],answer:1}
    },
    {
        id:"cert_stats_final", module:"m34", title:"34.4 Final Cert: Statistics Pro", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 FINAL CERTIFICATION — Statistics Professional</h2>
<div class="callout ct"><div class="cl">EXAM REQUIREMENTS</div><p>Perform a complete statistical analysis: descriptive stats, distributions, hypothesis testing, confidence intervals, correlation, and outlier detection. All with correct interpretation.</p></div>`,
        tip:"Certification Tip: Statistics is not about running functions — it's about INTERPRETING results. Every p-value, correlation, and confidence interval must come with a plain-English explanation.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ FINAL CERTIFICATION: Statistics Professional ═══\n# Complete statistical analysis with interpretation\n\nprint("Build your certified statistical analysis!")`,
        quiz:{question:"What's more important: running a statistical test or interpreting the results?",options:["Running the test","Interpreting the results in plain English","Both are equally important","Neither — charts matter more"],answer:1}
    },
    {
        id:"cert_ml_final", module:"m34", title:"34.5 Final Cert: ML Practitioner", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 FINAL CERTIFICATION — ML Practitioner</h2>
<div class="callout ct"><div class="cl">EXAM REQUIREMENTS</div><p>Build a complete ML system: data preprocessing, feature engineering, normalization, train/test split, 2+ models, confusion matrix, cross-validation, model comparison, and final recommendation.</p></div>`,
        tip:"Certification Tip: The ML Practitioner certificate proves you can build and evaluate models from scratch. This is rare — most people just call sklearn functions without understanding what's happening underneath.",
        defaultCode:`import numpy as np\nimport pandas as pd\n\n# ═══ FINAL CERTIFICATION: ML Practitioner ═══\n# Complete ML pipeline with model comparison\n\nprint("Build your certified ML pipeline!")`,
        quiz:{question:"What separates an ML practitioner from someone who just uses sklearn?",options:["Using more libraries","Understanding WHAT the algorithms do, not just HOW to call them","Writing longer code","Using GPUs"],answer:1}
    },
    {
        id:"cert_grandmaster_final", module:"m34", title:"34.6 Grand Master Certification", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 GRAND MASTER — The Ultimate Certification</h2>
<div class="callout ct"><div class="cl">THE FINAL TEST</div><p>Combine EVERY skill from all 150 lessons into one comprehensive, industry-ready project. This is the highest achievement in PyData-Flow Pro. This project goes on your portfolio, your LinkedIn, and into interviews.</p></div>
<p class="mb-2"><b>Requirements (ALL mandatory):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>150+ records of synthetic data</li>
<li>ETL pipeline with validation</li>
<li>15+ engineered features including interactions and encoding</li>
<li>Complete EDA (univariate + bivariate + multivariate)</li>
<li>Statistical testing with significance conclusions</li>
<li>Data normalization</li>
<li>2+ ML classifiers with cross-validation</li>
<li>Confusion matrix and F1 scores for each model</li>
<li>10+ chart professional dashboard</li>
<li>Executive report with 5+ actionable recommendations</li>
<li>All code organized with functions and documentation</li>
</ul>`,
        tip:"Grand Master Tip: This single project demonstrates more capability than any online course certificate. It proves you can take raw data and produce a complete, professional analysis that a real company could act on.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# GRAND MASTER CERTIFICATION PROJECT\n# PyData-Flow Pro — Highest Achievement\n#\n# Candidate: [Your Full Name]\n# Date: 2026\n# Mentor: Adewale Samson Adeagbo\n# Platform: PyData-Flow Pro (150 Lessons)\n# ═══════════════════════════════════════════════\n\n# This is your magnum opus.\n# Every concept from 150 lessons represented.\n# This project IS your data science resume.\n\nnp.random.seed(2024)\n\nprint("Build the most impressive project of your career.")\nprint("150 lessons. One masterpiece. Your future starts here.")`,
        quiz:{question:"What is the single most important quality of a Grand Master project?",options:["Length of code","Number of charts","Clear insights that a business could act on immediately","Use of complex algorithms"],answer:2}
    },
,
// ═══ MODULE 35: PYTHON OOP ═══
    {
        id:"oop_basics", module:"m35", title:"35.1 Classes & Objects", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Building Your Own Data Types</h2>
<p class="mb-4">A <b>class</b> is a blueprint for creating objects. An <b>object</b> bundles data (attributes) and functions (methods) together. In data science, classes make reusable analysis tools.</p>
<div class="code-block">class Student:<br>    def __init__(self, name, score):<br>        self.name = name<br>        self.score = score<br>    <br>    def grade(self):<br>        return "Pass" if self.score >= 50 else "Fail"<br><br>s = Student("Adewale", 95)<br>print(s.name, s.grade())  # Adewale Pass</div>
<p class="mb-2"><b>Key Concepts:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>__init__</code> — constructor, runs when object is created</li>
<li><code>self</code> — refers to the current object instance</li>
<li><b>Attributes</b> — data stored in the object (self.name)</li>
<li><b>Methods</b> — functions that belong to the object</li>
</ul>
<div class="callout ci"><div class="cl">HMG ACADEMY NOTE</div><p>Pandas DataFrame, Matplotlib Figure, and NumPy Array are all classes. Every time you write <code>df.head()</code>, you're calling a method on a DataFrame object. Understanding OOP means understanding how every Python library works.</p></div>`,
        tip:"Tutor's Insight: You've been using classes since lesson 1 — str, list, dict, DataFrame are all classes. Now you'll learn to build your own. This is how professional tools are built.",
        defaultCode:`# Classes for data science\nclass Student:\n    def __init__(self, name, maths, english, science):\n        self.name = name\n        self.maths = maths\n        self.english = english\n        self.science = science\n    \n    def average(self):\n        return round((self.maths + self.english + self.science) / 3, 1)\n    \n    def grade(self):\n        avg = self.average()\n        if avg >= 70: return "A"\n        elif avg >= 60: return "B"\n        elif avg >= 50: return "C"\n        else: return "F"\n    \n    def report(self):\n        print(f"{self.name}: Avg={self.average()}, Grade={self.grade()}")\n\n# Create student objects\nstudents = [\n    Student("Adewale", 95, 88, 92),\n    Student("Bisi", 72, 85, 68),\n    Student("Chidi", 55, 48, 62),\n    Student("Dayo", 88, 90, 85),\n]\n\nprint("=== HMG ACADEMY — Student Reports ===")\nfor s in students:\n    s.report()\n\n# Calculate class average\navg = sum(s.average() for s in students) / len(students)\nprint(f"\\nClass Average: {avg:.1f}")`,
        quiz:{question:"What does __init__ do in a class?",options:["Deletes the object","Runs automatically when an object is created","Imports modules","Defines a static method"],answer:1}
    },
    {
        id:"oop_methods", module:"m35", title:"35.2 Methods & Properties", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">Powerful Object Behavior</h2>
<p class="mb-4">Methods add behavior to objects. <b>Properties</b> make computed values look like attributes. <b>Class methods</b> create objects from different data formats.</p>
<div class="code-block">class DataSet:<br>    def __init__(self, values):<br>        self.values = values<br>    <br>    @property<br>    def mean(self):  # Access as ds.mean, not ds.mean()<br>        return sum(self.values) / len(self.values)<br>    <br>    def __len__(self):  # len(ds) works!<br>        return len(self.values)<br>    <br>    def __repr__(self):  # print(ds) shows this<br>        return f"DataSet(n={len(self.values)}, mean={self.mean:.1f})"</div>`,
        tip:"Tutor's Insight: The @property decorator is how Pandas makes df.shape work without parentheses. Understanding decorators unlocks understanding of professional Python code.",
        defaultCode:`class ScoreAnalyzer:\n    """A reusable score analysis tool — HMG Academy style."""\n    \n    def __init__(self, scores, label="Dataset"):\n        self.scores = list(scores)\n        self.label = label\n    \n    @property\n    def count(self):\n        return len(self.scores)\n    \n    @property\n    def mean(self):\n        return round(sum(self.scores) / self.count, 1)\n    \n    @property\n    def median(self):\n        s = sorted(self.scores)\n        n = self.count\n        if n % 2 == 0:\n            return (s[n//2-1] + s[n//2]) / 2\n        return s[n//2]\n    \n    @property\n    def pass_rate(self):\n        passed = sum(1 for s in self.scores if s >= 50)\n        return round(passed / self.count * 100, 1)\n    \n    def add_score(self, score):\n        self.scores.append(score)\n        return self\n    \n    def report(self):\n        print(f"📊 {self.label} — HMG Academy")\n        print(f"   Count: {self.count}")\n        print(f"   Mean:  {self.mean}")\n        print(f"   Median: {self.median}")\n        print(f"   Min:   {min(self.scores)} | Max: {max(self.scores)}")\n        print(f"   Pass Rate: {self.pass_rate}%")\n    \n    def __repr__(self):\n        return f"ScoreAnalyzer('{self.label}', n={self.count}, mean={self.mean})"\n    \n    def __len__(self):\n        return self.count\n\n# Use it\nmaths = ScoreAnalyzer([85, 42, 91, 67, 55, 78, 33, 96], "JSS3 Maths")\nmaths.report()\nprint(f"\\nObject: {maths}")\nprint(f"Length: {len(maths)}")\n\n# Chain methods\nmaths.add_score(72).add_score(88)\nprint(f"\\nAfter adding 2 scores: {maths}")`,
        quiz:{question:"What does @property do?",options:["Makes a method private","Lets you access a method like an attribute (no parentheses)","Deletes the attribute","Creates a class variable"],answer:1}
    },
    {
        id:"oop_analyzer", module:"m35", title:"35.3 Building a DataAnalyzer Class", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Professional Analysis Tool</h2>
<p class="mb-4">Build a complete <b>DataAnalyzer</b> class that wraps a Pandas DataFrame and provides one-command analysis — quality check, statistics, visualization, and reporting.</p>
<div class="callout ci"><div class="cl">HMG ACADEMY PROJECT</div><p>This class is a simplified version of what production data science tools look like. Companies like Meta and Google have internal analysis classes that standardize how teams explore data.</p></div>`,
        tip:"Tutor's Insight: Building a reusable analysis class saves hours on every future project. Write it once, use it everywhere. This is how senior data scientists work — they build tools, not just analyses.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nclass DataAnalyzer:\n    """Complete data analysis tool — HMG Academy."""\n    \n    def __init__(self, df, title="Analysis"):\n        self.df = df.copy()\n        self.title = title\n        self.numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()\n        self.cat_cols = df.select_dtypes(include=['object']).columns.tolist()\n    \n    def quality(self):\n        print(f"\\n🔍 Data Quality — {self.title}")\n        total = self.df.shape[0] * self.df.shape[1]\n        missing = self.df.isnull().sum().sum()\n        print(f"   Shape: {self.df.shape[0]} × {self.df.shape[1]}")\n        print(f"   Quality: {(1-missing/total)*100:.0f}%")\n        print(f"   Missing: {missing} | Duplicates: {self.df.duplicated().sum()}")\n        return self\n    \n    def describe(self):\n        print(f"\\n📊 Statistics — {self.title}")\n        for col in self.numeric_cols:\n            d = self.df[col].dropna()\n            print(f"   {col}: mean={d.mean():.1f}, std={d.std():.1f}, [{d.min():.0f}–{d.max():.0f}]")\n        for col in self.cat_cols:\n            print(f"   {col}: {self.df[col].nunique()} categories")\n        return self\n    \n    def visualize(self):\n        n = min(len(self.numeric_cols), 4)\n        if n == 0: return self\n        fig, axes = plt.subplots(1, n, figsize=(4*n, 4))\n        if n == 1: axes = [axes]\n        for ax, col in zip(axes, self.numeric_cols[:n]):\n            ax.hist(self.df[col].dropna(), bins=10, color='#6366f1', edgecolor='white')\n            ax.axvline(self.df[col].mean(), color='red', ls='--')\n            ax.set_title(col, fontweight='bold')\n        plt.suptitle(f'{self.title} — HMG Academy', fontweight='bold')\n        plt.tight_layout()\n        plt.show()\n        return self\n    \n    def full_report(self):\n        self.quality().describe().visualize()\n        print(f"\\n✅ Report complete — {self.title}")\n        return self\n\n# Use it!\ndf = pd.read_csv('data.csv')\nanalyzer = DataAnalyzer(df, "HMG Academy Student Data")\nanalyzer.full_report()`,
        quiz:{question:"Why return 'self' from class methods?",options:["Python requires it","It enables method chaining: obj.quality().describe().visualize()","It saves memory","It's faster"],answer:1}
    },
    {
        id:"oop_exercise", module:"m35", title:"35.4 Exercise: Student Management System", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🏛️ Exercise: Build a Student System</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY EXERCISE</div><p>Build a StudentManagement class that can add students, calculate grades, find at-risk students, generate reports, and export data — all using OOP principles.</p></div>
<p class="mb-2"><b>Required Methods:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><code>add_student(name, scores_dict)</code></li>
<li><code>get_averages()</code> → dict of name: average</li>
<li><code>get_at_risk(threshold=50)</code> → list of at-risk students</li>
<li><code>grade_report()</code> → print formatted report</li>
<li><code>to_dataframe()</code> → return Pandas DataFrame</li>
</ul>`,
        tip:"Exercise Tip: Start with __init__ and add_student. Get those working, then add each method one at a time. Test after each addition.",
        defaultCode:`import pandas as pd\n\n# ═══ EXERCISE: Student Management System ═══\n# Build for HMG Academy\n\nclass StudentManagement:\n    def __init__(self, school_name="HMG Academy"):\n        self.school_name = school_name\n        self.students = []  # List of dicts\n    \n    def add_student(self, name, scores):\n        # TODO: Add student with name and scores dict\n        pass\n    \n    def get_averages(self):\n        # TODO: Return {name: average} for all students\n        pass\n    \n    def get_at_risk(self, threshold=50):\n        # TODO: Return list of students below threshold\n        pass\n    \n    def grade_report(self):\n        # TODO: Print formatted report\n        pass\n    \n    def to_dataframe(self):\n        # TODO: Convert to Pandas DataFrame\n        pass\n\n# Test it\nsms = StudentManagement("HMG Academy Lagos")\nsms.add_student("Adewale", {"maths": 95, "english": 88, "science": 92})\nsms.add_student("Bisi", {"maths": 45, "english": 52, "science": 38})\nsms.add_student("Chidi", {"maths": 72, "english": 78, "science": 65})\n\nsms.grade_report()\nprint("Build your Student Management System!")`,
        quiz:{question:"In OOP, what is the difference between a class and an object?",options:["They're the same thing","A class is the blueprint, an object is a specific instance built from it","An object is the blueprint","Classes don't exist in Python"],answer:1}
    },

    // ═══ MODULE 36: TEXT & NLP ═══
    {
        id:"text_preprocess", module:"m36", title:"36.1 Text Preprocessing Pipeline", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Cleaning Text for Analysis</h2>
<p class="mb-4">Raw text is messy — mixed case, punctuation, extra spaces, numbers. A <b>text preprocessing pipeline</b> standardizes text into a clean, analyzable form.</p>
<div class="code-block">Pipeline Steps:<br>1. Lowercase<br>2. Remove punctuation<br>3. Remove numbers (optional)<br>4. Tokenize (split into words)<br>5. Remove stop words (the, a, is, and...)<br>6. Result: clean list of meaningful words</div>
<div class="callout ci"><div class="cl">HMG ACADEMY CONTEXT</div><p>Text analysis is used for: analyzing student feedback forms, processing survey responses, mining social media for sentiment, and extracting insights from reports. Every organization generates text data.</p></div>`,
        tip:"Tutor's Insight: 90% of text analysis is preprocessing. Clean text = good results. Messy text = garbage results. The actual analysis part is often just counting words after proper cleaning.",
        defaultCode:`import re\nfrom collections import Counter\n\ndef preprocess_text(text):\n    """Full text preprocessing pipeline."""\n    # Step 1: Lowercase\n    text = text.lower()\n    \n    # Step 2: Remove punctuation\n    text = re.sub(r'[^\\w\\s]', '', text)\n    \n    # Step 3: Remove numbers\n    text = re.sub(r'\\d+', '', text)\n    \n    # Step 4: Tokenize\n    words = text.split()\n    \n    # Step 5: Remove stop words\n    stop_words = {'the','a','an','is','was','are','were','be','been',\n                  'being','have','has','had','do','does','did','will',\n                  'would','could','should','may','might','shall','can',\n                  'and','but','or','nor','not','no','so','for','yet',\n                  'both','either','neither','each','every','all','any',\n                  'few','more','most','other','some','such','than',\n                  'too','very','just','about','above','after','again',\n                  'at','before','between','by','from','in','into',\n                  'of','on','out','over','to','under','up','with','i',\n                  'me','my','we','our','you','your','he','she','it',\n                  'they','them','their','this','that','these','those'}\n    words = [w for w in words if w not in stop_words and len(w) > 2]\n    \n    return words\n\n# Test with HMG Academy feedback\nfeedback = [\n    "The teaching at HMG Academy is excellent! Very clear explanations.",\n    "Good school but the facilities could be improved significantly.",\n    "Outstanding results! My child improved from D to A in Mathematics.",\n    "Average experience. Nothing special but not bad either.",\n    "Best academy in Lagos! Adewale's teaching methods are revolutionary.",\n    "Poor communication with parents. Need better updates on progress.",\n    "Fantastic tutoring! The online sessions are very interactive.",\n    "Too expensive for the quality provided. Expected more.",\n]\n\nprint("=== HMG ACADEMY FEEDBACK ANALYSIS ===")\nall_words = []\nfor fb in feedback:\n    words = preprocess_text(fb)\n    all_words.extend(words)\n\nfreq = Counter(all_words)\nprint(f"Total feedback: {len(feedback)}")\nprint(f"Unique words: {len(set(all_words))}")\nprint(f"\\nTop 10 words:")\nfor word, count in freq.most_common(10):\n    bar = "█" * (count * 3)\n    print(f"  {word:<15s} {count:>2d} {bar}")`,
        quiz:{question:"Why remove stop words in text analysis?",options:["They cause errors","They're too common to be meaningful (the, is, and, a)","Python can't process them","They use too much memory"],answer:1}
    },
    {
        id:"tfidf", module:"m36", title:"36.2 TF-IDF — Finding Important Words", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Which Words Actually Matter?</h2>
<p class="mb-4"><b>TF-IDF</b> (Term Frequency–Inverse Document Frequency) scores words by how important they are to a specific document. Common words score LOW, rare but relevant words score HIGH.</p>
<div class="code-block">TF  = count of word in document / total words in document<br>IDF = log(total documents / documents containing word)<br>TF-IDF = TF × IDF<br><br>"the" appears everywhere → LOW TF-IDF<br>"excellent" appears in 2 of 10 reviews → HIGH TF-IDF</div>`,
        tip:"Tutor's Insight: TF-IDF is used by Google Search, recommendation engines, and spam filters. It answers: 'What makes this document unique?' — the foundation of information retrieval.",
        defaultCode:`import re\nimport math\nfrom collections import Counter\n\ndef tokenize(text):\n    text = re.sub(r'[^\\w\\s]', '', text.lower())\n    stops = {'the','a','an','is','was','are','and','but','or','in','on','at','to','for','of','it','this','that','with','i','my','we','our','very','not','no'}\n    return [w for w in text.split() if w not in stops and len(w) > 2]\n\ndef compute_tfidf(documents):\n    """Compute TF-IDF from scratch."""\n    # Tokenize all docs\n    doc_tokens = [tokenize(doc) for doc in documents]\n    n_docs = len(documents)\n    \n    # Document frequency (how many docs contain each word)\n    df = Counter()\n    for tokens in doc_tokens:\n        for word in set(tokens):\n            df[word] += 1\n    \n    # Compute TF-IDF for each document\n    results = []\n    for i, tokens in enumerate(doc_tokens):\n        tf = Counter(tokens)\n        total = len(tokens) if tokens else 1\n        tfidf = {}\n        for word, count in tf.items():\n            tf_score = count / total\n            idf_score = math.log(n_docs / df[word])\n            tfidf[word] = round(tf_score * idf_score, 4)\n        results.append(tfidf)\n    \n    return results\n\n# HMG Academy reviews\nreviews = [\n    "Excellent teaching methods, very clear explanations from Adewale",\n    "Good school but facilities need improvement",\n    "Outstanding results, my child improved significantly in Mathematics",\n    "Average experience, nothing particularly impressive",\n    "Best academy in Lagos, revolutionary teaching approach",\n]\n\ntfidf_scores = compute_tfidf(reviews)\n\nprint("=== TF-IDF ANALYSIS — HMG Academy ===")\nfor i, (review, scores) in enumerate(zip(reviews, tfidf_scores)):\n    top_words = sorted(scores.items(), key=lambda x: x[1], reverse=True)[:3]\n    print(f"\\nReview {i+1}: \\"{review[:50]}...\\\"")\n    print(f"  Key words: {', '.join(f'{w} ({s:.3f})' for w, s in top_words)}")`,
        quiz:{question:"A word with HIGH TF-IDF score is:",options:["Very common across all documents","Rare across documents but frequent in this specific one","The longest word","Always a noun"],answer:1}
    },
    {
        id:"sentiment", module:"m36", title:"36.3 Sentiment Analysis from Scratch", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Is This Positive or Negative?</h2>
<p class="mb-4"><b>Sentiment analysis</b> classifies text as positive, negative, or neutral. We'll build a lexicon-based approach — no ML APIs needed, just word lists and scoring.</p>`,
        tip:"Tutor's Insight: Lexicon-based sentiment analysis is simple but surprisingly effective. Many production systems start with this approach before investing in ML models.",
        defaultCode:`import re\nfrom collections import Counter\n\n# Sentiment lexicon (word → score)\nPOSITIVE = {'excellent':3,'outstanding':3,'best':3,'amazing':3,'fantastic':3,'wonderful':3,\n            'great':2,'good':2,'nice':2,'improved':2,'impressive':2,'clear':2,'helpful':2,\n            'love':2,'enjoy':2,'recommend':2,'revolutionary':3,'interactive':2,\n            'happy':2,'satisfied':2,'brilliant':3,'superb':3,'effective':2}\nNEGATIVE = {'terrible':3,'worst':3,'horrible':3,'awful':3,'poor':2,'bad':2,\n            'disappointing':2,'expensive':1,'slow':1,'difficult':1,'confusing':1,\n            'boring':2,'waste':2,'unhappy':2,'frustrated':2,'complaint':2,\n            'average':1,'mediocre':2,'inadequate':2,'weak':1}\n\ndef analyze_sentiment(text):\n    words = re.sub(r'[^\\w\\s]', '', text.lower()).split()\n    pos_score = sum(POSITIVE.get(w, 0) for w in words)\n    neg_score = sum(NEGATIVE.get(w, 0) for w in words)\n    total = pos_score - neg_score\n    if total > 1: return "😊 Positive", total\n    elif total < -1: return "😠 Negative", total\n    return "😐 Neutral", total\n\n# HMG Academy feedback analysis\nfeedback = [\n    "Excellent teaching! Adewale's methods are revolutionary and clear.",\n    "Terrible experience. Poor communication and expensive fees.",\n    "Good school with impressive results. My child is happy.",\n    "Average. Nothing special about the teaching methods.",\n    "Outstanding academy! Best tutoring in Lagos. Highly recommend.",\n    "Disappointing facilities. Expected more for the price.",\n    "Fantastic online sessions. Interactive and very effective.",\n    "The worst customer service. Slow response to complaints.",\n]\n\nprint("=== SENTIMENT ANALYSIS — HMG Academy Feedback ===")\nprint(f"{'#':>2s}  {'Sentiment':<14s} {'Score':>5s}  {'Feedback'}")\nprint("-" * 70)\n\nsentiments = []\nfor i, fb in enumerate(feedback, 1):\n    sent, score = analyze_sentiment(fb)\n    sentiments.append(sent)\n    print(f"{i:>2d}. {sent:<14s} {score:>+4d}   {fb[:55]}...")\n\n# Summary\nprint(f"\\n=== SUMMARY ===")\nfor label in ["😊 Positive", "😐 Neutral", "😠 Negative"]:\n    count = sentiments.count(label)\n    print(f"  {label}: {count} ({count/len(feedback):.0%})")`,
        quiz:{question:"What is a lexicon-based sentiment approach?",options:["Uses neural networks","Scores text using predefined word lists (positive/negative words)","Requires an API","Only works in English"],answer:1}
    },
    {
        id:"nlp_exercise", module:"m36", title:"36.4 Exercise: Customer Review Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">📰 Exercise: Complete Review Analysis</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY EXERCISE</div><p>Build a complete text analysis pipeline: preprocess 15+ customer reviews, compute word frequencies, run TF-IDF, perform sentiment analysis, and generate a summary report with recommendations.</p></div>`,
        tip:"Exercise Tip: The output should answer: 'What do customers like?', 'What do they complain about?', and 'What should we improve?' — actionable insights, not just word counts.",
        defaultCode:`import re\nfrom collections import Counter\n\n# ═══ EXERCISE: Complete Review Analysis ═══\n# For HMG Academy Virtual Study Centre\n\nreviews = [\n    "Best academy in Lagos! The teaching is excellent.",\n    "Good tutoring but the online platform is slow.",\n    "My child's grades improved dramatically. Thank you HMG!",\n    "Average experience. Expected more personalized attention.",\n    "Outstanding mathematics instruction from Adewale.",\n    "Too expensive compared to other tutoring centres.",\n    "The STEM subjects are taught brilliantly.",\n    "Poor scheduling system. Classes often start late.",\n    "Highly recommend for WAEC and JAMB preparation.",\n    "The facilities need upgrading urgently.",\n    "Fantastic results! From F to B in one term.",\n    "Communication with parents could be much better.",\n    "Best investment in my child's education.",\n    "Boring teaching style in some subjects.",\n    "Revolutionary approach to teaching computer science.",\n]\n\n# TODO: Build complete analysis pipeline\n# 1. Preprocess all reviews\n# 2. Word frequency analysis\n# 3. Sentiment analysis for each review\n# 4. Overall sentiment summary\n# 5. Top praised aspects\n# 6. Top complaints\n# 7. Recommendations report\n\nprint("Build your complete text analysis for HMG Academy!")`,
        quiz:{question:"What should a text analysis report answer for a business?",options:["Just word counts","What customers like, what they complain about, and what to improve","The longest review","Grammar errors"],answer:1}
    },

    // ═══ MODULE 37: TIME SERIES ═══
    {
        id:"ts_decomposition", module:"m37", title:"37.1 Time Series Decomposition", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Breaking Time into Components</h2>
<p class="mb-4">Every time series has hidden components: <b>Trend</b> (long-term direction), <b>Seasonality</b> (repeating patterns), and <b>Residual</b> (random noise). Decomposition separates these for clearer analysis.</p>
<div class="code-block">Time Series = Trend + Seasonality + Residual<br><br>Trend:       Are sales going up or down overall?<br>Seasonality: Do sales spike every December?<br>Residual:    What's left after removing trend and season?</div>
<div class="callout ci"><div class="cl">HMG ACADEMY APPLICATION</div><p>Student enrollment shows seasonality (peaks in September/January), trend (growing over years), and residuals (random fluctuations). Understanding these components helps plan staffing and resources.</p></div>`,
        tip:"Tutor's Insight: Decomposition is the first thing to do with any time series data. It answers: 'Is this pattern real (trend/seasonal) or just random noise (residual)?'",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\n# Generate time series with known components\ndays = 365\nt = np.arange(days)\n\n# Components\ntrend = 0.1 * t + 50  # Upward trend\nseasonality = 15 * np.sin(2 * np.pi * t / 30)  # Monthly cycle\nresidual = np.random.normal(0, 5, days)  # Random noise\n\n# Combined series\nseries = trend + seasonality + residual\n\n# Simple decomposition using moving average\nwindow = 30\ntrend_estimate = np.convolve(series, np.ones(window)/window, mode='same')\ndetrended = series - trend_estimate\n\nprint("=== TIME SERIES DECOMPOSITION ===")\nprint(f"Data points: {days}")\nprint(f"Overall range: {series.min():.0f} to {series.max():.0f}")\nprint(f"Trend: {trend[0]:.0f} → {trend[-1]:.0f} (growing)")\n\n# Visualize\nfig, axes = plt.subplots(3, 1, figsize=(10, 8), sharex=True)\nfig.suptitle('Time Series Decomposition — HMG Academy', fontweight='bold')\n\naxes[0].plot(t, series, color='#6366f1', linewidth=0.8)\naxes[0].plot(t, trend_estimate, color='red', linewidth=2, label='Trend')\naxes[0].set_ylabel('Value'); axes[0].legend(); axes[0].set_title('Original + Trend')\n\naxes[1].plot(t, detrended, color='#22c55e', linewidth=0.8)\naxes[1].set_ylabel('Detrended'); axes[1].set_title('Seasonal + Residual')\n\naxes[2].bar(t, residual, color='#f59e0b', alpha=0.5, width=1)\naxes[2].set_ylabel('Residual'); axes[2].set_title('Random Noise')\naxes[2].set_xlabel('Day')\n\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What are the 3 components of a time series?",options:["Mean, Median, Mode","Trend, Seasonality, Residual","Past, Present, Future","Input, Process, Output"],answer:1}
    },
    {
        id:"ts_moving_avg", module:"m37", title:"37.2 Moving Averages & Smoothing", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Seeing Through the Noise</h2>
<p class="mb-4"><b>Moving averages</b> smooth out random fluctuations to reveal underlying trends. A 7-day MA averages each point with its 6 neighbors, creating a smoother line.</p>
<div class="code-block">Simple Moving Average (SMA):<br>  df['sma_7'] = df['value'].rolling(7).mean()<br><br>Exponential Moving Average (EMA):<br>  df['ema_7'] = df['value'].ewm(span=7).mean()<br>  # Gives more weight to recent values</div>`,
        tip:"Tutor's Insight: Stock traders use 50-day and 200-day moving averages. When the 50-day crosses above the 200-day, it's a 'golden cross' (buy signal). MA is one of the most used analysis tools in finance.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\n# HMG Academy daily enrollment inquiries\ndates = pd.date_range('2026-01-01', periods=90, freq='D')\ninquiries = np.random.normal(20, 5, 90).clip(5, 40).round(0)\n# Add weekly seasonality (more on weekdays)\nfor i, d in enumerate(dates):\n    if d.dayofweek >= 5:  # Weekend\n        inquiries[i] *= 0.5\n\ndf = pd.DataFrame({'date': dates, 'inquiries': inquiries})\ndf['sma_7'] = df['inquiries'].rolling(7).mean()\ndf['sma_14'] = df['inquiries'].rolling(14).mean()\ndf['ema_7'] = df['inquiries'].ewm(span=7).mean()\n\nprint("=== ENROLLMENT INQUIRY TRENDS — HMG Academy ===")\nprint(f"Period: {dates[0].strftime('%b %d')} to {dates[-1].strftime('%b %d')}")\nprint(f"Total inquiries: {df['inquiries'].sum():.0f}")\nprint(f"Daily average: {df['inquiries'].mean():.1f}")\nprint(f"\\nTrend (7-day MA): {df['sma_7'].iloc[-1]:.1f} (latest)")\n\n# Peak/trough analysis\nprint(f"\\nPeak (7d MA): {df['sma_7'].max():.1f} on day {df['sma_7'].idxmax()+1}")\nprint(f"Trough (7d MA): {df['sma_7'].min():.1f} on day {df['sma_7'].idxmin()+1}")\n\nfig, ax = plt.subplots(figsize=(10, 5))\nax.bar(range(len(df)), df['inquiries'], alpha=0.3, color='#94a3b8', label='Daily')\nax.plot(df['sma_7'].values, color='#6366f1', linewidth=2, label='7-day SMA')\nax.plot(df['sma_14'].values, color='#ef4444', linewidth=2, label='14-day SMA')\nax.plot(df['ema_7'].values, color='#22c55e', linewidth=2, ls='--', label='7-day EMA')\nax.set_title('HMG Academy — Daily Enrollment Inquiries', fontweight='bold')\nax.set_ylabel('Inquiries')\nax.legend(fontsize=9)\nax.grid(axis='y', alpha=0.2)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does EMA give more weight to compared to SMA?",options:["Oldest values","Recent values","All values equally","Random values"],answer:1}
    },
    {
        id:"ts_forecast", module:"m37", title:"37.3 Simple Forecasting Methods", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Predicting the Future</h2>
<p class="mb-4"><b>Forecasting</b> uses historical patterns to predict future values. We'll build three simple but effective methods — no ML required.</p>
<div class="code-block">Method 1: Last Value (Naive) — tomorrow = today<br>Method 2: Average — tomorrow = average of all past<br>Method 3: Moving Average — tomorrow = average of last N days<br>Method 4: Linear Trend — fit a line, extend it</div>`,
        tip:"Tutor's Insight: Simple forecasting methods are often 80% as accurate as complex ML models. Always start with a simple baseline — if a basic method works well enough, you don't need deep learning.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\n# HMG Academy monthly revenue (₦ thousands)\nmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\nrevenue = np.array([120,135,128,145,150,142,155,162,170,158,175,190])\n\ntrain = revenue[:9]  # Jan-Sep (known)\ntest = revenue[9:]   # Oct-Dec (predict these)\n\n# Method 1: Naive (last value)\nnaive_pred = np.full(3, train[-1])\n\n# Method 2: Average\navg_pred = np.full(3, train.mean())\n\n# Method 3: Moving Average (last 3 months)\nma_pred = np.full(3, train[-3:].mean())\n\n# Method 4: Linear trend\nx = np.arange(len(train))\nslope = np.polyfit(x, train, 1)[0]\ntrend_pred = train[-1] + slope * np.arange(1, 4)\n\nprint("=== REVENUE FORECASTING — HMG Academy ===")\nprint(f"Training: Jan-Sep | Testing: Oct-Dec\\n")\nprint(f"{'Method':<20s} {'Oct':>6s} {'Nov':>6s} {'Dec':>6s} {'MAE':>8s}")\nprint("-" * 48)\n\nfor name, pred in [('Naive (last)', naive_pred), ('Average', avg_pred),\n                     ('Moving Avg (3m)', ma_pred), ('Linear Trend', trend_pred)]:\n    mae = np.mean(np.abs(pred - test))\n    print(f"{name:<20s} {pred[0]:>6.0f} {pred[1]:>6.0f} {pred[2]:>6.0f} {mae:>7.1f}")\n\nprint(f"{'ACTUAL':<20s} {test[0]:>6.0f} {test[1]:>6.0f} {test[2]:>6.0f}")\n\n# Visualize\nfig, ax = plt.subplots(figsize=(10, 5))\nax.plot(range(9), train, 'o-', color='#6366f1', linewidth=2, label='Training')\nax.plot(range(9, 12), test, 's-', color='#000', linewidth=2, label='Actual', markersize=8)\nax.plot(range(9, 12), trend_pred, '^--', color='#22c55e', linewidth=2, label='Trend Forecast')\nax.plot(range(9, 12), ma_pred, 'v--', color='#f59e0b', linewidth=2, label='MA Forecast')\nax.set_xticks(range(12)); ax.set_xticklabels(months)\nax.set_title('HMG Academy Revenue Forecast (₦K)', fontweight='bold')\nax.set_ylabel('Revenue (₦K)')\nax.legend(fontsize=9)\nax.grid(alpha=0.2)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What is MAE (Mean Absolute Error)?",options:["Average of predictions","Average of how far off each prediction was from actual","The maximum error","The minimum error"],answer:1}
    },
    {
        id:"ts_exercise", module:"m37", title:"37.4 Exercise: Sales Forecasting", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">📆 Exercise: Forecast HMG Academy Revenue</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY EXERCISE</div><p>Build a complete forecasting system: generate 24 months of revenue data with trend and seasonality, decompose it, apply 3 forecasting methods, evaluate with MAE, and recommend the best approach.</p></div>`,
        tip:"Exercise Tip: Always compare your forecast to a naive baseline (last value). If your fancy method doesn't beat the naive approach, it's not worth the complexity.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Revenue Forecasting ═══\n# HMG Academy Virtual Study Centre\n\n# TODO: Generate 24 months of revenue with trend + seasonality\n# TODO: Split into train (18 months) and test (6 months)\n# TODO: Apply 3 forecasting methods\n# TODO: Calculate MAE for each\n# TODO: Visualize predictions vs actual\n# TODO: Recommend the best method\n\nprint("Build your forecasting system for HMG Academy!")`,
        quiz:{question:"Why always compare to a naive forecast?",options:["It's the most accurate","If you can't beat 'last value repeated', your method adds no value","Python requires it","It's the fastest"],answer:1}
    },

    // ═══ MODULE 38: DATA STORYTELLING ═══
    {
        id:"story_narrative", module:"m38", title:"38.1 From Numbers to Narrative", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Data Without a Story is Just Numbers</h2>
<p class="mb-4"><b>Data storytelling</b> transforms analysis into a compelling narrative that drives action. It's the skill that separates data scientists who get ignored from those who change organizations.</p>
<div class="code-block">Bad:  "The mean score is 62.3 with SD of 14.7"<br>Good: "40% of our students are at risk of failing"<br>Best: "40% of students are at risk — here's a 3-step<br>      intervention plan that costs ₦0 and could save<br>      their academic year"</div>
<p class="mb-2"><b>The Data Story Framework:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Hook</b> — start with the most surprising finding</li>
<li><b>Context</b> — why this matters to the audience</li>
<li><b>Evidence</b> — data and charts that support the finding</li>
<li><b>Insight</b> — what the data MEANS (not just what it shows)</li>
<li><b>Action</b> — specific recommendation the audience can act on</li>
</ul>
<div class="callout ci"><div class="cl">HMG ACADEMY PRINCIPLE</div><p>At HMG Academy, Adewale teaches that data science is ultimately about COMMUNICATION. The best analysis in the world is worthless if you can't explain it to someone who can act on it.</p></div>`,
        tip:"Tutor's Insight: I've seen brilliant analyses get ignored because the data scientist presented raw statistics instead of a story. Lead with the insight, not the method.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\nn = 50\ndf = pd.DataFrame({\n    'name': [f"Student_{i:02d}" for i in range(1, n+1)],\n    'score': np.random.normal(62, 18, n).clip(10, 100).round(1),\n    'attend': np.random.normal(78, 14, n).clip(40, 100).round(0),\n    'class': np.random.choice(['SS1','SS2','SS3'], n),\n})\ndf['grade'] = pd.cut(df['score'], bins=[0,40,50,60,70,100], labels=['F','D','C','B','A'])\ndf['at_risk'] = (df['score'] < 50) | (df['attend'] < 65)\n\n# ═══ DATA STORY: Student Performance ═══\n\n# BAD: Just statistics\nprint("❌ BAD REPORT (boring statistics):")\nprint(f"   Mean: {df['score'].mean():.1f}, SD: {df['score'].std():.1f}")\nprint(f"   Median: {df['score'].median():.1f}")\n\n# GOOD: Story with insight and action\nprint(f"\\n✅ GOOD REPORT (data story):")\nprint(f"{'='*55}")\nprint(f"  📊 HMG ACADEMY — URGENT: Student Performance Alert")\nprint(f"{'='*55}")\n\nat_risk_count = df['at_risk'].sum()\nat_risk_pct = df['at_risk'].mean()\n\n# HOOK\nprint(f"\\n  🔴 FINDING: {at_risk_count} students ({at_risk_pct:.0%}) are at")\nprint(f"  immediate risk of academic failure.\\n")\n\n# CONTEXT\nprint(f"  WHY THIS MATTERS:")\nprint(f"  If no action is taken, we project {at_risk_count} failures at")\nprint(f"  year-end — a {at_risk_pct:.0%} failure rate vs our 10% target.\\n")\n\n# EVIDENCE\nprint(f"  EVIDENCE:")\nfor cls, grp in df.groupby('class'):\n    risk = grp['at_risk'].sum()\n    print(f"  {cls}: {risk}/{len(grp)} at risk ({grp['at_risk'].mean():.0%})\")\n\n# ACTION\nprint(f"\\n  📋 RECOMMENDED ACTIONS:")\nprint(f"  1. Assign tutoring partners for {at_risk_count} at-risk students (₦0 cost)\")\nprint(f"  2. Weekly progress check-ins with parents\")\nprint(f"  3. Extra revision classes for bottom quartile\")\nprint(f"  4. Re-assess in 4 weeks\")\nprint(f"\\n  Report by: Adewale Samson Adeagbo — HMG Academy\")`,
        quiz:{question:"What should a data story ALWAYS end with?",options:["More statistics","A specific recommendation the audience can act on","A chart","A disclaimer"],answer:1}
    },
    {
        id:"story_executive", module:"m38", title:"38.2 Executive Presentations", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Presenting to Decision Makers</h2>
<p class="mb-4">Executives have 5 minutes of attention. Your presentation must be: <b>concise</b> (one page), <b>visual</b> (chart-driven), and <b>actionable</b> (clear next steps).</p>
<div class="code-block">Executive Summary Template:<br>1. HEADLINE: One-sentence finding (the "so what?")<br>2. KEY METRIC: The single number that matters most<br>3. TREND: Is it getting better or worse?<br>4. COMPARISON: vs target, vs last period, vs competitors<br>5. RECOMMENDATION: What should we do about it?</div>`,
        tip:"Tutor's Insight: At HMG Academy, every data project ends with an executive summary. This trains students to communicate like professionals from day one — a skill most data science courses completely ignore.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'student': [f"S{i:02d}" for i in range(1,41)],\n    'score': np.random.normal(65, 15, 40).clip(15, 100).round(1),\n    'attend': np.random.normal(80, 12, 40).clip(40, 100).round(0),\n    'dept': np.random.choice(['Science','Arts','Commerce'], 40),\n})\ndf['grade'] = pd.cut(df['score'], bins=[0,40,50,60,70,100], labels=['F','D','C','B','A'])\ndf['risk'] = np.where((df['score']<50)|(df['attend']<70), 'At Risk', 'OK')\n\n# Executive one-pager\nprint("╔"+"═"*56+"╗")\nprint("║  HMG ACADEMY — EXECUTIVE PERFORMANCE DASHBOARD       ║")\nprint("║  Prepared by: Adewale Samson Adeagbo                 ║")\nprint("╠"+"═"*56+"╣")\nprint(f"║  📊 HEADLINE: {(df['score']>=50).mean():.0%} pass rate — {'ABOVE' if (df['score']>=50).mean()>0.7 else 'BELOW'} the 70% target  ║")\nprint("╠"+"═"*56+"╣")\nprint(f"║  Students: {len(df):>3d}  │  Average: {df['score'].mean():>5.1f}  │  At Risk: {(df['risk']=='At Risk').sum():>2d}     ║")\nprint("╠"+"═"*56+"╣")\nfor dept, grp in df.groupby('dept'):\n    risk_pct = (grp['risk']=='At Risk').mean()\n    emoji = "🟢" if risk_pct < 0.2 else "🟡" if risk_pct < 0.4 else "🔴"\n    print(f"║  {emoji} {dept:<10s}: avg={grp['score'].mean():>5.1f}, risk={risk_pct:.0%}             ║")\nprint("╠"+"═"*56+"╣")\nprint("║  📋 RECOMMENDATIONS:                                 ║")\nprint("║  1. Focus intervention on At Risk students           ║")\nprint("║  2. Investigate low-attendance root causes           ║")\nprint("║  3. Set department-specific improvement targets      ║")\nprint("╚"+"═"*56+"╝")\n\n# One-chart summary\nfig, ax = plt.subplots(figsize=(8, 4))\ndf.groupby('dept')['score'].mean().plot(kind='barh', ax=ax, color=['#ef4444','#f59e0b','#22c55e'])\nax.axvline(50, color='red', ls='--', label='Pass mark')\nax.set_title('Average Score by Department — HMG Academy', fontweight='bold')\nax.legend()\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"How long does an executive typically spend reading a report?",options:["30 minutes","5 minutes or less","1 hour","As long as needed"],answer:1}
    },
    {
        id:"story_star", module:"m38", title:"38.3 The STAR Framework", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Structuring Data Insights</h2>
<p class="mb-4">The <b>STAR framework</b> structures any data insight into a clear, persuasive narrative that anyone can understand.</p>
<div class="code-block">S — Situation: What's the context?<br>T — Task: What question are we answering?<br>A — Action: What did we do (analysis)?<br>R — Result: What did we find and recommend?</div>`,
        tip:"Tutor's Insight: STAR is the same framework used in job interviews. Practice presenting data insights using STAR and you'll ace both your analysis presentations AND your interview presentations.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\nnp.random.seed(2024)\n\ndef star_report(df, title):\n    """Generate a STAR-format data insight report."""\n    avg = df['score'].mean()\n    risk = (df['score'] < 50).sum()\n    attend_risk = (df['attend'] < 70).sum()\n    \n    print(f"\\n{'='*55}")\n    print(f"  {title}")\n    print(f"  STAR Framework Analysis — HMG Academy")\n    print(f"  By: Adewale Samson Adeagbo")\n    print(f"{'='*55}")\n    \n    print(f"\\n📍 SITUATION:")\n    print(f"  HMG Academy has {len(df)} students across multiple classes.")\n    print(f"  End-of-term exams have been completed.")\n    print(f"  Management needs to identify struggling students.\\n")\n    \n    print(f"🎯 TASK:")\n    print(f"  Analyze performance data to identify at-risk students")\n    print(f"  and recommend targeted interventions.\\n")\n    \n    print(f"📊 ACTION:")\n    print(f"  Analyzed {len(df)} student records across {df.shape[1]} metrics.")\n    print(f"  Computed averages, pass rates, and risk indicators.")\n    print(f"  Cross-referenced scores with attendance patterns.\\n")\n    \n    print(f"📋 RESULT:")\n    print(f"  • Average score: {avg:.1f}% (target: 65%)\")\n    print(f"  • Pass rate: {(df['score']>=50).mean():.0%} (target: 80%)\")\n    print(f"  • At-risk (score): {risk} students ({risk/len(df):.0%})\")\n    print(f"  • At-risk (attendance): {attend_risk} students\")\n    print(f"  • Key finding: Attendance below 70% correlates with failure\")\n    print(f"\\n  RECOMMENDATIONS:\")\n    print(f"  1. Mandatory tutoring for {risk} low-scoring students\")\n    print(f"  2. Parent notifications for {attend_risk} low-attendance students\")\n    print(f"  3. Weekly progress tracking dashboard\")\n\ndf = pd.DataFrame({\n    'name': [f"S_{i:02d}" for i in range(1, 41)],\n    'score': np.random.normal(62, 18, 40).clip(10, 100).round(1),\n    'attend': np.random.normal(78, 15, 40).clip(40, 100).round(0),\n})\n\nstar_report(df, "End-of-Term Performance Analysis")`,
        quiz:{question:"In the STAR framework, what does 'R' stand for?",options:["Research","Report","Result — what you found and recommend","Review"],answer:2}
    },
    {
        id:"story_exercise", module:"m38", title:"38.4 Exercise: Write a Data Story", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">📖 Exercise: Complete Data Story</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY EXERCISE</div><p>Take a dataset, analyze it, and produce a complete data story using the STAR framework. Include: hook, context, evidence (charts), insight, and actionable recommendations. The output should be readable by a non-technical school principal.</p></div>`,
        tip:"Exercise Tip: Read your output aloud. If it sounds like a statistics textbook, rewrite it. If it sounds like a conversation with a smart friend, you've got it right.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ EXERCISE: Write a Complete Data Story ═══\n# Audience: HMG Academy School Principal\n# Goal: Persuade them to invest in an intervention program\n\nnp.random.seed(42)\nn = 60\ndf = pd.DataFrame({\n    'name': [f"Student_{i:02d}" for i in range(1, n+1)],\n    'class': np.random.choice(['JSS3','SS1','SS2','SS3'], n),\n    'maths': np.random.normal(58, 20, n).clip(5, 100).round(1),\n    'english': np.random.normal(65, 15, n).clip(10, 100).round(1),\n    'science': np.random.normal(55, 22, n).clip(5, 100).round(1),\n    'attend': np.random.normal(75, 18, n).clip(30, 100).round(0),\n})\n\n# TODO: Build complete data story with:\n# 1. HOOK — most surprising finding\n# 2. CONTEXT — why this matters\n# 3. EVIDENCE — key statistics + chart\n# 4. INSIGHT — what the data MEANS\n# 5. ACTION — 3 specific recommendations\n# The principal should be able to act on this IMMEDIATELY\n\nprint("Write your data story for the HMG Academy principal!")`,
        quiz:{question:"What makes a data story different from a data report?",options:["More charts","A narrative structure with a hook, conflict, and resolution","Longer length","More complex statistics"],answer:1}
    },

    // ═══ MODULE 39: NIGERIAN DATA PROJECTS ═══
    {
        id:"ng_education", module:"m39", title:"39.1 🇳🇬 Nigerian Education Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🇳🇬 Project: Nigerian Education Sector</h2>
<p class="mb-4">Analyze education data across Nigerian states — enrollment rates, teacher ratios, exam performance, and resource allocation. This is real-world analysis for policy makers.</p>
<div class="callout ci"><div class="cl">HMG ACADEMY CONTEXT</div><p>As an educator with 15+ years in Nigerian classrooms, Adewale designed this project to reflect the real challenges facing Nigerian education: unequal resource distribution, high student-teacher ratios, and regional performance disparities.</p></div>`,
        tip:"Tutor's Insight: This type of analysis is what the Federal Ministry of Education needs. Data scientists who can analyze Nigerian education data are in high demand at NGOs, government agencies, and EdTech companies.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\n# Nigerian Education Data (simulated)\nstates = ['Lagos','Kano','Rivers','Oyo','FCT','Enugu','Kaduna','Delta','Ogun','Anambra',\n          'Borno','Bayelsa','Edo','Imo','Kwara','Plateau','Osun','Abia','Ekiti','Benue']\n\ndf = pd.DataFrame({\n    'state': states,\n    'zone': ['SW','NW','SS','SW','NC','SE','NW','SS','SW','SE',\n             'NE','SS','SS','SE','NC','NC','SW','SE','SW','NC'],\n    'enrollment_k': np.random.normal(500, 200, 20).clip(100, 1200).round(0),\n    'teacher_ratio': np.random.normal(45, 15, 20).clip(20, 80).round(0),\n    'pass_rate': np.random.normal(55, 18, 20).clip(15, 90).round(1),\n    'budget_bn': np.random.exponential(30, 20).clip(5, 100).round(1),\n})\n\nprint("="*55)\nprint("  🇳🇬 NIGERIAN EDUCATION SECTOR ANALYSIS")\nprint("  HMG Academy Research | By: Adewale Samson Adeagbo")\nprint("="*55)\n\nprint(f"\\n📊 OVERVIEW")\nprint(f"  States analyzed: {len(df)}")\nprint(f"  Avg pass rate: {df['pass_rate'].mean():.1f}%")\nprint(f"  Avg teacher ratio: 1:{df['teacher_ratio'].mean():.0f}")\n\nprint(f"\\n📍 BY GEOPOLITICAL ZONE:")\nfor zone, grp in df.groupby('zone'):\n    zones = {'SW':'South-West','NW':'North-West','SS':'South-South',\n             'SE':'South-East','NC':'North-Central','NE':'North-East'}\n    print(f"  {zones.get(zone, zone)}: pass={grp['pass_rate'].mean():.1f}%, "\n          f"ratio=1:{grp['teacher_ratio'].mean():.0f}, states={len(grp)}")\n\nprint(f"\\n🏆 TOP 5 STATES (Pass Rate):")\nfor _, r in df.nlargest(5, 'pass_rate').iterrows():\n    print(f"  {r['state']}: {r['pass_rate']}% pass, 1:{r['teacher_ratio']:.0f} ratio")\n\nprint(f"\\n⚠️ BOTTOM 5 STATES:")\nfor _, r in df.nsmallest(5, 'pass_rate').iterrows():\n    print(f"  {r['state']}: {r['pass_rate']}% pass, 1:{r['teacher_ratio']:.0f} ratio")\n\ncorr = df['teacher_ratio'].corr(df['pass_rate'])\nprint(f"\\n📐 Correlation (teacher ratio vs pass rate): {corr:.2f}")\nif corr < -0.3:\n    print("  → Higher ratios correlate with LOWER pass rates")\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\ndf.sort_values('pass_rate').plot(kind='barh', x='state', y='pass_rate', ax=axes[0], color='#6366f1', legend=False)\naxes[0].set_title('Pass Rate by State', fontweight='bold')\naxes[0].set_xlabel('Pass Rate (%)')\naxes[1].scatter(df['teacher_ratio'], df['pass_rate'], s=df['budget_bn']*3,\n                c=df['pass_rate'], cmap='RdYlGn', edgecolor='white', alpha=0.8)\naxes[1].set_xlabel('Student:Teacher Ratio')\naxes[1].set_ylabel('Pass Rate (%)')\naxes[1].set_title('Ratio vs Performance (size=budget)', fontweight='bold')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What does a high student-teacher ratio indicate?",options:["Excellent education","Too many students per teacher — potential quality issue","More funding","Better results"],answer:1}
    },
    {
        id:"ng_transport", module:"m39", title:"39.2 🇳🇬 Lagos Transport Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🇳🇬 Project: Lagos Traffic Patterns</h2>
<p class="mb-4">Analyze traffic and transport data in Lagos — Africa's most congested megacity. Identify peak hours, busiest routes, and the economic impact of traffic.</p>`,
        tip:"Tutor's Insight: Lagos traffic costs the economy an estimated $55 million daily in lost productivity. Data analysis of transport patterns helps LAMATA and urban planners make better decisions.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\n# Lagos Transport Data (simulated)\nhours = list(range(5, 23))  # 5am to 10pm\nroutes = ['Lekki-VI','Ikeja-Island','Surulere-CMS','Oshodi-Airport','Ikorodu-Yaba']\n\ndata = []\nfor route in routes:\n    for hour in hours:\n        is_peak = hour in [7,8,9,17,18,19]\n        base_time = np.random.normal(45, 10) if not is_peak else np.random.normal(90, 20)\n        data.append({\n            'route': route,\n            'hour': hour,\n            'travel_min': round(max(15, base_time), 1),\n            'vehicles': int(np.random.normal(800 if is_peak else 300, 100)),\n        })\n\ndf = pd.DataFrame(data)\n\nprint("="*50)\nprint("  🇳🇬 LAGOS TRANSPORT ANALYSIS")\nprint("  HMG Academy | Adewale Samson Adeagbo")\nprint("="*50)\n\nprint(f"\\n📊 Data: {len(df)} observations across {len(routes)} routes")\n\n# Peak analysis\npeak = df[df['hour'].isin([7,8,9,17,18,19])]\noff = df[~df['hour'].isin([7,8,9,17,18,19])]\nprint(f"\\n⏰ PEAK vs OFF-PEAK:")\nprint(f"  Peak avg travel: {peak['travel_min'].mean():.0f} min")\nprint(f"  Off-peak avg:    {off['travel_min'].mean():.0f} min")\nprint(f"  Time penalty:    +{peak['travel_min'].mean()-off['travel_min'].mean():.0f} min during rush hour")\n\nprint(f"\\n🛣️ WORST ROUTES (peak hours):")\nroute_peak = peak.groupby('route')['travel_min'].mean().sort_values(ascending=False)\nfor route, time in route_peak.items():\n    print(f"  {route}: {time:.0f} min avg during peak")\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\nhourly = df.groupby('hour')['travel_min'].mean()\nax1.fill_between(hourly.index, hourly.values, alpha=0.3, color='#ef4444')\nax1.plot(hourly.index, hourly.values, 'o-', color='#ef4444', linewidth=2)\nax1.set_title('Average Travel Time by Hour', fontweight='bold')\nax1.set_xlabel('Hour'); ax1.set_ylabel('Minutes')\nax1.axhspan(ymin=0, ymax=hourly.values.min()+10, alpha=0.1, color='green')\nroute_peak.plot(kind='barh', ax=ax2, color='#6366f1')\nax2.set_title('Peak Hour Travel by Route', fontweight='bold')\nax2.set_xlabel('Minutes')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What is the economic impact of traffic congestion?",options:["No impact","Lost productivity from time spent in traffic","More fuel sales","Better road infrastructure"],answer:1}
    },
    {
        id:"ng_ecommerce", module:"m39", title:"39.3 🇳🇬 Nigerian E-Commerce Market", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🇳🇬 Project: E-Commerce Analysis</h2>
<p class="mb-4">Analyze Nigerian e-commerce data — product categories, customer behavior, regional preferences, and payment methods. This is what Jumia and Konga analysts build.</p>`,
        tip:"Tutor's Insight: Nigeria has Africa's largest e-commerce market. Companies like Jumia, Konga, and Paystack need data scientists who understand local market dynamics.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(2024)\nn = 200\n\ndf = pd.DataFrame({\n    'order_id': range(1001, 1001+n),\n    'customer_city': np.random.choice(['Lagos','Abuja','PH','Kano','Ibadan','Enugu','Benin'], n, p=[0.35,0.2,0.1,0.1,0.1,0.08,0.07]),\n    'category': np.random.choice(['Electronics','Fashion','Phones','Home','Food','Beauty'], n, p=[0.25,0.2,0.2,0.15,0.1,0.1]),\n    'amount': np.random.exponential(15000, n).clip(1000, 200000).round(0),\n    'payment': np.random.choice(['Card','Transfer','USSD','Cash'], n, p=[0.35,0.3,0.2,0.15]),\n    'returned': np.random.choice([0, 1], n, p=[0.88, 0.12]),\n})\n\nprint("="*50)\nprint("  🇳🇬 NIGERIAN E-COMMERCE ANALYSIS")\nprint("  HMG Academy | Adewale Samson Adeagbo")\nprint("="*50)\nprint(f"\\n  Orders: {n} | Revenue: ₦{df['amount'].sum():,.0f}")\nprint(f"  Avg order: ₦{df['amount'].mean():,.0f}")\nprint(f"  Return rate: {df['returned'].mean():.1%}")\n\nprint(f"\\n📦 BY CATEGORY:")\nfor cat, grp in df.groupby('category'):\n    print(f"  {cat:<12s}: ₦{grp['amount'].sum():>10,.0f} ({len(grp)} orders, return={grp['returned'].mean():.0%})\")\n\nprint(f"\\n📍 BY CITY:")\nfor city, grp in df.groupby('customer_city'):\n    print(f"  {city:<8s}: {len(grp):>3d} orders, avg ₦{grp['amount'].mean():>8,.0f}\")\n\nprint(f"\\n💳 PAYMENT METHODS:\")\nfor pay, grp in df.groupby('payment'):\n    print(f"  {pay:<10s}: {len(grp):>3d} ({len(grp)/n:.0%})\")\n\nfig, axes = plt.subplots(2, 2, figsize=(12, 9))\nfig.suptitle('Nigerian E-Commerce Dashboard — HMG Academy', fontweight='bold')\ndf.groupby('category')['amount'].sum().sort_values().plot(kind='barh', ax=axes[0,0], color='#6366f1')\naxes[0,0].set_title('Revenue by Category')\ndf.groupby('customer_city')['order_id'].count().plot(kind='pie', ax=axes[0,1], autopct='%1.0f%%')\naxes[0,1].set_title('Orders by City')\ndf.groupby('payment')['order_id'].count().plot(kind='bar', ax=axes[1,0], color='#22c55e')\naxes[1,0].set_title('Payment Methods'); axes[1,0].tick_params(axis='x', rotation=0)\naxes[1,1].hist(df['amount'], bins=20, color='#f59e0b', edgecolor='white')\naxes[1,1].set_title('Order Value Distribution')\naxes[1,1].set_xlabel('Amount (₦)')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Which Nigerian city typically has the highest e-commerce activity?",options:["Kano","Lagos","Abuja","Port Harcourt"],answer:1}
    },
    {
        id:"ng_health", module:"m39", title:"39.4 🇳🇬 Healthcare Access Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🇳🇬 Project: Healthcare Access in Nigeria</h2>
<p class="mb-4">Analyze healthcare accessibility across Nigerian states — hospital density, doctor ratios, vaccination rates, and maternal health outcomes.</p>`,
        tip:"Tutor's Insight: Healthcare analytics is one of the most impactful applications of data science. This analysis helps NGOs like WHO and UNICEF allocate resources where they're needed most in Nigeria.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nstates = ['Lagos','Kano','Rivers','Oyo','FCT','Enugu','Kaduna','Delta','Ogun','Anambra',\n          'Borno','Benue','Edo','Imo','Kwara','Plateau','Osun','Abia','Ekiti','Sokoto']\nzones = ['SW','NW','SS','SW','NC','SE','NW','SS','SW','SE',\n         'NE','NC','SS','SE','NC','NC','SW','SE','SW','NW']\n\ndf = pd.DataFrame({\n    'state': states, 'zone': zones,\n    'hospitals_per_100k': np.random.normal(12, 5, 20).clip(3, 25).round(1),\n    'doctors_per_10k': np.random.normal(3, 1.5, 20).clip(0.5, 8).round(1),\n    'vaccination_rate': np.random.normal(55, 20, 20).clip(10, 95).round(1),\n    'maternal_mortality': np.random.normal(500, 200, 20).clip(100, 1200).round(0),\n})\n\nprint("="*55)\nprint("  🇳🇬 HEALTHCARE ACCESS ANALYSIS — NIGERIA")\nprint("  HMG Academy Research | Adewale Samson Adeagbo")\nprint("="*55)\n\nprint(f"\\n📊 NATIONAL OVERVIEW:\")\nprint(f"  Avg hospitals per 100K: {df['hospitals_per_100k'].mean():.1f}\")\nprint(f"  Avg doctors per 10K: {df['doctors_per_10k'].mean():.1f}\")\nprint(f"  Avg vaccination rate: {df['vaccination_rate'].mean():.1f}%\")\n\nprint(f"\\n📍 BY ZONE:\")\nfor zone, grp in df.groupby('zone'):\n    z = {'SW':'South-West','NW':'North-West','SS':'South-South','SE':'South-East','NC':'North-Central','NE':'North-East'}\n    print(f"  {z.get(zone,zone)}: vacc={grp['vaccination_rate'].mean():.0f}%, doctors={grp['doctors_per_10k'].mean():.1f}/10K\")\n\nprint(f"\\n⚠️ STATES NEEDING URGENT ATTENTION:\")\nfor _, r in df[df['vaccination_rate'] < 40].iterrows():\n    print(f"  {r['state']}: vaccination={r['vaccination_rate']}%, doctors={r['doctors_per_10k']}/10K\")\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\ndf.sort_values('vaccination_rate').plot(kind='barh', x='state', y='vaccination_rate', ax=axes[0], color='#22c55e', legend=False)\naxes[0].axvline(50, color='red', ls='--', label='50% target')\naxes[0].set_title('Vaccination Rate by State', fontweight='bold')\naxes[0].legend()\naxes[1].scatter(df['doctors_per_10k'], df['vaccination_rate'], s=80, c=df['maternal_mortality'], cmap='RdYlGn_r', edgecolor='white')\naxes[1].set_xlabel('Doctors per 10K'); axes[1].set_ylabel('Vaccination Rate %')\naxes[1].set_title('Doctors vs Vaccination (color=maternal mortality)', fontweight='bold')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Why is healthcare data analysis important for Nigeria?",options:["It's easy to do","It helps allocate limited resources where they're needed most","There's already enough data","Only for academic purposes"],answer:1}
    },
    {
        id:"ng_agriculture", module:"m39", title:"39.5 🇳🇬 Nigerian Agriculture Data", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🇳🇬 Project: Agriculture & Food Security</h2>
<p class="mb-4">Analyze crop production, yield trends, and food security indicators across Nigerian states. Agriculture employs 70% of Nigeria's workforce.</p>`,
        tip:"Tutor's Insight: Nigeria is Africa's largest economy and agriculture is its backbone. Data scientists who can analyze agricultural data help feed 200+ million people. This is literally life-changing work.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nstates = ['Benue','Niger','Kano','Kaduna','Oyo','Taraba','Nasarawa','Kebbi','Sokoto','Jigawa',\n          'Zamfara','Bauchi','Adamawa','Plateau','Kogi','Kwara','Ogun','Ondo','Ekiti','Enugu']\ncrops = ['Rice','Maize','Cassava','Yam','Sorghum']\n\ndata = []\nfor state in states:\n    for crop in crops:\n        data.append({\n            'state': state,\n            'crop': crop,\n            'area_hectares': int(np.random.exponential(50000)),\n            'yield_tons_ha': round(np.random.normal(2.5, 1, 1)[0], 2),\n            'production_tons': 0,  # Will calculate\n        })\n\ndf = pd.DataFrame(data)\ndf['yield_tons_ha'] = df['yield_tons_ha'].clip(0.5, 6)\ndf['production_tons'] = (df['area_hectares'] * df['yield_tons_ha']).round(0)\n\nprint("="*55)\nprint("  🇳🇬 NIGERIAN AGRICULTURE ANALYSIS")\nprint("  HMG Academy Research | Adewale Samson Adeagbo")\nprint("="*55)\n\nprint(f"\\n🌾 OVERVIEW:")\nprint(f"  States: {df['state'].nunique()} | Crops: {df['crop'].nunique()}")\nprint(f"  Total production: {df['production_tons'].sum():,.0f} tons")\nprint(f"  Total area: {df['area_hectares'].sum():,.0f} hectares")\n\nprint(f"\\n📦 BY CROP:")\ncrop_summary = df.groupby('crop').agg(\n    total_prod=('production_tons','sum'),\n    avg_yield=('yield_tons_ha','mean'),\n    total_area=('area_hectares','sum')\n).round(1).sort_values('total_prod', ascending=False)\nfor crop, row in crop_summary.iterrows():\n    print(f"  {crop:<10s}: {row['total_prod']:>12,.0f} tons, yield={row['avg_yield']:.1f} t/ha\")\n\nprint(f"\\n🏆 TOP 5 PRODUCING STATES:\")\nstate_prod = df.groupby('state')['production_tons'].sum().nlargest(5)\nfor state, prod in state_prod.items():\n    print(f"  {state}: {prod:,.0f} tons\")\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\ncrop_summary['total_prod'].sort_values().plot(kind='barh', ax=axes[0], color='#22c55e')\naxes[0].set_title('Production by Crop (tons)', fontweight='bold')\ndf.groupby('crop')['yield_tons_ha'].mean().plot(kind='bar', ax=axes[1], color='#f59e0b')\naxes[1].set_title('Average Yield by Crop (tons/ha)', fontweight='bold')\naxes[1].tick_params(axis='x', rotation=45)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"What percentage of Nigeria's workforce is in agriculture?",options:["10%","30%","About 70%","90%"],answer:2}
    },

    // ═══ MODULE 40: CAREER & PORTFOLIO ═══
    {
        id:"portfolio_build", module:"m40", title:"40.1 Building Your Portfolio", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Your Work IS Your Resume</h2>
<p class="mb-4">A data science portfolio is worth more than any certificate. It shows <b>what you can actually DO</b>, not what courses you completed.</p>
<div class="code-block">Portfolio Structure:<br>├── README.md (your introduction)<br>├── Project 1: Exploratory Analysis<br>├── Project 2: Visualization Dashboard<br>├── Project 3: Statistical Analysis<br>├── Project 4: ML Pipeline<br>└── Project 5: Full Business Report</div>
<p class="mb-2"><b>What Hiring Managers Look For:</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li><b>Clean code</b> — well-organized, commented, functions used</li>
<li><b>Clear communication</b> — explanations, not just code</li>
<li><b>Real insights</b> — not just "here's a chart" but "here's what it means"</li>
<li><b>Professional presentation</b> — labeled charts, formatted output</li>
<li><b>Variety</b> — different datasets, techniques, and domains</li>
</ul>
<div class="callout ci"><div class="cl">HMG ACADEMY TIP</div><p>Adewale's 12 deployed projects on Streamlit are all part of his portfolio. Each one demonstrates a different skill. Your PyData-Flow Pro projects can serve the same purpose.</p></div>`,
        tip:"Tutor's Insight: I've hired data scientists. The ones who get offers always have a GitHub portfolio. The ones who just list certifications on their resume rarely get past the first interview.",
        defaultCode:`# Portfolio Project Template\nprint("="*55)\nprint("  📂 DATA SCIENCE PORTFOLIO GUIDE")\nprint("  HMG Academy | Adewale Samson Adeagbo")\nprint("="*55)\n\nprojects = [\n    {\n        "name": "Student Performance Tracker",\n        "skills": "Pandas, Cleaning, Feature Engineering",\n        "dataset": "HMG Academy student records",\n        "output": "Performance report with risk classification",\n    },\n    {\n        "name": "Nigerian E-Commerce Dashboard",\n        "skills": "Visualization, Time Series, Storytelling",\n        "dataset": "Simulated Jumia/Konga data",\n        "output": "Executive dashboard with charts",\n    },\n    {\n        "name": "A/B Test: Teaching Methods",\n        "skills": "Statistics, Hypothesis Testing",\n        "dataset": "Classroom experiment data",\n        "output": "Statistical report with p-values",\n    },\n    {\n        "name": "Student At-Risk Classifier",\n        "skills": "ML, Feature Engineering, Evaluation",\n        "dataset": "Multi-source student data",\n        "output": "Classifier with confusion matrix",\n    },\n    {\n        "name": "HMG Academy Annual Report",\n        "skills": "EDA, Storytelling, Full Pipeline",\n        "dataset": "Complete academy data",\n        "output": "STAR-format executive report",\n    },\n]\n\nfor i, p in enumerate(projects, 1):\n    print(f"\\n📁 Project {i}: {p['name']}")\n    print(f"   Skills:  {p['skills']}")\n    print(f"   Data:    {p['dataset']}")\n    print(f"   Output:  {p['output']}")\n\nprint(f"\\n💡 TIPS:")\nprint("  1. Host all projects on GitHub")\nprint("  2. Each project needs a clear README")\nprint("  3. Include both code AND written findings")\nprint("  4. Link your GitHub on LinkedIn")\nprint("  5. Write a blog post about your best project")`,
        quiz:{question:"What matters more for getting hired: certificates or a portfolio?",options:["Certificates — employers love them","Portfolio — it shows what you can actually DO","Neither","A degree from a top university"],answer:1}
    },
    {
        id:"interview_prep", module:"m40", title:"40.2 The Data Science Interview", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">What They'll Ask You</h2>
<p class="mb-4">Data science interviews have 4 parts: <b>Python coding</b>, <b>SQL queries</b>, <b>statistics questions</b>, and <b>case studies</b>. Here's what to expect and how to prepare.</p>`,
        tip:"Tutor's Insight: The most common interview mistake is jumping to code without understanding the problem. Always ask clarifying questions first: 'What metric are we optimizing? What's the sample size? Is the data clean?'",
        defaultCode:`# Common Interview Questions — Practice These!\nprint("="*55)\nprint("  💼 DATA SCIENCE INTERVIEW PREP")\nprint("  HMG Academy | Adewale Samson Adeagbo")\nprint("="*55)\n\nprint("\\n📋 PYTHON QUESTIONS:")\nprint("  Q1: Reverse a string without [::-1]")\ndef reverse_string(s):\n    result = ""\n    for char in s:\n        result = char + result\n    return result\nprint(f"  A1: reverse('hello') = '{reverse_string('hello')}'")\n\nprint("\\n  Q2: Find duplicates in a list")\ndef find_duplicates(lst):\n    seen, dupes = set(), set()\n    for item in lst:\n        if item in seen: dupes.add(item)\n        seen.add(item)\n    return list(dupes)\nprint(f"  A2: dupes in [1,2,3,2,4,3] = {find_duplicates([1,2,3,2,4,3])}")\n\nprint("\\n📊 STATISTICS QUESTIONS:")\nprint("  Q3: What's the difference between mean and median?")\nprint("  A3: Mean is the average, median is the middle value.")\nprint("      Median is better for skewed data (salaries, income).")\n\nprint("\\n  Q4: What is p-value?")\nprint("  A4: Probability of seeing your result if the null hypothesis")\nprint("      were true. p < 0.05 = statistically significant.")\n\nprint("\\n🐼 PANDAS QUESTIONS:")\nprint("  Q5: How do you handle missing values?")\nprint("  A5: df.isnull().sum() to check, then:")\nprint("      - Numeric: fill with median (robust to outliers)")\nprint("      - Categorical: fill with mode")\nprint("      - Drop rows only when very few are missing")\n\nprint("\\n🧠 CASE STUDY APPROACH:")\nprint("  1. Clarify the question")\nprint("  2. Identify the data needed")\nprint("  3. Outline your approach")\nprint("  4. Consider edge cases")\nprint("  5. Present findings with recommendations")`,
        quiz:{question:"What should you do FIRST when given a coding problem in an interview?",options:["Start coding immediately","Ask clarifying questions to understand the problem","Look up the answer","Give up"],answer:1}
    },
    {
        id:"resume_linkedin", module:"m40", title:"40.3 Resume & LinkedIn Optimization", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Getting Noticed by Recruiters</h2>
<p class="mb-4">Your LinkedIn profile is your digital resume. Recruiters search for keywords. If your profile has the right terms, you get found. If not, you're invisible.</p>
<div class="code-block">Essential Keywords for Data Science Roles:<br>Python, Pandas, NumPy, SQL, Matplotlib, Data Analysis,<br>Machine Learning, Statistics, Data Visualization,<br>ETL, Data Cleaning, Feature Engineering, A/B Testing,<br>Jupyter Notebook, Git/GitHub, Scikit-learn</div>`,
        tip:"Tutor's Insight: Adewale's LinkedIn profile generates interview invitations because it includes: specific project descriptions, measurable results, and the right technical keywords. Your profile should do the same.",
        defaultCode:`# LinkedIn Profile Template\nprint("="*55)\nprint("  💼 LINKEDIN PROFILE TEMPLATE")\nprint("  HMG Academy | Adewale Samson Adeagbo")\nprint("="*55)\n\nprint("\\n📝 HEADLINE (120 chars max):")\nprint('  "Data Scientist | Python • Pandas • SQL • ML |')\nprint('   Turning Data into Actionable Business Insights"')\n\nprint("\\n📝 ABOUT SECTION (2000 chars max):")\nprint("  Paragraph 1: Who you are + key skills")\nprint("  Paragraph 2: What problems you solve")\nprint("  Paragraph 3: Your approach/philosophy")\nprint("  Paragraph 4: Call to action (connect/hire me)")\n\nprint("\\n📝 EXPERIENCE (use the STAR format):")\nprint("  Data Science Project — [Project Name]")\nprint("  • Analyzed [X] records using Python and Pandas")\nprint("  • Built [dashboard/model/pipeline] that [result]")\nprint("  • Reduced [metric] by [X]% through data-driven decisions")\n\nprint("\\n📝 SKILLS TO ADD:")\nskills = ["Python","Pandas","NumPy","SQL","Data Analysis",\n          "Machine Learning","Data Visualization","Matplotlib",\n          "Statistics","ETL","Data Cleaning","Feature Engineering",\n          "A/B Testing","Scikit-learn","Git/GitHub","Excel"]\nfor i, skill in enumerate(skills, 1):\n    print(f"  {i:>2d}. {skill}")\n\nprint("\\n📝 PROJECTS TO SHOWCASE:")\nprint("  Link your GitHub portfolio projects")\nprint("  Each project should have:")\nprint("  • Clear title and description")\nprint("  • Technologies used")\nprint("  • Key findings or results")\nprint("  • Link to live demo or code")`,
        quiz:{question:"What do recruiters search for on LinkedIn?",options:["Your photo","Specific technical keywords like Python, Pandas, SQL","Your school name","Number of connections"],answer:1}
    },
    {
        id:"interview_exercise", module:"m40", title:"40.4 Exercise: Mock Interview", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">💼 Exercise: Mock Interview Questions</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY EXERCISE</div><p>Solve 5 real data science interview questions using Python. Time yourself — you should be able to solve each one in under 10 minutes.</p></div>`,
        tip:"Exercise Tip: Practice under time pressure. Real interviews give you 30-45 minutes for 2-3 coding problems. Speed comes from practice, not talent.",
        defaultCode:`# ═══ MOCK INTERVIEW — 5 Questions ═══\n# Time yourself! 10 minutes per question.\n# HMG Academy Interview Prep\n\n# Q1: Given a list of numbers, find the two that sum to a target\n# Example: numbers=[2,7,11,15], target=9 → [2, 7]\n\n# Q2: Write a function that calculates the running average\n# Example: [1,2,3,4,5] → [1, 1.5, 2, 2.5, 3]\n\n# Q3: Clean this messy data:\n# data = ["  Lagos ", "ABUJA", "port harcourt", " Kano", "lagos"]\n# → ["Lagos", "Abuja", "Port Harcourt", "Kano", "Lagos"]\n\n# Q4: Given a DataFrame, find the department with highest\n# average salary and the employee with the longest tenure.\n\n# Q5: Explain the difference between precision and recall.\n# Then calculate both for: actual=[1,1,0,1,0,0,1,0]\n#                          predicted=[1,0,0,1,1,0,1,0]\n\nprint("Solve all 5 questions! Time yourself.")\nprint("Target: < 10 minutes each.")`,
        quiz:{question:"In a coding interview, what should you do before writing any code?",options:["Write code immediately","Think through the approach and discuss it with the interviewer","Ask for the answer","Give up if it's hard"],answer:1}
    },

    // ═══ MODULE 41: PRACTICE LAB — COMPREHENSIVE ═══
    {
        id:"ex_combo_python", module:"m41", title:"41.1 Exercise: Python + Pandas Combo", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Combined Exercise: Python + Pandas</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY ASSESSMENT</div><p>Combine Python fundamentals (functions, classes, error handling) with Pandas operations in one comprehensive exercise. Build a data processing system using OOP that cleans, analyzes, and reports on a dataset.</p></div>`,
        tip:"Exercise Tip: This tests whether you can combine skills. Most real-world work requires multiple skills at once, not one at a time.",
        defaultCode:`import pandas as pd\nimport numpy as np\n\n# ═══ COMBINED EXERCISE: Python + Pandas ═══\n# HMG Academy Assessment\n\n# Build a class that:\n# 1. Accepts any CSV-like data\n# 2. Validates it (using try/except)\n# 3. Cleans it (using Pandas)\n# 4. Analyzes it (using functions)\n# 5. Generates a report (using string formatting)\n# 6. All methods should be chainable (return self)\n\nprint("Build your combined Python + Pandas system!")`,
        quiz:{question:"Why do real-world projects require combining multiple skills?",options:["To make code longer","Real problems are complex — they need data loading, cleaning, analysis, and communication together","It's more impressive","Python requires it"],answer:1}
    },
    {
        id:"ex_combo_viz", module:"m41", title:"41.2 Exercise: Viz + Stats Combo", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Combined Exercise: Visualization + Statistics</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY ASSESSMENT</div><p>Build a statistical analysis with publication-quality charts. Every chart must have a statistical insight. Every statistic must have a visual.</p></div>`,
        tip:"Exercise Tip: Every chart should have a caption explaining the insight. Every statistic should have a chart proving it. They work together.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ COMBINED EXERCISE: Viz + Stats ═══\n# Create dataset, run statistics, make charts, write insights\n# EVERY chart needs a statistical insight\n# EVERY statistic needs a supporting visualization\n\nnp.random.seed(42)\n# Generate your own dataset and analyze it!\n\nprint("Build your combined visualization + statistics analysis!")`,
        quiz:{question:"What should every chart in a professional report include?",options:["Just colors","A statistical insight explaining what the viewer should notice","As many data points as possible","3D effects"],answer:1}
    },
    {
        id:"ex_full_eda", module:"m41", title:"41.3 Exercise: Full EDA Challenge", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Exercise: Complete EDA</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY CHALLENGE</div><p>Perform a comprehensive EDA on a complex dataset with 8+ columns. Cover: structure, quality, univariate, bivariate, multivariate, outliers, and a final summary with 5+ insights.</p></div>`,
        tip:"Exercise Tip: Follow the EDA checklist systematically. Don't jump to charts without understanding the data structure first.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ FULL EDA CHALLENGE ═══\n# HMG Academy — Comprehensive Assessment\n\nnp.random.seed(2024)\nn = 150\ndf = pd.DataFrame({\n    'id': range(1, n+1),\n    'dept': np.random.choice(['Sales','Engineering','Marketing','HR','Finance','Operations'], n),\n    'level': np.random.choice(['Junior','Mid','Senior','Lead'], n, p=[0.4,0.3,0.2,0.1]),\n    'salary_k': np.random.normal(90, 30, n).clip(30, 250).round(0),\n    'tenure': np.random.exponential(3, n).clip(0.5, 20).round(1),\n    'satisfaction': np.random.uniform(1, 10, n).round(1),\n    'performance': np.random.normal(7, 1.5, n).clip(1, 10).round(1),\n    'overtime': np.random.exponential(5, n).clip(0, 30).round(0),\n    'left': np.random.choice([0, 1], n, p=[0.82, 0.18]),\n})\n\n# Complete EDA with 6+ charts and 5+ written insights\nprint("Build your comprehensive EDA!")`,
        quiz:{question:"How many insights should a thorough EDA produce?",options:["1-2","5 or more","Exactly 3","As many as possible, even if trivial"],answer:1}
    },
    {
        id:"ex_ml_challenge", module:"m41", title:"41.4 Exercise: ML Pipeline Challenge", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Exercise: Complete ML Pipeline</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY CHALLENGE</div><p>Build a full ML pipeline: generate data → clean → engineer 10+ features → normalize → split → train 2 models → evaluate with confusion matrix → cross-validate → compare → recommend.</p></div>`,
        tip:"Exercise Tip: This is the EXACT workflow used at companies like Google, Facebook, and Nigerian fintechs. Master this and you're job-ready.",
        defaultCode:`import numpy as np\nimport pandas as pd\n\n# ═══ ML PIPELINE CHALLENGE ═══\n# Build EVERYTHING from scratch\n# This is your job readiness test\n\nprint("Build your complete ML pipeline!")`,
        quiz:{question:"What separates a good ML pipeline from a great one?",options:["More complex algorithms","Proper evaluation, cross-validation, and clear documentation","Faster execution","More features"],answer:1}
    },
    {
        id:"ex_nigeria", module:"m41", title:"41.5 Exercise: Nigerian Dataset Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Exercise: 🇳🇬 Nigerian Context</h2>
<div class="callout ci"><div class="cl">HMG ACADEMY CHALLENGE</div><p>Choose ANY Nigerian domain (education, health, agriculture, transport, commerce) and build a complete analysis: data generation, EDA, visualization, statistics, and recommendations relevant to Nigerian policymakers.</p></div>`,
        tip:"Exercise Tip: Think about what data the Nigerian government needs to make better decisions. Your analysis should help someone in Abuja make a better policy choice.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ NIGERIAN DATA ANALYSIS ═══\n# Choose your domain and build a complete analysis\n# For: HMG Academy Virtual Study Centre\n\nprint("Choose a Nigerian domain and analyze it!")\nprint("Domains: Education, Health, Agriculture, Transport, Commerce")`,
        quiz:{question:"Why is Nigerian-context data science important?",options:["It's easier","Nigeria-specific insights help solve Nigeria-specific problems","International data works fine","It's not important"],answer:1}
    },
    {
        id:"ex_timed", module:"m41", title:"41.6 Exercise: Timed Assessment (45 min)", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 TIMED ASSESSMENT — 45 Minutes</h2>
<div class="callout ct"><div class="cl">HMG ACADEMY FINAL ASSESSMENT</div><p>Complete this assessment in 45 minutes or less. It tests speed, accuracy, and ability to work under pressure — exactly like a real job or exam. Start a timer when you begin.</p></div>
<p class="mb-2"><b>Tasks (ALL required in 45 min):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>Task 1 (5 min): Generate 80-row dataset with 6 columns</li>
<li>Task 2 (5 min): Data quality check</li>
<li>Task 3 (5 min): Clean — handle missing values and outliers</li>
<li>Task 4 (5 min): Engineer 5 new features</li>
<li>Task 5 (10 min): GroupBy analysis + statistics</li>
<li>Task 6 (10 min): 4-chart dashboard</li>
<li>Task 7 (5 min): Executive summary</li>
</ul>`,
        tip:"Assessment Tip: Don't aim for perfection — aim for completion. A complete but imperfect analysis beats a perfect but incomplete one. Manage your time!",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ TIMED ASSESSMENT — 45 MINUTES ═══\n# START YOUR TIMER NOW!\n# HMG Academy Final Assessment\n\n# Task 1 (5 min): Generate dataset\n# Task 2 (5 min): Quality check\n# Task 3 (5 min): Clean\n# Task 4 (5 min): Engineer 5 features\n# Task 5 (10 min): Analysis\n# Task 6 (10 min): 4-chart dashboard\n# Task 7 (5 min): Executive summary\n\nnp.random.seed(2024)\n\nprint("⏱️ START YOUR TIMER — 45 MINUTES!")\nprint("Complete all 7 tasks. Speed matters!")`,
        quiz:{question:"In a timed assessment, what's more important?",options:["Perfect code formatting","Completing all tasks, even imperfectly","Using complex algorithms","Writing long comments"],answer:1}
    },

    // ═══ MODULE 42: HMG ACADEMY CERTIFICATIONS ═══
    {
        id:"hmg_cert_foundation", module:"m42", title:"42.1 HMG Cert: Foundation Level", level:"Foundational",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG ACADEMY CERTIFICATION — Foundation</h2>
<div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Demonstrate Python basics: variables (all 5 types), operators, strings, loops, functions, and list comprehensions. All code must be written from memory.</p></div>
<p class="mb-4"><b>Issued by:</b> HMG Academy Virtual Study Centre<br><b>Mentor:</b> Adewale Samson Adeagbo<br><b>Passing Criteria:</b> All 5 tasks completed correctly</p>`,
        tip:"Certification Tip: This is your first HMG Academy credential. Write clean, commented code. Show mastery of the fundamentals.",
        defaultCode:`# ═══════════════════════════════════════════════\n# HMG ACADEMY CERTIFICATION — Foundation Level\n# Candidate: [Your Name]\n# Mentor: Adewale Samson Adeagbo\n# Institution: HMG Academy Virtual Study Centre\n# ═══════════════════════════════════════════════\n\n# Task 1: Variables of all 5 types + type checking\n# Task 2: Function with *args and default parameters\n# Task 3: Loop through data with enumerate\n# Task 4: List comprehension with condition\n# Task 5: Formatted output using f-strings\n\nprint("Complete all 5 tasks for HMG Foundation Certificate!")`,
        quiz:{question:"What does the HMG Academy Foundation Certificate prove?",options:["You installed Python","You can write basic Python from memory","You completed one lesson","You read the documentation"],answer:1}
    },
    {
        id:"hmg_cert_analyst", module:"m42", title:"42.2 HMG Cert: Data Analyst", level:"Intermediate",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG ACADEMY CERTIFICATION — Data Analyst</h2>
<div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Demonstrate Pandas mastery: create DataFrame, clean data, engineer features, GroupBy analysis, and create 2 visualizations. Professional output required.</p></div>`,
        tip:"Certification Tip: Data Analyst is the first professional-level certification. Your output should look like something a business could use.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# HMG ACADEMY CERTIFICATION — Data Analyst\n# Institution: HMG Academy Virtual Study Centre\n# ═══════════════════════════════════════════════\n\n# Complete all requirements for Data Analyst Certificate\nprint("Build your HMG Data Analyst certification project!")`,
        quiz:{question:"What level of output does the Data Analyst certificate require?",options:["Just running code","Professional, business-ready output with charts and insights","A single chart","Raw data printout"],answer:1}
    },
    {
        id:"hmg_cert_specialist", module:"m42", title:"42.3 HMG Cert: Data Specialist", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG ACADEMY CERTIFICATION — Data Specialist</h2>
<div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Complete EDA, statistical analysis, multi-source data merge, and a 6-chart professional dashboard. Must include hypothesis testing and correlation analysis.</p></div>`,
        tip:"Certification Tip: At this level, your work should be indistinguishable from a professional data scientist's output.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# HMG ACADEMY CERTIFICATION — Data Specialist\n# Institution: HMG Academy Virtual Study Centre\n# ═══════════════════════════════════════════════\n\nprint("Build your HMG Data Specialist certification project!")`,
        quiz:{question:"What statistical test should a Data Specialist be able to perform?",options:["Only descriptive stats","Hypothesis testing with p-values","Just mean and median","Only correlation"],answer:1}
    },
    {
        id:"hmg_cert_expert", module:"m42", title:"42.4 HMG Cert: Data Expert", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG ACADEMY CERTIFICATION — Data Expert</h2>
<div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Full pipeline: ETL, feature engineering (10+), normalization, ML classifier with train/test, confusion matrix, cross-validation, and executive STAR report.</p></div>`,
        tip:"Certification Tip: The Expert level proves you can build production-quality analysis. This is what employers look for.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# HMG ACADEMY CERTIFICATION — Data Expert\n# Institution: HMG Academy Virtual Study Centre\n# ═══════════════════════════════════════════════\n\nprint("Build your HMG Data Expert certification project!")`,
        quiz:{question:"What separates an Expert from a Specialist?",options:["More charts","Ability to build ML models, evaluate them, and explain results","Faster typing","Using more libraries"],answer:1}
    },
    {
        id:"hmg_cert_master", module:"m42", title:"42.5 HMG Cert: Master", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG ACADEMY CERTIFICATION — Master</h2>
<div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Nigerian-context project: complete analysis of a Nigerian domain (education/health/agriculture/commerce) with 100+ records, 15+ features, ML, and policy recommendations.</p></div>`,
        tip:"Certification Tip: The Master certificate is specifically Nigerian-context. Show that you can apply data science to solve real Nigerian problems.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════\n# HMG ACADEMY CERTIFICATION — Master\n# Institution: HMG Academy Virtual Study Centre\n# Focus: Nigerian Context Data Science\n# ═══════════════════════════════════════════════\n\nprint("Build your Nigerian-context Master certification project!")`,
        quiz:{question:"Why does the Master certification require Nigerian context?",options:["To make it harder","Nigeria-specific insights solve Nigeria-specific problems — this proves local relevance","International data is better","It's just a theme"],answer:1}
    },
    {
        id:"hmg_cert_grandmaster", module:"m42", title:"42.6 HMG Grand Master", level:"Capstone",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG ACADEMY — GRAND MASTER CERTIFICATION</h2>
<div class="callout ct"><div class="cl">THE ULTIMATE TEST — HMG ACADEMY HIGHEST HONOR</div><p>The <b>Grand Master Certificate</b> from HMG Academy Virtual Study Centre is the highest achievement. Build a comprehensive, industry-ready project demonstrating mastery of ALL 200 lessons. This project becomes your portfolio centerpiece.</p></div>
<p class="mb-2"><b>Requirements (ALL mandatory):</b></p>
<ul class="list-disc pl-5 mb-4 space-y-1 text-sm">
<li>200+ records of synthetic Nigerian-context data</li>
<li>Complete ETL pipeline with validation</li>
<li>15+ engineered features with domain justification</li>
<li>Full EDA: univariate + bivariate + multivariate</li>
<li>Statistical testing with significance conclusions</li>
<li>Normalization (Min-Max AND Z-score comparison)</li>
<li>2+ ML classifiers with cross-validation</li>
<li>Confusion matrix, precision, recall, F1 for each model</li>
<li>10+ chart professional dashboard</li>
<li>STAR-format executive report</li>
<li>5+ actionable recommendations for Nigerian context</li>
<li>All code organized with classes, functions, and docstrings</li>
</ul>
<div class="callout cw"><div class="cl">THIS IS YOUR PORTFOLIO MASTERPIECE</div><p>Put this on GitHub. Link it on LinkedIn. Show it in interviews. Present it at meetups. This project proves you can take raw Nigerian data and produce insights that drive real decisions. This is what HMG Academy's Adewale Samson Adeagbo built this entire platform to achieve.</p></div>`,
        tip:"Grand Master Tip: Choose education, healthcare, or agriculture — domains where data science can genuinely improve lives in Nigeria. Your analysis should be good enough to present to a state governor.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══════════════════════════════════════════════════════\n# HMG ACADEMY — GRAND MASTER CERTIFICATION PROJECT\n# The Highest Achievement in PyData-Flow Pro\n#\n# Candidate: [Your Full Name]\n# Date: 2026\n# Institution: HMG Academy Virtual Study Centre\n# Mentor: Adewale Samson Adeagbo\n# Platform: PyData-Flow Pro (200 Lessons, 42 Modules)\n# ═══════════════════════════════════════════════════════\n#\n# This is the culmination of your entire learning journey.\n# 200 lessons. 42 modules. One masterpiece.\n#\n# Structure:\n# 1.  EXECUTIVE SUMMARY\n# 2.  DATA GENERATION (Nigerian context)\n# 3.  ETL PIPELINE WITH VALIDATION\n# 4.  DATA QUALITY SCORECARD\n# 5.  FEATURE ENGINEERING (15+ features)\n# 6.  EXPLORATORY DATA ANALYSIS\n# 7.  STATISTICAL TESTING\n# 8.  NORMALIZATION\n# 9.  ML MODELS + EVALUATION\n# 10. PROFESSIONAL DASHBOARD (10+ charts)\n# 11. STAR-FORMAT REPORT\n# 12. RECOMMENDATIONS FOR NIGERIA\n# 13. CONCLUSION\n\nnp.random.seed(2024)\n\nprint("Build the most impressive project of your career.")\nprint("200 lessons. One masterpiece.")\nprint("HMG Academy Grand Master — Your future starts here.")\nprint()\nprint("Mentor: Adewale Samson Adeagbo")\nprint("Institution: HMG Academy Virtual Study Centre")\nprint("Lagos, Nigeria 🇳🇬")`,
        quiz:{question:"What is the single most important quality of a Grand Master project?",options:["Length of code","Use of complex algorithms","Clear, actionable insights that could improve real Nigerian outcomes","Number of charts"],answer:2}
    },
,

    // ═══ ADDITIONAL LESSONS TO REACH 200 ═══
    {
        id:"oop_inherit", module:"m35", title:"35.5 Inheritance & Code Reuse", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Building on Existing Classes</h2><p class="mb-4"><b>Inheritance</b> lets you create new classes based on existing ones — reusing code while adding new features. The child class inherits all methods from the parent.</p><div class="code-block">class Analyst(Student):<br>    def report(self):<br>        return f"{self.name}: {self.grade()}"</div>`,
        tip:"Tutor's Insight: Pandas DataFrame inherits from NDFrame. Understanding inheritance helps you understand how Pandas is built internally.",
        defaultCode:`class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n    def grade(self):\n        return "A" if self.score >= 70 else "B" if self.score >= 50 else "F"\n\nclass HMGStudent(Student):\n    def __init__(self, name, score, school="HMG Academy"):\n        super().__init__(name, score)\n        self.school = school\n    def report(self):\n        return f"{self.name} ({self.school}): {self.score}% = Grade {self.grade()}"\n\ns = HMGStudent("Adewale", 95)\nprint(s.report())\nprint(f"Is Student: {isinstance(s, Student)}")\nprint(f"Is HMGStudent: {isinstance(s, HMGStudent)}")`,
        quiz:{question:"What does super().__init__() do?",options:["Creates a new class","Calls the parent class constructor","Deletes the parent","Returns None"],answer:1}
    },
    {
        id:"oop_dunder", module:"m35", title:"35.6 Magic Methods", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Making Objects Behave Like Built-ins</h2><p class="mb-4"><b>Magic methods</b> (dunder methods) let your objects work with Python operators: <code>len(obj)</code>, <code>obj1 + obj2</code>, <code>print(obj)</code>, <code>obj[key]</code>.</p><div class="code-block">__len__ → len(obj)<br>__str__ → print(obj)<br>__add__ → obj1 + obj2<br>__getitem__ → obj[key]</div>`,
        tip:"Tutor's Insight: This is how df['column'] works — DataFrame implements __getitem__. Understanding magic methods reveals how Pandas operates.",
        defaultCode:`class Scores:\n    def __init__(self, values, label="Data"):\n        self.values = list(values)\n        self.label = label\n    def __len__(self):\n        return len(self.values)\n    def __str__(self):\n        return f"Scores('{self.label}', n={len(self)}, mean={sum(self.values)/len(self.values):.1f})"\n    def __add__(self, other):\n        return Scores(self.values + other.values, f"{self.label}+{other.label}")\n    def __getitem__(self, key):\n        return self.values[key]\n\nmaths = Scores([85, 92, 78], "Maths")\nscience = Scores([72, 88, 65], "Science")\nprint(f"Maths: {maths}")\nprint(f"Length: {len(maths)}")\nprint(f"First: {maths[0]}")\ncombined = maths + science\nprint(f"Combined: {combined}")`,
        quiz:{question:"What magic method makes len(obj) work?",options:["__length__","__len__","__size__","__count__"],answer:1}
    },
    {
        id:"text_ngrams", module:"m36", title:"36.5 N-grams & Phrase Detection", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Finding Meaningful Phrases</h2><p class="mb-4"><b>N-grams</b> are sequences of N consecutive words. Bigrams (2 words) and trigrams (3 words) capture phrases that single words miss: "data science" means more than "data" + "science" separately.</p>`,
        tip:"Tutor's Insight: N-grams power Google Search autocomplete. When you type 'data sc', it predicts 'data science' because that bigram is extremely common.",
        defaultCode:`from collections import Counter\nimport re\n\ndef get_ngrams(text, n=2):\n    words = re.sub(r'[^\\w\\s]', '', text.lower()).split()\n    return [' '.join(words[i:i+n]) for i in range(len(words)-n+1)]\n\ntext = "HMG Academy provides excellent data science education. The data science curriculum at HMG Academy covers Python for data science and machine learning fundamentals."\n\nbigrams = Counter(get_ngrams(text, 2))\ntrigrams = Counter(get_ngrams(text, 3))\n\nprint("=== N-GRAM ANALYSIS ===")
print("\\nTop Bigrams:")\nfor phrase, count in bigrams.most_common(5):\n    print(f"  '{phrase}': {count}")\nprint("\\nTop Trigrams:")\nfor phrase, count in trigrams.most_common(5):\n    print(f"  '{phrase}': {count}")`,
        quiz:{question:"What is a bigram?",options:["A single word","A sequence of 2 consecutive words","A type of chart","A data structure"],answer:1}
    },
    {
        id:"ts_anomaly", module:"m37", title:"37.5 Anomaly Detection in Time Series", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Finding Unusual Events</h2><p class="mb-4"><b>Anomaly detection</b> in time series identifies data points that deviate significantly from expected patterns — sudden spikes, drops, or unusual behavior.</p><div class="code-block">Method: If value > mean + 2*std → anomaly<br>Or:     If value < mean - 2*std → anomaly</div>`,
        tip:"Tutor's Insight: Fraud detection, server monitoring, and quality control all use time series anomaly detection. A sudden spike in transactions at 3am is an anomaly worth investigating.",
        defaultCode:`import numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\ndays = 90\nnormal = np.random.normal(50, 8, days)\nnormal[15] = 95  # Spike\nnormal[45] = 12  # Drop\nnormal[72] = 88  # Spike\n\nmean, std = normal.mean(), normal.std()\nupper = mean + 2*std\nlower = mean - 2*std\nanomalies = [(i, v) for i, v in enumerate(normal) if v > upper or v < lower]\n\nprint(f"Mean: {mean:.1f}, Std: {std:.1f}")\nprint(f"Bounds: [{lower:.1f}, {upper:.1f}]")\nprint(f"Anomalies found: {len(anomalies)}")\nfor day, val in anomalies:\n    print(f"  Day {day+1}: {val:.1f} ({'SPIKE' if val > upper else 'DROP'})")\n\nfig, ax = plt.subplots(figsize=(10, 4))\nax.plot(normal, color='#6366f1', linewidth=1)\nax.axhline(upper, color='red', ls='--', alpha=0.5, label=f'Upper ({upper:.0f})')\nax.axhline(lower, color='red', ls='--', alpha=0.5, label=f'Lower ({lower:.0f})')\nfor day, val in anomalies:\n    ax.scatter(day, val, color='red', s=100, zorder=5)\nax.set_title('Time Series with Anomalies', fontweight='bold')\nax.legend(); plt.tight_layout(); plt.show()`,
        quiz:{question:"What defines an anomaly in the Z-score method?",options:["Any negative value","Values more than 2 standard deviations from the mean","The largest value","Values equal to zero"],answer:1}
    },
    {
        id:"story_critique", module:"m38", title:"38.5 Critiquing Data Presentations", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Spotting Bad Data Communication</h2><p class="mb-4">Learning to <b>critique</b> data presentations is as important as creating them. Common mistakes: misleading charts, cherry-picked data, correlation presented as causation, and missing context.</p><div class="code-block">Red Flags in Data Presentations:<br>• Y-axis doesn't start at 0 (exaggerates differences)<br>• No sample size mentioned<br>• "Correlation" presented as "causes"<br>• Missing error bars or confidence intervals<br>• Cherry-picked time period</div>`,
        tip:"Tutor's Insight: Every data scientist must be a data critic. If you can't spot misleading analysis from others, you might produce misleading analysis yourself. Question everything.",
        defaultCode:`print("=== DATA PRESENTATION CRITIQUE EXERCISE ===")
print("\\nCRITIQUE THESE CLAIMS:\\n")\n\nclaims = [\n    {\n        "claim": "Students who eat breakfast score 20% higher",\n        "issue": "Correlation ≠ causation. Maybe families who provide breakfast also provide tutoring, books, etc.",\n        "fix": "Say 'associated with' not 'causes'. Control for other factors."\n    },\n    {\n        "claim": "Our school improved from 60% to 62% pass rate",\n        "issue": "Is 2% statistically significant? What's the sample size? Was the test easier?",\n        "fix": "Include confidence interval and sample size. Test for significance."\n    },\n    {\n        "claim": "Revenue grew 300% this quarter",\n        "issue": "300% of what? If last quarter was ₦1,000, this quarter is ₦4,000 — not impressive for a business.",\n        "fix": "Always show absolute numbers alongside percentages."\n    },\n]\n\nfor i, c in enumerate(claims, 1):\n    print(f"Claim {i}: \"{c['claim']}\"")\n    print(f"  ⚠️ Issue: {c['issue']}")\n    print(f"  ✅ Fix: {c['fix']}\\n")`,
        quiz:{question:"Why is 'correlation equals causation' a dangerous mistake?",options:["It's technically correct","Correlated variables might be caused by a third hidden factor","Causation is never true","Correlation is always wrong"],answer:1}
    },
    {
        id:"ng_fintech", module:"m39", title:"39.6 🇳🇬 Nigerian Fintech Analysis", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🇳🇬 Project: Nigerian Fintech Landscape</h2><p class="mb-4">Analyze Nigeria's booming fintech sector — transaction volumes, payment methods, mobile money adoption, and financial inclusion metrics. Nigeria leads Africa in fintech innovation.</p>`,
        tip:"Tutor's Insight: Paystack, Flutterwave, OPay, and Moniepoint are all Nigerian fintechs that need data scientists. This project prepares you for the fastest-growing tech sector in Africa.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\n\ndf = pd.DataFrame({\n    'month': pd.date_range('2025-01', periods=12, freq='M'),\n    'transactions_m': np.random.normal(150, 30, 12).clip(80, 250).round(1),\n    'value_bn': np.random.normal(2.5, 0.8, 12).clip(1, 5).round(2),\n    'active_users_m': np.cumsum(np.random.normal(2, 0.5, 12).clip(0.5, 4)).round(1),\n    'card_pct': np.random.uniform(30, 40, 12).round(1),\n    'transfer_pct': np.random.uniform(35, 45, 12).round(1),\n    'ussd_pct': np.random.uniform(15, 25, 12).round(1),\n})\ndf['mobile_pct'] = (100 - df['card_pct'] - df['transfer_pct'] - df['ussd_pct']).round(1)\n\nprint("="*50)\nprint("  🇳🇬 NIGERIAN FINTECH ANALYSIS")\nprint("  HMG Academy | Adewale Samson Adeagbo")\nprint("="*50)\nprint(f"\\n  Total Transactions: {df['transactions_m'].sum():.0f}M")\nprint(f"  Total Value: ₦{df['value_bn'].sum():.1f}B")\nprint(f"  Latest Active Users: {df['active_users_m'].iloc[-1]:.1f}M")\n\nprint("\\n  Payment Method Share (Latest):")\nlatest = df.iloc[-1]\nfor method in ['card_pct','transfer_pct','ussd_pct','mobile_pct']:\n    name = method.replace('_pct','').title()\n    print(f"    {name}: {latest[method]:.1f}%")\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\naxes[0].plot(df['month'], df['transactions_m'], 'o-', color='#6366f1', linewidth=2)\naxes[0].set_title('Monthly Transactions (Millions)', fontweight='bold')\naxes[0].tick_params(axis='x', rotation=45)\naxes[1].stackplot(range(12), df['card_pct'], df['transfer_pct'], df['ussd_pct'], df['mobile_pct'],\n                  labels=['Card','Transfer','USSD','Mobile'], alpha=0.8)\naxes[1].set_title('Payment Method Mix (%)', fontweight='bold')\naxes[1].legend(loc='upper left', fontsize=8)\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Which country leads Africa in fintech innovation?",options:["South Africa","Kenya","Nigeria","Egypt"],answer:2}
    },
    {
        id:"career_networking", module:"m40", title:"40.5 Networking & Community", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">Building Your Professional Network</h2><p class="mb-4">In Nigeria's data science community, <b>who you know</b> opens doors that skills alone cannot. Conferences, meetups, online communities, and mentorship accelerate your career 10x.</p><div class="code-block">Nigerian DS Communities:<br>• Data Science Nigeria (DSN)<br>• 3MTT Programme<br>• AI Saturdays Lagos<br>• Python Nigeria<br>• Google Developer Groups<br>• HMG Academy Community</div>`,
        tip:"Tutor's Insight: Adewale's career accelerated after joining DSN and 3MTT. Active participation in communities leads to collaborations, job referrals, and learning opportunities that no course can provide.",
        defaultCode:`print("="*50)\nprint("  💼 NETWORKING STRATEGY — HMG Academy")\nprint("  By: Adewale Samson Adeagbo")\nprint("="*50)\n\nsteps = [\n    ("Week 1-2", "Set up LinkedIn + GitHub profiles", "Online presence"),\n    ("Week 3-4", "Join 3 communities (DSN, 3MTT, Python NG)", "Community"),\n    ("Month 2", "Share your first project on LinkedIn", "Visibility"),\n    ("Month 3", "Attend a meetup or virtual event", "In-person"),\n    ("Month 4", "Find a mentor in the community", "Mentorship"),\n    ("Month 5", "Collaborate on a group project", "Teamwork"),\n    ("Month 6", "Give a talk or write a blog post", "Thought leadership"),\n]\n\nfor timeline, action, category in steps:\n    print(f"\\n  📅 {timeline}")\n    print(f"     Action: {action}")\n    print(f"     Category: {category}")\n\nprint("\\n  🔑 KEY PRINCIPLE:")\nprint("  Give before you ask. Help others with their code,")\nprint("  share resources, answer questions. The network you")\nprint("  build by GIVING is 10x stronger than one built by asking.")`,
        quiz:{question:"What's the most effective networking strategy?",options:["Asking for jobs immediately","Giving help and sharing knowledge before asking for anything","Only attending paid events","Connecting with 1000 people on LinkedIn"],answer:1}
    },
    {
        id:"ex_combo_all", module:"m41", title:"41.7 Exercise: Everything Combined", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 The Ultimate Combined Exercise</h2><div class="callout ci"><div class="cl">HMG ACADEMY FINAL EXERCISE</div><p>Combine Python OOP, text analysis, time series, data storytelling, and Nigerian context into ONE comprehensive project. This is the hardest exercise in the entire curriculum.</p></div>`,
        tip:"Exercise Tip: This is intentionally the hardest exercise. If you can complete this, you can handle any data science challenge in the real world.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ THE ULTIMATE EXERCISE ═══\n# Combine: OOP + Text + Time Series + Storytelling + Nigerian Context\n# Build a complete system that:\n# 1. Uses a class to manage data (OOP)\n# 2. Analyzes text feedback (NLP)\n# 3. Tracks metrics over time (Time Series)\n# 4. Produces a STAR-format report (Storytelling)\n# 5. Uses Nigerian context data\n\nprint("The ultimate exercise — combine everything!")\nprint("HMG Academy Virtual Study Centre")`,
        quiz:{question:"Why combine multiple skills in one project?",options:["To make it harder","Real-world problems require multiple skills simultaneously","It looks more impressive","Python requires it"],answer:1}
    },
    {
        id:"ex_speed_run", module:"m41", title:"41.8 Exercise: Speed Run Challenge", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🏆 Speed Run — 30 Minutes</h2><div class="callout ct"><div class="cl">SPEED CHALLENGE</div><p>Complete a full analysis in 30 minutes: load data, clean, engineer features, analyze, visualize, and report. This tests your speed and automaticity.</p></div>`,
        tip:"Exercise Tip: Speed comes from practice. The first time takes 2 hours. By the 10th time, it takes 20 minutes. That's mastery.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ SPEED RUN — 30 MINUTES ═══\n# START TIMER NOW!\n\nnp.random.seed(42)\nn = 60\ndf = pd.DataFrame({\n    'id': range(1, n+1),\n    'score': np.random.normal(62, 18, n).clip(10, 100).round(1),\n    'attend': np.random.normal(78, 14, n).clip(30, 100).round(0),\n    'dept': np.random.choice(['Science','Arts','Commerce'], n),\n})\n\n# GO! Clean → Features → Analysis → Charts → Report\nprint("⏱️ 30 MINUTES — GO!")`,
        quiz:{question:"What does speed in data analysis demonstrate?",options:["You're rushing","Automaticity — you've internalized the skills through practice","You're skipping steps","The data is simple"],answer:1}
    },
    {
        id:"hmg_cert_python_pro", module:"m42", title:"42.7 HMG Cert: Python Professional", level:"Advanced",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG CERTIFICATION — Python Professional</h2><div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Demonstrate advanced Python: OOP with inheritance, generators, decorators, error handling patterns, and file I/O. All from memory.</p></div>`,
        tip:"Certification Tip: Python Professional means you can build tools, not just use them. Show that you can create reusable classes and functions.",
        defaultCode:`# ═══ HMG ACADEMY — Python Professional Certification ═══\n# Demonstrate: OOP, generators, error handling, file I/O\n# All from memory — no looking up syntax\n\nprint("Build your Python Professional certification!")\nprint("HMG Academy Virtual Study Centre")`,
        quiz:{question:"What does 'Python Professional' mean?",options:["You can write print statements","You can BUILD reusable tools with classes, generators, and error handling","You know all Python functions","You've used Python for 1 year"],answer:1}
    },
    {
        id:"hmg_cert_storyteller", module:"m42", title:"42.8 HMG Cert: Data Storyteller", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">🎓 HMG CERTIFICATION — Data Storyteller</h2><div class="callout ct"><div class="cl">CERTIFICATION EXAM</div><p>Transform a raw dataset into a compelling STAR-format narrative with professional charts. The output must be understandable by a non-technical school principal. Must include hook, evidence, insight, and action items.</p></div>`,
        tip:"Certification Tip: The Data Storyteller certificate is unique to HMG Academy. It proves you can communicate data insights — the skill that employers value most.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ═══ HMG ACADEMY — Data Storyteller Certification ═══\n# Write a complete data story for a school principal\n# Must include: Hook, STAR framework, charts, recommendations\n\nprint("Build your Data Storyteller certification!")\nprint("HMG Academy Virtual Study Centre")`,
        quiz:{question:"What makes the Data Storyteller certification special?",options:["It's harder","It tests COMMUNICATION, not just technical skills — the most valued skill in data science","It requires more charts","It uses more data"],answer:1}
    },

,

    {
        id:"ng_startup", module:"m39", title:"39.7 Project: Nigerian Startup Ecosystem", level:"Expert",
        content:`<h2 class="text-2xl font-bold mb-3">Project: Nigerian Tech Startup Analysis</h2><p class="mb-4">Analyze Nigeria's thriving startup ecosystem — funding rounds, sectors, city distribution, and growth trends. Nigeria is Africa's largest startup hub.</p><div class="callout ci"><div class="cl">HMG ACADEMY CONTEXT</div><p>Lagos is called the "Silicon Valley of Africa." Companies like Paystack ($200M exit to Stripe), Flutterwave ($3B valuation), and Andela have put Nigeria on the global tech map.</p></div>`,
        tip:"Tutor's Insight: Understanding the startup ecosystem helps data scientists identify which companies are hiring and what skills they need. This is career intelligence, not just data analysis.",
        defaultCode:`import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\nn = 50\ndf = pd.DataFrame({\n    'startup': [f"Startup_{i:02d}" for i in range(1, n+1)],\n    'sector': np.random.choice(['Fintech','EdTech','HealthTech','AgriTech','Logistics','E-Commerce'], n),\n    'city': np.random.choice(['Lagos','Abuja','PH','Ibadan','Kano'], n),\n    'funding_m': np.random.exponential(5, n).clip(0.1, 50).round(2),\n    'employees': np.random.exponential(20, n).clip(5, 200).astype(int),\n})\n\nprint("NIGERIAN STARTUP ECOSYSTEM")\nprint("HMG Academy Research")\nprint(f"Startups: {n}")\nprint(f"Total Funding: {df['funding_m'].sum():.1f}M")\n\nfor sector, grp in df.groupby('sector'):\n    print(f"  {sector}: {len(grp)} startups, {grp['funding_m'].sum():.1f}M")\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\ndf.groupby('sector')['funding_m'].sum().sort_values().plot(kind='barh', ax=ax1, color='#6366f1')\nax1.set_title('Funding by Sector', fontweight='bold')\ndf.groupby('city')['startup'].count().plot(kind='pie', ax=ax2, autopct='%1.0f%%')\nax2.set_title('Startups by City', fontweight='bold')\nplt.tight_layout()\nplt.show()`,
        quiz:{question:"Which Nigerian city has the most tech startups?",options:["Abuja","Lagos","Port Harcourt","Kano"],answer:1}
    },


];

// ============ DATASETS ============
const datasets = {
    education: "Name,Subject,Score,Attendance\nAdewale,Maths,95,98\nBisi,Maths,88,92\nChidi,Maths,72,80\nEka,Maths,91,95\nZainab,Maths,84,88\nFemi,Science,78,85\nGrace,Science,92,96\nHassan,Science,65,70\nIfeoma,Science,89,93\nJide,Science,74,82",
    sales: "Product,Price,Quantity,Date\nLaptop,1200,5,2026-01-01\nMouse,25,20,2026-01-02\nKeyboard,45,15,2026-01-03\nMonitor,300,8,2026-01-04\nHeadset,80,12,2026-01-05\nWebcam,65,10,2026-01-06\nUSB_Drive,15,30,2026-01-07\nCharger,35,18,2026-01-08",
    weather: "City,Temperature,Humidity,Wind_Speed,Condition\nLagos,32,78,15,Sunny\nAbuja,29,65,12,Cloudy\nKano,36,45,20,Sunny\nPort_Harcourt,30,85,10,Rainy\nIbadan,31,70,14,Cloudy\nEnugu,28,72,11,Rainy\nCalabar,29,88,8,Rainy\nJos,22,55,18,Cloudy"
};

// ============ SNIPPETS ============
const snippetLibrary = [
    {name:"Hello World",code:"print('Hello, Data Scientist! 🚀')"},
    {name:"Read CSV",code:"import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.head())"},
    {name:"Describe Data",code:"import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.describe())"},
    {name:"Bar Chart",code:"import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv('data.csv')\ndf.plot(kind='bar', x=df.columns[0], y=df.columns[2])\nplt.title('Bar Chart')\nplt.tight_layout()\nplt.show()"},
    {name:"Line Chart",code:"import matplotlib.pyplot as plt\nx = [1,2,3,4,5]\ny = [10,25,15,30,20]\nplt.plot(x, y, 'o-')\nplt.title('Line Chart')\nplt.show()"},
    {name:"Pie Chart",code:"import matplotlib.pyplot as plt\ndata = [30, 25, 20, 15, 10]\nlabels = ['A', 'B', 'C', 'D', 'E']\nplt.pie(data, labels=labels, autopct='%1.0f%%')\nplt.title('Pie Chart')\nplt.show()"},
    {name:"Group By",code:"import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.groupby(df.columns[1]).mean(numeric_only=True))"},
    {name:"Histogram",code:"import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv('data.csv')\ndf[df.columns[2]].hist(bins=10, color='#6366f1', edgecolor='white')\nplt.title('Histogram')\nplt.show()"},
    {name:"Correlation",code:"import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.corr(numeric_only=True).round(2))"},
    {name:"4-Chart Dashboard",code:"import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv('data.csv')\nfig, axes = plt.subplots(2, 2, figsize=(12, 8))\ndf.plot(kind='bar', x=df.columns[0], y=df.columns[2], ax=axes[0,0], title='Bar')\ndf[df.columns[2]].hist(ax=axes[0,1], title='Histogram')\ndf.plot(kind='line', y=df.columns[2], ax=axes[1,0], title='Line')\naxes[1,1].pie(df[df.columns[2]], labels=df[df.columns[0]])\naxes[1,1].set_title('Pie')\nplt.tight_layout()\nplt.show()"},
];

// ============ CHEATSHEET DATA ============
const cheatsheetData = [
    {group:"Variables & Types",items:[
        {cmd:"x = 10",desc:"Assign integer"},
        {cmd:'name = "Ada"',desc:"Assign string"},
        {cmd:"type(x)",desc:"Check data type"},
        {cmd:"int(), float(), str()",desc:"Type conversion"},
    ]},
    {group:"Lists",items:[
        {cmd:"lst = [1, 2, 3]",desc:"Create a list"},
        {cmd:"lst.append(4)",desc:"Add item to end"},
        {cmd:"lst[0], lst[-1]",desc:"First & last item"},
        {cmd:"lst[1:3]",desc:"Slice (items 1-2)"},
        {cmd:"len(lst), sum(lst)",desc:"Length & sum"},
        {cmd:"sorted(lst)",desc:"Return sorted copy"},
    ]},
    {group:"Dictionaries",items:[
        {cmd:'d = {"a":1, "b":2}',desc:"Create a dict"},
        {cmd:'d["a"]',desc:"Access value"},
        {cmd:"d.get('c', 0)",desc:"Safe access with default"},
        {cmd:"d.keys(), d.values()",desc:"Get keys/values"},
        {cmd:"d.items()",desc:"Get key-value pairs"},
    ]},
    {group:"Strings",items:[
        {cmd:"s.upper(), s.lower()",desc:"Change case"},
        {cmd:"s.strip()",desc:"Remove whitespace"},
        {cmd:"s.split(',')",desc:"Split into list"},
        {cmd:"s.replace('a','b')",desc:"Replace text"},
        {cmd:'f"Hello {name}"',desc:"f-string formatting"},
    ]},
    {group:"Control Flow",items:[
        {cmd:"if/elif/else",desc:"Conditional logic"},
        {cmd:"for x in list:",desc:"Iterate over items"},
        {cmd:"while cond:",desc:"Loop until false"},
        {cmd:"range(start, stop, step)",desc:"Number sequence"},
        {cmd:"break, continue",desc:"Loop control"},
    ]},
    {group:"Pandas Basics",items:[
        {cmd:"pd.read_csv('f.csv')",desc:"Read CSV file"},
        {cmd:"df.head(), df.tail()",desc:"First/last rows"},
        {cmd:"df.shape",desc:"(rows, columns)"},
        {cmd:"df.describe()",desc:"Statistics summary"},
        {cmd:"df.info()",desc:"Column types & nulls"},
        {cmd:"df['col']",desc:"Select one column"},
        {cmd:"df[df['col'] > x]",desc:"Filter rows"},
    ]},
    {group:"Pandas Advanced",items:[
        {cmd:"df.groupby('col').mean()",desc:"Group & aggregate"},
        {cmd:"pd.merge(a, b, on='id')",desc:"Join DataFrames"},
        {cmd:"df.sort_values('col')",desc:"Sort by column"},
        {cmd:"df.isnull().sum()",desc:"Count missing"},
        {cmd:"df.fillna(0)",desc:"Fill missing values"},
        {cmd:"df.drop_duplicates()",desc:"Remove duplicates"},
    ]},
    {group:"Matplotlib",items:[
        {cmd:"plt.subplots(figsize=(8,5))",desc:"Create figure"},
        {cmd:"ax.bar(x, y)",desc:"Bar chart"},
        {cmd:"ax.plot(x, y, 'o-')",desc:"Line chart"},
        {cmd:"ax.scatter(x, y)",desc:"Scatter plot"},
        {cmd:"ax.hist(data, bins=20)",desc:"Histogram"},
        {cmd:"ax.pie(vals, labels=lbl)",desc:"Pie chart"},
        {cmd:"plt.tight_layout()",desc:"Fix spacing"},
        {cmd:"plt.show()",desc:"Render the chart"},
    ]},
];

// ============ GLOSSARY DATA ============
const glossaryData = [
    {term:"DataFrame",def:"A 2-dimensional labeled table in Pandas, similar to an Excel spreadsheet. It has rows (index) and columns. The primary data structure for data analysis in Python."},
    {term:"Series",def:"A 1-dimensional labeled array in Pandas. A single column of a DataFrame is a Series. Think of it as a labeled list."},
    {term:"CSV (Comma-Separated Values)",def:"A plain text file format where data values are separated by commas. Each line represents a row. The most common data exchange format."},
    {term:"Variable",def:"A named container that stores a value in memory. Examples: x = 10, name = 'Ada'. Variables can hold numbers, text, lists, and more."},
    {term:"Data Type",def:"The category of a value that determines what operations can be performed on it. Common types: int (integers), float (decimals), str (text), bool (True/False)."},
    {term:"Function",def:"A reusable block of code that performs a specific task. Defined with 'def', accepts parameters, and can return a value. Example: def add(a, b): return a + b"},
    {term:"Loop",def:"A programming construct that repeats a block of code. 'for' loops iterate over sequences; 'while' loops continue until a condition is False."},
    {term:"Conditional",def:"An if/elif/else statement that executes different code blocks based on whether conditions are True or False. The decision-making mechanism in code."},
    {term:"Index",def:"A label system for rows in a DataFrame/Series, or the position of an item in a list. Python uses zero-based indexing (first item is index 0)."},
    {term:"GroupBy",def:"A Pandas operation that splits data into groups based on a column, applies a function (like mean), and combines the results. Like an Excel pivot table."},
    {term:"Merge/Join",def:"Combining two DataFrames based on a common column (key). Similar to SQL JOIN or Excel VLOOKUP. Types: inner, left, right, outer."},
    {term:"Missing Value (NaN)",def:"A placeholder for data that is absent. In Pandas, represented as NaN (Not a Number). Must be handled before analysis — either removed or filled."},
    {term:"Outlier",def:"A data point significantly different from other observations. Can be errors or genuine extreme values. Detected using IQR method or Z-scores."},
    {term:"Correlation",def:"A statistical measure (-1 to +1) of the linear relationship between two variables. +1 = perfect positive, 0 = none, -1 = perfect negative."},
    {term:"Standard Deviation",def:"A measure of how spread out data is from the mean. Low SD = data clustered near mean. High SD = data widely spread."},
    {term:"Distribution",def:"The pattern of how data values are spread across the range. Common shapes: normal (bell curve), skewed, uniform, bimodal."},
    {term:"Feature Engineering",def:"Creating new columns/variables from existing data to improve analysis or model performance. Example: creating 'Revenue' from 'Price × Quantity'."},
    {term:"Matplotlib",def:"Python's foundational plotting library. Creates static charts like bar, line, scatter, pie, and histogram plots. Used via 'import matplotlib.pyplot as plt'."},
    {term:"Pyodide",def:"A Python runtime that runs in the web browser using WebAssembly. Allows Python code execution without installation or a server."},
    {term:"API (Application Programming Interface)",def:"A set of rules that allows programs to communicate. APIs often return data in JSON format. Used to fetch data from web services."},
];

// ============ FAQ DATA ============
const faqData = [
    {q:"Do I need to install anything?",a:"No! PyData-Flow Pro runs entirely in your browser. Python runs via Pyodide (WebAssembly). No installation, no setup, no server needed."},
    {q:"Is this platform really 100% free?",a:"Yes. It uses only free, open-source tools: Tailwind CSS, Pyodide, Pandas, NumPy, Matplotlib. No API keys, no subscriptions, no hidden costs."},
    {q:"My progress — where is it saved?",a:"Your progress, notes, code, and quiz answers are saved in your browser's localStorage. They persist across sessions but are specific to this browser/device. Use Export/Import to move data between devices."},
    {q:"Why is the Python engine slow to load?",a:"Pyodide downloads Python + data science libraries (Pandas, NumPy, Matplotlib) — about 30-40 MB. This happens once; after loading, code execution is fast. A stable internet connection helps."},
    {q:"Can I use my own CSV data?",a:"Yes! Click 'Upload CSV' in the Dataset Hub to load any .csv file from your computer. It will be available as 'data.csv' in your code."},
    {q:"How do I get a certificate?",a:"Complete all lessons (mark each as done) and a certificate modal will appear. Enter your name and download a beautiful HTML certificate."},
    {q:"Can I use this on my phone or tablet?",a:"Yes! The platform is fully responsive. Use the 📚 floating button to open the navigation sidebar on mobile devices."},
    {q:"I'm getting errors in my code — what do I do?",a:"Read the error message carefully — it usually tells you the line number and type of error. Common issues: missing quotes, wrong indentation, calling functions before defining them, and not loading a dataset before reading it."},
    {q:"What should I learn after completing this course?",a:"Next steps: SQL for databases, advanced Pandas (time series), Scikit-learn for machine learning, Seaborn for advanced visualization, and Streamlit for building data apps."},
    {q:"Can I contribute or report bugs?",a:"Yes! Visit the GitHub repository or contact the mentor directly. Contributions, feedback, and bug reports are welcome."},
];
