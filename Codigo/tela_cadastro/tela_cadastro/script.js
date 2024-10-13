document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.getElementById('image-preview');
        img.src = e.target.result;
        img.style.display = 'block';

        document.getElementById('image-upload').style.display = 'none';
        
        document.querySelector('label[for="image-upload"]').style.display = 'none';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
