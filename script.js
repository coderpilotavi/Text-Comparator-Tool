function clearTexts() {
    document.getElementById('box1').innerHTML = '';
    document.getElementById('box2').innerHTML = '';
  }
  
  function switchTexts() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const temp = box1.innerHTML;
    box1.innerHTML = box2.innerHTML;
    box2.innerHTML = temp;
  }
  
  function compareTexts() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
  
    const text1 = box1.innerText.trim();
    const text2 = box2.innerText.trim();
  
    const dmp = new diff_match_patch();
    const diffs = dmp.diff_main(text1, text2);
    dmp.diff_cleanupSemantic(diffs);
  

    let html1 = '';
    let html2 = '';
  
    for (const [op, data] of diffs) {
      if (op === 0) {
        
        html1 += data;
        html2 += data;
      } else if (op === -1) {
        
        html1 += `<span class="diff">${data}</span>`;
      } else if (op === 1) {
        
        html2 += `<span class="diff">${data}</span>`;
      }
    }
  
    box1.innerHTML = html1;
    box2.innerHTML = html2;
  }
  