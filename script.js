
// EmailJS INIT
(function(){
  emailjs.init("DRkwa9YwWLNK4fbnd");
  console.log('emailjs initialized');
})();

// PRICE MAP
const priceMap = {
  "iPhone 17 Pro Max":159900,"iPhone 17 Pro":134900,"iPhone 17 Air":109900,"iPhone 17":79900,
  "iPhone 16 Pro Max":144900,"iPhone 16 Pro":119900,"iPhone 16 Plus":99900,"iPhone 16":79900,
  "iPhone 15 Pro Max":129900,"iPhone 15 Pro":109900,"iPhone 15 Plus":89900,"iPhone 15":69900,
  "iPhone 14 Pro Max":99900,"iPhone 14 Pro":84900,"iPhone 14 Plus":79900,"iPhone 14":59900,
  "iPhone 13 Pro Max":89900,"iPhone 13 Pro":79900,"iPhone 13":49900,
  "iPhone SE 3rd Gen":39900,"iPhone SE 2nd Gen":29900,
  "MacBook Pro M4":199900,"MacBook Air M3":114900,"iMac M4":149900,"Mac Mini M4":59900,
  "Mac Studio M4 Max":229900,"Mac Pro M4 Ultra":799900,
  "iPad Pro M4":109900,"iPad Air M2":69900,"iPad mini 7th Gen":54900,"iPad 10th Gen":39900,
  "AirPods Pro 2":24900,"AirPods Max":59900,"AirPods 4":14900,
  "HomePod 2nd Gen":32900,"HomePod mini":10900,
  "Watch Ultra 2":89900,"Watch Series 10":46900,"Watch SE 2nd Gen":29900,
  "Apple Vision Pro":349900,"Vision Pro 2":299900,"Vision Air":199900,"Vision Pro Travel Kit":29900,
  "Apple Pencil Pro":14900,"Magic Keyboard":10900,"AirTag (4 Pack)":10900,
  "MagSafe Charger":4900,"Studio Display":179900
};

// DEVICE SPECS
const deviceData = {
  "iPhone 17 Pro Max":{cpu:"A19 Pro",camera:"48MP Triple",display:"6.9\" ProMotion",battery:"30+ hrs"},
  "iPhone 17 Pro":{cpu:"A19 Pro",camera:"48MP Dual",display:"6.3\" ProMotion",battery:"26 hrs"},
  "iPhone 17 Air":{cpu:"A19",camera:"48MP Single",display:"6.6\" OLED",battery:"22 hrs"},
  "iPhone 17":{cpu:"A19",camera:"48MP",display:"6.1\" OLED",battery:"20 hrs"},
  "iPhone 16 Pro Max":{cpu:"A18 Pro",camera:"48MP Triple",display:"6.9\" ProMotion",battery:"28 hrs"},
  "iPhone 16 Pro":{cpu:"A18 Pro",camera:"48MP Dual",display:"6.3\" ProMotion",battery:"24 hrs"},
  "iPhone 16 Plus":{cpu:"A18",camera:"48MP Dual",display:"6.7\" OLED",battery:"26 hrs"},
  "iPhone 16":{cpu:"A18",camera:"48MP",display:"6.1\" OLED",battery:"22 hrs"},
  "iPhone 15 Pro Max":{cpu:"A17 Pro",camera:"48MP Triple",display:"6.7\" ProMotion",battery:"29 hrs"},
  "iPhone 15 Pro":{cpu:"A17 Pro",camera:"48MP Triple",display:"6.1\" ProMotion",battery:"23 hrs"},
  "iPhone 15 Plus":{cpu:"A16",camera:"48MP Dual",display:"6.7\" OLED",battery:"26 hrs"},
  "iPhone 15":{cpu:"A16",camera:"48MP",display:"6.1\" OLED",battery:"20 hrs"},
  "iPhone 14 Pro Max":{cpu:"A16",camera:"48MP Triple",display:"6.7\" ProMotion",battery:"29 hrs"},
  "iPhone 14 Pro":{cpu:"A16",camera:"48MP Triple",display:"6.1\" ProMotion",battery:"23 hrs"},
  "iPhone 14 Plus":{cpu:"A15",camera:"12MP Dual",display:"6.7\" OLED",battery:"26 hrs"},
  "iPhone 14":{cpu:"A15",camera:"12MP Dual",display:"6.1\" OLED",battery:"20 hrs"},
  "iPhone 13 Pro Max":{cpu:"A15",camera:"12MP Triple",display:"6.7\" ProMotion",battery:"28 hrs"},
  "iPhone 13 Pro":{cpu:"A15",camera:"12MP Triple",display:"6.1\" ProMotion",battery:"22 hrs"},
  "iPhone 13":{cpu:"A15",camera:"12MP Dual",display:"6.1\" OLED",battery:"19 hrs"},
  "iPhone SE 3rd Gen":{cpu:"A15",camera:"12MP",display:"4.7\" LCD",battery:"15 hrs"},
  "iPhone SE 2nd Gen":{cpu:"A13",camera:"12MP",display:"4.7\" LCD",battery:"13 hrs"},
  "MacBook Pro M4":{cpu:"Apple M4 Pro",camera:"N/A",display:"14\" Retina XDR",battery:"24 hrs"},
  "MacBook Air M3":{cpu:"Apple M3",camera:"N/A",display:"13\" Liquid Retina",battery:"18 hrs"},
  "iPad Pro M4":{cpu:"Apple M4",camera:"12MP Ultra Wide",display:"11\" Ultra Retina XDR",battery:"10 hrs"},
  "AirPods Pro 2":{cpu:"H2 Chip",camera:"N/A",display:"In-ear",battery:"6+30 hrs"},
  "Watch Ultra 2":{cpu:"S9 SiP",camera:"N/A",display:"49mm Always-On",battery:"60 hrs"},
  "Apple Vision Pro":{cpu:"M2 + R1",camera:"12MP + IR x2",display:"4K Micro-OLED/eye",battery:"2.5 hrs"},
  "Vision Pro 2":{cpu:"M4 + R2",camera:"Enhanced Eye Tracking",display:"8K Micro-OLED/eye",battery:"3 hrs"}
};

// AUTH STATE
let isLoggedIn=false, userEmail='', userName='', userPhone='';
let users=[], orders=[];

function loadUsers(){try{const d=localStorage.getItem('iStoreUsers');if(d)users=JSON.parse(d);}catch(e){users=[];}}
function saveUsers(){localStorage.setItem('iStoreUsers',JSON.stringify(users));}
function loadOrders(){try{const d=localStorage.getItem('iStoreOrders');if(d)orders=JSON.parse(d);}catch(e){orders=[];}}
function saveOrders(){localStorage.setItem('iStoreOrders',JSON.stringify(orders));}

