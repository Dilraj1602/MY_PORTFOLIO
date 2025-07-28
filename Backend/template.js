function createEmailTemplate(name, email, subject, message) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Contact Form</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 font-sans">
        <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div class="ml-3">
                                <h1 class="text-xl font-bold text-white">Portfolio Contact</h1>
                                <p class="text-blue-100 text-sm">New message received</p>
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="px-6 py-4">
                        <div class="space-y-4">
                            <!-- Sender Info -->
                            <div class="bg-gray-50 rounded-lg p-4">
                                <h2 class="text-lg font-semibold text-gray-900 mb-3">Contact Information</h2>
                                <div class="space-y-2">
                                    <div class="flex items-center">
                                        <span class="text-gray-600 font-medium w-16">Name:</span>
                                        <span class="text-gray-900">${name}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-gray-600 font-medium w-16">Email:</span>
                                        <span class="text-gray-900">${email}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-gray-600 font-medium w-16">Subject:</span>
                                        <span class="text-gray-900">${subject}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Message -->
                            <div class="bg-blue-50 rounded-lg p-4">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Message</h3>
                                <div class="bg-white rounded border p-4">
                                    <p class="text-gray-800 leading-relaxed whitespace-pre-wrap">${message}</p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div class="border-t pt-4">
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span>Sent from your portfolio contact form</span>
                                    <span>${new Date().toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="bg-gray-50 px-6 py-4">
                        <div class="flex space-x-3">
                            <a href="mailto:${email}" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center text-sm transition-colors duration-200">
                                Reply to ${name}
                            </a>
                            <a href="https://github.com/Dilraj1602" class="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md text-center text-sm transition-colors duration-200">
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Additional Info -->
                <div class="text-center text-sm text-gray-500">
                    <p>This email was automatically generated from your portfolio website.</p>
                    <p class="mt-1">© 2024 Dil Raj. All rights reserved.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}

function createPlainTextTemplate(name, email, subject, message) {
    return `
Portfolio Contact Form - New Message
====================================

Contact Information:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}

Message:
${message}

---
Sent from your portfolio contact form on ${new Date().toLocaleDateString()}
Reply to: ${email}
    `;
}

module.exports = {
    createEmailTemplate,
    createPlainTextTemplate
}; 