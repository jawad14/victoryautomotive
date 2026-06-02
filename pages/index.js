import Head from 'next/head'

const bodyHtml = `
<header class="site-header">
  <div class="topbar">
    <div class="wrap">
      <div class="tb-left">
        <a href="https://maps.google.com/?q=1/36+Centenary+Place,+Logan+Village+QLD+4207" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          1/36 Centenary Place, Logan Village QLD 4207
        </a>
      </div>
      <div class="tb-right">
        <a href="tel:0755910902">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          (07) 5591 0902
        </a>
        <a href="tel:0416146737">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
          0416 146 737
        </a>
      </div>
    </div>
  </div>
  <div class="wrap">
    <nav class="navbar">
      <a href="/" class="brand">
        <img src="/assets/victory-logo.png" alt="Victory Auto & Inspections">
      </a>
      <ul class="nav-links">
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#why">Why Us</a></li>
        <li><a href="/#reviews">Reviews</a></li>
        <li><a href="/#areas">Service Areas</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="tel:0416146737" class="nav-phone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          0416 146 737
        </a>
        <a href="/contact" class="btn btn-primary">Book an Inspection</a>
      </div>
      <button class="hamburger" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </nav>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  <div class="mm-top">
    <img src="/assets/victory-logo.png" alt="Victory Auto & Inspections">
    <button class="mclose" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <a href="/" class="mlink">Home</a>
  <a href="/#about" class="mlink">About</a>
  <a href="/#services" class="mlink">Services</a>
  <a href="/#why" class="mlink">Why Us</a>
  <a href="/#reviews" class="mlink">Reviews</a>
  <a href="/#areas" class="mlink">Service Areas</a>
  <a href="/contact" class="mlink">Contact</a>
  <div class="mm-actions">
    <a href="/contact" class="btn btn-primary btn-block btn-lg">Book an Inspection</a>
    <a href="tel:0416146737" class="btn btn-outline-light btn-block btn-lg">Call 0416 146 737</a>
  </div>
</div>

<section class="hero">
  <div class="hero-bg-V">V</div>
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <span class="eyebrow light">Approved Inspection Centre · Logan Village QLD</span>
        <h1>Roadworthy &amp; Safety <span class="hl">Inspections</span> Done Right.</h1>
        <p class="lead">Professional, approved vehicle inspections for cars, caravans and trailers across South-East Queensland. Fast, honest and hassle-free.</p>
        <div class="hero-cta">
          <a href="/contact" class="btn btn-primary btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book an Inspection
          </a>
          <a href="tel:0416146737" class="btn btn-outline-light btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            Call Now
          </a>
          <a href="/contact" class="btn btn-dark btn-lg">Get a Safety Certificate</a>
        </div>
        <div class="hero-trust">
          <div class="ht"><b><span data-count="4.9" data-dec="1">4.9</span>&#9733;</b><span>Google Rated</span></div>
          <div class="ht"><b><span data-count="25" data-suffix="+">25+</span></b><span>Years Experience</span></div>
          <div class="ht"><b><span data-count="100" data-suffix="%">100%</span></b><span>Mobile Service</span></div>
          <div class="ht"><b>QLD</b><span>Approved Centre</span></div>
        </div>
      </div>
      <div class="ph hero-photo">
        <span class="corner tl"></span><span class="corner br"></span>
        <span class="ph-label">
          <svg class="pi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 17h14M5 17a2 2 0 0 1-2-2v-3l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v3a2 2 0 0 1-2 2M5 17v2M19 17v2"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>
          <span class="ph-tag">[ Hero Photo ]</span>
          Inspector with tablet checking a vehicle in a customer driveway
        </span>
      </div>
    </div>
  </div>
  <div class="checker-strip"></div>
</section>

<section class="section" id="about">
  <div class="wrap">
    <div class="about-grid">
      <div class="ph light reveal">
        <span class="corner tl"></span><span class="corner br"></span>
        <span class="ph-label">
          <svg class="pi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 9V5a3 3 0 0 0-6 0v4"/><rect x="3" y="9" width="18" height="12" rx="2"/><circle cx="12" cy="15" r="2"/></svg>
          <span class="ph-tag">[ About Photo ]</span>
          Owner / inspector beside branded mobile inspection van
        </span>
      </div>
      <div class="reveal" data-delay="100">
        <span class="eyebrow">About Victory Auto</span>
        <h2 class="display" style="font-size:clamp(2rem,3.6vw,2.9rem);margin:14px 0 18px">A Family-Run Team With 25+ Years On The Tools</h2>
        <p class="lead" style="font-size:1.1rem;color:var(--muted)">LONGTREND PTY LTD, trading as Victory Auto &amp; Inspections, is a family-run, approved inspection centre with more than 25 years of automotive experience. We provide professional and reliable vehicle inspection services across Queensland — whether it's a car, caravan, trailer or other motor machine, our licensed inspectors deliver thorough, honest assessments wherever you are.</p>
        <p style="margin-top:14px;color:var(--muted)">We built Victory on a simple promise: certified inspections without the hassle. No towing, no waiting rooms, no wasted days. We bring the inspection centre to your home, workplace or storage yard and get you the paperwork you need to sell, register or stay road-legal.</p>
        <div class="about-points">
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>25+ Years Experience</b><span>Family-run, trusted local know-how</span></div>
          </div>
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>We Come To You</b><span>Fully mobile across South-East QLD</span></div>
          </div>
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>Honest &amp; Thorough</b><span>Detailed checks, clear reporting</span></div>
          </div>
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>Affordable Rates</b><span>Fair, upfront pricing — no surprises</span></div>
          </div>
        </div>
        <div style="margin-top:30px;display:flex;gap:14px;flex-wrap:wrap">
          <a href="/contact" class="btn btn-primary">Book Your Inspection</a>
          <a href="/#services" class="btn btn-ghost">View Services</a>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="checker-strip thin"></div>

<section class="section" id="services" style="background:#fff">
  <div class="wrap">
    <div class="shead center reveal">
      <span class="eyebrow center">What We Inspect</span>
      <h2 class="display" style="margin-top:14px">Services Offered</h2>
      <p class="lead mx-auto" style="color:var(--muted)">Approved inspections and certificates for every vehicle in your driveway — all delivered on-site, on your schedule.</p>
    </div>
    <div class="svc-grid">
      <article class="svc-card reveal">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14m-14 0v4m14-4v4M7 17h0m10 0h0"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="17" r="1"/></svg></div>
        <h3>Car Safety Certificates</h3>
        <p>Queensland Safety Certificates (formerly roadworthy) for cars and light vehicles — required to sell or re-register your vehicle.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="80">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 16V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8m-15 0h15m-15 0v2m15-2 2-3v-3l-2-1m0 7v2"/><circle cx="8" cy="18" r="1.6"/></svg></div>
        <h3>Caravan Inspections</h3>
        <p>Comprehensive caravan safety inspections covering chassis, brakes, coupling, lights and gas compliance before you hit the road.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="160">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="9" width="14" height="7" rx="1"/><path d="M16 12h3l3 2v2h-6"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg></div>
        <h3>Caravan Trailer Inspections</h3>
        <p>Trailer and caravan-trailer checks for safe towing — wheel bearings, suspension, electrical and load-rating compliance.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"/></svg></div>
        <h3>Roadworthy Certificates</h3>
        <p>Full roadworthy inspections to confirm your vehicle meets all Queensland safety standards — issued on the spot when it passes.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="80">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h3>Mobile Inspection Service</h3>
        <p>We bring the inspection centre to you — home, work or storage yard, anywhere across our South-East Queensland service area.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="160">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 4.5 3.5 8.5 8 10 4.5-1.5 8-5.5 8-10V6l-8-4Z"/><path d="M8 12l2.5 2.5L16 9"/></svg></div>
        <h3>Approved Inspection Centre</h3>
        <p>As a licensed and approved centre, we're authorised to carry out and certify a full range of motor-vehicle inspections.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
    </div>
  </div>
</section>

<section class="section why" id="why">
  <div class="wrap">
    <div class="shead center reveal">
      <span class="eyebrow light center">The Victory Difference</span>
      <h2 class="display" style="margin-top:14px;color:#fff">Why Choose Us</h2>
      <p class="lead mx-auto" style="color:#B7AFA4">Drivers across Logan, Brisbane and the Gold Coast trust Victory for inspections done right — the first time.</p>
    </div>
    <div class="why-grid">
      <div class="why-card reveal">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 4.5 3.5 8.5 8 10 4.5-1.5 8-5.5 8-10V6l-8-4Z"/><path d="M9 12l2 2 4-4"/></svg></span>01</div>
        <h3>Licensed &amp; Approved</h3>
        <p>An officially approved inspection service, authorised to issue safety and roadworthy certificates with confidence.</p>
      </div>
      <div class="why-card reveal" data-delay="70">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 16V8a2 2 0 0 1 2-2h9v10m0 0h5l1-3v-2l-3-1m-3 6h-12"/><circle cx="8" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/></svg></span>02</div>
        <h3>Mobile Service</h3>
        <p>We come to your location with everything we need. No towing, no driving across town — total convenience.</p>
      </div>
      <div class="why-card reveal" data-delay="140">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg></span>03</div>
        <h3>Fast &amp; Reliable</h3>
        <p>Punctual appointments and efficient inspections. Most certificates are issued on the spot the moment you pass.</p>
      </div>
      <div class="why-card reveal">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 1 0 5.4l-1.4 1.4M9.3 17.7a4 4 0 0 1 0-5.4M3 21l3-3m0 0 4-4m-4 4-2-2m16-10 2-2m0 0L20 2"/><rect x="9" y="9" width="6" height="6" rx="1" transform="rotate(45 12 12)"/></svg></span>04</div>
        <h3>Professional &amp; Affordable</h3>
        <p>Experienced inspectors, premium-grade service and fair, upfront pricing that won't blow out your budget.</p>
      </div>
      <div class="why-card reveal" data-delay="70">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg></span>05</div>
        <h3>Easy Booking</h3>
        <p>Book in seconds by phone or our online form. Pick a time that suits you and we'll handle the rest.</p>
      </div>
      <div class="why-card reveal" data-delay="140">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg></span>06</div>
        <h3>Trusted Locally</h3>
        <p>Hundreds of happy local customers and glowing Google reviews from drivers right across our service area.</p>
      </div>
    </div>
  </div>
</section>

<section class="section ratings" id="reviews">
  <div class="wrap">
    <div class="rating-head reveal">
      <div class="gscore">
        <div class="glogo">
          <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Google Reviews
        </div>
        <div class="gbig"><span data-count="4.9" data-dec="1">4.9</span></div>
        <div class="stars" aria-label="4.9 out of 5 stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
        </div>
        <div class="gcount">Based on 120+ reviews</div>
      </div>
      <div>
        <span class="eyebrow">Rated By Real Customers</span>
        <h2 class="display" style="font-size:clamp(2rem,3.6vw,2.9rem);margin:14px 0 14px">What Our Customers Say</h2>
        <p class="lead" style="color:var(--muted)">We're proud of the reputation we've earned across Logan, Brisbane and the Gold Coast. Here's what local drivers, grey nomads and caravanners have to say about Victory.</p>
        <a href="https://www.google.com/search?q=Victory+Auto+Inspections+Logan+Village" target="_blank" rel="noopener" class="btn btn-ghost" style="margin-top:22px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
          View Our Google Reviews
        </a>
      </div>
    </div>
    <div class="review-grid">
      <article class="review-card reveal">
        <span class="rstars" aria-label="5 stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
        </span>
        <p>"Came straight to my house and had the safety certificate sorted within the hour. Friendly, professional and so much easier than driving to a workshop. Highly recommend!"</p>
        <div class="rwho"><span class="rav">M</span><div><b>Mark T.</b><span>Logan Village, QLD</span></div><span class="gmark">G</span></div>
      </article>
      <article class="review-card reveal" data-delay="80">
        <span class="rstars" aria-label="5 stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
        </span>
        <p>"Had our caravan inspected before a big trip up north. Thorough, honest and explained everything clearly. Gave us total peace of mind on the road. Brilliant service."</p>
        <div class="rwho"><span class="rav">S</span><div><b>Sandra K.</b><span>Gold Coast, QLD</span></div><span class="gmark">G</span></div>
      </article>
      <article class="review-card reveal" data-delay="160">
        <span class="rstars" aria-label="5 stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9"/></svg>
        </span>
        <p>"Booked online the night before and they turned up right on time. Great value, no hidden fees and a genuinely nice bloke. Will use Victory for all our vehicles from now on."</p>
        <div class="rwho"><span class="rav">D</span><div><b>David R.</b><span>Brisbane Southside, QLD</span></div><span class="gmark">G</span></div>
      </article>
    </div>
  </div>
</section>

<section class="section areas" id="areas">
  <div class="wrap">
    <div class="areas-grid">
      <div class="reveal">
        <span class="eyebrow light">Where We Operate</span>
        <h2 class="display" style="font-size:clamp(2rem,3.6vw,2.9rem);margin:14px 0 14px;color:#fff">Service Areas</h2>
        <p class="lead" style="color:#B7AFA4">Proudly mobile across South-East Queensland. If you're in or around these areas, we'll come to you — driveway, workplace or storage yard.</p>
        <div class="area-chips">
          <span class="area-chip"><span class="dot"></span>Logan Village</span>
          <span class="area-chip"><span class="dot"></span>Logan Area</span>
          <span class="area-chip"><span class="dot"></span>Brisbane Southside</span>
          <span class="area-chip"><span class="dot"></span>Gold Coast</span>
          <span class="area-chip"><span class="dot"></span>Beenleigh</span>
          <span class="area-chip"><span class="dot"></span>Jimboomba</span>
          <span class="area-chip"><span class="dot"></span>Yarrabilba</span>
          <span class="area-chip"><span class="dot"></span>Surrounding QLD Suburbs</span>
        </div>
        <p style="margin-top:24px;color:var(--muted-light);font-size:.95rem">Not sure if we cover your suburb? <a href="/contact" style="color:var(--red-bright);font-weight:600">Get in touch</a> — chances are we do.</p>
      </div>
      <div class="ph reveal" data-delay="100">
        <span class="corner tl"></span><span class="corner br"></span>
        <span class="ph-label">
          <svg class="pi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span class="ph-tag">[ Map Graphic ]</span>
          Map of South-East Queensland service radius
        </span>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="cta-checker"></div>
  <div class="wrap">
    <div>
      <h2 class="display">Ready For Your Inspection?</h2>
      <p>Book online or call now — we'll bring the approved inspection centre to your door.</p>
    </div>
    <div class="cta-actions">
      <a href="/contact" class="btn btn-dark btn-lg">Book an Inspection</a>
      <a href="tel:0416146737" class="btn btn-outline-light btn-lg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        0416 146 737
      </a>
    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="fbrand">
        <img src="/assets/victory-logo.png" alt="Victory Auto & Inspections">
        <p>LONGTREND PTY LTD — your approved mobile vehicle inspection centre serving Logan, Brisbane and the Gold Coast. Cars, caravans and trailers, inspected at your door.</p>
        <p style="margin-top:14px;font-size:.86rem;color:var(--muted-light)">ABN 12 083 477 258</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#why">Why Choose Us</a></li>
          <li><a href="/#reviews">Reviews</a></li>
          <li><a href="/#areas">Service Areas</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul class="footer-links">
          <li><a href="/contact">Safety Certificates</a></li>
          <li><a href="/contact">Roadworthy Certificates</a></li>
          <li><a href="/contact">Caravan Inspections</a></li>
          <li><a href="/contact">Trailer Inspections</a></li>
          <li><a href="/contact">Mobile Inspections</a></li>
        </ul>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <ul class="fcontact">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>1/36 Centenary Place,<br>Logan Village QLD 4207</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg><a href="tel:0755910902">(07) 5591 0902</a></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg><a href="tel:0416146737">0416 146 737</a></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg><a href="mailto:longtrendptyltd@gmail.com">longtrendptyltd@gmail.com</a></li>
        </ul>
        <a href="/contact" class="btn btn-primary" style="margin-top:8px">Book an Inspection</a>
      </div>
    </div>
  </div>
  <div class="checker-strip thin" style="margin-top:54px"></div>
  <div class="foot-bottom">
    <div class="wrap">
      <span>&#169; <span id="year">2026</span> LONGTREND PTY LTD &middot; Victory Auto &amp; Inspections. All rights reserved.</span>
      <span>ABN 12 083 477 258 &middot; Logan Village, QLD</span>
    </div>
  </div>
</footer>
`

export default function Home(){
  return (
    <>
      <Head>
        <title>Victory Auto &amp; Inspections | Mobile Vehicle Inspections QLD</title>
        <meta name="description" content="LONGTREND PTY LTD — approved mobile vehicle inspection centre in Logan Village, QLD. Safety certificates, roadworthy inspections, caravan & trailer inspections. We come to you." />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  )
}