// TOAST
function showToast(title,msg,icon){
  icon=icon||'check';
  const t=document.getElementById('toastNotif');
  if(!t){return;}
  document.getElementById('toastIcon').textContent=icon==='check'?'OK':icon==='error'?'x':icon;
  document.getElementById('toastTitle').textContent=title;
  document.getElementById('toastMsg').textContent=msg;
  t.style.transform='translateY(0)';t.style.opacity='1';
  setTimeout(()=>{t.style.transform='translateY(100px)';t.style.opacity='0';},3500);
}

// SUCCESS/ERROR MODALS
function showModal(title,msg){
  const ov=document.getElementById('modalOverlay');
  if(!ov) return;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalMsg').textContent=msg;
  ov.style.display='flex';
}
function closeModal(){
  const ov=document.getElementById('modalOverlay');
  if(ov) ov.style.display='none';
}
function showErrorModal(title,msg){
  const ov=document.getElementById('errorModal');
  if(!ov){alert(title+': '+msg);return;}
  document.getElementById('errorTitle').textContent=title;
  document.getElementById('errorMsg').textContent=msg;
  ov.style.display='flex';
}
function closeErrorModal(){
  const ov=document.getElementById('errorModal');
  if(ov) ov.style.display='none';
}

// SPECS MODAL
function viewSpecs(model){
  const data=deviceData[model]||{};
  const titleEl=document.getElementById('specTitle');
  const bodyEl=document.getElementById('specBody');
  const modal=document.getElementById('specsModal');
  if(titleEl) titleEl.textContent=model;
  if(bodyEl){
    const rows=[['Chipset',data.cpu||'A-series'],['Display',data.display||'Retina'],['Camera',data.camera||'Standard'],['Battery',data.battery||'Standard']];
    bodyEl.innerHTML=rows.map(([l,v])=>`<div style="display:flex;justify-content:space-between;padding:0.65rem 0;border-bottom:1px solid #e5e7eb;font-family:'DM Sans',sans-serif;"><span style="font-size:0.8rem;color:#6b7280;font-weight:500;">${l}</span><span style="font-size:0.88rem;font-weight:700;">${v}</span></div>`).join('');
  }
  if(modal) modal.style.display='flex';
}
function closeSpecs(){
  const m=document.getElementById('specsModal');
  if(m) m.style.display='none';
}

// AUTH MODAL
function showAuthModal(tab){
  const m=document.getElementById('authModal');
  if(m){m.classList.add('active');document.body.style.overflow='hidden';}
  if(tab) switchAuthTab(tab);
}
function hideAuthModal(){
  const m=document.getElementById('authModal');
  if(m){m.classList.remove('active');document.body.style.overflow='';}
}
function handleOverlayClick(e){
  if(e.target===document.getElementById('authModal')) hideAuthModal();
}
document.addEventListener('keydown',function(e){if(e.key==='Escape') hideAuthModal();});

function switchAuthTab(tab){
  document.querySelectorAll('.auth-tab').forEach(function(t){t.classList.remove('active');});
  document.querySelectorAll('.auth-form').forEach(function(f){f.classList.remove('active');});
  const titleEl=document.getElementById('authTitle');
  const subEl=document.getElementById('authSubtitle');
  if(tab==='login'){
    const tabs=document.querySelectorAll('.auth-tab');
    if(tabs[0]) tabs[0].classList.add('active');
    const lf=document.getElementById('loginForm');
    if(lf) lf.classList.add('active');
    if(titleEl) titleEl.textContent='Welcome Back';
    if(subEl) subEl.textContent='Sign in to continue';
  } else {
    const tabs=document.querySelectorAll('.auth-tab');
    if(tabs[1]) tabs[1].classList.add('active');
    const sf=document.getElementById('signupForm');
    if(sf) sf.classList.add('active');
    if(titleEl) titleEl.textContent='Create Account';
    if(subEl) subEl.textContent='Join iStore today';
  }
}

function togglePwById(id,btn){
  const inp=document.getElementById(id);
  if(!inp) return;
  const hide=inp.type==='password';
  inp.type=hide?'text':'password';
  btn.innerHTML=hide
    ?'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
    :'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
}
function togglePw(id,btn){togglePwById(id,btn);}

// SET LOGGED-IN UI
function setLoggedInUI(email,name){
  var ai=document.getElementById('accountIcon');
  var pb=document.getElementById('profileBadge');
  if(ai) ai.style.display='none';
  if(pb){
    pb.style.display='flex';
    var pa=document.getElementById('profileAvatar');
    var pt=document.getElementById('profileTooltip');
    var dn=document.getElementById('dropdownName');
    var de=document.getElementById('dropdownEmail');
    if(pa) pa.textContent=email.charAt(0).toUpperCase();
    if(pt) pt.textContent=name||email.split('@')[0];
    if(dn) dn.textContent=name||email.split('@')[0];
    if(de) de.textContent=email;
  }
  var ce=document.getElementById('customerEmail');if(ce) ce.value=email;
  var cn=document.getElementById('customerName');if(cn&&name) cn.value=name;
  var cp=document.getElementById('customerPhone');if(cp&&userPhone) cp.value=userPhone;
  updateOrderLoginPrompt();
}
function updateOrderLoginPrompt(){
  var p=document.getElementById('orderLoginPrompt');
  if(p) p.style.display=isLoggedIn?'none':'flex';
}

// LOGIN
function handleLogin(e){if(e)e.preventDefault();handleLoginClick();}
function handleLoginClick(){
  var email=document.getElementById('loginEmail')?document.getElementById('loginEmail').value.trim():'';
  var pw=document.getElementById('loginPassword')?document.getElementById('loginPassword').value:'';
  if(!email||!pw){showErrorModal('Missing Fields','Please fill email and password.');return;}
  var user=null;
  for(var i=0;i<users.length;i++){if(users[i].email===email&&users[i].password===pw){user=users[i];break;}}
  if(user){
    isLoggedIn=true; userEmail=email; userName=user.name; userPhone=user.phone||'';
    localStorage.setItem('iStoreLoggedIn','true');
    localStorage.setItem('iStoreEmail',email);
    localStorage.setItem('iStoreName',user.name);
    localStorage.setItem('iStorePhone',user.phone||'');
    setLoggedInUI(email,user.name);
    hideAuthModal();
    showToast('Welcome back!','Signed in as '+user.name,'ok');
  } else {
    var box=document.getElementById('authModalBox');
    if(box){box.style.animation='none';void box.offsetWidth;box.style.animation='modalShake 0.4s ease';}
    showErrorModal('Login Failed','Invalid email or password. Please try again.');
  }
}

