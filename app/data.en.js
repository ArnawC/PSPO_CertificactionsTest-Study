// PSPO I content bank — based on the 2020 Scrum Guide (official English version)
// All questions are grounded in the Guide text (November 2020). There is no "Sprint 0",
// "self-organizing" (2017 term) is not used, and the Guide says "ordering" rather than "prioritizing".

const TOPICS_EN = [
  {
    "id": "empirisme",
    "name": "Empiricism and Lean Thinking",
    "theory": "<h3>Foundation: empiricism and Lean thinking</h3><p>Scrum is founded on <b>empiricism</b>: knowledge comes from experience, and decisions are made based on what is observed rather than on detailed predictions made in advance. It is complemented by <b>Lean thinking</b>, which reduces waste and focuses on the essentials in order to maximize the value produced.</p><h3>The three pillars of empiricism</h3><ul><li><b>Transparency</b>: the process and the work must be visible both to those doing the work and to those receiving it.</li><li><b>Inspection</b>: Scrum artifacts and progress toward agreed goals must be inspected frequently and diligently to detect undesirable variances or problems.</li><li><b>Adaptation</b>: when a process drifts outside acceptable limits or the resulting product is unacceptable, it must be adjusted as soon as possible to minimize further deviation.</li></ul><p>The three pillars reinforce each other in a chain: without transparency, inspection is misleading and wasteful; without diligent inspection, adaptation has no real basis; and inspection without subsequent adaptation is considered pointless.</p><div class='pillars-diagram' style='margin:18px 0; text-align:center;'><svg viewBox='0 0 360 220' width='100%' style='max-width:360px; height:auto;' xmlns='http://www.w3.org/2000/svg'><defs><marker id='pillarArrowEn' markerWidth='7' markerHeight='7' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' style='fill:var(--amber-dark)'/></marker></defs><path d='M 195,55 Q 270,70 288,150' fill='none' style='stroke:var(--amber-dark); stroke-width:2' marker-end='url(#pillarArrowEn)'/><path d='M 288,178 Q 180,215 75,178' fill='none' style='stroke:var(--amber-dark); stroke-width:2' marker-end='url(#pillarArrowEn)'/><path d='M 72,150 Q 95,70 165,55' fill='none' style='stroke:var(--amber-dark); stroke-width:2' marker-end='url(#pillarArrowEn)'/><circle cx='180' cy='40' r='9' style='fill:var(--amber-dark)'/><circle cx='300' cy='165' r='9' style='fill:var(--amber-dark)'/><circle cx='60' cy='165' r='9' style='fill:var(--amber-dark)'/><text x='180' y='20' text-anchor='middle' style='fill:var(--ink); font-size:13px; font-family:Segoe UI,sans-serif; font-weight:600'>Transparency</text><text x='300' y='195' text-anchor='middle' style='fill:var(--ink); font-size:13px; font-family:Segoe UI,sans-serif; font-weight:600'>Inspection</text><text x='60' y='195' text-anchor='middle' style='fill:var(--ink); font-size:13px; font-family:Segoe UI,sans-serif; font-weight:600'>Adaptation</text></svg><div style='color:var(--ink-soft); font-size:12.5px; font-family:Segoe UI,sans-serif; margin-top:6px;'>The three pillars feed into each other in a cycle: each one depends on the previous to make sense.</div></div><h3>The events as the engine of inspection and adaptation</h3><p>Scrum's prescribed events (the Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective) create a regular cadence that supports frequent inspection and adaptation, and minimize the need for meetings not defined in the framework.</p><h3>The five Scrum values</h3><p><b>Commitment, Focus, Openness, Respect, and Courage.</b> The Scrum Team commits to achieving its goals and to supporting one another; focuses on the work of the Sprint and the goals of the team; is open about the work and the challenges it encounters; its members respect one another as capable, independent people; and they act with the courage to do the right thing and tackle tough problems. These values give the team direction with regard to its work, actions, and behavior, and are learned and explored while working with Scrum's events and artifacts rather than through separate training. When truly embodied, they bring the three pillars of empiricism to life and build trust.</p><h3>Common exam traps</h3><ul><li>\"Predictability\" is not a pillar: it is an outcome that empiricism helps optimize; there are only three pillars (transparency, inspection, adaptation).</li><li>Adaptation becomes harder when people are not empowered or self-managing, not because of insufficient documentation.</li><li>There is no \"Sprint 0\" in Scrum: the cadence of inspection and adaptation begins with the very first Sprint.</li><li>The values are not an isolated training module or a decorative list: they are learned by practicing Scrum day to day.</li><li>Don't confuse the five values with generic qualities like \"efficiency\" or \"quality,\" which are not part of the Guide's list.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "Which statement best describes what Scrum is, according to the Scrum Guide?",
        "opts": [
          "A defined and predictive process that conforms to the principles of Scientific Management",
          "A framework to generate value through adaptive solutions for complex problems",
          "A cookbook that defines best practices for software development",
          "A complete methodology that defines how to develop software"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: this describes a predictive, Scientific-Management style process, the opposite of what Scrum is.",
          "Correct: the Scrum Guide's own definition describes Scrum as a lightweight framework that helps people generate value through adaptive solutions for complex problems.",
          "Incorrect: Scrum is not a cookbook of prescribed best practices; it is a minimal framework of roles, events, and artifacts.",
          "Incorrect: Scrum is deliberately not a complete methodology; it leaves many practices up to the team."
        ],
        "trap": "Scrum is a framework, not a full methodology or a fixed 'cookbook' of practices — it deliberately leaves room for teams to employ their own practices within it."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about Scrum, according to the Guide, are correct?",
        "opts": [
          "Scrum is a framework for developing and sustaining complex products",
          "Scrum is a methodology where you can pick and choose which parts you think will work for your environment",
          "Each component of Scrum serves a specific purpose and is essential to Scrum's success",
          "Scrum is based on empiricism and Lean thinking"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: this matches the Guide's own description of what Scrum is for.",
          "Incorrect: the Guide explicitly warns against partial implementations; Scrum's components are designed to work together as a whole.",
          "Correct: the Guide states each part of Scrum serves a specific purpose essential to its overall success.",
          "Correct: Scrum's foundation is empiricism, complemented by Lean thinking."
        ],
        "trap": "A common misconception is treating Scrum as a menu of optional practices; the Guide is explicit that omitting core elements is not Scrum."
      },
      {
        "type": "multi",
        "q": "Which of the following are Scrum values, according to the 2020 Guide? (select all that apply)",
        "opts": [
          "Respect",
          "Inspection",
          "Collaboration",
          "Commitment",
          "Maximizing value",
          "Courage",
          "Openness",
          "Focus"
        ],
        "correct": [
          0,
          3,
          5,
          6,
          7
        ],
        "exp": [
          "Correct: Respect is one of the five Scrum values.",
          "Incorrect: Inspection is a pillar of empiricism, not one of the five Scrum values — a classic mix-up.",
          "Incorrect: 'Collaboration' does not appear in the Guide's list of five values, even though it sounds plausible.",
          "Correct: Commitment is one of the five Scrum values.",
          "Incorrect: maximizing value is the Product Owner's accountability, not one of the five Scrum values.",
          "Correct: Courage is one of the five Scrum values.",
          "Correct: Openness is one of the five Scrum values.",
          "Correct: Focus is one of the five Scrum values."
        ],
        "trap": "The exam often disguises pillars (Inspection) or accountabilities (maximizing value) as if they were values; the real five are Commitment, Focus, Openness, Respect, and Courage."
      },
      {
        "type": "multi",
        "q": "Which two of the following contribute most directly to living out the Scrum value of Focus?",
        "opts": [
          "Having a burn-down chart",
          "Having a Sprint Goal",
          "Using story points",
          "Having timeboxed events"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrect: a burn-down chart is an optional tracking tool; it doesn't by itself create focus.",
          "Correct: the Sprint Goal gives the Developers a single, coherent objective to focus on during the Sprint.",
          "Incorrect: story points are an optional estimating unit, unrelated to the value of Focus.",
          "Correct: timeboxes bound each event and the Sprint itself, keeping the team's attention on a defined scope of work."
        ],
        "trap": "Optional tracking tools (burn-down charts, story points) are often confused with the actual mechanisms — the Sprint Goal and timeboxes — that create focus."
      },
      {
        "type": "multi",
        "q": "What should a Scrum Team do during its very first Sprint, since there is no preparatory 'Sprint 0'?",
        "opts": [
          "Make up a plan for the rest of the project",
          "Create at least one valuable, useful Increment",
          "Build at least one piece of valuable functionality",
          "Analyze, describe, and document the requirements for subsequent Sprints"
        ],
        "correct": [
          1,
          2
        ],
        "exp": [
          "Incorrect: Scrum does not call for an overall project plan; the Product Backlog is the plan, and it emerges over time.",
          "Correct: even in the first Sprint, the Scrum Team must produce a valuable, useful Increment — there is no warm-up Sprint exempt from this.",
          "Correct: the first Sprint should still deliver real, working functionality, not just preparatory analysis.",
          "Incorrect: extensive upfront documentation of future Sprints' requirements is a Big-Design-Up-Front practice, not how Scrum's first Sprint works."
        ],
        "trap": "Because there is no 'Sprint 0', even the very first Sprint must produce a genuine, valuable Increment — not just planning or documentation."
      },
      {
        "type": "single",
        "q": "According to the Scrum Guide, what are the three pillars of empirical process control?",
        "opts": [
          "Transparency, Inspection, and Adaptation",
          "Transparency, Predictability, and Adaptation",
          "Planning, Inspection, and Adaptation",
          "Transparency, Inspection, and Documentation"
        ],
        "correct": 0,
        "exp": [
          "Correct: these are exactly the three pillars that uphold empirical process control in Scrum.",
          "Incorrect: predictability is something empiricism helps optimize, not one of the three pillars.",
          "Incorrect: planning does not replace transparency, and the pillars include no form of planning.",
          "Incorrect: documentation is not a pillar; heavy documentation can even undermine real transparency if it doesn't reflect the work as it actually is."
        ],
        "trap": "Predictability is an outcome empiricism helps optimize, but it is never counted among the three pillars (transparency, inspection, adaptation)."
      },
      {
        "type": "multi",
        "q": "Which of the following are Scrum values according to the 2020 Guide?",
        "opts": [
          "Focus",
          "Efficiency",
          "Openness",
          "Courage"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: Focus is one of the five Scrum values.",
          "Incorrect: efficiency is not listed as a Scrum value in the Guide; it's a common plausible-sounding distractor.",
          "Correct: Openness is one of the five Scrum values.",
          "Correct: Courage is one of the five Scrum values."
        ],
        "trap": "The five values are Commitment, Focus, Openness, Respect, and Courage. Plausible but unrelated terms like 'efficiency' or 'quality' are frequent distractors."
      },
      {
        "type": "tf",
        "q": "The Scrum Guide states that inspection without adaptation is considered pointless.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Guide states that inspecting without adapting is considered pointless, since spotting a problem is worthless if nothing changes afterward.",
          "Incorrect: the statement is in fact true according to the Guide."
        ],
        "trap": "Detecting a deviation through inspection is worthless if the team doesn't then adjust its way of working; inspection and adaptation always go together."
      },
      {
        "type": "single",
        "q": "According to Scrum theory, what does transparency enable?",
        "opts": [
          "Adaptation directly",
          "Inspection",
          "Release planning",
          "Creation of the Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: transparency doesn't enable adaptation directly; it first enables inspection, which in turn enables adaptation.",
          "Correct: without real visibility into the process and the work, any inspection would be misleading; transparency is the foundation that makes reliable inspection possible.",
          "Incorrect: release planning isn't a concept from Scrum theory and isn't a direct effect of transparency.",
          "Incorrect: the Sprint Backlog is created by the Developers during Sprint Planning; it isn't an effect of transparency as a pillar."
        ],
        "trap": "The logical chain is Transparency → enables Inspection → enables Adaptation. Don't skip straight from transparency to adaptation."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about Lean thinking and empiricism are correct?",
        "opts": [
          "Lean thinking focuses on reducing waste and concentrating on the essentials",
          "Empiricism means planning all the work in detail before starting, to avoid surprises",
          "Empiricism asserts that knowledge comes from experience and that decisions are made based on what is observed",
          "Lean thinking, as used in the Guide, is a synonym for Six Sigma"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: this is the Guide's own description of Lean thinking.",
          "Incorrect: that describes a predictive, plan-everything-upfront approach, the opposite of empiricism.",
          "Correct: this is the Guide's literal definition of empiricism.",
          "Incorrect: the Guide neither mentions nor equates Lean thinking with Six Sigma; they are distinct frameworks not presented as synonyms."
        ],
        "trap": "Planning all the work in detail before starting (a predictive/BDUF approach) is the opposite of empiricism — a very common distractor."
      },
      {
        "type": "single",
        "q": "According to the Guide, when do adaptations become more difficult?",
        "opts": [
          "When the team is too large",
          "When people are not empowered or self-managing",
          "When the Sprint lasts longer than a month",
          "When there are too many stakeholders"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: team size is not the condition the Guide cites for adaptation becoming harder.",
          "Correct: the Guide notes that adaptations become more difficult when the people involved are not empowered or self-managing.",
          "Incorrect: Sprint length is not the cause the Guide mentions; besides, a Sprint in Scrum never lasts longer than a month.",
          "Incorrect: the number of stakeholders is not the condition cited in the Guide."
        ],
        "trap": "Empowerment and the ability to self-manage are necessary conditions for effective adaptation; without them, adaptation suffers."
      },
      {
        "type": "tf",
        "q": "The Scrum values are learned and explored while the Scrum Team works with the events and artifacts, not through separate training.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Guide states that the values are learned and explored while the Scrum Team works with the Scrum events and artifacts, not as separate training.",
          "Incorrect: the statement is true according to the Guide."
        ],
        "trap": "Scrum values aren't a standalone training module; they take on meaning through the daily practice of the framework."
      },
      {
        "type": "single",
        "q": "Which statement best describes empiricism?",
        "opts": [
          "Planning all the work upfront to avoid surprises",
          "Making decisions based on observation and experience",
          "Following a fixed plan and never revisiting it",
          "Delegating all decisions to the Product Owner"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: that's the opposite approach, typical of predictive planning (Big Design Up Front), not empiricism.",
          "Correct: this is the essence of empiricism as described by the Guide.",
          "Incorrect: a plan that's never revisited contradicts adaptation, one of the three pillars of empiricism.",
          "Incorrect: empiricism involves the whole Scrum Team, not only the Product Owner."
        ],
        "trap": "Planning everything in advance (BDUF) is the opposite of empiricism; it's one of the most recurring distractors."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about risk, complexity, and the empirical approach are correct?",
        "opts": [
          "Scrum optimizes predictability and controls risk through an iterative, incremental approach",
          "Risk is controlled mainly through detailed upfront documentation",
          "Scrum is used in environments where the outcome cannot be fully known in advance (complex work)",
          "Shorter Sprints can limit risk in terms of cost and effort"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: this is the approach the Guide describes for managing risk.",
          "Incorrect: this describes a predictive approach, the opposite of the empirical risk control Scrum proposes.",
          "Correct: Scrum is designed for complex environments where the full outcome cannot be known upfront.",
          "Correct: shortening the Sprint is a way to limit exposure to cost and effort risk before the next inspection point."
        ],
        "trap": "Detailed upfront documentation (BDUF) is the opposite of the empirical, short-cycle risk control Scrum relies on."
      },
      {
        "type": "single",
        "q": "What provides Scrum with a regular cadence for inspecting artifacts and progress toward goals, without needing extra meetings?",
        "opts": [
          "A mandatory weekly report",
          "The five formal Scrum events, which provide a regular cadence",
          "Quarterly external audits",
          "A preparatory 'Sprint 0' before the first Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide requires no such report.",
          "Correct: the prescribed events in Scrum create regularity and minimize the need for meetings not defined in the framework.",
          "Incorrect: the Guide makes no mention of external audits.",
          "Incorrect: 'Sprint 0' doesn't exist in Scrum; the cadence of inspection and adaptation begins with the very first Sprint."
        ],
        "trap": "'Sprint 0' is one of the most recurring exam distractors: it does not exist in the Scrum Guide."
      }
    ]
  },
  {
    "id": "scrum-team",
    "name": "The Scrum Team and Its Accountabilities",
    "theory": "<h3>Composition and structure</h3><p>The Scrum Team is the fundamental unit of Scrum. It consists of <b>one Scrum Master</b>, <b>one Product Owner</b>, and the <b>Developers</b>. There are no sub-teams or hierarchies inside a Scrum Team — it is a single cohesive unit focused on one objective at a time, the Product Goal.</p><p>The team is <b>cross-functional</b>: members collectively hold all the skills necessary to create value each Sprint, without needing to rely on people outside the team. It is also <b>self-managing</b>: internally, the team decides who does what, when, and how — nobody outside the team, including the Scrum Master or Product Owner, tells the Developers how to turn Product Backlog items into Increments of value.</p><p>The Scrum Guide recommends keeping Scrum Teams <b>small</b>, typically <b>10 or fewer people</b>: small enough to remain nimble, large enough to complete significant work within a Sprint. If a Scrum Team grows too large, it should consider reorganizing into multiple Scrum Teams, each focused on the same product, sharing one Product Goal, one Product Backlog, and one Product Owner.</p><p>The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint, as well as for all product-related activities — stakeholder collaboration, verification, maintenance, operations, experimentation, research and development, and anything else that might be required.</p><h3>Developers</h3><p>Developers are the people in the Scrum Team committed to creating any aspect of a usable Increment each Sprint. Their specific accountabilities are:</p><ul><li>Creating the Sprint plan: the Sprint Backlog.</li><li>Instilling quality by adhering to a Definition of Done.</li><li>Adapting their plan each day toward the Sprint Goal.</li><li>Holding each other accountable as professionals.</li></ul><h3>Product Owner</h3><p>The Product Owner is accountable for <b>maximizing the value of the product</b> resulting from the work of the Scrum Team. This is achieved primarily through effective Product Backlog management, which includes:</p><ul><li>Developing and explicitly communicating the Product Goal.</li><li>Creating and clearly communicating Product Backlog items.</li><li><b>Ordering</b> Product Backlog items (never \"prioritizing\").</li><li>Ensuring the Product Backlog is transparent, visible, and understood.</li></ul><p>The Product Owner may delegate this work to others, but remains ultimately accountable: <b>work can be delegated, accountability cannot</b>. The Product Owner is <b>one person, not a committee</b>. They may represent the needs of many stakeholders in the Product Backlog, but anyone wanting to change the priority of an item must address the Product Owner. For the Product Owner to succeed, the whole organization must respect their decisions.</p><h3>Scrum Master</h3><p>The Scrum Master is accountable for <b>establishing Scrum as defined in the Scrum Guide</b>, by helping everyone — the Scrum Team and the wider organization — understand Scrum theory and practice. They are accountable for the Scrum Team's effectiveness, enabling it to improve its practices within the Scrum framework.</p><p>The Scrum Master serves the Scrum Team by coaching it in self-management and cross-functionality, helping it focus on creating high-value Increments, removing impediments, and ensuring all events take place, are positive and productive, and stay within the timebox. They serve the Product Owner by helping find techniques for effective Product Goal definition and Product Backlog management, and by facilitating stakeholder collaboration when requested. They serve the organization by leading, training, and coaching Scrum adoption. The Scrum Master is a <b>true servant leader</b> for the team and the organization, holding no hierarchical authority over anyone.</p><h3>Common exam traps</h3><ul><li>Mixing up \"self-managing\" (2020 terminology) with \"self-organizing\" (2017 terminology, no longer used).</li><li>Assuming the Scrum Master assigns tasks or manages the team — that would break self-management.</li><li>Believing the Product Owner can be a committee — it is always a single person.</li><li>Assuming Developers order the Product Backlog — that is always the Product Owner's job.</li><li>Imagining sub-teams (e.g., a separate \"QA team\") within the Scrum Team — the Guide explicitly rules this out.</li></ul>",
    "questions": [
      {
        "type": "multi",
        "q": "Why does the Scrum Guide insist there is only one Product Owner per product? (select all that apply)",
        "opts": [
          "So that it is clear who is accountable for the ultimate value of the product",
          "To give the Scrum Master someone to delegate ordering the Product Backlog to",
          "So stakeholders have a single, clear point of contact instead of juggling several conflicting voices",
          "To help avoid barriers to effective communication and rapid decision-making"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: a single Product Owner keeps accountability for the product's value unambiguous.",
          "Incorrect: the Scrum Master never takes over Product Backlog ordering; that would break the Product Owner's accountability.",
          "Correct: stakeholders dealing with a single accountable person avoids the confusion of multiple, possibly conflicting, points of contact.",
          "Correct: a single decision-maker removes communication barriers and speeds up decisions about the Backlog's content and order."
        ],
        "trap": "A committee or multiple 'mini product owners' would blur accountability and slow down decisions — the Guide keeps this role singular precisely to avoid that."
      },
      {
        "type": "single",
        "q": "The Increment presented at the Sprint Review does not reflect what the Product Owner thought she had asked for. What might this indicate?",
        "opts": [
          "People are leaving the Scrum Team",
          "The Product Owner is not working full-time with the Scrum Team",
          "The acceptance criteria do not appear to be complete",
          "The Product Owner needs to work more closely with the Scrum Team"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrect: team turnover isn't the indicator described in this scenario.",
          "Incorrect: full-time presence isn't required by the Guide, so this isn't the right diagnosis.",
          "Incorrect: incomplete acceptance criteria could be a factor, but the scenario points to a deeper collaboration gap.",
          "Correct: a mismatch between expectation and delivered Increment is a signal that the Product Owner needs closer, more frequent collaboration with the Scrum Team throughout the Sprint, not just at the Review."
        ],
        "trap": "Surprises at the Sprint Review usually point to insufficient PO-Developer collaboration during the Sprint, not to a formal documentation gap."
      },
      {
        "type": "multi",
        "q": "What is a Product Owner typically responsible for during a Sprint? (select the two best answers)",
        "opts": [
          "Nothing — the Sprint belongs entirely to the Developers",
          "Working with the Developers on Product Backlog refinement",
          "Attending every Daily Scrum to answer questions about Sprint Backlog items",
          "Collaborating with stakeholders, users, and customers"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrect: the Product Owner remains active throughout the Sprint, especially around the Product Backlog and stakeholders.",
          "Correct: ongoing refinement work with the Developers is a typical Product Owner activity during the Sprint.",
          "Incorrect: attending every Daily Scrum is not required of the Product Owner; it is an internal Developers' event.",
          "Correct: collaborating with stakeholders, users, and customers is a core, ongoing Product Owner activity."
        ],
        "trap": "The Product Owner is not idle during the Sprint, but their work is refinement and stakeholder collaboration — not managing the Daily Scrum or the Developers' daily tasks."
      },
      {
        "type": "multi",
        "q": "What are the two primary ways a Scrum Master helps a Scrum Team work at its highest level of productivity?",
        "opts": [
          "By ensuring meetings start and end at the proper time",
          "By facilitating Scrum Team decisions",
          "By keeping high-value features high in the Product Backlog",
          "By removing impediments that hinder the Scrum Team"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrect: enforcing schedules is a minor mechanical detail, not one of the Scrum Master's two primary contributions to productivity.",
          "Correct: facilitating the team's own decision-making is a core way the Scrum Master increases effectiveness.",
          "Incorrect: ordering the Product Backlog by value is the Product Owner's accountability, not the Scrum Master's.",
          "Correct: removing impediments that block the team's progress is one of the Scrum Master's most direct contributions to productivity."
        ],
        "trap": "Ordering the Backlog by value is a Product Owner task; don't let a plausible-sounding productivity claim assign it to the Scrum Master."
      },
      {
        "type": "multi",
        "q": "A Product Owner is accountable for maximizing the value of the product. Which of the following can be delegated to others, while the Product Owner remains accountable for the outcome?",
        "opts": [
          "Attending the Sprint Review",
          "Ordering Product Backlog items",
          "Developing and communicating the Product Goal",
          "Attending the Sprint Retrospective"
        ],
        "correct": [
          1,
          2
        ],
        "exp": [
          "Incorrect: attending Scrum events isn't a 'delegable work item' in this sense — the Product Owner's participation in the Scrum Team's events isn't handed to someone else.",
          "Correct: the actual work of ordering the Product Backlog can be delegated to someone else, while the Product Owner remains accountable for the result.",
          "Correct: the work of developing and communicating the Product Goal can also be delegated, without transferring accountability.",
          "Incorrect: like Sprint Review attendance, this isn't the kind of 'work' the Guide describes as delegable."
        ],
        "trap": "Delegating the work of ordering or drafting the Product Goal is allowed; delegating the underlying accountability for the product's value is not."
      },
      {
        "type": "single",
        "q": "You are leading the development of a new product that six teams new to Scrum will build. You have gathered an early Product Backlog. How would you minimize dependencies between the Scrum Teams?",
        "opts": [
          "Work with the Developers on how to best analyze and break apart the work",
          "Divide the Product Backlog items among six different Product Owners",
          "Create an independent Product Backlog per Scrum Team",
          "Raise this as an impediment with the Scrum Master"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the people doing the work are best positioned to analyze dependencies and decide how to decompose it sensibly.",
          "Incorrect: multiple teams working on one product must share a single Product Owner, not one per team.",
          "Incorrect: multiple teams working on the same product must share a single Product Backlog, not separate ones.",
          "Incorrect: this is a design and collaboration challenge to work through with the Developers, not an impediment to hand off."
        ],
        "trap": "When scaling to multiple teams on one product, the Guide's answer is always: one Product Backlog, one Product Owner, and the teams working together on how to decompose the work."
      },
      {
        "type": "tf",
        "q": "A Scrum Master fulfills essentially the same role as a traditional Project Manager.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Scrum Master holds no hierarchical authority and does not manage the team's work; that is a fundamentally different role from a traditional Project Manager.",
          "Correct: the Scrum Master is a servant leader who coaches and removes impediments — not a manager who plans, assigns, or tracks work in the traditional sense."
        ],
        "trap": "The Scrum Master's accountability is establishing Scrum and serving the team, never directing work like a Project Manager."
      },
      {
        "type": "multi",
        "q": "What are the two accurate statements about 'Testers' in a Scrum Team?",
        "opts": [
          "Tracking quality metrics is their main job",
          "Scrum has no formal 'Tester' role",
          "Verifying the work of programmers is their main job",
          "The Developers as a whole are responsible for quality"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrect: this presumes a formal Tester role exists in Scrum, which it does not.",
          "Correct: the Scrum Guide defines no sub-roles such as 'Tester'; testing skills are simply part of what a cross-functional set of Developers may need.",
          "Incorrect: this again assumes a distinct Tester role that verifies others' work, contradicting cross-functionality.",
          "Correct: quality, including testing, is a shared accountability of all the Developers, not a separate specialist's job."
        ],
        "trap": "Scrum defines no job titles inside the Developers (no 'Tester', 'Architect', etc.); quality is a collective Developer accountability."
      },
      {
        "type": "single",
        "q": "The Scrum Master observes that the Product Owner is struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master?",
        "opts": [
          "Present the Product Owner with an already-ordered Backlog to use",
          "Suggest the Developers order the Backlog to ensure it's technically feasible",
          "Offer the Product Owner help in understanding that the goal of ordering is to maximize value",
          "Suggest the Product Owner extend the Sprint to have more time to order the Backlog"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrect: doing the ordering for the Product Owner takes over their accountability instead of coaching them.",
          "Incorrect: ordering the Product Backlog is never the Developers' accountability.",
          "Correct: the Scrum Master coaches the Product Owner, helping them understand and pursue the actual goal — maximizing value — rather than doing the work for them.",
          "Incorrect: Sprint length has nothing to do with the Product Owner's ordering challenges, and cannot be extended for this reason."
        ],
        "trap": "A Scrum Master serves the Product Owner by coaching, never by taking over their accountabilities."
      },
      {
        "type": "tf",
        "q": "A Product Owner is essentially the same thing as a traditional Project Manager.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Product Owner's accountability (maximizing product value through Backlog management) is distinct from a Project Manager's typical scope (schedule, budget, resources).",
          "Correct: the Product Owner is a Scrum accountability focused on value, not an equivalent of a traditional Project Manager role."
        ],
        "trap": "Mapping Scrum accountabilities onto pre-existing job titles (Product Owner = Project Manager) is a common but incorrect simplification."
      },
      {
        "type": "single",
        "q": "The Product Owner's authority to change and update the Product Backlog is unlimited, except for:",
        "opts": [
          "High-impact changes not approved by a change request board",
          "Decisions made by a chief program manager",
          "Decisions by the CFO, CEO, or board of directors",
          "There are no exceptions — the entire organization must respect the Product Owner's decisions"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrect: no change-request board holds authority over the Product Owner's Backlog decisions in Scrum.",
          "Incorrect: a chief program manager title does not override the Product Owner's authority either.",
          "Incorrect: not even senior executive roles are described in the Guide as overriding the Product Owner's decisions.",
          "Correct: the Scrum Guide states that for the Product Owner to succeed, the whole organization must respect their decisions — with no listed exceptions."
        ],
        "trap": "Exam questions often invent an authority figure (CFO, change board, chief architect) who supposedly overrides the PO — the Guide grants no such exception."
      },
      {
        "type": "multi",
        "q": "Which two phrases best describe the relationship between the Product Owner and the Developers?",
        "opts": [
          "They should work apart as much as possible to keep business and technology concerns separate",
          "They collaborate often so the Developers build Increments keeping end-user and stakeholder concerns in mind",
          "They collaborate often so the Product Owner can make informed decisions balancing effort and value",
          "The Product Owner should be with the Developers full-time to build deep technical expertise"
        ],
        "correct": [
          1,
          2
        ],
        "exp": [
          "Incorrect: separating business and technology concerns contradicts Scrum's emphasis on close collaboration.",
          "Correct: frequent collaboration helps the Developers understand end-user and stakeholder concerns while building the Increment.",
          "Correct: frequent collaboration also helps the Product Owner make better-informed trade-off decisions about effort versus value.",
          "Incorrect: full-time co-location is not a Guide requirement; the level of collaboration should be 'enough', not necessarily 'always'."
        ],
        "trap": "Frequent collaboration is required, but the Guide never mandates a fixed amount of time (like full-time presence) for the Product Owner with the Developers."
      },
      {
        "type": "single",
        "q": "Which description best fits the role of the Product Owner?",
        "opts": [
          "Chief Business Analyst",
          "Requirements Collector",
          "Project Manager 2.0",
          "Value Maximizer"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrect: this understates the role — the Product Owner's core focus is value, not merely gathering or analyzing requirements.",
          "Incorrect: same issue — collecting requirements is a narrower activity than what the Product Owner is accountable for.",
          "Incorrect: the Product Owner is not simply a rebranded Project Manager.",
          "Correct: the Product Owner is accountable for maximizing the value of the product — 'Value Maximizer' captures that accountability well."
        ],
        "trap": "It's tempting to map the Product Owner onto a familiar title (analyst, requirements gatherer, PM); the Guide's own framing is about maximizing value."
      },
      {
        "type": "single",
        "q": "Which of the following is an accurate Product Owner responsibility?",
        "opts": [
          "Ordering the items in the Product Backlog to best achieve goals and missions",
          "Defining the Definition of Done",
          "Defining the Definition of Ready"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: ordering the Product Backlog toward the Product Goal is an explicit Product Owner accountability.",
          "Incorrect: the Definition of Done is not solely the Product Owner's to define — it belongs to the organization or the Scrum Team as a whole.",
          "Incorrect: readiness for Sprint Planning is a shared understanding built through refinement, not a document the Product Owner alone defines."
        ],
        "trap": "Don't assume the Product Owner personally owns every quality-related standard; ordering the Backlog is theirs, but the Definition of Done is a team/organization-level standard."
      },
      {
        "type": "tf",
        "q": "When n Scrum Teams are working on one product, there should always be only one Product Owner, but there can be anywhere from one to n Scrum Masters.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the product must have a single Product Owner and a single Product Backlog, but each individual Scrum Team may have its own Scrum Master, or one Scrum Master might serve more than one team.",
          "Incorrect: this statement accurately reflects how Scrum scales — one Product Owner overall, but Scrum Master assignment is more flexible."
        ],
        "trap": "The 'single accountable person' rule applies strictly to the Product Owner and the Product Backlog, not to the number of Scrum Masters across multiple teams."
      },
      {
        "type": "single",
        "q": "What is the main accountability of a 'Project Manager' in Scrum?",
        "opts": [
          "Supporting the Product Owner",
          "Tracking the progress of a release",
          "There are no Project Managers in Scrum",
          "Managing risks"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrect: this assumes a Project Manager role exists in Scrum.",
          "Incorrect: same issue — release tracking isn't attributed to a 'Project Manager' accountability in the Guide.",
          "Correct: Scrum defines only three accountabilities — Product Owner, Scrum Master, and Developers. There is no Project Manager role.",
          "Incorrect: risk is managed through the empirical Scrum process itself, not by a dedicated Project Manager."
        ],
        "trap": "Scrum does not define a Project Manager accountability at all — its responsibilities are distributed across the Product Owner, Scrum Master, and Developers."
      },
      {
        "type": "tf",
        "q": "The Product Owner can ask a Developer to order the Product Backlog Items on their behalf. Is that acceptable?",
        "opts": [
          "Yes",
          "No"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Product Owner may delegate the actual work of ordering the Backlog to anyone, including a Developer, while remaining accountable for the result.",
          "Incorrect: delegating this work is explicitly allowed by the Guide, as long as accountability stays with the Product Owner."
        ],
        "trap": "Delegating backlog-ordering work is allowed and isn't restricted to non-Developers — what can never be delegated is the accountability itself."
      },
      {
        "type": "multi",
        "q": "Which two of the following are services a Scrum Master provides to the Product Owner?",
        "opts": [
          "Helping the Product Owner find techniques for effective Product Backlog management",
          "Helping the Product Owner with documentation",
          "Removing impediments for the Scrum Team, including the Product Owner",
          "Acting as a 'middleman' between the Product Owner and the Developers"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: this is an explicit way the Scrum Master serves the Product Owner.",
          "Incorrect: producing documentation for the Product Owner is not a described Scrum Master service.",
          "Correct: removing impediments benefits the whole Scrum Team, the Product Owner included.",
          "Incorrect: acting as an intermediary between the Product Owner and Developers would undermine their direct collaboration, which the Scrum Master should instead be facilitating directly."
        ],
        "trap": "The Scrum Master facilitates and removes impediments; it never inserts itself as a 'middleman' that reduces direct Product Owner-Developer collaboration."
      },
      {
        "type": "tf",
        "q": "The Product Owner can nominate a 'Lead Developer' within the Developers to act as a single point of contact for the group.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: this would create a hierarchy inside the Scrum Team, which the Guide explicitly rules out.",
          "Correct: there are no sub-teams or hierarchies within the Scrum Team, so no 'Lead Developer' or single point of contact is formally appointed."
        ],
        "trap": "Even a well-intentioned 'single point of contact' role creates an informal hierarchy that contradicts the Guide's 'no hierarchies' rule for the Scrum Team."
      },
      {
        "type": "single",
        "q": "Collaboration between the Developers and the Product Owner is very important for the product. Which of the following would be the least productive way for the Scrum Master to improve this collaboration?",
        "opts": [
          "Act as a go-between, passing messages from one side to the other",
          "Teach them techniques to improve their collaboration",
          "Suggest new collaboration tools they could try"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: acting as a go-between reduces direct collaboration instead of improving it, and is the least productive of these options.",
          "Incorrect: teaching techniques directly strengthens the Product Owner-Developer relationship, so it's a more productive approach.",
          "Incorrect: suggesting tools can genuinely help collaboration, making it more productive than substituting for direct interaction."
        ],
        "trap": "A Scrum Master who becomes a permanent relay between the Product Owner and Developers is solving the symptom, not the underlying collaboration problem."
      },
      {
        "type": "single",
        "q": "When multiple Scrum Teams are working on the same product, should all of their work be integrated into an Increment every Sprint?",
        "opts": [
          "Yes, but only for the Scrum Teams whose work has dependencies",
          "Yes, in order to accurately inspect what is actually done",
          "No, that's too hard, and should wait for a dedicated integration Sprint",
          "No, each Scrum Team stands alone"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: integration should not be limited only to teams with known dependencies; a shared product needs a shared, integrated Increment.",
          "Correct: integrating the work every Sprint is necessary so the Scrum Team(s) and stakeholders can accurately inspect what has truly been accomplished.",
          "Incorrect: deferring integration to a special 'integration Sprint' is exactly the kind of hardening/release Sprint the Guide does not describe or endorse.",
          "Incorrect: teams sharing one product, Product Backlog, and Product Owner cannot 'stand alone' — their work contributes to one Increment."
        ],
        "trap": "A dedicated 'integration Sprint' is a hardening-Sprint antipattern; the point of transparency requires integrating and inspecting real, combined progress every Sprint."
      },
      {
        "type": "single",
        "q": "How many people typically make up a Scrum Team, according to the Guide?",
        "opts": [
          "5 or fewer",
          "10 or fewer",
          "Between 15 and 20",
          "No limit is defined"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide's reference figure is 10, not 5.",
          "Correct: the Scrum Guide states Scrum Teams are typically 10 or fewer people.",
          "Incorrect: a team that large struggles with communication and effective collaboration.",
          "Incorrect: the Guide does give a reference figure, even though it isn't a hard limit."
        ],
        "trap": "The 'typically 10 or fewer' figure is a classic memorization point in exams."
      },
      {
        "type": "multi",
        "q": "Which of the following are explicit accountabilities of the Developers according to the Guide?",
        "opts": [
          "Creating the Sprint Backlog",
          "Ordering the Product Backlog",
          "Adhering to a Definition of Done",
          "Adapting their plan each day toward the Sprint Goal"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: the Sprint Backlog is the plan created by the Developers.",
          "Incorrect: ordering the Product Backlog is the Product Owner's exclusive accountability.",
          "Correct: instilling quality via the Definition of Done is an explicit Developer accountability.",
          "Correct: Developers adapt their plan daily toward the Sprint Goal."
        ],
        "trap": "Swapping accountabilities between Developers and the PO — especially 'ordering the backlog' — is a very common trap."
      },
      {
        "type": "single",
        "q": "Who can delegate the effective management of the Product Backlog?",
        "opts": [
          "No one — not even the work can be delegated",
          "The Product Owner may delegate the work, but never the accountability",
          "The Scrum Master, when the PO is unavailable",
          "The Developers, by consensus"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the work of managing the Product Backlog can indeed be delegated.",
          "Correct: the Scrum Guide states the Product Owner may delegate the work, but remains ultimately accountable.",
          "Incorrect: the Scrum Master does not take over the PO's accountability in their absence.",
          "Incorrect: Developers do not take over Product Backlog management."
        ],
        "trap": "Always distinguish 'delegating the work' (possible) from 'delegating the accountability' (impossible — it always stays with the PO)."
      },
      {
        "type": "tf",
        "q": "The Product Owner can be a committee of several people to better represent stakeholders.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Guide is explicit that the Product Owner is a single individual.",
          "Correct: the Guide literally states the Product Owner is one person, not a committee."
        ],
        "trap": "The PO is always a single person, even when representing many different stakeholder voices."
      },
      {
        "type": "single",
        "q": "How should someone proceed if they want to change the order of a Product Backlog item?",
        "opts": [
          "Modify it directly if urgent",
          "Negotiate it with the Product Owner",
          "Ask the Developers at the Daily Scrum",
          "Wait for the Retrospective"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: nobody outside the backlog management process changes its order unilaterally.",
          "Correct: any change to the order or scope of the Product Backlog is negotiated with the Product Owner.",
          "Incorrect: the Daily Scrum is an internal Developers' event about the Sprint Backlog, not a forum to renegotiate the Product Backlog.",
          "Incorrect: there is no need to wait for the Retrospective to raise Product Backlog changes."
        ],
        "trap": "Any change to the backlog's order or scope always goes through negotiation with the PO."
      },
      {
        "type": "single",
        "q": "What term did the 2020 Guide introduce to replace 'self-organizing'?",
        "opts": [
          "Self-sufficient",
          "Self-managing",
          "Multidisciplinary",
          "Self-directed"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: this is not a term used by the Guide.",
          "Correct: 'self-managing' replaced 'self-organizing' in the 2020 Guide.",
          "Incorrect: 'multidisciplinary' relates to cross-functionality, not self-management.",
          "Incorrect: this is not the term used by the Guide."
        ],
        "trap": "'Self-organizing' is obsolete 2017 terminology; the 2020 Guide uses 'self-managing': the team decides who, how, and where to work."
      },
      {
        "type": "multi",
        "q": "Which of the following are ways the Scrum Master serves the Product Owner?",
        "opts": [
          "Helping find techniques for effective Product Goal definition",
          "Deciding the order of the Product Backlog on the PO's behalf",
          "Helping the team understand the need for clear and concise Product Backlog items",
          "Facilitating stakeholder collaboration when requested"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: this is one of the explicit ways the Scrum Master helps the Product Owner.",
          "Incorrect: the Scrum Master never decides the Product Backlog order in the PO's place — that would undermine the PO's accountability.",
          "Correct: helping the team understand the need for clear and concise items is a way the SM serves the PO.",
          "Correct: facilitating stakeholder collaboration when requested is an explicit way the SM serves the PO."
        ],
        "trap": "The SM 'helps' and 'facilitates', but never makes decisions that are the PO's exclusive accountability."
      },
      {
        "type": "single",
        "q": "Who is accountable for determining the size (sizing) of Product Backlog items?",
        "opts": [
          "The Product Owner",
          "The Scrum Master",
          "The Developers",
          "The stakeholders"
        ],
        "correct": 2,
        "exp": [
          "Incorrect: the PO may influence sizing by helping the team understand and select better alternatives, but does not decide it.",
          "Incorrect: the Scrum Master does not estimate the team's work.",
          "Correct: the people who do the work are the ones who size it.",
          "Incorrect: stakeholders do not take part in sizing the work."
        ],
        "trap": "The PO 'may influence by helping to understand and select trade-offs', but the final sizing decision always belongs to the Developers."
      },
      {
        "type": "tf",
        "q": "Within a Scrum Team there are distinct sub-teams, for example a separate QA team and a separate development team.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Guide explicitly rules out sub-teams and hierarchies within the Scrum Team.",
          "Correct: there are no sub-teams or hierarchies within the Scrum Team."
        ],
        "trap": "Literal wording: 'no sub-teams or hierarchies'. Any option suggesting internal divisions is wrong."
      },
      {
        "type": "single",
        "q": "What is the Scrum Master's central accountability according to the Guide?",
        "opts": [
          "Ensuring the team meets deadlines",
          "Being accountable for establishing Scrum as defined in the Scrum Guide",
          "Managing the project budget",
          "Assigning tasks to the Developers"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: meeting deadlines is not a formal Scrum Master accountability.",
          "Correct: this is the Scrum Master's central accountability according to the Guide.",
          "Incorrect: managing a budget is not a Scrum function.",
          "Incorrect: Developers self-assign their work; the Scrum Master does not assign tasks."
        ],
        "trap": "The SM does not assign work — doing so would break the team's self-management."
      },
      {
        "type": "single",
        "q": "When multiple Scrum Teams work on the same product, what must they share?",
        "opts": [
          "The same Scrum Master for all teams",
          "The same Product Goal, Product Backlog, and Product Owner",
          "The same Sprint Backlog for all teams",
          "The same Developers rotating between teams"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: each Scrum Team can have its own Scrum Master.",
          "Correct: when several Scrum Teams work on the same product, they must share the same Product Goal, Product Backlog, and Product Owner.",
          "Incorrect: each team keeps its own Sprint Backlog.",
          "Incorrect: the Guide does not prescribe rotating Developers between teams."
        ],
        "trap": "The rule is 'one product, one Product Backlog, one Product Owner', even with multiple Scrum Teams working on it."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about the Product Owner are correct?",
        "opts": [
          "Accountable for maximizing the value of the product",
          "Must get the Developers' approval to change the order of the Backlog",
          "May represent the needs of many stakeholders",
          "Must be respected by the whole organization for their decisions to be effective"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: maximizing product value is the PO's central accountability.",
          "Incorrect: the PO orders the backlog without needing the Developers' approval.",
          "Correct: the PO may represent the needs of many stakeholders in the Product Backlog.",
          "Correct: for the PO's decisions to be effective, the whole organization must respect them."
        ],
        "trap": "The PO decides the order unilaterally; no 'approval' from the Developers is needed, even though they do collaborate."
      }
    ]
  },
  {
    "id": "esdeveniments",
    "name": "Scrum Events",
    "theory": "<h3>The Sprint: the container for everything else</h3><p>The Sprint is a fixed-length container — <b>one month or less</b> — inside which all the other Scrum events take place: Sprint Planning, the Daily Scrum, the Sprint Review, and the Sprint Retrospective. A new Sprint begins <b>immediately</b> after the previous one ends; there is no gap and no preparatory \"Sprint 0\" — that concept does not exist in the Scrum Guide. No changes are made during a Sprint that would endanger the Sprint Goal, quality does not decrease, and scope may be clarified and renegotiated with the Product Owner as more is learned. Only the Product Owner has the authority to cancel a Sprint before it ends.</p><h3>Sprint Planning</h3><p>Starts the Sprint. For a one-month Sprint, it is timeboxed to a maximum of <b>8 hours</b> (shorter Sprints usually get a shorter event, though the Guide does not give an exact figure). The event addresses three topics: <b>why</b> this Sprint is valuable (the Sprint Goal), <b>what</b> can be done from the Product Backlog, and <b>how</b> the chosen work will get done. The whole Scrum Team takes part.</p><h3>The Daily Scrum</h3><p>A <b>15-minute-maximum</b> event, always — it is the one timebox that does not scale with Sprint length. It is internal to and for the Developers, held to inspect progress toward the Sprint Goal and adapt the Sprint Backlog. If the Product Owner or Scrum Master are actively working on Sprint Backlog items, they take part as Developers, not in their management role.</p><h3>The Sprint Review</h3><p>Timeboxed to a maximum of <b>4 hours</b> for a one-month Sprint. The Scrum Team presents the results of its work to key stakeholders, and together they review what was accomplished and inspect the impact on the Product Backlog and next steps. It is never an approval \"gate\": an Increment can be delivered to stakeholders at any point before the Sprint even ends.</p><h3>The Sprint Retrospective</h3><p>Closes out the Sprint. Its timebox is a maximum of <b>3 hours</b> for a one-month Sprint. Its purpose is to plan ways to increase quality and effectiveness. <b>The entire Scrum Team</b> takes part, including the Product Owner, as an equal member — no internal team event excludes the PO.</p><h3>Common exam traps</h3><ul><li>Inventing a \"Sprint 0\": it does not exist in the Scrum Guide; preparatory work happens inside ordinary Sprints.</li><li>Assuming the Daily Scrum scales with Sprint length: only Planning, Review, and Retrospective scale; the Daily Scrum is always capped at 15 minutes.</li><li>Mistaking the Sprint Review for a formal release approval: it is a collaborative inspect-and-adapt working session, not a gate.</li><li>Excluding the Product Owner from internal events like the Daily Scrum or Retrospective: the PO participates in every Scrum event.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "During the Sprint Retrospective, the Scrum Team identifies several high-priority process improvements. What is the most accurate statement about what happens next?",
        "opts": [
          "The Scrum Team may add the items to the Sprint Backlog for the next Sprint",
          "The Scrum Team must choose at least one high-priority improvement and place it in the Sprint Backlog",
          "The Scrum Team should decline to add any improvement when things are running smoothly",
          "The Scrum Master selects the most important improvement and places it in the Sprint Backlog"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Guide notes that the most impactful improvements may be addressed as soon as possible, even added to the next Sprint Backlog — but this is not a formal requirement to add at least one.",
          "Incorrect: there is no rule mandating that at least one improvement item must go into the Sprint Backlog.",
          "Incorrect: 'running smoothly' isn't a valid reason to skip identifying or considering improvements; the Retrospective's purpose is continuous improvement regardless.",
          "Incorrect: it's the Scrum Team collectively, not the Scrum Master alone, who decides what to do with identified improvements."
        ],
        "trap": "Adding improvements to the Sprint Backlog is an option the Guide mentions, not a mandatory quota the team must meet every Sprint."
      },
      {
        "type": "multi",
        "q": "Which three of the following are genuine, timeboxed Scrum events?",
        "opts": [
          "Sprint 0",
          "Release Retrospective",
          "Sprint Retrospective",
          "Daily Scrum",
          "Sprint Planning",
          "Release Planning",
          "Sprint Testing"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "exp": [
          "Incorrect: 'Sprint 0' does not exist in the Scrum Guide.",
          "Incorrect: 'Release Retrospective' is not a Scrum Guide term.",
          "Correct: the Sprint Retrospective is one of Scrum's formal, timeboxed events.",
          "Correct: the Daily Scrum is one of Scrum's formal, timeboxed events.",
          "Correct: Sprint Planning is one of Scrum's formal, timeboxed events.",
          "Incorrect: 'Release Planning' is not a Scrum Guide term.",
          "Incorrect: 'Sprint Testing' is not a named Scrum event."
        ],
        "trap": "The exam often mixes real Scrum events with invented, waterfall-flavored labels (Sprint 0, Release Planning, Release Retrospective) that sound plausible but don't exist in the Guide."
      },
      {
        "type": "single",
        "q": "Who starts the Daily Scrum?",
        "opts": [
          "The person who has the token",
          "Whoever the Developers decide should start",
          "The person coming in last, to encourage punctuality",
          "The Product Owner",
          "The Scrum Master, to keep it within the timebox"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Guide describes no 'token' mechanism for the Daily Scrum.",
          "Correct: the Developers, as a self-managing group, decide among themselves how to structure and start their Daily Scrum.",
          "Incorrect: this isn't a Guide-described practice, and it isn't a good-faith way to build a healthy team dynamic either.",
          "Incorrect: the Daily Scrum is internal to the Developers; the Product Owner does not run it.",
          "Incorrect: the Scrum Master doesn't run the Daily Scrum either; the Developers themselves are responsible for it."
        ],
        "trap": "The Guide prescribes no facilitator or fixed starting order for the Daily Scrum — that structure is left entirely to the self-managing Developers."
      },
      {
        "type": "single",
        "q": "Which of the following is an appropriate Scrum Master service regarding the Daily Scrum?",
        "opts": [
          "Leading the discussion each day",
          "Making sure all three questions get answered by every team member",
          "Keeping track of whether each Developer has had a chance to speak",
          "Teaching the Developers to keep the Daily Scrum within 15 minutes"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrect: the Scrum Master does not lead the Daily Scrum; it is internal to and for the Developers.",
          "Incorrect: the Guide does not mandate any fixed set of three questions as a format the Scrum Master must enforce.",
          "Incorrect: tracking individual speaking turns is not a described Scrum Master responsibility, and risks turning the event into a status report.",
          "Correct: teaching the Developers to respect the 15-minute timebox is a genuine coaching service the Scrum Master can provide."
        ],
        "trap": "The 'three questions' format is a common practice, not a Guide requirement the Scrum Master must police; the one hard rule the Scrum Master does help protect is the 15-minute timebox."
      },
      {
        "type": "tf",
        "q": "The Product Owner makes sure the correct stakeholders are invited to the Sprint Retrospective, since they might have important instructions for team improvements.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Sprint Retrospective is internal to the Scrum Team; stakeholders are not invited to give the team instructions there.",
          "Correct: the Retrospective is for the Scrum Team alone to inspect and improve itself — stakeholders play no formal role in it."
        ],
        "trap": "Stakeholders collaborate at the Sprint Review, not the Retrospective — don't blend the purposes of these two very different events."
      },
      {
        "type": "tf",
        "q": "A high-performance Scrum Team ensures every Increment is truly complete by running a dedicated 'Release Sprint' when needed.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: this describes a hardening/release Sprint antipattern, not something a high-performing Scrum Team does.",
          "Correct: the Increment must meet the Definition of Done by the end of every ordinary Sprint; there is no separate 'Release Sprint' concept in Scrum."
        ],
        "trap": "A 'Release Sprint' is an antipattern: quality and 'Done' work happen continuously, every Sprint — never deferred to a special wrap-up Sprint."
      },
      {
        "type": "multi",
        "q": "During a Sprint Retrospective, the Developers propose moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two responses should the Scrum Master recommend?",
        "opts": [
          "Consider the request and personally decide which days the Daily Scrum should occur",
          "Coach the team on why the Daily Scrum is important as a daily opportunity to update the plan",
          "Acknowledge and support the self-managing team's decision to change frequency",
          "Learn why the Developers want this and work with them to improve the outcome of the Daily Scrum"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrect: the Scrum Master should never unilaterally decide the team's schedule — that isn't a coaching response either.",
          "Correct: coaching the team on the purpose and value of a daily inspect-and-adapt cadence addresses the root of the request.",
          "Incorrect: self-management does not extend to changing the frequency the Guide prescribes for a formal Scrum event — the Daily Scrum is always daily.",
          "Correct: understanding the underlying frustration and working together to improve the event is a genuinely helpful coaching response."
        ],
        "trap": "Self-management lets the team decide how to run its events, but not whether a prescribed event (like the Daily Scrum) happens at its prescribed frequency."
      },
      {
        "type": "single",
        "q": "How is management external to the Scrum Team typically involved in the Daily Scrum?",
        "opts": [
          "The Product Owner represents their opinions",
          "Managers are not required at the Daily Scrum",
          "The Scrum Master speaks on their behalf",
          "Management gives an update at the start of each Daily Scrum"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Daily Scrum is not a forum for representing external management's views.",
          "Correct: the Daily Scrum is internal to the Developers; external managers have no required role in it.",
          "Incorrect: the Scrum Master does not act as a spokesperson for management during the Daily Scrum.",
          "Incorrect: the Guide describes no management update as part of the Daily Scrum's structure."
        ],
        "trap": "The Daily Scrum belongs to the Developers; external managers, including via a proxy, have no built-in role in it."
      },
      {
        "type": "single",
        "q": "Which topic is the focus of discussion at the Sprint Review?",
        "opts": [
          "The Scrum process, and how it was applied during the Sprint",
          "Coding and engineering practices",
          "The product Increment",
          "All of the above equally"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrect: reflecting on the process itself is the focus of the Sprint Retrospective, not the Sprint Review.",
          "Incorrect: engineering practices are also more of a Retrospective topic, not a Sprint Review one.",
          "Correct: the Sprint Review centers on the product Increment — what was built and what to do next.",
          "Incorrect: the Review and the Retrospective serve different purposes and are not simply interchangeable in topic."
        ],
        "trap": "Don't blur the Sprint Review (product-focused) with the Sprint Retrospective (process-focused) — they inspect different things."
      },
      {
        "type": "multi",
        "q": "Which three of the following function as feedback loops (inspect-and-adapt points) in Scrum?",
        "opts": [
          "Release Planning",
          "Refinement Meeting",
          "Sprint Retrospective",
          "Sprint Review",
          "Daily Scrum"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "exp": [
          "Incorrect: 'Release Planning' is not a Scrum Guide concept or feedback loop.",
          "Incorrect: refinement is an ongoing activity, not a formal timeboxed feedback event.",
          "Correct: the Sprint Retrospective is a feedback loop on the team's process and effectiveness.",
          "Correct: the Sprint Review is a feedback loop on the product Increment.",
          "Correct: the Daily Scrum is a feedback loop on progress toward the Sprint Goal."
        ],
        "trap": "Refinement, though valuable, is not one of Scrum's formal timeboxed events or feedback loops — it's continuous background work."
      },
      {
        "type": "single",
        "q": "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
        "opts": [
          "The Sprint length stays unchanged, and the team continuously learns and adapts",
          "The Sprint is extended temporarily, with lessons taken to avoid repeating it",
          "The Sprint is extended, and future Sprints adopt this new, longer duration"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Sprint's fixed length is never extended; the team simply adapts, learns, and carries lessons forward.",
          "Incorrect: Sprints are not extended even temporarily to finish outstanding work.",
          "Incorrect: an unfinished Sprint does not reset the Sprint length going forward either."
        ],
        "trap": "A Sprint's timebox is never extended, no matter how much work remains unfinished — that consistency is what makes Sprints a reliable cadence."
      },
      {
        "type": "single",
        "q": "When must the Product Owner be present at the Daily Scrum?",
        "opts": [
          "Whenever they need to represent stakeholders' point of view",
          "Whenever the Scrum Master asks them to attend",
          "Whenever there are impediments to discuss",
          "When the Product Owner is actively working on items from the Sprint Backlog"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrect: representing stakeholders isn't the reason for a Product Owner's presence at this internal Developers' event.",
          "Incorrect: the Scrum Master doesn't summon the Product Owner to the Daily Scrum.",
          "Incorrect: impediments are the Developers' and Scrum Master's concern to work through, not a trigger for mandatory PO attendance.",
          "Correct: if the Product Owner is actively working on Sprint Backlog items, they take part as a Developer, like anyone else doing that work."
        ],
        "trap": "The Product Owner's Daily Scrum attendance isn't mandatory by role — it becomes relevant only if they are hands-on with Sprint Backlog work, in which case they participate as a Developer."
      },
      {
        "type": "multi",
        "q": "As Sprint Planning progresses, the Developers realize the workload may be greater than their capacity. Which two are valid actions?",
        "opts": [
          "Recruit additional Developers before the work can begin",
          "Make the Scrum Team aware, start the Sprint, and monitor progress",
          "Have the Developers work overtime during this Sprint",
          "Remove or change some of the selected Product Backlog items"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrect: recruiting new Developers mid-Planning is not a realistic or Guide-supported response to a capacity mismatch.",
          "Correct: transparency about the risk, followed by starting the Sprint and monitoring progress, is a valid empirical response.",
          "Incorrect: working overtime is not a sustainable or Guide-supported practice for handling overcommitment.",
          "Correct: adjusting the selected scope is a direct, healthy way to bring the plan back in line with actual capacity."
        ],
        "trap": "The empirical answer to overcommitment is transparency and adjusting scope, not recruiting people on the spot or asking for overtime."
      },
      {
        "type": "multi",
        "q": "The Daily Scrum normally happens every day. What would be three key concerns if its frequency were lowered to every two or three days?",
        "opts": [
          "The Scrum Master loses the ability to update a Gantt Chart properly",
          "Too much time is spent updating the Scrum board before the meeting",
          "Opportunities to inspect and adapt the Sprint Backlog are lost",
          "Impediments are raised and resolved more slowly",
          "The Sprint Backlog may become inaccurate"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "exp": [
          "Incorrect: Gantt charts have no place in Scrum at all, so this isn't a genuine concern.",
          "Incorrect: board-updating overhead isn't the central risk the Guide associates with skipping days.",
          "Correct: fewer Daily Scrums mean fewer chances to inspect progress and adapt the plan toward the Sprint Goal.",
          "Correct: impediments surface and get resolved more slowly if the team isn't checking in daily.",
          "Correct: with less frequent inspection, the Sprint Backlog is more likely to drift out of sync with reality."
        ],
        "trap": "The real cost of skipping days is losing frequent inspection-and-adaptation cycles, not paperwork or reporting overhead."
      },
      {
        "type": "tf",
        "q": "The Sprint Review is considered a 'formal meeting.'",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Guide frames the Sprint Review as a working, collaborative session, not a formal meeting.",
          "Correct: the Sprint Review is a working session of inspection and adaptation, not a formal status meeting."
        ],
        "trap": "Calling the Sprint Review 'formal' invites treating it like an approval ceremony, which the Guide explicitly rejects."
      },
      {
        "type": "single",
        "q": "Which of the following statements about the Daily Scrum is NOT correct?",
        "opts": [
          "It is moderated by the Product Owner",
          "The Developers have to participate in it",
          "It is a timeboxed event, 15 minutes maximum",
          "It should be held at the same time and place throughout the Sprint"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct — this is the false statement: the Daily Scrum is not moderated by the Product Owner; it belongs to the Developers.",
          "Incorrect as an answer here: this statement is actually true — the Developers do participate.",
          "Incorrect as an answer here: this statement is true — 15 minutes is the fixed maximum.",
          "Incorrect as an answer here: this statement is true — the Guide recommends the same time and place to reduce complexity."
        ],
        "trap": "The Daily Scrum has no formal moderator role at all, let alone one held by the Product Owner."
      },
      {
        "type": "single",
        "q": "Under what circumstance can a Sprint be cancelled?",
        "opts": [
          "When the Sprint Goal becomes obsolete",
          "Whenever the Developers ask the Product Owner to do so",
          "Whenever a Business Analyst asks the Product Owner to do so",
          "Only when the Sprint Goal becomes obsolete and no items are yet 'Done'"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Guide names an obsolete Sprint Goal as the reason a Sprint might be cancelled.",
          "Incorrect: the Developers asking is not by itself the criterion; cancellation is about the Sprint Goal's continued relevance, and is the Product Owner's call.",
          "Incorrect: a Business Analyst has no special standing to trigger cancellation.",
          "Incorrect: cancellation isn't conditioned on whether any items are already 'Done' — the trigger is the Sprint Goal becoming obsolete."
        ],
        "trap": "The trigger for cancellation is the Sprint Goal becoming obsolete, not a vote from the Developers or an arbitrary added condition about completed work."
      },
      {
        "type": "multi",
        "q": "Which of the following are NOT required by Scrum? (select all that apply)",
        "opts": [
          "Using User Stories",
          "Having a Product Owner",
          "Answering the 'three questions' format in the Daily Scrum",
          "Having timeboxed Scrum events",
          "Having a Sprint Backlog",
          "Using story points"
        ],
        "correct": [
          0,
          2,
          5
        ],
        "exp": [
          "Correct: User Stories are a popular but optional practice, not required by the Guide.",
          "Incorrect as an answer here: having a Product Owner is required — it's one of Scrum's three accountabilities.",
          "Correct: the 'three questions' format is a common practice, not a Guide requirement for the Daily Scrum.",
          "Incorrect as an answer here: timeboxed events are indeed required by Scrum.",
          "Incorrect as an answer here: the Sprint Backlog is a required artifact.",
          "Correct: story points are one possible estimation technique, never mandated by the Guide."
        ],
        "trap": "Popular practices like User Stories, the 'three questions', and story points are optional techniques teams commonly adopt — none of them is actually required by the Scrum Guide."
      },
      {
        "type": "tf",
        "q": "The Scrum Master can decide which Scrum Events are required for a particular project.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Scrum Master does not get to pick and choose which prescribed events apply.",
          "Correct: all of Scrum's events are part of the framework; the Scrum Master's job is to ensure they happen and stay productive, not to decide whether they're needed."
        ],
        "trap": "None of Scrum's events are optional extras a Scrum Master can drop — their job is to make each one effective, not to decide if it's 'required'."
      },
      {
        "type": "multi",
        "q": "Which two of the following are typical outcomes of a Daily Scrum?",
        "opts": [
          "The team is clear on next steps toward the Sprint Goal",
          "Tasks get assigned to individual Developers",
          "Impediments are surfaced so they can be followed up on",
          "A newly refined 'Daily Backlog' is produced"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: clarity on next steps toward the Sprint Goal is exactly what the Daily Scrum is meant to produce.",
          "Incorrect: the Daily Scrum is not a task-assignment meeting; the Developers self-manage who does what.",
          "Correct: surfacing impediments so they can be addressed is a typical, valuable outcome of the Daily Scrum.",
          "Incorrect: there is no such artifact as a 'Daily Backlog' in Scrum; the Sprint Backlog is simply updated as needed."
        ],
        "trap": "The Daily Scrum surfaces plans and impediments for the team itself — it is not a task-assignment ritual, and it produces no separate 'Daily Backlog' artifact."
      },
      {
        "type": "single",
        "q": "Which Scrum event can be compared to a 'lessons learned' meeting?",
        "opts": [
          "The Sprint Review",
          "The Daily Scrum",
          "The Sprint Retrospective",
          "Sprint Planning"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrect: the Sprint Review inspects the product Increment, not the team's own way of working.",
          "Incorrect: the Daily Scrum is about daily progress toward the Sprint Goal, not reflecting on lessons learned.",
          "Correct: the Sprint Retrospective is where the team reflects on how it works and identifies improvements — closest to a 'lessons learned' session.",
          "Incorrect: Sprint Planning looks forward to the upcoming Sprint, not backward at lessons learned."
        ],
        "trap": "If you're used to traditional project terminology, map 'lessons learned' onto the Sprint Retrospective, the event dedicated to process improvement."
      },
      {
        "type": "single",
        "q": "Which of the following is required by Scrum?",
        "opts": [
          "Sprint Retrospective",
          "Developers must physically stand up during the Daily Scrum",
          "A Sprint Burndown Chart",
          "Release Planning"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Sprint Retrospective is one of Scrum's four required, timeboxed events.",
          "Incorrect: standing up is a popular convention (hence 'stand-up'), never a Guide requirement.",
          "Incorrect: burndown charts are just an example forecasting practice, not required.",
          "Incorrect: 'Release Planning' is not a Scrum Guide concept at all."
        ],
        "trap": "The nickname 'stand-up' for the Daily Scrum is just a common habit — nothing in the Guide requires anyone to physically stand."
      },
      {
        "type": "single",
        "q": "What does it mean for a Scrum event to have a \"timebox\"?",
        "opts": [
          "It has a mandatory minimum duration",
          "It has a maximum duration fixed in advance that must not be exceeded",
          "It is always held at the same time of day",
          "It must finish before an externally imposed deadline"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: a timebox never requires a minimum duration; the event can end earlier.",
          "Correct: a timebox is a maximum duration fixed in advance that may never be exceeded.",
          "Incorrect: this confuses a timebox with a fixed time slot.",
          "Incorrect: this confuses a timebox with an externally imposed deadline."
        ],
        "trap": "A timebox only sets a maximum, never a mandatory minimum: the event may end early, but it must never run longer than the limit."
      },
      {
        "type": "single",
        "q": "What is the maximum timebox of the Daily Scrum, regardless of Sprint length?",
        "opts": [
          "30 minutes",
          "15 minutes, always",
          "1 hour, for one-month Sprints",
          "It scales proportionally with Sprint length"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: that figure does not appear in the Guide for the Daily Scrum.",
          "Correct: the Daily Scrum is always capped at 15 minutes, regardless of Sprint length.",
          "Incorrect: that figure does not apply to the Daily Scrum.",
          "Incorrect: this is the one Scrum event whose timebox does NOT scale with Sprint duration."
        ],
        "trap": "Sprint Planning, Review, and Retrospective all scale down for shorter Sprints; the Daily Scrum is the exception — always 15 minutes max."
      },
      {
        "type": "single",
        "q": "Who has the authority to cancel a Sprint?",
        "opts": [
          "The Scrum Master",
          "The whole Scrum Team by consensus",
          "Only the Product Owner",
          "The main stakeholders"
        ],
        "correct": 2,
        "exp": [
          "Incorrect: the Scrum Master does not hold this authority.",
          "Incorrect: cancelling a Sprint is not a team consensus decision.",
          "Correct: the Scrum Guide gives this authority exclusively to the Product Owner.",
          "Incorrect: stakeholders have no formal authority over the Sprint."
        ],
        "trap": "Sprint cancellation is a unilateral Product Owner decision — it does not require anyone else's consent, though the PO may consult others."
      },
      {
        "type": "single",
        "q": "What is the maximum timebox of the Sprint Retrospective for a one-month Sprint?",
        "opts": [
          "1 hour",
          "2 hours",
          "3 hours",
          "4 hours"
        ],
        "correct": 2,
        "exp": [
          "Incorrect.",
          "Incorrect.",
          "Correct: 3 hours is the maximum for a one-month Sprint.",
          "Incorrect: 4 hours is the maximum for the Sprint Review, not the Retrospective."
        ],
        "trap": "Memorize the order for a one-month Sprint: Planning 8h, Review 4h, Retrospective 3h — the Retrospective is not the longest event."
      },
      {
        "type": "single",
        "q": "When does a new Sprint begin?",
        "opts": [
          "One week after the previous one ends, to review results",
          "Immediately after the previous Sprint ends",
          "Whenever the Product Owner decides, at their discretion",
          "After a preparatory \"Sprint 0\""
        ],
        "correct": 1,
        "exp": [
          "Incorrect: there is no review gap between Sprints.",
          "Correct: a new Sprint starts right after the previous one concludes.",
          "Incorrect: the cadence is continuous, not left to anyone's discretion.",
          "Incorrect: \"Sprint 0\" does not exist in the Scrum Guide."
        ],
        "trap": "There is no gap between Sprints and no preparatory \"Sprint 0\" — this is one of the most common distractors on exams."
      },
      {
        "type": "single",
        "q": "What is the maximum timebox of Sprint Planning for a one-month Sprint?",
        "opts": [
          "4 hours",
          "8 hours",
          "15 minutes",
          "3 hours"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: that is the Sprint Review's maximum.",
          "Correct: 8 hours is the maximum for a one-month Sprint.",
          "Incorrect: that is the Daily Scrum's timebox.",
          "Incorrect: that is the Retrospective's maximum."
        ],
        "trap": "Don't swap the numbers: Planning = 8h, Review = 4h, Retrospective = 3h, for a one-month Sprint."
      },
      {
        "type": "multi",
        "q": "Which three topics are addressed during Sprint Planning?",
        "opts": [
          "Why this Sprint is valuable",
          "Who will attend the Sprint Review",
          "What can be done this Sprint",
          "How the chosen work will be accomplished"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: this is the 'Why' topic.",
          "Incorrect: attendance at the Review is not one of the three Planning topics.",
          "Correct: this is the 'What' topic.",
          "Correct: this is the 'How' topic."
        ],
        "trap": "The 'Why' topic was an explicit addition in the 2020 Guide; any answer describing only two topics is missing it."
      },
      {
        "type": "multi",
        "q": "Which statements about the Sprint are correct?",
        "opts": [
          "It has a fixed duration of one month or less",
          "Changes that endanger the Sprint Goal are allowed if the Product Owner approves them",
          "Quality does not decrease during the Sprint",
          "Scope may be clarified and renegotiated with the Product Owner as more is learned"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct.",
          "Incorrect: no approval, not even from the Product Owner, may justify endangering the Sprint Goal.",
          "Correct.",
          "Correct."
        ],
        "trap": "No approval — not even from the Product Owner — can justify a change that endangers the Sprint Goal; that protection has no exceptions."
      },
      {
        "type": "multi",
        "q": "Which statements about the Sprint Review are correct?",
        "opts": [
          "It is a collaborative working session, not just a status meeting",
          "The Scrum Team and key stakeholders take part",
          "It formally authorizes releasing the Increment to production",
          "It is used to inspect the outcome of the Sprint and adapt the Product Backlog"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correct.",
          "Correct.",
          "Incorrect: the Scrum Guide explicitly denies that the Review is a release gate.",
          "Correct."
        ],
        "trap": "The Sprint Review is inspection-and-adaptation of the product, never a formal go/no-go approval for release."
      },
      {
        "type": "tf",
        "q": "The Sprint Review is a formal approval gate that must be passed before an Increment can be released to users.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: the Guide explicitly states the Sprint Review is not meant to be a gate to releasing value."
        ],
        "trap": "It's a working session of inspection and adaptation, not a Waterfall-style approval gate."
      },
      {
        "type": "tf",
        "q": "The Sprint Retrospective is exclusively for the Developers; the Product Owner does not take part.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: the whole Scrum Team takes part, Product Owner included, as an equal member."
        ],
        "trap": "No internal team event excludes the Product Owner — they participate the same as Developers and the Scrum Master."
      },
      {
        "type": "tf",
        "q": "The Daily Scrum's timebox scales with Sprint length, just like Planning, Review, and Retrospective.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: this is the one exception — it never scales.",
          "Correct: the Daily Scrum is always capped at 15 minutes, no matter how long the Sprint is."
        ],
        "trap": "Planning, Review, and Retrospective scale down for shorter Sprints; the Daily Scrum timebox is fixed at 15 minutes regardless."
      }
    ]
  },
  {
    "id": "artefactes",
    "name": "Artifacts and Their Commitments",
    "theory": "<h3>What the Scrum artifacts are</h3><p>Scrum's artifacts represent work or value, and each one is designed to maximize the transparency of information that the Scrum Team and stakeholders need to see. There are three: the <b>Product Backlog</b>, the <b>Sprint Backlog</b>, and the <b>Increment</b>. Each artifact carries a <b>commitment</b> that adds extra information and gives the team something concrete to measure progress against: the Product Backlog's commitment is the <b>Product Goal</b>, the Sprint Backlog's is the <b>Sprint Goal</b>, and the Increment's is the <b>Definition of Done</b>.</p><h3>Product Backlog and the Product Goal</h3><p>The Product Backlog is an <b>emergent, ordered</b> list of what is needed to improve the product — never described as \"prioritized\" and never finished; it is the single source of work undertaken by the Scrum Team, and it keeps evolving as the product and its environment change. The <b>Product Goal</b> describes a future state of the product that can serve as a target for the Scrum Team to plan against. It is a <b>long-term</b> commitment: the current Product Goal must be met (or deliberately abandoned) before the team takes on the next one. The Product Backlog itself is the emerging, ordered expression of that Product Goal.</p><h3>Sprint Backlog and the Sprint Goal</h3><p>The Sprint Backlog is a plan made <b>by and for the Developers</b>: it brings together the Sprint Goal (the why), the Product Backlog items selected for the Sprint (the what), and an actionable plan for delivering the Increment (the how). It is a highly visible, real-time picture of the work the Developers plan to accomplish, and it is updated throughout the Sprint as more is learned — only the Developers can change their Sprint Backlog during the Sprint. The <b>Sprint Goal</b> is the single objective for the Sprint, crafted during Sprint Planning as a commitment on top of the selected items; it gives the work coherence and focus, encouraging the team to work together rather than on separate initiatives. Because it allows some flexibility about the exact work needed to achieve it, Developers can renegotiate the scope with the Product Owner mid-Sprint if the work turns out to be different than expected — without ever changing the Sprint Goal itself.</p><h3>Increment and the Definition of Done</h3><p>An Increment is a concrete, verified stepping stone toward the Product Goal: each one is additive to all prior Increments and thoroughly verified so that all the Increments together still work. Multiple Increments can be created within a single Sprint, and an Increment can be delivered to stakeholders before the Sprint ends — the Sprint Review should never be treated as the sole gate for releasing value. A Product Backlog item only becomes part of the Increment once it meets the <b>Definition of Done</b>, the commitment tied to this artifact that gives everyone a shared understanding of what \"done\" means. (The Definition of Done is covered in depth in its own dedicated topic.)</p><h3>Common exam traps</h3><ul><li>Mixing up an artifact with its commitment: the Product Backlog does not \"equal\" the Product Goal, it simply carries it as a commitment — the same logic applies to Sprint Backlog/Sprint Goal and Increment/Definition of Done.</li><li>Assuming the Product Backlog can ever be \"complete\" or that it is a fixed list: it is always emergent and ordered, never prioritized and never closed.</li><li>Believing only one Increment can exist per Sprint, or that the Sprint Review is the only moment value can be released: the Scrum Guide explicitly rejects both ideas.</li><li>Thinking the Product Owner (or anyone outside the Developers) can change the Sprint Backlog mid-Sprint: that authority belongs to the Developers alone.</li><li>Confusing the Sprint Goal with just the list of selected items: the Sprint Goal is a commitment to coherence and purpose, not a task list.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "A new Product Owner wonders whether stability, performance, documentation, and fix-related work belong on the Product Backlog alongside user-facing features. What is the best answer?",
        "opts": [
          "Yes, the Product Backlog is the single source of work for the product, so all of these belong on it",
          "No, only user-facing features belong on the Product Backlog; the rest is managed separately by the Developers"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Product Backlog is the single source of work undertaken by the Scrum Team, so any kind of required work — features, non-functional needs, fixes, documentation — belongs on it for transparency.",
          "Incorrect: splitting work into a separate, hidden list breaks the Product Backlog's role as the single source of work and hides it from the Product Owner's ordering."
        ],
        "trap": "Assuming the Product Backlog is only for user-facing features is a common misconception — anything needed to improve the product belongs there."
      },
      {
        "type": "multi",
        "q": "Which two of the following are effective ways for a Scrum Team to keep non-functional requirements visible and addressed? (choose the best two)",
        "opts": [
          "Add them to the Product Backlog to ensure transparency",
          "Keep them on a separate, informal list on the team's board",
          "Add them to the Definition of Done so the work is honored every Sprint",
          "Assign them exclusively to a specialized sub-team"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: putting them on the Product Backlog keeps them transparent and part of the single source of work.",
          "Incorrect: an informal side list undermines the Product Backlog as the single source of work.",
          "Correct: baking non-functional needs into the Definition of Done ensures every Increment honors them automatically.",
          "Incorrect: Scrum Teams don't create specialized sub-teams; that would break cross-functionality and self-management."
        ],
        "trap": "Non-functional requirements should be made transparent through the Product Backlog and/or Definition of Done, not tracked informally or delegated to a sub-team."
      },
      {
        "type": "tf",
        "q": "The Sprint Backlog is a result of Sprint Planning, and it includes the Sprint Goal.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Sprint Backlog is composed during Sprint Planning and combines the Sprint Goal, the selected Product Backlog items, and the plan for delivering them.",
          "Incorrect: this is exactly how the Guide describes the Sprint Backlog."
        ],
        "trap": "Remember the Sprint Backlog has three parts: the Sprint Goal (why), the selected items (what), and the plan (how)."
      },
      {
        "type": "multi",
        "q": "Which three of the following best describe the Product Backlog?",
        "opts": [
          "It is managed by the Product Owner",
          "It is visible only to the Product Owner and stakeholders",
          "It is ordered based on value, dependencies, and risk, among other factors",
          "It is an inventory of things to be done for the product"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: the Product Owner is accountable for the Product Backlog, even if some work is delegated.",
          "Incorrect: the Product Backlog should be visible to the whole Scrum Team, and appropriately to stakeholders too — not hidden from the Developers.",
          "Correct: the Product Owner may weigh value, risk, dependencies, and other factors when ordering the backlog.",
          "Correct: at its core, the Product Backlog is the inventory of everything needed to improve the product."
        ],
        "trap": "The Product Backlog must be visible to the whole Scrum Team, not restricted to the Product Owner and stakeholders alone."
      },
      {
        "type": "single",
        "q": "What are the three formal artifacts of Scrum?",
        "opts": [
          "The Product Backlog, the Sprint Backlog, and the Increment",
          "The Product Goal, the Sprint Goal, and the Definition of Done",
          "The Roadmap, the Backlog, and the Release Plan",
          "The product Vision, the Backlog, and the Sprint Backlog"
        ],
        "correct": 0,
        "exp": [
          "Correct: these are the three formal artifacts defined by the Scrum Guide.",
          "Incorrect: these are the three commitments tied to the artifacts, not the artifacts themselves.",
          "Incorrect: none of these appear as formal Scrum artifacts in the Guide.",
          "Incorrect: this mixes an informal concept (Vision) with real artifacts, and leaves out the Product Backlog and the Increment."
        ],
        "trap": "Don't confuse an 'artifact' with its associated 'commitment' — they are different concepts, even though each artifact always carries exactly one."
      },
      {
        "type": "single",
        "q": "Which commitment is associated with the Product Backlog?",
        "opts": [
          "The Sprint Goal",
          "The Definition of Done",
          "The Product Goal",
          "The Increment"
        ],
        "correct": 2,
        "exp": [
          "Incorrect: the Sprint Goal is the commitment of the Sprint Backlog, not the Product Backlog.",
          "Incorrect: the Definition of Done is the commitment of the Increment.",
          "Correct: the Product Backlog carries the Product Goal as its commitment.",
          "Incorrect: the Increment is itself an artifact, not a commitment."
        ],
        "trap": "Always pair them the same way: Product Backlog-Product Goal, Sprint Backlog-Sprint Goal, Increment-Definition of Done."
      },
      {
        "type": "single",
        "q": "How does the Scrum Guide describe the Product Backlog?",
        "opts": [
          "A fixed, prioritized list of requirements approved by stakeholders",
          "An emergent, ordered list of everything needed to improve the product",
          "A detailed technical specification document",
          "A release plan with fixed delivery dates"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide never calls it 'fixed' or 'prioritized' — it uses 'emergent' and 'ordered'.",
          "Correct: this is exactly how the Scrum Guide describes the Product Backlog.",
          "Incorrect: it is not a technical specification, but an ordered list of work.",
          "Incorrect: the Scrum Guide does not define a release plan with fixed dates as an artifact."
        ],
        "trap": "Key exact wording: 'emergent' and 'ordered' — never 'fixed' or 'prioritized'."
      },
      {
        "type": "single",
        "q": "What is the Product Goal?",
        "opts": [
          "A short-term objective that is only valid for the current Sprint",
          "A future state of the product that serves as a long-term target for the Scrum Team",
          "A detailed list of tasks for the Developers",
          "A document approved once and never revisited"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: that describes the Sprint Goal, not the Product Goal.",
          "Correct: the Product Goal describes a future state of the product and is a long-term commitment.",
          "Incorrect: that description is closer to the Sprint Backlog.",
          "Incorrect: the Product Goal is revisited and replaced with a new one once it is met or abandoned."
        ],
        "trap": "Product Goal = long-term; Sprint Goal = short-term, valid only for that one Sprint."
      },
      {
        "type": "tf",
        "q": "The Product Backlog can be considered complete at some point during product development.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Product Backlog is emergent by nature and keeps evolving as the product and its environment change.",
          "Correct: the Guide states the Product Backlog is never complete; it only presents what is currently known and best understood."
        ],
        "trap": "Being 'emergent' means the Product Backlog is never closed or considered finished."
      },
      {
        "type": "single",
        "q": "Who can modify the Sprint Backlog during the Sprint?",
        "opts": [
          "Only the Developers",
          "The Product Owner, whenever priorities change",
          "The Scrum Master, to keep the board up to date",
          "Any stakeholder who requests it"
        ],
        "correct": 0,
        "exp": [
          "Correct: the Sprint Backlog is a plan by and for the Developers, and only they can change it during the Sprint.",
          "Incorrect: the PO can provide context or renegotiate scope, but does not directly modify the Sprint Backlog.",
          "Incorrect: the Scrum Master's role is to facilitate, not to manage the Sprint Backlog's content.",
          "Incorrect: external stakeholders have no authority to change the Sprint Backlog."
        ],
        "trap": "The Sprint Backlog is exclusively owned and operated by the Developers during the Sprint."
      },
      {
        "type": "multi",
        "q": "Which statements about the Sprint Goal are correct?",
        "opts": [
          "It is created during Sprint Planning as a commitment on top of the selected Product Backlog items",
          "It gives the team coherence and focus, encouraging them to work together rather than on separate initiatives",
          "It is a fixed list of tasks that can never be changed",
          "It allows some flexibility regarding the exact work needed to achieve it"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correct: the Sprint Goal is crafted during Sprint Planning.",
          "Correct: this is exactly the function the Sprint Goal serves.",
          "Incorrect: the Sprint Goal is not a task list, it's a commitment to a purpose; the task list is the Sprint Backlog, which can evolve.",
          "Correct: the Sprint Goal leaves room for how exactly to achieve it, even though the goal itself stays fixed."
        ],
        "trap": "Don't confuse the Sprint Goal (a commitment to purpose) with the list of selected items (which can change)."
      },
      {
        "type": "single",
        "q": "If, mid-Sprint, the Developers discover that the work is different than expected, what should they do?",
        "opts": [
          "Abandon the Sprint Goal and set a new one immediately",
          "Renegotiate the scope of the Sprint Backlog with the Product Owner without changing the Sprint Goal",
          "Ignore the change and stick to the original plan no matter what",
          "Wait until the Sprint Review to report any change"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Sprint Goal is not abandoned mid-Sprint; it exists precisely to keep the team focused.",
          "Correct: Developers can renegotiate scope with the PO as they learn more, while the Sprint Goal itself stays unchanged.",
          "Incorrect: Scrum relies on continuous adaptation, not on ignoring new information.",
          "Incorrect: adapting the plan happens throughout the Sprint, not only at the Sprint Review."
        ],
        "trap": "The scope of the Sprint Backlog is negotiable during the Sprint; the Sprint Goal, once set, is not."
      },
      {
        "type": "multi",
        "q": "Which statements about the Increment are correct?",
        "opts": [
          "It can be delivered to stakeholders before the Sprint ends",
          "Only one Increment can be created per Sprint",
          "Each Increment is additive to the prior ones, and all of them must be verified to work together",
          "The Sprint Review is the only moment at which value can be released to stakeholders"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: value does not need to wait until the end of the Sprint to be delivered.",
          "Incorrect: multiple Increments can be created within a single Sprint.",
          "Correct: Increments are cumulative and are thoroughly verified together.",
          "Incorrect: the Scrum Guide explicitly rejects this idea; the Sprint Review is not the only way to release value."
        ],
        "trap": "Two classic traps: assuming there is only one Increment per Sprint, and assuming the Sprint Review is the only chance to deliver value."
      },
      {
        "type": "multi",
        "q": "Which artifact-commitment pairs are correct?",
        "opts": [
          "Product Backlog - Product Goal",
          "Sprint Backlog - Sprint Goal",
          "Increment - Definition of Done",
          "Sprint Backlog - Definition of Done"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correct: this is the right artifact-commitment pairing.",
          "Correct: this is the right artifact-commitment pairing.",
          "Correct: this is the right artifact-commitment pairing.",
          "Incorrect: the Definition of Done is the commitment of the Increment, not of the Sprint Backlog."
        ],
        "trap": "Each of the three artifacts has exactly one commitment of its own: don't cross-match the pairs."
      },
      {
        "type": "tf",
        "q": "The current Product Goal must be fulfilled or formally abandoned before the Scrum Team takes on the next one.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the current Product Goal must be fulfilled (or formally abandoned) before the Scrum Team takes on the next one.",
          "Incorrect: the Guide is clear that Product Goals are not pursued in parallel without closing out the prior one."
        ],
        "trap": "The Product Goal is a sequential, long-term commitment: teams don't run several active Product Goals at once."
      }
    ]
  },
  {
    "id": "definition-of-done",
    "name": "Definition of Done",
    "theory": "<h3>What it is</h3><p>The Definition of Done (DoD) is a formal description of the state the Increment must reach to meet the quality measures required for the product. It is the <b>commitment for the Increment</b> artifact, in the same way the Product Goal is the commitment for the Product Backlog and the Sprint Goal is the commitment for the Sprint Backlog.</p><h3>When an Increment is 'born'</h3><p>The moment a Product Backlog item meets the Definition of Done, an Increment is born. Each new Increment is added to all prior ones and thoroughly verified, ensuring that all Increments work together.</p><h3>What happens when an item fails the DoD</h3><ul><li>If a Product Backlog item does not meet the Definition of Done, it cannot be released, and it cannot even be presented at the Sprint Review.</li><li>Instead, it goes back to the Product Backlog for future consideration.</li></ul><h3>Organizational standard vs. a team-created DoD</h3><ul><li>If a Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum.</li><li>If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product.</li><li>The Developers are required to conform to the Definition of Done.</li><li>If multiple Scrum Teams are working together on one product, they must mutually define and comply with the same Definition of Done.</li></ul><h3>How it relates to transparency</h3><p>The Definition of Done creates transparency by giving everyone a shared understanding of what work was completed as part of the Increment. An item that fails the DoD cannot be represented as finished to anyone, inside or outside the team.</p><h3>Common exam trap</h3><p>Do not confuse the Definition of Done with the 'acceptance criteria' of a single Product Backlog item: acceptance criteria are specific to one item, while the DoD is a cross-cutting quality standard applied to the whole Increment. The DoD is also not negotiable with the Product Owner or stakeholders, and it does not flex from Sprint to Sprint for convenience — it is a stable quality floor, though it can be improved over time.</p>",
    "questions": [
      {
        "type": "tf",
        "q": "Only the Developers can influence the Definition of Done; no one else has any say in it.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: the whole Scrum Team can be involved in creating the Definition of Done, and if the organization has a quality standard, all Scrum Teams must follow it as a minimum — it isn't solely a Developer decision."
        ],
        "trap": "The Definition of Done can be shaped by an organizational standard or the whole Scrum Team, not just unilaterally by the Developers."
      },
      {
        "type": "single",
        "q": "What is one way a Scrum Team can reduce technical debt over time?",
        "opts": [
          "Schedule a dedicated hardening Sprint once the debt becomes unmanageable",
          "Improve the Definition of Done so quality work is done as part of every Increment",
          "Delegate all quality concerns to an external QA department"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: hardening Sprints are not a Scrum Guide concept; deferring quality work only lets technical debt accumulate further.",
          "Correct: strengthening the Definition of Done ensures quality practices happen continuously, which is how Scrum addresses technical debt.",
          "Incorrect: quality is the responsibility of the whole Scrum Team, not something to outsource entirely."
        ],
        "trap": "There is no such thing as a 'hardening Sprint' in Scrum — quality is built in continuously via the Definition of Done, not fixed later in a special Sprint."
      },
      {
        "type": "multi",
        "q": "Which three phrases best describe the purpose of a Definition of Done? (choose the best three)",
        "opts": [
          "It tracks the percentage complete of a Product Backlog item",
          "It defines what it takes for an Increment to be ready for release",
          "It creates transparency over the work inspected at the Sprint Review",
          "It guides the Developers in creating a forecast at Sprint Planning",
          "It provides a template for what must be included in project documentation"
        ],
        "correct": [
          1,
          2,
          3
        ],
        "exp": [
          "Incorrect: the DoD is a binary quality bar (met or not met), not a percentage-complete tracker.",
          "Correct: the DoD defines the quality state an Increment must reach to be considered ready.",
          "Correct: a shared DoD gives everyone the same understanding of what was actually completed, which is inspected at the Sprint Review.",
          "Correct: knowing the DoD helps the Developers judge how much work they can realistically forecast for the Sprint.",
          "Incorrect: the DoD is a quality standard, not a documentation template."
        ],
        "trap": "The DoD is not a progress-tracking percentage or a documentation checklist — it's a shared quality bar that enables transparency and realistic forecasting."
      },
      {
        "type": "single",
        "q": "What is the Definition of Done according to the Scrum Guide?",
        "opts": [
          "The set of acceptance criteria specific to one Product Backlog item",
          "A formal description of the state the Increment must reach to meet the quality measures required for the product",
          "A document the Product Owner signs at the end of each Sprint to approve the work",
          "The list of pending technical tasks that appears in the Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: acceptance criteria belong to one specific item; the DoD is a quality standard that applies to the whole Increment.",
          "Correct: the Guide defines the DoD as a formal description of the state of the Increment when it meets the quality measures required for the product.",
          "Incorrect: the Guide never mentions a sign-off by the Product Owner; meeting the DoD does not depend on a later human approval.",
          "Incorrect: that would describe planned work in the Sprint Backlog, not the DoD."
        ],
        "trap": "Mixing up the DoD (a quality standard for the whole Increment) with a sign-off document or a task list."
      },
      {
        "type": "tf",
        "q": "If multiple Scrum Teams work together on the same product, each team can keep its own Definition of Done without needing to coordinate with the others.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Guide requires exactly the opposite when several teams share one product.",
          "Correct: the Guide states that if multiple Scrum Teams are working together on one product, they must mutually define and comply with the same Definition of Done."
        ],
        "trap": "When several teams work on one shared product, the DoD must be a single, shared standard, not each team's own internal rule."
      },
      {
        "type": "single",
        "q": "The organization has a quality standard that applies to all of its products. How does this affect the Definition of Done of a specific Scrum Team?",
        "opts": [
          "The Scrum Team can ignore it if it already has its own DoD",
          "The Scrum Team must follow it as a minimum",
          "It only applies to the product's first Increment",
          "It has no bearing on the team's DoD"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: an organizational standard cannot be dropped just because the team has its own definition.",
          "Correct: the Guide states that if the DoD is part of the organization's standards, all Scrum Teams must follow it as a minimum.",
          "Incorrect: the Guide sets no such time limitation.",
          "Incorrect: there is a direct, mandatory relationship."
        ],
        "trap": "An organizational standard acts as a mandatory floor, never as something optional or dismissible."
      },
      {
        "type": "single",
        "q": "Who is required to conform to the Definition of Done when building the Increment?",
        "opts": [
          "The Product Owner, when accepting the Increment",
          "The Developers",
          "The stakeholders, during the Sprint Review",
          "The Scrum Master, when closing the Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide does not describe a formal PO sign-off as the mechanism for meeting the DoD.",
          "Correct: the Guide explicitly states that the Developers are required to conform to the Definition of Done.",
          "Incorrect: stakeholders take part in the review, but they are not the ones who must conform to the DoD while building the work.",
          "Incorrect: the Scrum Master does not build the Increment or validate its compliance with the DoD."
        ],
        "trap": "Meeting the DoD is the responsibility of those who build the Increment, the Developers, not a later external validation."
      },
      {
        "type": "tf",
        "q": "A Product Backlog item that does not meet the Definition of Done can be presented at the Sprint Review as long as the team explains why it is not finished.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Guide allows no exception based on giving a reason.",
          "Correct: the Guide is explicit — if an item does not meet the DoD, it cannot even be presented at the Sprint Review; it goes back to the Product Backlog."
        ],
        "trap": "'Cannot even be presented at the Sprint Review' allows no exceptions or explanations."
      },
      {
        "type": "single",
        "q": "What should a Scrum Team do if its organization has no Definition of Done established as a standard?",
        "opts": [
          "Work without any Definition of Done until the organization defines one",
          "Create a Definition of Done appropriate for its product",
          "Adopt another team's DoD unchanged without adapting it",
          "Let each Developer individually decide when an item is done"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the DoD is never optional, not even temporarily.",
          "Correct: the Guide states that if no organizational standard exists, the Scrum Team must create a Definition of Done appropriate for the product.",
          "Incorrect: the Guide never suggests copying another team's DoD unchanged instead of tailoring one to the product.",
          "Incorrect: the DoD is a team-level standard, not an individual Developer's call."
        ],
        "trap": "The DoD is never optional: absent an organizational standard, creating one is the Scrum Team's own responsibility."
      },
      {
        "type": "single",
        "q": "Of the three Scrum artifacts, which one has the Definition of Done as its associated commitment?",
        "opts": [
          "The Product Backlog",
          "The Sprint Backlog",
          "The Increment",
          "Both the Sprint Backlog and the Increment"
        ],
        "correct": 2,
        "exp": [
          "Incorrect: the Product Backlog's commitment is the Product Goal.",
          "Incorrect: the Sprint Backlog's commitment is the Sprint Goal.",
          "Correct: the Definition of Done is the commitment for the Increment.",
          "Incorrect: each artifact has exactly one commitment; it is not shared between two artifacts."
        ],
        "trap": "Each artifact has exactly one commitment: do not swap the pairs Product Goal/Product Backlog, Sprint Goal/Sprint Backlog, and DoD/Increment."
      },
      {
        "type": "tf",
        "q": "The Product Owner can agree with the Developers to relax the Definition of Done for one specific Sprint in order to meet a delivery date.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: pressure from a deadline does not authorize lowering the DoD.",
          "Correct: the DoD is not negotiable, not even with the Product Owner, and it is not adjusted for a single Sprint out of convenience."
        ],
        "trap": "Delivery-date pressure is not a valid reason to lower the DoD: it is not negotiable, not even with the Product Owner."
      },
      {
        "type": "single",
        "q": "What relationship exists between the Definition of Done and transparency in Scrum?",
        "opts": [
          "There is no direct relationship between the two concepts",
          "The DoD creates transparency by giving everyone a shared understanding of what work counts as completed in the Increment",
          "The DoD replaces the need for transparency between the team and stakeholders",
          "The DoD only affects transparency toward external stakeholders, not within the team"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide does establish an explicit link between the DoD and transparency.",
          "Correct: this reflects the DoD's purpose in the Guide — it gives everyone a shared understanding of what 'done' means.",
          "Incorrect: the DoD does not replace transparency, it is one of its mechanisms.",
          "Incorrect: the shared understanding benefits the whole Scrum Team, not only external communication."
        ],
        "trap": "The DoD is a shared-transparency mechanism for the whole Scrum Team, not just an outward-facing device for stakeholders."
      },
      {
        "type": "multi",
        "q": "A Product Backlog item does not meet the Definition of Done at the end of the Sprint. Which statements are correct according to the Scrum Guide?",
        "opts": [
          "It cannot be released",
          "It cannot even be presented at the Sprint Review",
          "It goes back to the Product Backlog for future consideration",
          "It is still counted as part of the delivered Increment, even if incomplete"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correct: an item that fails the DoD cannot be released.",
          "Correct: the Guide states it cannot even be presented at the Sprint Review.",
          "Correct: instead, it goes back to the Product Backlog for future consideration.",
          "Incorrect: only items meeting the DoD are part of the Increment; there is no 'partial Increment' category."
        ],
        "trap": "The trap option is the one suggesting it can 'partially count' as an Increment: if it fails the DoD, it simply is not part of the delivered Increment."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about the Definition of Done are correct according to the Scrum Guide?",
        "opts": [
          "The Developers are required to conform to it when building the Increment",
          "If it is an organizational standard, all Scrum Teams must comply with it as a minimum",
          "If multiple Scrum Teams work on the same product, they must mutually define and comply with the same DoD",
          "The Product Owner can unilaterally change it at any time without agreement from the rest of the Scrum Team"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correct: this reflects the Guide's statement that Developers are required to conform to the DoD.",
          "Correct: an organizational standard is always followed as a minimum.",
          "Correct: multiple teams sharing one product must define and comply with the same DoD.",
          "Incorrect: the DoD is not the Product Owner's sole property; creating and complying with it involves the whole Scrum Team."
        ],
        "trap": "The DoD is not the Product Owner's exclusive property: it cannot be imposed or changed unilaterally without the rest of the Scrum Team."
      }
    ]
  },
  {
    "id": "autogestio",
    "name": "Self-Managing Teams",
    "theory": "<h3>What self-managing means (2020 Guide)</h3><p>The Scrum Team is <b>self-managing</b>: internally, it decides <b>who</b> does <b>what</b>, <b>when</b>, and <b>how</b>. This wording replaced the 2017 term self-organizing, and the two are not interchangeable as current official terminology. No one outside the team, including the Scrum Master, assigns work to the Developers.</p><h3>One cohesive unit, no sub-teams</h3><p>A Scrum Team consists of one Scrum Master, one Product Owner, and Developers. There are no sub-teams or hierarchies within it; it operates as a single cohesive unit focused on one objective at a time, the Product Goal.</p><h3>Cross-functionality</h3><p>Developers are <b>cross-functional</b>: as a group they hold all the skills necessary to create a valuable Increment every Sprint. This does not require every individual to master every skill; cross-functionality is a property of the team as a whole, not of each member.</p><h3>Team size</h3><p>The Guide recommends a Scrum Team small enough to stay nimble yet large enough to complete significant work within a Sprint, typically <b>10 or fewer people</b>. Smaller teams tend to communicate better and be more productive. If a Scrum Team grows too large, it should consider reorganizing into multiple cohesive Scrum Teams, all still working on the same product and sharing the same Product Goal, the same Product Backlog, and the same Product Owner.</p><h3>Why it matters</h3><p>The Guide links self-management, cross-functionality, and team cohesion to greater creativity and productivity in tackling complex problems.</p><h3>Common exam traps</h3><ul><li>Treating self-managing and self-organizing as synonyms: only self-managing is current 2020 terminology.</li><li>Assuming self-management removes accountability: Developers hold each other accountable as professionals.</li><li>Thinking the Scrum Master assigns tasks or decides team membership: either would break self-management.</li><li>Believing an oversized team should split its Product Backlog: the Guide instead calls for multiple teams sharing one Product Goal, one Product Backlog, and one Product Owner.</li></ul>",
    "questions": [
      {
        "type": "tf",
        "q": "Self-management means the Scrum Team can decide for itself which Scrum events it actually needs and skip the rest.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: self-management covers who does what, when, and how within Scrum — it does not extend to opting out of Scrum's required events, which stay timeboxed and mandatory."
        ],
        "trap": "Self-management is about internal decisions on how to do the work, not a license to skip the Scrum events the framework requires."
      },
      {
        "type": "single",
        "q": "According to the 2020 Scrum Guide, what does a self-managing team decide internally?",
        "opts": [
          "Who does what, when, and how",
          "The budget allocated to each Sprint",
          "Who will act as Product Owner for the next Sprint",
          "Which alternative framework to use instead of Scrum"
        ],
        "correct": 0,
        "exp": [
          "Correct: this is the Guide's literal 2020 definition of self-management.",
          "Incorrect: the Guide does not attribute budget decisions to team self-management.",
          "Incorrect: the Product Owner is a standing accountability, not something rotated each Sprint.",
          "Incorrect: self-management does not mean choosing a different framework than Scrum."
        ],
        "trap": "The exact phrase is 'who does what, when, and how' — memorize it literally, this is a common verbatim-quote question."
      },
      {
        "type": "tf",
        "q": "Self-managing and self-organizing are interchangeable terms in the 2020 Scrum Guide.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: self-organizing was 2017 terminology; the 2020 Guide replaced it with self-managing."
        ],
        "trap": "A very common vocabulary trap: using the outdated (2017) term as if it were current."
      },
      {
        "type": "single",
        "q": "What does it mean for a Scrum Team to be cross-functional?",
        "opts": [
          "Every individual must master every required skill alone",
          "As a group, the team collectively holds the skills needed to create value each Sprint",
          "The team works on multiple products at once",
          "Members rotate roles every Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: cross-functionality does not require every individual to do everything.",
          "Correct: it is a property of the team as a whole, not of each person.",
          "Incorrect: it has nothing to do with the number of products.",
          "Incorrect: the Guide does not mention role rotation."
        ],
        "trap": "Cross-functional is a collective property of the team, not an individual requirement for each member."
      },
      {
        "type": "single",
        "q": "What does the Scrum Guide recommend regarding Scrum Team size?",
        "opts": [
          "A strict maximum of 5 people, no exceptions",
          "Small enough to stay nimble and large enough to complete significant work, typically 10 or fewer people",
          "A minimum of 15 people to guarantee skill coverage",
          "The Guide gives no size recommendation at all"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide does not set a strict maximum of 5; it cites 10 or fewer as the usual guideline.",
          "Correct: this is the 2020 Guide's guidance on Scrum Team size.",
          "Incorrect: the Guide does not recommend a minimum of 15; larger teams tend to communicate worse.",
          "Incorrect: an explicit size recommendation does exist."
        ],
        "trap": "The number '10 or fewer' is a cited guideline, not a rigid mandatory rule."
      },
      {
        "type": "single",
        "q": "When a Scrum Team becomes too large, what does the Guide recommend?",
        "opts": [
          "Add more Scrum Masters to coordinate sub-teams",
          "Consider reorganizing into multiple cohesive Scrum Teams sharing the same Product Goal, Product Backlog, and Product Owner",
          "Split the Product Backlog into several parallel backlogs",
          "Create a management layer above the Scrum Team to coordinate work"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: multiple Scrum Masters within one team is not the Guide's recommendation.",
          "Correct: this is the 2020 Guide's literal guidance for oversized teams.",
          "Incorrect: the Guide requires a single Product Backlog shared across the teams.",
          "Incorrect: no such layer exists in Scrum; it would recreate the hierarchy the framework avoids."
        ],
        "trap": "The correct scaling answer always keeps a single Product Goal, Product Backlog, and Product Owner — never multiple backlogs or new hierarchy layers."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about self-managing Scrum Teams are correct according to the 2020 Guide? (select all that apply)",
        "opts": [
          "The team internally decides who does what, when, and how",
          "The Scrum Master assigns daily tasks to the Developers",
          "There are no sub-teams or hierarchies within the Scrum Team",
          "Developers hold each other accountable as professionals"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: this is the Guide's definition of self-management.",
          "Incorrect: this would break self-management; the Scrum Master does not assign tasks.",
          "Correct: the Guide explicitly prohibits sub-teams and hierarchies within the Scrum Team.",
          "Correct: the Guide states that Developers hold each other accountable as professionals."
        ],
        "trap": "The most common multi-select distractor is that the Scrum Master assigns tasks — it sounds plausible but contradicts self-management."
      },
      {
        "type": "tf",
        "q": "Developers may split into stable sub-teams by specialty (for example, frontend and backend) within the same Scrum Team.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: the Guide explicitly prohibits forming sub-teams or hierarchies within a single Scrum Team, even when individuals have different specialties."
        ],
        "trap": "Even if each person has a specialty, permanent sub-teams are never formalized within the Scrum Team."
      },
      {
        "type": "single",
        "q": "What is the Scrum Master's role regarding the team's self-management?",
        "opts": [
          "Assign daily tasks to ensure efficiency",
          "Coach the team members in self-management and cross-functionality",
          "Decide who becomes a member of the team",
          "Step in and do a Developer's work when short-staffed"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: this would break the team's self-management.",
          "Correct: literal wording describing how the Scrum Master serves the Scrum Team.",
          "Incorrect: not a Scrum Master accountability described in the Guide.",
          "Incorrect: not part of the Scrum Master's described accountabilities."
        ],
        "trap": "Any option where the Scrum Master decides on the team's behalf breaks the self-management principle."
      },
      {
        "type": "multi",
        "q": "What benefits does the Scrum Guide associate with self-management, cross-functionality, and team cohesion? (select all that apply)",
        "opts": [
          "Greater creativity and productivity in solving complex problems",
          "Guaranteed fixed delivery dates for stakeholders",
          "Better communication when the team stays small",
          "Elimination of the need for a Product Owner"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: the Guide links self-management and cross-functionality to greater creativity and productivity.",
          "Incorrect: Scrum's empirical approach avoids committing to guaranteed fixed dates.",
          "Correct: the Guide notes that smaller teams tend to communicate better.",
          "Incorrect: the Product Owner remains a necessary accountability regardless of team size."
        ],
        "trap": "The distractors mix in concepts that sound like benefits but aren't supported by the Guide, such as fixed dates or dropping the Product Owner."
      }
    ]
  },
  {
    "id": "forecasting",
    "name": "Forecasting and Release Planning",
    "theory": "<h3>Practices the Guide mentions</h3><p>The Scrum Guide does not mandate any particular forecasting technique. It simply notes that <b>various practices exist to forecast progress</b> — burn-down charts, burn-up charts, and cumulative flow diagrams are given as examples, not as requirements of the framework.</p><h3>Why these tools have limits</h3><p>The Guide is careful to add that, while these practices have proven useful, <b>they do not replace the importance of empiricism</b>. A chart on its own guarantees nothing; good decisions still depend on real inspection and adaptation.</p><h3>Why the future can't be predicted with certainty</h3><p>In complex environments — Scrum's home turf — <b>what will happen is unknown</b>. The Guide states this plainly: only what has already happened may be used for forward-looking decision-making. That is why forecasting in Scrum relies on real, historical data (past performance), not on speculative estimates made before work starts.</p><h3>The Sprint as the engine of predictability</h3><p>The Guide does not describe a formal \"release planning\" process, but it does explain how Scrum achieves predictability: through Sprints. Because each Sprint has a fixed length of one month or less, Sprints guarantee that progress toward the Product Goal is inspected and adapted at least once every calendar month. When a Sprint's horizon is too long, the Sprint Goal may become invalid, complexity may rise, and risk may increase — which is why shorter Sprints are used to generate more learning cycles and confine cost and effort risk to a smaller timeframe.</p><h3>Forecasting inside the Sprint</h3><p>During Sprint Planning, it is the Developers themselves who forecast how much work they can complete in the Sprint. That forecast becomes more reliable as they get to know their own past performance, their real upcoming capacity, and their Definition of Done — it does not depend on outside approvals, budgets, or plans handed down by others.</p><h3>Common exam traps</h3><ul><li>Mistaking the examples the Guide gives (burn-down, burn-up, cumulative flow) for mandatory techniques — none of them is required.</li><li>Presenting a release forecast as a fixed commitment date instead of a probability grounded in historical data.</li><li>Assuming a chart can replace empirical inspection — the Guide explicitly says it cannot.</li><li>Believing longer Sprints provide more safety: the Guide actually links long horizons to higher risk and an invalidated Sprint Goal.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "The Product Owner is unavailable and cannot answer the Developers' questions before Sprint Planning, leaving them uncertain about their forecast. What should the Developers do?",
        "opts": [
          "Extend the current Sprint until the Product Owner becomes available to answer everything",
          "Cancel the upcoming Sprint until the uncertainty is resolved",
          "Make their best-informed guess and proceed, re-aligning with the Product Owner once available"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrect: Sprint length is fixed and is not extended to wait for information; empiricism means acting on what's known and adapting later.",
          "Incorrect: cancelling a Sprint is reserved for the Sprint Goal becoming obsolete, not for ordinary uncertainty.",
          "Correct: Developers make the most reliable forecast they can with the information available and adjust as they learn more, consistent with Scrum's empirical approach."
        ],
        "trap": "Some uncertainty in a forecast is normal in complex work; Developers proceed with their best judgment rather than stalling the Sprint."
      },
      {
        "type": "single",
        "q": "According to the Scrum Guide, what is the status of burn-down charts, burn-up charts, and cumulative flow diagrams?",
        "opts": [
          "They are mandatory artifacts every Scrum Team must produce during Sprint Planning",
          "They are examples of practices that can help forecast progress, but the Guide does not require any of them",
          "They are official Scrum artifacts, alongside the Product Backlog and Sprint Backlog",
          "They replace the need for empirical inspection and adaptation"
        ],
        "correct": 1,
        "exp": [
          "Incorrect. The Scrum Guide does not mandate any specific forecasting tool or technique; teams are free to use them or not.",
          "Correct. The Guide mentions burn-downs, burn-ups, and cumulative flow diagrams only as examples of practices that have proven useful — none is required.",
          "Incorrect. Scrum's only artifacts are the Product Backlog, the Sprint Backlog, and the Increment; forecasting charts are not artifacts of the framework.",
          "Incorrect. The Guide explicitly states the opposite: these practices do not replace the importance of empiricism."
        ],
        "trap": "A classic exam trap is treating the Guide's examples (burn-down, burn-up, cumulative flow) as mandatory requirements or as official artifacts, when they are neither."
      },
      {
        "type": "multi",
        "q": "Which of the following does the Scrum Guide give as examples of practices used to forecast progress? (Select all that apply.)",
        "opts": [
          "Burn-down charts",
          "Gantt charts",
          "Burn-up charts",
          "Cumulative flow diagrams"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct. Burn-down charts are named explicitly as an example of a forecasting practice.",
          "Incorrect. Gantt charts belong to traditional, predictive project management and are never mentioned in the Scrum Guide.",
          "Correct. Burn-up charts are named explicitly as an example.",
          "Correct. Cumulative flow diagrams are named explicitly as an example."
        ],
        "trap": "Gantt charts are a classic distractor pulled from waterfall/predictive planning vocabulary that does not appear anywhere in the Scrum Guide."
      },
      {
        "type": "tf",
        "q": "True or False: Because burn-down, burn-up, and cumulative flow practices have proven useful, they replace the need for empiricism in Scrum.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect. The Guide explicitly denies this — no forecasting practice can substitute for real empirical inspection and adaptation.",
          "Correct. The Scrum Guide states these practices, while useful, do not replace the importance of empiricism."
        ],
        "trap": "Treating a visual tracking chart as a substitute for genuine inspection and adaptation is a common misconception this question targets."
      },
      {
        "type": "single",
        "q": "According to the Scrum Guide's view of complexity, what can genuinely be known about the future?",
        "opts": [
          "Exactly what will happen, if enough data is collected upfront",
          "Only what has already happened; what will happen next is unknown",
          "The exact release date, once a burn-down chart has been drawn",
          "Everything, as long as the Product Backlog is fully detailed before the first Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrect. This describes a predictive, upfront-analysis mindset that contradicts Scrum's premise about complex environments.",
          "Correct. The Guide states that in complex environments what will happen is unknown, and only what has already happened may be used for forward-looking decisions.",
          "Incorrect. A chart supports forecasting but cannot guarantee an exact future date.",
          "Incorrect. Detailing the entire Product Backlog upfront does not remove the uncertainty inherent to complex work; this is a Big-Design-Up-Front idea Scrum rejects."
        ],
        "trap": "Exam questions often disguise a Big-Design-Up-Front assumption as 'more planning equals more certainty,' which contradicts Scrum's stance on complexity."
      },
      {
        "type": "single",
        "q": "Which of the following is the correct basis for a reliable forecast, given Scrum's empirical approach to complex work?",
        "opts": [
          "A detailed plan approved by leadership before work begins",
          "Data about what has already happened, such as past performance",
          "The opinion of the most senior stakeholder in the room",
          "A comprehensive upfront estimate covering the entire Product Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrect. A pre-approved plan is a predictive-methodology idea, not an empirical one; Scrum bases decisions on evidence, not upfront authorization.",
          "Correct. The Guide is explicit that only what has already happened, i.e. real historical data, can be used for forward-looking decision-making.",
          "Incorrect. Authority or seniority is not a source of empirical data; forecasts should rest on evidence, not opinion.",
          "Incorrect. An exhaustive upfront estimate is a Big-Design-Up-Front practice that Scrum's empirical process theory does not rely on."
        ],
        "trap": "This tests whether the reader still favors upfront planning artifacts (approved plans, full estimates) over real empirical data as the basis for forecasting."
      },
      {
        "type": "tf",
        "q": "True or False: Sprints enable predictability by guaranteeing that progress toward the Product Goal is inspected and adapted at least once every calendar month.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct. The Guide states that Sprints enable predictability by ensuring inspection and adaptation of progress toward a Product Goal at least every calendar month, which follows directly from the one-month maximum Sprint length.",
          "Incorrect. This is a direct statement from the Scrum Guide's description of the Sprint's role in enabling predictability."
        ],
        "trap": "Some candidates assume the minimum inspection frequency is weekly or tied to Daily Scrums; it is actually tied to the Sprint's one-month maximum length."
      },
      {
        "type": "single",
        "q": "What does the Scrum Guide say can happen when a Sprint's horizon is too long?",
        "opts": [
          "Nothing changes; longer Sprints are always at least as safe as shorter ones",
          "The Sprint Goal may become invalid, complexity may rise, and risk may increase",
          "The Definition of Done becomes optional for that Sprint",
          "The Product Owner gains formal authority over the Sprint Backlog's content"
        ],
        "correct": 1,
        "exp": [
          "Incorrect. The Guide warns of specific negative consequences when a Sprint's horizon grows too long; longer is not inherently safer.",
          "Correct. This is a direct consequence described in the Scrum Guide's section on the Sprint.",
          "Incorrect. The Definition of Done always applies to any work claimed as Done, regardless of Sprint length.",
          "Incorrect. Sprint length has no bearing on who controls the Sprint Backlog's content; the Developers own that."
        ],
        "trap": "A frequent misconception is that longer Sprints provide more stability; the Guide links long horizons to higher risk and a possibly invalid Sprint Goal instead."
      },
      {
        "type": "multi",
        "q": "According to the Scrum Guide's description of Sprint Planning, which factors help the Developers forecast, more confidently, how much work they can complete in the Sprint? (Select all that apply.)",
        "opts": [
          "Their past performance",
          "Their upcoming capacity for the Sprint",
          "Their Definition of Done",
          "Formal budget approval from senior management"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correct. Knowing their own past performance is one of the factors the Guide names for a more confident forecast.",
          "Correct. Knowing their upcoming capacity for the Sprint is named alongside past performance.",
          "Correct. The Definition of Done is named as the third factor that grounds the Developers' forecast.",
          "Incorrect. Forecasting Sprint work is an internal decision made solely by the Developers; the Guide never ties it to external budget approvals."
        ],
        "trap": "This tests whether the reader still believes external approvals (budgets, management sign-off) drive the Sprint forecast, when the Guide keeps that decision fully inside the Developers."
      },
      {
        "type": "single",
        "q": "According to the Scrum Guide, what is one reason for using shorter Sprints?",
        "opts": [
          "They remove the need for a Sprint Review at the end of the Sprint",
          "They generate more learning cycles and limit the risk of cost and effort to a smaller time frame",
          "They reduce the number of Developers required on the Scrum Team",
          "They allow the Product Owner to skip Sprint Planning"
        ],
        "correct": 1,
        "exp": [
          "Incorrect. Every Sprint, regardless of length, still includes Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
          "Correct. This is the reason the Scrum Guide gives for employing shorter Sprints.",
          "Incorrect. Sprint length is unrelated to team size or composition.",
          "Incorrect. Sprint Planning always initiates every Sprint; shorter Sprints do not remove any Scrum event."
        ],
        "trap": "Candidates sometimes assume shorter Sprints mean fewer events or less rigor; in fact all Scrum events still occur, only the risk window shrinks."
      }
    ]
  },
  {
    "id": "visio-valor",
    "name": "Product Vision and Value",
    "theory": "<h3>What is a product?</h3><p>The 2020 Scrum Guide defines a product as a <b>vehicle to deliver value</b>. It has a clear boundary, known stakeholders, and well-defined users or customers. A product can be a service, a physical product, or something more abstract — an internal platform, a process, or an app.</p><h3>The Product Goal</h3><p>The Product Goal describes a <b>future state</b> of the product that serves as a long-term objective for the entire Scrum Team. Everything the team does should contribute toward that goal. The rest of the Product Backlog emerges to define 'what' will fulfill the Product Goal. The Scrum Team must fulfill (or deliberately abandon) one Product Goal before taking on the next.</p><h3>Maximizing value</h3><p>The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Guide does not prescribe exactly how — the concrete approach varies widely across organizations, cultures, and markets.</p><h3>Value: beyond revenue</h3><p>Beyond the Guide's literal text, it is a widely accepted product-management principle that 'value' is not one-dimensional. A skilled Product Owner typically weighs several dimensions, such as:</p><ul><li><b>Customer/user value</b>: usefulness, experience, genuinely solving a problem.</li><li><b>Business value</b>: revenue, market share, cost reduction, competitive advantage.</li><li><b>Non-monetary value</b>: brand reputation, regulatory compliance, learning or risk reduction, future technical capability.</li></ul><p>None of this list is a literal Scrum Guide quote — it is standard product-management knowledge a PSPO candidate should know how to apply.</p><h3>Common exam traps</h3><ul><li>Confusing the Product Goal with a roadmap or a dated release plan: the Product Goal is a direction, not a calendar.</li><li>Assuming a product must always be software or something sold directly: the Guide explicitly allows internal products, services, or abstract concepts.</li><li>Thinking 'maximizing value' means only 'maximizing revenue': business value is just one of several possible dimensions.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "How does technical debt typically affect the value a Product Owner can obtain from a product over time?",
        "opts": [
          "It has no real effect on value delivery, only on developer convenience",
          "It tends to slow the pace of new functionality and raise the share of budget spent on upkeep",
          "It only matters if the Scrum Master decides to raise it as an impediment"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: technical debt has real business consequences, not just convenience for Developers.",
          "Correct: as technical debt grows, delivering new functionality becomes slower and more of the product's budget goes toward maintaining what already exists, reducing the value that can be created going forward.",
          "Incorrect: technical debt is a Scrum Team and Product Owner concern regardless of whether the Scrum Master flags it."
        ],
        "trap": "Technical debt isn't just a Developer nuisance — it directly erodes the value a Product Owner can deliver by slowing future work and consuming budget."
      },
      {
        "type": "single",
        "q": "How does the Scrum Guide define a 'product'?",
        "opts": [
          "A project with a defined start and end date",
          "A vehicle to deliver value, with clear boundaries and defined users or customers",
          "A set of software features only",
          "A requirements document approved by the client"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: Scrum deliberately avoids the word 'project'; a product doesn't need a planned end date — it's a continuous vehicle for delivering value.",
          "Correct: this is the literal 2020 Scrum Guide definition — a vehicle to deliver value, with a clear boundary, known stakeholders, and well-defined users or customers.",
          "Incorrect: the Guide explicitly states a product can be something more abstract than software, such as a service or even a process.",
          "Incorrect: a document is not a vehicle for value; it might be part of a product's context, but it doesn't define the product."
        ],
        "trap": "The exam often offers 'project' as a distractor: Scrum doesn't talk about projects — a product is a continuous vehicle for value."
      },
      {
        "type": "single",
        "q": "What does the Product Goal describe?",
        "opts": [
          "A release plan with concrete dates",
          "A future state of the product that serves as a long-term objective for the Scrum Team",
          "The acceptance criteria of every Product Backlog Item",
          "A contract signed by all stakeholders"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: a dated plan is an operational roadmap, not the Product Goal, which describes a direction, not a calendar.",
          "Correct: the Product Goal describes a desired future state that gives meaning to all the Scrum Team's work.",
          "Incorrect: acceptance criteria are PBI-level detail, far below the horizon of the Product Goal.",
          "Incorrect: the Product Goal isn't a contractual artifact — it's a statement of direction shared by the team."
        ],
        "trap": "Classic trap: presenting the Product Goal as if it were a dated plan — it is actually a long-term vision, not a schedule."
      },
      {
        "type": "tf",
        "q": "According to the Scrum Guide, the Scrum Team must fulfill or deliberately abandon one Product Goal before taking on the next.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: the Guide is explicit — the Scrum Team must fulfill (or abandon) one Product Goal before taking on the next; multiple Product Goals are not pursued in parallel.",
          "Incorrect: working toward two Product Goals at once would dilute the team's focus and contradicts the Guide's text."
        ],
        "trap": "Some distractors suggest a team could pursue several Product Goals at once to 'move faster' — that is the exact opposite of what the Guide says."
      },
      {
        "type": "single",
        "q": "Who is accountable for maximizing the value of the product resulting from the Scrum Team's work?",
        "opts": [
          "The Scrum Master",
          "The main stakeholders",
          "The Product Owner",
          "The whole Scrum Team equally, with no distinct accountability"
        ],
        "correct": 2,
        "exp": [
          "Incorrect: the Scrum Master is accountable for the Scrum Team's effectiveness and for Scrum being understood and enacted, not for maximizing product value.",
          "Incorrect: stakeholders provide valuable input and information, but they don't hold formal accountability for maximizing value.",
          "Correct: the Guide explicitly assigns the Product Owner accountability for maximizing the value of the product resulting from the Scrum Team's work.",
          "Incorrect: while the whole team contributes to creating value through the Increment, the formal accountability sits specifically with the PO."
        ],
        "trap": "The exam tries to spread accountability across 'the whole team' — but the Guide assigns this accountability explicitly and solely to the Product Owner."
      },
      {
        "type": "multi",
        "q": "Which characteristics does a product have according to the Scrum Guide's definition? (select all that apply)",
        "opts": [
          "It has a clear boundary",
          "It must always generate direct revenue",
          "It has known stakeholders",
          "It has well-defined users or customers"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: the Guide's product definition includes having a clear boundary.",
          "Incorrect: the Guide doesn't require generating direct revenue; a product can be an internal service or platform with no direct monetization.",
          "Correct: having known stakeholders is part of the Guide's literal definition.",
          "Correct: having well-defined users or customers is also part of that definition."
        ],
        "trap": "Generating revenue is not a requirement of the Guide's definition of 'product' — it's easy to conflate 'value' with 'revenue', but they aren't synonyms."
      },
      {
        "type": "single",
        "q": "What emerges to define 'what' will fulfill the Product Goal?",
        "opts": [
          "The rest of the Product Backlog",
          "Only the Sprint Backlog",
          "The Definition of Done",
          "The annual release plan"
        ],
        "correct": 0,
        "exp": [
          "Correct: the Guide states that the rest of the Product Backlog emerges to define 'what' will fulfill the Product Goal.",
          "Incorrect: the Sprint Backlog is the subset of work for a single Sprint, not the instrument that defines how the Product Goal as a whole is fulfilled.",
          "Incorrect: the Definition of Done establishes when an Increment is complete, not which work fulfills the Product Goal.",
          "Incorrect: the Guide doesn't discuss annual release plans; that's a concept outside the official text."
        ],
        "trap": "Don't confuse the Product Backlog (the full, emergent view) with the Sprint Backlog (the subset for a single Sprint)."
      },
      {
        "type": "tf",
        "q": "In product management, 'value' always means direct monetary revenue.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: reducing 'value' to direct revenue ignores other recognized dimensions in product management, such as user value or non-monetary value.",
          "Correct: it's a general, widely accepted product-management principle (not a literal Guide quote) that value includes dimensions like user satisfaction, risk reduction, learning, or reputation, in addition to revenue."
        ],
        "trap": "The exam may tempt you to assume 'maximizing value' equals 'maximizing revenue' — that oversimplifies the concept of value."
      },
      {
        "type": "multi",
        "q": "Which of the following are dimensions of value a Product Owner typically considers (general product-management knowledge, beyond the Scrum Guide)?",
        "opts": [
          "Business value (revenue, competitive advantage, cost reduction)",
          "The exact number of hours the Developers spent",
          "Customer/user value (usefulness, experience, genuinely solving a problem)",
          "Non-monetary value (reputation, regulatory compliance, risk reduction, learning)"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: business value is a common dimension a PO should weigh, though not the only one.",
          "Incorrect: hours spent measure effort or cost, not value delivered; conflating effort with value is a common mistake.",
          "Correct: customer/user value is a core dimension any competent PO must consider.",
          "Correct: non-monetary dimensions such as reputation or risk reduction are also legitimate forms of value."
        ],
        "trap": "Note: this question covers general product-management knowledge, not a literal Scrum Guide quote — the Guide does not spell out these dimensions explicitly."
      },
      {
        "type": "single",
        "q": "What is the difference between the Product Goal and the Sprint Goal in terms of time horizon?",
        "opts": [
          "Both are long-term objectives",
          "The Product Goal is long-term; the Sprint Goal is specific to that one Sprint",
          "The Sprint Goal is long-term; the Product Goal is a one-off",
          "There is no real difference — they are synonyms"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Sprint Goal has a much shorter horizon, limited to a single Sprint.",
          "Correct: the Product Goal is the long-term objective for the whole product; the Sprint Goal is the specific commitment of one Sprint that contributes toward that larger objective.",
          "Incorrect: this is exactly the reverse of the real relationship between the two concepts.",
          "Incorrect: they are clearly distinct concepts with different time horizons."
        ],
        "trap": "Don't confuse the time scope: Product Goal = long-term product vision; Sprint Goal = the objective of a single Sprint that contributes toward that vision."
      }
    ]
  },
  {
    "id": "gestio-backlog",
    "name": "Product Backlog Management",
    "theory": "<h3>A Product Backlog is never complete</h3><p>The Product Backlog is the single source of work undertaken by the Scrum Team. It is an <b>emergent</b>, <b>ordered</b> list that captures only what is known and understood at a given moment, so it evolves as the product and its environment change. As long as a product exists, its Product Backlog exists — it is never \"finished\" and is never fully defined up front.</p><h3>Product Backlog refinement</h3><p>Refinement is the act of breaking down and further defining Product Backlog items into smaller, more precise pieces. It is an <b>ongoing activity</b> that adds detail such as description, order, and size; the attributes captured often vary by domain of work. The Developers who will do the work are responsible for the refinement, since they are ultimately delivering it. The Product Owner may influence the Developers by helping them understand and select trade-offs.</p><h3>Ready items</h3><p>A Product Backlog item is considered ready for selection in a Sprint Planning event once refinement has given it enough transparency and clarity. \"Ready\" is not a formal sign-off and does not require an exact hour-based estimate — it simply reflects the shared understanding needed for the Developers to reason confidently about the work.</p><h3>Ordering, not prioritizing</h3><p>The Scrum Guide consistently uses the verb <b>order</b> to describe how the Product Backlog is arranged — never \"prioritize.\" Ordering Product Backlog items is one of the Product Owner's explicit accountabilities.</p><h3>Sizing belongs to the Developers</h3><p>The Developers who will do the work are responsible for the sizing of Product Backlog items. The Product Owner may influence that sizing by helping the Developers understand and select trade-offs, but the final sizing decision always rests with the people who will actually do the work.</p><h3>Product Owner accountabilities for the Product Backlog</h3><ul><li>Developing and explicitly communicating the Product Goal.</li><li>Creating and clearly communicating Product Backlog items.</li><li>Ordering Product Backlog items.</li><li>Ensuring that the Product Backlog is transparent, visible, and understood.</li></ul><p>The Product Owner may delegate this work to others, but remains accountable for it.</p><h3>Common exam traps</h3><p>Watch for these frequent misconceptions: (1) saying \"prioritize\"/\"priority\" instead of \"order\"; (2) treating refinement as a formal, timeboxed event — it is not one of Scrum's four events, it is a continuous activity; (3) assuming the Product Owner decides item size — that decision belongs to the Developers; (4) assuming the Scrum Guide mandates a fixed percentage of time (such as \"10%\") for refinement — the Guide specifies no such figure; (5) imagining a dedicated \"Sprint 0\" used purely to prepare the backlog before real work starts — this concept does not exist in the Scrum Guide, which treats refinement as continuous throughout product development.</p>",
    "questions": [
      {
        "type": "tf",
        "q": "The Product Backlog should evolve as the product and its environment change, rather than strictly following the Product Owner's original plan.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correct: because the Product Backlog is emergent, it is expected to reflect changes in the product and its environment over time.",
          "Incorrect: rigidly following an original plan while ignoring change contradicts the emergent, adaptive nature of the Product Backlog."
        ],
        "trap": "An emergent Product Backlog is meant to change as understanding improves — treating an early plan as fixed defeats its purpose."
      },
      {
        "type": "multi",
        "q": "Which of the following statements about the Product Backlog are correct? (choose the best two)",
        "opts": [
          "Items near the top are usually smaller and more refined than items further down",
          "The Product Backlog contains only items that are already completely refined",
          "The Product Backlog is never baselined; it keeps evolving as long as the product exists",
          "A Product Backlog Item has a formally assigned individual 'owner'"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: higher-ordered items tend to be more refined and smaller so the Developers can select them with confidence.",
          "Incorrect: the Product Backlog always contains items at varying levels of detail; refinement is ongoing, not a precondition for being on the backlog.",
          "Correct: a Product Backlog is never fixed at a baseline — it keeps evolving as the product and its environment change.",
          "Incorrect: the Scrum Guide does not describe individual 'ownership' of single Product Backlog items."
        ],
        "trap": "The Product Backlog is never a finished, baselined document — expecting every item to already be fully refined misunderstands how refinement works."
      },
      {
        "type": "single",
        "q": "What does the Scrum Guide call the ongoing activity of decomposing and adding further detail to Product Backlog items?",
        "opts": [
          "Prioritization",
          "Refinement",
          "Sizing",
          "Strategic ordering"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Scrum Guide does not use \"prioritization\" for this activity.",
          "Correct: refinement is the act of decomposing and further defining Product Backlog items.",
          "Incorrect: sizing is just one attribute added during refinement, not the name of the whole activity.",
          "Incorrect: not a Scrum Guide term."
        ],
        "trap": "The official term is 'refinement', a continuous activity, not one of Scrum's formal timeboxed events."
      },
      {
        "type": "single",
        "q": "Which verb does the Scrum Guide explicitly use to describe how the Product Owner arranges the Product Backlog?",
        "opts": [
          "Prioritize",
          "Order",
          "Rank by urgency",
          "Segment by department"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: a term the Scrum Guide deliberately avoids.",
          "Correct: the Scrum Guide explicitly states the Product Owner is accountable for \"ordering\" Product Backlog items.",
          "Incorrect: not Scrum Guide terminology.",
          "Incorrect: not Scrum Guide terminology."
        ],
        "trap": "'Prioritize' is likely the single most repeated vocabulary trap in the whole PSPO I exam."
      },
      {
        "type": "multi",
        "q": "Which practices does the Scrum Guide recommend for managing the Product Backlog effectively? (select all that apply)",
        "opts": [
          "Refine in detail only the items likely to be worked on soon",
          "Create a second, parallel backlog for \"new\" or unclear items",
          "Remove obsolete items that have gone untouched for a long time",
          "Fully detail every backlog item from the very start of the product"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: a \"just in time, just enough\" approach avoids wasting effort on details that may still change.",
          "Incorrect: the Product Backlog is the single source of work; a second backlog breaks that single source of truth.",
          "Correct: removing obsolete items keeps the backlog transparent and useful.",
          "Incorrect: fully detailing everything up front is premature work likely to be wasted as the product emerges and changes."
        ],
        "trap": "A parallel second backlog is always wrong: there must be only one Product Backlog as the single source of work."
      },
      {
        "type": "single",
        "q": "Who is accountable for sizing Product Backlog items?",
        "opts": [
          "The Product Owner alone",
          "The Developers who will do the work",
          "The key stakeholders",
          "The Scrum Master"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the PO may influence sizing, but does not decide it.",
          "Correct: the Developers, as the people doing the work, are accountable for its size.",
          "Incorrect: stakeholders play no role in sizing.",
          "Incorrect: the Scrum Master does not estimate the work; they facilitate the process."
        ],
        "trap": "The PO can influence sizing by helping the Developers understand and select trade-offs, but the final sizing decision always belongs to the Developers."
      },
      {
        "type": "tf",
        "q": "Product Backlog refinement is one of Scrum's four formal events and has a fixed timebox defined by the Guide.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: refinement is not one of Scrum's four formal events (Planning, Daily, Review, Retrospective); it is an ongoing activity with no fixed timebox of its own."
        ],
        "trap": "Confusing refinement with a formal, timeboxed event is a very common mistake: the Guide describes it as an ongoing activity."
      },
      {
        "type": "single",
        "q": "According to the Scrum Guide, what must the Product Owner ensure about the Product Backlog regarding its visibility?",
        "opts": [
          "Ensuring it is transparent, visible, and understood by everyone",
          "Hiding it from stakeholders until it is complete",
          "Sharing it only with the Developers",
          "Publishing it only at the end of each release"
        ],
        "correct": 0,
        "exp": [
          "Correct: this is an explicit Product Owner accountability regarding the Product Backlog.",
          "Incorrect: this contradicts the transparency the Guide requires.",
          "Incorrect: the Product Backlog should be visible to the whole Scrum Team and, as appropriate, stakeholders.",
          "Incorrect: because the backlog is emergent, it is never \"complete\" or closed at any point."
        ],
        "trap": "Backlog transparency is for the whole Scrum Team, not a restricted document held back until it is 'finished'."
      },
      {
        "type": "single",
        "q": "When is a Product Backlog item considered 'Ready' for selection in Sprint Planning?",
        "opts": [
          "When the Product Owner formally signs off on it in writing",
          "When it has reached enough transparency and clarity, typically through refinement",
          "When it has an exact hour-based estimate",
          "When every stakeholder has individually validated it"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Guide does not require a formal written sign-off.",
          "Correct: 'Ready' reflects the level of understanding and transparency reached through ongoing refinement.",
          "Incorrect: the Guide does not require exact hour-based estimates.",
          "Incorrect: individual stakeholder validation is not a requirement."
        ],
        "trap": "'Ready' is a level of transparency/understanding reached through refinement, not a formal approval or an exact estimate."
      },
      {
        "type": "multi",
        "q": "Which of the following are Product Owner accountabilities regarding the Product Backlog? (select all that apply)",
        "opts": [
          "Developing and communicating the Product Goal",
          "Ordering Product Backlog items",
          "Personally writing the code for every item",
          "Ensuring the Product Backlog is transparent, visible, and understood"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correct: this is one of the Product Owner's accountabilities for effective Product Backlog management.",
          "Correct: ordering items is an explicit Product Owner accountability.",
          "Incorrect: writing code is Developer work, not a Product Owner accountability.",
          "Correct: this is also an explicit Product Owner accountability."
        ],
        "trap": "The exam sometimes mixes real PO accountabilities with technical Developer tasks to create confusion."
      },
      {
        "type": "single",
        "q": "What does the Scrum Guide say about how much time or what fixed percentage should be spent on Product Backlog refinement?",
        "opts": [
          "A formal one-hour event at the start of each Sprint",
          "A fixed 10% of the team's time, as mandated by the Scrum Guide",
          "An ongoing activity with no fixed timebox, done as needed throughout development",
          "A dedicated \"Sprint 0\" used solely to prepare the Product Backlog before work begins"
        ],
        "correct": 2,
        "exp": [
          "Incorrect: refinement is not one of Scrum's four formal events.",
          "Incorrect: the 10% figure is a common external practice, but the Scrum Guide specifies no percentage at all.",
          "Correct: the Scrum Guide describes refinement as an ongoing activity, with no required timebox or fixed frequency.",
          "Incorrect: the Scrum Guide never mentions a \"Sprint 0\"; refinement happens continuously throughout product development."
        ],
        "trap": "Common trap: attributing specific figures (like the famous '10% of time') or concepts (like 'Sprint 0') to the Scrum Guide when they do not actually appear in the official text."
      }
    ]
  },
  {
    "id": "estrategia-negoci",
    "name": "Business Strategy",
    "theory": "<h3>Maximizing value is the PO's north star</h3><p>The 2020 Scrum Guide states that the <b>Product Owner is accountable for maximizing the value of the product</b> resulting from the work of the Scrum Team. That accountability goes well beyond ordering the Product Backlog for the next Sprint — it means holding a business view that ties every ordering decision back to the value the product delivers over time, articulated through the <b>Product Goal</b>.</p><h3>Development cost is only part of the picture</h3><p>A sound business strategy looks past the effort of building a feature. Standard product-management practice considers <b>Total Cost of Ownership (TCO)</b>: beyond building something, someone has to maintain it, support it, train users on it, and eventually may need to retire it. An item that is cheap to build can turn out expensive to keep alive for years — the Product Owner weighs that trade-off when deciding what earns a place in the Product Backlog. (TCO is general product-management practice, not a term defined in the Scrum Guide itself.)</p><h3>Empiricism applies to strategy too</h3><p>Scrum rests on three pillars of empiricism: transparency, inspection, and adaptation. The Product Owner applies that same lens to business strategy: rather than deciding from opinion or speculation, they look for real evidence — usage data, market feedback, results from past Sprints — to check whether the current direction still holds. The <b>Sprint Review</b> is exactly that inspection point, where the Scrum Team and stakeholders review the Increment and the wider environment (market, technology, budget, and more) to decide what to do next.</p><h3>Accountable no matter who does the work</h3><p>Per the Guide, the Product Owner is <b>one person, not a committee</b>, and while they may delegate backlog-ordering or refinement work to others, they remain accountable for the outcome. This matters for business strategy: the PO may lean on market analysts, stakeholders, or the Developers themselves for input, but the final call — and the accountability for the value delivered — stays with the Product Owner.</p><h3>Common exam traps</h3><ul><li>Treating TCO, ROI, or value metrics as if they were literal quotes from the Scrum Guide — they aren't; they're standard product-management practices that complement Scrum.</li><li>Assuming that delegating backlog-ordering work removes the PO's accountability — the Guide is explicit that it does not.</li><li>Equating \"maximizing value\" with \"doing whatever the loudest stakeholder asks\" — the PO decides from the available evidence, not from the single most recent request.</li><li>Confusing \"development cost\" with \"total cost\" — ignoring maintenance and support is a classic strategy mistake.</li></ul>",
    "questions": [
      {
        "type": "multi",
        "q": "According to general product-management practice that complements the Scrum Guide, how is a product's success typically measured? (choose the best two)",
        "opts": [
          "The impact on customer satisfaction",
          "The impact on revenue or cost",
          "The delivery of upfront-defined scope compared to the originally planned time",
          "How closely actual velocity matched the velocity estimated at the start"
        ],
        "correct": [
          0,
          1
        ],
        "exp": [
          "Correct: customer satisfaction is a core outcome-based measure of whether a product is actually delivering value.",
          "Correct: the impact on revenue and/or cost reflects the real business value the product generates.",
          "Incorrect: matching an upfront plan measures predictive-project success, not the empirical value Scrum aims to maximize.",
          "Incorrect: velocity is a capacity-planning aid for the Developers, not a measure of product success or value delivered."
        ],
        "trap": "Success is measured by real outcomes (satisfaction, revenue, cost), not by how closely a team matched an upfront plan or its own velocity estimate."
      },
      {
        "type": "single",
        "q": "How often should a Product Owner check on customer satisfaction to inform business strategy decisions?",
        "opts": [
          "Only once a year, during formal business reviews",
          "Frequently, so decisions are grounded in current evidence rather than stale assumptions",
          "Only when a stakeholder specifically requests it"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: an annual check is far too infrequent for a Product Owner steering an empirical, adaptive product strategy.",
          "Correct: frequent measurement keeps the Product Owner's decisions grounded in real, current evidence, consistent with Scrum's empirical approach.",
          "Incorrect: waiting for a stakeholder request is reactive, not the proactive inspection the Product Owner's accountability calls for."
        ],
        "trap": "Business decisions should be grounded in frequent, real evidence, not an annual check-in or a wait-and-see approach."
      },
      {
        "type": "single",
        "q": "According to the 2020 Scrum Guide, what is the Product Owner accountable for regarding the product?",
        "opts": [
          "Maximizing the value of the product resulting from the work of the Scrum Team",
          "Writing code alongside the Developers to speed up the Sprint",
          "Personally approving every technical task in the Sprint Backlog",
          "Standing in for the Scrum Master when facilitating events"
        ],
        "correct": 0,
        "exp": [
          "Correct: this is the Product Owner's core accountability according to the Scrum Guide.",
          "Incorrect: writing code is the Developers' job, not a defined PO responsibility.",
          "Incorrect: the Sprint Backlog and its tasks are managed by the Developers.",
          "Incorrect: facilitating Scrum events is the Scrum Master's responsibility."
        ],
        "trap": "The exam sometimes blends PO accountability with operational tasks belonging to the Developers or the Scrum Master; maximizing value is the PO's explicit and exclusive accountability."
      },
      {
        "type": "single",
        "q": "A Product Backlog Item is quick and cheap to build, but will require constant, complex technical support for years. Which perspective helps the Product Owner evaluate this situation correctly?",
        "opts": [
          "Only the initial development cost, since it is the only cost that matters",
          "Total Cost of Ownership (TCO), which includes long-term maintenance and support, not just building it",
          "The number of story points estimated by the Developers",
          "The cost of training the Scrum Master on the tool"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: looking only at the upfront development cost ignores future burdens that can exceed that initial cost.",
          "Correct: TCO is the product-management practice that looks at the whole cost lifecycle, not just building it.",
          "Incorrect: story points estimate development effort, not total cost of ownership.",
          "Incorrect: not relevant to this business decision about the product."
        ],
        "trap": "The exam may try to narrow cost analysis down to development effort alone; sound business strategy looks at the full cost lifecycle."
      },
      {
        "type": "tf",
        "q": "If the Product Owner delegates the work of ordering the Product Backlog to someone else, that person becomes the one accountable for maximizing the product's value.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: the Scrum Guide states the Product Owner may delegate backlog-ordering or refinement work, but remains accountable for the outcome."
        ],
        "trap": "Delegating work is not the same as delegating accountability: the PO remains the single accountable person, even if others order the backlog on their behalf."
      },
      {
        "type": "multi",
        "q": "Beyond development effort, which factors should a Product Owner reasonably consider when evaluating the economic impact of a Product Backlog item? (Select all that apply)",
        "opts": [
          "The cost of long-term maintenance and support",
          "The cost of training end users on the new feature",
          "The exact number of lines of code that will be written",
          "The likely impact on revenue or customer retention (expected value)"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correct: this is part of Total Cost of Ownership.",
          "Correct: training users is a real cost tied to introducing product changes.",
          "Incorrect: lines of code is not a measure of business cost or value.",
          "Correct: expected value (revenue, retention...) is exactly what the PO is trying to maximize."
        ],
        "trap": "The exam mixes irrelevant technical metrics (like lines of code) in with real business cost or value factors."
      },
      {
        "type": "single",
        "q": "How should a Product Owner use the Sprint Review to support business strategy?",
        "opts": [
          "As a closed technical demo with no bearing on business decisions",
          "As an inspection point: reviewing the Increment and the environment (market, budget, technology) together with the Scrum Team and stakeholders to decide what's next",
          "As a meeting to formally approve next quarter's budget",
          "As a substitute for market research, ignoring data from outside the Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrect: the Sprint Review is not just a technical demo.",
          "Correct: it is the inspection event where completed work meets business and market context to adjust direction.",
          "Incorrect: it is not a formal budget-approval meeting.",
          "Incorrect: the Sprint Review complements, rather than replaces, the use of market data."
        ],
        "trap": "The Sprint Review connects execution and strategy through empirical inspection; it is neither a plain demo nor an administrative meeting."
      },
      {
        "type": "tf",
        "q": "Maximizing the value of the product means the Product Owner should always implement the most recent request from the most influential stakeholder.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect.",
          "Correct: maximizing value means deciding from the overall evidence and the Product Goal, not caving to the loudest or most recent request."
        ],
        "trap": "Confusing 'maximizing value' with 'always pleasing the most insistent stakeholder' is a common error; the PO weighs evidence, not pressure."
      },
      {
        "type": "multi",
        "q": "Which are the three pillars of empiricism that Scrum rests on, and that the PO also applies to business strategy? (Select all that apply)",
        "opts": [
          "Transparency",
          "Exhaustive documentation",
          "Inspection",
          "Adaptation"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correct: one of the three pillars of empiricism according to the Scrum Guide.",
          "Incorrect: exhaustive documentation is not one of the pillars of empiricism; Scrum values transparency about actual work, not documentation itself.",
          "Correct: frequently inspecting artifacts and progress is one of the three pillars.",
          "Correct: adapting course when inspection reveals deviations is the third pillar."
        ],
        "trap": "The exam sometimes throws in 'documentation' as a distractor for a pillar of empiricism; the real three pillars are transparency, inspection, and adaptation."
      }
    ]
  },
  {
    "id": "stakeholders",
    "name": "Stakeholders and Customers",
    "theory": "<h3>Who are the stakeholders?</h3><p>Stakeholders are people outside the Scrum Team — customers, users, sponsors, managers, and others — who have an interest in the product or are affected by it. They are not members of the Scrum Team, but their input matters for maximizing the value the product delivers.</p><h3>The Product Owner: one person, never a committee</h3><p>The Product Owner may represent the needs of many stakeholders within the Product Backlog, but accountability for the Product Backlog always rests with <b>one individual</b>, not a committee. Anyone who wants to change a Product Backlog item's content or priority must try to convince the Product Owner — no one else is authorized to direct the Developers to work from a different set of requirements.</p><h3>Sprint Review: a working session, not a demo for sign-off</h3><p>The <b>Sprint Review</b> is where the Scrum Team and stakeholders inspect the outcome of the Sprint and collaborate on what to do next. It is a working session, not a one-way status presentation: attendees review what was accomplished, discuss what has changed in the marketplace or environment, and adjust the Product Backlog accordingly. It is also not a gate that value must pass through before being released — any Product Backlog item meeting the Definition of Done can be released at any point during the Sprint, independent of the Review.</p><h3>Stakeholders at other events</h3><p>Stakeholders' main touchpoint is the Sprint Review, but they may also be invited to <b>Sprint Planning</b> when the Scrum Team decides their advice would help, for instance to clarify context on upcoming work. Even so, planning the Sprint remains the Scrum Team's job — it is the Developers, working with the Product Owner, who decide what will be built.</p><h3>The Scrum Master and stakeholders</h3><p>The Scrum Master serves the organization by leading, training, and coaching it in Scrum adoption, which includes helping remove barriers between stakeholders and Scrum Teams and facilitating stakeholder collaboration when requested or needed. This support role does not replace the Product Owner as the person who negotiates priorities.</p><h3>Common exam traps</h3><ul><li>Assuming stakeholders are part of the Scrum Team — they are not; they remain external even when collaborating closely.</li><li>Believing a \"committee\" of stakeholders can stand in for the Product Owner to better represent everyone's needs — the Scrum Guide is explicit that the role stays with one person.</li><li>Treating the Sprint Review as a formal approval demo or as the only moment value can be released.</li><li>Assuming stakeholders can never attend Sprint Planning — they can, if the Scrum Team invites them.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "If a stakeholder wants to change the order or content of the Product Backlog, what should they do?",
        "opts": [
          "Negotiate directly with the Developers, since they build the product",
          "Try to convince the Product Owner, who remains the one accountable for the Product Backlog",
          "Ask the Scrum Master to make the change on their behalf"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Developers do not take direction on backlog content or order from stakeholders directly.",
          "Correct: anyone wanting to change the Product Backlog's content or order must convince the Product Owner, who remains accountable for it.",
          "Incorrect: the Scrum Master facilitates and coaches, but does not make Product Backlog decisions on a stakeholder's behalf."
        ],
        "trap": "Stakeholders influence the Product Backlog only by persuading the Product Owner — they cannot direct the Developers or the Scrum Master to make changes for them."
      },
      {
        "type": "single",
        "q": "What does the Scrum Guide state about the Product Owner when there are many stakeholders with differing needs?",
        "opts": [
          "The Product Owner may represent the needs of many stakeholders in the Product Backlog while remaining a single person",
          "When there are many stakeholders, the Product Owner should become a committee to represent them better",
          "Stakeholders share Product Backlog ordering authority with the Product Owner",
          "The Product Owner delegates prioritization to a stakeholder committee once the product grows large"
        ],
        "correct": 0,
        "exp": [
          "Correct: the Scrum Guide states the PO may represent many stakeholders' needs in the Product Backlog while remaining one accountable person.",
          "Incorrect: the PO never becomes a committee; accountability is always individual.",
          "Incorrect: ordering the Product Backlog is the Product Owner's exclusive authority.",
          "Incorrect: delegating prioritization to a committee contradicts the principle that the PO is a single accountable person."
        ],
        "trap": "The classic trap is confusing 'representing many stakeholders' with 'being a committee' — the Scrum Guide is explicit that the PO remains one person."
      },
      {
        "type": "single",
        "q": "What is the main purpose of the Sprint Review with respect to stakeholders?",
        "opts": [
          "For the Scrum Team and stakeholders to inspect the outcome of the Sprint and collaborate on what to do next",
          "For stakeholders to formally approve releasing the Increment",
          "For the Product Owner to evaluate each Developer's individual performance",
          "To sign off on the next Sprint's Sprint Backlog"
        ],
        "correct": 0,
        "exp": [
          "Correct: it is a joint working event of inspection and adaptation, not a mere approval formality.",
          "Incorrect: releasing value does not depend on approval at the Sprint Review; anything meeting the DoD can be released at any time.",
          "Incorrect: the Sprint Review does not evaluate individual performance.",
          "Incorrect: the next Sprint's Sprint Backlog is created in Sprint Planning, not in the Sprint Review."
        ],
        "trap": "Treating the Sprint Review as a formal release approval is a common error; it is a collaboration session, not a gate to production."
      },
      {
        "type": "tf",
        "q": "The Sprint Review is fundamentally a one-way status presentation from the Scrum Team to stakeholders.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Scrum Guide describes the Sprint Review as a collaborative working session, not a one-way presentation.",
          "Correct: it is a collaborative event of joint inspection, not a one-way status presentation."
        ],
        "trap": "Many teams turn the Sprint Review into a passive demo; the Scrum Guide defines it as active collaboration."
      },
      {
        "type": "multi",
        "q": "What role can stakeholders play in Scrum events? (select all that apply)",
        "opts": [
          "They may be invited to Sprint Planning by the Scrum Team to provide advice",
          "They are required members of the Daily Scrum",
          "They collaborate with the Scrum Team at the Sprint Review on what to do next",
          "They decide the final content of the Sprint Backlog"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correct: the Scrum Team may invite stakeholders to Sprint Planning when their advice would add value.",
          "Incorrect: the Daily Scrum is an internal event for the Developers; stakeholders do not take part in it.",
          "Correct: this is precisely the central purpose of the Sprint Review.",
          "Incorrect: the Sprint Backlog is created by the Developers, with the Product Owner adding clarity when needed; stakeholders do not decide its content."
        ],
        "trap": "The typical error is assuming stakeholders can never attend Sprint Planning, or conversely that they have a say in internal events like the Daily Scrum."
      },
      {
        "type": "tf",
        "q": "If a stakeholder wants to change the order or content of the Product Backlog, they can negotiate it directly with the Developers.",
        "opts": [
          "True",
          "False"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrect: the Developers are not the channel for negotiating changes to Product Backlog scope or order.",
          "Correct: according to the Scrum Guide, anyone wanting a change should try to convince the Product Owner."
        ],
        "trap": "Negotiating directly with the Developers to change priorities is a classic antipattern that breaks the single decision point the PO is meant to be."
      },
      {
        "type": "single",
        "q": "What is the relationship between the Sprint Review and releasing value to the market?",
        "opts": [
          "The Sprint Review is not a gate for releasing value, and only work meeting the Definition of Done is part of the usable Increment",
          "The stakeholder's request always overrides the Definition of Done",
          "The Increment can still be released if the Product Owner verbally approves it on the spot",
          "The Sprint Review always implies automatic deployment to production of what was demonstrated"
        ],
        "correct": 0,
        "exp": [
          "Correct: the DoD is the quality standard that determines whether work is part of the Increment, regardless of pressure from a stakeholder.",
          "Incorrect: no stakeholder, not even a customer, can bypass the Definition of Done.",
          "Incorrect: a verbal approval from the PO does not substitute for meeting the Definition of Done.",
          "Incorrect: the Sprint Review does not imply automatic deployment; releasing value is a decision independent of the event."
        ],
        "trap": "Confusing 'showing progress at the Sprint Review' with 'approving the release' is a common mistake; the DoD governs, not stakeholder pressure."
      },
      {
        "type": "multi",
        "q": "What does the Scrum Master do with respect to stakeholders? (select all that apply)",
        "opts": [
          "Facilitates collaboration with stakeholders when requested or needed",
          "Helps remove barriers between stakeholders and the Scrum Team",
          "Makes final Product Backlog ordering decisions on behalf of stakeholders",
          "Replaces the Product Owner in negotiating priorities with stakeholders"
        ],
        "correct": [
          0,
          1
        ],
        "exp": [
          "Correct: this is one of the explicit ways the Scrum Master serves the organization.",
          "Correct: removing barriers between stakeholders and the Scrum Team is a Scrum Master responsibility.",
          "Incorrect: ordering the Product Backlog is the Product Owner's exclusive responsibility.",
          "Incorrect: the Scrum Master facilitates but does not replace the Product Owner as the negotiator of priorities."
        ],
        "trap": "The Scrum Master facilitates and removes barriers, but never usurps the content or ordering decisions that belong to the Product Owner."
      },
      {
        "type": "single",
        "q": "What are stakeholders in relation to the Scrum Team?",
        "opts": [
          "They are people outside the Scrum Team who collaborate with it, especially at the Sprint Review",
          "They are members of the Scrum Team alongside the Product Owner, Scrum Master, and Developers",
          "They have the authority to directly direct the Developers' work",
          "They stand in for the Product Owner when unavailable"
        ],
        "correct": 0,
        "exp": [
          "Correct: stakeholders are external to the Scrum Team, even though they collaborate closely with it, especially at the Sprint Review.",
          "Incorrect: the Scrum Team consists solely of the Product Owner, Scrum Master, and Developers.",
          "Incorrect: directing the Developers' work is not a stakeholder role.",
          "Incorrect: the Scrum Guide does not provide for a stakeholder standing in for the Product Owner."
        ],
        "trap": "A very common exam mistake is thinking that 'collaborating closely' is the same as 'being a member of the Scrum Team'."
      }
    ]
  }
];

const ALL_QUESTIONS_EN = TOPICS_EN.flatMap(t => t.questions.map(q => ({...q, topicId: t.id, topicName: t.name})));
