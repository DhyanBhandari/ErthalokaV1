const plans = {
  resident: {
    type: 'Resident',
    amount: 9999,
    currency: 'INR',
    perks: [
      'Residency starting @ 9999/- per month',
      'Get access to our community co-work spaces @ Pondi & Auroville',
      'Get Access to Erthaloka Community & Network',
      'Get 10% Discount on Products & Services',
      'Priority Access to Events'
    ]
  },
  ambassador: {
    type: 'Ambassador',
    amount: 3333,
    currency: 'INR',
    perks: [
      'Ambassador @ 3333/- per month',
      'Get access to our community co-work spaces @ Pondi & Auroville',
      'Get Access to Erthaloka Community & Network',
      'Get 10% Discount on Products & Services',
      'Priority Access to Events'
    ]
  },
  warrior: {
    type: 'Warrior',
    amount: 0,
    currency: 'INR',
    perks: [
      'Warrior - Free Sign-up',
      'Get access to our community co-work spaces @ 99/- per day',
      'Get 10% Discount on Products & Services'
    ]
  }
};

let selectedPlan = null;

function createPlanCard(key, plan) {
  const card = document.createElement('div');
  card.className = 'bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col';
  const title = document.createElement('h3');
  title.className = 'text-xl font-bold mb-4';
  title.textContent = plan.type;
  card.appendChild(title);
  const list = document.createElement('ul');
  list.className = 'mb-6 flex-1 list-disc pl-6';
  plan.perks.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    list.appendChild(li);
  });
  card.appendChild(list);
  const btn = document.createElement('button');
  btn.className = 'bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded';
  btn.textContent = 'Select Plan';
  btn.addEventListener('click', () => selectPlan(key));
  card.appendChild(btn);
  return card;
}

function renderPlans() {
  const grid = document.getElementById('planGrid');
  Object.entries(plans).forEach(([key, plan]) => {
    grid.appendChild(createPlanCard(key, plan));
  });
}

function selectPlan(key) {
  selectedPlan = plans[key];
  document.getElementById('paymentStep').classList.remove('hidden');
  document.getElementById('upiAmount').textContent = `${selectedPlan.amount} ${selectedPlan.currency}`;
}

document.getElementById('payRazorpay').addEventListener('click', async () => {
  if (!selectedPlan) return;
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  document.body.appendChild(script);
  script.onload = () => initiateRazorpay();
});

function initiateRazorpay() {
  // In practice, create the order on your server or Cloud Function
  // This is a placeholder example
  const options = {
    key: 'RAZORPAY_KEY_ID',
    amount: selectedPlan.amount * 100,
    currency: selectedPlan.currency,
    name: 'Erthaloka',
    description: selectedPlan.type,
    handler: function (response){
      // Verify payment on the server then update Firestore
      console.log('Payment success', response);
    }
  };
  const rzp = new Razorpay(options);
  rzp.open();
}

document.getElementById('submitUtr').addEventListener('click', () => {
  const utr = document.getElementById('utrInput').value.trim();
  if (!utr || !selectedPlan) return;
  // Save UTR for manual verification in Firestore
  const user = firebase.auth().currentUser;
  if (!user) return alert('Please sign in');
  firebase.firestore().collection('users').doc(user.uid).set({
    membershipDetails: {
      type: selectedPlan.type,
      amount: selectedPlan.amount,
      currency: selectedPlan.currency,
      utr
    },
    subscriptionStartDate: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).then(() => {
    alert('UTR submitted. Your plan will be activated after verification.');
  });
});

renderPlans();