// SIGNUP
function handleSignup(e){if(e)e.preventDefault();handleSignupClick();}
function handleSignupClick(){
  var name=document.getElementById('signupName')?document.getElementById('signupName').value.trim():'';
  var email=document.getElementById('signupEmail')?document.getElementById('signupEmail').value.trim():'';
  var phone=document.getElementById('signupPhone')?document.getElementById('signupPhone').value.trim():'';
  var pw=document.getElementById('signupPassword')?document.getElementById('signupPassword').value:'';
  var cpw=document.getElementById('signupConfirmPassword')?document.getElementById('signupConfirmPassword').value:'';
  if(!name||!email||!phone||!pw||!cpw){showErrorModal('Missing Fields','Please fill all fields.');return;}
  if(pw!==cpw){showErrorModal('Password Mismatch','Passwords do not match.');return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showErrorModal('Invalid Email','Enter a valid email address.');return;}
  if(!/^[6-9][0-9]{9}$/.test(phone)){showErrorModal('Invalid Phone','Enter a valid 10-digit mobile number.');return;}
  var exists=false;
  for(var i=0;i<users.length;i++){if(users[i].email===email){exists=true;break;}}
  if(exists){showErrorModal('Email Exists','Account already exists. Please sign in.');switchAuthTab('login');return;}
  var newUser={name:name,email:email,phone:phone,password:pw,created:new Date().toISOString()};
  users.push(newUser); saveUsers();
  isLoggedIn=true; userEmail=email; userName=name; userPhone=phone;
  localStorage.setItem('iStoreLoggedIn','true');
  localStorage.setItem('iStoreEmail',email);
  localStorage.setItem('iStoreName',name);
  localStorage.setItem('iStorePhone',phone);
  setLoggedInUI(email,name);
  hideAuthModal();
  showToast('Account created!','Welcome to iStore, '+name+'!','ok');
}

// GOOGLE SIGN-IN
function handleGoogleSignIn(){
  showToast('Google Sign-In','Connecting to Google...','...');
  setTimeout(function(){
    var gUser={name:'Google User',email:'user@gmail.com',phone:''};
    isLoggedIn=true; userEmail=gUser.email; userName=gUser.name; userPhone='';
    localStorage.setItem('iStoreLoggedIn','true');
    localStorage.setItem('iStoreEmail',gUser.email);
    localStorage.setItem('iStoreName',gUser.name);
    setLoggedInUI(gUser.email,gUser.name);
    hideAuthModal();
    showToast('Signed in with Google','Welcome, Google User!','ok');
  },1200);
}

// CHECK LOGIN STATUS
function checkLoginStatus(){
  var sl=localStorage.getItem('iStoreLoggedIn');
  var se=localStorage.getItem('iStoreEmail');
  var sn=localStorage.getItem('iStoreName');
  var sp=localStorage.getItem('iStorePhone');
  if(sl==='true'&&se){
    isLoggedIn=true; userEmail=se; userName=sn||se.split('@')[0]; userPhone=sp||'';
    setLoggedInUI(se,userName);
  } else {
    updateOrderLoginPrompt();
  }
}

// PROFILE DROPDOWN
function toggleProfileDropdown(){
  var d=document.getElementById('profileDropdown');
  if(d) d.style.display=d.style.display==='block'?'none':'block';
}
document.addEventListener('click',function(e){
  var pb=document.getElementById('profileBadge');
  var pd=document.getElementById('profileDropdown');
  if(pb&&pd&&!pb.contains(e.target)) pd.style.display='none';
});

// LOGOUT
function logout(){
  isLoggedIn=false; userEmail=''; userName=''; userPhone='';
  ['iStoreLoggedIn','iStoreEmail','iStoreName','iStorePhone'].forEach(function(k){localStorage.removeItem(k);});
  var ai=document.getElementById('accountIcon');
  var pb=document.getElementById('profileBadge');
  var pd=document.getElementById('profileDropdown');
  if(ai) ai.style.display='flex';
  if(pb) pb.style.display='none';
  if(pd) pd.style.display='none';
  hideProfile();
  updateOrderLoginPrompt();
  showToast('Signed out','See you again soon!','bye');
}

// PROFILE MODAL
function showProfile(){
  if(!isLoggedIn){showAuthModal();return;}
  var pd=document.getElementById('profileDropdown');
  if(pd) pd.style.display='none';
  var userOrders=orders.filter(function(o){return o.email===userEmail;});
  var totalSpent=userOrders.reduce(function(s,o){return s+o.amount;},0);
  var al=document.getElementById('profileAvatarLarge');
  var mn=document.getElementById('profileModalName');
  var me=document.getElementById('profileModalEmail');
  if(al) al.textContent=userEmail.charAt(0).toUpperCase();
  if(mn) mn.textContent=userName;
  if(me) me.textContent=userEmail;
  var c=document.getElementById('profileContent');
  if(c){
    var items=[['Phone',userPhone||'—'],['Member Since','March 2026'],['Total Orders',userOrders.length],['Total Spent','Rs.'+totalSpent.toLocaleString('en-IN')]];
    c.innerHTML='<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;">'+
      items.map(function(item){return '<div style="background:#f5f5f7;border-radius:10px;padding:0.7rem 0.9rem;"><div style="font-size:0.7rem;color:#6b7280;font-weight:500;text-transform:uppercase;letter-spacing:0.5px;font-family:DM Sans,sans-serif;">'+item[0]+'</div><div style="font-size:0.88rem;font-weight:700;margin-top:0.2rem;font-family:DM Sans,sans-serif;">'+item[1]+'</div></div>';}).join('')+
    '</div>';
  }
  var m=document.getElementById('profileModal');
  if(m) m.style.display='flex';
}
function hideProfile(){
  var m=document.getElementById('profileModal');
  if(m) m.style.display='none';
}

