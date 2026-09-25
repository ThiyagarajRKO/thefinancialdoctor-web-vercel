export type Faq = { q: string; a: string };

export type Service = {
  slug: "mortgages" | "insurance" | "investing";
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  summary: string;
  /** Direct answer block at the top of each service page. Written to be quoted by search and AI engines. */
  inShort: string;
  problem: { title: string; body: string };
  offerings: { title: string; body: string }[];
  approach: string[];
  panelStat: { value: string; label: string }; // TODO: verify
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "mortgages",
    name: "Mortgage Advice",
    navLabel: "Mortgages",
    metaTitle: "Mortgage Advice and Broker Services",
    metaDescription:
      "Independent mortgage advice for first homes, refinancing, investment property and self employed borrowers. Compare lenders, lower total borrowing cost and structure the loan around your wider plan.",
    headline: "The right mortgage is the one that fits the next ten years, not just the next rate.",
    summary:
      "Purchase, refinance and investment property lending, compared across a wide panel of lenders and structured around your cash flow, protection and long term goals.",
    inShort:
      "A mortgage advisor compares lenders on your behalf, negotiates terms and structures the loan to suit your finances. The rate matters, but total cost, flexibility, prepayment rules and how the debt fits your wider plan usually matter more. I handle the paperwork and the lender conversations from application to closing.",
    problem: {
      title: "Most borrowers compare rates. Few compare the full cost.",
      body:
        "A headline rate hides the terms that decide what you really pay: penalties for breaking early, prepayment limits, portability and how quickly the balance falls. The cheapest looking loan is often the most expensive one to live with. My job is to put every option on the same page so the trade offs are obvious before you sign.",
    },
    offerings: [
      { title: "First home purchase", body: "Pre approval, budgeting for closing costs and a clear view of what you can comfortably carry, not just what a lender will allow." },
      { title: "Refinance and rate reviews", body: "A structured review before your term ends or when rates move, so you never roll into a default offer without comparing the market." },
      { title: "Self employed and complex income", body: "Lenders read business income differently. I package your file so it is assessed the way it should be." },
      { title: "Investment and rental property", body: "Financing that considers cash flow, tax treatment and how each property affects your ability to borrow again." },
      { title: "Debt consolidation", body: "Folding high interest balances into a lower cost structure, with a plan so the debt does not quietly return." },
    ],
    approach: [
      "Map your income, obligations and five year plans before we look at a single rate.",
      "Compare lenders on total cost over the term, penalties, flexibility and approval fit.",
      "Present two or three options side by side, with a written recommendation and the reasons for it.",
      "Manage the application, conditions and closing, then diarise a review well before your term ends.",
    ],
    panelStat: { value: "40+", label: "Lenders compared on every application" },
    faqs: [
      { q: "Does using a mortgage advisor cost me anything?", a: "For most residential mortgages the lender pays the advisor's fee, so there is no direct cost to you. Where a fee applies, for example with some private or complex files, it is disclosed in writing before any work begins." },
      { q: "How much house can I afford?", a: "Lenders set a maximum based on debt service ratios, but the number that matters is what you can carry while still saving, insuring your income and living well. We work that out together before you start viewing homes." },
      { q: "Should I choose a fixed or variable rate?", a: "It depends on your cash flow tolerance, how long you plan to keep the property and whether you may need to break the mortgage early. I show you the cost of each under different rate scenarios so the choice is a numbers decision, not a guess." },
      { q: "When should I start planning a refinance or renewal?", a: "Start four to six months before your term ends. That gives time to compare the market and secure a rate hold, rather than accepting your current lender's first offer." },
      { q: "Can you help if I am self employed?", a: "Yes. Self employed borrowers are a large part of my practice. The key is presenting income the way lenders assess it, which often means preparing the file differently from a salaried application." },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance Planning",
    navLabel: "Insurance",
    metaTitle: "Life, Disability and Critical Illness Insurance Advice",
    metaDescription:
      "Independent insurance advice to protect your family, income and business. Life, disability, critical illness and business coverage, sized to your real needs and compared across insurers.",
    headline: "Cover the life you have built. Pay only for protection you need.",
    summary:
      "Life, income and illness protection sized to your actual obligations, compared across leading insurers and reviewed as your life changes.",
    inShort:
      "Good insurance advice starts with a needs analysis, not a product. I calculate what your family or business would need if your income stopped, subtract what you already have, and recommend the most cost effective way to close the gap. Policies are compared across insurers and reviewed whenever your life changes.",
    problem: {
      title: "Most families are either underinsured or paying for the wrong cover.",
      body:
        "Workplace plans rarely follow you if you leave, and they seldom cover more than a year or two of income. Meanwhile, many people carry expensive policies that were sold rather than planned. A proper needs analysis usually finds a gap in one place and waste in another.",
    },
    offerings: [
      { title: "Life insurance", body: "Term and permanent cover sized to clear debts, replace income and fund goals like education, with the right mix for your age and budget." },
      { title: "Disability and income protection", body: "Your ability to earn is your largest asset. Cover that pays a monthly benefit if illness or injury stops you working." },
      { title: "Critical illness", body: "A tax efficient lump sum on diagnosis of a serious illness, giving you options on treatment, recovery time and household costs." },
      { title: "Business protection", body: "Key person, shareholder and buy sell arrangements that keep a business stable if a partner dies or cannot work." },
      { title: "Policy review", body: "A second opinion on existing cover. Sometimes the best advice is to keep what you have." },
    ],
    approach: [
      "Calculate your real need: debts, income replacement, dependants and future goals.",
      "Audit existing cover, including workplace benefits, so nothing is duplicated.",
      "Compare insurers on price, definitions, underwriting and claims record.",
      "Support you through underwriting and review cover at every major life event.",
    ],
    panelStat: { value: "20+", label: "Insurers compared for every recommendation" },
    faqs: [
      { q: "How much life insurance do I need?", a: "Enough to clear your debts, replace the income your family relies on for as long as they would need it, and fund specific goals such as education. A common shortcut is a multiple of salary, but a proper needs analysis is more accurate and often cheaper." },
      { q: "Is term or permanent life insurance better?", a: "Term insurance is the most cost effective way to cover temporary needs such as a mortgage or raising children. Permanent insurance suits lifelong needs like estate liquidity or leaving a legacy. Many families use a blend of both." },
      { q: "Is my insurance through work enough?", a: "Usually not on its own. Group cover is often limited to one or two years of salary, may end when you change jobs and can have narrow disability definitions. It is a useful base, not a complete plan." },
      { q: "What is the difference between disability and critical illness insurance?", a: "Disability insurance replaces income monthly while you cannot work. Critical illness pays a lump sum on diagnosis of a covered condition, whether or not you can still work. They solve different problems and often work best together." },
      { q: "Will a health condition stop me getting covered?", a: "Not necessarily. Insurers assess conditions very differently. Knowing which insurer views your history most favourably is one of the main advantages of working with an independent advisor." },
    ],
  },
  {
    slug: "investing",
    name: "Investment Planning",
    navLabel: "Investing",
    metaTitle: "Investment and Retirement Planning Advice",
    metaDescription:
      "Goal based investment and retirement planning. Tax efficient account strategy, diversified portfolios, education savings and a written plan that shows whether you are on track.",
    headline: "Invest with a destination, a timeline and a plan for the bad years.",
    summary:
      "Goal based portfolios, tax efficient account strategy and retirement income planning, all tied to a written plan you can measure progress against.",
    inShort:
      "Investment planning means setting clear goals, choosing the right tax advantaged accounts, building a diversified portfolio that matches your risk capacity and rebalancing with discipline. I build a written plan that shows whether you are on track, what return you actually need and what to change if markets or your life shift.",
    problem: {
      title: "Returns get the attention. Behaviour and tax decide the outcome.",
      body:
        "Two investors with identical portfolios can end up decades apart because of account choice, fees, contribution timing and how they react to a falling market. A plan that is written down before the downturn is the one most likely to be followed during it.",
    },
    offerings: [
      { title: "Retirement planning", body: "How much you need, when you can stop, and a withdrawal order that makes your savings last as long as you do." },
      { title: "Tax efficient account strategy", body: "Which accounts to fund first and in what order, so more of your return stays with you." },
      { title: "Portfolio construction", body: "Low cost, diversified portfolios built around your timeline and your capacity for risk, not a generic questionnaire score." },
      { title: "Education savings", body: "Structured saving for children and grandchildren that takes advantage of any available grants and tax treatment." },
      { title: "Wealth transfer", body: "Coordinating beneficiaries, estate liquidity and insurance so assets pass on cleanly and efficiently." },
    ],
    approach: [
      "Define each goal with a target amount and date, then calculate the return it actually requires.",
      "Choose the right account for every dollar before choosing any investment.",
      "Build a diversified, low cost portfolio and document the rules for rebalancing.",
      "Review progress at least annually and adjust when goals, markets or tax rules change.",
    ],
    panelStat: { value: "$180M+", label: "Client assets under advice" },
    faqs: [
      { q: "How much do I need to start investing with an advisor?", a: "There is no minimum to begin a conversation. Many clients start with a plan and regular contributions rather than a large lump sum. What matters most is having a clear goal and a consistent habit." },
      { q: "How much do I need to retire?", a: "It depends on the income you want, when you want to stop working, other income sources such as pensions and how long your savings must last. A retirement projection turns those inputs into a specific number and monthly savings target." },
      { q: "How are investment fees structured?", a: "Fees may be an asset based percentage, a flat planning fee or embedded in the products used. You will see the total annual cost in dollars, in writing, before you invest." },
      { q: "What happens to my plan when the market falls?", a: "The plan anticipates it. Your portfolio is built around money you will not need for years, while near term needs are held more conservatively. Downturns become a time to rebalance, not a reason to abandon the plan." },
      { q: "Can you work with investments I already hold elsewhere?", a: "Yes. We start by reviewing everything you own, wherever it is held, and recommend changes only where they clearly improve cost, tax efficiency or fit with your goals." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const processSteps = [
  { n: "01", name: "Diagnose", when: "First meeting", body: "A focused conversation about your goals, income, debts, cover and savings. No products on the table." },
  { n: "02", name: "Prescribe", when: "Within two weeks", body: "A written plan with clear recommendations, the numbers behind them and exactly how I am paid for each." },
  { n: "03", name: "Implement", when: "At your pace", body: "I handle applications, lenders, insurers and transfers, and keep you informed at every step." },
  { n: "04", name: "Review", when: "Every year", body: "A scheduled check up, plus a call whenever life changes: a new home, a child, a business, a retirement date." },
] as const;

export const lifeMoments = [
  { title: "Buying your first home", body: "Know your real budget, secure the right mortgage and protect the household that comes with it." },
  { title: "Growing a family", body: "Life and income cover sized to your new responsibilities, plus an education savings plan that starts early." },
  { title: "Running a business", body: "Complex income mortgages, key person protection and a clear line between company and personal wealth." },
  { title: "Planning retirement", body: "A date, a number and an income plan that turns decades of saving into a dependable monthly paycheque." },
] as const;

export const generalFaqs: Faq[] = [
  { q: "What does a financial advisor actually do?", a: "A financial advisor helps you make coordinated decisions about borrowing, protection and investing. In practice that means analysing your situation, writing a plan, recommending specific solutions, implementing them and reviewing progress over time." },
  { q: "Why work with one advisor for mortgages, insurance and investing?", a: "Because the decisions depend on each other. Your mortgage affects how much insurance you need, your insurance affects how much you can invest, and your investments affect how quickly you can pay down debt. One advisor sees all of it and avoids the gaps and overlaps that come from three separate salespeople." },
  { q: "How are you paid?", a: "It depends on the service. Mortgage work is usually paid by the lender, insurance by the insurer, and investment advice through a planning fee or an asset based fee. Every arrangement is disclosed in writing before you commit to anything." },
  { q: "Is the first consultation really free?", a: "Yes. The first meeting is a 30 minute conversation, by video or in person, with no cost and no obligation. You will leave with at least one useful observation about your finances whether or not we work together." },
  { q: "Do I need a lot of money to work with you?", a: "No. Many clients start with a mortgage or an insurance review and build from there. The earlier good decisions are made, the more they are worth." },
  { q: "What should I prepare for the first meeting?", a: "Nothing formal. A rough idea of your income, debts, existing cover and savings is enough. If you have recent statements or a mortgage renewal letter, bring them along." },
  { q: "Are you independent?", a: "I work with a broad panel of lenders, insurers and investment providers rather than a single company, so recommendations are based on what fits you, not on what one firm needs to sell." },
  { q: "Do you work with clients remotely?", a: "Yes. Most meetings can happen by video, and documents are signed electronically. In person meetings are available at the office by appointment." },
];
