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