// ORDER HISTORY
function showOrderHistory(){
  if(!isLoggedIn){showAuthModal();return;}
  var pd=document.getElementById('profileDropdown');
  if(pd) pd.style.display='none';
  hideProfile();
  var userOrders=orders.filter(function(o){return o.email===userEmail;});
  var c=document.getElementById('orderHistoryContent');
  if(!c) return;
  if(userOrders.length===0){
    c.innerHTML='<div style="text-align:center;padding:2rem;color:#6b7280;font-family:DM Sans,sans-serif;"><div style="font-size:2.5rem;margin-bottom:0.8rem;">&#128;&#166;</div><div style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem;">No orders yet!</div><a href="#order" onclick="hideOrderHistory()" style="color:#2563eb;font-weight:600;font-size:0.88rem;text-decoration:none;">Place your first order</a></div>';
  } else {
    var sorted=userOrders.slice().sort(function(a,b){return new Date(b.date)-new Date(a.date);});
    var statusColors={Processing:'#f59e0b',Delivered:'#16a34a',Shipped:'#2563eb',Cancelled:'#dc2626'};
    c.innerHTML='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-family:DM Sans,sans-serif;font-size:0.85rem;min-width:500px;"><thead><tr style="background:#f5f5f7;">'+
      ['Order ID','Date','Model','Amount','Payment','Status'].map(function(h){return '<th style="padding:0.7rem 0.8rem;text-align:left;font-size:0.72rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">'+h+'</th>';}).join('')+
      '</tr></thead><tbody>'+
      sorted.map(function(o){
        var d=new Date(o.date);
        var sc=statusColors[o.status||'Processing']||'#f59e0b';
        return '<tr style="border-bottom:1px solid #e5e7eb;"><td style="padding:0.75rem 0.8rem;font-weight:700;color:#2563eb;">'+o.orderId+'</td><td style="padding:0.75rem 0.8rem;color:#6b7280;">'+d.toLocaleDateString('en-IN')+'</td><td style="padding:0.75rem 0.8rem;font-weight:600;">'+o.model+'</td><td style="padding:0.75rem 0.8rem;font-weight:700;">Rs.'+o.amount.toLocaleString('en-IN')+'</td><td style="padding:0.75rem 0.8rem;color:#6b7280;">'+o.paymentMethod+'</td><td style="padding:0.75rem 0.8rem;"><span style="padding:0.2rem 0.7rem;border-radius:100px;font-size:0.72rem;font-weight:600;background:'+sc+'33;color:'+sc+';">'+(o.status||'Processing')+'</span></td></tr>';
      }).join('')+
      '</tbody></table></div>';
  }
  var m=document.getElementById('orderHistoryModal');
  if(m) m.style.display='flex';
}
function hideOrderHistory(){
  var m=document.getElementById('orderHistoryModal');
  if(m) m.style.display='none';
}

// ORDER FORM
function updateAmount(){
  var sel=document.getElementById('modelSelect');
  var ad=document.getElementById('amountDisplay');
  if(!sel||!ad) return;
  var v=sel.value;
  ad.textContent=(v&&priceMap[v])? '— Rs.'+priceMap[v].toLocaleString('en-IN'):'';
}
function generateOrderId(){return 'IST-'+Math.floor(Math.random()*9000+1000);}
function formatDate(d){return d.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});}
function formatDateTime(d){return d.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'});}
function calculateTotals(amount){
  var tax=Math.round(amount*0.18);
  var total=amount+tax;
  return {subtotal:'Rs.'+amount.toLocaleString('en-IN'),shipping:'Free',tax:'Rs.'+tax.toLocaleString('en-IN'),total:'Rs.'+total.toLocaleString('en-IN'),totalRaw:total};
}

function togglePaymentDetails(){
  ['codDetails','cardDetails','upiDetails'].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.classList.remove('active');
  });
  var checked=document.querySelector('input[name="payment"]:checked');
  var v=checked?checked.value:'cod';
  var map={cod:'codDetails',card:'cardDetails',upi:'upiDetails'};
  if(v&&map[v]){var el=document.getElementById(map[v]);if(el) el.classList.add('active');}
}

function checkLoginAndSelect(model){
  if(!isLoggedIn){showAuthModal();showErrorModal('Login Required','Please sign in first to place an order.');return false;}
  return selectModel(model);
}
function selectModel(name){
  var sel=document.getElementById('modelSelect');
  if(sel){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===name){sel.value=name;break;}}}
  updateAmount();
  var o=document.getElementById('order');
  if(o) o.scrollIntoView({behavior:'smooth'});
  return true;
}
window.goToOrder=selectModel;

function orderProduct(name){
  if(!isLoggedIn){showAuthModal();showErrorModal('Login Required','Please sign in to buy.');return;}
  selectModel(name);
}

// HANDLE ORDER
async function handleOrder(e){
  e.preventDefault();
  if(!isLoggedIn){showAuthModal();showErrorModal('Login Required','Please sign in to place an order.');return;}
  var btn=e.target.querySelector('.submit-btn');
  var orig=btn.innerHTML;
  btn.innerHTML='Processing...';
  btn.disabled=true;
  var name=document.getElementById('customerName')?document.getElementById('customerName').value.trim():'';
  var email=document.getElementById('customerEmail')?document.getElementById('customerEmail').value.trim():'';
  var phone=document.getElementById('customerPhone')?document.getElementById('customerPhone').value.trim():'';
  var model=document.getElementById('modelSelect')?document.getElementById('modelSelect').value:'';
  var address=document.getElementById('shippingAddress')?document.getElementById('shippingAddress').value.trim():'';
  var checked=document.querySelector('input[name="payment"]:checked');
  var payRaw=checked?checked.value:'cod';
  var payText={cod:'Cash on Delivery',card:'Credit/Debit Card',upi:'UPI'}[payRaw]||'Cash on Delivery';
  if(!name||!email||!phone||!model||!address){
    showErrorModal('Missing Fields','Please fill in all required fields.');
    btn.innerHTML=orig; btn.disabled=false; return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    showErrorModal('Invalid Email','Please enter a valid email address.');
    btn.innerHTML=orig; btn.disabled=false; return;
  }
  if(!/^[6-9][0-9]{9}$/.test(phone)){
    showErrorModal('Invalid Phone','Please enter a valid 10-digit mobile number.');
    btn.innerHTML=orig; btn.disabled=false; return;
  }
  if(!priceMap[model]){
    showErrorModal('Invalid Model','Selected model price not found.');
    btn.innerHTML=orig; btn.disabled=false; return;
  }
  var amount=priceMap[model];
  var totals=calculateTotals(amount);
  var orderId=generateOrderId();
  var now=new Date();
  var delivery=new Date(now); delivery.setDate(now.getDate()+7);
  try {
    await emailjs.send('service_ywgy9ip','template_ynyl9wb',{
      to_email:email, to_name:name, order_id:orderId,
      customer_name:name, customer_phone:'+91 '+phone,
      selected_model:model, shipping_address:address, payment_method:payText,
      subtotal:totals.subtotal, shipping:totals.shipping, tax:totals.tax,
      total_amount:totals.total,
      order_date:formatDateTime(now), estimated_delivery:formatDate(delivery),
      support_email:'support@istore.com', support_phone:'+91 1800-123-4567',
      year:now.getFullYear().toString()
    });
    var newOrder={orderId:orderId,email:email,name:name,phone:phone,model:model,amount:totals.totalRaw,paymentMethod:payText,address:address,date:now.toISOString(),status:'Processing'};
    orders.push(newOrder); saveOrders();
    showModal('Order Confirmed!',
      'Order ID: '+orderId+'\nPayment: '+payText+'\nTotal: '+totals.total+'\n\nConfirmation sent to '+email+'\n\nThank you for shopping with iStore!');
    e.target.reset(); updateAmount();
    if(isLoggedIn){
      var ce=document.getElementById('customerEmail');if(ce)ce.value=userEmail;
      var cn=document.getElementById('customerName');if(cn)cn.value=userName;
    }
    togglePaymentDetails();
  } catch(err){
    showErrorModal('Email Error','Order saved, but email failed. Contact support.\n'+((err&&err.text)||''));
    console.error('EmailJS error:',err);
  }
  btn.innerHTML=orig; btn.disabled=false;
}

