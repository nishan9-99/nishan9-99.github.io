/* =====================================================================
   NISHAN GIRI - portfolio script (v14a)
   ---------------------------------------------------------------------
   CONFIG: everything you will ever want to edit lives in this block.
   Links, stats, skills, projects, journey, form endpoint, resume.

   [CONFIRM: ...] values are placeholders for facts that are not confirmed yet.
   They never show on the live page. Add ?review=1 to the URL to see them
   (https://nishan9-99.github.io/?review=1). Replace each one with the real
   value and it appears everywhere it is used.
   ===================================================================== */
const CONFIG = {
  email: 'gireenishan10@gmail.com',
  location: 'Bengaluru, India',
  resumePath: 'assets/resume.pdf',
  formEndpoint: 'https://formspree.io/f/moevyjor',
  headline: 'B.E. CSE student building full-stack web apps',
  socials: {
    github:   'https://github.com/nishan9-99',
    linkedin: 'https://www.linkedin.com/in/nishan-giree/',
    x:        '',                             // add X (Twitter) URL to show the icon
    youtube:  ''                              // add YouTube channel URL to show the icon
  },
  roles: ['Full Stack Developer', 'Gamer', 'Content Creator'],
  stats: [
    { num: 2, suffix: '+', label: 'Years Learning' },
    { text: 'B.E. CSE', label: 'BMSIT, Bengaluru' }
  ],
  /* Skills: [name, icon key, brand colour]. Icons are inline SVG (see ICONS), no links, no network. */
  skills: [
    { group: 'Frontend', items: [
      ['HTML5','html5','#E34F26'], ['CSS3','css','#1572B6'], ['JavaScript','javascript','#F7DF1E'], ['React','react','#61DAFB'] ] },
    { group: 'Backend', items: [
      ['PHP','php','#777BB4'], ['MySQL','mysql','#5BB4E6'], ['C++','cpp','#00599C'] ] },
    { group: 'Tools', items: [
      ['Git','git','#F05032'], ['VS Code','vscode','#007ACC'], ['XAMPP','xampp','#FB7A24'], ['Docker','docker','#2496ED'] ] },
    { group: 'Creative', items: [
      ['Photoshop','ps','#31A8FF'], ['After Effects','ae','#9999FF'], ['Premiere Pro','pr','#EA77FF'] ] }
  ],
  /* Projects.
     status: 'Shipped' | 'In progress' | 'Open source'.
     shots: how many real screenshots you dropped in assets/ as proj-<id>-1.webp, proj-<id>-2.webp ...
            (each needs a .jpg twin). Leave 0 until the files exist: a clean placeholder card shows instead.
     video: true once assets/proj-<id>.webm (5-6 s muted loop) exists. Plays on hover / when in view. */
  projects: [
    { id:'hostel', cat:'web', status:'Open source', short:'Smart Hostel', shots:0, video:false,
      title:'Smart Hostel Room & Visitor Management System',
      desc:'A PHP and MySQL hostel app with separate admin and student workflows: room allocation, dues and payment proofs, complaints, visitor logs and reports.',
      problem:'A college DBMS project: model the day-to-day work of a hostel (rooms, dues, complaints, visitors) in a relational schema.',
      role:'Built the PHP backend, the MySQL schema (views, triggers, a stored procedure) and the Docker setup.',
      result:'A local-demo build with admin and student roles. It runs in Docker; the repo README says a full verified run of v4.0 is still pending.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['PHP','MySQL','Bootstrap','Docker'],
      link:'https://github.com/nishan9-99/smart-hostel-management-system', live:'', play:'' },
    { id:'lyrivo', cat:'web', status:'In progress', short:'LYRIVO', shots:0, video:false,
      title:'LYRIVO: Music Streaming App',
      desc:'A music streaming app with sign-in, playlists and playback. Still in development.',
      problem:'Wanted a personal, distraction-free listening space with my own playlists.',
      role:'Building it solo: Firebase auth, playlist logic and the playback UI.',
      result:'In progress. There is no public build or repository yet.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['Firebase','JavaScript','HTML','CSS'],
      link:'', live:'', play:'' },
    { id:'questhud', cat:'creative', status:'Open source', short:'Quest HUD', shots:0, video:false,
      title:'Quest HUD: Terminal Task Tracker',
      desc:'A game-HUD terminal task tracker in C++17 with quests, XP, levels and daily streaks. Your to-do list, but it is a game.',
      problem:'Plain to-do lists are easy to ignore; there is no feedback loop that makes finishing tasks feel good.',
      role:'Designed and built the whole CLI in C++17: quest tracking, XP and level logic, streaks, HUD-styled output.',
      result:'A working terminal tracker that turns daily tasks into quests, released open source under the MIT license.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['C++17','CLI','Open Source'],
      link:'https://github.com/nishan9-99/quest-hud', live:'', play:'' },
    { id:'neonrift', cat:'creative', status:'Shipped', short:'Neon Rift', shots:0, video:false,
      title:'Neon Rift: Rift Protocol (v2.0)',
      desc:'A neon roguelite survival shooter for the browser. Pick a ship and weapon, level up with upgrade cards, and fight a boss every 5 waves.',
      problem:'Wanted a fast arcade game that runs anywhere with zero installs or build tools, then grew it from a one-file V1 into a full roguelite.',
      role:'Built the whole game solo: HTML5 Canvas rendering, enemy and boss AI, weapons, progression, save system, and synthesized music and sound effects.',
      result:'A complete playable v2.0 with 5 weapons, 4 ships, 7 enemy types plus elites, boss fights every 5 waves, 4 arenas with events, a shop, 12 achievements, and keyboard, mouse and touch controls. No build step or dependencies.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['HTML5 Canvas','JavaScript','CSS','Web Audio'],
      link:'https://github.com/nishan9-99/neon-rift-v2', live:'', play:'[CONFIRM: Neon Rift Play now URL (GitHub Pages build)]' },
    { id:'bioverse', cat:'web', status:'Open source', short:'BioVerse', shots:0, video:false,
      title:'BioVerse: Anatomy Learning App',
      desc:'Full-stack anatomy learning app: interactive organ viewer, quizzes, flashcards, a disease explorer, an AI tutor (works offline) and three physiology lab simulations.',
      problem:'[CONFIRM: why you made it]',
      role:'[CONFIRM: your role on this project]',
      result:'A MERN app with 6 organ systems, 8 diseases, quizzes, flashcards, 3 lab simulators and JWT sign-in. The AI tutor falls back to built-in answers when no API key is set. Runs with Docker.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['React','Vite','Tailwind CSS','Node.js','Express','MongoDB','JWT','Docker'],
      link:'https://github.com/nishan9-99/bioverse', live:'', play:'' },
    /* KyaDekhein is parked until it is finished. To bring it back, paste this object back into the list above:
    { id:'kyadekhein', cat:'web', status:'Open source', short:'KyaDekhein', shots:0, video:false,
      title:'KyaDekhein: Movie Discovery for India',
      desc:'A language-first movie discovery site for Indian audiences, built with React, Vite and the TMDB API.',
      problem:'Most movie sites are language-agnostic and bury regional cinema; this one puts the language filter first.',
      role:'Built the React + Vite front end with a TMDB-backed feed, details pages with trailers, search and watch-provider listings.',
      result:'Version 1.0.0 is built and tested (see the repo test report). It is not deployed yet, so there is no live link.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['React','Vite','TMDB API','JavaScript'],
      link:'https://github.com/nishan9-99/kyadekhein', live:'[CONFIRM: link]', play:'' },
    */
    /* Portfolio card parked (the site itself should not be a project on the site). Paste back into the list to restore:
    { id:'portfolio', cat:'creative', status:'Shipped', short:'Portfolio', shots:0, video:false,
      title:'Portfolio',
      desc:'This portfolio site, plus a game-HUD style GitHub profile README, in plain HTML, CSS, JavaScript and SVG.',
      problem:'[CONFIRM: why you made it]',
      role:'[CONFIRM: your role on this project]',
      result:'A static site deployed on GitHub Pages and an animated profile README.',
      learned:'[CONFIRM: one line on what you learned from this project]',
      tags:['HTML','CSS','JavaScript','SVG'],
      link:'https://github.com/nishan9-99/nishan9-99.github.io', live:'https://nishan9-99.github.io/', play:'' }
    */
  ],
  learning: ['Blender', 'Game development'],
  /* Journey: add the real year to each item (shown as a small label). */
  journey: [
    { year:'[CONFIRM: year]', title:'B.E. CSE, BMSIT Bengaluru', sub:'The foundation', text:'Computer Science undergrad, focused on software engineering and full stack development.' },
    { year:'[CONFIRM: year]', title:'Started building for the web', sub:'First lines to first pages', text:'HTML, CSS and JavaScript turned into a habit of shipping small, finished things.' },
    { year:'[CONFIRM: year]', title:'Smart Hostel built', sub:'First real system', text:'A PHP + MySQL management system with admin and student dashboards.' },
    { year:'[CONFIRM: year]', title:'LYRIVO in progress', sub:'Leveling up', text:'Music streaming with Firebase auth and playlists, the next portfolio piece.' },
    { year:'[CONFIRM: year]', title:'Game dev & content', sub:'The creative lane', text:'Learning game development and producing gaming content alongside code.' }
  ],
  marquee: ['HTML5','CSS3','JavaScript','React','PHP','MySQL','C++','Git','VS Code','Docker']
};
/* ================== end of CONFIG - code below ================== */

