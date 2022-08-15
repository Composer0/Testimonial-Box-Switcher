const testimonial = document. querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        key: 1,
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. THis guy is an amzing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transform ART into PIXELS - without a glitch, every time."
    },
    {
        key: 2,
        name: 'Morris Morrison',
        position: 'Time-Traveler',
        photo: 'https://randomuser.me/api/portraits/men/19.jpg',
        text: "He definitely bailed me out of a tough situation with his knowledge of tech. I can't tell you how I know this, but this dude is gonna change the world."
    },
    {
        key: 3,
        name: 'Izzy Creeks',
        position: 'Jounalist',
        photo: 'https://randomuser.me/api/portraits/women/94.jpg',
        text: "Just hearing how the process works was fascinating. Got a lot of great information and received a website that has additional features that makes writing and publishing articles even easier than before. Thanks Orion!"
    }
]

let idx = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}


setInterval(updateTestimonial, 10000);