// TEST EMAIL
window.testEmail=function(addr){
  var now=new Date(); var d=new Date(now); d.setDate(now.getDate()+7);
  emailjs.send('service_ywgy9ip','template_ynyl9wb',{
    to_email:addr||'test@example.com',to_name:'Test User',order_id:'TEST-1234',
    customer_name:'Test User',customer_phone:'+91 98765 43210',
    selected_model:'iPhone 17 Pro Max',payment_method:'Cash on Delivery',
    subtotal:'Rs.1,59,900',shipping:'Free',tax:'Rs.28,782',total_amount:'Rs.1,88,682',
    shipping_address:'123 Test Street, Bangalore - 560001',
    order_date:formatDateTime(now),estimated_delivery:formatDate(d),
    support_email:'support@istore.com',support_phone:'+91 1800-123-4567',
    year:now.getFullYear().toString()
  }).then(function(){alert('Test email sent!');},function(err){alert('Error: '+(err.text||'Something went wrong'));});
};

// PRODUCT DATA
const productData = {
  iphone:[
    {name:'iPhone 16 Pro Max',price:'Rs.1,59,900',badge:'Latest',badgeClass:'badge-latest',img:'iphone-16-pro-max.png',bg:'',desc:'The most powerful iPhone ever. A18 Pro chip, 48MP Fusion camera, ProMotion OLED.',specs:[['Chip','A18 Pro'],['Display','6.9" OLED'],['Camera','48MP Triple'],['Battery','33 hrs']],colors:['#1d1d1f','#e5e7eb','#d4c5a9','#3d5a80']},
    {name:'iPhone 16 Pro',price:'Rs.1,34,900',badge:'New',badgeClass:'badge-new',img:'iphone-pro.png',bg:'',desc:'Pro-grade performance. A18 Pro chip, 4K 120fps Dolby Vision.',specs:[['Chip','A18 Pro'],['Display','6.3" OLED'],['Camera','48MP Triple'],['Battery','27 hrs']],colors:['#1d1d1f','#e5e7eb','#d4c5a9','#3d5a80']},
    {name:'iPhone 16',price:'Rs.89,900',badge:'New',badgeClass:'badge-new',img:'iphone-16.png',bg:'',desc:'Powered by A18 chip. New Camera Control and Action button.',specs:[['Chip','A18'],['Display','6.1" OLED'],['Camera','48MP Fusion'],['Battery','22 hrs']],colors:['#1d1d1f','#fff','#e8d5c4','#3d6b5e','#e8c4d4']},
    {name:'iPhone 15 Pro',price:'Rs.1,19,900',badge:'Value',badgeClass:'badge-value',img:'iphone-15-pro.png',bg:'',desc:'Titanium design, A17 Pro chip, USB 3, Action button.',specs:[['Chip','A17 Pro'],['Display','6.1" OLED'],['Camera','48MP Triple'],['Battery','23 hrs']],colors:['#1d1d1f','#8e8e93','#d4c5a9','#4a6fa5']},
    {name:'iPhone 14',price:'Rs.69,900',badge:'Value',badgeClass:'badge-value',img:'iphone-14.png',bg:'',desc:'A15 Bionic with Emergency SOS via satellite and Crash Detection.',specs:[['Chip','A15 Bionic'],['Display','6.1" OLED'],['Camera','12MP Dual'],['Battery','20 hrs']],colors:['#1d1d1f','#fff','#b4d0e7','#f4c8bd']},
    {name:'iPhone 13',price:'Rs.59,900',badge:'Value',badgeClass:'badge-value',img:'iphone-13.png',bg:'',desc:'Advanced dual-camera with Cinematic mode. A15 Bionic chip.',specs:[['Chip','A15 Bionic'],['Display','6.1" OLED'],['Camera','12MP Dual'],['Battery','19 hrs']],colors:['#1d1d1f','#fff','#aec6cf','#c6d8af']},
    {name:'iPhone SE 3rd Gen',price:'Rs.49,900',badge:'Value',badgeClass:'badge-value',img:'iphone-se.png',bg:'',desc:'Most affordable iPhone with A15 Bionic and Touch ID.',specs:[['Chip','A15 Bionic'],['Display','4.7" Retina HD'],['Camera','12MP Single'],['Battery','15 hrs']],colors:['#1d1d1f','#fff','#e8d5c4']},
  ],
  mac:[
    {name:'MacBook Pro M4',price:'Rs.1,99,900',badge:'Latest',badgeClass:'badge-latest',img:'macbook-pro.png',bg:'',desc:'Supercharged by M4 Pro. Up to 24 hrs battery.',specs:[['Chip','Apple M4 Pro'],['Display','14" Retina XDR'],['RAM','24GB'],['Battery','24 hrs']],colors:['#1d1d1f','#e2d9c9']},
    {name:'MacBook Air M3',price:'Rs.1,14,900',badge:'New',badgeClass:'badge-new',img:'macbook-air.png',bg:'',desc:'Thin, light, M3 chip, 18-hour battery.',specs:[['Chip','Apple M3'],['Display','13" Liquid Retina'],['RAM','8/16GB'],['Battery','18 hrs']],colors:['#1d1d1f','#e2d9c9','#b4c0d8','#c8d8c8']},
    {name:'iMac M4',price:'Rs.1,49,900',badge:'New',badgeClass:'badge-new',img:'imac.png',bg:'',desc:'All-in-one with M4, 24" 4.5K Retina, 11mm thin.',specs:[['Chip','Apple M4'],['Display','24" 4.5K Retina'],['RAM','16/32GB'],['Storage','256GB-2TB']],colors:['#6eb5ff','#f695c8','#f5c06e','#7ed9a0','#1d1d1f']},
    {name:'Mac Mini M4',price:'Rs.59,900',badge:'Value',badgeClass:'badge-value',img:'mac-mini.png',bg:'',desc:'Most affordable Mac with M4 chip.',specs:[['Chip','Apple M4'],['RAM','16/32GB'],['Storage','256GB-2TB'],['Ports','Thunderbolt 4 x3']],colors:['#1d1d1f']},
    {name:'Mac Studio M4 Max',price:'Rs.2,29,900',badge:'Pro',badgeClass:'badge-pro',img:'mac-studio.png',bg:'',desc:'M4 Max, up to 128GB unified memory.',specs:[['Chip','Apple M4 Max'],['RAM','Up to 128GB'],['Storage','Up to 8TB'],['Ports','Thunderbolt 5 x6']],colors:['#1d1d1f']},
    {name:'Mac Pro M4 Ultra',price:'Rs.7,99,900',badge:'Pro',badgeClass:'badge-pro',img:'mac-pro.png',bg:'',desc:'Most powerful Mac. M4 Ultra, 192GB memory.',specs:[['Chip','Apple M4 Ultra'],['RAM','Up to 192GB'],['Storage','Up to 16TB'],['PCIe','7 expansion slots']],colors:['#1d1d1f']},
  ],
  ipad:[
    {name:'iPad Pro M4',price:'Rs.1,09,900',badge:'Latest',badgeClass:'badge-latest',img:'ipad-pro.png',bg:'',desc:'5.1mm thin. Tandem OLED Ultra Retina XDR, M4 chip.',specs:[['Chip','Apple M4'],['Display','11" Ultra Retina XDR'],['Storage','256GB-2TB'],['Battery','10 hrs']],colors:['#1d1d1f','#e5e7eb']},
    {name:'iPad Air M2',price:'Rs.69,900',badge:'New',badgeClass:'badge-new',img:'ipad-air.png',bg:'',desc:'M2 chip, available in 11" and 13" sizes.',specs:[['Chip','Apple M2'],['Display','11" Liquid Retina'],['Storage','128GB-1TB'],['Battery','10 hrs']],colors:['#6eb5ff','#b4c0d8','#e8c4d4','#c8d8c8']},
    {name:'iPad mini 7th Gen',price:'Rs.54,900',badge:'Value',badgeClass:'badge-value',img:'ipad-mini.png',bg:'',desc:'A17 Pro chip. 8.3" Liquid Retina. Most portable iPad.',specs:[['Chip','A17 Pro'],['Display','8.3" Liquid Retina'],['Storage','128GB-512GB'],['Battery','10 hrs']],colors:['#6eb5ff','#b4c0d8','#e8c4d4','#c8d8c8']},
    {name:'iPad 10th Gen',price:'Rs.39,900',badge:'Value',badgeClass:'badge-value',img:'ipad-10th.png',bg:'',desc:'USB-C, A14 Bionic, 10.9" Liquid Retina.',specs:[['Chip','A14 Bionic'],['Display','10.9" Liquid Retina'],['Storage','64GB-256GB'],['Battery','10 hrs']],colors:['#f5c06e','#c8d8c8','#6eb5ff','#f695c8']},
  ],
  audio:[
    {name:'AirPods Pro 2',price:'Rs.24,900',badge:'Latest',badgeClass:'badge-latest',img:'airpods-pro.png',bg:'',desc:'ANC, Transparency, Adaptive Audio. H2 chip.',specs:[['Chip','H2'],['ANC','Adaptive'],['Battery','6+30 hrs'],['Water','IP54']],colors:['#fff']},
    {name:'AirPods Max',price:'Rs.59,900',badge:'New',badgeClass:'badge-new',img:'airpods-max.png',bg:'',desc:'Over-ear. H1 chip, industry-leading ANC, Spatial Audio.',specs:[['Chip','H1 x2'],['ANC','Yes'],['Battery','20 hrs'],['Driver','40mm']],colors:['#1d1d1f','#e2e8f0','#fce7f3','#dcfce7','#dbeafe']},
    {name:'AirPods 4',price:'Rs.14,900',badge:'Value',badgeClass:'badge-value',img:'airpods-4.png',bg:'',desc:'H2 chip, Personalized Spatial Audio.',specs:[['Chip','H2'],['ANC','Optional'],['Battery','5+30 hrs'],['Water','IPX4']],colors:['#fff']},
    {name:'HomePod 2nd Gen',price:'Rs.32,900',badge:'New',badgeClass:'badge-new',img:'homepod-full.png',bg:'',desc:'S9 chip, room-sensing, Spatial Audio, Matter.',specs:[['Chip','S9'],['Woofer','4" high-excursion'],['Tweeters','5 beam-forming'],['Smart Home','Matter']],colors:['#fff','#1d1d1f']},
    {name:'HomePod mini',price:'Rs.10,900',badge:'Value',badgeClass:'badge-value',img:'homepod.png',bg:'',desc:'Compact 360 degree audio, S5 chip, Thread.',specs:[['Chip','S5'],['Driver','Full-range'],['Siri','Always-on'],['Smart Home','Thread']],colors:['#fff','#1d1d1f','#f5c06e']},
  ],
  watch:[
    {name:'Watch Ultra 2',price:'Rs.89,900',badge:'Latest',badgeClass:'badge-latest',img:'watch-ultra.png',bg:'',desc:'49mm Titanium. Dual-frequency GPS, 60hr battery, 100m WR.',specs:[['Case','49mm Titanium'],['GPS','L1+L5 Dual'],['Battery','60 hrs'],['Water','100m']],colors:['#1d1d1f','#e5e7eb','#f59e0b']},
    {name:'Watch Series 10',price:'Rs.46,900',badge:'New',badgeClass:'badge-new',img:'apple-watch.png',bg:'',desc:'Thinnest ever. Largest display, fastest charging.',specs:[['Case','42/46mm'],['Display','Largest ever'],['Battery','18 hrs'],['New','Sleep Apnea']],colors:['#1d1d1f','#e5e7eb','#d4c5a9','#6eb5ff']},
    {name:'Watch SE 2nd Gen',price:'Rs.29,900',badge:'Value',badgeClass:'badge-value',img:'apple-watch-se.png',bg:'',desc:'S8 chip, Crash Detection, Emergency SOS, 50m WR.',specs:[['Case','40/44mm'],['Chip','S8'],['Battery','18 hrs'],['Water','50m']],colors:['#1d1d1f','#e5e7eb','#d4c5a9']},
  ],
  vision:[
    {name:'Apple Vision Pro',price:'Rs.3,49,900',badge:'New',badgeClass:'badge-new',img:'vision-pro.png',bg:'',desc:'Welcome to the era of spatial computing. Blends digital content with your physical space.',specs:[['Chip','M2 + R1'],['Display','4K Micro-OLED/eye'],['Storage','256GB-1TB'],['Battery','2.5 hrs']],colors:['#e5e7eb','#8e8e93','#d4c5a9']},
    {name:'Vision Pro 2',price:'Rs.2,99,900',badge:'Latest',badgeClass:'badge-latest',img:'vision-pro-2.png',bg:'',desc:'Next-gen spatial computing with M4 chip and improved eye tracking.',specs:[['Chip','M4 + R2'],['Display','8K Micro-OLED/eye'],['Storage','256GB-2TB'],['Battery','3 hrs']],colors:['#e5e7eb','#8e8e93','#d4c5a9']},
    {name:'Vision Air',price:'Rs.1,99,900',badge:'New',badgeClass:'badge-new',img:'vision-air.png',bg:'',desc:'Lightweight spatial computer in a slim aluminium frame.',specs:[['Chip','M3 + R1'],['Display','4K Micro-OLED/eye'],['Weight','200g'],['Battery','2 hrs']],colors:['#e5e7eb','#8e8e93','#f5f5f7']},
    {name:'Vision Pro Travel Kit',price:'Rs.29,900',badge:'Value',badgeClass:'badge-value',img:'vision-accessories.png',bg:'',desc:'Premium carry case, extra battery pack, cleaning kit and spare head bands.',specs:[['Includes','Hard case'],['Battery','Extra pack'],['Straps','3 variants'],['Compatible','Vision Pro / 2']],colors:['#1d1d1f']},
  ],
  acc:[
    {name:'Apple Pencil Pro',price:'Rs.14,900',badge:'New',badgeClass:'badge-new',img:'apple-pencil.png',bg:'',desc:'Squeeze, hover, barrel roll. MagSafe charging.',specs:[['Compatible','iPad Pro M4, Air M2'],['Features','Squeeze+Hover'],['Latency','Sub-pixel'],['Charge','MagSafe']],colors:['#fff']},
    {name:'Magic Keyboard',price:'Rs.10,900',badge:'New',badgeClass:'badge-new',img:'magic-keyboard.png',bg:'',desc:'Touch ID, USB-C charging, scissor-switch.',specs:[['Layout','Full-size'],['Touch ID','Yes'],['Charge','USB-C'],['Battery','~1 month']],colors:['#fff','#1d1d1f']},
    {name:'AirTag (4 Pack)',price:'Rs.10,900',badge:'Value',badgeClass:'badge-value',img:'airtag.png',bg:'',desc:'U1 + NFC, Precision Finding, IPX67.',specs:[['Chip','U1 + NFC'],['Range','Precision Finding'],['Battery','CR2032 1yr'],['Water','IPX67']],colors:['#fff']},
    {name:'MagSafe Charger',price:'Rs.4,900',badge:'New',badgeClass:'badge-new',img:'magsafe.png',bg:'',desc:'Up to 25W fast wireless charging for iPhone 16.',specs:[['Power','Up to 25W'],['Cable','1m / 2m'],['Compatible','iPhone 12+'],['System','MagSafe']],colors:['#fff']},
    {name:'Studio Display',price:'Rs.1,79,900',badge:'New',badgeClass:'badge-new',img:'studio-display.png',bg:'',desc:'27" 5K Retina, A13 Bionic, 600 nits, Center Stage.',specs:[['Size','27" 5K Retina'],['Brightness','600 nits'],['Chip','A13 Bionic'],['Camera','12MP Ultra Wide']],colors:['#1d1d1f']},
  ],
};

