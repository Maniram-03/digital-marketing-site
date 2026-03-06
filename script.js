// ============================================
// COMPLETE JAVASCRIPT FOR iSTORE
// ============================================

// Initialize EmailJS
(function() {
    emailjs.init("DRkwa9YwWLNK4fbnd");
    console.log('✅ EmailJS initialized');
})();

// ============================================
// PRICE MAP & DEVICE DATA
// ============================================
const priceMap = {
    "iPhone 17 Pro Max": 159900,
    "iPhone 17 Pro": 134900,
    "iPhone 17 Air": 109900,
    "iPhone 17": 79900,
    "iPhone 16 Pro Max": 144900,
    "iPhone 16 Pro": 119900,
    "iPhone 16 Plus": 99900,
    "iPhone 16": 79900,
    "iPhone 15 Pro Max": 129900,
    "iPhone 15 Pro": 109900,
    "iPhone 15 Plus": 89900,
    "iPhone 15": 69900,
    "iPhone 14 Pro Max": 99900,
    "iPhone 14 Pro": 84900,
    "iPhone 14 Plus": 79900,
    "iPhone 14": 59900,
    "iPhone 13 Pro Max": 89900,
    "iPhone 13 Pro": 79900,
    "iPhone 13": 49900,
    "iPhone SE 3rd Gen": 39900,
    "iPhone SE 2nd Gen": 29900
};

const deviceData = {
    "iPhone 17 Pro Max": { cpu: "A19 Pro", camera: "48MP Triple", display: "6.9\" ProMotion", battery: "30+ hrs" },
    "iPhone 17 Pro": { cpu: "A19 Pro", camera: "48MP Dual", display: "6.3\" ProMotion", battery: "26 hrs" },
    "iPhone 17 Air": { cpu: "A19", camera: "48MP Single", display: "6.6\" OLED", battery: "22 hrs" },
    "iPhone 17": { cpu: "A19", camera: "48MP", display: "6.1\" OLED", battery: "20 hrs" },
    "iPhone 16 Pro Max": { cpu: "A18 Pro", camera: "48MP Triple", display: "6.9\" ProMotion", battery: "28 hrs" },
    "iPhone 16 Pro": { cpu: "A18 Pro", camera: "48MP Dual", display: "6.3\" ProMotion", battery: "24 hrs" },
    "iPhone 16 Plus": { cpu: "A18", camera: "48MP Dual", display: "6.7\" OLED", battery: "26 hrs" },
    "iPhone 16": { cpu: "A18", camera: "48MP", display: "6.1\" OLED", battery: "22 hrs" },
    "iPhone 15 Pro Max": { cpu: "A17 Pro", camera: "48MP Triple", display: "6.7\" ProMotion", battery: "29 hrs" },
    "iPhone 15 Pro": { cpu: "A17 Pro", camera: "48MP Triple", display: "6.1\" ProMotion", battery: "23 hrs" },
    "iPhone 15 Plus": { cpu: "A16", camera: "48MP Dual", display: "6.7\" OLED", battery: "26 hrs" },
    "iPhone 15": { cpu: "A16", camera: "48MP", display: "6.1\" OLED", battery: "20 hrs" },
    "iPhone 14 Pro Max": { cpu: "A16", camera: "48MP Triple", display: "6.7\" ProMotion", battery: "29 hrs" },
    "iPhone 14 Pro": { cpu: "A16", camera: "48MP Triple", display: "6.1\" ProMotion", battery: "23 hrs" },
    "iPhone 14 Plus": { cpu: "A15", camera: "12MP Dual", display: "6.7\" OLED", battery: "26 hrs" },
    "iPhone 14": { cpu: "A15", camera: "12MP Dual", display: "6.1\" OLED", battery: "20 hrs" },
    "iPhone 13 Pro Max": { cpu: "A15", camera: "12MP Triple", display: "6.7\" ProMotion", battery: "28 hrs" },
    "iPhone 13 Pro": { cpu: "A15", camera: "12MP Triple", display: "6.1\" ProMotion", battery: "22 hrs" },
    "iPhone 13": { cpu: "A15", camera: "12MP Dual", display: "6.1\" OLED", battery: "19 hrs" },
    "iPhone SE 3rd Gen": { cpu: "A15", camera: "12MP", display: "4.7\" LCD", battery: "15 hrs" },
    "iPhone SE 2nd Gen": { cpu: "A13", camera: "12MP", display: "4.7\" LCD", battery: "13 hrs" }
};

