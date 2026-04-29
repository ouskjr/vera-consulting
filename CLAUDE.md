# Vera Consulting — Website Build Context

This file gives Claude Code full project context. Read this before writing any code.

---

## Project Overview

**Client:** Vera Consulting  
**Type:** Static website — HTML + CSS + Vanilla JS only. No frameworks. No build tools.  
**Deploy:** Netlify (auto-deploy from GitHub push)  
**Goal:** A premium, conversion-focused advisory website for expats and property investors in Georgia.

---

## Brand Identity

### Colors
```css
--green:       #1C3A2F;   /* Primary — backgrounds, headings, nav */
--green-light: #2d5a44;   /* Hover states */
--gold:        #B8975A;   /* Accent — CTAs, highlights, icons */
--gold-light:  #d4b07a;   /* Gold hover */
--cream:       #F5F0E8;   /* Page background */
--cream-dark:  #ede6d8;   /* Section dividers, card backgrounds */
--text:        #1A1A1A;   /* Body text */
--text-muted:  #6b6050;   /* Secondary text, hints */
--border:      #ddd5c4;   /* Borders, dividers */
--white:       #ffffff;
```

### Typography
```
Headlines / Display:  Cormorant Garamond (Google Fonts) — weights 400, 600, italic
Body / UI:            DM Sans (Google Fonts) — weights 300, 400, 500, 600
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Visual Tone
- Premium, minimal, European — think boutique consultancy, not construction company
- Generous white space
- Clean lines, no drop shadows except very subtle ones
- No gradients except very subtle on buttons
- Photography: clean interiors, Tbilisi architecture (stock for now)
- Icons: thin line icons only (use Lucide Icons CDN)

---

## Project File Structure

Build this exact structure:

```
vera-consulting/
├── index.html            # Homepage
├── services.html         # Services page
├── how-it-works.html     # How It Works page
├── about.html            # About page
├── contact.html          # Contact page
├── css/
│   ├── reset.css         # CSS reset
│   ├── variables.css     # All CSS custom properties
│   ├── global.css        # Typography, body, shared elements
│   ├── components.css    # Buttons, cards, nav, footer
│   └── pages/
│       ├── home.css
│       ├── services.css
│       ├── how-it-works.css
│       ├── about.css
│       └── contact.css
├── js/
│   ├── nav.js            # Mobile nav toggle, scroll behaviour
│   └── main.js           # General interactions
├── images/
│   └── (stock images go here)
└── CLAUDE.md             # This file
```

---

## Navigation

### Desktop Nav
```
[Vera Consulting logo/wordmark] .......... [Services] [How It Works] [About] [Contact]  [Book a Consultation →]
```

### Mobile Nav
- Hamburger icon right side
- Full-screen overlay menu
- Same links as desktop
- WhatsApp button at bottom of mobile menu

### Nav Behaviour
- Transparent on page load over hero
- Solid `--green` background on scroll (after 80px)
- Active page link highlighted in `--gold`
- "Book a Consultation" button: gold background, always visible

---

## Pages & Full Copy

---

### PAGE 1: index.html — Homepage

#### SECTION: Hero
```
Headline:    Your Independent Property & Project Advisor in Georgia.
Subheadline: We protect expats and investors from costly mistakes — before you buy,
             during renovation, and after completion. No contractor ties.
             No hidden agenda. Just expert, independent guidance.
CTA Button:  Book a Consultation  [links to contact.html]
Link below:  See our services ↓   [smooth scroll to services section]
```
Design: Full-viewport hero. Dark green background (`--green`). White headline in Cormorant Garamond 56px. Subheadline in DM Sans 18px, off-white. Gold CTA button. Consider a subtle geometric pattern or very light texture overlay on the background.

---

#### SECTION: Three Value Pillars
```
Section heading: Why Vera Consulting.

Pillar 1 — Independent
We work exclusively for you — never for contractors, developers, or agents.
Our only incentive is protecting your investment.

Pillar 2 — Expert
UK-educated. 5+ years of project management experience across complex
renovation and construction projects in Georgia.

Pillar 3 — End-to-End
From property inspection before purchase to snagging checks after
completion — we cover every critical phase.
```
Design: Three columns on desktop, stacked on mobile. Cream background. Thin gold line above each pillar heading. Icon for each (use Lucide: `shield`, `award`, `layers`).

---

#### SECTION: Who We Serve
```
Heading: Built for people making serious property decisions in Georgia.