// RENDER GRIDS
var EYE_SVG='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
var BAG_SVG='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';

function renderGrid(gridId,items){
  var grid=document.getElementById(gridId);
  if(!grid) return;
  grid.innerHTML='';
  items.forEach(function(p,i){
    var card=document.createElement('div');
    card.className='product-card';
    card.onclick=function(){toggleDetail(gridId,gridId+'-'+i,this);};
    card.innerHTML='<span class="badge '+p.badgeClass+'">'+p.badge+'</span>'
      +'<div class="product-img-wrap" style="'+(p.bg?'background:'+p.bg:'')+'"><img src="'+p.img+'" alt="'+p.name+'"></div>'
      +'<div class="product-info"><h3>'+p.name+'</h3><div class="product-price">'+p.price+'</div>'
      +'<div class="product-actions">'
      +'<button class="btn-view" onclick="event.stopPropagation();viewSpecs(\''+p.name+'\')">'+EYE_SVG+'View Specs</button>'
      +'<button class="btn-buy" onclick="event.stopPropagation();orderProduct(\''+p.name+'\')">'+BAG_SVG+'Buy Now</button>'
      +'</div></div>';
    var panel=document.createElement('div');
    panel.className='product-detail-panel';
    panel.id=gridId+'-'+i+'-panel';
    panel.dataset.product=JSON.stringify(p);
    grid.appendChild(card);
    grid.appendChild(panel);
  });
}

