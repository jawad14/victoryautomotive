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
        <img src="/assets/logo-nobg.png" alt="Victory Auto & Inspections">
      </a>
      <ul class="nav-links">
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#why">Why Us</a></li>
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
    <img src="/assets/logo-nobg.png" alt="Victory Auto & Inspections">
    <button class="mclose" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <a href="/" class="mlink">Home</a>
  <a href="/#about" class="mlink">About</a>
  <a href="/#services" class="mlink">Services</a>
  <a href="/#why" class="mlink">Why Us</a>
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
        <span class="eyebrow light">Auto Services · Mechanical Work · Vehicle Inspections Everywhere</span>
        <h1>Your Local <span class="hl">Auto Experts</span> — Built Around You.</h1>
        <p class="lead">Victory Auto &amp; Inspections delivers full mechanical services, auto repairs and approved on-site vehicle inspections across South-East Queensland. Professional, reliable and on your schedule.</p>
        <div class="hero-cta">
          <a href="/contact" class="btn btn-primary btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book a Service
          </a>
          <a href="tel:0416146737" class="btn btn-outline-light btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            Call Now
          </a>
          <a href="/contact" class="btn btn-dark btn-lg">Get a Free Quote</a>
        </div>
        <div class="hero-trust">
          <div class="ht"><b><span data-count="4.9" data-dec="1">4.9</span>&#9733;</b><span>Google Rated</span></div>
          <div class="ht"><b><span data-count="25" data-suffix="+">25+</span></b><span>Years Experience</span></div>
          <div class="ht"><b>Full</b><span>Mechanical Work</span></div>
          <div class="ht"><b>QLD</b><span>Approved Centre</span></div>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <img src="/assets/heroimage.png" alt="Victory Auto & Inspections — mechanic inspecting a vehicle on a hoist" class="hero-img">
      </div>
    </div>
  </div>
  <div class="checker-strip"></div>
</section>

