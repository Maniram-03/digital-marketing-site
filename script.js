 emailjs.init("DRkwa9YwWLNK4fbnd");

        // Login State
        let isLoggedIn = false;
        let userEmail = '';
        let userName = '';
        let userPhone = '';
        
        // Users Array for demo (in real app, this would be server-side)
        let users = [];

        // Load users from localStorage
        function loadUsers() {
            const savedUsers = localStorage.getItem('iStoreUsers');
            if (savedUsers) {
                users = JSON.parse(savedUsers);
            }
        }

        // Save users to localStorage
        function saveUsers() {
            localStorage.setItem('iStoreUsers', JSON.stringify(users));
        }

        // Orders Array
        let orders = [];

        // Load orders from localStorage
        function loadOrders() {
            const savedOrders = localStorage.getItem('iStoreOrders');
            if (savedOrders) {
                orders = JSON.parse(savedOrders);
            }
        }

        // Save orders to localStorage
        function saveOrders() {
            localStorage.setItem('iStoreOrders', JSON.stringify(orders));
        }

        // Slideshow functionality - 3 seconds
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        
        function showSlides() {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            
            slides[slideIndex - 1].classList.add('active');
            dots[slideIndex - 1].classList.add('active');
            
            setTimeout(showSlides, 3000);
        }
        
        window.currentSlide = function(n) {
            slideIndex = n - 1;
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        };
        
        document.addEventListener('DOMContentLoaded', function() {
            showSlides();
            updateAmount();
            checkLoginStatus();
            loadUsers();
            loadOrders();
        });

        // Auth Functions
        function showAuthModal() {
            document.getElementById('authModal').style.display = 'flex';
        }

        function hideAuthModal() {
            document.getElementById('authModal').style.display = 'none';
        }

        function switchAuthTab(tab) {
            const tabs = document.querySelectorAll('.auth-tab');
            const forms = document.querySelectorAll('.auth-form');
            
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            
            if (tab === 'login') {
                tabs[0].classList.add('active');
                document.getElementById('loginForm').classList.add('active');
                document.getElementById('authTitle').textContent = 'Welcome Back';
                document.getElementById('authSubtitle').textContent = 'Sign in to continue shopping';
            } else {
                tabs[1].classList.add('active');
                document.getElementById('signupForm').classList.add('active');
                document.getElementById('authTitle').textContent = 'Create Account';
                document.getElementById('authSubtitle').textContent = 'Sign up to start shopping';
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Check if user exists (demo - in real app, validate with server)
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
                
                document.getElementById('accountIcon').style.display = 'none';
                const profileBadge = document.getElementById('profileBadge');
                profileBadge.style.display = 'flex';
                document.getElementById('profileAvatar').textContent = email.charAt(0).toUpperCase();
                document.getElementById('profileTooltip').textContent = email;
                
                document.getElementById('customerEmail').value = email;
                
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
            
            // Validation
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
            
            // Check if user already exists
            if (users.some(u => u.email === email)) {
                showErrorModal("Email Exists", "An account with this email already exists. Please login.");
                switchAuthTab('login');
                return;
            }
            
            // Create new user
            const newUser = {
                name: name,
                email: email,
                phone: phone,
                password: password,
                created: new Date().toISOString()
            };
            
            users.push(newUser);
            saveUsers();
            
            // Auto login after signup
            isLoggedIn = true;
            userEmail = email;
            userName = name;
            userPhone = phone;
            
            localStorage.setItem('iStoreLoggedIn', 'true');
            localStorage.setItem('iStoreEmail', email);
            localStorage.setItem('iStoreName', name);
            localStorage.setItem('iStorePhone', phone);
            
            document.getElementById('accountIcon').style.display = 'none';
            const profileBadge = document.getElementById('profileBadge');
            profileBadge.style.display = 'flex';
            document.getElementById('profileAvatar').textContent = email.charAt(0).toUpperCase();
            document.getElementById('profileTooltip').textContent = email;
            
            document.getElementById('customerEmail').value = email;
            
            hideAuthModal();
            showModal("Account Created! 🎉", `Welcome ${name}! Your account has been created successfully.`);
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
                
                document.getElementById('accountIcon').style.display = 'none';
                const profileBadge = document.getElementById('profileBadge');
                profileBadge.style.display = 'flex';
                document.getElementById('profileAvatar').textContent = savedEmail.charAt(0).toUpperCase();
                document.getElementById('profileTooltip').textContent = savedEmail;
                document.getElementById('customerEmail').value = savedEmail;
            }
        }

        function toggleProfileDropdown() {
            const dropdown = document.getElementById('profileDropdown');
            dropdown.classList.toggle('active');
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
            
            document.getElementById('accountIcon').style.display = 'flex';
            document.getElementById('profileBadge').style.display = 'none';
            document.getElementById('profileDropdown').classList.remove('active');
            
            document.getElementById('customerEmail').value = '';
            
            showModal("Logged Out", "You have been successfully logged out.");
        }

        // Profile Functions
        function showProfile() {
            if (!isLoggedIn) {
                showAuthModal();
                showErrorModal("Login Required", "Please login first to view your profile.");
                return;
            }
            
            document.getElementById('profileDropdown').classList.remove('active');
            
            const content = document.getElementById('profileContent');
            const userOrders = orders.filter(order => order.email === userEmail);
            const orderCount = userOrders.length;
            const totalSpent = userOrders.reduce((sum, order) => sum + order.amount, 0);
            
            content.innerHTML = `
                <div class="profile-avatar-large" id="profileAvatarLarge">${userEmail.charAt(0).toUpperCase()}</div>
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
            
            document.getElementById('profileModal').style.display = 'flex';
        }

        function hideProfile() {
            document.getElementById('profileModal').style.display = 'none';
        }

        // Order History Functions
        function showOrderHistory() {
            if (!isLoggedIn) {
                showAuthModal();
                showErrorModal("Login Required", "Please login first to view your order history.");
                return;
            }
            
            document.getElementById('profileDropdown').classList.remove('active');
            
            const content = document.getElementById('orderHistoryContent');
            const userOrders = orders.filter(order => order.email === userEmail);
            
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
            
            document.getElementById('orderHistoryModal').style.display = 'flex';
        }

        function hideOrderHistory() {
            document.getElementById('orderHistoryModal').style.display = 'none';
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

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('profileDropdown');
            const profileBadge = document.getElementById('profileBadge');
            
            if (profileBadge && !profileBadge.contains(event.target) && dropdown && !dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Payment Details Toggle
        function togglePaymentDetails() {
            const cardDetails = document.getElementById('cardDetails');
            const upiDetails = document.getElementById('upiDetails');
            const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
            
            cardDetails.classList.remove('active');
            upiDetails.classList.remove('active');
            
            if (selectedPayment === 'card') {
                cardDetails.classList.add('active');
            } else if (selectedPayment === 'upi') {
                upiDetails.classList.add('active');
            }
        }

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

        function updateAmount() {
            const select = document.getElementById('modelSelect');
            const selected = select.value;
            const amountDiv = document.getElementById('amountDisplay');
            if (selected && priceMap[selected]) {
                amountDiv.innerText = '₹' + priceMap[selected].toLocaleString('en-IN');
            } else {
                amountDiv.innerText = '₹0';
            }
        }

        function generateOrderId() {
            return 'IST-' + Math.floor(Math.random() * 9000 + 1000);
        }

        function toggleSupport() {
            const win = document.getElementById('supportWindow');
            win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
        }

        function showModal(title, msg) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalMsg').innerText = msg;
            document.getElementById('modalOverlay').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modalOverlay').style.display = 'none';
        }

        function showErrorModal(title, msg) {
            document.getElementById('errorTitle').innerText = title;
            document.getElementById('errorMsg').innerText = msg;
            document.getElementById('errorModal').style.display = 'flex';
        }

        function closeErrorModal() {
            document.getElementById('errorModal').style.display = 'none';
        }

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

            const name = document.getElementById('customerName').value.trim();
            const email = document.getElementById('customerEmail').value.trim();
            const phone = document.getElementById('customerPhone').value.trim();
            const model = document.getElementById('modelSelect').value;
            const address = document.getElementById('shippingAddress').value.trim();
            
            const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
            let paymentText = '';
            if (paymentMethod === 'cod') paymentText = 'Cash on Delivery';
            else if (paymentMethod === 'card') paymentText = 'Credit/Debit Card';
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

            const amount = priceMap[model];
            const orderId = generateOrderId();
            
            const templateParams = {
                to_email: email,
                to_name: name,
                order_id: orderId,
                customer_name: name,
                customer_phone: phone,
                selected_model: model,
                shipping_address: address,
                payment_method: paymentText,
                total_amount: '₹' + amount.toLocaleString('en-IN'),
                order_date: new Date().toLocaleDateString('en-IN'),
                year: new Date().getFullYear().toString()
            };

            try {
                await emailjs.send('service_ywgy9ip', 'template_ynyl9wb', templateParams);
                
                // Save order to history
                const newOrder = {
                    orderId: orderId,
                    email: email,
                    name: name,
                    phone: phone,
                    model: model,
                    amount: amount,
                    paymentMethod: paymentText,
                    address: address,
                    date: new Date().toISOString(),
                    status: 'Processing'
                };
                
                orders.push(newOrder);
                saveOrders();
                
                showModal(
                    "Order Confirmed! 🎉",
                    `Dear ${name},\n\nYour order has been confirmed!\nOrder ID: ${orderId}\nModel: ${model}\nPayment: ${paymentText}\nTotal: ₹${amount.toLocaleString('en-IN')}\n\nConfirmation sent to ${email}`
                );

                document.getElementById('orderForm').reset();
                document.getElementById('amountDisplay').innerText = '₹0';
                
                if (isLoggedIn) {
                    document.getElementById('customerEmail').value = userEmail;
                }

            } catch (error) {
                showErrorModal("Error", "Failed to send confirmation. Please try again.");
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        }

        function handleMissingOrder(e) {
            e.preventDefault();
            const id = document.getElementById('supportOrderId').value;
            toggleSupport();
            showModal("Ticket Created", `Support ticket for Order ${id} has been sent.`);
            e.target.reset();
        }

        function toggleInventory() {
            const inv = document.getElementById('fullInventory');
            const btn = document.getElementById('inventoryBtn');
            const arrow = btn.querySelector('.arrow');
            
            if (inv.style.display === "none" || inv.style.display === "") {
                inv.style.display = "block";
                arrow.innerHTML = '↑';
            } else {
                inv.style.display = "none";
                arrow.innerHTML = '↓';
            }
        }

        // Updated toggleSeries function - closes previous when new opens
        let currentOpenSeries = null;

        function toggleSeries(id, element) {
            const el = document.getElementById(id);
            const span = element.querySelector('span:last-child');
            
            // If there's a currently open series and it's not this one, close it
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
            
            // Toggle current series
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

        function selectModel(name) {
            const sel = document.getElementById('modelSelect');
            for (let opt of sel.options) {
                if (opt.value === name) {
                    sel.value = name;
                    break;
                }
            }
            updateAmount();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }

        function viewSpecs(model) {
            const data = deviceData[model] || {};
            document.getElementById('specTitle').innerText = model;
            document.getElementById('specBody').innerHTML = `
                <div class="spec-item"><b>Chipset</b> <span>${data.cpu || 'A-series'}</span></div>
                <div class="spec-item"><b>Display</b> <span>${data.display || 'Retina'}</span></div>
                <div class="spec-item"><b>Camera</b> <span>${data.camera || 'Standard'}</span></div>
                <div class="spec-item"><b>Battery</b> <span>${data.battery || 'Standard'}</span></div>
            `;
            document.getElementById('specsModal').style.display = 'flex';
        }

        function closeSpecs() {
            document.getElementById('specsModal').style.display = 'none';
        }
   