renderGrid('grid-iphone',productData.iphone);
renderGrid('grid-mac',productData.mac);
renderGrid('grid-ipad',productData.ipad);
renderGrid('grid-audio',productData.audio);
renderGrid('grid-watch',productData.watch);
renderGrid('grid-vision',productData.vision);
renderGrid('grid-acc',productData.acc);

// TOGGLE CATEGORY
function toggleCategory(catId){
  var content=document.getElementById(catId);
  var arrow=document.getElementById(catId+'-arrow');
  if(!content||!arrow) return;
  content.classList.toggle('show');
  arrow.classList.toggle('rotate');
}

// DETAIL PANEL
function closeAllPanels(){
  document.querySelectorAll('.product-detail-panel.show').forEach(function(p){p.classList.remove('show');p.innerHTML='';});
  document.querySelectorAll('.product-card.expanded').forEach(function(c){c.classList.remove('expanded');});
}
function toggleDetail(gridId,panelKey,card){
  var panelId=panelKey+'-panel';
  var panel=document.getElementById(panelId);
  if(!panel) return;
  var isOpen=panel.classList.contains('show');
  closeAllPanels();
  if(isOpen) return;
  // Support both JSON dataset (inventory grids) and legacy data-attributes (featured grid)
  var p={};
  if(panel.dataset.product){
    try{p=JSON.parse(panel.dataset.product);}catch(e){}
  } else if(card&&card.dataset){
    var d=card.dataset;
    p={name:d.name,price:d.price,badge:d.badge,badgeClass:d.badgeClass,
       img:d.img,bg:d.bg||'',desc:d.desc,
       specs:[[d.spec1L,d.spec1V],[d.spec2L,d.spec2V],[d.spec3L,d.spec3V],[d.spec4L,d.spec4V]].filter(function(s){return s[0];}),
       colors:(d.colors||'').split(',').filter(Boolean)};
  }
  if(!p.name) return;
  var bgMap={'badge-new':'#2563eb','badge-latest':'#7c3aed','badge-popular':'#111827','badge-value':'#16a34a','badge-pro':'#ea580c'};
  var badgeBg=bgMap[p.badgeClass]||'#2563eb';
  var specsHtml=(p.specs||[]).map(function(s){return '<div class="spec-item"><div class="spec-label">'+s[0]+'</div><div class="spec-value">'+s[1]+'</div></div>';}).join('');
  var colorsHtml=(p.colors||[]).map(function(c,ci){return '<div class="color-dot '+(ci===0?'active':'')+'" style="background:'+c+'" onclick="pickColor(this)"></div>';}).join('');
  panel.innerHTML='<div class="panel-img-side" style="'+(p.bg?'background:'+p.bg:'')+'"><img src="'+p.img+'" alt="'+p.name+'"></div>'
    +'<div class="panel-info-side">'
    +'<span class="panel-badge" style="background:'+badgeBg+'">'+p.badge+'</span>'
    +'<div class="panel-name">'+p.name+'</div>'
    +'<div class="panel-price">'+p.price+'</div>'
    +'<div class="panel-desc">'+p.desc+'</div>'
    +'<div class="panel-specs">'+specsHtml+'</div>'
    +(p.colors&&p.colors.length>1?'<div class="panel-colors"><h4>Available Colours</h4><div class="color-dots">'+colorsHtml+'</div></div>':'')
    +'<div class="panel-btns">'
    +'<button class="panel-btn-buy" onclick="orderProduct(\''+p.name+'\')">'+BAG_SVG+' Order Now - '+p.price+'</button>'
    +'<button class="panel-btn-close" title="Close" onclick="closeAllPanels();">'
    +'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
    +'</button></div></div>';
  panel.classList.add('show');
  card.classList.add('expanded');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'nearest'});},50);
}
function pickColor(dot){
  dot.closest('.color-dots').querySelectorAll('.color-dot').forEach(function(d){d.classList.remove('active');});
  dot.classList.add('active');
}