Body: Whether you're relocating, investing remotely, or renovating your
first property here — the Georgian construction market is complex.
Costs are opaque. Contractors are unregulated. Mistakes are expensive.
We exist to change that.

Card 1 — Expats in Georgia
Living here and renovating your home. You need someone who speaks the
language — literally and professionally.

Card 2 — Foreign Investors
Buying to rent or flip. You need a trusted local expert who understands
real project costs and real market value.

Card 3 — Remote Property Owners
You own a property in Georgia but can't be on-site. We become your
eyes, your voice, and your protection.
```
Design: Dark green background section. Three cards in cream/white. Gold accent on card tops.

---

#### SECTION: Services Snapshot
```
Heading: What we do.
Subheading: From pre-purchase inspection to full project management —
            every service is independent, transparent, and delivered
            by a qualified expert.

Show 3 featured service cards:

Card 1: Pre-Purchase Property Inspection — $350–$500
A full structural and quality assessment before you buy.

Card 2: Renovation Audit — $400–$550
Independent review of plans, quotes, and contractor proposals.

Card 3: Project Management — $600–$1,000/month
End-to-end management. You stay informed, we handle everything.

Link: View all services →  [links to services.html]
```

---

#### SECTION: Process Teaser
```
Heading: A clear process. A trusted advisor. No surprises.
Body: We follow a structured, transparent approach on every engagement —
      so you always know what you're getting, what it costs, and what
      happens next.
Link: See how it works →  [links to how-it-works.html]
```
Design: Cream background. Simple numbered step preview (1–4) in a horizontal row on desktop.

---

#### SECTION: About Teaser
```
Heading: An advisor, not a contractor.
Body: Vera Consulting was built on a simple principle: people spending
      serious money on property in Georgia deserve an independent expert
      in their corner. Someone who has seen what goes wrong, knows how
      to prevent it, and has no financial reason to mislead you.
Link: About Vera Consulting →  [links to about.html]
```

---

#### SECTION: Final CTA
```
Heading: Ready to protect your investment?
Body: Book a paid consultation and get expert, independent advice —
      before you commit to a single dollar.
Button: Book a Consultation  [links to contact.html]
```
Design: Dark green full-width section. Gold button. White text.

---

### PAGE 2: services.html — Services

#### Page Hero (smaller than homepage)
```
Heading:    Expert Advisory at Every Stage.
Subheading: Every service we offer is independent, transparent, and
            delivered by a qualified project management expert. We don't
            build. We don't sell properties. We advise — and our only
            obligation is to you.
Body:       All fees are fixed or range-based and agreed in writing before
            we begin. No surprises.
```

---

#### SITUATION 1: Before You Buy
```
Section heading: Buying a property in Georgia?
Intro: Before you commit, know exactly what you're getting into. Our
       pre-purchase services give you the facts — structural condition,
       renovation costs, and investment viability — so you negotiate
       from strength, not hope.

SERVICE: Pre-Purchase Property Inspection ★ Most Requested
Price: $350 – $500
A full structural and quality assessment of a property before you buy.
We identify hidden defects, construction issues, and maintenance risks
that aren't visible to the untrained eye. You receive a clear written
report with findings and recommendations — so you can negotiate a
better price, walk away, or proceed with full confidence.
Delivery: On-site visit + written report within 48 hours

SERVICE: Independent Cost Estimation
Price: $250 – $400
What will it actually cost to renovate this property? Before you hire
a contractor or accept a quote, get an independent estimate based on
real Georgian market rates. We assess the scope, calculate realistic
costs, and tell you whether the numbers you've been given are fair —
or inflated.
Delivery: Written cost estimate report

SERVICE: Investment Feasibility Study
Price: $600 – $900
Thinking of buying to renovate and rent — or to flip? We run the
numbers for you: purchase cost, renovation budget, market rental yield,
projected sale value, and realistic ROI timeline. You get a clear,
written feasibility report that tells you whether the investment makes
sense before you commit a dollar.
Delivery: Written feasibility report + 30-minute review call
```

---

#### SITUATION 2: Before You Renovate
```
Section heading: Planning a renovation?
Intro: The biggest renovation mistakes happen before the first hammer
       swings. The wrong contractor, an underestimated budget, or a
       flawed plan can cost you months and thousands. Our pre-renovation
       services catch these problems before they become your problem.

SERVICE: Renovation Audit ★ Most Requested
Price: $400 – $550
Already have renovation plans, a contractor proposal, or a quote?
Before you sign anything, let us review it. We assess the scope,
identify gaps and red flags, check whether the pricing is realistic,
and tell you what questions to ask — and what to demand in writing.
This single step can save you far more than it costs.
Delivery: On-site or remote review + written audit report

