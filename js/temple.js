// ✦ TEMPLE OF SOUND - INTERACTIVE CHAKRA INTERFACE
// Handles chakra node interactions, modal system, and audio playback

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const chakraNodes = document.querySelectorAll('.chakra-node');
  const modal = document.getElementById('chakraModal');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = modal?.querySelector('.modal-overlay');
  
  // Modal content elements
  const modalTitle = document.getElementById('modalTitle');
  const modalSanskrit = document.getElementById('modalSanskrit');
  const modalFrequency = document.getElementById('modalFrequency');
  const modalTheme = document.getElementById('modalTheme');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');
  const glyphMeaning = document.getElementById('glyphMeaning');
  const trackTitle = document.getElementById('trackTitle');
  const downloadBtn = document.getElementById('downloadBtn');
  
  // Audio player elements
  const audioPlayer = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playBtn');
  const progressSlider = document.getElementById('progressSlider');
  const progressFill = document.getElementById('progressFill');
  const timeCurrent = document.getElementById('timeCurrent');
  const timeDuration = document.getElementById('timeDuration');
  const volumeBtn = document.getElementById('volumeBtn');
  const volumeSlider = document.getElementById('volumeSlider');
  
  // Modal sphere for color
  const modalSphere = modal?.querySelector('.modal-sphere .sphere-inner');
  
  // Current chakra tracking
  let currentChakra = null;
  let isPlaying = false;

  // ========================================
  // CHAKRA NODE CLICK HANDLERS
  // ========================================
  chakraNodes.forEach(node => {
    node.addEventListener('click', function() {
      const chakraId = this.getAttribute('data-chakra');
      openChakraModal(chakraId);
    });
    
    // Add keyboard accessibility
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const chakraId = this.getAttribute('data-chakra');
        openChakraModal(chakraId);
      }
    });
  });

  // ========================================
  // MODAL FUNCTIONS
  // ========================================
  function openChakraModal(chakraId) {
    const chakra = getChakraData(chakraId);
    if (!chakra || !modal) return;
    
    currentChakra = chakra;
    
    // Populate modal content
    if (modalTitle) modalTitle.textContent = chakra.name;
    if (modalSanskrit) modalSanskrit.textContent = chakra.sanskrit;
    if (modalFrequency) modalFrequency.textContent = chakra.frequency;
    if (modalTheme) modalTheme.textContent = chakra.theme;
    if (modalDescription) modalDescription.textContent = chakra.description;
    if (glyphMeaning) glyphMeaning.textContent = chakra.glyphMeaning;
    if (trackTitle) trackTitle.textContent = chakra.trackTitle;
    
    // Set image
    if (modalImage && chakra.image) {
      modalImage.src = chakra.image;
      modalImage.alt = `${chakra.name} visualization`;
    }
    
    // Set modal sphere color
    if (modalSphere) {
      modalSphere.style.background = chakra.color;
      modalSphere.style.boxShadow = `0 0 30px ${chakra.color}80`;
    }
    
    // Set download link
    if (downloadBtn && chakra.audioFull) {
      downloadBtn.href = chakra.audioFull;
      downloadBtn.download = `${chakra.trackTitle.toLowerCase().replace(/\s+/g, '-')}.mp3`;
    }
    
    // Load audio
    if (audioPlayer && chakra.audioSample) {
      audioPlayer.src = chakra.audioSample;
      audioPlayer.load();
      resetPlayer();
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    modalClose?.focus();
  }

  function closeChakraModal() {
    if (!modal) return;
    
    // Stop audio
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
    resetPlayer();
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentChakra = null;
  }

  // Close button
  if (modalClose) {
    modalClose.addEventListener('click', closeChakraModal);
  }

  // Close on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeChakraModal);
  }

  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeChakraModal();
    }
  });

  // ========================================
  // AUDIO PLAYER CONTROLS
  // ========================================
  
  // Play/Pause
  if (playBtn && audioPlayer) {
    playBtn.addEventListener('click', togglePlay);
  }

  function togglePlay() {
    if (!audioPlayer) return;
    
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  }

  // Audio event listeners
  if (audioPlayer) {
    audioPlayer.addEventListener('play', function() {
      isPlaying = true;
      playBtn?.classList.add('playing');
    });

    audioPlayer.addEventListener('pause', function() {
      isPlaying = false;
      playBtn?.classList.remove('playing');
    });

    audioPlayer.addEventListener('ended', function() {
      resetPlayer();
    });

    audioPlayer.addEventListener('timeupdate', function() {
      updateProgress();
    });

    audioPlayer.addEventListener('loadedmetadata', function() {
      if (timeDuration) {
        timeDuration.textContent = formatTime(audioPlayer.duration);
      }
      if (progressSlider) {
        progressSlider.max = audioPlayer.duration;
      }
    });
  }

  // Progress slider
  if (progressSlider && audioPlayer) {
    progressSlider.addEventListener('input', function() {
      audioPlayer.currentTime = this.value;
    });
  }

  // Volume control
  if (volumeSlider && audioPlayer) {
    volumeSlider.addEventListener('input', function() {
      audioPlayer.volume = this.value / 100;
      updateVolumeIcon();
    });
    
    // Set initial volume
    audioPlayer.volume = volumeSlider.value / 100;
  }

  // Volume mute toggle
  if (volumeBtn && audioPlayer) {
    volumeBtn.addEventListener('click', function() {
      if (audioPlayer.volume > 0) {
        audioPlayer.dataset.previousVolume = audioPlayer.volume;
        audioPlayer.volume = 0;
        if (volumeSlider) volumeSlider.value = 0;
      } else {
        const prevVolume = parseFloat(audioPlayer.dataset.previousVolume) || 0.7;
        audioPlayer.volume = prevVolume;
        if (volumeSlider) volumeSlider.value = prevVolume * 100;
      }
      updateVolumeIcon();
    });
  }

  function updateProgress() {
    if (!audioPlayer) return;
    
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration || 0;
    const percentage = duration > 0 ? (currentTime / duration) * 100 : 0;
    
    if (progressFill) {
      progressFill.style.width = percentage + '%';
    }
    
    if (progressSlider) {
      progressSlider.value = currentTime;
    }
    
    if (timeCurrent) {
      timeCurrent.textContent = formatTime(currentTime);
    }
  }

  function updateVolumeIcon() {
    if (!volumeBtn || !audioPlayer) return;
    
    const icon = volumeBtn.querySelector('i');
    if (!icon) return;
    
    const volume = audioPlayer.volume;
    icon.className = '';
    
    if (volume === 0) {
      icon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
      icon.className = 'fas fa-volume-down';
    } else {
      icon.className = 'fas fa-volume-up';
    }
  }

  function resetPlayer() {
    isPlaying = false;
    playBtn?.classList.remove('playing');
    if (progressFill) progressFill.style.width = '0%';
    if (progressSlider) progressSlider.value = 0;
    if (timeCurrent) timeCurrent.textContent = '0:00';
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }

  // ========================================
  // FULL SEQUENCE PLAYBACK
  // ========================================
  const playAllBtn = document.getElementById('playAllBtn');
  
  if (playAllBtn) {
    playAllBtn.addEventListener('click', function() {
      // Open the first chakra (root) to start sequence
      openChakraModal('root');
      
      // Auto-play when modal opens
      setTimeout(() => {
        if (audioPlayer) {
          audioPlayer.play();
        }
      }, 500);
      
      // Setup auto-advance to next chakra
      setupSequencePlayback();
    });
  }

  function setupSequencePlayback() {
    if (!audioPlayer) return;
    
    const sequenceHandler = function() {
      if (currentChakra) {
        const nextChakra = getNextChakra(currentChakra.id);
        if (nextChakra) {
          // Load next chakra after brief pause
          setTimeout(() => {
            openChakraModal(nextChakra.id);
            setTimeout(() => {
              audioPlayer.play();
            }, 500);
          }, 2000);
        } else {
          // Sequence complete
          closeChakraModal();
          alert('✦ Chakra activation sequence complete ✦\n\nYou have journeyed from Root to Crown.\nMay you walk in harmony.');
        }
      }
    };
    
    // Remove any existing listener
    audioPlayer.removeEventListener('ended', sequenceHandler);
    // Add new listener
    audioPlayer.addEventListener('ended', sequenceHandler, { once: true });
  }
});
