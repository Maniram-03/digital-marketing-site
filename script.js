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
// LOGIN STATE & USERS
// ============================================
let isLoggedIn = false;
let userEmail = '';
let userName = '';
let userPhone = '';

let users = [];
let orders = [];

// Load data from localStorage
function loadUsers() {
    const savedUsers = localStorage.getItem('iStoreUsers');
    if (savedUsers) users = JSON.parse(savedUsers);
}

function saveUsers() {
    localStorage.setItem('iStoreUsers', JSON.stringify(users));
}

function loadOrders() {
    const savedOrders = localStorage.getItem('iStoreOrders');
    if (savedOrders) orders = JSON.parse(savedOrders);
}

function saveOrders() {
    localStorage.setItem('iStoreOrders', JSON.stringify(orders));
}

// ============================================
// SLIDESHOW
// ============================================
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    if (slides[slideIndex - 1]) slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000);
}

window.currentSlide = function(n) {
    slideIndex = n - 1;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    if (slides[slideIndex]) slides[slideIndex].classList.add('active');
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
};

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
// AUTH FUNCTIONS
// ============================================
function showAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'flex';
}

function hideAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
}

function switchAuthTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        tabs[0]?.classList.add('active');
        document.getElementById('loginForm')?.classList.add('active');
        document.getElementById('authTitle').textContent = 'Welcome Back';
        document.getElementById('authSubtitle').textContent = 'Sign in to continue shopping';
    } else {
        tabs[1]?.classList.add('active');
        document.getElementById('signupForm')?.classList.add('active');
        document.getElementById('authTitle').textContent = 'Create Account';
        document.getElementById('authSubtitle').textContent = 'Sign up to start shopping';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        isLoggedIn = true;
        userEmail = email;
        userName = user.name;
        userPhone = user.phone;

        localStorage.setItem('iStoreLoggedIn', 'true');
        localStorage.setItem('iStoreEmail', email);
        localStorage.setItem('iStoreName', userName);
        localStorage.setItem('iStorePhone', userPhone);

        const accountIcon = document.getElementById('accountIcon');
        const profileBadge = document.getElementById('profileBadge');
        if (accountIcon) accountIcon.style.display = 'none';
        if (profileBadge) {
            profileBadge.style.display = 'flex';
            document.getElementById('profileAvatar').textContent = email.charAt(0).toUpperCase();
            document.getElementById('profileTooltip').textContent = email;
        }

        const customerEmail = document.getElementById('customerEmail');
        if (customerEmail) customerEmail.value = email;

        hideAuthModal();
        showModal("Welcome! 🎉", `Successfully logged in as ${email}`);
    } else {
        showErrorModal("Login Failed", "Invalid email or password. Please try again.");
    }
}