SERVICE: Contractor Vetting & Tendering
Price: $450 – $650
Finding a reliable contractor in Georgia is genuinely difficult. We
source, screen, and compare contractors for your specific project —
checking their track record, quality standards, and pricing. You
receive a shortlist of vetted options with our honest assessment of
each, so you choose with confidence rather than hope.
Delivery: Up to 3 contractors evaluated + written comparison report
```

---

#### SITUATION 3: During Renovation
```
Section heading: Renovating now?
Intro: The renovation phase is where things go wrong — scope creep,
       cost overruns, quality issues, delays. Having an independent
       expert managing or monitoring your project changes the dynamic
       entirely. Contractors perform differently when they know someone
       qualified is watching.

SERVICE: Full Project Management ★ Core Service
Price: $600 – $1,000 / month
End-to-end project management for your renovation. We coordinate
contractors, control the timeline, manage quality at every stage,
handle issues before they escalate, and report to you consistently
throughout. You stay informed without having to be on-site. Your
project gets delivered to the standard you were promised.
Delivery: Active management with weekly client reporting

SERVICE: Remote Owner Representation
Price: $350 – $600 / month
Not in Georgia — but your renovation is? We become your on-the-ground
representative. Regular site visits, photo and video reporting,
contractor accountability, and direct communication with you wherever
you are. You don't have to be present to be in control.
Delivery: 2–4 site visits per month + weekly photo/video reporting

SERVICE: Permit & Documentation Advisory
Price: $400 – $800
Georgian bureaucracy — permits, planning approvals, technical
documentation — can slow a project to a halt if not handled correctly.
We navigate the process, prepare the right documentation, and ensure
your project is legally compliant from start to finish.
Delivery: Full documentation support, complexity-dependent
```

---

#### SITUATION 4: After Completion
```
Section heading: Renovation complete?
Intro: Don't accept the final handover until it's been independently
       checked. Issues missed at completion become your problem —
       and your cost — the moment you sign off.

SERVICE: Snagging Inspection
Price: $300 – $450
A thorough post-renovation quality inspection before you accept the
final handover from your contractor. We identify defects, unfinished
work, and deviations from the agreed scope — and produce a formal
punch list that holds the contractor accountable before you make
your final payment.
Delivery: On-site inspection + written snagging report
```

---

#### Services Page CTA
```
Heading: Not sure which service you need?
Body: Contact us directly and describe your situation. We'll tell you
      exactly which service fits — and what it will cost.
Button: Get in Touch  [links to contact.html]
```

---

### PAGE 3: how-it-works.html — How It Works

#### Page Hero
```
Heading: Simple. Transparent. No surprises.
Body: From your first contact to the delivery of your report or final
      site visit — this is exactly what to expect when you work with
      Vera Consulting.
```

---

#### Four Steps
```
Step 1 — Contact Us & Describe Your Situation
Reach out via WhatsApp, phone, or our contact form. Tell us what you
need — which property, what stage you're at, and what your main concern
is. We'll confirm whether we can help, which service fits, and what
the fee will be. No obligation, no vague quotes.

Step 2 — We Confirm Scope & You Book
Once we've agreed on the scope and fee, you book and confirm via our
calendar link. For on-site services, we agree on a date and access.
For remote or document-based services, you share the relevant files.
Payment is agreed in advance — no invoices after the fact.

Step 3 — We Assess & Deliver a Written Report
We carry out the inspection, audit, or assessment with a structured,
professional approach. Our findings are documented in a clear written
report — specific, direct, and written in plain English. No vague
opinions. No filler. Just the information you need to make a better
decision.

Step 4 — You Decide with Confidence
Armed with our independent assessment, you move forward knowing the
real picture. Whether you proceed, negotiate, walk away, or engage us
for ongoing management — the decision is yours, and it's an informed
one.
```
Design: Large numbered steps (Cormorant Garamond numerals). Alternating layout on desktop — number left / text right, then flip.

---

#### Our Commitments
```
Heading: Our commitments to every client.

Written Deliverable
Every engagement ends with a written report. Not a verbal opinion.
Not a WhatsApp message. A formal document you can act on.

Fixed Fees
The price we agree before we start is the price you pay.
No scope creep charges. No surprise additions.

Full Independence
We have no financial relationship with any contractor, developer,
or agent in Georgia. Our assessment is always unbiased.

