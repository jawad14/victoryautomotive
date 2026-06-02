/* VICTORY AUTOMOTIVE & INSPECTIONS — interactions */
(function(){
  'use strict';

  /* ---------- mobile menu ---------- */
  function initMenu(){
    var burger=document.querySelector('.hamburger');
    var menu=document.getElementById('mobileMenu');
    if(!burger||!menu)return;
    var close=menu.querySelector('.mclose');
    function open(){menu.classList.add('open');document.body.style.overflow='hidden';}
    function shut(){menu.classList.remove('open');document.body.style.overflow='';}
    burger.addEventListener('click',open);
    if(close)close.addEventListener('click',shut);
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',shut);});
  }

  /* ---------- scroll reveal ---------- */
  function initReveal(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)||!els.length){
      els.forEach(function(e){e.classList.add('in');});return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var el=en.target;
          var d=el.getAttribute('data-delay');
          if(d)el.style.transitionDelay=d+'ms';
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e){io.observe(e);});
  }

  /* ---------- count up stats ---------- */
  function initCount(){
    var nums=document.querySelectorAll('[data-count]');
    if(!nums.length)return;
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(!en.isIntersecting)return;
        var el=en.target, target=parseFloat(el.getAttribute('data-count'));
        var dec=(el.getAttribute('data-dec')==='1');
        var suf=el.getAttribute('data-suffix')||'';
        var t0=null, dur=1400;
        function step(ts){
          if(!t0)t0=ts;
          var p=Math.min((ts-t0)/dur,1);
          var e=1-Math.pow(1-p,3);
          var v=target*e;
          el.textContent=(dec?v.toFixed(1):Math.round(v))+suf;
          if(p<1)requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    },{threshold:.5});
    nums.forEach(function(n){io.observe(n);});
  }

  /* ---------- contact form ---------- */
  function initForm(){
    var form=document.getElementById('contactForm');
    if(!form)return;
    var success=document.getElementById('formSuccess');
    function setErr(field,on){field.classList.toggle('error',on);}
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var ok=true;
      form.querySelectorAll('[data-required]').forEach(function(input){
        var field=input.closest('.field');
        var val=(input.value||'').trim();
        var bad=!val;
        if(input.type==='email'&&val)bad=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if(input.getAttribute('data-required')==='phone'&&val)bad=!/[0-9]{6,}/.test(val.replace(/\s/g,''));
        if(bad)ok=false;
        setErr(field,bad);
      });
      if(!ok){
        var firstErr=form.querySelector('.field.error');
        if(firstErr)firstErr.scrollIntoView?null:null;
        return;
      }
      form.style.display='none';
      if(success){success.classList.add('show');}
    });
    form.querySelectorAll('[data-required]').forEach(function(input){
      input.addEventListener('input',function(){
        var field=input.closest('.field');
        if(field.classList.contains('error')&&(input.value||'').trim())field.classList.remove('error');
      });
    });
  }

  /* ---------- footer year ---------- */
  function initYear(){
    var y=document.getElementById('year');
    if(y)y.textContent=new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded',function(){
    initMenu();initReveal();initCount();initForm();initYear();
  });
})();