const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(hover:none), (pointer:coarse)').matches;
const saveData = !!(navigator.connection && navigator.connection.saveData);
const REVIEW = new URLSearchParams(location.search).has('review');
const EASE = 'cubic-bezier(.22,1,.36,1)';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
/* a value counts as real unless it is an unfilled [CONFIRM: ...] placeholder */
const isReal = v => !!v && !/^\[CONFIRM/i.test(v);
const isUrl = v => /^https?:\/\//i.test(v || '');
const show = v => isReal(v) ? v : (REVIEW && v ? v : '');
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
if (REVIEW) document.documentElement.classList.add('review');

/* runs fn once the opening transition has finished (or straight away when it never played) */
const whenIntro = fn => document.body.classList.contains('intro-done')
  ? fn() : document.addEventListener('intro-done', fn, { once: true });

/* ---------- SVG icon library (inline, works offline) ---------- */
const ICONS = {
  html5: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
  css: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1572B6" d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>',
  bootstrap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#7952B3" d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>',
  javascript: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
  php: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#777BB4" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/></svg>',
  mysql: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#5BB4E6" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/></svg>',
  firebase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#DD2C00" d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"/></svg>',
  git: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F05032" d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/></svg>',
  docker: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>',
  cpp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00599C" d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>',
  react: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>',
  vite: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#9135FF" d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"/></svg>',
  blender: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#E87D0D" d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"/></svg>',
  xampp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#FB7A24" d="M16.792,11.923c0.113,0.043,0.226,0.079,0.334,0.128c0.45,0.203,0.715,0.553,0.748,1.044 c0.041,0.634,0.044,1.271,0.002,1.905c-0.049,0.732-0.725,1.292-1.483,1.271c-0.735-0.021-1.369-0.62-1.397-1.341 c-0.017-0.441-0.003-0.884-0.006-1.326c-0.001-0.239-0.003-0.242-0.245-0.243c-1.363-0.001-2.726,0.008-4.089-0.003 c-0.888-0.007-1.421,0.482-1.471,1.46c-0.019,0.38-0.1,0.727-0.357,1.018c-0.397,0.451-0.898,0.601-1.472,0.466 c-0.554-0.131-0.867-0.522-1.035-1.048c-0.117-0.367-0.056-0.737,0.012-1.094c0.341-1.797,1.366-3.006,3.125-3.555 c0.357-0.112,0.731-0.166,1.105-0.166c0.94,0.001,1.881,0.001,2.821-0.001c0.128,0,0.257-0.012,0.385-0.021 c0.702-0.051,1.166-0.511,1.22-1.352c0.004-0.064,0-0.129,0.001-0.193c0.011-0.788,0.605-1.396,1.393-1.425 c0.787-0.029,1.438,0.527,1.493,1.318c0.076,1.083-0.265,2.046-0.913,2.907C16.903,11.751,16.819,11.816,16.792,11.923z M8.249,10.436c-0.258-0.008-0.571,0.018-0.882-0.035c-0.536-0.09-0.876-0.39-1.02-0.916C6.19,8.912,6.25,8.388,6.698,7.96 C7.154,7.526,7.694,7.4,8.285,7.645c0.52,0.216,0.859,0.731,0.89,1.293C9.2,9.382,9.178,9.828,9.182,10.272 c0.001,0.116-0.043,0.167-0.161,0.165C8.781,10.434,8.542,10.436,8.249,10.436z M21.682,0H2.318C1.102,0,0.116,0.986,0.116,2.202 v19.317c0,1.37,1.111,2.481,2.481,2.481h18.807c1.37,0,2.481-1.111,2.481-2.481V2.202C23.884,0.986,22.898,0,21.682,0z M20.125,12.473c0.519,0.804,0.733,1.69,0.677,2.657c-0.108,1.886-1.413,3.474-3.25,3.916c-2.585,0.623-4.566-0.923-5.233-2.794 c-0.109-0.304-0.16-0.622-0.224-0.985c-0.068,0.414-0.115,0.789-0.264,1.134c-0.697,1.617-1.884,2.603-3.665,2.799 c-2.104,0.232-4.048-1.067-4.632-3.084c-0.25-0.863-0.175-1.747-0.068-2.625c0.08-0.653,0.321-1.268,0.632-1.848 c0.057-0.106,0.057-0.184-0.01-0.285c-0.561-0.845-0.779-1.777-0.7-2.784C3.43,8.035,3.56,7.52,3.805,7.038 C4.52,5.626,6.09,4.427,8.193,4.626c1.849,0.175,3.562,1.77,3.83,3.564c0.013,0.09,0.039,0.178,0.068,0.311 c0.044-0.241,0.076-0.439,0.118-0.636c0.344-1.63,1.94-3.335,4.201-3.357c2.292-0.021,3.99,1.776,4.31,3.446 c0.17,0.888,0.089,1.776-0.103,2.663c-0.112,0.517-0.31,1.008-0.524,1.492C20.034,12.245,20.043,12.345,20.125,12.473z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.2 4.9 18.2 5.2 18.2 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L2.7 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',
  gmail: '<svg viewBox="0 0 24 24" class="gm"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-2 8 5.5-3 5.5 3-2-8"/></svg>',
  vscode: '<svg viewBox="0 0 24 24"><path fill="#007ACC" d="M17.6 2.3 9.4 10.6 4.7 6.9 2.3 8.1v7.8l2.4 1.2 4.7-3.7 8.2 8.3 4.1-2V4.3l-4.1-2zM4.7 14.5v-5l2.5 2.5-2.5 2.5zM17.6 15.7 13 12l4.6-3.7v7.4z"/></svg>',
  ps: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#001E36"/><text x="12" y="16.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10" fill="#31A8FF">Ps</text></svg>',
  ae: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#00005B"/><text x="12" y="16.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10" fill="#9999FF">Ae</text></svg>',
  pr: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#00005B"/><text x="12" y="16.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10" fill="#EA77FF">Pr</text></svg>'
};
const gmailHref = `https://mail.google.com/mail/u/0/?fs=1&to=${CONFIG.email}&su=Portfolio+Contact&tf=cm`;
const gmailLink = (cls) => `<a class="${cls}" href="${gmailHref}" target="_blank" rel="noopener" aria-label="Gmail">${ICONS.gmail}</a>`;
const socialLinks = (cls) => ['github','linkedin','x','youtube']
  .filter(k => CONFIG.socials[k])
  .map(k => `<a class="${cls}" href="${CONFIG.socials[k]}" target="_blank" rel="noopener" aria-label="${k==='x'?'X (Twitter)':k[0].toUpperCase()+k.slice(1)}">${ICONS[k]}</a>`).join('');
const allSkills = CONFIG.skills.flatMap(g => [...g.items, ...(g.learning || [])]);
const iconFor = key => ICONS[key] || '';

/* ---------- render from CONFIG ---------- */
(() => {
  $('#heroSocial').innerHTML = socialLinks() + gmailLink();
  $('#contactSocial').innerHTML = socialLinks() + gmailLink();
  $('#footSocial').innerHTML = socialLinks() + gmailLink();
  $('#menuSocial').innerHTML = socialLinks('mm-ic') + gmailLink('mm-ic');
  $('#contactLines').innerHTML =
    `<span class="c-line">${ICONS.gmail}<span class="c-mail">${CONFIG.email}</span>
       <button type="button" class="copy-btn" id="copyMail" aria-label="Copy email address">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg><span>Copy</span></button></span>
     <span class="c-line">${ICONS.pin}${CONFIG.location}</span>`;
  $('#heroStats').innerHTML = CONFIG.stats.map(s => {
    if (s.count === 'projects') return `<div class="stat"><b><span class="count" data-to="${CONFIG.projects.length}">0</span></b><span>${s.label}</span></div>`;
    if (s.num !== undefined) return `<div class="stat"><b><span class="count" data-to="${s.num}">0</span>${s.suffix || ''}</b><span>${s.label}</span></div>`;
    return `<div class="stat"><b>${s.text}</b><span>${s.label}</span></div>`;
  }).join('');
  /* player card: plain tags, no invented percentages */
  const by = st => CONFIG.projects.filter(p => p.status === st).map(p => p.short);
  /* skills: plain <li> tags, nothing clickable */
  $('#skillGroups').innerHTML = CONFIG.skills.map(g => `
    <p class="skill-group-label reveal">${g.group.toUpperCase()}</p>
    <ul class="skill-grid" role="list">${g.items.map(([name, icon]) =>
      `<li class="skill reveal">${iconFor(icon)}<b>${name}</b></li>`).join('')}${(g.learning || []).map(([name, icon]) =>
      `<li class="skill learning reveal">${iconFor(icon)}<b>Learning: ${name}</b></li>`).join('')}</ul>`).join('');
  $('#gStack').innerHTML = ['HTML5','CSS3','JavaScript','PHP','MySQL'].map(n => {
    const s = allSkills.find(i => i[0] === n); return `<li>${iconFor(s[1])}${n}</li>`; }).join('');
  $('#timeline').innerHTML = CONFIG.journey.map(j => `
    <div class="tl-item reveal">${show(j.year) ? `<em class="tl-year">${esc(show(j.year))}</em>` : ''}<b>${j.title}</b><span>${j.sub}</span><p>${j.text}</p></div>`).join('');
  const items = CONFIG.marquee.map(m => {
    const s = allSkills.find(i => i[0] === m);
    return `<span>${s ? iconFor(s[1]) : ''}${m}</span>`;
  }).join('');
  $('#marqueeTrack').innerHTML = items + items;
  $('#year').textContent = new Date().getFullYear();
})();

/* ---------- opening transition: Hi -> Loading -> glitch -> 404 crash -> lift. Plays on every load. ---------- */
(() => {
  const html = document.documentElement, body = document.body, intro = $('#intro');
  const finish = () => { body.classList.add('intro-done'); document.dispatchEvent(new Event('intro-done')); };
  if (!intro || !html.classList.contains('intro-on')) { intro && intro.remove(); finish(); return; }
  const barFill = $('#bootBarFill'), pct = $('#bootPct'), clock = $('#bootClock');
  let ended = false; const timers = [];
  const listeners = ['pointerdown', 'keydown', 'touchstart', 'wheel'];
  const end = quick => {
    if (ended) return; ended = true;
    timers.forEach(clearTimeout);
    listeners.forEach(t => removeEventListener(t, skip, true));
    finish();
    intro.classList.add(quick ? 'skip' : 'lift');
    setTimeout(() => { html.classList.remove('intro-on'); intro.remove(); }, quick ? 280 : 600);
  };
  const skip = () => end(true);
  listeners.forEach(t => addEventListener(t, skip, { capture: true, passive: true }));
  /* fake progress: climbs then hangs at 78%, so the glitch reads as the stall breaking */
  const animateBar = (to, ms) => {
    if (barFill) barFill.style.transitionDuration = ms + 'ms', barFill.style.width = to + '%';
    if (pct) {
      const from = parseInt(pct.textContent, 10) || 0, start = performance.now();
      const step = now => {
        if (ended) return;
        const p = Math.min(1, (now - start) / ms), v = Math.round(from + (to - from) * p);
        pct.textContent = v + '%';
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  };
  const t0 = performance.now();                       /* time since navigation start */
  const tick = () => { if (ended) return; if (clock) clock.textContent = (performance.now() / 1000).toFixed(2).padStart(5, '0'); requestAnimationFrame(tick); };
  tick();
  const at = (ms, fn) => timers.push(setTimeout(() => { if (!ended) fn(); }, Math.max(0, ms - t0)));
  at(900,  () => { intro.dataset.phase = 'load'; animateBar(78, 1400); });
  at(2400, () => { intro.classList.add('glitch'); });
  at(2760, () => { intro.classList.remove('glitch'); intro.dataset.phase = 'crash'; });
  at(4300, () => end(false));                                            /* lift begins */
  timers.push(setTimeout(() => end(true), Math.max(60, 5500 - t0)));    /* hard stop, can never trap the page */
})();

/* ---------- starfield (light on phones, pauses when hidden) ---------- */
(() => {
  const c = $('#stars'), x = c.getContext('2d');
  let stars = [], W, H, raf, lastW = 0;
  const N = () => innerWidth < 760 ? 34 : Math.min(170, innerWidth/9);
  function size(){
    W = c.width = innerWidth; H = c.height = innerHeight;
    if (innerWidth === lastW && stars.length) return;   // do not reshuffle when the mobile address bar resizes
    lastW = innerWidth;
    stars = Array.from({length: N()}, () => ({
      x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.3+.3,
      s: Math.random()*.22+.04, o: Math.random()*.5+.25, tw: Math.random()*Math.PI*2 }));
  }
  function frame(t){
    x.clearRect(0,0,W,H);
    const col = '#cdd3ff';
    for (const s of stars){
      s.y -= s.s; if (s.y < -4){ s.y = H+4; s.x = Math.random()*W; }
      x.globalAlpha = prefersReduced ? s.o : s.o*(.6+.4*Math.sin(t/900+s.tw));
      x.fillStyle = col; x.beginPath(); x.arc(s.x,s.y,s.r,0,7); x.fill();
    }
    x.globalAlpha = 1;
    if (!prefersReduced) raf = requestAnimationFrame(frame);
  }
  size(); addEventListener('resize', size);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !prefersReduced) raf = requestAnimationFrame(frame); else cancelAnimationFrame(raf);
  });
  frame(0);
})();