// SLIDESHOW
var slides=document.querySelectorAll('.slide');
var dotsWrap=document.getElementById('slideDots');
var cur=0,timer;
slides.forEach(function(_,i){
  var d=document.createElement('div');
  d.className='slide-dot'+(i===0?' active':'');
  d.onclick=function(){goTo(i);};
  dotsWrap.appendChild(d);
});
function goTo(n){
  slides[cur].classList.remove('active');
  dotsWrap.querySelectorAll('.slide-dot')[cur].classList.remove('active');
  cur=(n+slides.length)%slides.length;
  slides[cur].classList.add('active');
  dotsWrap.querySelectorAll('.slide-dot')[cur].classList.add('active');
  clearInterval(timer); timer=setInterval(function(){goTo(cur+1);},3000);
}
function changeSlide(d){goTo(cur+d);}
window.currentSlide=function(n){goTo(n-1);};
timer=setInterval(function(){goTo(cur+1);},3000);

// SLIDE CATEGORY BUTTONS
document.querySelectorAll('.slide').forEach(function(slide,si){
  var cats=(slide.dataset.cats||'').split('|');
  var container=document.getElementById('sc'+si);
  if(!container) return;
  cats.forEach(function(cat){
    var btn=document.createElement('button');
    btn.className='slide-cat-btn';
    var t=cat;
    if(cat.indexOf('Pro Max')>=0)t='Pro Max';
    else if(cat.indexOf('Pro')>=0)t='Pro';
    else if(cat.indexOf('Air')>=0)t='Air';
    else if(cat.indexOf('Mini')>=0||cat.indexOf('mini')>=0)t='Mini';
    else if(cat.indexOf('SE')>=0)t='SE';
    else t=cat.substring(0,4);
    btn.textContent=t; btn.title=cat;
    btn.onclick=function(e){e.preventDefault();orderProduct(cat);};
    container.appendChild(btn);
  });
});

// SCROLL FADE
function observeFadeUps(){
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.08});
  document.querySelectorAll('.fade-up:not(.visible)').forEach(function(el){obs.observe(el);});
}
observeFadeUps();

// MOBILE MENU
var mobileBtn=document.getElementById('mobileMenuBtn');
var mobileOverlay=document.getElementById('mobileMenuOverlay');
if(mobileBtn){
  mobileBtn.addEventListener('click',function(){
    mobileOverlay.classList.toggle('active');
    var spans=this.querySelectorAll('span');
    if(mobileOverlay.classList.contains('active')){
      spans[0].style.transform='rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity='0';
      spans[2].style.transform='rotate(-45deg) translate(7px,-6px)';
    } else {
      spans[0].style.transform='none'; spans[1].style.opacity='1'; spans[2].style.transform='none';
    }
  });
}
function closeMobileMenu(){
  if(!mobileOverlay) return;
  mobileOverlay.classList.remove('active');
  var spans=mobileBtn.querySelectorAll('span');
  spans[0].style.transform='none'; spans[1].style.opacity='1'; spans[2].style.transform='none';
}
document.addEventListener('click',function(event){
  if(mobileBtn&&mobileOverlay&&!mobileBtn.contains(event.target)&&!mobileOverlay.contains(event.target)) closeMobileMenu();
});

// SPIN STYLE
var dynStyle=document.createElement('style');
dynStyle.textContent='@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}';
document.head.appendChild(dynStyle);

// INIT
document.addEventListener('DOMContentLoaded',function(){
  console.log('iStore initialized');
  loadUsers();
  loadOrders();
  checkLoginStatus();
  updateAmount();
  var codRadio=document.getElementById('cod');
  if(codRadio) codRadio.checked=true;
  togglePaymentDetails();
  document.querySelectorAll('input[name="payment"]').forEach(function(r){r.addEventListener('change',togglePaymentDetails);});
});