<section class="section" id="about">
  <div class="wrap">
    <div class="about-grid">
      <div class="about-photo-wrap reveal">
        <img src="/assets/heroimage.png" alt="Victory Auto &amp; Inspections — mechanics at work" class="about-photo-img">
      </div>
      <div class="reveal" data-delay="100">
        <span class="eyebrow">About Victory Auto</span>
        <h2 class="display" style="font-size:clamp(2rem,3.6vw,2.9rem);margin:14px 0 18px">A Family-Run Team With 25+ Years On The Tools</h2>
        <p class="lead" style="font-size:1.1rem;color:var(--muted)">Victory Auto &amp; Inspections is a family-run automotive business with over 25 years of hands-on experience. We offer full mechanical repairs, auto servicing and approved on-site vehicle inspections — all delivered with honesty, quality and care.</p>
        <p style="margin-top:14px;color:var(--muted)">Whether you need a routine service, a mechanical repair, a safety certificate or a roadworthy inspection, our experienced team has you covered. We work around your schedule and come to you wherever possible.</p>
        <div class="about-points">
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>Full Mechanical Work</b><span>Repairs, servicing &amp; diagnostics</span></div>
          </div>
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>Inspections Everywhere</b><span>We come to your home or workplace</span></div>
          </div>
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>Honest &amp; Transparent</b><span>Clear quotes, no hidden charges</span></div>
          </div>
          <div class="about-point">
            <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <div><b>Affordable Rates</b><span>Fair, upfront pricing — no surprises</span></div>
          </div>
        </div>
        <div style="margin-top:30px;display:flex;gap:14px;flex-wrap:wrap">
          <a href="/contact" class="btn btn-primary">Book a Service</a>
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
      <span class="eyebrow center">What We Do</span>
      <h2 class="display" style="margin-top:14px">Auto Services &amp; Inspections</h2>
      <p class="lead mx-auto" style="color:var(--muted)">From mechanical repairs to on-site vehicle inspections — we handle it all across South-East Queensland.</p>
    </div>
    <div class="svc-grid">
      <article class="svc-card reveal">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 1 0 5.4l-8 8a2 2 0 0 1-2.8-2.8l8-8a4 4 0 0 1 5.4 0z"/><path d="M6 18l-2 2"/><path d="m18 2 2 2-9 9"/></svg></div>
        <h3>Mechanical Repairs</h3>
        <p>Full mechanical repairs for all makes and models — engine, transmission, cooling, electrical and more. Diagnosed and fixed right the first time.</p>
        <a href="/contact" class="more">Get a quote <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="80">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14m-14 0v4m14-4v4M7 17h0m10 0h0"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="17" r="1"/></svg></div>
        <h3>Auto Servicing</h3>
        <p>Logbook and general servicing including oil changes, filters, brakes, belts and full safety checks to keep your vehicle running at its best.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="160">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
        <h3>Brake &amp; Suspension</h3>
        <p>Brake pad and rotor replacements, suspension checks, wheel alignments and steering repairs for a safe, smooth drive.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"/></svg></div>
        <h3>Safety Certificates &amp; Roadworthy</h3>
        <p>Approved Queensland Safety Certificates and roadworthy inspections for cars, caravans and trailers — issued on the spot when you pass.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="80">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h3>Vehicle Inspections Everywhere</h3>
        <p>We come to your home, workplace or storage yard — cars, caravans and trailers inspected right where they sit, anywhere across South-East QLD.</p>
        <a href="/contact" class="more">Book now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </article>
      <article class="svc-card reveal" data-delay="160">
        <div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="9" width="14" height="7" rx="1"/><path d="M16 12h3l3 2v2h-6"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg></div>
        <h3>Caravan &amp; Trailer Services</h3>
        <p>Mechanical checks, safety inspections and certificates for caravans and trailers — covering chassis, brakes, coupling, lights and compliance.</p>
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
      <p class="lead mx-auto" style="color:#B7AFA4">Customers across Logan, Brisbane and the Gold Coast trust Victory for auto services and inspections done right — every time.</p>
    </div>
    <div class="why-grid">
      <div class="why-card reveal">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 4.5 3.5 8.5 8 10 4.5-1.5 8-5.5 8-10V6l-8-4Z"/><path d="M9 12l2 2 4-4"/></svg></span>01</div>
        <h3>Licensed &amp; Approved</h3>
        <p>Fully licensed mechanics and an approved QLD inspection centre — authorised to carry out repairs and issue safety certificates.</p>
      </div>
      <div class="why-card reveal" data-delay="70">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 1 0 5.4l-8 8a2 2 0 0 1-2.8-2.8l8-8a4 4 0 0 1 5.4 0z"/><path d="M6 18l-2 2"/></svg></span>02</div>
        <h3>Full Mechanical Work</h3>
        <p>From minor services to major repairs — our experienced mechanics handle everything with skill and the right tools for the job.</p>
      </div>
      <div class="why-card reveal" data-delay="140">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg></span>03</div>
        <h3>Fast &amp; Reliable</h3>
        <p>Punctual, efficient and straight to the point. We respect your time and get the job done without unnecessary delays.</p>
      </div>
      <div class="why-card reveal">
        <div class="wn"><span class="wic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>04</div>
        <h3>Vehicle Inspections Everywhere</h3>
        <p>We bring the tools to you — inspections and mechanical work carried out right at your location, no towing required.</p>
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
      <div class="areas-map reveal" data-delay="100">
        <iframe
          title="Victory Auto &amp; Inspections service area map"
          src="https://www.google.com/maps?q=Logan+Village+QLD+4207+Australia&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="cta-checker"></div>
  <div class="wrap">
    <div>
      <h2 class="display">Ready To Get Started?</h2>
      <p>Book a service, request a quote or call us now — we're ready to help.</p>
    </div>
    <div class="cta-actions">
      <a href="/contact" class="btn btn-dark btn-lg">Book a Service</a>
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
        <img src="/assets/logo-nobg.png" alt="Victory Auto & Inspections">
        <p>Victory Auto &amp; Inspections — your local auto services, mechanical repairs and approved on-site inspection specialists serving Logan, Brisbane and the Gold Coast.</p>
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
          <li><a href="/contact">Mechanical Repairs</a></li>
          <li><a href="/contact">Auto Servicing</a></li>
          <li><a href="/contact">Brake &amp; Suspension</a></li>
          <li><a href="/contact">Safety Certificates</a></li>
          <li><a href="/contact">Vehicle Inspections Everywhere</a></li>
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
        <title>Victory Auto &amp; Inspections | Auto Services, Mechanical &amp; Inspections QLD</title>
        <meta name="description" content="Victory Auto &amp; Inspections — auto services, mechanical repairs and approved on-site vehicle inspections across South-East Queensland. Logan Village, Brisbane &amp; Gold Coast." />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  )
}
