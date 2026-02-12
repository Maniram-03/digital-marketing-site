// Function to auto-fill the model in the order form
function selectModel(name) {
    const modelDropdown = document.getElementById('modelSelect');
    modelDropdown.value = name;
    // Smooth scroll to the form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Function to open/close the Support Window
function toggleSupport() {
    const win = document.getElementById('supportWindow');
    win.style.display = (win.style.display === 'flex') ? 'none' : 'flex';
}

// Handle Order Submission
function handleOrder(e) {
    e.preventDefault();
    showModal("Order Received", "Our sales team will contact you via email to finalize your purchase.");
    e.target.reset();
}

// Handle Support/Missing Order Ticket
function handleMissingOrder(e) {
    e.preventDefault();
    const id = e.target.querySelector('input').value;
    toggleSupport();
    showModal("Ticket Created", "Support ticket for Order " + id + " has been sent to our team.");
    e.target.reset();
}

// Modal Controller
function showModal(title, msg) {
    const modal = document.getElementById('modalOverlay');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMsg').innerText = msg;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}




function toggleAllProducts() {
    const extra = document.getElementById('extraProducts');
    const btn = document.getElementById('viewMoreBtn');
    
    if (extra.style.display === "none" || extra.style.display === "") {
        extra.style.display = "block";
        btn.innerText = "Show Less ↑";
        // Smooth scroll to the expanded section
        extra.scrollIntoView({ behavior: 'smooth' });
    } else {
        extra.style.display = "none";
        btn.innerText = "View Full Inventory ↓";
        document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
    }
}

function selectModel(modelName) {
    const modelSelect = document.getElementById('modelSelect');
    if(modelSelect) {
        modelSelect.value = modelName;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}



function toggleInventory() {
    const inventory = document.getElementById('fullInventory');
    const btn = document.getElementById('inventoryBtn');
    
    if (inventory.style.display === "none") {
        inventory.style.display = "block";
        btn.innerText = "Hide Inventory ↑";
        // Smooth scroll to see the new products
        window.scrollBy({ top: 400, behavior: 'smooth' });
    } else {
        inventory.style.display = "none";
        btn.innerText = "View Full Inventory ↓";
    }
}

function selectModel(name) {
    const selector = document.getElementById('modelSelect');
    if(selector) {
        selector.value = name;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}




function toggleSeries(seriesId) {
    const content = document.getElementById(seriesId);
    
    // Toggle the clicked series
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Keep your original toggleInventory function
function toggleInventory() {
    const inventory = document.getElementById('fullInventory');
    const btn = document.getElementById('inventoryBtn');
    
    if (inventory.style.display === "none" || inventory.style.display === "") {
        inventory.style.display = "block";
        btn.innerText = "Hide Inventory ↑";
    } else {
        inventory.style.display = "none";
        btn.innerText = "View Full Inventory ↓";
    }
}





const deviceData = {
    "iPhone 17 Pro Max": { cpu: "A19 Pro", camera: "48MP Ultra-Wide", display: "6.9\" ProMotion", battery: "30+ hrs" },
    "iPhone 17 Pro": { cpu: "A19 Pro", camera: "48MP Main", display: "6.3\" ProMotion", battery: "26 hrs" },
    "iPhone 17 Air": { cpu: "A19", camera: "Single 48MP", display: "6.6\" Slim Design", battery: "22 hrs" },
    "iPhone 17": { cpu: "A19", camera: "Dual 48MP", display: "6.1\" OLED", battery: "20 hrs" },
    "iPhone 16 Pro Max": { cpu: "A18 Pro", camera: "5x Telephoto", display: "6.7\" Titanium", battery: "29 hrs" },
    "iPhone 16 Pro": { cpu: "A18 Pro", camera: "48MP Main", display: "6.3\" Titanium", battery: "27 hrs" },
    "iPhone 16 Plus": { cpu: "A18", camera: "Fusion Camera", display: "6.7\" OLED", battery: "27 hrs" },
    "iPhone 16e": { cpu: "A18", camera: "12MP Main", display: "6.1\" Display", battery: "19 hrs" },
    "iPhone 15 Pro Max": { cpu: "A17 Pro", camera: "5x Optical Zoom", display: "6.7\" Titanium", battery: "29 hrs" },
    "iPhone 15 Pro": { cpu: "A17 Pro", camera: "3x Optical Zoom", display: "6.1\" Titanium", battery: "23 hrs" },
    "iPhone 15 Plus": { cpu: "A16 Bionic", camera: "48MP Main", display: "6.7\" Display", battery: "26 hrs" },
    "iPhone 15": { cpu: "A16 Bionic", camera: "48MP Main", display: "6.1\" Display", battery: "20 hrs" },
    "iPhone 14 Pro Max": { cpu: "A16 Bionic", camera: "48MP Main", display: "Always-On", battery: "29 hrs" },
    "iPhone 14 Pro": { cpu: "A16 Bionic", camera: "48MP Main", display: "Dynamic Island", battery: "23 hrs" },
    "iPhone 14 Plus": { cpu: "A15 Bionic", camera: "Dual Camera", display: "6.7\" OLED", battery: "26 hrs" },
    "iPhone 14": { cpu: "A15 Bionic", camera: "Dual Camera", display: "6.1\" OLED", battery: "20 hrs" },
    "iPhone 13 Pro": { cpu: "A15 Bionic", camera: "120Hz ProMotion", display: "6.1\" OLED", battery: "22 hrs" },
    "iPhone 13": { cpu: "A15 Bionic", camera: "Cinematic Mode", display: "6.1\" OLED", battery: "19 hrs" },
    "iPhone 12": { cpu: "A14 Bionic", camera: "Night Mode", display: "Super Retina", battery: "17 hrs" },
    "iPhone 11 Pro": { cpu: "A13 Bionic", camera: "Triple Camera", display: "Super Retina", battery: "18 hrs" },
    "iPhone 11": { cpu: "A13 Bionic", camera: "Dual 12MP", display: "Liquid Retina", battery: "17 hrs" },
    "iPhone XS": { cpu: "A12 Bionic", camera: "Dual 12MP", display: "Super Retina", battery: "14 hrs" },
    "iPhone SE 3rd Gen": { cpu: "A15 Bionic", camera: "12MP Wide", display: "4.7\" Retina", battery: "15 hrs" },
    "iPhone SE 2nd Gen": { cpu: "A13 Bionic", camera: "12MP Wide", display: "4.7\" Retina", battery: "13 hrs" }
};

// Function to handle showing Specs
function viewSpecs(model) {
    const data = deviceData[model] || { cpu: "TBA", camera: "Standard", display: "Retina", battery: "Standard" };
    
    document.getElementById('specTitle').innerText = model;
    document.getElementById('specBody').innerHTML = `
        <div class="spec-item"><b>Chipset</b> <span>${data.cpu}</span></div>
        <div class="spec-item"><b>Display</b> <span>${data.display}</span></div>
        <div class="spec-item"><b>Camera</b> <span>${data.camera}</span></div>
        <div class="spec-item"><b>Battery</b> <span>${data.battery}</span></div>
    `;
    
    document.getElementById('specsModal').style.display = 'flex';
}

// Function to close the Specs Modal
function closeSpecs() {
    document.getElementById('specsModal').style.display = 'none';
}

// Fixed selectModel to scroll to the order section
function selectModel(name) {
    const modelDropdown = document.getElementById('modelSelect');
    if (modelDropdown) {
        modelDropdown.value = name;
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
