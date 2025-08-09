      // Obsługa formularza kontaktowego
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Walidacja podstawowa
            if (!name || !email || !message) {
                alert('Proszę wypełnić wszystkie pola formularza.');
                return;
            }
            
            // Walidacja email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Proszę podać poprawny adres email.');
                return;
            }
            
            // Przygotowanie wiadomości
            const subject = `Wiadomość od ${name} - SocialSfera`;
            const body = `Imię: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AWiadomość:%0D%0A${message}`;
            
            // Wysłanie maila
            window.location.href = `mailto:kontakt@socialsfera.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Reset formularza
            document.getElementById('contactForm').reset();
            
            // Komunikat sukcesu
            alert('Dziękuję za wiadomość! Otwieram klienta pocztowego...');
        });

        // Płynne przewijanie do sekcji
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    