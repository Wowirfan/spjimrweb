function updateCode() {
    let dropdown = document.getElementById("country");
    let selectedText = dropdown.options[dropdown.selectedIndex].text;
    let selectedValue = dropdown.value;

    // Sirf country code set karne ke liye innerHTML update karo
    dropdown.options[dropdown.selectedIndex].innerHTML = selectedValue;
    
    // 1 second ke baad wapas pura naam show karne ke liye
   
}
// India States & Cities JSON Data
const indiaData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
    "Delhi": ["New Delhi"],
    "Goa": ["Panaji", "Margao"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    "Jammu & Kashmir": ["Srinagar", "Jammu", "Poonch", "Anantnag"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
    "Karnataka": ["Bengaluru", "Mysore", "Mangalore"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Shillong"],
    "Mizoram": ["Aizawl"],
    "Nagaland": ["Kohima", "Dimapur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
    "Punjab": ["Amritsar", "Ludhiana", "Patiala", "Jalandhar"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Telangana": ["Hyderabad", "Warangal"],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
    "West Bengal": ["Kolkata", "Asansol", "Siliguri"]
};

// Function to Load States in Dropdown
function loadStates() {
    let stateSelect = document.getElementById("state");
    for (let state in indiaData) {
        let option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }
}

// Function to Update Cities Based on Selected State
function updateCities() {
    let state = document.getElementById("state").value;
    let citySelect = document.getElementById("city");

    // Clear previous options
    citySelect.innerHTML = '<option value="">-- Select City --</option>';

    if (state && indiaData[state]) {
        indiaData[state].forEach(city => {
            let option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// Load states on page load
window.onload = loadStates;

function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-box").innerText = captcha;
}

function validateCaptcha() {
    let enteredCaptcha = document.getElementById("captcha-input").value;
    let actualCaptcha = document.getElementById("captcha-box").innerText;

    if (enteredCaptcha === actualCaptcha) {
        document.getElementById("message").innerHTML = "<span style='color: blue;'>Captcha Matched!</span>";
    } else {
        document.getElementById("message").innerHTML = "<span style='color: red;'>Incorrect! Try again.</span>";
        generateCaptcha(); // Refresh Captcha
    }
}

// Load captcha on page load
generateCaptcha();
