function calculateBasic() {
      const a = parseFloat(document.getElementById('basicA').value);
      const b = parseFloat(document.getElementById('basicB').value);
      document.getElementById('basicResult').innerText = `Add: ${a + b}, Sub: ${a - b}, Mul: ${a * b}, Div: ${b ? (a / b).toFixed(2) : '∞'}`;
    }

    function calculateProfit() {
      const cost = parseFloat(document.getElementById('costPrice').value);
      const price = parseFloat(document.getElementById('sellingPrice').value);
      const profit = price - cost;
      const margin = ((profit / cost) * 100).toFixed(2);
      document.getElementById('profitResult').innerText = `Profit: ₹${profit}, Margin: ${margin}%`;
    }

    function calculateGST() {
      const amount = parseFloat(document.getElementById('gstAmount').value);
      const percent = parseFloat(document.getElementById('gstPercent').value);
      const gst = ((amount * percent) / 100).toFixed(2);
      const total = (amount + parseFloat(gst)).toFixed(2);
      document.getElementById('gstResult').innerText = `GST: ₹${gst}, Total: ₹${total}`;
    }

    function calculateLoan() {
      const p = parseFloat(document.getElementById('loanPrincipal').value);
      const r = parseFloat(document.getElementById('loanRate').value) / 1200;
      const t = parseFloat(document.getElementById('loanTime').value) * 12;
      const emi = ((p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1)).toFixed(2);
      document.getElementById('loanResult').innerText = `Monthly EMI: ₹${emi}`;
    }

    function calculateDiscount() {
      const price = parseFloat(document.getElementById('discountPrice').value);
      const percent = parseFloat(document.getElementById('discountPercent').value);
      const discount = (price * percent / 100).toFixed(2);
      const final = (price - discount).toFixed(2);
      document.getElementById('discountResult').innerText = `Discount: ₹${discount}, Final Price: ₹${final}`;
    }