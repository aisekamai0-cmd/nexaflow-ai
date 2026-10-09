
const NEXA_CATEGORIES = {
  sales: {
    title:"Sales & Lead Generation",
    subtitle:"Turn inbound interest into qualified opportunities, meetings and follow-ups.",
    icon:"💼",
    agents:[
      {id:"research",name:"Lead Research Agent",role:"Prospect discovery",desc:"Finds and structures prospect context from demo inputs."},
      {id:"qualify",name:"Qualification Agent",role:"Lead scoring",desc:"Scores intent, fit, urgency and buying signals."},
      {id:"conversation",name:"Sales Conversation Agent",role:"Buyer engagement",desc:"Handles objections and recommends the next best action."},
      {id:"meeting",name:"Meeting Booker",role:"Scheduling",desc:"Offers demo slots and creates a meeting handoff."},
      {id:"crm",name:"CRM Follow-up Agent",role:"Pipeline follow-up",desc:"Creates follow-up tasks and opportunity summaries."}
    ],
    workflow:["Visitor","Lead Research","Qualification","Sales Conversation","Meeting Booker","CRM Follow-up"],
    metrics:[["Qualified leads","18"],["Meetings","7"],["Hot opportunities","4"],["Follow-ups","11"]],
    starters:["We need automation for our clinic","I'm comparing AI vendors","Can I see pricing?","Book me a demo"],
    responses:[
      ["clinic","This looks like a healthcare automation opportunity. I’ll capture company size, current workflow and urgency before qualification."],
      ["pricing","I can explain package ranges, but first I’ll qualify scope so the recommendation fits the team and channels."],
      ["demo","Great — I’ll pass this to the Meeting Booker with the context already captured."],
      ["default","I can help qualify the opportunity, handle common objections, and move the prospect toward a meeting."]
    ],
    rows:[
      ["Acme Dental","Healthcare automation","Hot","Demo booked"],
      ["Northstar Retail","Customer support","Warm","Follow-up due"],
      ["Vertex HR","Recruitment automation","Hot","Proposal requested"],
      ["Bluebird Labs","Marketing automation","New","Qualifying"]
    ]
  },
  recruitment: {
    title:"Recruitment & Talent",
    subtitle:"Screen candidates, score fit, build shortlists and coordinate interviews.",
    icon:"👥",
    agents:[
      {id:"screen",name:"CV Screening Agent",role:"Resume parsing",desc:"Extracts skills, experience and role evidence from candidate profiles."},
      {id:"score",name:"Candidate Scoring Agent",role:"Fit scoring",desc:"Scores job-relevant criteria with explainable reasons."},
      {id:"shortlist",name:"Shortlisting Agent",role:"Human review prep",desc:"Builds a ranked shortlist without making the final hiring decision."},
      {id:"interview",name:"Interview Scheduler",role:"Coordination",desc:"Offers demo interview slots and prepares calendar handoff."},
      {id:"recruiter",name:"Recruiter Assistant",role:"Operations",desc:"Summarizes pipeline, prepares interview questions and follow-ups."}
    ],
    workflow:["Job opening","CV Screening","Candidate Scoring","Shortlisting","Interview Scheduler","Recruiter Assistant"],
    metrics:[["Applicants","126"],["Screened","91"],["Shortlisted","14"],["Interviews","8"]],
    starters:["Screen this senior developer CV","Show top candidates","Why was this candidate scored 82?","Schedule interviews"],
    responses:[
      ["score","The score is based on role-relevant evidence only: required skills, years of experience, project depth and location/availability. Final hiring remains with the recruiter."],
      ["top","I’ll rank candidates by the published criteria and show the evidence behind each score."],
      ["schedule","I can prepare interview slots and invitation drafts. In this demo, no calendar invitation is actually sent."],
      ["default","I can screen resumes, explain fit scores, build a shortlist and prepare recruiter next steps."]
    ],
    rows:[
      ["Ayesha Khan","Senior Developer","92","Shortlisted"],
      ["Bilal Ahmed","Senior Developer","86","Interview"],
      ["Sara Malik","Senior Developer","82","Review"],
      ["Omar Farooq","Senior Developer","74","Hold"]
    ]
  },
  support: {
    title:"Customer Support",
    subtitle:"Resolve routine requests quickly and route sensitive issues to humans with context.",
    icon:"🎧",
    agents:[
      {id:"support",name:"Support Agent",role:"Customer conversation",desc:"Handles common service questions across a guided support flow."},
      {id:"intent",name:"Intent Detection Agent",role:"Routing",desc:"Classifies request type, urgency and required system action."},
      {id:"knowledge",name:"Knowledge Agent",role:"Policy & FAQ retrieval",desc:"Surfaces the right policy or help content for the issue."},
      {id:"resolution",name:"Resolution Agent",role:"Action planning",desc:"Builds the next step for order, billing or account issues."},
      {id:"escalation",name:"Human Escalation Agent",role:"Handoff",desc:"Routes complex or sensitive cases to staff with a concise summary."}
    ],
    workflow:["Customer","Support Agent","Intent Detection","Knowledge","Resolution","Human Escalation"],
    metrics:[["Open tickets","23"],["Resolved today","47"],["Escalations","6"],["Avg reply","18 sec"]],
    starters:["Where is my order?","I need a refund","My account is locked","I want to complain"],
    responses:[
      ["refund","Intent detected: Refund request. I’ll check eligibility rules, gather the order context and escalate any approval-required refund to a human."],
      ["locked","Intent detected: Account access. I’ll guide safe recovery steps and avoid requesting passwords or sensitive credentials."],
      ["complain","I’ll capture the complaint, urgency and desired outcome, then route it to the appropriate human owner with full context."],
      ["default","I can identify the issue, retrieve the right policy, propose a resolution and escalate when human approval is required."]
    ],
    rows:[
      ["#SUP-2041","Refund request","Medium","Awaiting approval"],
      ["#SUP-2040","Account locked","High","Escalated"],
      ["#SUP-2039","Delivery status","Low","Resolved"],
      ["#SUP-2038","Billing query","Medium","In progress"]
    ]
  },
  marketing: {
    title:"Marketing & SEO",
    subtitle:"Research demand, find content gaps, plan campaigns and optimize content.",
    icon:"📈",
    agents:[
      {id:"keyword",name:"Keyword Research Agent",role:"Demand discovery",desc:"Builds a demo keyword set by intent and funnel stage."},
      {id:"competitor",name:"Competitor Analysis Agent",role:"Gap analysis",desc:"Identifies positioning and content opportunities from sample data."},
      {id:"content",name:"Content Strategy Agent",role:"Planning",desc:"Turns keyword clusters into campaign and article briefs."},
      {id:"seo",name:"SEO Optimizer",role:"On-page optimization",desc:"Reviews titles, headings, intent match and content coverage."},
      {id:"planner",name:"Content Planner",role:"Publishing calendar",desc:"Builds a prioritized content calendar and next-action queue."}
    ],
    workflow:["Business topic","Keyword Research","Competitor Analysis","Content Strategy","SEO Optimizer","Content Planner"],
    metrics:[["Keywords","84"],["High intent","19"],["Content gaps","12"],["Planned pieces","16"]],
    starters:["Dental clinic Karachi","AI recruitment software","Audit this page title","Build a 30-day content plan"],
    responses:[
      ["dental","I’ll cluster this topic by local, service and commercial intent, then identify the highest-value content gaps for a Karachi dental clinic."],
      ["audit","I’ll review search intent alignment, title clarity, heading coverage and missing supporting topics in this demo."],
      ["30-day","I’ll prioritize content by intent, business value and production effort, then build a 30-day publishing queue."],
      ["default","I can research keyword themes, compare positioning, create briefs, optimize on-page SEO and build a content calendar."]
    ],
    rows:[
      ["dental implants karachi","Commercial","High","Landing page"],
      ["teeth whitening karachi","Commercial","High","Service page"],
      ["best dentist karachi","Local","High","Comparison guide"],
      ["dental cleaning cost","Informational","Medium","Article"]
    ]
  }
};