/* ---------- custom cursor: stays hidden until the first real mousemove, never on touch ---------- */
(() => {
  if (prefersReduced || isTouch) return;
  const dot = $('#cursor'), ring = $('#cursorRing');
  let cx=0, cy=0, rx=0, ry=0, tx=0, ty=0, raf = 0;
  function follow(){
    cx+=(tx-cx)*.35; cy+=(ty-cy)*.35; rx+=(tx-rx)*.14; ry+=(ty-ry)*.14;
    dot.style.left=cx+'px'; dot.style.top=cy+'px';
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    raf = requestAnimationFrame(follow);
  }
  addEventListener('mousemove', e => {
    tx=e.clientX; ty=e.clientY;
    if (!raf){ cx=rx=tx; cy=ry=ty; dot.style.opacity=1; ring.style.opacity=.8; follow(); }
  }, {passive:true});
  /* hybrid devices: a touch hides the cursor and stops the loop */
  addEventListener('touchstart', () => {
    cancelAnimationFrame(raf); raf = 0; dot.style.opacity = 0; ring.style.opacity = 0;
  }, {passive:true});
  document.addEventListener('mouseover', e => {
    const hit = e.target.closest('a,button,.proj-card,input,textarea');
    dot.classList.toggle('big', !!hit); ring.classList.toggle('big', !!hit);
  });
})();

