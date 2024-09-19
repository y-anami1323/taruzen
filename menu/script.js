document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        // ここで実際のフォーム送信処理を行います（例：APIへのPOSTリクエスト）
        console.log('フォーム送信:', { name, email, message });

        // 送信成功メッセージを表示
        alert('お問い合わせありがとうございます。近日中にご連絡いたします。');

        // フォームをリセット
        contactForm.reset();
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});