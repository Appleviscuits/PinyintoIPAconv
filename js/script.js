const pinyinInput = document.getElementById('pinyin-input');
const convertBtn = document.getElementById('convert-btn');
const ipaOutput = document.getElementById('ipa-output');

convertBtn.addEventListener('click', () => {
  const pinyin = pinyinInput.value;
  fetch(`/convert?pinyin=${pinyin}`)
    .then(response => response.text())
    .then(ipa => {
      ipaOutput.textContent = ipa;
    })
    .catch(error => {
      console.error('Error:', error);
      ipaOutput.textContent = 'Error converting pinyin to IPA';
    });
});