48-Hour Delivery
Reports for inspection and audit services are delivered within
48 hours of the site visit or assessment.
```

---

#### How It Works CTA
```
Heading: Ready to get started?
Body: Contact us and we'll confirm the right service and fee within 24 hours.
Button: Get in Touch →  [links to contact.html]
```

---

### PAGE 4: about.html — About

#### Opening
```
Heading: Built for one reason.
Para 1: Too many people in Georgia — expats, foreign investors, and
        locals alike — make expensive property and renovation decisions
        without independent expert guidance. They trust a contractor's
        quote without verifying it. They buy a property without a proper
        inspection. They start renovations without a qualified manager
        holding anyone accountable.
Para 2: The result is predictable: delays, cost overruns, quality
        failures, and regret.
Para 3: Vera Consulting was built to change that. We are an independent
        property and project advisory firm operating in Georgia —
        serving clients who are spending serious money and deserve
        serious, unbiased expertise.
```

---

#### What Makes Us Different
```
Heading: Independence is everything.
Para 1: Most advice in the Georgian property market comes with a hidden
        agenda. Agents earn commissions. Contractors benefit from higher
        budgets. Developers want to move inventory. None of them are
        working for you.
Para 2: We are. Vera Consulting has no financial relationship with any
        contractor, developer, or real estate agent in Georgia. We don't
        build. We don't sell properties. We advise — and our only
        interest is protecting your investment and your outcome.
```

---

#### About the Founder
```
Heading: Who you're working with.
Para 1: Vera Consulting is led by a UK-educated project management
        professional with over five years of hands-on experience
        delivering complex renovation and construction projects
        across Georgia.
Para 2: Having worked directly with expat clients, international
        investors, and premium residential clients, the Vera Consulting
        model was built from a deep understanding of the specific
        challenges foreigners face when navigating the Georgian property
        and construction market — language barriers, opaque pricing,
        unregulated contractors, and a bureaucratic system that rewards
        those who know how it works.
Para 3: Our approach is direct, structured, and uncompromising on
        quality. We tell you what you need to hear — not what makes
        things easier in the short term.

[PLACEHOLDER: Professional headshot — to be added]
```

---

#### Credentials Bar
```
UK-Educated
Management with International Business
Royal Holloway, University of London

5+ Years PM Experience
Complex renovation and construction projects
delivered across Tbilisi and Georgia

Expat-Specialist
Deep experience advising foreign clients on
the Georgian property and construction market
```

---

#### About CTA
```
Heading: Have a project in mind?
Body: Contact us directly — we'll tell you honestly whether we can
      help and what it will cost.
Button: Get in Touch →  [links to contact.html]
```

---

### PAGE 5: contact.html — Contact

#### Page Hero
```
Heading: Let's talk about your project.
Body: Tell us what you're dealing with — where you are in the process,
      what the property is, and what your main concern is. We'll respond
      within 24 hours and confirm whether we can help, which service
      fits, and what it will cost.
Note: No free discovery calls. We respect your time by being direct
      from the start.
```

---

#### Contact Methods
```
WhatsApp — Fastest response
Message us directly with your project details.
We respond within a few hours during business hours.
[Button: Message on WhatsApp]
[Pre-filled message: "Hi, I'm interested in a Vera Consulting service for a property in Georgia."]

Book a Consultation — Via Calendar
Ready to proceed? Book directly via our calendar.
Select the service, choose a time, confirm your booking.
[Button: Book via Calendly]
[Calendly link: TO BE ADDED]

Phone / Direct Call
Prefer to speak? Call us directly.
Monday–Friday, 9am–6pm Tbilisi time (UTC+4)
[Phone number: TO BE ADDED]

Email
For formal enquiries or document sharing.
We respond to all emails within 24 business hours.
[Email: TO BE ADDED — muto@veraconsulting.com]
```

---

#### Contact Form
```
Fields:
- Your name (text, required)
- Your email (email, required)
- WhatsApp / Phone (text, optional)
- Service interested in (select dropdown):
    Pre-Purchase Property Inspection
    Renovation Audit
    Independent Cost Estimation
    Snagging Inspection
    Full Project Management
    Contractor Vetting & Tendering
    Remote Owner Representation
    Investment Feasibility Study
    Permit & Documentation Advisory
    Not sure yet — need advice
- Tell us about your project (textarea, required, min 20 chars)
- Submit: "Send Message"

After submit: Show inline confirmation message:
"Thank you. We'll be in touch within 24 hours."