// ============================================
// SLIDESHOW WITH SWIPE
// ============================================
class SwipeSlideshow {
    constructor() {
        this.container = document.querySelector('.slideshow-container');
        if (!this.container) return;
        
        this.track = this.container.querySelector('.slides-track');
        this.slides = this.container.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.slideCount = this.slides.length;
        this.currentIndex = 0;
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        this.dragStartTime = 0;
        
        this.init();
    }
    
    init() {
        if (this.slideCount === 0) return;
        
        // Set up track width
        this.track.style.width = `${this.slideCount * 100}%`;
        
        // Add event listeners
        this.track.addEventListener('mousedown', (e) => this.dragStart(e));
        this.track.addEventListener('mousemove', (e) => this.dragMove(e));
        this.track.addEventListener('mouseup', (e) => this.dragEnd(e));
        this.track.addEventListener('mouseleave', (e) => this.dragEnd(e));
        
        // Touch events
        this.track.addEventListener('touchstart', (e) => this.dragStart(e));
        this.track.addEventListener('touchmove', (e) => this.dragMove(e));
        this.track.addEventListener('touchend', (e) => this.dragEnd(e));
        
        // Auto play
        this.startAutoPlay();
    }
    
    dragStart(e) {
        e.preventDefault();
        this.isDragging = true;
        this.dragStartTime = Date.now();
        this.startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
        this.track.style.transition = 'none';
        this.track.style.cursor = 'grabbing';
    }
    
    dragMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        
        this.currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const diff = this.currentX - this.startX;
        const movePercent = (diff / this.container.offsetWidth) * 100;
        const currentTranslate = -this.currentIndex * 100 + movePercent;
        
        // Add resistance at ends
        if (this.currentIndex === 0 && movePercent > 0) {
            this.track.style.transform = `translateX(${movePercent * 0.3}%)`;
        } else if (this.currentIndex === this.slideCount - 1 && movePercent < 0) {
            this.track.style.transform = `translateX(${- (this.slideCount - 1) * 100 + movePercent * 0.3}%)`;
        } else {
            this.track.style.transform = `translateX(${currentTranslate}%)`;
        }
    }
    
    dragEnd(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        
        this.isDragging = false;
        this.track.style.transition = 'transform 0.3s ease-out';
        this.track.style.cursor = 'grab';
        
        const diff = this.currentX - this.startX;
        const dragDuration = Date.now() - this.dragStartTime;
        const threshold = 50; // Minimum drag distance
        const velocity = Math.abs(diff) / dragDuration;
        
        if (Math.abs(diff) > threshold || velocity > 0.5) {
            if (diff > 0 && this.currentIndex > 0) {
                // Swipe right - previous slide
                this.currentIndex--;
            } else if (diff < 0 && this.currentIndex < this.slideCount - 1) {
                // Swipe left - next slide
                this.currentIndex++;
            }
        }
        
        this.goToSlide(this.currentIndex);
    }
    
    goToSlide(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.slideCount - 1));
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        // Update dots
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }
    
    nextSlide() {
        if (this.currentIndex < this.slideCount - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop back to start
        }
        this.goToSlide(this.currentIndex);
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.slideCount - 1; // Loop to end
        }
        this.goToSlide(this.currentIndex);
    }
    
    startAutoPlay() {
        setInterval(() => {
            if (!this.isDragging) {
                this.nextSlide();
            }
        }, 5000);
    }
}