/* ---------- magnetic buttons (pointer devices only) ---------- */
if (!prefersReduced && !isTouch) $$('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});

/* ---------- hero name letter reveal (CSS holds it until body.intro-done) ---------- */
(() => {
  const el = $('#heroName'), txt = el.textContent; el.textContent = '';
  [...txt].forEach((ch,i) => {
    const s = document.createElement('span');
    s.className = 'ltr'; s.textContent = ch === ' ' ? '\u00A0' : ch;
    s.style.animationDelay = (prefersReduced ? 0 : .25 + i*.055) + 's';
    el.appendChild(s);
  });
})();

/* ---------- typing role rotator (starts after the intro) ---------- */
(() => {
  const el = $('#typedRole');
  if (prefersReduced){ el.textContent = CONFIG.roles[0]; return; }
  let ri = 0, ci = 0, del = false;
  function type(){
    const word = CONFIG.roles[ri];
    el.textContent = word.slice(0, ci);
    let wait = del ? 42 : 85;
    if (!del && ci === word.length){ del = true; wait = 1900; }
    else if (del && ci === 0){ del = false; ri = (ri+1) % CONFIG.roles.length; wait = 350; }
    else ci += del ? -1 : 1;
    setTimeout(type, wait);
  }
  whenIntro(() => setTimeout(type, 450));
})();

/* ---------- two-state navigation (top bar <-> right rail) ---------- */
(() => {
  const body = document.body, hero = $('#home');
  let railOn = false, tick = false;
  function check(){
    tick = false;
    const h = hero.offsetHeight || innerHeight, y = scrollY;
    if (!railOn && y > h * .6){ railOn = true; }
    else if (railOn && y < h * .4){ railOn = false; }
    body.classList.toggle('rail-on', railOn);
    $('#toTop').classList.toggle('show', y > innerHeight * .9);
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#scrollbarProgress').style.transform = `scaleX(${max > 0 ? Math.min(1, y/max) : 0})`;
  }
  const onScroll = () => { if (!tick){ tick = true; requestAnimationFrame(check); } };
  addEventListener('scroll', onScroll, {passive:true});
  addEventListener('resize', onScroll, {passive:true});
  check();
  /* active section -> top bar, rail and mobile menu */
  const ids = ['#home','#about','#projects','#skills','#contact'];
  const all = [...$$('#topLinks a'), ...$$('.rail a'), ...$$('.mm-links a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = '#' + e.target.id;
    all.forEach(a => {
      const on = a.getAttribute('href') === id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
  }), {rootMargin:'-42% 0px -52% 0px'});
  ids.forEach(id => { const s = $(id); if (s) io.observe(s); });
  /* hide the floating menu button while the footer is on screen so it never covers the copyright */
  const f = $('footer');
  if (f) new IntersectionObserver(es => es.forEach(e => body.classList.toggle('foot-in', e.isIntersecting)), {threshold:.01}).observe(f);
})();

/* ---------- eased anchor scrolling (native touch scrolling is never touched) ---------- */
const smooth = (() => {
  let raf = 0;
  const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2;
  const cancel = () => { if (raf){ cancelAnimationFrame(raf); raf = 0; } };
  ['wheel','touchstart','pointerdown','keydown'].forEach(t => addEventListener(t, cancel, {passive:true}));
  document.documentElement.classList.add('js-scroll');  // turns off CSS smooth so the two never fight
  function to(y, dur = 700){
    cancel();
    y = Math.max(0, Math.min(y, document.documentElement.scrollHeight - innerHeight));
    if (prefersReduced || Math.abs(y - scrollY) < 2){ scrollTo(0, y); return; }
    const y0 = scrollY, t0 = performance.now();
    (function step(t){
      const p = Math.min(1, (t - t0)/dur);
      scrollTo(0, y0 + (y - y0)*ease(p));
      raf = p < 1 ? requestAnimationFrame(step) : 0;
    })(t0);
  }
  function toHash(h, push = true){
    const el = h === '#' || h === '#home' ? document.body : $(h);
    if (!el) return false;
    const off = el === document.body ? 0 : (parseFloat(getComputedStyle(el).scrollMarginTop) || 0);
    to(el === document.body ? 0 : el.getBoundingClientRect().top + scrollY - off);
    if (push && h.length > 1) history.pushState(null, '', h);
    return true;
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (a.classList.contains('skip')){ return; }          // skip link keeps its native focus jump
    if (toHash(a.getAttribute('href'))) e.preventDefault();
  });
  return { to, toHash };
})();

/* ---------- mobile menu: Resume + socials, inert page behind, focus trap ---------- */
(() => {
  const b = $('#burger'), m = $('#mobileMenu'), f = $('#floatMenu');
  const behind = ['#main', 'footer', '#railNav', '.skip', '#toTop'].map(s => $(s)).filter(Boolean);
  let opener = null;
  const toggles = () => [b, f].filter(el => el && el.offsetParent !== null);
  const focusables = () => [...m.querySelectorAll('a[href],button')].filter(el => el.offsetParent !== null);
  const set = open => {
    if (open === m.classList.contains('open')) return;
    opener = open ? (toggles()[0] || b) : opener;
    [b, f].forEach(el => { if (!el) return; el.classList.toggle('open', open); el.setAttribute('aria-expanded', open); el.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    m.classList.toggle('open', open); m.setAttribute('aria-hidden', !open); m.inert = !open;
    behind.forEach(el => open ? el.setAttribute('inert', '') : el.removeAttribute('inert'));
    document.body.classList.toggle('menu-open', open);
    if (open) setTimeout(() => (m.querySelector('a') || b).focus({preventScroll:true}), 60);
    else if (opener) opener.focus({preventScroll:true});
  };
  b.addEventListener('click', () => set(!m.classList.contains('open')));
  if (f) f.addEventListener('click', () => set(!m.classList.contains('open')));
  m.addEventListener('click', e => {
    if (e.target.closest('a')) set(false);                     // link tap
    else if (!e.target.closest('.mm-social')) set(false);      // tap outside the links
  });
  addEventListener('keydown', e => {
    if (!m.classList.contains('open')) return;
    if (e.key === 'Escape'){ set(false); return; }
    if (e.key !== 'Tab') return;
    const list = [...focusables(), ...toggles()];
    const first = list[0], last = list[list.length - 1], cur = document.activeElement;
    if (e.shiftKey && cur === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && cur === last){ e.preventDefault(); first.focus(); }
    else if (!list.includes(cur)){ e.preventDefault(); first.focus(); }
  });
  /* leaving the phone layout closes the menu */
  matchMedia('(min-width:901px)').addEventListener('change', e => { if (e.matches) set(false); });
})();

/* ---------- back to top + copy email + toast ---------- */
(() => {
  $('#toTop').addEventListener('click', () => smooth.to(0, 800));
  const toast = $('#toast'); let tt;
  const say = msg => { toast.textContent = msg; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 2200); };
  $('#copyMail').addEventListener('click', async () => {
    let ok = false;
    try { await navigator.clipboard.writeText(CONFIG.email); ok = true; } catch (e) {
      try {
        const r = document.createRange(); r.selectNodeContents($('.c-mail'));
        const s = getSelection(); s.removeAllRanges(); s.addRange(r); ok = document.execCommand('copy'); s.removeAllRanges();
      } catch (e2) {}
    }
    say(ok ? 'Email address copied' : 'Could not copy. Select it and copy manually.');
  });
})();

/* ---------- count-up stats (after the intro) ---------- */
(() => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const to = +e.target.dataset.to, t0 = performance.now(), dur = 1400;
    if (prefersReduced){ e.target.textContent = to; return; }
    (function step(t){
      const p = Math.min(1,(t-t0)/dur), ease = 1-Math.pow(1-p,3);
      e.target.textContent = Math.round(to*ease);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }), {threshold:.5});
  whenIntro(() => $$('.count').forEach(el => io.observe(el)));
})();

