
//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "block";
}

//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "We offer a range of grooming services, including baths, haircuts, nail trims, ear cleaning, teeth brushing, de-shedding treatments, flea and tick treatments, and more. We also have special packages like puppy grooming and deluxe spa options for pampering your pet!";
}

//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "The frequency of grooming depends on your dog's breed, coat type, and lifestyle. Dogs with long or curly coats often need grooming every 4-6 weeks, while short-haired breeds may only need a bath and nail trim every 8-12 weeks. Regular grooming keeps your dog healthy, comfortable, and looking great.";
}

//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "A typical grooming session lasts between 2 to 3 hours, depending on the size of your dog, the condition of their coat, and the services selected. For more complex services like de-shedding or specific breed cuts, it might take longer. We always strive to provide efficient service while ensuring your dog feels comfortable and relaxed";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "Yes, we recommend booking your appointment in advance, especially during busy times like holidays or weekends. You can schedule appointments easily through our website or by calling us directly.";
}

//Function to display the fifth answer
function ans5() {
    heading.style.display = "block";
    answer.textContent = "We specialize in creating a calm and comfortable environment for all dogs, especially those who are anxious. Our groomers are experienced in handling nervous dogs and use gentle techniques, patience, and plenty of treats to ensure your dog feels safe.";
}

//Function to display the sixth answer
function ans6() {
    heading.style.display = "block";
    answer.textContent = "Please ensure your dog has had a potty break before arriving for their grooming session. If your dog has any special needs, allergies, or medical conditions, let us know in advance so we can accommodate them.";
}

//Function to display the seventh answer
function ans7() {
    heading.style.display = "block";
    answer.textContent = "Yes! We offer mobile grooming services where we bring the salon to you. Our fully equipped grooming van provides the same high-quality services at the convenience of your home. Mobile grooming is perfect for dogs who may be stressed by car rides or busy environments.";
}

//Function to display the eigth answer
function ans8() {
    heading.style.display = "block";
    answer.textContent = "We use high-quality, eco-friendly, and natural grooming products that are safe for your dog’s coat and skin. If your dog has sensitive skin or allergies, we offer hypoallergenic and medicated shampoos.";
}

//Function to display the ninth answer
function ans9() {
    heading.style.display = "block";
    answer.textContent = "If we find fleas or ticks on your dog, we will notify you immediately and recommend a flea and tick treatment during the grooming session. It’s important to address these issues quickly for your dog’s comfort and to prevent spreading them to other pets.";
}

//Function to display the tenth answer
function ans10() {
    heading.style.display = "block";
    answer.textContent = "For the safety and comfort of both your dog and our groomers, we typically request that pet parents do not stay during the session. Many dogs are calmer and less anxious when their owners are not present. However, feel free to discuss any concerns with us, and we can make accommodations if needed.";
}

//Function to display the eleventh answer
function ans11() {
    heading.style.display = "block";
    answer.textContent = "Yes, we offer a special Puppy’s First Groom service that introduces young dogs to the grooming process in a gentle and positive way. We take extra care to make their first grooming experience fun and stress-free.";
}

//Function to display the twelfth answer
function ans12() {
    heading.style.display = "block";
    answer.textContent = "We understand that plans change, so we kindly ask for at least 24 hours' notice if you need to cancel or reschedule your appointment. Cancellations made with less than 24 hours’ notice may be subject to a fee.";
}

//Function to display the thirteenth answer
function ans13() {
    heading.style.display = "block";
    answer.textContent = "You can book an appointment directly through our website, call us, or stop by the salon to schedule in person. For mobile grooming, please call to ensure availability in your area.";
}

//Function to display the fourteenth answer
function ans14() {
    heading.style.display = "block";
    answer.textContent = "Yes, we groom dogs of all breeds, sizes, and coat types. Whether your dog has short hair, long hair, or a double coat, we have experience working with a wide variety of dogs and tailoring grooming services to their specific needs.";
}

//Function to display the fifteenth answer
function ans15() {
    heading.style.display = "block";
    answer.textContent = "We accept cash, credit cards, and mobile payment options like Apple Pay and Google Pay. Payments can be made after your dog’s grooming session is completed.";
}