Note: Use Formspree (formspree.io) for form handling — free,
no backend needed, works with static Netlify sites.
Sign up at formspree.io, create a form, get your endpoint URL,
replace action="" in the form tag.
```

---

#### Location Block
```
Heading: Where we operate.
Body: Vera Consulting is based in Tbilisi, Georgia. We operate across
      Tbilisi and surrounding areas for on-site services. Remote
      services — including document audits, cost reviews, and investment
      feasibility studies — are available to clients anywhere in the world.
```

---

## Global Components

### Navigation HTML Structure
```html
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">Vera <span>Consulting</span></a>
    <ul class="nav-links">
      <li><a href="services.html">Services</a></li>
      <li><a href="how-it-works.html">How It Works</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html" class="btn btn-gold nav-cta">Book a Consultation</a>
    <button class="nav-hamburger" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

### Footer HTML Structure
```html
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">Vera <span>Consulting</span></div>
      <p>Independent Property & Project Advisory — Georgia</p>
      <p class="footer-tagline">"We work for you. Not the contractor."</p>
    </div>
    <nav class="footer-nav">
      <a href="services.html">Services</a>
      <a href="how-it-works.html">How It Works</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Vera Consulting. All rights reserved.</p>
    <p>Vera Consulting is an independent advisory firm. We have no financial
    relationship with any contractor, developer, or real estate agent.</p>
  </div>
</footer>
```

---

## Button Styles
```
Primary (Gold):    background: #B8975A, color: white, border-radius: 8px, padding: 13px 28px
Secondary (Ghost): background: transparent, border: 1.5px solid #B8975A, color: #B8975A
Dark (on cream):   background: #1C3A2F, color: white
```

---

## SEO Meta Tags (add to every page `<head>`)

**index.html**
```html
<title>Vera Consulting | Independent Property & Project Advisory in Georgia</title>
<meta name="description" content="Expert, independent property inspection, renovation audit, and project management for expats and investors in Georgia. No contractor ties. Transparent fees.">
```

**services.html**
```html
<title>Services | Vera Consulting — Property & Project Advisory Georgia</title>
<meta name="description" content="Pre-purchase inspections, renovation audits, full project management, and more. Independent advisory services for property buyers and investors in Georgia.">
```

**how-it-works.html**
```html
<title>How It Works | Vera Consulting — Clear Process, No Surprises</title>
<meta name="description" content="A simple 4-step process: contact us, confirm scope, receive written report, decide with confidence. Transparent from start to finish.">
```

**about.html**
```html
<title>About Vera Consulting | Independent Property Advisors in Tbilisi</title>
<meta name="description" content="UK-educated project management professionals. 5+ years experience in Georgia. Fully independent — no contractor relationships, no hidden agendas.">
```

**contact.html**
```html
<title>Contact Vera Consulting | Get Expert Property Advice in Georgia</title>
<meta name="description" content="Reach out via WhatsApp, phone, or our booking calendar. We respond within 24 hours and advise on the right service for your situation.">
```

---

## Build Instructions for Claude Code

When building this site:

1. **Start with `css/variables.css`** — define all custom properties first
2. **Build `css/global.css`** — typography, reset, shared layout classes
3. **Build `css/components.css`** — nav, footer, buttons, cards (used across all pages)
4. **Build pages in this order:** index.html → services.html → how-it-works.html → about.html → contact.html
5. **Mobile-first CSS** — write mobile styles first, use `min-width` media queries to scale up
6. **Breakpoints:** 480px / 768px / 1024px / 1280px
7. **No JavaScript frameworks** — vanilla JS only for nav toggle and scroll effects
8. **Form:** Use Formspree for contact form — no backend needed
9. **Images:** Use Unsplash for placeholder stock images — clean interiors, Tbilisi, architecture
10. **Test on mobile** after every page — majority of expat audience is on mobile

### Key Design Rules
- Never use `Arial`, `Roboto`, or `system-ui` — always `DM Sans` or `Cormorant Garamond`
- All section padding: `80px 0` desktop, `48px 0` mobile
- Max content width: `1200px`, centered with `margin: 0 auto`
- All CTAs must link to `contact.html`
- The nav "Book a Consultation" button must be visible at all times

---

## Placeholders to Fill Later
- [ ] Business phone number
- [ ] Business email (muto@veraconsulting.com — once domain is live)
- [ ] Calendly link
- [ ] Formspree form endpoint
- [ ] Professional headshot (About page)
- [ ] WhatsApp business number for click-to-chat link
- [ ] Real project photos (when available)
- [ ] Georgian language toggle (Phase 2)