/* ---------- text scramble (nav hover + headings on reveal) ---------- */
const scramble = (el) => {
  if (prefersReduced || el._scr) return;
  el._scr = true;
  const orig = el.dataset.orig || (el.dataset.orig = el.textContent);
  const chars = '!<>-_\\/[]{}=+*^?#';
  let f = 0;
  const total = orig.length * 2;
  (function tick(){
    el.textContent = [...orig].map((c,i) =>
      c === ' ' ? ' ' : (i < f/2 ? c : chars[Math.random()*chars.length|0])).join('');
    if (f++ < total) requestAnimationFrame(tick); else { el.textContent = orig; el._scr = false; }
  })();
};
$$('#topLinks a').forEach(a => a.addEventListener('mouseenter', () => scramble(a)));
(() => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ scramble(e.target); io.unobserve(e.target); }
  }), {threshold:.6});
  $$('[data-scramble-once]').forEach(h => io.observe(h));
})();

/* ---------- parallax (about portrait; skipped on small screens and for reduced motion) ---------- */
if (!prefersReduced && matchMedia('(min-width:901px)').matches){
  const els = [$('.about-art img')].filter(Boolean);
  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height/2 - innerHeight/2) * -.05;
        el.style.translate = `0 ${off.toFixed(1)}px`;
      });
      ticking = false;
    });
  }, {passive:true});
}