// ============================================
// PRODUCT DATA
// ============================================
const products = [
    { series: "iPhone 17 Series", models: [
        { name: "iPhone 17 Pro Max", price: 159900, image: "iphone-17-pro-max-C8102T_W.png" },
        { name: "iPhone 17 Pro", price: 134900, image: "iphone-17-pro-Dh_0zZfu.png" },
        { name: "iPhone 17 Air", price: 109900, image: "iphone-17-air-B_WJmMvU.png" },
        { name: "iPhone 17", price: 79900, image: "iphone-17-mkrrjEvg.png" }
    ]},
    { series: "iPhone 16 Series", models: [
        { name: "iPhone 16 Pro Max", price: 144900, image: "iphone-16-promax-C5YEZrWp.png" },
        { name: "iPhone 16 Pro", price: 119900, image: "iphone-16-pro-DjGeCuuM.png" },
        { name: "iPhone 16 Plus", price: 99900, image: "iphone-16-plus-BneK2enr.png" },
        { name: "iPhone 16", price: 79900, image: "iphone-16-DobysrZI.png" }
    ]},
    { series: "iPhone 15 Series", models: [
        { name: "iPhone 15 Pro Max", price: 129900, image: "iphone-15-promax-BNb87A-7.png" },
        { name: "iPhone 15 Pro", price: 109900, image: "iphone-15-pro-DmQW1njW.png" },
        { name: "iPhone 15 Plus", price: 89900, image: "iphone-15-plus-BEhdu-gV.png" },
        { name: "iPhone 15", price: 69900, image: "iphone-15-Ca10t-45.png" }
    ]},
    { series: "iPhone 14 Series", models: [
        { name: "iPhone 14 Pro Max", price: 99900, image: "iphone-14-pro-Df8Tnsi9.png" },
        { name: "iPhone 14 Pro", price: 84900, image: "iphone-14-pro-Df8Tnsi9.png" },
        { name: "iPhone 14 Plus", price: 79900, image: "iphone-14-plus-Ct1L7bZ3.png" },
        { name: "iPhone 14", price: 59900, image: "iphone-14-Bh3HPR_T.png" }
    ]},
    { series: "iPhone 13 Series", models: [
        { name: "iPhone 13 Pro Max", price: 89900, image: "iphone-13-promax-CJJ-w0CJ.png" },
        { name: "iPhone 13 Pro", price: 79900, image: "iphone-13-pro-B0Rz7trl.png" },
        { name: "iPhone 13", price: 49900, image: "iphone-13-standard-NvFMrxGz.png" }
    ]},
    { series: "iPhone SE Series", models: [
        { name: "iPhone SE 3rd Gen", price: 39900, image: "iphone-se3-DfWf8aiv.png" },
        { name: "iPhone SE 2nd Gen", price: 29900, image: "iphone-se2-j_SYmInU.png" }
    ]}
];

// ============================================
// LOAD PRODUCTS
// ============================================
function loadProducts() {
    const trendingGrid = document.getElementById('trendingGrid');
    const fullInventory = document.getElementById('fullInventory');
    const modelSelect = document.getElementById('modelSelect');

    if (!trendingGrid || !fullInventory || !modelSelect) return;

    // Clear existing content
    trendingGrid.innerHTML = '';
    fullInventory.innerHTML = '';
    modelSelect.innerHTML = '<option value="">Choose Model</option>';

    // Add trending models (first 3 from iPhone 17 series)
    const trendingModels = products[0].models.slice(0, 3);
    trendingModels.forEach(product => {
        const card = createProductCard(product);
        trendingGrid.appendChild(card);
    });

    // Add all series to full inventory
    products.forEach(series => {
        const seriesDiv = document.createElement('div');
        seriesDiv.className = 'series-container';

        const header = document.createElement('button');
        header.className = 'series-header';
        header.setAttribute('onclick', `toggleSeries('${series.series.replace(/\s+/g, '')}', this)`);
        header.innerHTML = `<span>${series.series}</span><span>+</span>`;

        const content = document.createElement('div');
        content.id = series.series.replace(/\s+/g, '');
        content.className = 'series-content';

        const grid = document.createElement('div');
        grid.className = 'grid';

        series.models.forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);

            // Add to select dropdown
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = `${product.name} - ₹${product.price.toLocaleString('en-IN')}`;
            modelSelect.appendChild(option);
        });

        content.appendChild(grid);
        seriesDiv.appendChild(header);
        seriesDiv.appendChild(content);
        fullInventory.appendChild(seriesDiv);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.onerror = function() {
        this.src = 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop';
    };
    imgContainer.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h4');
    title.textContent = product.name;

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = '₹' + product.price.toLocaleString('en-IN');

    const buttons = document.createElement('div');
    buttons.className = 'card-buttons';

    const specsBtn = document.createElement('button');
    specsBtn.className = 'view-specs-btn';
    specsBtn.textContent = 'Specs';
    specsBtn.setAttribute('onclick', `viewSpecs('${product.name}')`);

    const buyBtn = document.createElement('button');
    buyBtn.className = 'buy-now-btn';
    buyBtn.textContent = 'Buy';
    buyBtn.setAttribute('onclick', `checkLoginAndSelect('${product.name}')`);

    buttons.appendChild(specsBtn);
    buttons.appendChild(buyBtn);

    content.appendChild(title);
    content.appendChild(price);
    content.appendChild(buttons);

    card.appendChild(imgContainer);
    card.appendChild(content);

    return card;
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 iStore JavaScript initialized');
    
    // Initialize slideshow with swipe
    new SwipeSlideshow();
    
    // Load products
    loadProducts();
    
    // Update amount
    updateAmount();
    
    // Check login status
    checkLoginStatus();
    
    // Load users and orders
    loadUsers();
    loadOrders();
    
    // Add event listeners to payment radio buttons
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', togglePaymentDetails);
    });
    
    // Initialize payment details
    togglePaymentDetails();
});