function q(sel,root=document){return root.querySelector(sel)}
function qa(sel,root=document){return [...root.querySelectorAll(sel)]}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function categoryKey(){return document.body.dataset.category || "sales"}
function cfg(){return NEXA_CATEGORIES[categoryKey()]}

function nav(){
  return \`<div class="topbar"><div class="shell nav">
    <a class="logo" href="platform.html">Nexa<span>Flow</span> AI</a>
    <div class="navlinks">
      <a href="agent.html">Healthcare</a><a href="sales.html">Sales</a><a href="recruitment.html">Recruitment</a><a href="support.html">Support</a><a href="marketing.html">Marketing & SEO</a>
    </div>
    <a class="btn secondary" href="#studio">Try demo</a>
  </div></div>\`;
}
function footer(){return '<div class="footer">NexaFlow AI · Multi-category automation platform · Demo environment</div>'}

function renderCategory(){
  const c=cfg();
  q("#app").innerHTML = nav()+\`
  <main>
    <section class="hero"><div class="shell">
      <div class="eyebrow">\${c.icon} NexaFlow Solution Suite</div>
      <h1>\${c.title}</h1><p class="lead">\${c.subtitle}</p>
      <div class="actions"><a class="btn primary" href="#studio">Run interactive demo</a><a class="btn secondary" href="platform.html">All solutions</a></div>
      <div class="stats">\${c.metrics.map(x=>\`<div class="stat"><b>\${x[1]}</b><span>\${x[0]}</span></div>\`).join("")}</div>
    </div></section>

    <section class="section alt"><div class="shell"><div class="eyebrow">Workflow</div><h2>5 specialist agents, one connected process.</h2>
      <div class="workflow">\${c.workflow.map((x,i)=>\`<span class="node">\${esc(x)}</span>\${i<c.workflow.length-1?'<span class="arrow">→</span>':''}\`).join("")}</div>
      <div class="grid5">\${c.agents.map((a,i)=>\`<article class="card"><div class="icon">\${i+1}</div><h3>\${a.name}</h3><div class="small">\${a.role}</div><p class="small">\${a.desc}</p><span class="tag">Interactive demo</span></article>\`).join("")}</div>
    </div></section>

    <section class="section" id="studio"><div class="shell">
      <div class="eyebrow">Agent Studio</div><h2>Try the workflow.</h2>
      <p class="demo-note">Demo mode: seeded/sample data only. No external calendar, CRM, ATS, helpdesk, email or messaging action is performed.</p>
      <div class="studio" style="margin-top:16px">
        <aside class="agent-menu" id="agentMenu"></aside>
        <div class="panel">
          <div id="agentHead"></div>
          <div id="agentDemo"></div>
        </div>
      </div>
    </div></section>

    <section class="section alt"><div class="shell"><div class="eyebrow">Operations view</div><h2>What staff see.</h2>
      <div class="tablewrap"><table><thead><tr><th>Record</th><th>Context</th><th>Priority / Score</th><th>Status</th></tr></thead><tbody>
        \${c.rows.map(r=>\`<tr>\${r.map((v,i)=>\`<td>\${i===3?'<span class="badge">'+esc(v)+'</span>':esc(v)}</td>\`).join("")}</tr>\`).join("")}
      </tbody></table></div>
    </div></section>
  </main>\`+footer();
  setupStudio();
}
function setupStudio(){
  const c=cfg(),menu=q("#agentMenu");
  c.agents.forEach((a,i)=>{
    const b=document.createElement("button");b.innerHTML=\`<strong>\${esc(a.name)}</strong><br><span class="small">\${esc(a.role)}</span>\`;
    b.onclick=()=>selectAgent(i); menu.appendChild(b);
  });
  selectAgent(0);
}
function selectAgent(i){
  const c=cfg(),a=c.agents[i];qa("#agentMenu button").forEach((b,j)=>b.classList.toggle("active",j===i));
  q("#agentHead").innerHTML=\`<div class="eyebrow">Agent \${i+1} of 5</div><h2 style="font-size:28px;margin-top:6px">\${esc(a.name)}</h2><p class="small">\${esc(a.desc)}</p>\`;
  if(i===0) renderConversation();
  else if(i===1) renderAnalysis(i);
  else if(i===2) renderDecision(i);
  else if(i===3) renderAction(i);
  else renderOps(i);
}
function renderConversation(){
  const c=cfg();
  q("#agentDemo").innerHTML=\`<div class="chat" id="chat"><div class="bubble">Hi — I’m the \${esc(c.agents[0].name)}. Try a sample request below.</div></div>
  <div class="row">\${c.starters.map(s=>\`<button class="btn secondary starter" data-v="\${esc(s)}">\${esc(s)}</button>\`).join("")}</div>
  <div class="row" style="margin-top:12px"><input class="input" id="freeInput" placeholder="Type a demo request..."><button class="btn primary" id="sendBtn">Send</button></div>\`;
  qa(".starter").forEach(b=>b.onclick=()=>sendDemo(b.dataset.v));
  q("#sendBtn").onclick=()=>sendDemo(q("#freeInput").value);
}
function responseFor(v){
  const t=v.toLowerCase(),c=cfg();for(const [k,r] of c.responses){if(k!=="default"&&t.includes(k))return r}return c.responses.find(x=>x[0]==="default")[1]
}
function sendDemo(v){
  if(!v.trim())return;const chat=q("#chat");chat.innerHTML+=\`<div class="bubble user">\${esc(v)}</div><div class="bubble">\${esc(responseFor(v))}</div>\`;q("#freeInput").value="";chat.scrollTop=chat.scrollHeight
}
function renderAnalysis(i){
  const c=cfg();q("#agentDemo").innerHTML=\`<div class="grid2" style="margin-top:14px">
    <div class="card"><h3>Input captured</h3><p class="small">Sample workflow context from the previous agent.</p><div class="tag">intent</div><div class="tag">fit</div><div class="tag">urgency</div><div class="tag">next action</div></div>
    <div class="card"><h3>Agent output</h3><p><strong>\${categoryKey()==="recruitment"?"Fit score: 86/100":"Confidence: 91%"}</strong></p><div class="progress"><span style="width:86%"></span></div><p class="small">Explainable demo output. A human remains responsible for consequential decisions.</p></div>
  </div><button class="btn primary" style="margin-top:14px" onclick="selectAgent(\${Math.min(i+1,4)})">Pass to next agent →</button>\`;
}
function renderDecision(i){
  const c=cfg();q("#agentDemo").innerHTML=\`<div class="card" style="margin-top:14px"><h3>Recommended next action</h3><p class="lead" style="font-size:16px">\${esc(c.agents[i].desc)}</p>
  <div class="row"><span class="tag">Context preserved</span><span class="tag">Human-review ready</span><span class="tag">Structured output</span></div></div>
  <button class="btn primary" style="margin-top:14px" onclick="selectAgent(\${Math.min(i+1,4)})">Continue workflow →</button>\`;
}
function renderAction(i){
  const labels={sales:["Tue 11:00","Wed 14:30","Thu 10:00"],recruitment:["Mon 10:30","Tue 15:00","Thu 12:00"],support:["Resolve now","Escalate","Request info"],marketing:["Create brief","Optimize page","Add to calendar"]};
  q("#agentDemo").innerHTML=\`<div class="card" style="margin-top:14px"><h3>Choose demo action</h3><p class="small">This simulates the action layer; nothing external is sent.</p>
  <div class="row">\${labels[categoryKey()].map(x=>\`<button class="btn secondary actionChoice">\${esc(x)}</button>\`).join("")}</div><div id="actionResult"></div></div>\`;
  qa(".actionChoice").forEach(b=>b.onclick=()=>q("#actionResult").innerHTML=\`<div class="demo-note" style="margin-top:14px">✓ Demo action prepared: <strong>\${esc(b.textContent)}</strong>. Ready for a real integration later.</div>\`);
}
function renderOps(){
  const c=cfg();q("#agentDemo").innerHTML=\`<div class="kpis">\${c.metrics.map(x=>\`<div class="kpi"><b>\${x[1]}</b><span>\${x[0]}</span></div>\`).join("")}</div>
  <div class="card"><h3>Operations assistant</h3><p class="small">Ask what needs attention today.</p>
  <div class="row"><button class="btn secondary opsQ">What needs attention?</button><button class="btn secondary opsQ">Summarize pipeline</button></div><div id="opsAns"></div></div>\`;
  qa(".opsQ").forEach(b=>b.onclick=()=>q("#opsAns").innerHTML=\`<div class="demo-note" style="margin-top:12px">Priority summary: review high-priority records first, then clear pending follow-ups. Demo data only.</div>\`);
}

function renderPlatform(){
  const cats=Object.entries(NEXA_CATEGORIES);
  q("#app").innerHTML=nav()+\`
  <main><section class="hero"><div class="shell"><div class="eyebrow">NexaFlow AI Platform</div>
  <h1>AI agents for complete business workflows.</h1><p class="lead">Five solution categories. Twenty-five specialist agents. One platform architecture — from customer interaction to structured data and staff operations.</p>
  <div class="actions"><a class="btn primary" href="#solutions">Explore solutions</a><a class="btn secondary" href="agent.html">Open working dental agent</a></div>
  <div class="stats"><div class="stat"><b>5</b><span>solution categories</span></div><div class="stat"><b>25</b><span>specialist agents</span></div><div class="stat"><b>1</b><span>shared platform</span></div><div class="stat"><b>24/7</b><span>automation vision</span></div></div>
  </div></section>
  <section id="solutions" class="section alt"><div class="shell"><div class="eyebrow">Solutions</div><h2>Choose a workflow.</h2>
  <div class="grid5">
    <article class="card"><div class="icon">🦷</div><h3>Healthcare & Dental</h3><p class="small">Your existing working dental agent, booking flow and lead dashboard.</p><div class="actions"><a class="btn secondary" href="agent.html">Open agent</a><a class="btn secondary" href="leads.html">Dashboard</a></div></article>
    \${cats.map(([k,c])=>\`<article class="card"><div class="icon">\${c.icon}</div><h3>\${c.title}</h3><p class="small">\${c.subtitle}</p><p>\${c.agents.slice(0,3).map(a=>'<span class="tag">'+esc(a.name)+'</span>').join("")}</p><a class="btn primary" href="\${k}.html">Open suite</a></article>\`).join("")}
  </div></div></section>
  <section class="section"><div class="shell"><div class="eyebrow">Architecture</div><h2>Same pattern. Different business domain.</h2>
  <div class="workflow"><span class="node">User / customer</span><span class="arrow">→</span><span class="node">Specialist agents</span><span class="arrow">→</span><span class="node">Structured workflow</span><span class="arrow">→</span><span class="node">Database / integrations</span><span class="arrow">→</span><span class="node">Staff dashboard</span></div>
  <p class="lead">The four new suites are production-ready demos. Real CRM, ATS, helpdesk, calendar, email and SEO-data connections are deliberately not faked; those are connected in the setup phase.</p></div></section>
  </main>\`+footer();
}

document.addEventListener("DOMContentLoaded",()=>{if(document.body.dataset.page==="platform")renderPlatform();else renderCategory()});