/* ---------- projects: cards, filters, carousel, gallery modal ---------- */
(() => {
  const track = $('#projTrack'), dotsBox = $('#projDots'), countEl = $('#projCount');
  const statusKey = s => s.toLowerCase().replace(/\s+/g, '-');
  const shotBase = (p, n) => `assets/proj-${p.id}-${n}`;
  const placeholder = p => `<div class="ph" aria-hidden="true"><b>${esc(p.short)}</b><i>${p.tags.slice(0, 4).map(esc).join(' \u00B7 ')}</i></div>`;
  const shotImg = (p, n, cls = '') => `<picture><source srcset="${shotBase(p, n)}.webp" type="image/webp"><img ${cls ? `class="${cls}"` : ''} src="${shotBase(p, n)}.jpg" alt="${esc(p.title)}, screenshot ${n}" width="1400" height="875" loading="lazy" decoding="async" onerror="this.closest('.proj-media,.g-slide').classList.add('no-shot');this.closest('picture').remove()"></picture>`;

  track.innerHTML = CONFIG.projects.map(p => `
    <article class="proj-card reveal" data-proj="${p.id}" data-cat="${p.cat}">
      <div class="proj-media${p.shots ? '' : ' no-shot'}">
        <span class="status-chip s-${statusKey(p.status)}">${esc(p.status)}</span>
        ${placeholder(p)}
        ${p.shots ? shotImg(p, 1) : ''}
        ${p.video ? `<video muted loop playsinline preload="none" data-src="assets/proj-${p.id}.webm" aria-hidden="true" tabindex="-1"></video>` : ''}
      </div>
      <div class="proj-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="tags">${p.tags.slice(0, 4).map(t => `<span>${esc(t)}</span>`).join('')}</div>
        <div class="proj-foot">${isUrl(p.link)
          ? `<a class="view" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.short)} on GitHub (opens in a new tab)">View Project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>`
          : `<span class="view soon" aria-disabled="true">Repo coming soon</span>`}
        ${isUrl(p.link) ? `<a class="proj-gh" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.short)} on GitHub" tabindex="-1">${ICONS.github}</a>` : ''}</div>
      </div>
    </article>`).join('');
  const cards = $$('.proj-card');

  /* ----- hover / in-view preview loops (only when a .webm exists, never for reduced motion or data saver) ----- */
  if (!prefersReduced && !saveData){
    cards.forEach(c => {
      const v = c.querySelector('video'); if (!v) return;
      const play = () => { if (!v.src) v.src = v.dataset.src; v.classList.add('on'); v.play().catch(() => {}); };
      const stop = () => { v.pause(); v.classList.remove('on'); };
      if (isTouch) new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? play() : stop()), {threshold:.6}).observe(c);
      else { c.addEventListener('mouseenter', play); c.addEventListener('mouseleave', stop); }
      v.addEventListener('error', () => v.remove());
    });
  }

  /* ----- filters with a live result count ----- */
  const setCount = n => { countEl.textContent = `Showing ${n} of ${cards.length} projects`; };
  setCount(cards.length);
  $('#filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter'); if (!btn) return;
    $$('.filter').forEach(f => { f.classList.toggle('active', f===btn); f.setAttribute('aria-selected', f===btn); });
    const cat = btn.dataset.filter; let n = 0;
    cards.forEach(c => {
      const on = cat === 'all' || c.dataset.cat === cat;
      if (on) n++;
      if (on){ c.style.display=''; requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.remove('filter-hide'))); }
      else { c.classList.add('filter-hide'); setTimeout(() => { if (c.classList.contains('filter-hide')) c.style.display='none'; }, 320); }
    });
    setCount(n);
    track.scrollTo({left:0, behavior: prefersReduced ? 'auto' : 'smooth'});
    setTimeout(layoutCarousel, 380);
  });

  /* ----- carousel (phones): arrows + dots follow scrollLeft ----- */
  const navs = $$('.proj-nav');
  const visible = () => cards.filter(c => c.style.display !== 'none');
  const step = () => { const v = visible(); return v.length > 1 ? v[1].offsetLeft - v[0].offsetLeft : (v[0] ? v[0].offsetWidth : 1); };
  const per = () => matchMedia('(min-width:901px)').matches ? 3 : 1;
  const page = () => step() * per();
  const lab = navs[1].querySelector('.nav-lab');
  function pageState(){
    const pages = Math.max(1, Math.ceil(visible().length / per()));
    const idx = Math.max(0, Math.min(pages - 1, Math.round(track.scrollLeft / page())));
    const last = idx >= pages - 1;
    navs[0].style.visibility = idx === 0 ? 'hidden' : '';
    navs[1].classList.toggle('at-end', last);
    if (lab) lab.textContent = last ? 'Back to start' : 'Explore more';
    navs[1].setAttribute('aria-label', last ? 'Back to first projects' : 'Explore more projects');
    const ds = dotsBox.querySelectorAll('i'); ds.forEach((d, i) => d.classList.toggle('on', i === idx));
  }
  function layoutCarousel(){
    track.querySelectorAll('.proj-pad').forEach(x => x.remove());
    const n0 = visible().length;
    if (per() === 3 && n0 > 3) for (let k = (3 - n0 % 3) % 3; k > 0; k--) track.insertAdjacentHTML('beforeend', '<i class="proj-pad" aria-hidden="true"></i>');
    const over = per() === 3 ? n0 > 3 : track.scrollWidth > track.clientWidth + 4;
    navs.forEach(b => b.style.display = over ? '' : 'none');
    const n = per() === 1 ? visible().length : Math.ceil(visible().length / per());
    dotsBox.innerHTML = over ? Array.from({length: n}, () => '<i></i>').join('') : '';
    pageState();
  }
  layoutCarousel(); addEventListener('resize', layoutCarousel);
  navs[0].addEventListener('click', () => track.scrollBy({left: -page(), behavior:'smooth'}));
  navs[1].addEventListener('click', () => {
    if (navs[1].classList.contains('at-end')) track.scrollTo({left:0, behavior:'smooth'});
    else track.scrollBy({left: page(), behavior:'smooth'});
  });
  let dt = false;
  track.addEventListener('scroll', () => {
    if (dt) return; dt = true;
    requestAnimationFrame(() => { dt = false; pageState(); });
  }, {passive:true});

  /* ----- gallery modal ----- */
  const modal = $('#projModal'), gMain = $('#gMain'), gThumbs = $('#gThumbs'), gPrev = $('#gPrev'), gNext = $('#gNext');
  let opener = null, cur = null, slide = 0, slides = 0;
  const showSlide = i => {
    slide = (i + slides) % slides;
    [...gMain.children].forEach((s, k) => { s.hidden = k !== slide; });
    [...gThumbs.children].forEach((t, k) => { t.classList.toggle('on', k === slide); t.setAttribute('aria-current', k === slide); });
  };
  const fill = p => {
    cur = p;
    slides = Math.max(1, p.shots || 0);
    gMain.innerHTML = p.shots
      ? Array.from({length: p.shots}, (_, k) => `<div class="g-slide"${k ? ' hidden' : ''}>${placeholder(p)}${shotImg(p, k + 1, 'g-img')}</div>`).join('')
      : `<div class="g-slide no-shot">${placeholder(p)}</div>`;
    gThumbs.innerHTML = p.shots > 1
      ? Array.from({length: p.shots}, (_, k) => `<button type="button" aria-label="Show image ${k + 1} of ${p.shots}"><picture><source srcset="${shotBase(p, k + 1)}.webp" type="image/webp"><img src="${shotBase(p, k + 1)}.jpg" alt="" width="96" height="60" loading="lazy" onerror="this.closest('button').remove()"></picture></button>`).join('')
      : '';
    [...gThumbs.children].forEach((t, k) => t.addEventListener('click', () => showSlide(k)));
    gPrev.hidden = gNext.hidden = p.shots < 2;
    showSlide(0);
    $('#mTitle').textContent = p.title;
    const st = $('#mStatus'); st.textContent = p.status; st.className = `status-chip s-${statusKey(p.status)}`;
    $('#mDesc').textContent = p.desc;
    const fillBlock = (id, v) => { const el = $(id); el.textContent = show(v); el.closest('.m-block').hidden = !show(v); el.closest('.m-block').classList.toggle('todo', !isReal(v)); };
    fillBlock('#mProblem', p.problem); fillBlock('#mRole', p.role); fillBlock('#mResult', p.result); fillBlock('#mLearned', p.learned);
    $('#mTags').innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join('');
    const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>';
    const btn = (label, url, cls) => isUrl(url)
      ? `<a class="btn ${cls} sm" href="${url}" target="_blank" rel="noopener">${label} ${arrow}</a>`
      : (REVIEW && url ? `<span class="btn ghost sm todo-btn" aria-disabled="true">${esc(url)}</span>` : '');
    $('#mActions').innerHTML = btn('Play now', p.play, 'primary') + btn('Live demo', p.live, 'primary') + btn('Source', p.link, 'ghost');
  };
  const open = (id, card) => {
    fill(CONFIG.projects.find(p => p.id === id));
    opener = card;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); modal.inert = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-card').scrollTop = 0;
    $('#modalX').focus();
  };
  const close = () => {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modal.inert = true;
    document.body.style.overflow = '';
    opener?.focus();
  };
  $('#modalX').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  gPrev.addEventListener('click', () => showSlide(slide - 1));
  gNext.addEventListener('click', () => showSlide(slide + 1));
  /* swipe */
  let sx = null;
  gMain.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive:true});
  gMain.addEventListener('touchend', e => {
    if (sx === null || slides < 2) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) showSlide(slide + (dx < 0 ? 1 : -1));
  }, {passive:true});
  addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight' && slides > 1){ e.preventDefault(); showSlide(slide + 1); }
    if (e.key === 'ArrowLeft' && slides > 1){ e.preventDefault(); showSlide(slide - 1); }
    if (e.key === 'Tab'){
      const f = [...modal.querySelectorAll('button,a[href]')].filter(el => el.offsetParent && !el.hidden);
      if (!f.length) return;
      const first = f[0], last = f[f.length-1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
})();

/* ---------- reveals: fade + rise 24px, 600 ms, short stagger, once ---------- */
(() => {
  const els = $$('.reveal');
  els.forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    const i = Math.min(sibs.indexOf(el), 7);
    el.style.setProperty('--rd', (i * (el.closest('#home') ? 110 : 70)) + 'ms');
  });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in'); io.unobserve(el);
    setTimeout(() => el.style.removeProperty('--rd'), 1400);   // stagger delay must not slow later hover transitions
  }), {threshold:.08, rootMargin:'0px 0px -4% 0px'});
  els.forEach(el => el.closest('#home') ? whenIntro(() => io.observe(el)) : io.observe(el));
})();

/* ---------- skills: purely visual hover glow (nothing is clickable) ---------- */
if (!isTouch) $$('.skill').forEach(s => s.addEventListener('mousemove', e => {
  const r = s.getBoundingClientRect();
  s.style.setProperty('--mx', (e.clientX-r.left)+'px');
  s.style.setProperty('--my', (e.clientY-r.top)+'px');
}));

/* ---------- contact form (endpoint or mailto fallback) ---------- */
$('#cform').addEventListener('submit', async e => {
  e.preventDefault();
  const n = $('#fName').value.trim(), em = $('#fEmail').value.trim(), m = $('#fMsg').value.trim();
  const status = $('#formStatus'), btn = $('#sendBtn');
  status.className = 'form-status';
  if ($('#fCompany').value.trim()){ status.textContent = 'Message sent'; status.classList.add('ok'); e.target.reset(); return; } // honeypot: bots fill this, humans never see it
  if (!n || !em || !m){ status.textContent = 'Please fill in all three fields.'; status.classList.add('err'); return; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){ status.textContent = 'That email address does not look right.'; status.classList.add('err'); return; }
  if (!CONFIG.formEndpoint){
    const body = encodeURIComponent(`Hi Nishan,\n\n${m}\n\n- ${n} (${em})`);
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Portfolio Contact from '+n)}&body=${body}`;
    status.textContent = 'Opening your email app...'; status.classList.add('ok');
    return;
  }
  btn.classList.add('loading'); status.textContent = 'Sending...';
  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify({ name:n, email:em, message:m })
    });
    if (!res.ok) throw 0;
    status.textContent = "Message sent - thanks! I'll get back to you soon.";
    status.classList.add('ok');
    if (!prefersReduced){ status.classList.remove('pop'); void status.offsetWidth; status.classList.add('pop'); }
    e.target.reset();
  } catch { status.textContent = 'Could not send right now. Please email me directly at ' + CONFIG.email; status.classList.add('err'); }
  btn.classList.remove('loading');
});

