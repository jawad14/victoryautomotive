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
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#why">Why Us</a></li>
        <li><a href="/#reviews">Reviews</a></li>
        <li><a href="/#areas">Service Areas</a></li>
        <li><a href="/contact" class="active">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="tel:0416146737" class="nav-phone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          0416 146 737
        </a>
        <a href="#book" class="btn btn-primary">Book an Inspection</a>
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
    <a href="#book" class="btn btn-primary btn-block btn-lg">Book an Inspection</a>
    <a href="tel:0416146737" class="btn btn-outline-light btn-block btn-lg">Call 0416 146 737</a>
  </div>
</div>

<section class="page-hero">
  <div class="hero-bg-V">V</div>
  <div class="wrap" style="position:relative;z-index:1">
    <div class="breadcrumb"><a href="/">Home</a><span class="sep">/</span>Contact</div>
    <span class="eyebrow light">Get In Touch</span>
    <h1 style="margin-top:14px">Book Your Inspection</h1>
    <p class="lead" style="color:#C9C2B8;margin-top:18px">Call us, message us, or fill out the form below — we'll confirm your mobile inspection and come to you anywhere across South-East Queensland.</p>
  </div>
</section>

<div class="checker-strip"></div>

<section class="section" id="book" style="padding-top:72px">
  <div class="wrap">
    <div class="contact-grid">
      <div class="reveal">
        <span class="eyebrow">Contact Details</span>
        <h2 class="display" style="font-size:clamp(1.8rem,3.2vw,2.5rem);margin:14px 0 22px">Victory Auto &amp; Inspections</h2>
        <div class="info-card">
          <div class="info-row">
            <span class="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/></svg></span>
            <div><div class="il">Business Name</div><div class="iv">LONGTREND PTY LTD</div><div class="iv small" style="color:var(--muted);font-weight:500">Trading as Victory Auto &amp; Inspections</div></div>
          </div>
          <div class="info-row">
            <span class="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h6"/></svg></span>
            <div><div class="il">ABN</div><div class="iv">12 083 477 258</div></div>
          </div>
          <div class="info-row">
            <span class="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div><div class="il">Business Address</div><div class="iv small">1/36 Centenary Place,<br>Logan Village QLD 4207</div><a href="https://maps.google.com/?q=1/36+Centenary+Place,+Logan+Village+QLD+4207" target="_blank" rel="noopener" class="more" style="font-family:var(--ff-cond);text-transform:uppercase;letter-spacing:.06em;font-weight:600;font-size:.8rem;color:var(--red);display:inline-flex;align-items:center;gap:.4rem;margin-top:6px">Get directions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
          </div>
          <div class="info-row">
            <span class="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg></span>
            <div><div class="il">Landline</div><div class="iv"><a href="tel:0755910902">(07) 5591 0902</a></div></div>
          </div>
          <div class="info-row">
            <span class="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg></span>
            <div><div class="il">Mobile</div><div class="iv"><a href="tel:0416146737">0416 146 737</a></div></div>
          </div>
          <div class="info-row">
            <span class="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg></span>
            <div><div class="il">Email</div><div class="iv small"><a href="mailto:longtrendptyltd@gmail.com">longtrendptyltd@gmail.com</a></div></div>
          </div>
        </div>

        <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap">
          <a href="tel:0416146737" class="btn btn-primary" style="flex:1;min-width:160px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            Call Now
          </a>
          <a href="sms:0416146737" class="btn btn-ghost" style="flex:1;min-width:160px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>
            Send a Text
          </a>
        </div>

        <div class="hours-card" style="margin-top:22px">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>Opening Hours</h3>
          <div class="hours-row"><span class="hd">Monday</span><b>7:00 AM &#8211; 5:00 PM</b></div>
          <div class="hours-row"><span class="hd">Tuesday</span><b>7:00 AM &#8211; 5:00 PM</b></div>
          <div class="hours-row"><span class="hd">Wednesday</span><b>7:00 AM &#8211; 5:00 PM</b></div>
          <div class="hours-row"><span class="hd">Thursday</span><b>7:00 AM &#8211; 5:00 PM</b></div>
          <div class="hours-row"><span class="hd">Friday</span><b>7:00 AM &#8211; 5:00 PM</b></div>
          <div class="hours-row"><span class="hd">Saturday</span><b>8:00 AM &#8211; 2:00 PM</b></div>
          <div class="hours-row closed"><span class="hd">Sunday</span><b>By Appointment</b></div>
        </div>
      </div>

      <div class="reveal" data-delay="100">
        <div class="form-card">
          <h3>Request a Booking</h3>
          <p class="fsub">Fill in your details and we'll get back to you to confirm a time. Fields marked <span class="req">*</span> are required.</p>

          <form id="contactForm" novalidate>
            <div class="field-row">
              <div class="field">
                <label for="fname">First Name <span class="req">*</span></label>
                <input type="text" id="fname" name="fname" data-required="text" placeholder="John" autocomplete="given-name">
                <span class="err-msg">Please enter your first name.</span>
              </div>
              <div class="field">
                <label for="lname">Last Name <span class="req">*</span></label>
                <input type="text" id="lname" name="lname" data-required="text" placeholder="Smith" autocomplete="family-name">
                <span class="err-msg">Please enter your last name.</span>
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="phone">Phone <span class="req">*</span></label>
                <input type="tel" id="phone" name="phone" data-required="phone" placeholder="0416 146 737" autocomplete="tel">
                <span class="err-msg">Please enter a valid phone number.</span>
              </div>
              <div class="field">
                <label for="email">Email <span class="req">*</span></label>
                <input type="email" id="email" name="email" data-required="email" placeholder="you@email.com" autocomplete="email">
                <span class="err-msg">Please enter a valid email address.</span>
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="service">Service Required <span class="req">*</span></label>
                <select id="service" name="service" data-required="text">
                  <option value="">Select a service&#8230;</option>
                  <option>Car Safety Certificate</option>
                  <option>Roadworthy Certificate</option>
                  <option>Caravan Inspection</option>
                  <option>Caravan Trailer Inspection</option>
                  <option>Mobile Inspection &#8212; Other Vehicle</option>
                  <option>Not Sure / General Enquiry</option>
                </select>
                <span class="err-msg">Please select a service.</span>
              </div>
              <div class="field">
                <label for="suburb">Your Suburb <span class="req">*</span></label>
                <input type="text" id="suburb" name="suburb" data-required="text" placeholder="Logan Village" autocomplete="address-level2">
                <span class="err-msg">Please enter your suburb.</span>
              </div>
            </div>
            <div class="field">
              <label for="message">Message / Vehicle Details</label>
              <textarea id="message" name="message" placeholder="Tell us about your vehicle (make, model, year) and your preferred day/time&#8230;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Booking Request
            </button>
            <p class="form-note">Prefer to talk? Call <a href="tel:0416146737" style="color:var(--red);font-weight:600">0416 146 737</a> &#8212; we're happy to help.</p>
          </form>

          <div class="form-success" id="formSuccess">
            <div class="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
            <h3>Booking Request Sent!</h3>
            <p>Thanks for choosing Victory. We've received your request and will call or email you shortly to confirm your inspection time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" style="padding-top:0">
  <div class="wrap">
    <div class="map-wrap reveal">
      <div class="map-head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <b>Find Us</b><span>&#183; 1/36 Centenary Place, Logan Village QLD 4207</span>
      </div>
      <iframe
        title="Victory Auto &amp; Inspections location map"
        src="https://www.google.com/maps?q=1%2F36%20Centenary%20Place%2C%20Logan%20Village%20QLD%204207&output=embed"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="cta-checker"></div>
  <div class="wrap">
    <div>
      <h2 class="display">We'll Come To You.</h2>
      <p>Mobile inspections across Logan, Brisbane Southside &amp; the Gold Coast.</p>
    </div>
    <div class="cta-actions">
      <a href="#book" class="btn btn-dark btn-lg">Book Online</a>
      <a href="tel:0755910902" class="btn btn-outline-light btn-lg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        (07) 5591 0902
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
        <a href="#book" class="btn btn-primary" style="margin-top:8px">Book an Inspection</a>
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

export default function Contact(){
  return (
    <>
      <Head>
        <title>Contact Us | Victory Auto &amp; Inspections — Logan Village QLD</title>
        <meta name="description" content="Contact LONGTREND PTY LTD (Victory Auto & Inspections). Call (07) 5591 0902 or 0416 146 737, or book your mobile vehicle inspection online. Logan Village QLD 4207." />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  )
}