function handleSignup(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (!name || !email || !phone || !password || !confirmPassword) {
        showErrorModal("Missing Information", "Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        showErrorModal("Password Mismatch", "Passwords do not match.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showErrorModal("Invalid Email", "Please enter a valid email address.");
        return;
    }

    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        showErrorModal("Invalid Phone", "Please enter a valid 10-digit mobile number.");
        return;
    }

    if (users.some(u => u.email === email)) {
        showErrorModal("Email Exists", "An account with this email already exists. Please login.");
        switchAuthTab('login');
        return;
    }

    const newUser = {
        name: name,
        email: email,
        phone: phone,
        password: password,
        created: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers();

    // Auto login
    isLoggedIn = true;
    userEmail = email;
    userName = name;
    userPhone = phone;

    localStorage.setItem('iStoreLoggedIn', 'true');
    localStorage.setItem('iStoreEmail', email);
    localStorage.setItem('iStoreName', name);
    localStorage.setItem('iStorePhone', phone);

    const accountIcon = document.getElementById('accountIcon');
    const profileBadge = document.getElementById('profileBadge');
    if (accountIcon) accountIcon.style.display = 'none';
    if (profileBadge) {
        profileBadge.style.display = 'flex';
        document.getElementById('profileAvatar').textContent = email.charAt(0).toUpperCase();
        document.getElementById('profileTooltip').textContent = email;
    }

    const customerEmail = document.getElementById('customerEmail');
    if (customerEmail) customerEmail.value = email;

    hideAuthModal();
    showModal("Account Created! 🎉", `Welcome ${name}! Your account has been created successfully.`);
}

function handleGoogleSignIn() {
    showModal("Processing...", "Redirecting to Google Sign-In...");

    // Simulate Google authentication
    setTimeout(() => {
        closeModal();

        // In production, replace with actual Google Sign-In
        const googleUser = {
            name: "Google User",
            email: "user@gmail.com",
            phone: "+91 98765 43210"
        };

        isLoggedIn = true;
        userEmail = googleUser.email;
        userName = googleUser.name;
        userPhone = googleUser.phone;

        localStorage.setItem('iStoreLoggedIn', 'true');
        localStorage.setItem('iStoreEmail', googleUser.email);
        localStorage.setItem('iStoreName', googleUser.name);
        localStorage.setItem('iStorePhone', googleUser.phone);

        const accountIcon = document.getElementById('accountIcon');
        const profileBadge = document.getElementById('profileBadge');
        if (accountIcon) accountIcon.style.display = 'none';
        if (profileBadge) {
            profileBadge.style.display = 'flex';
            document.getElementById('profileAvatar').textContent = googleUser.email.charAt(0).toUpperCase();
            document.getElementById('profileTooltip').textContent = googleUser.email;
        }

        const customerEmail = document.getElementById('customerEmail');
        if (customerEmail) customerEmail.value = googleUser.email;

        hideAuthModal();
        showModal("Welcome! 🎉", `Successfully signed in with Google as ${googleUser.email}`);
    }, 1500);
}

function checkLoginStatus() {
    const savedLogin = localStorage.getItem('iStoreLoggedIn');
    const savedEmail = localStorage.getItem('iStoreEmail');
    const savedName = localStorage.getItem('iStoreName');
    const savedPhone = localStorage.getItem('iStorePhone');

    if (savedLogin === 'true' && savedEmail) {
        isLoggedIn = true;
        userEmail = savedEmail;
        userName = savedName || savedEmail.split('@')[0];
        userPhone = savedPhone || '';

        const accountIcon = document.getElementById('accountIcon');
        const profileBadge = document.getElementById('profileBadge');
        if (accountIcon) accountIcon.style.display = 'none';
        if (profileBadge) {
            profileBadge.style.display = 'flex';
            document.getElementById('profileAvatar').textContent = savedEmail.charAt(0).toUpperCase();
            document.getElementById('profileTooltip').textContent = savedEmail;
        }

        const customerEmail = document.getElementById('customerEmail');
        if (customerEmail) customerEmail.value = savedEmail;
    }
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

function logout() {
    isLoggedIn = false;
    userEmail = '';
    userName = '';
    userPhone = '';

    localStorage.removeItem('iStoreLoggedIn');
    localStorage.removeItem('iStoreEmail');
    localStorage.removeItem('iStoreName');
    localStorage.removeItem('iStorePhone');

    const accountIcon = document.getElementById('accountIcon');
    const profileBadge = document.getElementById('profileBadge');
    const dropdown = document.getElementById('profileDropdown');

    if (accountIcon) accountIcon.style.display = 'flex';
    if (profileBadge) profileBadge.style.display = 'none';
    if (dropdown) dropdown.classList.remove('active');

    const customerEmail = document.getElementById('customerEmail');
    if (customerEmail) customerEmail.value = '';

    showModal("Logged Out", "You have been successfully logged out.");
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('profileDropdown');
    const profileBadge = document.getElementById('profileBadge');

    if (profileBadge && !profileBadge.contains(event.target) && dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// ============================================
// PROFILE FUNCTIONS
// ============================================
function showProfile() {
    if (!isLoggedIn) {
        showAuthModal();
        showErrorModal("Login Required", "Please login first to view your profile.");
        return;
    }

    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('active');

    const content = document.getElementById('profileContent');
    const userOrders = orders.filter(order => order.email === userEmail);
    const orderCount = userOrders.length;
    const totalSpent = userOrders.reduce((sum, order) => sum + order.amount, 0);

    if (content) {
        content.innerHTML = `
            <div class="profile-avatar-large">${userEmail.charAt(0).toUpperCase()}</div>
            <div class="profile-info">
                <div class="profile-info-item">
                    <span class="profile-info-label">Name</span>
                    <span class="profile-info-value">${userName}</span>
                </div>
                <div class="profile-info-item">
                    <span class="profile-info-label">Email</span>
                    <span class="profile-info-value">${userEmail}</span>
                </div>
                <div class="profile-info-item">
                    <span class="profile-info-label">Phone</span>
                    <span class="profile-info-value">${userPhone || '+91 98765 43210'}</span>
                </div>
                <div class="profile-info-item">
                    <span class="profile-info-label">Member Since</span>
                    <span class="profile-info-value">March 2026</span>
                </div>
                <div class="profile-info-item">
                    <span class="profile-info-label">Total Orders</span>
                    <span class="profile-info-value">${orderCount}</span>
                </div>
                <div class="profile-info-item">
                    <span class="profile-info-label">Total Spent</span>
                    <span class="profile-info-value">₹${totalSpent.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
    }

    const modal = document.getElementById('profileModal');
    if (modal) modal.style.display = 'flex';
}

function hideProfile() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.style.display = 'none';
}

// ============================================
// ORDER HISTORY FUNCTIONS
// ============================================
function showOrderHistory() {
    if (!isLoggedIn) {
        showAuthModal();
        showErrorModal("Login Required", "Please login first to view your order history.");
        return;
    }

    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('active');

    const content = document.getElementById('orderHistoryContent');
    const userOrders = orders.filter(order => order.email === userEmail);

    if (content) {
        if (userOrders.length === 0) {
            content.innerHTML = '<div class="no-orders">No orders found. Start shopping now!</div>';
        } else {
            let html = `
                <table class="order-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date & Time</th>
                            <th>Model</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            userOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(order => {
                const date = new Date(order.date);
                const formattedDate = date.toLocaleDateString('en-IN');
                const formattedTime = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

                let statusClass = 'status-processing';
                if (order.status === 'Delivered') statusClass = 'status-delivered';
                else if (order.status === 'Shipped') statusClass = 'status-shipped';
                else if (order.status === 'Cancelled') statusClass = 'status-cancelled';

                html += `
                    <tr>
                        <td><strong>${order.orderId}</strong></td>
                        <td>${formattedDate}<br><small style="color:#666;">${formattedTime}</small></td>
                        <td>${order.model}</td>
                        <td><strong style="color:#0071e3;">₹${order.amount.toLocaleString('en-IN')}</strong></td>
                        <td>${order.paymentMethod}</td>
                        <td><span class="status-badge ${statusClass}">${order.status || 'Processing'}</span></td>
                    </tr>
                `;
            });

            html += `
                    </tbody>
                </table>
            `;
            content.innerHTML = html;
        }
    }

    const modal = document.getElementById('orderHistoryModal');
    if (modal) modal.style.display = 'flex';
}

function hideOrderHistory() {
    const modal = document.getElementById('orderHistoryModal');
    if (modal) modal.style.display = 'none';
}

// ============================================
// CHECKOUT FUNCTIONS
// ============================================
function updateAmount() {
    const select = document.getElementById('modelSelect');
    const selected = select?.value;
    const amountDiv = document.getElementById('amountDisplay');
    if (selected && priceMap[selected] && amountDiv) {
        amountDiv.innerText = '₹' + priceMap[selected].toLocaleString('en-IN');
    } else if (amountDiv) {
        amountDiv.innerText = '₹0';
    }
}

function generateOrderId() {
    return 'IST-' + Math.floor(Math.random() * 9000 + 1000);
}

function calculateTotals(amount) {
    const tax = Math.round(amount * 0.18);
    const total = amount + tax;
    return {
        subtotal: '₹' + amount.toLocaleString('en-IN'),
        shipping: 'Free',
        tax: '₹' + tax.toLocaleString('en-IN'),
        total: '₹' + total.toLocaleString('en-IN'),
        totalRaw: total
    };
}

function formatDate(date) {
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function formatDateTime(date) {
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function togglePaymentDetails() {
    const cardDetails = document.getElementById('cardDetails');
    const upiDetails = document.getElementById('upiDetails');
    const selectedPayment = document.querySelector('input[name="payment"]:checked')?.value;

    if (cardDetails) cardDetails.classList.remove('active');
    if (upiDetails) upiDetails.classList.remove('active');

    if (selectedPayment === 'card' && cardDetails) {
        cardDetails.classList.add('active');
    } else if (selectedPayment === 'upi' && upiDetails) {
        upiDetails.classList.add('active');
    }
}

// Check login before order
function checkLoginAndSelect(model) {
    if (!isLoggedIn) {
        showAuthModal();
        showErrorModal("Login Required", "Please login first to place an order.");
        return false;
    }
    selectModel(model);
    return true;
}

// Select Model in Order Form
function selectModel(name) {
    const sel = document.getElementById('modelSelect');
    if (sel) {
        for (let opt of sel.options) {
            if (opt.value === name) {
                sel.value = name;
                break;
            }
        }
    }
    updateAmount();
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
}
window.goToOrder = selectModel;

// Send order email
async function sendOrderEmail(orderId, name, email, phone, model, amount, address, paymentMethod) {
    const totals = calculateTotals(amount);

    const orderDate = new Date();
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(orderDate.getDate() + 7);

    const templateParams = {
        to_email: email,
        to_name: name,
        order_id: orderId,
        customer_name: name,
        customer_phone: phone,
        selected_model: model,
        shipping_address: address,
        payment_method: paymentMethod,
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        tax: totals.tax,
        total_amount: totals.total,
        order_date: formatDateTime(orderDate),
        estimated_delivery: formatDate(deliveryDate),
        support_email: 'support@istore.com',
        support_phone: '+91 1800-123-4567',
        year: new Date().getFullYear().toString()
    };

    console.log('📧 Sending email with params:', templateParams);

    try {
        const response = await emailjs.send('service_ywgy9ip', 'template_ynyl9wb', templateParams);
        console.log('✅ Email sent:', response);
        return response;
    } catch (error) {
        console.error('❌ Email error:', error);
        throw error;
    }
}

// Handle order submission
async function handleOrder(e) {
    e.preventDefault();

    if (!isLoggedIn) {
        showAuthModal();
        showErrorModal("Login Required", "Please login first to place an order.");
        return;
    }

    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Processing...';
    submitBtn.disabled = true;

    const name = document.getElementById('customerName')?.value.trim() || '';
    const email = document.getElementById('customerEmail')?.value.trim() || '';
    const phone = document.getElementById('customerPhone')?.value.trim() || '';
    const model = document.getElementById('modelSelect')?.value || '';
    const address = document.getElementById('shippingAddress')?.value.trim() || '';

    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'cod';
    let paymentText = 'Cash on Delivery';
    if (paymentMethod === 'card') paymentText = 'Credit/Debit Card';
    else if (paymentMethod === 'upi') paymentText = 'UPI';

    if (!name || !email || !phone || !model || !address) {
        showErrorModal("Missing Information", "Please fill in all required fields.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showErrorModal("Invalid Email", "Please enter a valid email address.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        return;
    }

    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        showErrorModal("Invalid Phone", "Please enter a valid 10-digit mobile number.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        return;
    }

    if (!model) {
        showErrorModal("Missing Device", "Please select a device model.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        return;
    }

    if (!priceMap[model]) {
        showErrorModal("Invalid Model", "Selected model price not found.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        return;
    }

    const amount = priceMap[model];
    const orderId = generateOrderId();
    const totals = calculateTotals(amount);

    showModal("Processing...", "Sending order confirmation...");

    try {
        await sendOrderEmail(orderId, name, email, phone, model, amount, address, paymentText);
        closeModal();

        // Save order to history
        const newOrder = {
            orderId: orderId,
            email: email,
            name: name,
            phone: phone,
            model: model,
            amount: totals.totalRaw,
            paymentMethod: paymentText,
            address: address,
            date: new Date().toISOString(),
            status: 'Processing'
        };

        orders.push(newOrder);
        saveOrders();

        showModal(
            "Order Confirmed! 🎉",
            `Order ID: ${orderId}\n` +
            `Payment: ${paymentText}\n` +
            `Total: ${totals.total}\n\n` +
            `Confirmation sent to ${email}\n\n` +
            `Thank you for shopping with iStore!`
        );

        const form = document.getElementById('orderForm');
        if (form) form.reset();

        const amountDisplay = document.getElementById('amountDisplay');
        if (amountDisplay) amountDisplay.innerText = '₹0';

        const cardDetails = document.getElementById('cardDetails');
        const upiDetails = document.getElementById('upiDetails');
        if (cardDetails) cardDetails.classList.remove('active');
        if (upiDetails) upiDetails.classList.remove('active');

        if (isLoggedIn) {
            const customerEmail = document.getElementById('customerEmail');
            if (customerEmail) customerEmail.value = userEmail;
        }

    } catch (error) {
        closeModal();
        let errorMsg = "Failed to send email. ";
        if (error.text) {
            errorMsg += error.text;
        } else {
            errorMsg += "Please try again.";
        }
        showErrorModal("Error", errorMsg);
    } finally {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
}

// ============================================
// SUPPORT FUNCTIONS
// ============================================
function toggleSupport() {
    const win = document.getElementById('supportWindow');
    if (win) {
        win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
    }
}

function handleMissingOrder(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const id = input ? input.value : '';
    toggleSupport();
    showModal("Ticket Created", `Support ticket for Order ${id} has been sent.`);
    if (e.target) e.target.reset();
}

// ============================================
// INVENTORY FUNCTIONS
// ============================================
function toggleInventory() {
    const inv = document.getElementById('fullInventory');
    const btn = document.getElementById('inventoryBtn');
    const arrow = btn?.querySelector('.arrow');

    if (inv) {
        if (inv.style.display === "none" || inv.style.display === "") {
            inv.style.display = "block";
            if (arrow) arrow.innerHTML = '↑';
        } else {
            inv.style.display = "none";
            if (arrow) arrow.innerHTML = '↓';
        }
    }
}

let currentOpenSeries = null;

function toggleSeries(id, element) {
    const el = document.getElementById(id);
    const span = element.querySelector('span:last-child');

    if (!el || !span) return;

    if (currentOpenSeries && currentOpenSeries !== id) {
        const previousEl = document.getElementById(currentOpenSeries);
        const previousHeader = previousEl?.previousElementSibling;
        if (previousEl && previousEl.style.display === "block") {
            previousEl.style.display = "none";
            if (previousHeader) {
                const previousSpan = previousHeader.querySelector('span:last-child');
                if (previousSpan) previousSpan.innerHTML = '+';
            }
        }
    }

    if (el.style.display === "block") {
        el.style.display = "none";
        span.innerHTML = '+';
        currentOpenSeries = null;
    } else {
        el.style.display = "block";
        span.innerHTML = '−';
        currentOpenSeries = id;
    }
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function showModal(title, msg) {
    const titleEl = document.getElementById('modalTitle');
    const msgEl = document.getElementById('modalMsg');
    const overlay = document.getElementById('modalOverlay');

    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = msg;
    if (overlay) overlay.style.display = 'flex';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.style.display = 'none';
}

function showErrorModal(title, msg) {
    const titleEl = document.getElementById('errorTitle');
    const msgEl = document.getElementById('errorMsg');
    const overlay = document.getElementById('errorModal');

    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = msg;
    if (overlay) overlay.style.display = 'flex';
}

function closeErrorModal() {
    const overlay = document.getElementById('errorModal');
    if (overlay) overlay.style.display = 'none';
}

// ============================================
// SPECS FUNCTIONS
// ============================================
function viewSpecs(model) {
    const data = deviceData[model] || {};
    const titleEl = document.getElementById('specTitle');
    const bodyEl = document.getElementById('specBody');
    const modal = document.getElementById('specsModal');

    if (titleEl) titleEl.innerText = model;
    if (bodyEl) {
        bodyEl.innerHTML = `
            <div class="spec-item"><b>Chipset</b> <span>${data.cpu || 'A-series'}</span></div>
            <div class="spec-item"><b>Display</b> <span>${data.display || 'Retina'}</span></div>
            <div class="spec-item"><b>Camera</b> <span>${data.camera || 'Standard'}</span></div>
            <div class="spec-item"><b>Battery</b> <span>${data.battery || 'Standard'}</span></div>
        `;
    }
    if (modal) modal.style.display = 'flex';
}

function closeSpecs() {
    const modal = document.getElementById('specsModal');
    if (modal) modal.style.display = 'none';
}

// ============================================
// TEST FUNCTION
// ============================================
window.testEmail = function(testEmail) {
    const orderDate = new Date();
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(orderDate.getDate() + 7);

    emailjs.send('service_ywgy9ip', 'template_ynyl9wb', {
        to_email: testEmail || 'test@example.com',
        to_name: 'Test User',
        order_id: 'TEST-1234',
        customer_name: 'Test User',
        customer_phone: '+91 98765 43210',
        selected_model: 'iPhone 17 Pro Max',
        payment_method: 'Cash on Delivery',
        subtotal: '₹1,59,900',
        shipping: 'Free',
        tax: '₹28,782',
        total_amount: '₹1,88,682',
        shipping_address: '123 Test Street, Bangalore - 560001',
        order_date: formatDateTime(orderDate),
        estimated_delivery: formatDate(deliveryDate),
        support_email: 'support@istore.com',
        support_phone: '+91 1800-123-4567',
        year: new Date().getFullYear().toString()
    }).then(
        response => alert('✅ Test email sent! Check your inbox.'),
        error => alert('❌ Error: ' + (error.text || 'Something went wrong'))
    );
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 iStore JavaScript initialized');

    showSlides();
    loadProducts();
    updateAmount();
    checkLoginStatus();
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
