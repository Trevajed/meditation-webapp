// ✦ ETHERION - MAIN JAVASCRIPT
// Navigation, animations, and homepage interactions

document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // NAVIGATION
  // ========================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const header = document.querySelector('.site-header');
  
  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Scroll behavior for header
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (header) {
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  });

  // ========================================
  // CHAKRA TONE SAMPLER (Homepage)
  // ========================================
  const chakraTones = document.querySelectorAll('.chakra-tone');
  
  if (chakraTones.length > 0) {
    // Create audio context for tone generation
    let audioContext = null;
    let oscillator = null;
    let gainNode = null;
    
    function initAudioContext() {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = 0.3; // 30% volume
      }
    }
    
    function playTone(frequency) {
      initAudioContext();
      
      // Stop any existing tone
      stopTone();
      
      // Create and start new oscillator
      oscillator = audioContext.createOscillator();
      oscillator.type = 'sine'; // Pure sine wave for meditation
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.connect(gainNode);
      
      // Fade in
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
      
      oscillator.start();
    }
    
    function stopTone() {
      if (oscillator) {
        // Fade out
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
        oscillator.stop(audioContext.currentTime + 0.1);
        oscillator = null;
      }
    }
    
    chakraTones.forEach(tone => {
      const frequency = parseInt(tone.getAttribute('data-frequency'));
      
      tone.addEventListener('mouseenter', function() {
        playTone(frequency);
        animateWaveform(frequency);
      });
      
      tone.addEventListener('mouseleave', function() {
        stopTone();
      });
      
      // Touch support for mobile
      tone.addEventListener('touchstart', function(e) {
        e.preventDefault();
        playTone(frequency);
        animateWaveform(frequency);
      });
      
      tone.addEventListener('touchend', function(e) {
        e.preventDefault();
        stopTone();
      });
    });
  }

  // ========================================
  // WAVEFORM VISUALIZATION
  // ========================================
  const waveformCanvas = document.getElementById('waveformCanvas');
  
  if (waveformCanvas) {
    const ctx = waveformCanvas.getContext('2d');
    let animationId = null;
    let currentFrequency = 0;
    
    // Set canvas size
    function resizeCanvas() {
      const rect = waveformCanvas.getBoundingClientRect();
      waveformCanvas.width = rect.width * window.devicePixelRatio;
      waveformCanvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    function animateWaveform(frequency) {
      currentFrequency = frequency;
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      let time = 0;
      function draw() {
        const width = waveformCanvas.width / window.devicePixelRatio;
        const height = waveformCanvas.height / window.devicePixelRatio;
        
        // Clear canvas
        ctx.fillStyle = 'rgba(26, 26, 36, 0.1)';
        ctx.fillRect(0, 0, width, height);
        
        // Draw waveform
        const amplitude = height * 0.3;
        const wavelength = width / (frequency / 100);
        
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin((x / wavelength + time) * Math.PI * 2) * amplitude;
          ctx.lineTo(x, y);
        }
        
        // Gradient stroke based on frequency
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, getChakraColor(frequency));
        gradient.addColorStop(1, getChakraColor(frequency, 0.5));
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        time += 0.01;
        animationId = requestAnimationFrame(draw);
      }
      
      draw();
    }
    
    function getChakraColor(frequency, opacity = 1) {
      const colors = {
        396: `rgba(139, 0, 0, ${opacity})`,     // Root
        417: `rgba(255, 107, 53, ${opacity})`,  // Sacral
        528: `rgba(255, 210, 63, ${opacity})`,  // Solar
        639: `rgba(6, 167, 125, ${opacity})`,   // Heart
        741: `rgba(65, 105, 225, ${opacity})`,  // Throat
        852: `rgba(75, 0, 130, ${opacity})`,    // Third Eye
        963: `rgba(157, 78, 221, ${opacity})`   // Crown
      };
      
      return colors[frequency] || `rgba(157, 78, 221, ${opacity})`;
    }
    
    // Draw idle waveform
    function drawIdleWaveform() {
      const width = waveformCanvas.width / window.devicePixelRatio;
      const height = waveformCanvas.height / window.devicePixelRatio;
      
      ctx.fillStyle = 'rgba(26, 26, 36, 0.5)';
      ctx.fillRect(0, 0, width, height);
      
      // Draw flat line
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    drawIdleWaveform();
  }

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe sections for fade-in animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // ========================================
  // FOOTER YEAR
  // ========================================
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const headerHeight = header?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // HERO CHAKRA ANIMATION
  // ========================================
  const chakraOrbs = document.querySelectorAll('.chakra-orb');
  
  if (chakraOrbs.length > 0) {
    // Add subtle parallax effect
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      
      chakraOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translateX(-50%) translateY(${rate * speed}px)`;
      });
    });
  }

  // ========================================
  // SACRED GEOMETRY OVERLAY ROTATION
  // ========================================
  const sacredGeometry = document.querySelector('.sacred-geometry-overlay');
  
  if (sacredGeometry) {
    let rotation = 0;
    
    function rotateSacredGeometry() {
      rotation += 0.05;
      sacredGeometry.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(rotateSacredGeometry);
    }
    
    rotateSacredGeometry();
  }

  // ========================================
  // ACCESSIBILITY: Focus visible for keyboard navigation
  // ========================================
  document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
