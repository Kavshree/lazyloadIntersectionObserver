import 'intersection-observer';
function lazyLoadChunk(chunkName) {
    import(`./src/${chunkName}.js`)
      .then(module => {
        module.render();
      })
      .catch(error => {
        console.error('Chunk load error:', error);
      });
  }
  
  // Intersection Observer configuration
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
  };
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        lazyLoadChunk(targetId);
        // Unobserve the element to avoid duplicate loads
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe the elements you want to trigger lazy loading for
  const feature1Container = document.getElementById('feature1-container');
  const feature2Container = document.getElementById('feature2-container');
  
  observer.observe(feature1Container);
  observer.observe(feature2Container);
  