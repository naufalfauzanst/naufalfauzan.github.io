const input1Reg = /^[a-zA-Z\s\'-]+$/;
const input2Reg = /^\d{9}$/;
const input3Reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const input4Regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const input5Regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', function() {
        var pElement = input.parentElement.querySelector('p');

        if (input.id === 'input-1') {
            if (input.value.trim() === '' || input1Reg.test(input.value)) {
                pElement.textContent = 'Nama valid';
                pElement.classList.remove('text-red-900');
                pElement.classList.add('text-green-500');
            } else {
                pElement.textContent = 'Nama tidak valid, pastikan hanya huruf, tanda petik dan spasi'; 
                pElement.classList.add('text-red-900');
                pElement.classList.remove('text-green-500');
            }
        } else if (input.id === 'input-2') {
            if (input.value.trim() === '' || input2Reg.test(input.value)) {
                pElement.textContent = 'NIM valid';
                pElement.classList.remove('text-red-900');
                pElement.classList.add('text-green-500');
            } else {
                pElement.textContent = 'NIM tidak valid, pastikan hanya angka dan 9 digit'; 
                pElement.classList.add('text-red-900');
                pElement.classList.remove('text-green-500');
            }
        } else if (input.id === 'input-3') {
            if (input.value.trim() === '' || input3Reg.test(input.value)) {
                pElement.textContent = 'Email valid';
                pElement.classList.remove('text-red-900');
                pElement.classList.add('text-green-500');
            } else {
                pElement.textContent = 'Email tidak valid, pastikan memasukkan yang benar'; 
                pElement.classList.add('text-red-900');
                pElement.classList.remove('text-green-500');
            }
        } else if (input.id === 'input-4') {
            if (input.value.trim() === '' || input4Regex.test(input.value)) {
                pElement.textContent = 'Tanggal valid';
                pElement.classList.remove('text-red-900');
                pElement.classList.add('text-green-500');
            } else {
                pElement.textContent = 'Pastikan memasukkan tanggal dengan format dd/mm/yyyy'; 
                pElement.classList.add('text-red-900');
                pElement.classList.remove('text-green-500');
            }
        } else if (input.id === 'input-5') {
            if (input.value.trim() === '' || input5Regex.test(input.value)) {
                pElement.textContent = 'Nomor telepon valid';
                pElement.classList.remove('text-red-900');
                pElement.classList.add('text-green-500');
            } else {
                pElement.textContent = 'Pastikan nomor telepon yang dimasukkan sesuai dengan format internasional (+62xxxxxx)'; 
                pElement.classList.add('text-red-900');
                pElement.classList.remove('text-green-500');
            }
        }
    });
});
