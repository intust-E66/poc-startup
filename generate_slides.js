const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POC Mindset — KU Startup Engineering Hackathon 2026</title>
    <meta name="description" content="Slides สำหรับ POC Workshop — KU Startup Engineering Hackathon 2026">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/theme/black.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;600;700;900&display=swap');
        
        :root {
            --r-background-color: #0a0e1a;
            --r-main-font: 'Noto Sans Thai', sans-serif;
            --r-heading-font: 'Noto Sans Thai', sans-serif;
            --r-main-color: #e2e8f0;
            --r-heading-color: #f0b90b;
            --r-link-color: #f0b90b;
            --gold: #f0b90b;
            --green: #10b981;
            --red: #ef4444;
        }

        .reveal { font-family: 'Noto Sans Thai', sans-serif; }
        .reveal h1, .reveal h2, .reveal h3, .reveal h4 { font-family: 'Noto Sans Thai', sans-serif; font-weight: 900; }
        
        .reveal h1 { font-size: 3.5em; text-transform: none; text-shadow: 0 0 30px rgba(240, 185, 11, 0.3); }
        .reveal h2 { color: var(--gold); font-size: 2.2em; text-transform: none; line-height: 1.3; }
        .reveal h3 { font-size: 1.5em; color: var(--r-main-color); margin-bottom: 20px; }
        
        .reveal p { font-size: 1.1em; line-height: 1.6; }
        
        .highlight { color: var(--gold); font-weight: 700; }
        .highlight-red { color: var(--red); font-weight: 700; }
        .highlight-green { color: var(--green); font-weight: 700; }
        
        .emoji-big { font-size: 3em; margin-bottom: 20px; display: block; }
        .emoji-med { font-size: 1.8em; margin-right: 15px; vertical-align: middle; }
        
        .box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
        }
        
        .box-gold { border-color: rgba(240, 185, 11, 0.3); background: rgba(240, 185, 11, 0.05); }
        .box-red { border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.05); }
        .box-green { border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.05); }
        
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center; text-align: left; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
        
        .nav-links {
            position: fixed; top: 20px; left: 20px; z-index: 999;
            background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
            padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .nav-links a { color: white; text-decoration: none; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
        
        .footer-logo {
            position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
            font-size: 24px; font-weight: 900; letter-spacing: -0.5px; opacity: 0.5;
        }
        .footer-logo span { color: var(--gold); }
        
        .quote { font-style: italic; font-size: 1.6em; line-height: 1.4; border-left: 8px solid var(--gold); padding-left: 30px; text-align: left; margin: 40px 0; }
        .author { font-size: 0.6em; color: var(--gold); font-style: normal; display: block; margin-top: 10px; font-weight: 700; }
        
        /* Fragment animations custom */
        .reveal .slides section .fragment.blur { filter: blur(10px); opacity: 1; transition: all 0.5s ease; }
        .reveal .slides section .fragment.blur.visible { filter: blur(0); }
    </style>
</head>
<body>
    <div class="nav-links"><a href="/index.html">🏠 กลับหน้า Home</a></div>
    <div class="footer-logo">POCK<span>it</span></div>
    
    <div class="reveal">
        <div class="slides">
            
            <!-- Title Slide -->
            <section class="center">
                <h1 style="margin-bottom:0;">POCK<span style="color:var(--gold)">it</span></h1>
                <h3 style="letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.5);font-size:1em;margin-top:0;">Startup Toolkit</h3>
                <div style="height:40px;"></div>
                <h2>The POC Mindset</h2>
                <p>KU Startup Engineering Hackathon 2026</p>
            </section>

            <!-- PART 1: THE TRAP -->
            <section>
                <section class="center" data-background-color="#ef4444">
                    <h2 style="color:white;font-size:3.5em;text-shadow: 0 10px 30px rgba(0,0,0,0.5);">💀 คำหลอกลวงที่น่ากลัวที่สุด</h2>
                </section>
                <section class="center">
                    <span class="emoji-big">💡</span>
                    <h2>"ไอเดียนี้เจ๋งว่ะ<br><span class="highlight">คนต้องชอบแน่ๆ</span>"</h2>
                </section>
                <section class="center">
                    <h2>รู้หรือไม่?</h2>
                    <h1 class="highlight-red" style="font-size:5em;margin:20px 0;">90%</h1>
                    <h3>ของ Startup <span class="highlight-red">ล้มเหลว</span></h3>
                </section>
                <section class="center">
                    <span class="emoji-big">🗑️</span>
                    <h2>ไม่ใช่เพราะทำของไม่เสร็จ...</h2>
                    <h2 class="fragment">แต่เพราะทำ <span class="highlight-red">สิ่งที่ไม่มีใครต้องการ</span></h2>
                </section>
                <section class="center">
                    <div class="quote">
                        "Fall in love with the <span class="highlight-red">PROBLEM</span>,<br>not the solution."
                        <span class="author">— Uri Levine (Co-founder of Waze)</span>
                    </div>
                </section>
            </section>

            <!-- PART 2: PROBLEM STATEMENT -->
            <section>
                <section class="center" data-background-color="#0f172a">
                    <h2 style="color:#38bdf8;font-size:3em;">🔍 Problem Statement</h2>
                    <p>จุดเริ่มต้นของทุกสิ่งที่ถูกต้อง</p>
                </section>
                <section>
                    <h2>องค์ประกอบของปัญหาที่ชัดเจน</h2>
                    <div class="grid-3" style="margin-top:40px;">
                        <div class="box fragment fade-up" data-fragment-index="1">
                            <span class="emoji-big">👤</span>
                            <h4 class="highlight">1. ใคร?</h4>
                            <p style="font-size:0.8em;color:#aaa;">(Target User)</p>
                            <p style="font-size:0.9em;">คนกลุ่มไหนที่เจ็บปวดกับเรื่องนี้ที่สุด เจ็บจนพร้อมจ่ายเงินแก้</p>
                        </div>
                        <div class="box box-red fragment fade-up" data-fragment-index="2">
                            <span class="emoji-big">🤕</span>
                            <h4 class="highlight-red">2. เจ็บอะไร?</h4>
                            <p style="font-size:0.8em;color:#aaa;">(Pain Point)</p>
                            <p style="font-size:0.9em;">ปัญหาที่แท้จริงคืออะไร กระทบชีวิตเขายังไง</p>
                        </div>
                        <div class="box box-gold fragment fade-up" data-fragment-index="3">
                            <span class="emoji-big">🌱</span>
                            <h4 class="highlight">3. ทำไมถึงจำ?</h4>
                            <p style="font-size:0.8em;color:#aaa;">(Root Cause)</p>
                            <p style="font-size:0.9em;">สาเหตุรากเหง้าของปัญหาคืออะไร (ลองใช้ 5 Whys)</p>
                        </div>
                    </div>
                </section>
                <section class="center">
                    <h2><span class="emoji-med">⚒️</span> Workshop: Template A</h2>
                    <p>ดาวน์โหลด POCKit บนมือถือ แล้วเริ่มกรอก Problem Statement ได้เลย</p>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://poc-startup.pages.dev/workshop.html%3Ftab=A&bgcolor=0a0e1a&color=f0b90b" style="border-radius:20px;border:8px solid #333;margin-top:20px;" width="250">
                    <p style="font-size:0.8em;color:var(--gold);">poc-startup.pages.dev/workshop</p>
                </section>
            </section>

            <!-- PART 3: PROOF OF CONCEPT -->
            <section>
                <section class="center" data-background-color="#166534">
                    <h2 style="color:white;font-size:3em;">🧪 Proof of Concept (POC)</h2>
                    <p>จงพิสูจน์ ก่อนสร้างจริง</p>
                </section>
                <section class="center">
                    <span class="emoji-big">🛑</span>
                    <h2>หยุดเขียนโค้ด!</h2>
                    <p>ถ้ายังไม่รู้ว่าจะมีคนใช้</p>
                </section>
                <section class="center">
                    <h2>กฎเหล็กของ POC</h2>
                    <div class="box box-green">
                        <h2 style="margin:0;">"สร้างให้ <span class="highlight-red">น้อยที่สุด</span><br>เพื่อเรียนรู้ให้ <span class="highlight-green">มากที่สุด</span>"</h2>
                    </div>
                </section>
                <section class="center">
                    <h2>ทดสอบอะไร?</h2>
                    <div class="grid-2" style="margin-top:40px;text-align:center;">
                        <div class="box fragment fade-up">
                            <span class="emoji-big">💎</span>
                            <h3 style="margin-bottom:0;">Value Risk</h3>
                            <p>เขาอยากได้มันจริงๆ ไหม?</p>
                        </div>
                        <div class="box fragment fade-up">
                            <span class="emoji-big">📱</span>
                            <h3 style="margin-bottom:0;">Usability Risk</h3>
                            <p>ถ้าทำมาแล้ว เขาใช้เป็นไหม?</p>
                        </div>
                    </div>
                </section>
            </section>

            <!-- PART 4: 3 TECHNIQUES -->
            <section>
                <section class="center" data-background-color="#f0b90b">
                    <h2 style="color:#000;font-size:3em;">🛠️ 3 เทคนิคพิชิต POC</h2>
                    <p style="color:#333;font-weight:700;">ไม่ต้องรอ Dev ก็ทดสอบได้ (No-Code MVP)</p>
                </section>
                
                <!-- Wizard of Oz -->
                <section>
                    <h2 style="display:flex;align-items:center;gap:15px;"><span class="emoji-med" style="margin:0;">🎩</span> 1. Wizard of Oz</h2>
                    <p>ข้างหน้าดูเป็นระบบอัตโนมัติ <strong>แต่หลังบ้านใช้คนทำ</strong></p>
                    <div class="grid-2" style="margin-top:30px;">
                        <div class="box box-gold">
                            <h4 style="color:var(--gold);margin-bottom:10px;">✅ ข้อดี</h4>
                            <p style="font-size:0.9em;">ได้เห็นพฤติกรรมการใช้งานจริงของลูกค้ากับ Product ที่ดูสมบูรณ์แล้ว</p>
                        </div>
                        <div class="box box-red">
                            <h4 style="color:var(--red);margin-bottom:10px;">❌ ข้อเสีย</h4>
                            <p style="font-size:0.9em;">เหนื่อยคนทำหลังบ้าน Scale ไม่ได้ (แต่เราแค่ทดสอบ!)</p>
                        </div>
                    </div>
                </section>
                <section data-background-image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop" data-background-opacity="0.2">
                    <h3 style="color:#94a3b8;font-weight:700;">CASE STUDY</h3>
                    <h1 style="text-shadow: 0 5px 20px rgba(0,0,0,0.8);">Santabox 🎅</h1>
                    <p class="fragment blur" style="font-size:1.4em;font-weight:600;">"AI จัดของขวัญ... ที่ไม่มี AI อยู่จริง"</p>
                    <p class="fragment" style="color:var(--gold);margin-top:30px;font-size:1.2em;">👉 เปิดไปดู Cases ในเว็บ POCKit</p>
                </section>

                <!-- Concierge -->
                <section>
                    <h2 style="display:flex;align-items:center;gap:15px;"><span class="emoji-med" style="margin:0;">🤝</span> 2. Concierge</h2>
                    <p>ลงไปให้บริการลูกค้าแบบ <strong>1-on-1 แบบพรีเมียม</strong></p>
                    <div class="grid-2" style="margin-top:30px;">
                        <div class="box box-gold">
                            <h4 style="color:var(--gold);margin-bottom:10px;">✅ ข้อดี</h4>
                            <p style="font-size:0.9em;">ได้คุยกับลูกค้าลึกซึ้ง เข้าใจปัญหาแบบถึงแก่นที่สุด</p>
                        </div>
                        <div class="box box-red">
                            <h4 style="color:var(--red);margin-bottom:10px;">❌ ข้อเสีย</h4>
                            <p style="font-size:0.9em;">ลูกค้าอาจจะชอบตัวเรา ไม่ได้ชอบ Product รูปแบบ Product ไม่ชัด</p>
                        </div>
                    </div>
                </section>
                <section data-background-image="https://images.unsplash.com/photo-1579389083046-d3ce1e3555db?q=80&w=2070&auto=format&fit=crop" data-background-opacity="0.2">
                    <h3 style="color:#94a3b8;font-weight:700;">CASE STUDY</h3>
                    <h1 style="text-shadow: 0 5px 20px rgba(0,0,0,0.8);">RE-invent ♻️</h1>
                    <p class="fragment blur" style="font-size:1.4em;font-weight:600;">"ตู้รับซื้อขวดอัตโนมัติ... ที่มีคนซ่อนอยู่ในตู้"</p>
                    <p class="fragment" style="color:var(--gold);margin-top:30px;font-size:1.2em;">👉 เปิดไปดู Cases ในเว็บ POCKit</p>
                </section>

                <!-- Fake Door -->
                <section>
                    <h2 style="display:flex;align-items:center;gap:15px;"><span class="emoji-med" style="margin:0;">🚪</span> 3. Fake Door </h2>
                    <p>สร้างป้ายหลอกโฆษณา Product ที่<strong>ยังไม่มีอยู่จริง</strong></p>
                    <div class="grid-2" style="margin-top:30px;">
                        <div class="box box-gold">
                            <h4 style="color:var(--gold);margin-bottom:10px;">✅ ข้อดี</h4>
                            <p style="font-size:0.9em;">รูดบัตรประชาชน / วัด Demand ตลาดได้เร็วที่สุด ใช้เงินน้อยสุด</p>
                        </div>
                        <div class="box box-red">
                            <h4 style="color:var(--red);margin-bottom:10px;">❌ ข้อเสีย</h4>
                            <p style="font-size:0.9em;">อาจทำให้ลูกค้าเสียความรู้สึกถ้ารอดูแลไม่ดี</p>
                        </div>
                    </div>
                </section>
                <section data-background-image="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" data-background-opacity="0.2">
                    <h3 style="color:#94a3b8;font-weight:700;">CASE STUDY</h3>
                    <h1 style="text-shadow: 0 5px 20px rgba(0,0,0,0.8);">Glurr.com 🎓</h1>
                    <p class="fragment blur" style="font-size:1.4em;font-weight:600;">"แชทคุยกับเพื่อนใหม่ในมอ... ที่ตอนจบเป็นแค่ป้ายหลอก"</p>
                    <p class="fragment" style="color:var(--gold);margin-top:30px;font-size:1.2em;">👉 เปิดไปดู Cases ในเว็บ POCKit</p>
                </section>
                
                <section class="center">
                    <h2><span class="emoji-med">⚒️</span> Workshop: Template B</h2>
                    <p>หาความเสี่ยงหลัก และเลือกเทคนิคที่ใช่</p>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://poc-startup.pages.dev/workshop.html%3Ftab=B&bgcolor=0a0e1a&color=f0b90b" style="border-radius:20px;border:8px solid #333;margin-top:20px;" width="250">
                    <p style="font-size:0.8em;color:var(--gold);">poc-startup.pages.dev/workshop</p>
                </section>
            </section>

            <!-- PART 5: VALIDATE & 30-SEC TEST -->
            <section>
                <section class="center" data-background-color="#4f46e5">
                    <h2 style="color:white;font-size:3em;">🎯 Validation</h2>
                    <p>จะรู้ได้ยังไง ว่าเจอลูกค้าตัวจริง?</p>
                </section>
                <section class="center">
                    <h2>3 คำถามชี้ชะตา ☠️</h2>
                    <div class="box" style="text-align:left;font-size:1.2em;">
                        <p class="fragment fade-up"><strong>Q1:</strong> เราจะใช้วิธีไหนถึงจะรู้ได้ว่า มันคือปัญหาจริงๆ ของลูกค้า?</p>
                        <hr style="opacity:0.2;margin:20px 0;">
                        <p class="fragment fade-up"><strong>Q2:</strong> เราจะทำ Prototype แบบไหนไปทดสอบ?</p>
                        <hr style="opacity:0.2;margin:20px 0;">
                        <p class="fragment fade-up"><strong>Q3:</strong> <span class="highlight-gold">อะไรคือสิ่งที่บอกว่าจะเป็นลูกค้าเราจริงๆ?</span></p>
                    </div>
                    <p class="fragment" style="color:var(--red);font-weight:700;font-size:1.2em;margin-top:30px;">"อย่าเชื่อคำบอกชอบ ให้เชื่อการยอมจ่าย"</p>
                </section>
                <section class="center">
                    <span class="emoji-big">⏱️</span>
                    <h1 style="font-size:4em;">30-Seconds Test</h1>
                    <p style="font-size:1.5em;" class="highlight">"ถ้าพิทช์จบใน 30 วิ แล้วคนยังงง..."</p>
                    <h2 class="fragment highlight-red" style="margin-top:30px;font-size:3em;text-transform:uppercase;">= พัง!</h2>
                </section>
                <section class="center">
                    <h2>มาลองทดสอบกัน!</h2>
                    <div class="qr-code">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://poc-startup.pages.dev/30sec-test.html&bgcolor=0a0e1a&color=f0b90b" style="border-radius:20px;border:8px solid #333;margin-bottom:20px;" width="300">
                        <p style="color:var(--gold);font-weight:700;margin:0;">สแกนเพื่อเปิดตัวจับเวลา (สำหรับ Mentor)</p>
                    </div>
                </section>
            </section>

            <!-- OUTRO -->
            <section class="center" data-background-color="#f0b90b">
                <h1 style="color:#000;font-size:4em;text-shadow:none;margin-bottom:20px;">LET'S BUID! 🚀</h1>
                <p style="color:#333;font-size:1.5em;font-weight:700;">เปิดเว็บ POCKit แล้วเริ่มทำ Workshop ได้เลย</p>
                <p style="color:#000;font-size:1.2em;font-weight:900;background:rgba(255,255,255,0.5);display:inline-block;padding:10px 30px;border-radius:100px;margin-top:30px;border:2px solid #000;">poc-startup.pages.dev</p>
            </section>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.js"></script>
    <script>
        Reveal.initialize({
            controls: true,
            progress: true,
            center: false,
            hash: true,
            transition: 'slide',
            backgroundTransition: 'fade',
            margin: 0.1,
            disableLayout: false,
        });
    </script>
</body>
</html>`;

fs.writeFileSync('slides.html', htmlContent);
console.log('Slides generated successfully!');
