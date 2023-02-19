function randomizeImages() {
    const container = document.getElementById('portfolio');
    for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
  }

  
document.addEventListener('DOMContentLoaded', randomizeImages);