/* ---------- footer shooting star ---------- */
(() => {
  if (prefersReduced) return;
  const s = $('#shooting'), footer = $('footer');
  (function fire(){
    const fr = footer.getBoundingClientRect();
    if (fr.top < innerHeight && fr.bottom > 0){
      s.style.left = (30 + Math.random()*55) + '%';
      s.style.top = (8 + Math.random()*26) + '%';
      s.classList.remove('go'); void s.offsetWidth; s.classList.add('go');
    }
    setTimeout(fire, 14000 + Math.random()*14000);
  })();
})();

/* ---------- Ctrl+K palette ---------- */
(() => {
  const pal = $('#palette'), input = $('#paletteInput'), list = $('#paletteList');
  const secs = [['Home','#home'],['About','#about'],['Projects','#projects'],['Skills','#skills'],['Contact','#contact']];
  let sel = 0;
  const render = q => {
    const items = secs.filter(([n]) => n.toLowerCase().includes(q.toLowerCase()));
    list.innerHTML = items.map(([n,h],i) => `<a href="${h}" class="${i===sel?'sel':''}">${n}</a>`).join('');
    return items;
  };
  let items = render('');
  const openPal = () => { pal.classList.add('open'); pal.setAttribute('aria-hidden','false'); pal.inert = false; input.value=''; sel=0; items=render(''); input.focus(); };
  const closePal = () => { pal.classList.remove('open'); pal.setAttribute('aria-hidden','true'); pal.inert = true; };
  addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); pal.classList.contains('open') ? closePal() : openPal(); }
    if (e.key === 'Escape') closePal();
  });
  input.addEventListener('input', () => { sel = 0; items = render(input.value); });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown'){ e.preventDefault(); sel = Math.min(items.length-1, sel+1); items = render(input.value); }
    if (e.key === 'ArrowUp'){ e.preventDefault(); sel = Math.max(0, sel-1); items = render(input.value); }
    if (e.key === 'Enter' && items[sel]){ smooth.toHash(items[sel][1]); closePal(); }
  });
  list.addEventListener('click', e => { if (e.target.closest('a')) closePal(); });
  pal.addEventListener('click', e => { if (e.target === pal) closePal(); });
})();

