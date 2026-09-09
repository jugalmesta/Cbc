/**
 * Generates a safe, unformatted, plain-text WhatsApp API link
 * @param {string} phoneNumber - The branch's phone number
 * @param {string} intention - A brief description of the user's intent
 * @returns {string} The fully encoded WhatsApp URL
 */
function buildWhatsAppLink(phoneNumber, intention) {
    if (!phoneNumber) {
        alert("Sorry, this branch is not accepting WhatsApp orders yet.");
        return '#';
    }

    // Using strictly basic text layout with standard line breaks (\n). 
    // Stripped of all Markdown or WhatsApp specific formatting.
    const message = 
`Hello Classic Business Centre,

I am reaching out regarding: ${intention}.

Please let me know how to proceed with my order/inquiry.

Thank you!`;

    // Encode the plain text message to make it URL safe (turns \n into %0A)
    const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