/* ---------- konami easter egg (fragger red) ---------- */
(() => {
  const seq = ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'];
  let i = 0;
  addEventListener('keydown', e => {
    i = e.key.toLowerCase() === seq[i] ? i+1 : (e.key.toLowerCase() === seq[0] ? 1 : 0);
    if (i === seq.length){ document.documentElement.classList.toggle('fragger'); i = 0; }
  });
})();

/* ---------- globe stage (contact art) ---------- */
(() => {
  const cv = $('.globe-canvas'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const N = 460, pts = [];
  for (let i = 0; i < N; i++){
    const t = Math.acos(1 - 2*(i+.5)/N), p = Math.PI*(1+Math.sqrt(5))*i;
    pts.push([Math.sin(t)*Math.cos(p), Math.sin(t)*Math.sin(p), Math.cos(t)]);
  }
  let Wc, Hc, R;
  function size(){ const r = cv.getBoundingClientRect(); if (!r.width) return;
    const d = Math.min(devicePixelRatio||1, 2);
    cv.width = r.width*d; cv.height = r.height*d; Wc = cv.width; Hc = cv.height; R = Math.min(Wc,Hc)*0.30; }
  size(); addEventListener('resize', size);
  let a = 0.6;
  function frame(){
    if (!Wc){ size(); if (!Wc) { if (!prefersReduced) requestAnimationFrame(frame); return; } }
    ctx.clearRect(0,0,Wc,Hc);
    const cx = Wc/2, cy = Hc*0.46;
    const g = ctx.createRadialGradient(cx,cy,R*.25,cx,cy,R*1.55);
    g.addColorStop(0,'rgba(139,92,246,.22)'); g.addColorStop(1,'rgba(139,92,246,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,Wc,Hc);
    const tilt = 0.32, ct = Math.cos(tilt), st = Math.sin(tilt), ca = Math.cos(a), sa = Math.sin(a);
    ctx.lineWidth = Math.max(1, Wc/900);
    for (const [rx, ry, rot, al] of [[R*1.34, R*.44, -.26, .34],[R*1.5, R*.52, .16, .2]]){
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot);
      ctx.strokeStyle = `rgba(167,139,250,${al})`;
      ctx.beginPath(); ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2); ctx.stroke(); ctx.restore();
    }
    const d = Math.min(devicePixelRatio||1, 2);
    for (const p of pts){
      const x = p[0]*ca + p[2]*sa, z1 = -p[0]*sa + p[2]*ca;
      const y = p[1]*ct - z1*st, z = p[1]*st + z1*ct;
      const s = (z+1.6)/2.6;
      ctx.fillStyle = `rgba(167,139,250,${(.1 + s*.8).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(cx + x*R, cy + y*R, (0.7 + s*1.6)*d, 0, Math.PI*2); ctx.fill();
    }
    a += 0.0021;
    if (!prefersReduced) requestAnimationFrame(frame);
  }
  frame();
})();
